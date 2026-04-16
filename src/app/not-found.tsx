import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center max-w-md">
        <p className="font-mono text-8xl font-bold text-border mb-4">404</p>
        <h1 className="font-display font-bold text-2xl text-text-main mb-3">
          Página não encontrada
        </h1>
        <p className="text-text-muted mb-8">
          O conteúdo que você procura não existe ou foi movido.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-medium text-sm hover:bg-[#0c6578] transition-colors"
        >
          <ArrowLeft size={15} />
          Voltar ao início
        </Link>
      </div>
    </div>
  )
}
