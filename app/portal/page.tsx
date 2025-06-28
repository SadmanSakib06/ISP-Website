import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  User,
  CreditCard,
  Wifi,
  Download,
  Bell,
  Settings,
  HelpCircle,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
} from "lucide-react"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export default function CustomerPortal() {
  return (
    <div className="min-h-screen bg-gray-50">
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
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, John</h1>
          <p className="text-gray-600 mt-2">Manage your account and services</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Current Plan</p>
                  <p className="text-2xl font-bold text-gray-900">100 Mbps</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-orange-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Data Used</p>
                  <p className="text-2xl font-bold text-gray-900">245 GB</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Download className="w-6 h-6 text-orange-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monthly Bill</p>
                  <p className="text-2xl font-bold text-gray-900">R599</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-orange-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Connection</p>
                  <p className="text-2xl font-bold text-green-600">Active</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Activity className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Usage Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-orange-500" />
                    Usage Overview
                  </CardTitle>
                  <CardDescription>Your internet usage this month</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Data Usage</span>
                      <span className="text-sm text-gray-600">245 GB / Unlimited</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <ArrowDownRight className="w-6 h-6 text-green-500 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Download</p>
                      <p className="text-lg font-semibold">98.5 Mbps</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <ArrowUpRight className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Upload</p>
                      <p className="text-lg font-semibold">47.2 Mbps</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your account activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Payment received</p>
                        <p className="text-xs text-gray-600">2 days ago</p>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        R599
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Speed test completed</p>
                        <p className="text-xs text-gray-600">1 week ago</p>
                      </div>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        98 Mbps
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Service upgrade</p>
                        <p className="text-xs text-gray-600">2 weeks ago</p>
                      </div>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                        100 Mbps
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button
                    variant="outline"
                    className="h-20 flex flex-col bg-white text-gray-900 border-gray-300 hover:bg-orange-50 hover:border-orange-500"
                  >
                    <CreditCard className="w-6 h-6 mb-2 text-orange-500" />
                    <span className="text-sm">Pay Bill</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex flex-col bg-white text-gray-900 border-gray-300 hover:bg-orange-50 hover:border-orange-500"
                  >
                    <ArrowUpRight className="w-6 h-6 mb-2 text-orange-500" />
                    <span className="text-sm">Upgrade Plan</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex flex-col bg-white text-gray-900 border-gray-300 hover:bg-orange-50 hover:border-orange-500"
                  >
                    <HelpCircle className="w-6 h-6 mb-2 text-orange-500" />
                    <span className="text-sm">Get Support</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex flex-col bg-white text-gray-900 border-gray-300 hover:bg-orange-50 hover:border-orange-500"
                  >
                    <Activity className="w-6 h-6 mb-2 text-orange-500" />
                    <span className="text-sm">Speed Test</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Current Bill */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-orange-500" />
                    Current Bill
                  </CardTitle>
                  <CardDescription>December 2024</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>100 Mbps Fibre Plan</span>
                    <span className="font-semibold">R599.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Router Rental</span>
                    <span className="font-semibold">R50.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>VAT (15%)</span>
                    <span className="font-semibold">R97.35</span>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Due</span>
                    <span className="text-orange-500">R746.35</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Due Date</span>
                    <span>January 15, 2025</span>
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Pay Now</Button>
                </CardContent>
              </Card>

              {/* Payment History */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment History</CardTitle>
                  <CardDescription>Recent payments and invoices</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">November 2024</p>
                        <p className="text-sm text-gray-600">Paid on Nov 12, 2024</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">R746.35</p>
                        <Badge className="bg-green-100 text-green-800">Paid</Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">October 2024</p>
                        <p className="text-sm text-gray-600">Paid on Oct 10, 2024</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">R746.35</p>
                        <Badge className="bg-green-100 text-green-800">Paid</Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">September 2024</p>
                        <p className="text-sm text-gray-600">Paid on Sep 8, 2024</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">R599.00</p>
                        <Badge className="bg-green-100 text-green-800">Paid</Badge>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4 bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                  >
                    View All Invoices
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="support" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Create Ticket */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="w-5 h-5 mr-2 text-orange-500" />
                    Create Support Ticket
                  </CardTitle>
                  <CardDescription>Get help with your service</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Create New Ticket</Button>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50">
                      Technical Issue
                    </Button>
                    <Button variant="outline" className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50">
                      Billing Query
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Active Tickets */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Support Tickets</CardTitle>
                  <CardDescription>Track your support requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">Slow internet speeds</h4>
                        <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Ticket #12345</p>
                      <p className="text-sm text-gray-600">Created 2 days ago</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">Router configuration help</h4>
                        <Badge className="bg-green-100 text-green-800">Resolved</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Ticket #12344</p>
                      <p className="text-sm text-gray-600">Resolved 1 week ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Current Services */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wifi className="w-5 h-5 mr-2 text-orange-500" />
                    Your Services
                  </CardTitle>
                  <CardDescription>Manage your active services</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">100 Mbps Fibre</h4>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Unlimited data • R599/month</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                        Upgrade
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                      >
                        Downgrade
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Router Rental</h4>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Wi-Fi 6 Router • R50/month</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                    >
                      Manage
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Available Upgrades */}
              <Card>
                <CardHeader>
                  <CardTitle>Available Upgrades</CardTitle>
                  <CardDescription>Enhance your internet experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">200 Mbps Fibre</h4>
                    <p className="text-sm text-gray-600 mb-4">Double your speed • R799/month</p>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                      Upgrade Now
                    </Button>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">1 Gbps Fibre</h4>
                    <p className="text-sm text-gray-600 mb-4">Ultimate speed • R999/month</p>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                      Upgrade Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="account" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Account Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2 text-orange-500" />
                    Account Information
                  </CardTitle>
                  <CardDescription>Your personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Full Name</label>
                    <p className="text-lg">John Doe</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Email</label>
                    <p className="text-lg">john.doe@email.com</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Phone</label>
                    <p className="text-lg">+27 82 123 4567</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Account Number</label>
                    <p className="text-lg">NXT-001234567</p>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">Edit Details</Button>
                </CardContent>
              </Card>

              {/* Security Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-orange-500" />
                    Security Settings
                  </CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Password</p>
                      <p className="text-sm text-gray-600">Last changed 3 months ago</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                    >
                      Change
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-600">Not enabled</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                    >
                      Enable
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Login Notifications</p>
                      <p className="text-sm text-gray-600">Email notifications enabled</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                    >
                      Manage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
