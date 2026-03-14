import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--color-background)] px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-xl font-bold text-center mb-8 text-[var(--color-text)]">
          ログイン
        </h1>
        <LoginForm />
      </div>
    </main>
  );
}
