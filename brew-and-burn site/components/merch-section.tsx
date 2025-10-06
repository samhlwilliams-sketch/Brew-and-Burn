import Image from "next/image"

export function MerchSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 border-4 border-primary/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
                  Coming Soon
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Brew & Burn Merch</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">Keep your eyes peeled 👀</p>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#D4C4B0]">
                  <Image
                    src="/merch-tshirt.png"
                    alt="Brew & Burn merchandise t-shirt"
                    fill
                    className="object-contain p-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
