import React, { useState } from 'react';
import { Menu, X, Globe, ChevronDown, Shield, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import './App.css';
import maiaLogo from './assets/maia_logo.png';

const translations = {
  pt: {
    nav: {
      about: 'Sobre Nós',
      problem: 'O Problema',
      solution: 'Nossa Solução',
      why: 'Por Que Maia?',
      contact: 'Contato'
    },
    hero: {
      title: 'Transparência e Confiança no Mercado de Crédito com Blockchain',
      subtitle: 'Transformando Ativos de Crédito em Registros Digitais Imutáveis e Rastreáveis',
      cta: 'Saiba Mais'
    },
    about: {
      title: 'Nossa História e Experiência',
      content: 'Somos Matos e nosso sócio, cada um com mais de uma década de experiência no mercado financeiro. Trabalhamos com todo o espectro de produtos financeiros e já construímos e vendemos empresas antes. Esta não é nossa primeira vez construindo algo significativo.'
    },
    problem: {
      title: 'O Desafio do Mercado de Crédito',
      content: 'O mercado de crédito depende muito da confiança porque a transparência está ausente. Você realmente não sabe o que aconteceu com um ativo de crédito quando ele é revendido. Quanto mais longe você está na linha de revenda, menos informações confiáveis você tem, tornando o mercado secundário de crédito muito arriscado.'
    },
    solution: {
      title: 'A Solução Maia Labs: Blockchain para Crédito',
      content: 'Com blockchain, não precisamos confiar na entidade - podemos confiar no sistema. Criamos uma plataforma onde transformamos crédito em um registro digital imutável e transparente. Cada evento neste ativo de crédito é rastreável.',
      benefits: [
        'O comprador sabe exatamente o que está recebendo',
        'Não há caixa preta nas transações',
        'Menos risco ao comprar crédito',
        'Facilita a venda deste tipo de crédito'
      ]
    },
    why: {
      title: 'Por Que Maia Labs?',
      subtitle: 'Transparência e Confiança Redefinidas',
      features: [
        {
          icon: Shield,
          title: 'Transparência Total',
          description: 'Registros imutáveis e rastreáveis de todos os eventos de crédito'
        },
        {
          icon: TrendingUp,
          title: 'Redução de Riscos',
          description: 'Elimine incertezas com informações completas e verificáveis'
        },
        {
          icon: Users,
          title: 'Confiança no Sistema',
          description: 'Blockchain elimina a necessidade de confiar em entidades individuais'
        }
      ]
    },
    contact: {
      title: 'Entre em Contato',
      name: 'Nome',
      email: 'Email',
      message: 'Mensagem',
      send: 'Enviar Mensagem'
    }
  },
  en: {
    nav: {
      about: 'About Us',
      problem: 'The Problem',
      solution: 'Our Solution',
      why: 'Why Maia?',
      contact: 'Contact'
    },
    hero: {
      title: 'Transparency and Trust in Credit Markets with Blockchain',
      subtitle: 'Transforming Credit Assets into Immutable and Traceable Digital Records',
      cta: 'Learn More'
    },
    about: {
      title: 'Our Story and Experience',
      content: 'We are Matos and my coworker, each with more than a decade of experience in the financial market. We\'ve worked with the full spectrum of financial products and have built and sold companies before. This isn\'t our first time building something meaningful.'
    },
    problem: {
      title: 'The Credit Market Challenge',
      content: 'The credit market relies heavily on trust because transparency is missing. You don\'t really know what has happened to a credit asset when it\'s resold. The further down you are in the resale line, the less trusted information you have, making the secondary market for credit very risky.'
    },
    solution: {
      title: 'The Maia Labs Solution: Blockchain for Credit',
      content: 'With blockchain, we don\'t actually need to trust the entity - we can trust the system. We created a platform where we transform credit into an immutable and transparent digital record. Every event on this credit asset is traceable.',
      benefits: [
        'The buyer knows exactly what they\'re getting',
        'No black box in transactions',
        'Less risk when buying credit',
        'Makes it easier to sell this kind of credit'
      ]
    },
    why: {
      title: 'Why Maia Labs?',
      subtitle: 'Transparency and Trust Redefined',
      features: [
        {
          icon: Shield,
          title: 'Total Transparency',
          description: 'Immutable and traceable records of all credit events'
        },
        {
          icon: TrendingUp,
          title: 'Risk Reduction',
          description: 'Eliminate uncertainties with complete and verifiable information'
        },
        {
          icon: Users,
          title: 'System Trust',
          description: 'Blockchain eliminates the need to trust individual entities'
        }
      ]
    },
    contact: {
      title: 'Get in Touch',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message'
    }
  }
};

function App() {
  const [language, setLanguage] = useState('pt');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={maiaLogo} alt="Maia Labs" className="h-8 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-blue-600 transition-colors">
              {t.nav.about}
            </button>
            <button onClick={() => scrollToSection('problem')} className="text-slate-600 hover:text-blue-600 transition-colors">
              {t.nav.problem}
            </button>
            <button onClick={() => scrollToSection('solution')} className="text-slate-600 hover:text-blue-600 transition-colors">
              {t.nav.solution}
            </button>
            <button onClick={() => scrollToSection('why')} className="text-slate-600 hover:text-blue-600 transition-colors">
              {t.nav.why}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-blue-600 transition-colors">
              {t.nav.contact}
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2"
            >
              <Globe className="h-4 w-4" />
              <span>{language.toUpperCase()}</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('about')} className="block text-slate-600 hover:text-blue-600 transition-colors">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('problem')} className="block text-slate-600 hover:text-blue-600 transition-colors">
                {t.nav.problem}
              </button>
              <button onClick={() => scrollToSection('solution')} className="block text-slate-600 hover:text-blue-600 transition-colors">
                {t.nav.solution}
              </button>
              <button onClick={() => scrollToSection('why')} className="block text-slate-600 hover:text-blue-600 transition-colors">
                {t.nav.why}
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-slate-600 hover:text-blue-600 transition-colors">
                {t.nav.contact}
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
            {t.hero.subtitle}
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection('about')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
          >
            {t.hero.cta}
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            {t.about.title}
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed text-center">
              {t.about.content}
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            {t.problem.title}
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed text-center">
              {t.problem.content}
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            {t.solution.title}
          </h2>
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-slate-600 leading-relaxed text-center mb-8">
              {t.solution.content}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {t.solution.benefits.map((benefit, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-slate-700">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Maia Section */}
      <section id="why" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            {t.why.title}
          </h2>
          <p className="text-xl text-slate-600 mb-12 text-center">
            {t.why.subtitle}
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {t.why.features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            {t.contact.title}
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t.contact.name}
                    </label>
                    <Input placeholder={t.contact.name} />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t.contact.email}
                    </label>
                    <Input type="email" placeholder={t.contact.email} />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t.contact.message}
                    </label>
                    <Textarea placeholder={t.contact.message} rows={5} />
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    {t.contact.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src={maiaLogo} alt="Maia Labs" className="h-6 w-auto filter invert" />
          </div>
          <p className="text-slate-400">
            © 2025 Maia Labs. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

