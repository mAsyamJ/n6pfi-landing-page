import { Twitter, Linkedin, Github } from "lucide-react"

export default function FooterSection() {
  return (
    <div className="w-full pt-10 flex flex-col justify-start items-start border-t border-[rgba(147,51,234,0.1)]">
      {/* Main Footer Content */}
      <div className="self-stretch h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0">
        <div className="h-auto p-4 md:p-8 flex flex-col justify-start items-start gap-8">
          {/* Brand Section */}
          <div className="self-stretch flex justify-start items-center gap-3">
            <div className="text-center text-[#f0f0f0] text-xl font-semibold leading-4 font-sans">NapFi</div>
          </div>
          <div className="text-[#c0c0c0] text-sm font-medium leading-[18px] font-sans">
            AI Yield Aggregator for Creators
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-start items-start gap-4">
            {/* Twitter/X Icon */}
            <div className="w-6 h-6 relative overflow-hidden">
              <div className="w-6 h-6 left-0 top-0 absolute flex items-center justify-center">
                <Twitter className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* LinkedIn Icon */}
            <div className="w-6 h-6 relative overflow-hidden">
              <div className="w-6 h-6 left-0 top-0 absolute flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* GitHub Icon */}
            <div className="w-6 h-6 relative overflow-hidden">
              <div className="w-6 h-6 left-0 top-0 absolute flex items-center justify-center">
                <Github className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="self-stretch p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-8">
          {/* Product Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="self-stretch text-[#a0a0a0] text-sm font-medium leading-5 font-sans">Product</div>
            <div className="flex flex-col justify-end items-start gap-2">
              <div className="text-[#c0c0c0] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#f0f0f0] transition-colors">
                Features
              </div>
              <div className="text-[#c0c0c0] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#f0f0f0] transition-colors">
                Pricing
              </div>
              <div className="text-[#c0c0c0] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#f0f0f0] transition-colors">
                SDK
              </div>
              <div className="text-[#c0c0c0] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#f0f0f0] transition-colors">
                Roadmap
              </div>
              <div className="text-[#c0c0c0] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#f0f0f0] transition-colors">
                Whitepaper
              </div>
            </div>
          </div>

          {/* Company Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-[#a0a0a0] text-sm font-medium leading-5 font-sans">Company</div>
            <div className="flex flex-col justify-center items-start gap-2">
              <div className="text-[#c0c0c0] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#f0f0f0] transition-colors">
                About
              </div>
              <div className="text-[#c0c0c0] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#f0f0f0] transition-colors">
                Team
              </div>
              <div className="text-[#c0c0c0] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#f0f0f0] transition-colors">
                Blog
              </div>
              <div className="text-[#c0c0c0] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#f0f0f0] transition-colors">
                Careers
              </div>
              <div className="text-[#c0c0c0] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#f0f0f0] transition-colors">
                Contact
              </div>
            </div>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-[#a0a0a0] text-sm font-medium leading-5 font-sans">Resources</div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="self-stretch text-[#c0c0c0] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#f0f0f0] transition-colors">
                Terms
              </div>
              <div className="self-stretch text-[#c0c0c0] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#f0f0f0] transition-colors">
                API Docs
              </div>
              <div className="self-stretch text-[#c0c0c0] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#f0f0f0] transition-colors">
                Guides
              </div>
              <div className="self-stretch text-[#c0c0c0] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#f0f0f0] transition-colors">
                Community
              </div>
              <div className="self-stretch text-[#c0c0c0] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#f0f0f0] transition-colors">
                Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Pattern */}
      <div className="self-stretch h-12 relative overflow-hidden border-t border-b border-[rgba(147,51,234,0.1)]">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative">
            {Array.from({ length: 400 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-[300px] h-16 border border-[rgba(147,51,234,0.08)]"
                style={{
                  left: `${i * 300 - 600}px`,
                  top: "-120px",
                  transform: "rotate(-45deg)",
                  transformOrigin: "top left",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
