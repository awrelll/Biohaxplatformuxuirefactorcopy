import { useState } from 'react';
import { Zap, Activity, Users, Brain, TrendingUp, Lock, CheckCircle2, Menu, X, Moon, Sun, Database, Sparkles, Calendar, Bell, BookOpen, Briefcase, ArrowRight, Shield, Gauge, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

interface LandingPageProps {
  onGetStarted: () => void;
  onSignIn: () => void;
}

export default function LandingPage({ onGetStarted, onSignIn }: LandingPageProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Marketing Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-cloud">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button onClick={() => scrollToSection('hero')} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-spectrum flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-ink">BioHax</span>
                <span className="tag text-steel">PERFORMANCE OS</span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('features')} className="text-sm font-semibold text-steel hover:text-ink transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm font-semibold text-steel hover:text-ink transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-sm font-semibold text-steel hover:text-ink transition-colors">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-semibold text-steel hover:text-ink transition-colors">
                About
              </button>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={toggleTheme}
                className="w-10 h-10 rounded-xl bg-pearl hover:bg-cloud transition-colors flex items-center justify-center"
              >
                {theme === 'light' ? <Moon className="w-5 h-5 text-steel" /> : <Sun className="w-5 h-5 text-steel" />}
              </button>
              <Button variant="ghost" onClick={onSignIn}>
                Sign In
              </Button>
              <Button onClick={onGetStarted}>
                <Zap className="w-4 h-4 mr-2" />
                Start Free Trial
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <button className="w-10 h-10 rounded-xl bg-pearl hover:bg-cloud transition-colors flex items-center justify-center">
                  <Menu className="w-5 h-5 text-ink" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 pt-8">
                  <button onClick={() => scrollToSection('features')} className="text-left font-semibold text-ink hover:text-electric transition-colors">
                    Features
                  </button>
                  <button onClick={() => scrollToSection('pricing')} className="text-left font-semibold text-ink hover:text-electric transition-colors">
                    Pricing
                  </button>
                  <button onClick={() => scrollToSection('testimonials')} className="text-left font-semibold text-ink hover:text-electric transition-colors">
                    Testimonials
                  </button>
                  <button onClick={() => scrollToSection('about')} className="text-left font-semibold text-ink hover:text-electric transition-colors">
                    About
                  </button>
                  <div className="border-t border-cloud pt-6 space-y-3">
                    <Button variant="outline" onClick={onSignIn} className="w-full">
                      Sign In
                    </Button>
                    <Button onClick={onGetStarted} className="w-full">
                      <Zap className="w-4 h-4 mr-2" />
                      Start Free Trial
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6 mesh-gradient">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 border border-electric/20 mb-8">
            <Sparkles className="w-4 h-4 text-electric" />
            <span className="text-sm font-semibold text-electric">AI-Powered Longevity Platform</span>
          </div>

          <h1 className="mb-6 max-w-4xl mx-auto">
            Your Unified Longevity & Performance Command Center
          </h1>

          <p className="text-xl text-steel mb-12 max-w-3xl mx-auto leading-relaxed">
            Consolidate wearables, biomarkers, and AI coaching into one intelligent platform. 
            Turn raw data into actionable protocols for peak human performance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button size="lg" onClick={onGetStarted} className="shadow-2xl">
              <Zap className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('features')}>
              See How It Works
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <HighlightCard
              icon={Activity}
              title="Labs & Wearables"
              description="Connect 150+ biomarkers from Whoop, Oura, Apple Health, and lab uploads"
              color="electric"
            />
            <HighlightCard
              icon={Brain}
              title="AI Protocols"
              description="OpenBioLLM generates personalized daily routines based on your unique data"
              color="neural"
            />
            <HighlightCard
              icon={Users}
              title="Practitioner Network"
              description="Collaborate with coaches who can monitor and adjust your protocols"
              color="pulse"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="tag text-steel mb-3">CORE CAPABILITIES</div>
            <h2 className="mb-4">Everything you need for human optimization</h2>
            <p className="text-xl text-steel max-w-2xl mx-auto">
              From data integration to AI-powered recommendations, we've built the complete toolkit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Database}
              title="Unified Data Pipeline"
              description="Automatically ingest, normalize, and structure data from wearables, lab uploads, and manual entries into a single source of truth."
              color="electric"
            />
            <FeatureCard
              icon={Brain}
              title="Adaptive Insight Engine"
              description="OpenBioLLM analyzes trends across 150+ biomarkers to surface actionable recommendations and early warning signals."
              color="neural"
            />
            <FeatureCard
              icon={Calendar}
              title="Personalized Daily Protocols"
              description="AI-generated routines for nutrition, supplements, exercise, and recovery tailored to your current state and goals."
              color="bio"
            />
            <FeatureCard
              icon={Bell}
              title="Continuous Monitoring & Alerts"
              description="Real-time notifications when biomarkers drift out of optimal ranges or when new insights are available."
              color="pulse"
            />
            <FeatureCard
              icon={BookOpen}
              title="Research-Backed Insights"
              description="Every recommendation links to peer-reviewed studies and evidence-based protocols from the longevity community."
              color="solar"
            />
            <FeatureCard
              icon={Briefcase}
              title="Coach & Clinic Workspaces"
              description="Practitioners can manage multiple clients, set targets, and collaborate on personalized optimization plans."
              color="electric"
            />
          </div>
        </div>
      </section>

      {/* Outcomes Proof Section */}
      <section id="about" className="py-20 px-6 bg-pearl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="tag text-steel mb-3">PROVEN IMPACT</div>
            <h2 className="mb-4">Real results from real people</h2>
            <p className="text-xl text-steel max-w-3xl mx-auto">
              Our platform has helped thousands optimize their health, backed by data and validated by practitioners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard
              value="150+"
              label="Biomarkers Modeled"
              description="From glucose to testosterone, we track the metrics that matter most"
              color="electric"
            />
            <StatCard
              value="87%"
              label="Protocol Adherence"
              description="Members stick to their routines with AI-powered reminders and coaching"
              color="bio"
            />
            <StatCard
              value="10K+"
              label="Guided Members"
              description="Active users optimizing their longevity and performance every day"
              color="neural"
            />
            <StatCard
              value="4.8/5"
              label="Insight Rating"
              description="Average satisfaction score for AI-generated recommendations"
              color="solar"
            />
            <StatCard
              value="60%"
              label="Time to Plan"
              description="Reduction in time spent creating personalized health protocols"
              color="pulse"
            />
            <StatCard
              value="256-bit"
              label="Data Encryption"
              description="Bank-grade security for all your health data, HIPAA/GDPR compliant"
              color="electric"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <div className="tag text-steel mb-3">PRICING TIERS</div>
            <h2 className="mb-4">Choose your performance level</h2>
          </div>

          <div className="flex items-center justify-center gap-3 mb-12">
            <span className="text-sm font-semibold text-steel">Monthly</span>
            <button className="relative w-14 h-8 rounded-full bg-electric transition-colors">
              <div className="absolute left-1 top-1 w-6 h-6 rounded-full bg-white transition-transform" />
            </button>
            <span className="text-sm font-semibold text-ink">Annual</span>
            <span className="tag text-bio">SAVE 20%</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingCard
              tier="Explorer"
              price="Free"
              description="Perfect for getting started with longevity tracking"
              features={[
                'Up to 20 biomarkers',
                'Basic wearable integrations',
                'Weekly AI insights',
                'Community access',
                'Manual data entry',
              ]}
              color="electric"
              ctaText="Start Free"
              onCta={onGetStarted}
            />
            <PricingCard
              tier="Biohacker"
              price="$49"
              period="/month"
              description="For serious optimizers who want it all"
              features={[
                'Up to 150 biomarkers',
                'All wearable integrations',
                'Daily AI insights',
                'Advanced protocols',
                'Practitioner collaboration',
                'Lab result parsing',
                'Priority support',
              ]}
              color="neural"
              featured
              ctaText="Start Trial"
              onCta={onGetStarted}
            />
            <PricingCard
              tier="Longevity Pro"
              price="$99"
              period="/month"
              description="Enterprise-grade for coaches & practitioners"
              features={[
                'Unlimited biomarkers',
                'White-label options',
                'Client management suite',
                'API access',
                'Custom protocols',
                'Dedicated account manager',
                '24/7 priority support',
              ]}
              color="bio"
              ctaText="Contact Sales"
              onCta={onGetStarted}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-pearl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="tag text-steel mb-3">SOCIAL PROOF</div>
            <h2 className="mb-4">Trusted by health professionals and enthusiasts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            <TestimonialCard
              quote="BioHax transformed how I manage my patients' longevity protocols. The AI insights save me hours every week."
              author="Dr. Sarah Chen"
              role="Functional Medicine Physician"
              color="neural"
            />
            <TestimonialCard
              quote="As an athlete, tracking 150+ biomarkers was impossible before. Now I see exactly what's working and what's not."
              author="Marcus Johnson"
              role="Professional Triathlete"
              color="pulse"
            />
            <TestimonialCard
              quote="The personalized protocols are backed by actual research. I finally understand my body's signals and how to optimize."
              author="Emily Rodriguez"
              role="Biohacking Enthusiast"
              color="bio"
            />
            <TestimonialCard
              quote="Managing 50+ clients was chaotic until BioHax. The practitioner workspace is a game-changer for my clinic."
              author="David Kim"
              role="Health Coach"
              color="electric"
            />
            <TestimonialCard
              quote="I've tried every health tracking app. BioHax is the only one that actually helps me make better decisions daily."
              author="Dr. Lisa Wang"
              role="Longevity Researcher"
              color="solar"
            />
            <TestimonialCard
              quote="The AI doesn't just show me data—it tells me what to do about it. That's the difference between noise and insight."
              author="Alex Thompson"
              role="Tech Entrepreneur"
              color="neural"
            />
          </div>

          {/* Proof Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ProofStat
              value="87%"
              label="Report health improvements in first 90 days"
            />
            <ProofStat
              value="2.5x"
              label="Faster protocol iteration vs traditional methods"
            />
            <ProofStat
              value="40+"
              label="Clinics & practices using BioHax Pro"
            />
            <ProofStat
              value="92%"
              label="Would recommend to a friend or colleague"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="neo-card-electric p-12 text-center">
            <h2 className="mb-4">Ready to optimize your longevity?</h2>
            <p className="text-xl text-steel mb-8 max-w-2xl mx-auto">
              Join thousands of quantified-self enthusiasts, athletes, and health professionals
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" onClick={onGetStarted}>
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('pricing')}>
                View Plans
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-xl gradient-neural flex items-center justify-center">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-bold text-ink mb-1">AI-Powered</div>
                  <div className="text-sm text-steel">OpenBioLLM insights</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-xl gradient-bio flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-bold text-ink mb-1">Evidence-Based</div>
                  <div className="text-sm text-steel">Research-backed protocols</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-xl gradient-pulse flex items-center justify-center">
                  <Gauge className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-bold text-ink mb-1">Personalized</div>
                  <div className="text-sm text-steel">Tailored to your data</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-void text-snow">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-spectrum flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-snow">BioHax</span>
              </div>
              <p className="text-sm text-steel mb-6 leading-relaxed">
                Your unified longevity and performance command center. Consolidate wearables, biomarkers, and AI coaching into one intelligent platform.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-electric" />
                  <span className="text-xs font-semibold text-snow">HIPAA Compliant</span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-bio" />
                  <span className="text-xs font-semibold text-snow">GDPR Compliant</span>
                </div>
              </div>
            </div>

            {/* Solutions Column */}
            <div>
              <h4 className="font-bold text-snow mb-4">Solutions</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-steel hover:text-snow transition-colors">For Individuals</a></li>
                <li><a href="#" className="text-sm text-steel hover:text-snow transition-colors">For Coaches</a></li>
                <li><a href="#" className="text-sm text-steel hover:text-snow transition-colors">For Clinics</a></li>
                <li><a href="#" className="text-sm text-steel hover:text-snow transition-colors">Integrations</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-bold text-snow mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-sm text-steel hover:text-snow transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm text-steel hover:text-snow transition-colors">Careers</a></li>
                <li><a href="#" className="text-sm text-steel hover:text-snow transition-colors">Press Kit</a></li>
                <li><a href="#" className="text-sm text-steel hover:text-snow transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="font-bold text-snow mb-4">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-steel hover:text-snow transition-colors">Documentation</a></li>
                <li><a href="#" className="text-sm text-steel hover:text-snow transition-colors">API Reference</a></li>
                <li><a href="#" className="text-sm text-steel hover:text-snow transition-colors">Research Library</a></li>
                <li><a href="#" className="text-sm text-steel hover:text-snow transition-colors">Community</a></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h4 className="font-bold text-snow mb-4">Stay Updated</h4>
              <p className="text-sm text-steel mb-4">Get longevity insights and platform updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-sm text-snow placeholder:text-steel focus:outline-none focus:border-electric"
                />
                <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-snow hover:bg-white/20">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-steel">© 2025 BioHax. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-steel hover:text-snow transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-steel hover:text-snow transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-steel hover:text-snow transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Component Definitions

interface HighlightCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: 'electric' | 'neural' | 'pulse' | 'bio' | 'solar';
}

function HighlightCard({ icon: Icon, title, description, color }: HighlightCardProps) {
  const cardClass = `neo-card-${color}`;
  const gradientClass = `gradient-${color}`;

  return (
    <div className={`${cardClass} p-6 hover:scale-105 transition-transform`}>
      <div className={`w-12 h-12 ${gradientClass} rounded-xl flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h4 className="mb-2">{title}</h4>
      <p className="text-sm text-steel leading-relaxed">{description}</p>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: 'electric' | 'neural' | 'bio' | 'pulse' | 'solar';
}

function FeatureCard({ icon: Icon, title, description, color }: FeatureCardProps) {
  const cardClass = `neo-card-${color}`;
  const gradientClass = `gradient-${color}`;
  
  return (
    <div className={`${cardClass} p-8 hover:scale-105 transition-transform`}>
      <div className={`w-14 h-14 ${gradientClass} rounded-xl flex items-center justify-center mb-6`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="mb-3">{title}</h3>
      <p className="text-steel leading-relaxed">{description}</p>
    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  description: string;
  color: 'electric' | 'neural' | 'bio' | 'pulse' | 'solar';
}

function StatCard({ value, label, description, color }: StatCardProps) {
  const cardClass = `neo-card-${color}`;

  return (
    <div className={`${cardClass} p-8 text-center hover:scale-105 transition-transform`}>
      <div className={`text-5xl font-bold text-${color} mb-2`}>{value}</div>
      <div className="font-bold text-ink mb-3">{label}</div>
      <p className="text-sm text-steel leading-relaxed">{description}</p>
    </div>
  );
}

interface PricingCardProps {
  tier: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  color: 'electric' | 'neural' | 'bio';
  featured?: boolean;
  ctaText: string;
  onCta: () => void;
}

function PricingCard({ tier, price, period, description, features, color, featured, ctaText, onCta }: PricingCardProps) {
  const cardClass = featured ? `neo-card-${color} shadow-2xl scale-105` : 'neo-card';
  const gradientClass = `gradient-${color}`;
  
  return (
    <div className={`${cardClass} p-8 relative`}>
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className={`${gradientClass} px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg`}>
            MOST POPULAR
          </div>
        </div>
      )}
      
      <div className="text-center mb-8">
        <div className="tag text-steel mb-2">{tier}</div>
        <div className="flex items-baseline justify-center gap-1 mb-3">
          <span className="text-5xl font-bold text-ink">{price}</span>
          {period && <span className="text-steel">{period}</span>}
        </div>
        <p className="text-sm text-steel">{description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2 className={`w-5 h-5 text-${color} flex-shrink-0 mt-0.5`} />
            <span className="text-sm text-ink">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        className="w-full" 
        variant={featured ? 'default' : 'outline'}
        onClick={onCta}
      >
        {ctaText}
      </Button>
    </div>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  color: 'electric' | 'neural' | 'bio' | 'pulse' | 'solar';
}

function TestimonialCard({ quote, author, role, color }: TestimonialCardProps) {
  const cardClass = `neo-card-${color}`;

  return (
    <div className={`${cardClass} p-8`}>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-5 h-5 fill-${color} text-${color}`} />
        ))}
      </div>
      <p className="text-ink mb-6 leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div>
        <div className="font-bold text-ink">{author}</div>
        <div className="text-sm text-steel">{role}</div>
      </div>
    </div>
  );
}

interface ProofStatProps {
  value: string;
  label: string;
}

function ProofStat({ value, label }: ProofStatProps) {
  return (
    <div className="neo-card p-6 text-center">
      <div className="text-4xl font-bold text-electric mb-2">{value}</div>
      <p className="text-sm text-steel leading-relaxed">{label}</p>
    </div>
  );
}
