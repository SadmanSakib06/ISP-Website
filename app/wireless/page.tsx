"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Wifi, Signal, Router, MapPin, Shield, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function WirelessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image src="/images/logo.jpeg" alt="ISP Logo" width={120} height={40} className="h-10 w-auto" />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium">
                    Services <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/fibre">Fibre</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/prepaid-fibre">Prepaid Fibre</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/wireless" className="text-orange-500 font-medium">
                      Wireless
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/hotspots">Hotspots</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/hosting">Hosting</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/devices">Devices</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/smart-homes">Smart Homes Security</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/providers" className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium">
                Providers
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium">
                    Support <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/help">Help Centre</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/status">Status Pages</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/get-help">Get Help</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/portal">
                <Button variant="outline" className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50">
                  Customer Portal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-orange-100 text-orange-800 mb-4">
              <Wifi className="w-4 h-4 mr-2" />
              Wireless Internet
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Fast Wireless Internet
              <span className="text-orange-500 block">Anywhere You Go</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience lightning-fast wireless internet with our advanced LTE and 5G networks. Perfect for homes,
              businesses, and mobile connectivity needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                View Plans
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300">
                Check Coverage
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Wireless?</h2>
            <p className="text-lg text-gray-600">Advanced technology for superior connectivity</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Signal className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle>5G & LTE Coverage</CardTitle>
                <CardDescription>Access to the latest 5G networks with extensive LTE backup coverage</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle>Lightning Fast Speeds</CardTitle>
                <CardDescription>
                  Download speeds up to 1Gbps with ultra-low latency for seamless browsing
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Router className="w-12 h-12 text-orange-500 mb-4" />
                <CardTitle>Easy Setup</CardTitle>
                <CardDescription>
                  Plug-and-play wireless routers with professional installation available
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wireless Plans</h2>
            <p className="text-lg text-gray-600">Choose the perfect plan for your needs</p>
          </div>

          <Tabs defaultValue="home" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="home">Home Plans</TabsTrigger>
              <TabsTrigger value="business">Business Plans</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Plans</TabsTrigger>
            </TabsList>

            <TabsContent value="home">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Basic Home
                      <Badge variant="secondary">Popular</Badge>
                    </CardTitle>
                    <CardDescription>Perfect for light internet usage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">
                      R299<span className="text-lg font-normal">/month</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        25Mbps Download
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        10Mbps Upload
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        100GB Data
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Free Router
                      </li>
                    </ul>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Choose Plan</Button>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-orange-500 text-white">Most Popular</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>Premium Home</CardTitle>
                    <CardDescription>Great for streaming and gaming</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">
                      R499<span className="text-lg font-normal">/month</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        100Mbps Download
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        50Mbps Upload
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        500GB Data
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Free 5G Router
                      </li>
                    </ul>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Choose Plan</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Ultra Home</CardTitle>
                    <CardDescription>Maximum speed for power users</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">
                      R799<span className="text-lg font-normal">/month</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        500Mbps Download
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        100Mbps Upload
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Unlimited Data
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Premium 5G Router
                      </li>
                    </ul>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Choose Plan</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="business">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Business Starter</CardTitle>
                    <CardDescription>Perfect for small businesses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">
                      R599<span className="text-lg font-normal">/month</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        50Mbps Download
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        25Mbps Upload
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        200GB Data
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Business Support
                      </li>
                    </ul>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Choose Plan</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Business Pro</CardTitle>
                    <CardDescription>Growing businesses need more</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">
                      R999<span className="text-lg font-normal">/month</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        200Mbps Download
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        100Mbps Upload
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        1TB Data
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Priority Support
                      </li>
                    </ul>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Choose Plan</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Business Enterprise</CardTitle>
                    <CardDescription>Maximum performance for enterprises</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">
                      R1499<span className="text-lg font-normal">/month</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        1Gbps Download
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        500Mbps Upload
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Unlimited Data
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        24/7 Dedicated Support
                      </li>
                    </ul>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Choose Plan</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="mobile">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Mobile Basic</CardTitle>
                    <CardDescription>Stay connected on the go</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">
                      R199<span className="text-lg font-normal">/month</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        20Mbps Speed
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        20GB Data
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Mobile Hotspot
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Free SIM Card
                      </li>
                    </ul>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Choose Plan</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Mobile Plus</CardTitle>
                    <CardDescription>More data for heavy users</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">
                      R349<span className="text-lg font-normal">/month</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        50Mbps Speed
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        100GB Data
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Mobile Hotspot
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        5G Access
                      </li>
                    </ul>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Choose Plan</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Mobile Unlimited</CardTitle>
                    <CardDescription>Unlimited data for power users</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-4">
                      R599<span className="text-lg font-normal">/month</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        100Mbps Speed
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Unlimited Data
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Premium Hotspot
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Priority 5G
                      </li>
                    </ul>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">Choose Plan</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Extensive Coverage Network</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our wireless network covers 95% of South Africa with 5G available in major cities and LTE coverage
                extending to rural areas.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-orange-500 mr-3" />
                  <span>5G coverage in Cape Town, Johannesburg, Durban, and Pretoria</span>
                </div>
                <div className="flex items-center">
                  <Signal className="w-5 h-5 text-orange-500 mr-3" />
                  <span>LTE coverage across all 9 provinces</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-orange-500 mr-3" />
                  <span>99.9% network uptime guarantee</span>
                </div>
              </div>
              <Button className="mt-6 bg-orange-500 hover:bg-orange-600">Check Coverage in Your Area</Button>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <MapPin className="w-24 h-24 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Coverage Map</h3>
              <p className="text-gray-600">Interactive coverage map coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Go Wireless?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of satisfied customers enjoying fast, reliable wireless internet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/logo.jpeg"
                alt="ISP Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400">Connecting South Africa with fast, reliable internet solutions.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/fibre" className="hover:text-white">
                    Fibre Internet
                  </Link>
                </li>
                <li>
                  <Link href="/wireless" className="hover:text-white">
                    Wireless Internet
                  </Link>
                </li>
                <li>
                  <Link href="/hosting" className="hover:text-white">
                    Web Hosting
                  </Link>
                </li>
                <li>
                  <Link href="/smart-homes" className="hover:text-white">
                    Smart Homes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="hover:text-white">
                    Service Status
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-white">
                    News
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Your ISP Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
