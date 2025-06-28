import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Download, Upload, Clock, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export default function FibrePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image src="/images/logo.jpeg" alt="Next ISP Logo" width={120} height={40} className="h-10 w-auto" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium">
                  Home
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-orange-500 px-3 py-2 text-sm font-medium">
                    Services <ChevronDown className="w-4 h-4 ml-1" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href="/fibre" className="w-full text-orange-500 font-medium">
                        Fibre
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/prepaid-fibre" className="w-full">
                        Prepaid Fibre
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/wireless" className="w-full">
                        Wireless
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/hotspots" className="w-full">
                        Hotspots
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/hosting" className="w-full">
                        Hosting
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/devices" className="w-full">
                        Devices
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/smart-homes" className="w-full">
                        Smart Homes Security
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link href="/providers" className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium">
                  Providers
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium">
                    Support <ChevronDown className="w-4 h-4 ml-1" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href="/help" className="w-full">
                        Help Centre
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/status" className="w-full">
                        Status Pages
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/contact" className="w-full">
                        Get Help
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50">
                    Customer Portal <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/portal" className="w-full">
                      User Account Management
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/portal/billing" className="w-full">
                      Billing and Payments
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/portal/support" className="w-full">
                      Support Ticket System
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/portal/services" className="w-full">
                      Service Upgrade/Downgrade
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Get Connected</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Premium Fibre Internet</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-orange-100">
              Experience the future of connectivity with our ultra-fast fibre network. Stream, game, work, and connect
              without limits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg">
                View Packages
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Fibre?</h2>
            <p className="text-xl text-gray-600">Built for the modern digital lifestyle</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-orange-200 transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle>Lightning Speed</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Speeds up to 1Gbps for seamless streaming, gaming, and video conferencing
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-orange-200 transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle>99.9% Uptime</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Reliable connection with redundant infrastructure and 24/7 monitoring
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-orange-200 transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle>No Throttling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Unlimited data with no speed throttling or fair usage policies
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fibre Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect speed for your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Basic Package */}
            <Card className="border-2 hover:border-orange-200 transition-all">
              <CardHeader className="text-center">
                <Badge className="bg-gray-100 text-gray-800 mb-4 w-fit mx-auto">Basic</Badge>
                <CardTitle className="text-2xl">25 Mbps</CardTitle>
                <div className="text-3xl font-bold text-orange-500 mt-2">R299</div>
                <CardDescription>per month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm">
                      <Download className="w-4 h-4 mr-2 text-orange-500" />
                      Download
                    </span>
                    <span className="font-semibold">25 Mbps</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm">
                      <Upload className="w-4 h-4 mr-2 text-orange-500" />
                      Upload
                    </span>
                    <span className="font-semibold">10 Mbps</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Data</span>
                    <span className="font-semibold">Unlimited</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
              </CardContent>
            </Card>

            {/* Standard Package */}
            <Card className="border-2 hover:border-orange-200 transition-all">
              <CardHeader className="text-center">
                <Badge className="bg-orange-100 text-orange-800 mb-4 w-fit mx-auto">Standard</Badge>
                <CardTitle className="text-2xl">50 Mbps</CardTitle>
                <div className="text-3xl font-bold text-orange-500 mt-2">R399</div>
                <CardDescription>per month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm">
                      <Download className="w-4 h-4 mr-2 text-orange-500" />
                      Download
                    </span>
                    <span className="font-semibold">50 Mbps</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm">
                      <Upload className="w-4 h-4 mr-2 text-orange-500" />
                      Upload
                    </span>
                    <span className="font-semibold">25 Mbps</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Data</span>
                    <span className="font-semibold">Unlimited</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="border-2 border-orange-500 hover:border-orange-600 transition-all relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white px-3 py-1">Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <Badge className="bg-orange-100 text-orange-800 mb-4 w-fit mx-auto">Premium</Badge>
                <CardTitle className="text-2xl">100 Mbps</CardTitle>
                <div className="text-3xl font-bold text-orange-500 mt-2">R599</div>
                <CardDescription>per month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm">
                      <Download className="w-4 h-4 mr-2 text-orange-500" />
                      Download
                    </span>
                    <span className="font-semibold">100 Mbps</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm">
                      <Upload className="w-4 h-4 mr-2 text-orange-500" />
                      Upload
                    </span>
                    <span className="font-semibold">50 Mbps</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Data</span>
                    <span className="font-semibold">Unlimited</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
              </CardContent>
            </Card>

            {/* Enterprise Package */}
            <Card className="border-2 hover:border-orange-200 transition-all">
              <CardHeader className="text-center">
                <Badge className="bg-gray-100 text-gray-800 mb-4 w-fit mx-auto">Enterprise</Badge>
                <CardTitle className="text-2xl">1 Gbps</CardTitle>
                <div className="text-3xl font-bold text-orange-500 mt-2">R999</div>
                <CardDescription>per month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm">
                      <Download className="w-4 h-4 mr-2 text-orange-500" />
                      Download
                    </span>
                    <span className="font-semibold">1 Gbps</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm">
                      <Upload className="w-4 h-4 mr-2 text-orange-500" />
                      Upload
                    </span>
                    <span className="font-semibold">500 Mbps</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Data</span>
                    <span className="font-semibold">Unlimited</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Ultra-Fast Internet?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of customers enjoying premium fibre connectivity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg">
              Check Availability
            </Button>
            <Link href="/prepaid-fibre">
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 px-8 py-4 text-lg underline">
                Buy Prepaid Fibre
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
