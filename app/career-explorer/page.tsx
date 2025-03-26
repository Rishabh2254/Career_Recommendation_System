import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Search, Briefcase, Code, Database, Server, LineChart, Brain } from "lucide-react"

export default function CareerExplorer() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Career Explorer</h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover and explore various tech career paths to find the perfect fit for your skills and interests.
        </p>

        {/* Search and Filter */}
        <div className="mb-10">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input placeholder="Search career paths, skills, or roles..." className="pl-10" />
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="all">All Paths</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="data">Data</TabsTrigger>
              <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
              <TabsTrigger value="ai-ml">AI & ML</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <CareerCard
                  icon={<Code />}
                  title="Software Development"
                  description="Build applications and systems that power the modern world."
                  skills={["JavaScript", "Python", "React", "Node.js"]}
                  path="/career-explorer/software-development"
                />
                <CareerCard
                  icon={<Database />}
                  title="Data Science"
                  description="Extract insights and knowledge from structured and unstructured data."
                  skills={["Python", "SQL", "Statistics", "Data Visualization"]}
                  path="/career-explorer/data-science"
                />
                <CareerCard
                  icon={<Server />}
                  title="DevOps Engineering"
                  description="Bridge development and operations to improve deployment efficiency."
                  skills={["Docker", "Kubernetes", "CI/CD", "Cloud Platforms"]}
                  path="/career-explorer/devops"
                />
                <CareerCard
                  icon={<Brain />}
                  title="Machine Learning"
                  description="Create systems that can learn and improve from experience."
                  skills={["Python", "TensorFlow", "PyTorch", "Mathematics"]}
                  path="/career-explorer/machine-learning"
                />
                <CareerCard
                  icon={<LineChart />}
                  title="Data Analytics"
                  description="Transform raw data into actionable business insights."
                  skills={["SQL", "Excel", "Tableau", "Power BI"]}
                  path="/career-explorer/data-analytics"
                />
                <CareerCard
                  icon={<Briefcase />}
                  title="Product Management"
                  description="Guide the development of products from conception to launch."
                  skills={["Agile", "User Research", "Strategy", "Communication"]}
                  path="/career-explorer/product-management"
                />
              </div>
            </TabsContent>

            <TabsContent value="development" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <CareerCard
                  icon={<Code />}
                  title="Frontend Development"
                  description="Create user interfaces and experiences for web applications."
                  skills={["HTML/CSS", "JavaScript", "React", "UI/UX"]}
                  path="/career-explorer/frontend-development"
                />
                <CareerCard
                  icon={<Code />}
                  title="Backend Development"
                  description="Build server-side logic and APIs that power applications."
                  skills={["Node.js", "Python", "Java", "Databases"]}
                  path="/career-explorer/backend-development"
                />
                <CareerCard
                  icon={<Code />}
                  title="Mobile Development"
                  description="Create applications for iOS, Android, and cross-platform."
                  skills={["Swift", "Kotlin", "React Native", "Flutter"]}
                  path="/career-explorer/mobile-development"
                />
              </div>
            </TabsContent>

            {/* Other tab contents would be similar */}
            <TabsContent value="data" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <CareerCard
                  icon={<Database />}
                  title="Data Science"
                  description="Extract insights and knowledge from structured and unstructured data."
                  skills={["Python", "SQL", "Statistics", "Data Visualization"]}
                  path="/career-explorer/data-science"
                />
                <CareerCard
                  icon={<LineChart />}
                  title="Data Analytics"
                  description="Transform raw data into actionable business insights."
                  skills={["SQL", "Excel", "Tableau", "Power BI"]}
                  path="/career-explorer/data-analytics"
                />
                <CareerCard
                  icon={<Database />}
                  title="Data Engineering"
                  description="Build systems to collect, store, and process large datasets."
                  skills={["SQL", "Python", "ETL", "Big Data"]}
                  path="/career-explorer/data-engineering"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

function CareerCard({ icon, title, description, skills, path }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <div className="text-purple-600">{icon}</div>
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-500 mb-2">Key Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <Button asChild variant="outline" className="w-full">
          <Link href={path}>
            Explore Career Path
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

