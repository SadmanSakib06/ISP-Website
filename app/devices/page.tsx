import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  ChevronDown,
  Router,
  Smartphone,
  Cable,
  Wrench,
  Shield,
  Zap,
  CheckCircle,
  ShoppingCart,
  Star,
} from "lucide-react"

export default function DevicesPage() {
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
                  <Button variant="ghost" className="text-orange-500 px-3 py-2 text-sm font-medium">
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
                    <Link href="/hotspots">Hotspots</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/hosting">Hosting</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/devices" className="text-orange-500 font-medium">
                      Devices
                    </Link>
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
                    <Link href="/contact">Get Help</Link>
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
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart (0)
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Premium <span className="text-orange-500">Networking Devices</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our range of high-quality routers, modems, and networking equipment. Professional installation
              and support included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3">
                Expert Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-lg text-gray-600">Find the perfect device for your connectivity needs</p>
          </div>

          <Tabs defaultValue="routers" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="routers">Routers</TabsTrigger>
              <TabsTrigger value="modems">Modems</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Devices</TabsTrigger>
              <TabsTrigger value="accessories">Accessories</TabsTrigger>
            </TabsList>

            <TabsContent value="routers">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Router className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">WiFi 6 Basic Router</CardTitle>
                        <CardDescription>Perfect for small homes</CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Up to 1.2Gbps speeds</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Covers up to 150m²</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>4 Ethernet ports</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-2xl font-bold text-orange-500">R899</div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">4.5 (124)</span>
                      </div>
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow border-orange-200">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Router className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">WiFi 6 Pro Router</CardTitle>
                        <CardDescription>Best for medium homes</CardDescription>
                      </div>
                      <Badge className="bg-orange-100 text-orange-800">Popular</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Up to 3Gbps speeds</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Covers up to 300m²</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>8 Ethernet ports</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-2xl font-bold text-orange-500">R1499</div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">4.8 (89)</span>
                      </div>
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Router className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">WiFi 6E Enterprise</CardTitle>
                        <CardDescription>For large homes & offices</CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Up to 6Gbps speeds</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Covers up to 500m²</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>12 Ethernet ports</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-2xl font-bold text-orange-500">R2499</div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">4.9 (45)</span>
                      </div>
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="modems">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Cable className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">Fibre ONT Modem</CardTitle>
                        <CardDescription>For fibre connections</CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Gigabit Ethernet</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Compatible with all fibre</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Easy setup</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-2xl font-bold text-orange-500">R599</div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">4.6 (78)</span>
                      </div>
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Cable className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">ADSL Modem Router</CardTitle>
                        <CardDescription>For ADSL connections</CardDescription>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">Low Stock</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Built-in WiFi</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>4 Ethernet ports</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Easy configuration</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-2xl font-bold text-orange-500">R799</div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">4.3 (56)</span>
                      </div>
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Cable className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">5G Gateway Modem</CardTitle>
                        <CardDescription>For 5G connections</CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>5G & LTE support</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>WiFi 6 built-in</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>External antenna ports</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-2xl font-bold text-orange-500">R1299</div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">4.7 (34)</span>
                      </div>
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="mobile">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Smartphone className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">Portable Hotspot</CardTitle>
                        <CardDescription>WiFi on the go</CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Up to 10 devices</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>12-hour battery</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>4G LTE support</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-2xl font-bold text-orange-500">R399</div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">4.4 (67)</span>
                      </div>
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Smartphone className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">5G Mobile Hotspot</CardTitle>
                        <CardDescription>Next-gen mobile internet</CardDescription>
                      </div>
                      <Badge className="bg-orange-100 text-orange-800">New</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Up to 32 devices</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>24-hour battery</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>5G & 4G support</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-2xl font-bold text-orange-500">R899</div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">4.8 (23)</span>
                      </div>
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Cable className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">USB Data Dongle</CardTitle>
                        <CardDescription>Plug & play internet</CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Plug & play setup</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>4G LTE speeds</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Compact design</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-2xl font-bold text-orange-500">R299</div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">4.2 (91)</span>
                      </div>
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="accessories">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Cable className="w-12 h-12 text-gray-400" />
                    </div>
                    <CardTitle className="text-base">Ethernet Cable (5m)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold text-orange-500 mb-4">R99</div>
                    <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Zap className="w-12 h-12 text-gray-400" />
                    </div>
                    <CardTitle className="text-base">WiFi Range Extender</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold text-orange-500 mb-4">R299</div>
                    <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="w-12 h-12 text-gray-400" />
                    </div>
                    <CardTitle className="text-base">Surge Protector</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold text-orange-500 mb-4">R199</div>
                    <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Wrench className="w-12 h-12 text-gray-400" />
                    </div>
                    <CardTitle className="text-base">Wall Mount Kit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold text-orange-500 mb-4">R149</div>
                    <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Services</h2>
            <p className="text-lg text-gray-600">Expert installation and support for all your devices</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Wrench className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Professional Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our certified technicians will install and configure your devices for optimal performance.
                </p>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                  Book Installation
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Extended Warranty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Protect your investment with our comprehensive warranty and replacement service.
                </p>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Get round-the-clock technical support for all your networking devices and connectivity issues.
                </p>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Need Help Choosing the Right Device?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Our experts are here to help you find the perfect networking solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3">
              Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-600 px-8 py-3">
              Call 0800 NEXT ISP
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
                Premium networking devices with professional installation and support.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/devices" className="hover:text-white">
                    All Devices
                  </Link>
                </li>
                <li>
                  <Link href="/devices#routers" className="hover:text-white">
                    Routers
                  </Link>
                </li>
                <li>
                  <Link href="/devices#modems" className="hover:text-white">
                    Modems
                  </Link>
                </li>
                <li>
                  <Link href="/devices#mobile" className="hover:text-white">
                    Mobile Devices
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Setup Guides
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Technical Support
                  </Link>
                </li>
                <li>
                  <Link href="/warranty" className="hover:text-white">
                    Warranty
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/installation" className="hover:text-white">
                    Installation
                  </Link>
                </li>
                <li>
                  <Link href="/consultation" className="hover:text-white">
                    Consultation
                  </Link>
                </li>
                <li>
                  <Link href="/maintenance" className="hover:text-white">
                    Maintenance
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
