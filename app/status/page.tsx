import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle,
  Clock,
  Wifi,
  Server,
  Globe,
  Shield,
  Wrench,
  TrendingUp,
  Calendar,
  Bell,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function StatusPage() {
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
                      <Link href="/help" className="w-full">
                        Help Centre
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/status" className="w-full text-orange-500 font-medium">
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
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                <Bell className="w-4 h-4 mr-2" />
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">System Status</h1>
            <p className="text-xl text-orange-100 mb-6">Real-time status of all Next ISP services and infrastructure</p>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-6 h-6 text-green-300" />
              <span className="text-lg font-semibold">All Systems Operational</span>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status Overview */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900">Overall Status</h3>
                <p className="text-green-600 font-medium">Operational</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-500" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900">Uptime (30 days)</h3>
                <p className="text-green-600 font-medium">99.98%</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900">Active Connections</h3>
                <p className="text-blue-600 font-medium">45,892</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900">Avg Response Time</h3>
                <p className="text-orange-600 font-medium">12ms</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Status */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Status</h2>
            <p className="text-lg text-gray-600">Current operational status of all our services</p>
          </div>

          <div className="space-y-4">
            {/* Fibre Services */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Wifi className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Fibre Internet Services</h3>
                      <p className="text-gray-600">All fibre connections and infrastructure</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <Badge className="bg-green-100 text-green-800">Operational</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wireless Services */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Wireless & LTE Services</h3>
                      <p className="text-gray-600">Wireless internet and mobile connectivity</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <Badge className="bg-green-100 text-green-800">Operational</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Portal */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Server className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Customer Portal</h3>
                      <p className="text-gray-600">Online account management and billing</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <Badge className="bg-green-100 text-green-800">Operational</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Systems */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Support & Monitoring</h3>
                      <p className="text-gray-600">24/7 support systems and network monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <Badge className="bg-green-100 text-green-800">Operational</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regional Status */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Regional Network Status</h2>
            <p className="text-lg text-gray-600">Network performance across our coverage areas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Western Cape</span>
                  <Badge className="bg-green-100 text-green-800">Excellent</Badge>
                </CardTitle>
                <CardDescription>Cape Town, Stellenbosch, Paarl</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Network Performance</span>
                    <span>98%</span>
                  </div>
                  <Progress value={98} className="h-2" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Avg Speed</p>
                    <p className="font-semibold">95 Mbps</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Latency</p>
                    <p className="font-semibold">8ms</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Gauteng</span>
                  <Badge className="bg-green-100 text-green-800">Excellent</Badge>
                </CardTitle>
                <CardDescription>Johannesburg, Pretoria, Sandton</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Network Performance</span>
                    <span>97%</span>
                  </div>
                  <Progress value={97} className="h-2" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Avg Speed</p>
                    <p className="font-semibold">92 Mbps</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Latency</p>
                    <p className="font-semibold">12ms</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>KwaZulu-Natal</span>
                  <Badge className="bg-green-100 text-green-800">Good</Badge>
                </CardTitle>
                <CardDescription>Durban, Pietermaritzburg</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Network Performance</span>
                    <span>94%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Avg Speed</p>
                    <p className="font-semibold">88 Mbps</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Latency</p>
                    <p className="font-semibold">15ms</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scheduled Maintenance */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Scheduled Maintenance</h2>
            <p className="text-lg text-gray-600">Upcoming maintenance windows and system updates</p>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <Wrench className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">Network Infrastructure Upgrade</h3>
                      <Badge className="bg-blue-100 text-blue-800">Scheduled</Badge>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Routine maintenance to upgrade core network equipment in the Western Cape region.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                        <span>January 28, 2025</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-gray-500" />
                        <span>02:00 - 06:00 SAST</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="w-4 h-4 mr-2 text-gray-500" />
                        <span>Western Cape</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <Server className="w-5 h-5 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">Customer Portal Update</h3>
                      <Badge className="bg-purple-100 text-purple-800">Scheduled</Badge>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Scheduled update to the customer portal with new features and security improvements.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                        <span>February 5, 2025</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-gray-500" />
                        <span>01:00 - 03:00 SAST</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="w-4 h-4 mr-2 text-gray-500" />
                        <span>All Regions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Incidents</h2>
            <p className="text-lg text-gray-600">Past 30 days incident history</p>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">Intermittent Connectivity Issues - Gauteng</h3>
                      <Badge className="bg-green-100 text-green-800">Resolved</Badge>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Some customers in Johannesburg experienced intermittent connectivity issues due to a fiber cable
                      fault.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-500">
                      <div>
                        <span className="font-medium">Started:</span> Jan 15, 14:30 SAST
                      </div>
                      <div>
                        <span className="font-medium">Resolved:</span> Jan 15, 16:45 SAST
                      </div>
                      <div>
                        <span className="font-medium">Duration:</span> 2h 15m
                      </div>
                      <div>
                        <span className="font-medium">Affected:</span> ~1,200 customers
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">Customer Portal Slow Response</h3>
                      <Badge className="bg-green-100 text-green-800">Resolved</Badge>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Customer portal experienced slower than normal response times during peak hours.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-500">
                      <div>
                        <span className="font-medium">Started:</span> Jan 8, 18:00 SAST
                      </div>
                      <div>
                        <span className="font-medium">Resolved:</span> Jan 8, 20:30 SAST
                      </div>
                      <div>
                        <span className="font-medium">Duration:</span> 2h 30m
                      </div>
                      <div>
                        <span className="font-medium">Affected:</span> Portal users
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-gray-600 mb-4">No other incidents in the past 30 days</p>
              <Button variant="outline" className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50">
                View Full Incident History
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-orange-100 mb-8">
            Subscribe to receive notifications about service status, maintenance, and incidents
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3">
              <Bell className="w-5 h-5 mr-2" />
              Subscribe to Updates
            </Button>
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
              For technical support or service inquiries, contact us at{" "}
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
