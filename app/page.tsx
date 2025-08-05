"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Brain,
  Database,
  ChevronDown,
  User,
  Briefcase,
  Zap,
  FolderOpen,
  MessageCircle,
  Terminal,
  Cpu,
  HardDrive,
} from "lucide-react"

// Enhanced Matrix background with circuit patterns
const TechBackground = () => {
  const [drops, setDrops] = useState<Array<{ id: number; x: number; y: number; speed: number; chars: string[] }>>([])

  useEffect(() => {
    const characters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]|\\:;\"'<>,.?/~`"
    const newDrops = []

    for (let i = 0; i < 80; i++) {
      newDrops.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speed: Math.random() * 3 + 1,
        chars: Array.from({ length: 25 }, () => characters[Math.floor(Math.random() * characters.length)]),
      })
    }
    setDrops(newDrops)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Circuit board pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10h80v80h-80z" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="2" fill="currentColor" />
              <circle cx="80" cy="80" r="2" fill="currentColor" />
              <path d="M20 20L80 80M80 20L20 80" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" className="text-cyan-400" />
        </svg>
      </div>

      {/* Matrix rain */}
      <div className="absolute inset-0 opacity-20">
        {drops.map((drop) => (
          <motion.div
            key={drop.id}
            className="absolute text-green-400 font-mono text-sm"
            initial={{ x: drop.x, y: -100 }}
            animate={{
              y: window.innerHeight + 100,
              x: drop.x + Math.sin(Date.now() * 0.001 + drop.id) * 30,
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {drop.chars.map((char, index) => (
              <motion.div
                key={index}
                className="opacity-80"
                animate={{ opacity: [0.8, 0.2, 0.8] }}
                transition={{ duration: 2, delay: index * 0.1, repeat: Number.POSITIVE_INFINITY }}
              >
                {char}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Floating geometric shapes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

// Glitch text effect component
const GlitchText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        textShadow: ["0 0 0 transparent", "2px 0 0 #ff0000, -2px 0 0 #00ffff", "0 0 0 transparent"],
      }}
      transition={{
        duration: 0.1,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 3,
      }}
    >
      {children}
    </motion.div>
  )
}

// Typing animation component
const TypewriterText = ({ text, className = "" }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        className="text-cyan-400"
      >
        |
      </motion.span>
    </span>
  )
}

// Enhanced floating code with more effects
const FloatingCode = () => {
  const cppCodeLines = [
    "#include <iostream>",
    "#include <vector>",
    "#include <algorithm>",
    "using namespace std;",
    "class NeuralNetwork {",
    "  private:",
    "    vector<vector<double>> weights;",
    "    vector<double> biases;",
    "  public:",
    "    void forward_pass();",
    "    void backpropagation();",
    "    double sigmoid(double x) {",
    "      return 1.0 / (1.0 + exp(-x));",
    "    }",
    "};",
    "auto lambda = [](auto x) { return x * x; };",
    "std::unique_ptr<Node> root = std::make_unique<Node>();",
    "template<typename T>",
    "constexpr auto PI = 3.14159265359;",
    "vector<int> data = {1, 2, 3, 4, 5};",
    "sort(data.begin(), data.end());",
    'cout << "AI Model Training..." << endl;',
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {cppCodeLines.map((line, index) => (
        <motion.div
          key={index}
          className="absolute text-cyan-400/40 font-mono text-xs md:text-sm whitespace-nowrap"
          initial={{
            x: -200,
            y: Math.random() * window.innerHeight,
            opacity: 0,
            rotateX: Math.random() * 360,
          }}
          animate={{
            x: window.innerWidth + 200,
            y: Math.random() * window.innerHeight,
            opacity: [0, 0.8, 0],
            rotateX: Math.random() * 360,
          }}
          transition={{
            duration: 20 + Math.random() * 15,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 1.5,
            ease: "linear",
          }}
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 5px rgba(0, 255, 255, 0.5)",
                "0 0 20px rgba(0, 255, 255, 0.8)",
                "0 0 5px rgba(0, 255, 255, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            {line}
          </motion.span>
        </motion.div>
      ))}
    </div>
  )
}

// Enhanced Navigation with holographic effects
const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home", icon: User },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Zap },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "contact", label: "Contact", icon: MessageCircle },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-cyan-400/30" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div className="relative group cursor-pointer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <motion.div
              className="text-3xl font-bold font-mono tracking-wider relative z-10"
              animate={{
                background: [
                  "linear-gradient(45deg, #00ffff, #ff00ff)",
                  "linear-gradient(45deg, #ff00ff, #ffff00)",
                  "linear-gradient(45deg, #ffff00, #00ffff)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              style={{ backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}
            >
              {"<RM/>"}
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-600/20 to-pink-500/20 blur-xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <div className="hidden md:flex space-x-2">
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/30"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                  <span className="font-medium">{item.label}</span>
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-lg"
                      layoutId="activeTab"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

// Enhanced Hero section with 3D effects
const HeroSection = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <TechBackground />
      <FloatingCode />

      <motion.div className="text-center z-10 px-6" style={{ y, opacity }}>
        {/* Profile picture with holographic effect */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <motion.div
            className="w-40 h-40 mx-auto relative"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1">
              <img
                src="/ronit-profile.jpeg"
                alt="Ronit Maheshwari"
                className="w-full h-full rounded-full object-cover bg-gray-800"
              />
            </div>
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 to-purple-500/30 blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </motion.div>

        {/* Enhanced title with glitch effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 relative">
            <motion.span
              className="inline-block"
              animate={{ rotateX: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Hi, I'm{" "}
            </motion.span>
            <GlitchText className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ronit Maheshwari
            </GlitchText>
          </h1>
        </motion.div>

        {/* Typewriter subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto h-20"
        >
          <TypewriterText text="An aspiring AI/ML engineer and tech enthusiast" />
        </motion.div>

        {/* Enhanced buttons with particle effects */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-black font-bold px-8 py-4 text-lg overflow-hidden group"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center">
                <Terminal className="mr-2" size={20} />
                Explore My Work
              </span>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="relative border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent px-8 py-4 text-lg overflow-hidden group"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <motion.div
                className="absolute inset-0 bg-cyan-400"
                initial={{ scale: 0, rotate: 180 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.4 }}
                style={{ originX: 0.5, originY: 0.5 }}
              />
              <span className="relative z-10 flex items-center group-hover:text-black">
                <MessageCircle className="mr-2" size={20} />
                Get in Touch
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.2 }}
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ChevronDown className="text-cyan-400 mb-2" size={32} />
            <motion.div
              className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent rounded-full"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Enhanced About section with 3D cards
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl font-bold text-white mb-16 text-center relative"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.8 }}
          >
            <GlitchText>About Me</GlitchText>
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.p
                className="text-gray-300 text-lg leading-relaxed mb-6"
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                I'm a 2nd-year Computer Science and Engineering Student at JECRC University, Jaipur, specializing in
                Artificial Intelligence and Machine Learning. I'm passionate about harnessing the power of technology to
                drive innovation and solve real-world problems.
              </motion.p>
              <motion.p
                className="text-gray-300 text-lg leading-relaxed"
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Currently building a strong foundation in programming and diving deep into Data Structures and
                Algorithms using advanced C++.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 45 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ rotateY: 5, scale: 1.02 }}
            >
              <Card className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-cyan-400/30 relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(0,255,255,0.1), rgba(128,0,255,0.1))",
                      "linear-gradient(45deg, rgba(128,0,255,0.1), rgba(255,0,128,0.1))",
                      "linear-gradient(45deg, rgba(255,0,128,0.1), rgba(0,255,255,0.1))",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
                <CardHeader>
                  <CardTitle className="text-cyan-400 flex items-center text-xl">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Brain className="mr-3" size={24} />
                    </motion.div>
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        src="/jecrc-university.png"
                        alt="JECRC University Logo"
                        className="w-20 h-20 object-contain bg-white rounded-xl p-3 shadow-lg"
                      />
                    </motion.div>
                    <div className="border-l-2 border-cyan-400 pl-4 flex-1">
                      <h3 className="text-white font-bold text-lg">B.Tech CSE (AI & ML)</h3>
                      <p className="text-gray-400 font-medium">JECRC University, Jaipur</p>
                      <p className="text-green-400 text-sm font-semibold">CGPA: 8.21/10</p>
                      <motion.p
                        className="text-cyan-400 text-sm font-semibold"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        Expected graduation: 2028
                      </motion.p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Enhanced Experience section
const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-gray-900/50 to-black/50 relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl font-bold text-white mb-16 text-center"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.8 }}
          >
            <GlitchText>Experience</GlitchText>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 45 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotateX: 2 }}
          >
            <Card className="bg-gradient-to-br from-gray-800 via-gray-900 to-black border-cyan-400/30 hover:border-cyan-400 transition-all duration-500 relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(0,255,255,0.05), rgba(255,165,0,0.05))",
                    "linear-gradient(45deg, rgba(255,165,0,0.05), rgba(255,255,0,0.05))",
                    "linear-gradient(45deg, rgba(255,255,0,0.05), rgba(0,255,255,0.05))",
                  ],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img src="/gssoc-logo.png" alt="GSSoC Logo" className="w-16 h-16 object-contain" />
                  </motion.div>
                  <div className="flex-1">
                    <CardTitle className="text-cyan-400 flex items-center text-xl">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <Code className="mr-3" size={24} />
                      </motion.div>
                      Open Source Contributor
                    </CardTitle>
                    <CardDescription className="text-gray-400 font-medium text-lg">
                      GSSoC 2025 (GirlScript Summer of Code)
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <motion.p
                  className="text-gray-300 text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  Working on collaborative open-source software projects, contributing to the developer community and
                  gaining hands-on experience with real-world codebases.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Enhanced Skills section with animated progress bars
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "C", "C++"],
    },
    {
      title: "Tools",
      icon: HardDrive,
      skills: ["VS Code", "GitHub", "Google Cloud"],
    },
    {
      title: "Expertise",
      icon: Brain,
      skills: ["Artificial Intelligence", "Machine Learning", "Data Science", "Web Development"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl font-bold text-white mb-16 text-center"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.8 }}
          >
            <GlitchText>Skills</GlitchText>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50, rotateY: 45 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                >
                  <Card className="bg-gradient-to-br from-gray-800 via-gray-900 to-black border-cyan-400/30 hover:border-cyan-400 transition-all duration-500 h-full relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        background: [
                          "linear-gradient(45deg, rgba(0,255,255,0.05), rgba(128,0,255,0.05))",
                          "linear-gradient(45deg, rgba(128,0,255,0.05), rgba(255,0,128,0.05))",
                          "linear-gradient(45deg, rgba(255,0,128,0.05), rgba(0,255,255,0.05))",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <CardHeader>
                      <CardTitle className="text-cyan-400 flex items-center text-xl">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                          <Icon className="mr-3" size={24} />
                        </motion.div>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors text-sm px-3 py-1"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Enhanced Projects section
const ProjectsSection = () => {
  const projects = [
    {
      title: "Personal Expense Tracker",
      description:
        "A C-based CLI project to manage and track personal expenses with advanced data structures and algorithms.",
      tags: ["C Programming", "CLI", "Data Structures", "Algorithms"],
      icon: Database,
      link: "https://github.com/ronit23997/Expense-tracker",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-gray-900/50 to-black/50 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl font-bold text-white mb-16 text-center"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.8 }}
          >
            <GlitchText>Projects</GlitchText>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50, rotateX: 45 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, rotateX: 5, scale: 1.02 }}
                  className="cursor-pointer"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <Card className="bg-gradient-to-br from-gray-800 via-gray-900 to-black border-cyan-400/30 hover:border-cyan-400 transition-all duration-500 h-full group relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        background: [
                          "linear-gradient(45deg, rgba(0,255,255,0.1), rgba(128,0,255,0.1))",
                          "linear-gradient(45deg, rgba(128,0,255,0.1), rgba(255,0,128,0.1))",
                          "linear-gradient(45deg, rgba(255,0,128,0.1), rgba(0,255,255,0.1))",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <CardHeader>
                      <CardTitle className="text-white flex items-center justify-between text-xl">
                        <div className="flex items-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          >
                            <Icon className="mr-3 text-cyan-400" size={24} />
                          </motion.div>
                          {project.title}
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 45 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <ExternalLink
                            className="text-gray-400 group-hover:text-cyan-400 transition-colors"
                            size={20}
                          />
                        </motion.div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <motion.p
                        className="text-gray-300 mb-6 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                      >
                        {project.description}
                      </motion.p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.div
                            key={tag}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Badge
                              variant="outline"
                              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                            >
                              {tag}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-gray-400 text-lg font-medium"
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              🚀 Stay tuned for more projects!
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Enhanced Contact section
const ContactSection = () => {
  const contactLinks = [
    {
      icon: Phone,
      label: "Phone",
      value: "9358584901",
      href: "tel:9358584901",
      color: "from-green-400 to-blue-500",
    },
    {
      icon: Mail,
      label: "Email",
      value: "ronit.24bcon0286@jecrcu.edu.in",
      href: "mailto:ronit.24bcon0286@jecrcu.edu.in",
      color: "from-red-400 to-pink-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/ronit-maheshwari-6b0363306",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my repositories",
      href: "https://github.com/ronit23997",
      color: "from-purple-400 to-pink-500",
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl font-bold text-white mb-16 text-center"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.8 }}
          >
            <GlitchText>Get in Touch</GlitchText>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {contactLinks.map((contact, index) => {
              const Icon = contact.icon
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : "_self"}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : ""}
                  className="block"
                  initial={{ opacity: 0, y: 30, rotateX: 45 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotateX: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="bg-gradient-to-br from-gray-800 via-gray-900 to-black border-cyan-400/30 hover:border-cyan-400 transition-all duration-500 group cursor-pointer relative overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-6">
                        <motion.div
                          className={`p-4 bg-gradient-to-r ${contact.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="text-white" size={28} />
                        </motion.div>
                        <div className="flex-1">
                          <motion.h3
                            className="text-white font-bold text-xl mb-2"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {contact.label}
                          </motion.h3>
                          <motion.p
                            className="text-gray-300"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                          >
                            {contact.value}
                          </motion.p>
                        </div>
                        <motion.div
                          className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.2, rotate: 45 }}
                        >
                          <ExternalLink size={20} />
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Enhanced Footer
const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-gradient-to-t from-black to-gray-900 border-t border-cyan-400/30 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(0,255,255,0.1), rgba(128,0,255,0.1))",
            "linear-gradient(45deg, rgba(128,0,255,0.1), rgba(255,0,128,0.1))",
            "linear-gradient(45deg, rgba(255,0,128,0.1), rgba(0,255,255,0.1))",
          ],
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      />
      <div className="container mx-auto text-center relative z-10">
        <motion.p
          className="text-gray-400 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          © 2025 <span className="text-cyan-400 font-semibold">Ronit Maheshwari</span>. Built with{" "}
          <motion.span
            className="text-red-400"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          >
            ❤️
          </motion.span>{" "}
          using Next.js and Tailwind CSS.
        </motion.p>
        <motion.div
          className="mt-4 flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {[Cpu, HardDrive, Terminal].map((Icon, index) => (
            <motion.div
              key={index}
              animate={{ rotate: 360 }}
              transition={{ duration: 4 + index, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Icon className="text-cyan-400/50" size={20} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}

// Main page component
export default function Portfolio() {
  return (
    <div className="bg-black min-h-screen text-white relative overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
