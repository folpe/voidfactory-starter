export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-50">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-8 shadow-lg">
        <h1 className="text-2xl font-semibold tracking-tight">Next SaaS Starter</h1>
        <p className="mt-2 text-sm text-slate-300">
          Coquille minimale prête à être customisée pour ton prochain projet.
        </p>
        <p className="mt-4 text-xs text-slate-500">TODO: brancher UI, Supabase, Stripe, metrics, etc.</p>
      </div>
    </main>
  )
}
