import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  ChevronDown,
  Shield,
  Camera,
  Lock,
  Bell,
  Smartphone,
  Eye,
  Home,
  Zap,
  CheckCircle,
  Clock,
  Users,
  AlertTriangle,
  Wifi,
  Settings,
} from "lucide-react"

export default function SmartHomesPage() {
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
                    <Link href="/devices">Devices</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/smart-homes" className="text-orange-500 font-medium">
                      Smart Homes Security
                    </Link>
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
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Get Quote</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-orange-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Smart Home <span className="text-orange-400">Security</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Protect what matters most with our comprehensive smart home security solutions. 24/7 monitoring,
                intelligent alerts, and complete peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                  Get Free Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 text-center">
                <Shield className="w-32 h-32 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">24/7 Protection</h3>
                <p className="text-orange-100">Always watching, always protecting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Smart Home Security</h2>
            <p className="text-lg text-gray-600">Everything you need to keep your home and family safe</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Camera className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-lg">HD Security Cameras</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Crystal clear 4K cameras with night vision and motion detection</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Smart Door Locks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Keyless entry with smartphone control and access logs</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Bell className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Smart Alarms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Intelligent sensors for doors, windows, and motion detection</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Mobile Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Control everything from your smartphone, anywhere in the world</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Packages</h2>
            <p className="text-lg text-gray-600">Choose the perfect security solution for your home</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <Card className="relative">
              <CardHeader className="text-center">
                <Badge className="bg-gray-100 text-gray-800 mb-4 w-fit mx-auto">Basic</Badge>
                <CardTitle className="text-2xl">Home Starter</CardTitle>
                <div className="text-3xl font-bold text-orange-500 mt-2">R1,299</div>
                <CardDescription>per month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">2 HD Security Cameras</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">1 Smart Door Lock</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">Basic Alarm System</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">Mobile App Control</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">24/7 Monitoring</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">Free Installation</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="relative border-orange-500 border-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <Badge className="bg-orange-100 text-orange-800 mb-4 w-fit mx-auto">Premium</Badge>
                <CardTitle className="text-2xl">Home Guardian</CardTitle>
                <div className="text-3xl font-bold text-orange-500 mt-2">R2,199</div>
                <CardDescription>per month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">6 4K Security Cameras</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">2 Smart Door Locks</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">Advanced Alarm System</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">Motion & Glass Break Sensors</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">Smart Doorbell Camera</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">24/7 Professional Monitoring</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">Cloud Storage (30 days)</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
              </CardContent>
            </Card>

            {/* Enterprise Package */}
            <Card className="relative">
              <CardHeader className="text-center">
                <Badge className="bg-gray-100 text-gray-800 mb-4 w-fit mx-auto">Enterprise</Badge>
                <CardTitle className="text-2xl">Home Fortress</CardTitle>
                <div className="text-3xl font-bold text-orange-500 mt-2">R3,499</div>
                <CardDescription>per month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">12 4K Security Cameras</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">4 Smart Door Locks</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">Complete Alarm System</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">Smart Home Integration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">AI-Powered Analytics</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">Dedicated Security Team</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm">Unlimited Cloud Storage</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Smart Home Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Security Products</h2>
            <p className="text-lg text-gray-600">Individual components to build your perfect security system</p>
          </div>

          <Tabs defaultValue="cameras" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="cameras">Cameras</TabsTrigger>
              <TabsTrigger value="locks">Smart Locks</TabsTrigger>
              <TabsTrigger value="sensors">Sensors</TabsTrigger>
              <TabsTrigger value="automation">Automation</TabsTrigger>
            </TabsList>

            <TabsContent value="cameras">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Camera className="w-16 h-16 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">Indoor 4K Camera</CardTitle>
                    <CardDescription>Perfect for monitoring indoor spaces</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>4K Ultra HD recording</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Night vision up to 10m</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Two-way audio</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-orange-500 mb-4">R899</div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Add to Quote</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Camera className="w-16 h-16 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">Outdoor Security Camera</CardTitle>
                    <CardDescription>Weatherproof outdoor monitoring</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>IP67 weatherproof rating</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Motion-activated spotlight</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Color night vision</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-orange-500 mb-4">R1,299</div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Add to Quote</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Bell className="w-16 h-16 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">Smart Doorbell Camera</CardTitle>
                    <CardDescription>See who's at your door</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>1080p HD video</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Motion detection alerts</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Two-way communication</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-orange-500 mb-4">R699</div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Add to Quote</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="locks">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Lock className="w-16 h-16 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">Smart Deadbolt</CardTitle>
                    <CardDescription>Keyless entry with smartphone control</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Smartphone app control</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Access codes for guests</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Activity logs</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-orange-500 mb-4">R1,599</div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Add to Quote</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Lock className="w-16 h-16 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">Biometric Lock</CardTitle>
                    <CardDescription>Fingerprint and facial recognition</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Fingerprint scanner</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Facial recognition</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Backup key access</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-orange-500 mb-4">R2,299</div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Add to Quote</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Lock className="w-16 h-16 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">Smart Padlock</CardTitle>
                    <CardDescription>Portable smart security</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Bluetooth connectivity</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Weatherproof design</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Long battery life</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-orange-500 mb-4">R399</div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Add to Quote</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="sensors">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <Eye className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <CardTitle className="text-lg">Motion Sensor</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-xl font-bold text-orange-500 mb-4">R199</div>
                    <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Add to Quote
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <Home className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <CardTitle className="text-lg">Door/Window Sensor</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-xl font-bold text-orange-500 mb-4">R149</div>
                    <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Add to Quote
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <AlertTriangle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <CardTitle className="text-lg">Glass Break Sensor</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-xl font-bold text-orange-500 mb-4">R299</div>
                    <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Add to Quote
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <Zap className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <CardTitle className="text-lg">Smoke Detector</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-xl font-bold text-orange-500 mb-4">R249</div>
                    <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Add to Quote
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="automation">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Settings className="w-16 h-16 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">Smart Hub</CardTitle>
                    <CardDescription>Central control for all devices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Controls all smart devices</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Voice control compatible</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Automated routines</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-orange-500 mb-4">R799</div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Add to Quote</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Zap className="w-16 h-16 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">Smart Lighting</CardTitle>
                    <CardDescription>Automated lighting control</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Motion-activated lights</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Dimming controls</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Schedule programming</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-orange-500 mb-4">R599</div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Add to Quote</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <Wifi className="w-16 h-16 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">Smart Thermostat</CardTitle>
                    <CardDescription>Climate control automation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Remote temperature control</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Energy saving schedules</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Learning algorithms</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-orange-500 mb-4">R1,199</div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Add to Quote</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Monitoring Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Monitoring Services</h2>
            <p className="text-lg text-gray-600">24/7 professional monitoring and emergency response</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>24/7 Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Round-the-clock professional monitoring by our certified security team.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Instant alert response</li>
                  <li>• Emergency dispatch</li>
                  <li>• Police notification</li>
                  <li>• Medical emergency response</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Armed Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Immediate armed response team dispatch for verified security breaches.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Average 3-minute response</li>
                  <li>• Trained security personnel</li>
                  <li>• Direct police liaison</li>
                  <li>• Incident reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Smartphone className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle>Mobile App</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complete control of your security system from anywhere in the world.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Real-time notifications</li>
                  <li>• Live camera feeds</li>
                  <li>• System arm/disarm</li>
                  <li>• Activity history</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Professional installation in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Consultation</h3>
              <p className="text-gray-600 text-sm">
                Our security experts assess your home and recommend the perfect solution.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom Design</h3>
              <p className="text-gray-600 text-sm">
                We design a tailored security system that fits your specific needs and budget.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Professional Installation</h3>
              <p className="text-gray-600 text-sm">
                Certified technicians install and configure your entire system in one day.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Protection</h3>
              <p className="text-gray-600 text-sm">
                Your home is now protected with professional monitoring and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Protect Your Home Today</h2>
          <p className="text-xl text-orange-100 mb-8">
            Get a free security consultation and custom quote for your home. No obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3">
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-600 px-8 py-3">
              Call 0800 SECURE
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
                Protecting South African homes with advanced smart security solutions and 24/7 professional monitoring.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Security Solutions</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/smart-homes#cameras" className="hover:text-white">
                    Security Cameras
                  </Link>
                </li>
                <li>
                  <Link href="/smart-homes#locks" className="hover:text-white">
                    Smart Locks
                  </Link>
                </li>
                <li>
                  <Link href="/smart-homes#sensors" className="hover:text-white">
                    Alarm Systems
                  </Link>
                </li>
                <li>
                  <Link href="/smart-homes#automation" className="hover:text-white">
                    Home Automation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/installation" className="hover:text-white">
                    Professional Installation
                  </Link>
                </li>
                <li>
                  <Link href="/monitoring" className="hover:text-white">
                    24/7 Monitoring
                  </Link>
                </li>
                <li>
                  <Link href="/maintenance" className="hover:text-white">
                    System Maintenance
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-white">
                    Technical Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Emergency: 0800 SECURE</li>
                <li>Sales: 0800 NEXT ISP</li>
                <li>support@nextisp.co.za</li>
                <li>24/7 Emergency Response</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Next ISP Security Solutions. All rights reserved. Licensed Security Provider.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
