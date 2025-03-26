"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, BookOpen, Calendar, ChevronRight, Download, Video } from "lucide-react"

// Career data mapping
const careerData = {
  "software-development": {
    title: "Software Development",
    description:
      "Software developers create applications and systems that power the modern world, from mobile apps to enterprise software.",
    overview:
      "Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components.",
    marketDemand: 85,
    salaryRange: "$70,000 - $150,000",
    growthRate: "22% (Much faster than average)",
    keySkills: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "React", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Git", level: 70 },
      { name: "SQL", level: 65 },
    ],
    roadmap: [
      {
        stage: "Beginner",
        duration: "3-6 months",
        skills: ["HTML/CSS", "JavaScript Basics", "Git Fundamentals", "Basic Data Structures"],
        resources: [
          { name: "freeCodeCamp Web Development", type: "Course" },
          { name: "The Odin Project", type: "Course" },
          { name: "JavaScript.info", type: "Documentation" },
        ],
      },
      {
        stage: "Intermediate",
        duration: "6-12 months",
        skills: ["React/Vue/Angular", "Node.js", "RESTful APIs", "SQL Databases"],
        resources: [
          { name: "Full Stack Open", type: "Course" },
          { name: "React Documentation", type: "Documentation" },
          { name: "Node.js in Action", type: "Book" },
        ],
      },
      {
        stage: "Advanced",
        duration: "12+ months",
        skills: ["System Design", "Testing", "CI/CD", "Cloud Services", "Performance Optimization"],
        resources: [
          { name: "System Design Interview", type: "Book" },
          { name: "Testing JavaScript", type: "Course" },
          { name: "AWS Certified Developer", type: "Certification" },
        ],
      },
    ],
  },
  "data-science": {
    title: "Data Science",
    description:
      "Data scientists extract insights and knowledge from structured and unstructured data using scientific methods, processes, algorithms, and systems.",
    overview:
      "Data science combines domain expertise, programming skills, and knowledge of mathematics and statistics to extract meaningful insights from data. Data scientists analyze complex data to help organizations make informed decisions.",
    marketDemand: 90,
    salaryRange: "$85,000 - $165,000",
    growthRate: "31% (Much faster than average)",
    keySkills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 85 },
      { name: "Statistics", level: 90 },
      { name: "Machine Learning", level: 80 },
      { name: "Data Visualization", level: 75 },
      { name: "Big Data Tools", level: 70 },
    ],
    roadmap: [
      {
        stage: "Beginner",
        duration: "3-6 months",
        skills: ["Python Basics", "Statistics Fundamentals", "SQL Basics", "Data Manipulation"],
        resources: [
          { name: "DataCamp Python for Data Science", type: "Course" },
          { name: "Khan Academy Statistics", type: "Course" },
          { name: "SQL for Data Science", type: "Course" },
        ],
      },
      {
        stage: "Intermediate",
        duration: "6-12 months",
        skills: ["Machine Learning Basics", "Data Visualization", "Feature Engineering", "Pandas & NumPy"],
        resources: [
          { name: "Machine Learning by Andrew Ng", type: "Course" },
          { name: "Python for Data Analysis", type: "Book" },
          { name: "Kaggle Competitions", type: "Practice" },
        ],
      },
      {
        stage: "Advanced",
        duration: "12+ months",
        skills: ["Deep Learning", "Natural Language Processing", "Big Data Technologies", "Model Deployment"],
        resources: [
          { name: "Deep Learning Specialization", type: "Course" },
          { name: "Natural Language Processing with Python", type: "Book" },
          { name: "Spark for Big Data Analysis", type: "Course" },
        ],
      },
    ],
  },
  // Other career paths would be defined similarly
}

export default function CareerDetail({ params }) {
  const { career } = params
  const [activeRoadmapStage, setActiveRoadmapStage] = useState("Beginner")

  // Fallback for undefined career paths
  const careerInfo = careerData[career] || {
    title: "Career Path",
    description: "Detailed information about this career path.",
    overview: "This career path is not fully defined yet.",
    marketDemand: 50,
    salaryRange: "Varies",
    growthRate: "Average",
    keySkills: [],
    roadmap: [],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/career-explorer">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Career Explorer
          </Link>
        </Button>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{careerInfo.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{careerInfo.description}</p>

        <Tabs defaultValue="overview" className="w-full mb-12">
          <TabsList className="w-full justify-start overflow-x-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="skills">Required Skills</TabsTrigger>
            <TabsTrigger value="roadmap">Learning Roadmap</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Career Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{careerInfo.overview}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Market Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Market Demand</span>
                      <span className="text-sm font-medium">{careerInfo.marketDemand}%</span>
                    </div>
                    <Progress value={careerInfo.marketDemand} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="font-medium">Salary Range</span>
                    <span>{careerInfo.salaryRange}</span>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <span className="font-medium">Growth Rate</span>
                    <span>{careerInfo.growthRate}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild className="flex-1">
                <Link href="/ai-consultation">
                  <Video className="mr-2 h-4 w-4" />
                  Get Personalized AI Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <Link href={`/career-explorer/${career}/roadmap`}>
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Detailed Roadmap
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Skills Required</CardTitle>
                <CardDescription>
                  These are the most important skills to develop for a career in {careerInfo.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {careerInfo.keySkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm font-medium">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="roadmap" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Learning Roadmap</CardTitle>
                <CardDescription>
                  Follow this roadmap to develop the skills needed for a career in {careerInfo.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {careerInfo.roadmap.map((stage, index) => (
                    <div
                      key={index}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        activeRoadmapStage === stage.stage
                          ? "border-purple-500 bg-purple-50"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                      onClick={() => setActiveRoadmapStage(stage.stage)}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">{stage.stage}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {stage.duration}
                        </div>
                      </div>

                      {activeRoadmapStage === stage.stage && (
                        <div className="mt-4 space-y-4">
                          <div>
                            <h4 className="text-sm font-medium text-gray-500 mb-2">Skills to Learn:</h4>
                            <div className="flex flex-wrap gap-2">
                              {stage.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium text-gray-500 mb-2">Recommended Resources:</h4>
                            <ul className="space-y-2">
                              {stage.resources.map((resource, resourceIndex) => (
                                <li key={resourceIndex} className="flex justify-between">
                                  <span>{resource.name}</span>
                                  <span className="text-sm text-gray-500">{resource.type}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {activeRoadmapStage !== stage.stage && (
                        <div className="flex justify-end">
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button asChild>
                    <Link href={`/career-explorer/${career}/roadmap`}>
                      <Download className="mr-2 h-4 w-4" />
                      Download Full Roadmap
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center p-3 border-b">
                      <div>
                        <div className="font-medium">Online Courses</div>
                        <div className="text-sm text-gray-500">Structured learning paths</div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </li>
                    <li className="flex justify-between items-center p-3 border-b">
                      <div>
                        <div className="font-medium">Books & Documentation</div>
                        <div className="text-sm text-gray-500">In-depth knowledge</div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </li>
                    <li className="flex justify-between items-center p-3">
                      <div>
                        <div className="font-medium">Practice Projects</div>
                        <div className="text-sm text-gray-500">Hands-on experience</div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Industry Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center p-3 border-b">
                      <div>
                        <div className="font-medium">Entry-Level Certifications</div>
                        <div className="text-sm text-gray-500">For beginners</div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </li>
                    <li className="flex justify-between items-center p-3 border-b">
                      <div>
                        <div className="font-medium">Professional Certifications</div>
                        <div className="text-sm text-gray-500">For experienced professionals</div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </li>
                    <li className="flex justify-between items-center p-3">
                      <div>
                        <div className="font-medium">Specialized Certifications</div>
                        <div className="text-sm text-gray-500">For specific technologies</div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

