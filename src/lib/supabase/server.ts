// src/lib/supabase/server.ts
// Usar en Server Components, Route Handlers y middleware
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Server Component — ignorar errores de escritura
          }
        },
      },
    }
  );
}

// Helper: devuelve el tier del usuario actual o null si no hay sesión
export type UserTier = "streetborn" | "highborn" | "crownbound" | null;

export async function getUserTier(): Promise<UserTier> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("tier")
    .eq("id", user.id)
    .single();

  return (profile?.tier as UserTier) ?? "streetborn";
}
