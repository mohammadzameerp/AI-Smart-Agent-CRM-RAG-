'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Code, Download, Eye, Sparkles } from 'lucide-react'

export function ProductBuilder() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedCode, setGeneratedCode] = useState('')

  const templates = [
    {
      id: 'coaching',
      name: 'Coaching Institute',
      description: 'Complete website for coaching centers with course management',
      features: ['Course Listings', 'Student Portal', 'Fee Management', 'Results Display'],
      preview: '/placeholder.svg?height=200&width=300&text=Coaching+Website'
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Store',
      description: 'Modern online store with payment integration',
      features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Management'],
      preview: '/placeholder.svg?height=200&width=300&text=E-commerce+Store'
    },
    {
      id: 'corporate',
      name: 'Corporate Website',
      description: 'Professional business website with CRM integration',
      features: ['Company Profile', 'Services', 'Contact Forms', 'Team Pages'],
      preview: '/placeholder.svg?height=200&width=300&text=Corporate+Website'
    },
    {
      id: 'restaurant',
      name: 'Restaurant Website',
      description: 'Food business website with online ordering',
      features: ['Menu Display', 'Online Ordering', 'Reservations', 'Gallery'],
      preview: '/placeholder.svg?height=200&width=300&text=Restaurant+Website'
    }
  ]

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    
    setIsGenerating(true)
    
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedCode(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${prompt}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .header { background: #333; color: white; padding: 1rem; text-align: center; }
        .container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
        .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 4rem 2rem; text-align: center; }
        .features { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 2rem 0; }
        .feature-card { background: #f4f4f4; padding: 2rem; border-radius: 8px; }
        .footer { background: #333; color: white; padding: 2rem; text-align: center; }
    </style>
</head>
<body>
    <header class="header">
        <h1>${prompt}</h1>
    </header>
    
    <section class="hero">
        <h2>Welcome to ${prompt}</h2>
        <p>Your trusted partner for quality education and success</p>
        <button style="background: white; color: #333; padding: 1rem 2rem; border: none; border-radius: 5px; margin-top: 1rem; cursor: pointer;">Get Started</button>
    </section>
    
    <div class="container">
        <section class="features">
            <div class="feature-card">
                <h3>Expert Faculty</h3>
                <p>Learn from experienced professionals with proven track records</p>
            </div>
            <div class="feature-card">
                <h3>Comprehensive Courses</h3>
                <p>Complete curriculum designed for competitive exam success</p>
            </div>
            <div class="feature-card">
                <h3>Modern Facilities</h3>
                <p>State-of-the-art classrooms and learning resources</p>
            </div>
        </section>
    </div>
    
    <footer class="footer">
        <p>&copy; 2024 ${prompt}. All rights reserved.</p>
    </footer>
</body>
</html>`)
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="generator" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="generator">AI Generator</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>
        
        <TabsContent value="generator" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-yellow-500" />
                AI Website Generator
              </CardTitle>
              <CardDescription>
                Describe your website requirements and let Ammar generate it for you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Website Description</label>
                <Textarea
                  placeholder="e.g., Create a coaching center website for IIT preparation in Hyderabad with course listings, faculty profiles, and student portal"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={4}
                />
              </div>
              
              <div className="flex gap-2">
                <Button 
                  onClick={handleGenerate} 
                  disabled={isGenerating || !prompt.trim()}
                  className="flex-1"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Code className="h-4 w-4 mr-2" />
                      Generate Website
                    </>
                  )}
                </Button>
              </div>
              
              {generatedCode && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Generated Code</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Preview
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto max-h-96">
                    <pre className="text-sm">{generatedCode}</pre>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="templates" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {templates.map((template) => (
              <Card key={template.id}>
                <CardHeader>
                  <img 
                    src={template.preview || "/placeholder.svg"} 
                    alt={template.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle>{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {template.features.map((feature, index) => (
                      <Badge key={index} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                    <Button size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-1" />
                      Use Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
