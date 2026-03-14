"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import type { User, AuthChangeEvent, Session } from "@supabase/supabase-js";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const supabase = useMemo(() => {
    try {
      return createClient();
    } catch {
      return null;
    }
  }, []);

  const isOwner = user?.email === process.env.NEXT_PUBLIC_OWNER_EMAIL;

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    const client = supabase;

    // 初期状態の取得
    const initAuth = async () => {
      const { data } = await client.auth.getUser();
      setUser(data.user);
      setLoading(false);
    };
    initAuth();

    // 認証状態の変更を監視
    const handleAuthChange = (
      _event: AuthChangeEvent,
      session: Session | null
    ) => {
      setUser(session?.user ?? null);
      setLoading(false);
    };

    const {
      data: { subscription },
    } = client.auth.onAuthStateChange(handleAuthChange);

    return () => subscription.unsubscribe();
  }, [supabase]);

  const signIn = useCallback(
    async (email: string, password: string) => {
      if (!supabase) {
        return { error: new Error("Supabase not configured") };
      }
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      return { error };
    },
    [supabase]
  );

  const signOut = useCallback(async () => {
    if (!supabase) {
      return { error: new Error("Supabase not configured") };
    }
    const { error } = await supabase.auth.signOut();
    return { error };
  }, [supabase]);

  return { user, isOwner, loading, signIn, signOut };
}
