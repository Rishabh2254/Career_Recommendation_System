"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ArrowRight, MessageSquare, Video } from "lucide-react"
import Link from "next/link"

export default function AIConsultation() {
  const [consultationStep, setConsultationStep] = useState(1)
  const [preferences, setPreferences] = useState({
    interests: "",
    strengths: "",
    workStyle: "",
    goals: "",
  })
  const [isVideoMode, setIsVideoMode] = useState(false)
  const [isConsultationStarted, setIsConsultationStarted] = useState(false)

  const handleInputChange = (field, value) => {
    setPreferences((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const startConsultation = () => {
    setIsConsultationStarted(true)
  }

  const nextStep = () => {
    setConsultationStep((prev) => Math.min(prev + 1, 4))
  }

  const prevStep = () => {
    setConsultationStep((prev) => Math.max(prev - 1, 1))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">AI Career Consultation</h1>
        <p className="text-xl text-gray-600 mb-8">
          Get personalized career guidance based on your interests, strengths, and goals.
        </p>

        {!isConsultationStarted ? (
          <Card>
            <CardHeader>
              <CardTitle>Choose Your Consultation Mode</CardTitle>
              <CardDescription>Select how you'd like to interact with our AI career advisor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div
                  className={`border rounded-lg p-6 cursor-pointer transition-all ${
                    !isVideoMode ? "border-purple-500 bg-purple-50" : "border-gray-200 hover:border-purple-300"
                  }`}
                  onClick={() => setIsVideoMode(false)}
                >
                  <div className="flex justify-center mb-4">
                    <MessageSquare className="h-12 w-12 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">Chat Consultation</h3>
                  <p className="text-gray-600 text-center">Text-based interaction with our AI career advisor</p>
                </div>

                <div
                  className={`border rounded-lg p-6 cursor-pointer transition-all ${
                    isVideoMode ? "border-purple-500 bg-purple-50" : "border-gray-200 hover:border-purple-300"
                  }`}
                  onClick={() => setIsVideoMode(true)}
                >
                  <div className="flex justify-center mb-4">
                    <Video className="h-12 w-12 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">Video Consultation</h3>
                  <p className="text-gray-600 text-center">Face-to-face interaction with our AI career advisor</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button onClick={startConsultation} size="lg">
                  Start Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div>
            {isVideoMode ? (
              <VideoConsultation preferences={preferences} />
            ) : (
              <div>
                <Tabs value={`step-${consultationStep}`} className="w-full">
                  <TabsList className="grid grid-cols-4 mb-8">
                    <TabsTrigger value="step-1" onClick={() => setConsultationStep(1)}>
                      Interests
                    </TabsTrigger>
                    <TabsTrigger value="step-2" onClick={() => setConsultationStep(2)}>
                      Strengths
                    </TabsTrigger>
                    <TabsTrigger value="step-3" onClick={() => setConsultationStep(3)}>
                      Work Style
                    </TabsTrigger>
                    <TabsTrigger value="step-4" onClick={() => setConsultationStep(4)}>
                      Goals
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="step-1">
                    <Card>
                      <CardHeader>
                        <CardTitle>Tell us about your interests</CardTitle>
                        <CardDescription>What tech areas or activities do you enjoy the most?</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Textarea
                          placeholder="I enjoy solving problems, building websites, analyzing data..."
                          className="min-h-[150px] mb-6"
                          value={preferences.interests}
                          onChange={(e) => handleInputChange("interests", e.target.value)}
                        />
                        <div className="flex justify-end">
                          <Button onClick={nextStep}>
                            Next Step
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="step-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>What are your strengths?</CardTitle>
                        <CardDescription>What skills or abilities do you excel at?</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Textarea
                          placeholder="I'm good at problem-solving, attention to detail, communication..."
                          className="min-h-[150px] mb-6"
                          value={preferences.strengths}
                          onChange={(e) => handleInputChange("strengths", e.target.value)}
                        />
                        <div className="flex justify-between">
                          <Button variant="outline" onClick={prevStep}>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Previous
                          </Button>
                          <Button onClick={nextStep}>
                            Next Step
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="step-3">
                    <Card>
                      <CardHeader>
                        <CardTitle>Describe your ideal work style</CardTitle>
                        <CardDescription>
                          Do you prefer working independently or in teams? Fast-paced or methodical?
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Textarea
                          placeholder="I prefer collaborative environments, enjoy structured work..."
                          className="min-h-[150px] mb-6"
                          value={preferences.workStyle}
                          onChange={(e) => handleInputChange("workStyle", e.target.value)}
                        />
                        <div className="flex justify-between">
                          <Button variant="outline" onClick={prevStep}>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Previous
                          </Button>
                          <Button onClick={nextStep}>
                            Next Step
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="step-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>What are your career goals?</CardTitle>
                        <CardDescription>What do you hope to achieve in your tech career?</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Textarea
                          placeholder="I want to become a senior developer, start my own tech company..."
                          className="min-h-[150px] mb-6"
                          value={preferences.goals}
                          onChange={(e) => handleInputChange("goals", e.target.value)}
                        />
                        <div className="flex justify-between">
                          <Button variant="outline" onClick={prevStep}>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Previous
                          </Button>
                          <Button onClick={() => setConsultationStep(5)} className="bg-purple-600 hover:bg-purple-700">
                            Get Recommendations
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                {consultationStep === 5 && <AIRecommendations preferences={preferences} />}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function VideoConsultation({ preferences }) {
  const [isCallActive, setIsCallActive] = useState(false)

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Video Consultation</CardTitle>
        <CardDescription>Face-to-face interaction with our AI career advisor</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-video bg-gray-900 rounded-lg mb-6 flex items-center justify-center">
          {!isCallActive ? (
            <div className="text-center text-white">
              <Video className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg mb-4">Your AI career advisor is ready to meet with you</p>
              <Button onClick={() => setIsCallActive(true)}>Start Video Call</Button>
            </div>
          ) : (
            <div className="w-full h-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="AI Advisor"
                  className="max-w-full max-h-full rounded-lg"
                />
              </div>
              <div className="absolute bottom-4 right-4 w-32 h-24 bg-gray-800 rounded-lg border-2 border-white overflow-hidden">
                <img src="/placeholder.svg?height=100&width=150" alt="You" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 rounded-full p-3">
                <Button
                  variant="destructive"
                  size="icon"
                  className="rounded-full"
                  onClick={() => setIsCallActive(false)}
                >
                  <Video className="h-6 w-6" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function AIRecommendations({ preferences }) {
  // In a real application, this would use AI to generate recommendations
  // based on the user's preferences

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Your Personalized Career Recommendations</CardTitle>
        <CardDescription>Based on your interests, strengths, work style, and goals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Primary Career Path Recommendation</h3>
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <h4 className="text-xl font-bold text-purple-800 mb-2">Software Development</h4>
              <p className="text-gray-700 mb-4">
                Based on your interests in problem-solving and building things, combined with your analytical strengths,
                software development appears to be an excellent fit for your profile.
              </p>
              <Button asChild>
                <Link href="/career-explorer/software-development">
                  Explore This Path
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Alternative Paths to Consider</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-bold mb-1">Data Science</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Your analytical skills and interest in problem-solving would transfer well to data science.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/career-explorer/data-science">Learn More</Link>
                </Button>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-bold mb-1">DevOps Engineering</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Your methodical work style and technical interests align well with DevOps practices.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/career-explorer/devops">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Personalized Learning Plan</h3>
            <div className="p-4 border rounded-lg">
              <ol className="space-y-4 list-decimal list-inside">
                <li className="pl-2">
                  <span className="font-medium">Start with fundamentals:</span>
                  <p className="text-gray-600 ml-6 mt-1">
                    Focus on JavaScript, HTML/CSS, and basic programming concepts
                  </p>
                </li>
                <li className="pl-2">
                  <span className="font-medium">Build practical projects:</span>
                  <p className="text-gray-600 ml-6 mt-1">
                    Create a portfolio of small applications to demonstrate your skills
                  </p>
                </li>
                <li className="pl-2">
                  <span className="font-medium">Learn a framework:</span>
                  <p className="text-gray-600 ml-6 mt-1">
                    Based on your interests, React would be a good starting point
                  </p>
                </li>
                <li className="pl-2">
                  <span className="font-medium">Expand your knowledge:</span>
                  <p className="text-gray-600 ml-6 mt-1">
                    Add backend skills with Node.js to become a full-stack developer
                  </p>
                </li>
              </ol>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button asChild size="lg">
              <Link href="/career-explorer">Explore All Career Paths</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

