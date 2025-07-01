import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Wifi, Zap, Shield, Headphones, Rocket, Globe, Users, Phone, Mail, MapPin, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
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
                <Link href="/" className="text-gray-900 hover:text-orange-500 px-3 py-2 text-sm font-medium">
                  Home
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium">
                    Services <ChevronDown className="w-4 h-4 ml-1" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href="/fibre" className="w-full">
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
                        Device
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
              <Link href="/portal">
                <Button variant="outline" className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50">
                  Customer Portal
                </Button>
              </Link>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Get Connected</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Big Fibre, <span className="text-gray-800">Big Wi-Fi</span>
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                Experience lightning-fast internet with our premium fibre and wireless solutions. Connect your world
                with unlimited possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 text-lg">
                  View Packages
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 text-lg"
                >
                  Check Coverage
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-full opacity-20 blur-3xl"></div>
              <Rocket className="w-64 h-64 text-white mx-auto relative z-10" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L50 105C100 90 200 60 300 45C400 30 500 30 600 37.5C700 45 800 60 900 67.5C1000 75 1100 75 1150 75L1200 75V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Coverage Check */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Check Coverage in Your Area</h2>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <Input placeholder="Enter your address..." className="flex-1 h-12 text-lg" />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white h-12 px-8">
              <Globe className="w-5 h-5 mr-2" />
              Check Coverage
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From high-speed fibre to smart home solutions, we provide comprehensive connectivity services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors">
                  <Zap className="w-8 h-8 text-orange-500 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Fibre Internet</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-4">
                  Ultra-fast fibre connections with speeds up to 1Gbps. Perfect for streaming, gaming, and working from
                  home.
                </CardDescription>
                <Link href="/fibre">
                  <Button
                    variant="outline"
                    className="bg-white text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors">
                  <Wifi className="w-8 h-8 text-orange-500 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Wireless Solutions</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-4">
                  Reliable wireless internet and hotspot solutions for businesses and residential areas.
                </CardDescription>
                <Link href="/wireless">
                  <Button
                    variant="outline"
                    className="bg-white text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors">
                  <Shield className="w-8 h-8 text-orange-500 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Smart Home Security</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-4">
                  Complete smart home security systems with 24/7 monitoring and mobile app control.
                </CardDescription>
                <Link href="/smart-homes">
                  <Button
                    variant="outline"
                    className="bg-white text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Fibre Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect plan for your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative border-2 hover:border-orange-200 transition-all">
              <CardHeader className="text-center">
                <Badge className="bg-orange-100 text-orange-800 mb-4 w-fit mx-auto">Basic</Badge>
                <CardTitle className="text-2xl">25 Mbps</CardTitle>
                <div className="text-4xl font-bold text-orange-500 mt-2">R299</div>
                <CardDescription>per month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>25 Mbps Download
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>10 Mbps Upload
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Unlimited Data
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Free Installation
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Get Connected</Button>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-orange-500 hover:border-orange-600 transition-all transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <Badge className="bg-orange-100 text-orange-800 mb-4 w-fit mx-auto">Premium</Badge>
                <CardTitle className="text-2xl">100 Mbps</CardTitle>
                <div className="text-4xl font-bold text-orange-500 mt-2">R599</div>
                <CardDescription>per month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>100 Mbps Download
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>50 Mbps Upload
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Unlimited Data
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Free Installation & Router
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Get Connected</Button>
              </CardContent>
            </Card>

            <Card className="relative border-2 hover:border-orange-200 transition-all">
              <CardHeader className="text-center">
                <Badge className="bg-orange-100 text-orange-800 mb-4 w-fit mx-auto">Enterprise</Badge>
                <CardTitle className="text-2xl">1 Gbps</CardTitle>
                <div className="text-4xl font-bold text-orange-500 mt-2">R999</div>
                <CardDescription>per month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>1 Gbps Download
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>500 Mbps Upload
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Unlimited Data
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Priority Support
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Get Connected</Button>
              </CardContent>
            </Card>
            <div className="md:col-span-3 flex justify-center mt-8">
              <Link href="/prepaid-fibre">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg"
                >
                  Buy Prepaid Fibre
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Next?</h2>
            <p className="text-xl text-gray-600">We're committed to providing the best internet experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Experience blazing-fast speeds with our premium fibre network infrastructure.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Reliable Connection</h3>
              <p className="text-gray-600">99.9% uptime guarantee with redundant network paths and 24/7 monitoring.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock technical support from our expert team whenever you need help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Connected?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of satisfied customers enjoying fast, reliable internet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg">
              View All Packages
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white hover:bg-white hover:text-orange-500 px-8 py-4 text-lg text-orange-500"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image src="/images/logo.jpeg" alt="Next ISP Logo" width={120} height={40} className="h-10 w-auto mb-4" />
              <p className="text-gray-400 mb-6">
                Connecting South Africa with premium fibre and wireless internet solutions.
              </p>
              <div className="flex space-x-4 mb-6">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                  <Users className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                  <Mail className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                  <Phone className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                  <Globe className="w-5 h-5" />
                </Button>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">0800 NEXT ISP</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">support@nextisp.co.za</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Cape Town, South Africa</span>
                </div>
              </div>
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
                  <Link href="/prepaid-fibre" className="hover:text-white">
                    Prepaid Fibre
                  </Link>
                </li>
                <li>
                  <Link href="/wireless" className="hover:text-white">
                    Wireless
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
                    Help Centre
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="hover:text-white">
                    Network Status
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/coverage" className="hover:text-white">
                    Coverage Map
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Account</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/portal" className="hover:text-white">
                    Customer Portal
                  </Link>
                </li>
                <li>
                  <Link href="/portal/billing" className="hover:text-white">
                    Billing
                  </Link>
                </li>
                <li>
                  <Link href="/portal/support" className="hover:text-white">
                    Support Tickets
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Next ISP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
