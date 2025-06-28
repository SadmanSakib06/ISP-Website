'use client'
import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
Server,
Shield,
Zap,
HardDrive,
Globe,
Database,
CheckCircle,
Headphones,
Lock,
TrendingUp,
ChevronDown,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
export default function HostingPage() {
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
                  <DropdownMenuTrigger asChild>
                     <Button variant="ghost" className="flex items-center text-orange-500 px-3 py-2 text-sm font-medium">
                        Services 
                        <ChevronDown className="w-4 h-4 ml-1" />
                     </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                     <DropdownMenuItem asChild>
                        <Link href="/fibre" className="w-full">
                        Fibre</Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                        <Link href="/prepaid-fibre" className="w-full">
                        Prepaid Fibre</Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                        <Link href="/wireless" className="w-full">
                        Wireless</Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                        <Link href="/hotspots" className="w-full">
                        Hotspots</Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                        <Link href="/hosting" className="w-full text-orange-500 font-medium">
                        Hosting</Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                        <Link href="/devices" className="w-full">
                        Devices</Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                        <Link href="/smart-homes" className="w-full">
                        Smart Homes Security</Link>
                     </DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
               <Link href="/providers" className="text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium">
               Providers
               </Link>
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <Button variant="ghost" className="flex items-center text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium">
                        Support 
                        <ChevronDown className="w-4 h-4 ml-1" />
                     </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                     <DropdownMenuItem asChild>
                        <Link href="/help" className="w-full">
                        Help Centre</Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                        <Link href="/status" className="w-full">
                        Status Pages</Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                        <Link href="/contact" className="w-full">
                        Get Help</Link>
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
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
         </div>
      </div>
   </div>
</nav>
{/* Hero Section */}
<section className="bg-gradient-to-br from-orange-500 to-orange-600 py-20">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center text-white">
         <h1 className="text-5xl font-bold mb-6">Web Hosting & Cloud Services</h1>
         <p className="text-xl mb-8 max-w-3xl mx-auto text-orange-100">
            Reliable, fast, and secure hosting solutions powered by our premium network infrastructure. From shared
            hosting to dedicated servers, we've got you covered.
         </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 text-lg">
            View Hosting Plans
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 px-8 py-4 text-lg underline">
            Free Migration
            </Button>
         </div>
      </div>
   </div>
</section>
{/* Features */}
<section className="py-20">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
         <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Hosting?</h2>
         <p className="text-xl text-gray-600">Built on our premium network with local support</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         <Card className="text-center border-2 hover:border-orange-200 transition-all">
            <CardHeader>
               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-500" />
               </div>
               <CardTitle>Lightning Fast</CardTitle>
            </CardHeader>
            <CardContent>
               <CardDescription className="text-base">
                  SSD storage and our premium network ensure blazing-fast website performance
               </CardDescription>
            </CardContent>
         </Card>
         <Card className="text-center border-2 hover:border-orange-200 transition-all">
            <CardHeader>
               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-500" />
               </div>
               <CardTitle>Secure & Protected</CardTitle>
            </CardHeader>
            <CardContent>
               <CardDescription className="text-base">
                  Advanced security features, SSL certificates, and daily backups included
               </CardDescription>
            </CardContent>
         </Card>
         <Card className="text-center border-2 hover:border-orange-200 transition-all">
            <CardHeader>
               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-orange-500" />
               </div>
               <CardTitle>24/7 Support</CardTitle>
            </CardHeader>
            <CardContent>
               <CardDescription className="text-base">
                  Local South African support team available around the clock
               </CardDescription>
            </CardContent>
         </Card>
         <Card className="text-center border-2 hover:border-orange-200 transition-all">
            <CardHeader>
               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-500" />
               </div>
               <CardTitle>99.9% Uptime</CardTitle>
            </CardHeader>
            <CardContent>
               <CardDescription className="text-base">
                  Guaranteed uptime with redundant infrastructure and monitoring
               </CardDescription>
            </CardContent>
         </Card>
      </div>
   </div>
</section>
{/* Hosting Plans */}
<section className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
   <h2 className="text-4xl font-bold text-gray-900 mb-4">Hosting Plans</h2>
   <p className="text-xl text-gray-600">Choose the perfect hosting solution for your needs</p>
</div>
<Tabs defaultValue="shared" className="w-full">
<TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
   <TabsTrigger value="shared">Shared</TabsTrigger>
   <TabsTrigger value="vps">VPS</TabsTrigger>
   <TabsTrigger value="dedicated">Dedicated</TabsTrigger>
   <TabsTrigger value="cloud">Cloud</TabsTrigger>
</TabsList>
<TabsContent value="shared" className="space-y-8">
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Starter Plan */}
      <Card className="border-2 hover:border-orange-200 transition-all">
         <CardHeader className="text-center">
            <Badge className="bg-gray-100 text-gray-800 mb-4 w-fit mx-auto">Starter</Badge>
            <CardTitle className="text-2xl">Personal</CardTitle>
            <div className="text-3xl font-bold text-orange-500 mt-2">R89</div>
            <CardDescription>per month</CardDescription>
         </CardHeader>
         <CardContent className="space-y-4">
            <ul className="space-y-3 text-sm">
               <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                  <span>1 Website</span>
               </li>
               <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                  <span>10GB SSD Storage</span>
               </li>
               <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                  <span>100GB Bandwidth</span>
               </li>
               <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                  <span>5 Email Accounts</span>
               </li>
               <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                  <span>Free SSL Certificate</span>
               </li>
               <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                  <span>Daily Backups</span>
               </li>
            </ul>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
         </CardContent>
      </Card>
      {/* Business Plan */}
      <Card className="border-2 border-orange-500 hover:border-orange-600 transition-all relative">
         <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-orange-500 text-white px-3 py-1">Popular</Badge>
         </div>
         <CardHeader className="text-center">
            <Badge className="bg-orange-100 text-orange-800 mb-4 w-fit mx-auto">Business</Badge>
            <CardTitle className="text-2xl">Professional</CardTitle>
            <div className="text-3xl font-bold text-orange-500 mt-2">R199</div>
            <CardDescription>per month</CardDescription>
         </CardHeader>
         <CardContent className="space-y-4">
            <ul className="space-y-3 text-sm">
               <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                  <span>5 Websites</span>
               </li>
               <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                  <span>50GB SSD Storage</span>
               </li>
               <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                  <span>500GB Bandwidth</span>
               </li>
               <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                  <span>25 Email Accounts</span>
               </li>
               <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                  <span>Free SSL Certificate</span>
               </li>
               <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                  <span>Daily Backups</span>
               </li>
            </ul>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
         </CardContent>
      </Card>
      {/* Enterprise Plan */}
      <Card className="border-2 hover:border-orange-200 transition-all">
         <CardHeader className="text-center">
            <Badge className="bg-gray-100 text-gray-800 mb-4 w-fit mx-auto">Enterprise</Badge>
            <CardTitle className="text-2xl">Premium</CardTitle>
            <div className="text-3xl font-bold text-orange-500 mt-2">R399</div>
            <CardDescription>per month</CardDescription>
         </CardHeader>
         <CardContent className="space-y-4">
            <ul className="space-y-3 text-sm">
               <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                  <span>Unlimited Websites</span>
               </li>
               <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                  <span>100GB SSD Storage</span>
               </li>
               <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                  <span>Unlimited Bandwidth</span>
               </li>
               <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                  <span>Unlimited Email</span>
               </li>
               <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                  <span>Free SSL Certificate</span>
               </li>
               <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                  <span>Priority Support</span>
               </li>
            </ul>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
         </CardContent>
      </Card>
   </div>
</TabsContent>
<TabsContent value="vps" className="space-y-8">
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* VPS Basic */}
      <Card className="border-2 hover:border-orange-200 transition-all">
         <CardHeader className="text-center">
            <Badge className="bg-blue-100 text-blue-800 mb-4 w-fit mx-auto">VPS Basic</Badge>
            <CardTitle className="text-2xl">VPS Starter</CardTitle>
            <div className="text-3xl font-bold text-orange-500 mt-2">R299</div>
            <CardDescription>per month</CardDescription>
         </CardHeader>
         <CardContent className="space-y-4">
            <ul className="space-y-3 text-sm">
               <li className="flex items-center">
                  <Server className="w-4 h-4 mr-3 text-orange-500" />
                  <span>2 CPU Cores</span>
               </li>
               <li className="flex items-center">
                  <HardDrive className="w-4 h-4 mr-3 text-orange-500" />
                  <span>4GB RAM</span>
               </li>
               <li className="flex items-center">
                  <Database className="w-4 h-4 mr-3 text-orange-500" />
                  <span>50GB SSD Storage</span>
               </li>
               <li className="flex items-center">
                  <Globe className="w-4 h-4 mr-3 text-orange-500" />
                  <span>1TB Bandwidth</span>
               </li>
               <li className="flex items-center">
                  <Shield className="w-4 h-4 mr-3 text-orange-500" />
                  <span>DDoS Protection</span>
               </li>
               <li className="flex items-center">
                  <Lock className="w-4 h-4 mr-3 text-orange-500" />
                  <span>Root Access</span>
               </li>
            </ul>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
         </CardContent>
      </Card>
      {/* VPS Pro */}
      <Card className="border-2 border-orange-500 hover:border-orange-600 transition-all relative">
         <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-orange-500 text-white px-3 py-1">Recommended</Badge>
         </div>
         <CardHeader className="text-center">
            <Badge className="bg-blue-100 text-blue-800 mb-4 w-fit mx-auto">VPS Pro</Badge>
            <CardTitle className="text-2xl">VPS Professional</CardTitle>
            <div className="text-3xl font-bold text-orange-500 mt-2">R599</div>
            <CardDescription>per month</CardDescription>
         </CardHeader>
         <CardContent className="space-y-4">
            <ul className="space-y-3 text-sm">
               <li className="flex items-center">
                  <Server className="w-4 h-4 mr-3 text-orange-500" />
                  <span>4 CPU Cores</span>
               </li>
               <li className="flex items-center">
                  <HardDrive className="w-4 h-4 mr-3 text-orange-500" />
                  <span>8GB RAM</span>
               </li>
               <li className="flex items-center">
                  <Database className="w-4 h-4 mr-3 text-orange-500" />
                  <span>100GB SSD Storage</span>
               </li>
               <li className="flex items-center">
                  <Globe className="w-4 h-4 mr-3 text-orange-500" />
                  <span>2TB Bandwidth</span>
               </li>
               <li className="flex items-center">
                  <Shield className="w-4 h-4 mr-3 text-orange-500" />
                  <span>Advanced DDoS Protection</span>
               </li>
               <li className="flex items-center">
                  <Lock className="w-4 h-4 mr-3 text-orange-500" />
                  <span>Full Root Access</span>
               </li>
            </ul>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
         </CardContent>
      </Card>
      {/* VPS Enterprise */}
      <Card className="border-2 hover:border-orange-200 transition-all">
         <CardHeader className="text-center">
            <Badge className="bg-blue-100 text-blue-800 mb-4 w-fit mx-auto">VPS Enterprise</Badge>
            <CardTitle className="text-2xl">VPS Premium</CardTitle>
            <div className="text-3xl font-bold text-orange-500 mt-2">R999</div>
            <CardDescription>per month</CardDescription>
         </CardHeader>
         <CardContent className="space-y-4">
            <ul className="space-y-3 text-sm">
               <li className="flex items-center">
                  <Server className="w-4 h-4 mr-3 text-orange-500" />
                  <span>8 CPU Cores</span>
               </li>
               <li className="flex items-center">
                  <HardDrive className="w-4 h-4 mr-3 text-orange-500" />
                  <span>16GB RAM</span>
               </li>
               <li className="flex items-center">
                  <Database className="w-4 h-4 mr-3 text-orange-500" />
                  <span>200GB SSD Storage</span>
               </li>
               <li className="flex items-center">
                  <Globe className="w-4 h-4 mr-3 text-orange-500" />
                  <span>5TB Bandwidth</span>
               </li>
               <li className="flex items-center">
                  <Shield className="w-4 h-4 mr-3 text-orange-500" />
                  <span>Enterprise DDoS Protection</span>
               </li>
               <li className="flex items-center">
                  <Headphones className="w-4 h-4 mr-3 text-orange-500" />
                  <span>Priority Support</span>
               </li>
            </ul>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
         </CardContent>
      </Card>
   </div>
</TabsContent>
<TabsContent value="dedicated" className="space-y-8">
   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Dedicated Basic */}
      <Card className="border-2 hover:border-orange-200 transition-all">
         <CardHeader className="text-center">
            <Badge className="bg-purple-100 text-purple-800 mb-4 w-fit mx-auto">Dedicated</Badge>
            <CardTitle className="text-2xl">Dedicated Server</CardTitle>
            <div className="text-3xl font-bold text-orange-500 mt-2">R1,999</div>
            <CardDescription>per month</CardDescription>
         </CardHeader>
         <CardContent className="space-y-4">
            <ul className="space-y-3 text-sm">
               <li className="flex items-center">
                  <Server className="w-4 h-4 mr-3 text-orange-500" />
                  <span>Intel Xeon E5-2620 (6 cores)</span>
               </li>
               <li className="flex items-center">
                  <HardDrive className="w-4 h-4 mr-3 text-orange-500" />
                  <span>1TB SATA HDD</span>
               </li>
            </ul>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
         </CardContent>
      </Card>
   </div>
</TabsContent>
</Tabs>
</div>
</section>
</div>)}