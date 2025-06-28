import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { CreditCard, Zap, Clock, Smartphone, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function PrepaidFibrePage() {
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
                      <Link href="/fibre" className="w-full">
                        Fibre
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/prepaid-fibre" className="w-full text-orange-500 font-medium">
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
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Buy Data</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Prepaid Fibre</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-orange-100">
              No contracts, no monthly fees. Pay as you go with our flexible prepaid fibre packages. Perfect for
              students, temporary stays, or budget-conscious users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg">
                Buy Data Now
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 px-8 py-4 text-lg underline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Purchase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Data Purchase</h2>
            <p className="text-lg text-gray-600">Buy data instantly with your account number</p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Buy Prepaid Data</CardTitle>
              <CardDescription>Enter your account details to purchase data bundles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Account Number</label>
                  <Input placeholder="Enter your account number" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Data Bundle</label>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="h-16 flex flex-col bg-white text-gray-900 border-gray-300 hover:bg-orange-50 hover:border-orange-500"
                    >
                      <span className="font-bold">10GB</span>
                      <span className="text-sm text-orange-500">R99</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-16 flex flex-col bg-white text-gray-900 border-gray-300 hover:bg-orange-50 hover:border-orange-500"
                    >
                      <span className="font-bold">25GB</span>
                      <span className="text-sm text-orange-500">R199</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-16 flex flex-col bg-white text-gray-900 border-gray-300 hover:bg-orange-50 hover:border-orange-500"
                    >
                      <span className="font-bold">50GB</span>
                      <span className="text-sm text-orange-500">R349</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-16 flex flex-col bg-white text-gray-900 border-gray-300 hover:bg-orange-50 hover:border-orange-500"
                    >
                      <span className="font-bold">100GB</span>
                      <span className="text-sm text-orange-500">R599</span>
                    </Button>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg">
                <CreditCard className="w-5 h-5 mr-2" />
                Proceed to Payment
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Prepaid Fibre?</h2>
            <p className="text-xl text-gray-600">Flexibility and control over your internet usage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-2 hover:border-orange-200 transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle>No Contracts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Pay only for what you use with no long-term commitments
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-orange-200 transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle>Instant Activation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Data is activated immediately after successful payment
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-orange-200 transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle>Flexible Validity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Data bundles with extended validity periods up to 90 days
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-orange-200 transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle>Easy Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Monitor usage and buy data through our mobile app
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Prepaid Data Packages</h2>
            <p className="text-xl text-gray-600">Choose from our range of affordable data bundles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-orange-200 transition-all">
              <CardHeader className="text-center">
                <Badge className="bg-orange-100 text-orange-800 mb-4 w-fit mx-auto">Starter</Badge>
                <CardTitle className="text-3xl font-bold text-orange-500">5GB</CardTitle>
                <div className="text-2xl font-bold text-gray-900 mt-2">R59</div>
                <CardDescription>Valid for 30 days</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>5GB Data
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>30 Days Validity
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Instant Activation
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Buy Now</Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-all">
              <CardHeader className="text-center">
                <Badge className="bg-orange-100 text-orange-800 mb-4 w-fit mx-auto">Popular</Badge>
                <CardTitle className="text-3xl font-bold text-orange-500">10GB</CardTitle>
                <div className="text-2xl font-bold text-gray-900 mt-2">R99</div>
                <CardDescription>Valid for 30 days</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>10GB Data
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>30 Days Validity
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Instant Activation
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Buy Now</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500 hover:border-orange-600 transition-all relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white px-3 py-1">Best Value</Badge>
              </div>
              <CardHeader className="text-center">
                <Badge className="bg-orange-100 text-orange-800 mb-4 w-fit mx-auto">Value</Badge>
                <CardTitle className="text-3xl font-bold text-orange-500">25GB</CardTitle>
                <div className="text-2xl font-bold text-gray-900 mt-2">R199</div>
                <CardDescription>Valid for 60 days</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>25GB Data
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>60 Days Validity
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Instant Activation
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Buy Now</Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-all">
              <CardHeader className="text-center">
                <Badge className="bg-orange-100 text-orange-800 mb-4 w-fit mx-auto">Premium</Badge>
                <CardTitle className="text-3xl font-bold text-orange-500">50GB</CardTitle>
                <div className="text-2xl font-bold text-gray-900 mt-2">R349</div>
                <CardDescription>Valid for 90 days</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>50GB Data
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>90 Days Validity
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Instant Activation
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Buy Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get connected in 3 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Choose Your Package</h3>
              <p className="text-gray-600">Select the data bundle that suits your needs and budget</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Make Payment</h3>
              <p className="text-gray-600">Pay securely using your preferred payment method</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Start Browsing</h3>
              <p className="text-gray-600">Your data is activated instantly and ready to use</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Go Prepaid?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Experience the freedom of prepaid fibre with no contracts or hidden fees
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg">
              Buy Data Now
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 px-8 py-4 text-lg underline">
              View All Packages
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
