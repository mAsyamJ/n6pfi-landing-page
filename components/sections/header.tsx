import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full border-b border-[#37322f]/6 bg-[#f7f5f3]">
      <div className="max-w-[1060px] mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <div className="text-[#37322f] font-semibold text-lg">Brillance</div>
            <div className="hidden md:flex items-center space-x-6">
            </div>
          </div>
          <Button variant="ghost" className="text-[#37322f] hover:bg-[#37322f]/5">
            <a
                        href="https://napfi-zenith.vercel.app"
                        target="_blank" // hapus kalau mau tetap di tab yang sama
                        className="flex flex-col justify-center text-[#0a0a14] text-xs md:text-[13px] font-medium leading-5 font-sans hover:underline cursor-pointer"
                      >
                        APP
                      </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
