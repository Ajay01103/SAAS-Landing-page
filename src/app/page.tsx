import { LogoGrid } from "@/components/logo-grid"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProductShowcase } from "@/components/product-showcase"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoGrid />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}
