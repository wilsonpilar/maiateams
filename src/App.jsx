import React, { useState } from 'react';
import { Menu, X, Globe, Shield, TrendingUp, Users, CheckCircle, Lock, FileText, Zap, Mail } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import './App.css';
import maiaLogo from '/maia_logo.png'; // Usando o novo logotipo fornecido pelo usuário

const translations = {
  pt: {
    nav: {
      about: 'Sobre Nós',
      solution: 'A Solução',
      benefits: 'Benefícios',
      contact: 'Contato'
    },
    hero: {
      title: 'Confiança e Integridade na Transferência de Títulos de Crédito',
      subtitle: 'Soluções Blockchain para um Mercado Financeiro Seguro e Transparente',
      cta: 'Descubra a Solução'
    },
    about: {
      title: 'Nossa História e Expertise',
      content: 'A Maia é uma empresa especializada em soluções tecnológicas para o mercado de crédito, utilizando blockchain para resolver o desafio fundamental da confiança na transferência de títulos de crédito repassados entre diferentes instituições financeiras. Fundada por Matheus Cansian e Wilson Pilar, profissionais com mais de 10 anos de experiência combinada em finanças e tecnologia, a Maia compreende profundamente a importância da integridade e confidencialidade das informações em operações financeiras.'
    },
    solution: {
      title: 'A Solução Maia: Blockchain para Confiança no Crédito',
      content: 'A Maia oferece uma plataforma inovadora baseada em blockchain, projetada especificamente para assegurar a confiança durante o repasse de títulos de crédito entre múltiplas instituições. A premissa fundamental da solução é que não é necessário confiar diretamente nas partes envolvidas na operação; a própria blockchain garante a integridade das informações registradas, tornando impossível qualquer adulteração ou perda de dados.',
      additional: 'Além disso, a solução oferece evidências claras e históricas que confirmam que os títulos negociados estão fielmente representados e permanecem inalterados durante todo o processo.'
    },
    benefits: {
      title: 'Benefícios da Solução Maia',
      items: [
        {
          icon: Shield,
          title: 'Confiança Automatizada',
          description: 'Elimina a necessidade de confiar individualmente nos envolvidos nas transações, garantindo que as informações dos títulos sejam protegidas e invioláveis.'
        },
        {
          icon: FileText,
          title: 'Evidências Históricas Claras',
          description: 'Fornece registros claros e rastreáveis que asseguram que os títulos negociados estão devidamente representados, sem qualquer alteração ao longo das operações.'
        },
        {
          icon: Lock,
          title: 'Sigilo Garantido',
          description: 'Cada título gera um hash único, funcionando como uma chave segura que limita o acesso apenas às informações autorizadas, mantendo o sigilo necessário.'
        },
        {
          icon: Users,
          title: 'Transparência e Controle',
          description: 'Combina informações públicas e privadas, oferecendo transparência na verificação dos dados essenciais e controle rigoroso sobre o acesso a informações sensíveis.'
        },
        {
          icon: Zap,
          title: 'Agilidade e Eficiência',
          description: 'Facilita o rápido acesso e validação das informações originais dos créditos, acelerando significativamente as transações.'
        }
      ]
    },
    conclusion: {
      title: 'Maia: Segurança, Eficiência e Confidencialidade',
      content: 'Com a Maia, instituições financeiras podem realizar repasses de títulos de crédito com total segurança, eficiência e confidencialidade, reforçando a confiança nas operações, independentemente dos indivíduos envolvidos.'
    },
    contact: {
      title: 'Entre em Contato',
      emailDisplay: 'hello@maiateam.com',
      copyEmail: 'Copiar Email',
      emailCopied: 'Email Copiado!'
    }
  },
  en: {
    nav: {
      about: 'About Us',
      solution: 'The Solution',
      benefits: 'Benefits',
      contact: 'Contact'
    },
    hero: {
      title: 'Trust and Integrity in Credit Title Transfers',
      subtitle: 'Blockchain Solutions for a Secure and Transparent Financial Market',
      cta: 'Discover the Solution'
    },
    about: {
      title: 'Our Story and Expertise',
      content: 'Maia is a company specialized in technological solutions for the credit market, using blockchain to solve the fundamental challenge of trust in the transfer of credit titles passed between different financial institutions. Founded by Matheus Cansian and Wilson Pilar, professionals with more than 10 years of combined experience in finance and technology, Maia deeply understands the importance of integrity and confidentiality of information in financial operations.'
    },
    solution: {
      title: 'The Maia Solution: Blockchain for Credit Trust',
      content: 'Maia offers an innovative blockchain-based platform, specifically designed to ensure trust during the transfer of credit titles between multiple institutions. The fundamental premise of the solution is that it is not necessary to directly trust the parties involved in the operation; the blockchain itself guarantees the integrity of the recorded information, making any tampering or data loss impossible.',
      additional: 'Additionally, the solution provides clear and historical evidence that confirms that the traded titles are faithfully represented and remain unchanged throughout the entire process.'
    },
    benefits: {
      title: 'Benefits of the Maia Solution',
      items: [
        {
          icon: Shield,
          title: 'Automated Trust',
          description: 'Eliminates the need to individually trust those involved in transactions, ensuring that title information is protected and inviolable.'
        },
        {
          icon: FileText,
          title: 'Clear Historical Evidence',
          description: 'Provides clear and traceable records that ensure traded titles are properly represented, without any alteration throughout operations.'
        },
        {
          icon: Lock,
          title: 'Guaranteed Confidentiality',
          description: 'Each title generates a unique hash, functioning as a secure key that limits access only to authorized information, maintaining necessary confidentiality.'
        },
        {
          icon: Users,
          title: 'Transparency and Control',
          description: 'Combines public and private information, offering transparency in verifying essential data and rigorous control over access to sensitive information.'
        },
        {
          icon: Zap,
          title: 'Agility and Efficiency',
          description: 'Facilitates rapid access and validation of original credit information, significantly accelerating transactions.'
        }
      ]
    },
    conclusion: {
      title: 'Maia: Security, Efficiency and Confidentiality',
      content: 'With Maia, financial institutions can perform credit title transfers with complete security, efficiency and confidentiality, reinforcing trust in operations, regardless of the individuals involved.'
    },
    contact: {
      title: 'Get in Touch',
      emailDisplay: 'hello@maiateam.com',
      copyEmail: 'Copy Email',
      emailCopied: 'Email Copied!'
    }
  }
};

function App() {
  const [language, setLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
    setEmailCopied(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(t.contact.emailDisplay).then(() => {
      setEmailCopied(true);
      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    }).catch(err => {
      console.error('Erro ao copiar email: ', err);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={maiaLogo} alt="Maia" className="h-8 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-blue-600 transition-colors">
              {t.nav.about}
            </button>
            <button onClick={() => scrollToSection('solution')} className="text-slate-600 hover:text-blue-600 transition-colors">
              {t.nav.solution}
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-slate-600 hover:text-blue-600 transition-colors">
              {t.nav.benefits}
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
              <button onClick={() => scrollToSection('solution')} className="block text-slate-600 hover:text-blue-600 transition-colors">
                {t.nav.solution}
              </button>
              <button onClick={() => scrollToSection('benefits')} className="block text-slate-600 hover:text-blue-600 transition-colors">
                {t.nav.benefits}
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
            onClick={() => scrollToSection('solution')}
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
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed text-center">
              {t.about.content}
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            {t.solution.title}
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed text-center">
              {t.solution.content}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed text-center">
              {t.solution.additional}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            {t.benefits.title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.benefits.items.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
                <CardContent className="p-8">
                  <benefit.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.conclusion.title}
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            {t.conclusion.content}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            {t.contact.title}
          </h2>
          
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-slate-700 mb-4 flex items-center justify-center space-x-2">
              <Mail className="h-6 w-6 text-blue-600" />
              <a href={`mailto:${t.contact.emailDisplay}`} className="text-blue-600 hover:underline font-semibold">
                {t.contact.emailDisplay}
              </a>
            </p>
            <Button
              onClick={copyEmailToClipboard}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 transition-all duration-200"
            >
              {emailCopied ? t.contact.emailCopied : t.contact.copyEmail}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src={maiaLogo} alt="Maia" className="h-6 w-auto filter invert" />
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

