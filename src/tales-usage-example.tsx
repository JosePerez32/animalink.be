// Ejemplo de uso en /universe/tales/page.tsx
// Muestra cómo integrar getUserTier() + TierGate en una página real

import { getUserTier } from "@/lib/supabase/server";
import { TierGate } from "@/components/auth/TierGate";

// Ejemplo de tale bloqueada — así envuelves cualquier contenido:
export default async function TalesPage() {
  // 1. Leer el tier en el servidor (sin useEffect, sin loading spinner)
  const userTier = await getUserTier();

  return (
    <>
      {/* Tales libres — siempre visibles */}
      <FreeTaleCard />
      <FreeTaleCard />
      <FreeTaleCard />

      {/* Tale bloqueada para Highborn+ */}
      <TierGate
        requiredTier="highborn"
        userTier={userTier}
        mode="hidden"
      >
        <LockedTaleCard title="Exclusive Highborn tale" />
      </TierGate>

      {/* Tale bloqueada solo para Crownbound */}
      <TierGate
        requiredTier="crownbound"
        userTier={userTier}
        mode="blur"   // muestra el contenido difuminado detrás
      >
        <LockedTaleCard title="Crown Vault tale" />
      </TierGate>
    </>
  );
}

// Componentes placeholder — reemplazar con los reales
function FreeTaleCard() {
  return <div className="bg-card border border-rim rounded-2xl p-6 mb-4">Free tale content</div>;
}
function LockedTaleCard({ title }: { title: string }) {
  return <div className="bg-card border border-rim rounded-2xl p-6 mb-4">{title}</div>;
}
