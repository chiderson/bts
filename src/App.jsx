import React, { useState } from 'react'
import { 
  Menu, X, Github, Mail, Server, Shield, Network, 
  Database, Code, FileText, ChevronDown, ExternalLink 
} from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="section-container py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">Chiderson Laurenard</h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('accueil')} className="hover:text-primary transition">Accueil</button>
              <button onClick={() => scrollToSection('apropos')} className="hover:text-primary transition">À propos</button>
              <button onClick={() => scrollToSection('competences')} className="hover:text-primary transition">Compétences</button>
              <button onClick={() => scrollToSection('projets')} className="hover:text-primary transition">Projets</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <button onClick={() => scrollToSection('accueil')} className="block w-full text-left py-2 hover:text-primary">Accueil</button>
              <button onClick={() => scrollToSection('apropos')} className="block w-full text-left py-2 hover:text-primary">À propos</button>
              <button onClick={() => scrollToSection('competences')} className="block w-full text-left py-2 hover:text-primary">Compétences</button>
              <button onClick={() => scrollToSection('projets')} className="block w-full text-left py-2 hover:text-primary">Projets</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-primary">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="section-container">
          <div className="text-center py-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Chiderson Laurenard
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              Étudiant BTS SIO - Option SISR
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Solutions d'Infrastructure, Systèmes et Réseaux
            </p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => scrollToSection('projets')}
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition shadow-lg"
              >
                Voir mes projets
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition"
              >
                Me contacter
              </button>
            </div>
            <div className="mt-12 animate-bounce">
              <ChevronDown size={32} className="mx-auto text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20 bg-white">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-12">À propos de moi</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 mb-4">
                Je suis actuellement étudiant en BTS SIO (Services Informatiques aux Organisations) 
                avec l'option SISR (Solutions d'Infrastructure, Systèmes et Réseaux).
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Passionné par les infrastructures réseau et la cybersécurité, je me spécialise dans 
                la configuration et l'administration de systèmes, la virtualisation, et la sécurisation 
                des environnements informatiques.
              </p>
              <p className="text-lg text-gray-700">
                Mon objectif est de devenir un expert en infrastructure système et réseau, capable de 
                concevoir, déployer et maintenir des solutions robustes et sécurisées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competences" className="py-20 bg-gray-50">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-12">Compétences techniques</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
              icon={<Server className="text-primary" size={40} />}
              title="Administration Systèmes"
              skills={['Windows Server', 'Linux (Debian, Ubuntu)', 'Active Directory', 'Gestion des utilisateurs']}
            />
            <SkillCard 
              icon={<Network className="text-primary" size={40} />}
              title="Réseaux"
              skills={['Configuration routeurs/switches', 'VLAN & Routage', 'TCP/IP', 'DNS & DHCP']}
            />
            <SkillCard 
              icon={<Shield className="text-primary" size={40} />}
              title="Sécurité & Pare-feu"
              skills={['Configuration firewall', 'Règles de filtrage', 'VPN', 'Politiques de sécurité']}
            />
            <SkillCard 
              icon={<Database className="text-primary" size={40} />}
              title="Virtualisation"
              skills={['VMware', 'VirtualBox', 'Configuration VM', 'Gestion ressources']}
            />
            <SkillCard 
              icon={<Code className="text-primary" size={40} />}
              title="Scripting"
              skills={['PowerShell', 'Bash', 'Python', 'Automatisation']}
            />
            <SkillCard 
              icon={<FileText className="text-primary" size={40} />}
              title="Documentation"
              skills={['Rédaction procédures', 'Documentation technique', 'Schémas réseau', 'Rapports']}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-20 bg-white">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-16">Mes projets</h2>
          
          {/* School Projects */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 flex-1 bg-gradient-to-r from-transparent to-blue-500"></div>
              <h3 className="text-3xl font-bold text-primary">Projets scolaires</h3>
              <div className="h-1 flex-1 bg-gradient-to-l from-transparent to-blue-500"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard 
                title="Déploiement d'Active Directory"
                description="Travaux pratiques sur la mise en place d'un environnement Active Directory complet avec gestion centralisée des utilisateurs, GPO et stratégies de sécurité."
                tech={['Windows Server 2019', 'Active Directory', 'GPO', 'DNS']}
                highlights={[
                  'Installation et configuration d\'un contrôleur de domaine',
                  'Création d\'une arborescence OU (Unités Organisationnelles)',
                  'Déploiement de stratégies de groupe (GPO)',
                  'Configuration DNS et zones de recherche'
                ]}
              />
              <ProjectCard 
                title="Configuration de pare-feu pfSense"
                description="Projet de sécurisation réseau avec mise en place de règles de filtrage, NAT et VPN sur pfSense dans un environnement virtualisé."
                tech={['pfSense', 'NAT', 'VPN', 'Règles de filtrage']}
                highlights={[
                  'Installation de pfSense en VM',
                  'Configuration des interfaces WAN/LAN',
                  'Création de règles de filtrage par zone',
                  'Mise en place d\'un VPN IPsec',
                  'Documentation complète des règles'
                ]}
              />
              <ProjectCard 
                title="Infrastructure réseau VLAN"
                description="Conception et mise en œuvre d'une infrastructure réseau segmentée avec VLANs, routage inter-VLAN et services réseau sous Packet Tracer."
                tech={['Cisco Packet Tracer', 'VLAN', 'Routage', 'Switch Layer 3']}
                highlights={[
                  'Schématisation de l\'architecture réseau',
                  'Configuration de 4 VLANs (Admin, Commercial, Production, Invités)',
                  'Routage inter-VLAN avec switch L3',
                  'Configuration DHCP par VLAN',
                  'Tests de connectivité et isolation'
                ]}
              />
              <ProjectCard 
                title="Scripting PowerShell"
                description="Développement de scripts d'automatisation pour la gestion des utilisateurs Active Directory et génération de rapports système."
                tech={['PowerShell', 'Active Directory', 'CSV', 'Automatisation']}
                highlights={[
                  'Script de création massive d\'utilisateurs depuis CSV',
                  'Automatisation de l\'ajout aux groupes de sécurité',
                  'Génération de rapports d\'audit AD',
                  'Script de nettoyage des comptes inactifs'
                ]}
              />
            </div>
          </div>

          {/* Company Projects */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 flex-1 bg-gradient-to-r from-transparent to-green-600"></div>
              <h3 className="text-3xl font-bold text-green-600">Projets en entreprise</h3>
              <div className="h-1 flex-1 bg-gradient-to-l from-transparent to-green-600"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard 
                title="Migration serveur Windows Server 2012 → 2019"
                description="Participation à la migration de l'infrastructure serveur de l'entreprise vers une version plus récente, incluant transfert de rôles FSMO et migration des services."
                tech={['Windows Server 2019', 'Active Directory', 'FSMO', 'Migration']}
                highlights={[
                  'Audit de l\'infrastructure existante',
                  'Planification de la migration par étapes',
                  'Transfert des rôles FSMO',
                  'Migration des partages de fichiers',
                  'Tests de validation post-migration'
                ]}
              />
              <ProjectCard 
                title="Déploiement de 40 postes utilisateurs"
                description="Installation et configuration de nouveaux postes de travail avec intégration au domaine, installation d'applications métier et formation des utilisateurs."
                tech={['Windows 10 Pro', 'Active Directory', 'MDT', 'WSUS']}
                highlights={[
                  'Préparation d\'image système avec applications pré-installées',
                  'Déploiement via Microsoft Deployment Toolkit (MDT)',
                  'Jonction au domaine et application des GPO',
                  'Configuration des imprimantes réseau',
                  'Support et formation des utilisateurs'
                ]}
              />
              <ProjectCard 
                title="Mise en place système de sauvegarde"
                description="Conception et déploiement d'une solution de sauvegarde automatisée pour les serveurs et données critiques de l'entreprise."
                tech={['Veeam Backup', 'NAS Synology', 'PowerShell', 'Planification']}
                highlights={[
                  'Analyse des besoins et données critiques',
                  'Installation et configuration de Veeam',
                  'Planification des sauvegardes (complètes/incrémentielles)',
                  'Tests de restauration réguliers',
                  'Monitoring et alertes automatiques'
                ]}
              />
              <ProjectCard 
                title="Surveillance infrastructure réseau"
                description="Mise en place d'un système de monitoring réseau pour superviser l'état des équipements et détecter les incidents rapidement."
                tech={['Zabbix', 'SNMP', 'Grafana', 'Alertes']}
                highlights={[
                  'Installation du serveur Zabbix',
                  'Configuration des agents sur les équipements',
                  'Création de tableaux de bord Grafana',
                  'Paramétrage des seuils d\'alerte',
                  'Documentation des procédures d\'intervention'
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <p className="text-center text-lg text-gray-700 mb-8">
              N'hésitez pas à me contacter pour toute question ou opportunité !
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <Mail className="text-primary" size={24} />
                <a href="mailto:chiderson6@gmail.com" className="text-lg">
                  chiderson6@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <Github className="text-primary" size={24} />
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-lg">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="section-container text-center">
          <p className="text-gray-400">
            © 2025 Chiderson Laurenard - Portfolio BTS SIO SISR
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  )
}

function SkillCard({ icon, title, skills }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-700">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProjectCard({ title, description, tech, highlights }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition">
      <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Technologies utilisées :</h4>
        <div className="flex flex-wrap gap-2">
          {tech.map((t, index) => (
            <span key={index} className="bg-primary text-white px-3 py-1 rounded-full text-sm">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Points clés :</h4>
        <ul className="space-y-1">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
              <span className="text-primary mt-1">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
