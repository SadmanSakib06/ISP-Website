import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  AlertCircle,
  Wifi,
  Router,
  CreditCard,
  Settings,
  Shield,
  Download,
  Video,
  FileText,
  ChevronRight,
  ChevronDown,
  Users,
  Globe,
  Smartphone,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function HelpPage() {
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
                  <DropdownMenuTrigger className="flex items-center text-orange-500 px-3 py-2 text-sm font-medium">
                    Support <ChevronDown className="w-4 h-4 ml-1" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href="/help" className="w-full text-orange-500 font-medium">
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
              <Link href="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Get Help</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Help Centre</h1>
            <p className="text-xl text-orange-100 mb-8">Find answers, guides, and get the support you need</p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for help articles, guides, or FAQs..."
                  className="pl-12 pr-4 py-4 text-lg bg-white text-gray-900 border-0 rounded-lg shadow-lg"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Options */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 text-sm mb-4">Chat with our support team</p>
                <Badge className="bg-green-100 text-green-800">Online Now</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Call Support</h3>
                <p className="text-gray-600 text-sm mb-4">0800 NEXT ISP</p>
                <Badge className="bg-blue-100 text-blue-800">24/7 Available</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm mb-4">Get detailed help via email</p>
                <Badge className="bg-purple-100 text-purple-800">24h Response</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600 text-sm mb-4">Connect with other users</p>
                <Badge className="bg-green-100 text-green-800">Active Forum</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Help Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="getting-started" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="technical">Technical Support</TabsTrigger>
              <TabsTrigger value="billing">Billing & Account</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
            </TabsList>

            {/* Getting Started Tab */}
            <TabsContent value="getting-started" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Getting Started</h2>
                <p className="text-lg text-gray-600">Everything you need to know to get up and running</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                      <BookOpen className="w-5 h-5 text-orange-500" />
                    </div>
                    <CardTitle className="text-lg">New Customer Guide</CardTitle>
                    <CardDescription>Complete setup guide for new customers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        Account activation
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        Equipment setup
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        First connection
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full mt-4">
                      Read Guide
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                      <Router className="w-5 h-5 text-blue-500" />
                    </div>
                    <CardTitle className="text-lg">Router Setup</CardTitle>
                    <CardDescription>Step-by-step router configuration</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        Physical connection
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        WiFi configuration
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        Security settings
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full mt-4">
                      Setup Guide
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                      <Settings className="w-5 h-5 text-green-500" />
                    </div>
                    <CardTitle className="text-lg">Customer Portal</CardTitle>
                    <CardDescription>How to use your online account</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        Account management
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        Billing overview
                      </li>
                      <li className="flex items-center">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        Support tickets
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full mt-4">
                      Portal Guide
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Technical Support Tab */}
            <TabsContent value="technical" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Support</h2>
                <p className="text-lg text-gray-600">Technical guides and troubleshooting resources</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Common Issues</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <AlertCircle className="w-5 h-5 text-orange-500 mt-1" />
                          <div>
                            <h4 className="font-medium">Slow Internet Speed</h4>
                            <p className="text-sm text-gray-600 mt-1">Diagnose and fix speed issues</p>
                            <Button variant="link" className="p-0 h-auto text-orange-500">
                              View Solution →
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <Wifi className="w-5 h-5 text-blue-500 mt-1" />
                          <div>
                            <h4 className="font-medium">WiFi Connection Problems</h4>
                            <p className="text-sm text-gray-600 mt-1">Resolve WiFi connectivity issues</p>
                            <Button variant="link" className="p-0 h-auto text-orange-500">
                              View Solution →
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <Router className="w-5 h-5 text-green-500 mt-1" />
                          <div>
                            <h4 className="font-medium">Router Not Working</h4>
                            <p className="text-sm text-gray-600 mt-1">Troubleshoot router issues</p>
                            <Button variant="link" className="p-0 h-auto text-orange-500">
                              View Solution →
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Technical Resources</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <Download className="w-5 h-5 text-purple-500" />
                          <div>
                            <h4 className="font-medium">Software Downloads</h4>
                            <p className="text-sm text-gray-600">Drivers, firmware, and utilities</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <Video className="w-5 h-5 text-red-500" />
                          <div>
                            <h4 className="font-medium">Video Tutorials</h4>
                            <p className="text-sm text-gray-600">Step-by-step video guides</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-blue-500" />
                          <div>
                            <h4 className="font-medium">Technical Documentation</h4>
                            <p className="text-sm text-gray-600">Detailed technical manuals</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Billing & Account Tab */}
            <TabsContent value="billing" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Billing & Account</h2>
                <p className="text-lg text-gray-600">Manage your account, billing, and payments</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                      <CreditCard className="w-5 h-5 text-green-500" />
                    </div>
                    <CardTitle className="text-lg">Payment Methods</CardTitle>
                    <CardDescription>Add, update, or change payment methods</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Manage Payments
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                      <FileText className="w-5 h-5 text-blue-500" />
                    </div>
                    <CardTitle className="text-lg">View Bills</CardTitle>
                    <CardDescription>Access current and past billing statements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      View Bills
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                      <Settings className="w-5 h-5 text-orange-500" />
                    </div>
                    <CardTitle className="text-lg">Account Settings</CardTitle>
                    <CardDescription>Update personal information and preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Account Settings
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">Billing FAQs</h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-medium mb-2">When will I be billed?</h4>
                      <p className="text-gray-600">
                        Billing occurs monthly on the same date you signed up. You'll receive an email notification 3
                        days before your billing date.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-medium mb-2">What payment methods do you accept?</h4>
                      <p className="text-gray-600">
                        We accept credit cards, debit cards, EFT, and debit orders. Prepaid services can be topped up
                        via various methods including retail outlets.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-medium mb-2">How do I dispute a charge?</h4>
                      <p className="text-gray-600">
                        Contact our billing support team within 30 days of the charge. We'll investigate and resolve any
                        billing discrepancies promptly.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Services Tab */}
            <TabsContent value="services" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Services</h2>
                <p className="text-lg text-gray-600">Information about our internet and additional services</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Internet Services</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <Globe className="w-5 h-5 text-orange-500" />
                          <div>
                            <h4 className="font-medium">Fibre Internet</h4>
                            <p className="text-sm text-gray-600">High-speed fibre connections</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <Wifi className="w-5 h-5 text-blue-500" />
                          <div>
                            <h4 className="font-medium">Wireless Internet</h4>
                            <p className="text-sm text-gray-600">5G and LTE connectivity</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <Smartphone className="w-5 h-5 text-green-500" />
                          <div>
                            <h4 className="font-medium">Mobile Hotspots</h4>
                            <p className="text-sm text-gray-600">Portable internet solutions</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Additional Services</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <Shield className="w-5 h-5 text-purple-500" />
                          <div>
                            <h4 className="font-medium">Smart Home Security</h4>
                            <p className="text-sm text-gray-600">Complete security solutions</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <Router className="w-5 h-5 text-red-500" />
                          <div>
                            <h4 className="font-medium">Equipment & Devices</h4>
                            <p className="text-sm text-gray-600">Routers, modems, and accessories</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <Globe className="w-5 h-5 text-blue-500" />
                          <div>
                            <h4 className="font-medium">Web Hosting</h4>
                            <p className="text-sm text-gray-600">Website and email hosting</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Troubleshooting Tab */}
            <TabsContent value="troubleshooting" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Troubleshooting</h2>
                <p className="text-lg text-gray-600">Quick fixes for common problems</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Connection Issues</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                          No Internet Connection
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                          <li>Check all cable connections</li>
                          <li>Restart your router (unplug for 30 seconds)</li>
                          <li>Check for service outages on our status page</li>
                          <li>Contact support if issue persists</li>
                        </ol>
                        <Button variant="outline" className="w-full mt-4">
                          Detailed Guide
                        </Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <Wifi className="w-5 h-5 text-orange-500 mr-2" />
                          Slow WiFi Speed
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                          <li>Move closer to your router</li>
                          <li>Check for interference from other devices</li>
                          <li>Restart your WiFi connection</li>
                          <li>Update your device's network drivers</li>
                        </ol>
                        <Button variant="outline" className="w-full mt-4">
                          Speed Test Tool
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Equipment Issues</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <Router className="w-5 h-5 text-blue-500 mr-2" />
                          Router Problems
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                          <li>Check power and ethernet connections</li>
                          <li>Look for blinking lights (refer to manual)</li>
                          <li>Factory reset if necessary</li>
                          <li>Contact us for replacement if faulty</li>
                        </ol>
                        <Button variant="outline" className="w-full mt-4">
                          Router Manual
                        </Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <Settings className="w-5 h-5 text-green-500 mr-2" />
                          Configuration Issues
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                          <li>Access router admin panel (192.168.1.1)</li>
                          <li>Check internet connection settings</li>
                          <li>Verify WiFi password and security</li>
                          <li>Update firmware if available</li>
                        </ol>
                        <Button variant="outline" className="w-full mt-4">
                          Configuration Guide
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Can't find what you're looking for? Our support team is here to help 24/7
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600 text-sm mb-4">Average response time: 2 minutes</p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">Start Chat</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm mb-4">0800 NEXT ISP (24/7)</p>
                <Button variant="outline" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm mb-4">Response within 24 hours</p>
                <Button variant="outline" className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Image
              src="/images/logo.jpeg"
              alt="Next ISP Logo"
              width={120}
              height={40}
              className="h-10 w-auto mx-auto mb-4"
            />
            <p className="text-gray-400 mb-6">
              Need immediate assistance? Contact us at{" "}
              <a href="tel:0800639847" className="text-orange-400 hover:text-orange-300">
                0800 NEXT ISP
              </a>{" "}
              or{" "}
              <a href="mailto:support@nextisp.co.za" className="text-orange-400 hover:text-orange-300">
                support@nextisp.co.za
              </a>
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500">&copy; 2025 Next ISP. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
