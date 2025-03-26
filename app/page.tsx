import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Compass, Video } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r bg-[#191936] text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Your Perfect Tech Career Path</h1>
            <p className="text-xl md:text-2xl mb-8">
              AI-powered guidance to help you navigate your tech career journey with confidence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-800 hover:bg-gray-100">
                <Link href="/career-explorer">
                  Explore Careers <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/ai-consultation">
                  Get AI Consultation <Video className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How Our Career Mapping Tool Helps You</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Video className="h-10 w-10 text-purple-600" />}
              title="AI Video Consultations"
              description="Connect with our AI for personalized career guidance through interactive video sessions."
            />
            <FeatureCard
              icon={<Compass className="h-10 w-10 text-purple-600" />}
              title="Career Path Exploration"
              description="Discover various tech career paths with detailed insights on required skills and opportunities."
            />
            <FeatureCard
              icon={<BookOpen className="h-10 w-10 text-purple-600" />}
              title="Learning Roadmaps"
              description="Get customized learning plans based on your interests, skills, and career goals."
            />
          </div>
        </div>
      </section>

      {/* Career Paths Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Explore Tech Career Paths</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CareerPathCard
              title="Software Development"
              description="Build applications and systems that power the modern world."
              path="/career-explorer/software-development"
            />
            <CareerPathCard
              title="Data Science"
              description="Extract insights and knowledge from structured and unstructured data."
              path="/career-explorer/data-science"
            />
            <CareerPathCard
              title="DevOps Engineering"
              description="Bridge development and operations to improve deployment efficiency."
              path="/career-explorer/devops"
            />
            <CareerPathCard
              title="Machine Learning"
              description="Create systems that can learn and improve from experience."
              path="/career-explorer/machine-learning"
            />
            <CareerPathCard
              title="Data Analytics"
              description="Transform raw data into actionable business insights."
              path="/career-explorer/data-analytics"
            />
            <CareerPathCard
              title="Explore More"
              description="Discover additional tech career paths tailored to your interests."
              path="/career-explorer"
              isMore={true}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#191936] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Map Your Tech Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get personalized guidance and start your journey toward a fulfilling tech career today.
          </p>
          <Button asChild size="lg" className="bg-white text-purple-800 hover:bg-gray-100">
            <Link href="/ai-consultation">Start Free AI Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function CareerPathCard({ title, description, path, isMore = false }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button
          asChild
          variant={isMore ? "default" : "outline"}
          className={isMore ? "bg-purple-600 hover:bg-purple-700" : ""}
        >
          <Link href={path}>
            {isMore ? "View All Paths" : "Learn More"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

