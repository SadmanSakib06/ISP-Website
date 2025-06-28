import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  ChevronDown,
  Network,
  Globe,
  Zap,
  Shield,
  CheckCircle,
  MapPin,
  Building,
  Wifi,
  Cable,
  Satellite,
  Server,
  Users,
  Award,
  TrendingUp,
} from "lucide-react"

export default function ProvidersPage() {
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

              <Link href="/providers" className="text-orange-500 px-3 py-2 text-sm font-medium">
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
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Check Coverage</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-orange-500">Network Partners</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We partner with South Africa's leading network infrastructure providers to deliver the best connectivity
              solutions across the country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                View Coverage Map
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3">
                Compare Providers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Network Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Network className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <p className="text-gray-600">Network Partners</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                <p className="text-gray-600">National Coverage</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">500K+</div>
                <p className="text-gray-600">Connected Customers</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
                <p className="text-gray-600">Network Uptime</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Provider Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Network Infrastructure</h2>
            <p className="text-lg text-gray-600">Partnering with industry leaders for superior connectivity</p>
          </div>

          <Tabs defaultValue="fibre" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="fibre">Fibre Networks</TabsTrigger>
              <TabsTrigger value="wireless">Wireless/5G</TabsTrigger>
              <TabsTrigger value="satellite">Satellite</TabsTrigger>
              <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
            </TabsList>

            <TabsContent value="fibre">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                        <Cable className="w-8 h-8 text-red-600" />
                      </div>
                      <Badge className="bg-green-100 text-green-800">Primary Partner</Badge>
                    </div>
                    <CardTitle className="text-xl">Openserve</CardTitle>
                    <CardDescription>Telkom's wholesale fibre network</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Nationwide fibre coverage</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Up to 1Gbps speeds</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>FTTH & FTTB solutions</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Coverage</p>
                        <p className="font-semibold">Major Cities</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Max Speed</p>
                        <p className="font-semibold">1Gbps</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Cable className="w-8 h-8 text-blue-600" />
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">Partner</Badge>
                    </div>
                    <CardTitle className="text-xl">Vumatel</CardTitle>
                    <CardDescription>Premium fibre network provider</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>High-density urban areas</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Premium residential estates</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Gigabit connectivity</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Coverage</p>
                        <p className="font-semibold">Urban Areas</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Max Speed</p>
                        <p className="font-semibold">1Gbps</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                        <Cable className="w-8 h-8 text-green-600" />
                      </div>
                      <Badge className="bg-green-100 text-green-800">Partner</Badge>
                    </div>
                    <CardTitle className="text-xl">Frogfoot Networks</CardTitle>
                    <CardDescription>Open-access fibre network</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Open-access model</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Residential & business</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Competitive pricing</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Coverage</p>
                        <p className="font-semibold">Western Cape</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Max Speed</p>
                        <p className="font-semibold">1Gbps</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Cable className="w-8 h-8 text-purple-600" />
                      </div>
                      <Badge className="bg-purple-100 text-purple-800">Partner</Badge>
                    </div>
                    <CardTitle className="text-xl">MetroFibre</CardTitle>
                    <CardDescription>Metropolitan fibre solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Metro area coverage</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Business-grade solutions</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Dedicated bandwidth</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Coverage</p>
                        <p className="font-semibold">Gauteng</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Max Speed</p>
                        <p className="font-semibold">10Gbps</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Cable className="w-8 h-8 text-orange-600" />
                      </div>
                      <Badge className="bg-orange-100 text-orange-800">Partner</Badge>
                    </div>
                    <CardTitle className="text-xl">Octotel</CardTitle>
                    <CardDescription>Western Cape fibre specialist</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Cape Town focused</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Premium service quality</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Local support</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Coverage</p>
                        <p className="font-semibold">Cape Town</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Max Speed</p>
                        <p className="font-semibold">1Gbps</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
                        <Cable className="w-8 h-8 text-teal-600" />
                      </div>
                      <Badge className="bg-teal-100 text-teal-800">Partner</Badge>
                    </div>
                    <CardTitle className="text-xl">Link Africa</CardTitle>
                    <CardDescription>Fibre infrastructure provider</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Multi-province coverage</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Wholesale solutions</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Reliable infrastructure</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Coverage</p>
                        <p className="font-semibold">Multi-Province</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Max Speed</p>
                        <p className="font-semibold">1Gbps</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="wireless">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                        <Wifi className="w-8 h-8 text-red-600" />
                      </div>
                      <Badge className="bg-green-100 text-green-800">Primary Partner</Badge>
                    </div>
                    <CardTitle className="text-xl">Vodacom</CardTitle>
                    <CardDescription>Leading 5G and LTE network</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Extensive 5G coverage</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>National LTE network</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Premium data speeds</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Technology</p>
                        <p className="font-semibold">5G/LTE</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Coverage</p>
                        <p className="font-semibold">98%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Wifi className="w-8 h-8 text-orange-600" />
                      </div>
                      <Badge className="bg-orange-100 text-orange-800">Partner</Badge>
                    </div>
                    <CardTitle className="text-xl">MTN</CardTitle>
                    <CardDescription>Reliable mobile network</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>5G network rollout</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Strong rural coverage</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Business solutions</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Technology</p>
                        <p className="font-semibold">5G/LTE</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Coverage</p>
                        <p className="font-semibold">97%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Wifi className="w-8 h-8 text-blue-600" />
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">Partner</Badge>
                    </div>
                    <CardTitle className="text-xl">Cell C</CardTitle>
                    <CardDescription>Competitive mobile network</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>LTE-A network</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Competitive pricing</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Urban focus</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Technology</p>
                        <p className="font-semibold">LTE-A</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Coverage</p>
                        <p className="font-semibold">85%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                        <Wifi className="w-8 h-8 text-green-600" />
                      </div>
                      <Badge className="bg-green-100 text-green-800">Partner</Badge>
                    </div>
                    <CardTitle className="text-xl">Telkom Mobile</CardTitle>
                    <CardDescription>Integrated mobile solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>LTE network</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Fixed-mobile convergence</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Business packages</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Technology</p>
                        <p className="font-semibold">LTE</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Coverage</p>
                        <p className="font-semibold">90%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Wifi className="w-8 h-8 text-purple-600" />
                      </div>
                      <Badge className="bg-purple-100 text-purple-800">Partner</Badge>
                    </div>
                    <CardTitle className="text-xl">Rain</CardTitle>
                    <CardDescription>5G data-only network</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>5G-first approach</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Unlimited data plans</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Fixed wireless access</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Technology</p>
                        <p className="font-semibold">5G/LTE</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Coverage</p>
                        <p className="font-semibold">Major Cities</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <Wifi className="w-8 h-8 text-indigo-600" />
                      </div>
                      <Badge className="bg-indigo-100 text-indigo-800">Partner</Badge>
                    </div>
                    <CardTitle className="text-xl">Liquid Telecom</CardTitle>
                    <CardDescription>Pan-African connectivity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Enterprise solutions</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>International connectivity</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Wholesale services</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Technology</p>
                        <p className="font-semibold">LTE/Fibre</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Focus</p>
                        <p className="font-semibold">Enterprise</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="satellite">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Satellite className="w-8 h-8 text-blue-600" />
                      </div>
                      <Badge className="bg-green-100 text-green-800">Primary Partner</Badge>
                    </div>
                    <CardTitle className="text-xl">Starlink</CardTitle>
                    <CardDescription>Low Earth Orbit satellite internet</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Global coverage</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Low latency</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>High-speed internet</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Speed</p>
                        <p className="font-semibold">Up to 200Mbps</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Latency</p>
                        <p className="font-semibold">20-40ms</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                        <Satellite className="w-8 h-8 text-red-600" />
                      </div>
                      <Badge className="bg-red-100 text-red-800">Partner</Badge>
                    </div>
                    <CardTitle className="text-xl">Viasat</CardTitle>
                    <CardDescription>Geostationary satellite internet</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Wide coverage area</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Reliable service</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Rural connectivity</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Speed</p>
                        <p className="font-semibold">Up to 100Mbps</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Coverage</p>
                        <p className="font-semibold">Rural Areas</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                        <Satellite className="w-8 h-8 text-green-600" />
                      </div>
                      <Badge className="bg-green-100 text-green-800">Partner</Badge>
                    </div>
                    <CardTitle className="text-xl">Intelsat</CardTitle>
                    <CardDescription>Enterprise satellite solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Enterprise focus</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Global network</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Managed services</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Focus</p>
                        <p className="font-semibold">Enterprise</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Service</p>
                        <p className="font-semibold">Managed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="infrastructure">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Server className="w-8 h-8 text-gray-600" />
                      </div>
                      <Badge className="bg-green-100 text-green-800">Primary Partner</Badge>
                    </div>
                    <CardTitle className="text-xl">SEACOM</CardTitle>
                    <CardDescription>Submarine cable infrastructure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>International connectivity</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>High-capacity backbone</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Redundant routes</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Type</p>
                        <p className="font-semibold">Submarine Cable</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Capacity</p>
                        <p className="font-semibold">High</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Server className="w-8 h-8 text-blue-600" />
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">Partner</Badge>
                    </div>
                    <CardTitle className="text-xl">WACS</CardTitle>
                    <CardDescription>West Africa Cable System</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>West coast connectivity</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>European connection</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>High bandwidth</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Route</p>
                        <p className="font-semibold">Africa-Europe</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Landing</p>
                        <p className="font-semibold">Cape Town</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                        <Server className="w-8 h-8 text-green-600" />
                      </div>
                      <Badge className="bg-green-100 text-green-800">Partner</Badge>
                    </div>
                    <CardTitle className="text-xl">SAT-3/WASC</CardTitle>
                    <CardDescription>South Atlantic submarine cable</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Atlantic connectivity</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Established infrastructure</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Reliable service</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Type</p>
                        <p className="font-semibold">Submarine Cable</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Status</p>
                        <p className="font-semibold">Operational</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Building className="w-8 h-8 text-purple-600" />
                      </div>
                      <Badge className="bg-purple-100 text-purple-800">Partner</Badge>
                    </div>
                    <CardTitle className="text-xl">Teraco</CardTitle>
                    <CardDescription>Data center infrastructure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Carrier-neutral facilities</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Multiple locations</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>High availability</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Type</p>
                        <p className="font-semibold">Data Centers</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Locations</p>
                        <p className="font-semibold">Multiple</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Building className="w-8 h-8 text-orange-600" />
                      </div>
                      <Badge className="bg-orange-100 text-orange-800">Partner</Badge>
                    </div>
                    <CardTitle className="text-xl">NTT</CardTitle>
                    <CardDescription>Global data center services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Global presence</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Enterprise solutions</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Managed services</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Scope</p>
                        <p className="font-semibold">Global</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Focus</p>
                        <p className="font-semibold">Enterprise</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
                        <Building className="w-8 h-8 text-teal-600" />
                      </div>
                      <Badge className="bg-teal-100 text-teal-800">Partner</Badge>
                    </div>
                    <CardTitle className="text-xl">Hetzner</CardTitle>
                    <CardDescription>Cloud infrastructure services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Cloud hosting</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Dedicated servers</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Competitive pricing</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Services</p>
                        <p className="font-semibold">Cloud/Hosting</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Location</p>
                        <p className="font-semibold">Cape Town</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">National Coverage Map</h2>
            <p className="text-lg text-gray-600">See our comprehensive network coverage across South Africa</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Network Coverage</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Fibre Coverage</h4>
                    <p className="text-gray-600">
                      Extensive fibre network covering major metropolitan areas, suburbs, and business districts across
                      all provinces.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <Wifi className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">5G & LTE Coverage</h4>
                    <p className="text-gray-600">
                      Advanced 5G networks in major cities with comprehensive LTE coverage extending to rural areas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <Satellite className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Satellite Coverage</h4>
                    <p className="text-gray-600">
                      Satellite internet solutions for remote areas where traditional infrastructure is not available.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white mr-4">Check Your Area</Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  Download Coverage Map
                </Button>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <MapPin className="w-32 h-32 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive Coverage Map</h3>
              <p className="text-gray-600 mb-4">
                Detailed coverage map showing all our network partners and available services in your area.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Launch Coverage Tool</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our Provider Network Matters</h2>
            <p className="text-lg text-gray-600">The benefits of our extensive provider partnerships</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Redundancy & Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Multiple provider partnerships ensure backup connectivity and maximum uptime for your services.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Best Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  We select the optimal provider for your location to ensure the fastest speeds and lowest latency.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Globe className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Nationwide Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Our diverse provider network enables us to offer services in urban, suburban, and rural areas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Competitive Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Multiple provider relationships allow us to negotiate better rates and pass savings to customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Find the Best Connection for Your Area</h2>
          <p className="text-xl text-orange-100 mb-8">
            Use our coverage checker to see which providers and services are available at your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3">
              Check Coverage Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-600 px-8 py-3">
              Contact Our Team
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
                Connecting South Africa through strategic partnerships with leading network infrastructure providers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Network Types</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/providers#fibre" className="hover:text-white">
                    Fibre Networks
                  </Link>
                </li>
                <li>
                  <Link href="/providers#wireless" className="hover:text-white">
                    5G & LTE Networks
                  </Link>
                </li>
                <li>
                  <Link href="/providers#satellite" className="hover:text-white">
                    Satellite Internet
                  </Link>
                </li>
                <li>
                  <Link href="/providers#infrastructure" className="hover:text-white">
                    Infrastructure Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Coverage</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/coverage" className="hover:text-white">
                    Coverage Map
                  </Link>
                </li>
                <li>
                  <Link href="/coverage-checker" className="hover:text-white">
                    Coverage Checker
                  </Link>
                </li>
                <li>
                  <Link href="/network-status" className="hover:text-white">
                    Network Status
                  </Link>
                </li>
                <li>
                  <Link href="/expansion" className="hover:text-white">
                    Network Expansion
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Centre
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link href="/business" className="hover:text-white">
                    Business Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/enterprise" className="hover:text-white">
                    Enterprise Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; 2024 Next ISP. All rights reserved. Network coverage subject to provider availability and
              infrastructure deployment.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
