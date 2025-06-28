import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  ChevronDown,
  Wifi,
  MapPin,
  Shield,
  Coffee,
  ShoppingBag,
  Building,
  Plane,
  Search,
  CheckCircle,
} from "lucide-react"

export default function HotspotsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Image src="/images/logo.jpeg" alt="ISP Logo" width={120} height={40} className="h-10 w-auto" />
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
                    <Link href="/wireless">Wireless</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/hotspots" className="text-orange-500 font-medium">
                      Hotspots
                    </Link>
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
      <section className="bg-gradient-to-r from-orange-50 to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Stay Connected <span className="text-orange-500">Everywhere</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Access thousands of WiFi hotspots across the country. Fast, secure, and reliable internet wherever you go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Find Hotspots Near You
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3">
                View Plans & Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Hotspots?</h2>
            <p className="text-lg text-gray-600">Premium WiFi access with unmatched coverage and security</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Nationwide Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Over 10,000 hotspots across major cities, shopping centers, airports, and cafes.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Secure Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enterprise-grade security with WPA3 encryption and automatic VPN protection.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Wifi className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>High-Speed Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Enjoy speeds up to 100Mbps with unlimited data on premium hotspots.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hotspot Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Hotspots Near You</h2>
            <p className="text-lg text-gray-600">Discover WiFi hotspots in popular locations</p>
          </div>

          <Tabs defaultValue="categories" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="categories">By Category</TabsTrigger>
              <TabsTrigger value="locations">By Location</TabsTrigger>
            </TabsList>

            <TabsContent value="categories">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <Coffee className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <CardTitle className="text-lg">Cafes & Restaurants</CardTitle>
                    <CardDescription>2,500+ locations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Starbucks</li>
                      <li>• McDonald's</li>
                      <li>• Local cafes</li>
                      <li>• Food courts</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <ShoppingBag className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <CardTitle className="text-lg">Shopping Centers</CardTitle>
                    <CardDescription>1,800+ locations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Sandton City</li>
                      <li>• V&A Waterfront</li>
                      <li>• Gateway</li>
                      <li>• Menlyn Park</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <Plane className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <CardTitle className="text-lg">Transport Hubs</CardTitle>
                    <CardDescription>500+ locations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• OR Tambo Airport</li>
                      <li>• Cape Town Airport</li>
                      <li>• Gautrain stations</li>
                      <li>• Bus terminals</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <Building className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <CardTitle className="text-lg">Business Districts</CardTitle>
                    <CardDescription>1,200+ locations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Sandton CBD</li>
                      <li>• Cape Town CBD</li>
                      <li>• Umhlanga</li>
                      <li>• Rosebank</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="locations">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 text-orange-500 mr-2" />
                      Johannesburg
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Total Hotspots</span>
                        <Badge variant="secondary">3,200</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Premium Locations</span>
                        <Badge variant="secondary">850</Badge>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        <Search className="w-4 h-4 mr-2" />
                        Find Nearby
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 text-orange-500 mr-2" />
                      Cape Town
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Total Hotspots</span>
                        <Badge variant="secondary">2,100</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Premium Locations</span>
                        <Badge variant="secondary">600</Badge>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        <Search className="w-4 h-4 mr-2" />
                        Find Nearby
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 text-orange-500 mr-2" />
                      Durban
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Total Hotspots</span>
                        <Badge variant="secondary">1,500</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Premium Locations</span>
                        <Badge variant="secondary">400</Badge>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-4">
                        <Search className="w-4 h-4 mr-2" />
                        Find Nearby
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hotspot Access Plans</h2>
            <p className="text-lg text-gray-600">Choose the perfect plan for your connectivity needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Basic Access</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mt-4">
                  R99<span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <CardDescription>Perfect for occasional use</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">20 hours monthly access</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">Standard speed (up to 25Mbps)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">Access to all hotspots</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">Basic security</span>
                  </div>
                </div>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="relative border-orange-500 border-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Premium Access</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mt-4">
                  R199<span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <CardDescription>Best value for regular users</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">Unlimited monthly access</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">High speed (up to 50Mbps)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">Priority access to premium hotspots</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">Advanced security + VPN</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">24/7 support</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Business Access</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mt-4">
                  R399<span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <CardDescription>For teams and businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">Unlimited access for 5 devices</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">Ultra-high speed (up to 100Mbps)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">Exclusive business hotspots</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">Enterprise security</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">Dedicated account manager</span>
                  </div>
                </div>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Get connected in just a few simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Choose Your Plan</h3>
              <p className="text-gray-600 text-sm">Select the hotspot access plan that fits your needs and budget.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Download Our App</h3>
              <p className="text-gray-600 text-sm">Get our mobile app to easily find and connect to nearby hotspots.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Find Hotspots</h3>
              <p className="text-gray-600 text-sm">Use the app to locate the nearest WiFi hotspots wherever you are.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Connect & Browse</h3>
              <p className="text-gray-600 text-sm">Automatically connect and enjoy fast, secure internet access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Stay Connected Everywhere?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of users who trust our hotspot network for reliable internet access on the go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-600 px-8 py-3">
              View Coverage Map
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
              <p className="text-gray-400 text-sm">
                Connecting South Africa with reliable internet solutions and nationwide WiFi hotspot access.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/fibre" className="hover:text-white">
                    Fibre Internet
                  </Link>
                </li>
                <li>
                  <Link href="/wireless" className="hover:text-white">
                    Wireless
                  </Link>
                </li>
                <li>
                  <Link href="/hotspots" className="hover:text-white">
                    WiFi Hotspots
                  </Link>
                </li>
                <li>
                  <Link href="/hosting" className="hover:text-white">
                    Web Hosting
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
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
              <ul className="space-y-2 text-sm text-gray-400">
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
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Your ISP Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
