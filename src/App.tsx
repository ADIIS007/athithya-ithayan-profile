import React, { useState } from 'react';
import { initialProfileData, ProfileData } from './data/profileData';
import { Navbar } from './components/Navbar';
import { BackgroundSpotlight } from './components/BackgroundSpotlight';
import { HeroSection } from './components/HeroSection';
import { StatsBar } from './components/StatsBar';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ConnectedToolsSection } from './components/ConnectedToolsSection';
import { LinkedInProfileView } from './components/LinkedInProfileView';
import { ContactModal } from './components/ContactModal';
import { HostGuideModal } from './components/HostGuideModal';
import { ProfileEditorModal } from './components/ProfileEditorModal';
import { Footer } from './components/Footer';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(initialProfileData);
  const [viewMode, setViewMode] = useState<'executive' | 'linkedin'>('executive');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [hostModalOpen, setHostModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const handleUpdateProfile = (updated: ProfileData) => {
    setProfile(updated);
  };

  const handleResetDefaults = () => {
    setProfile(initialProfileData);
  };

  return (
    <div id="top" className="dark min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-white relative overflow-x-hidden">
      
      {/* Interactive Mouse Spotlight Background */}
      <BackgroundSpotlight />

      {/* Sticky Top Navigation */}
      <Navbar
        viewMode={viewMode}
        setViewMode={setViewMode}
        onOpenHostModal={() => setHostModalOpen(true)}
        onOpenEditModal={() => setEditModalOpen(true)}
        onOpenContactModal={() => setContactModalOpen(true)}
        linkedinUrl={profile.contactInfo.linkedin}
      />

      {/* Main View Area */}
      <main className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-12 relative z-10">
        {viewMode === 'executive' ? (
          <div className="space-y-6">
            <HeroSection
              profile={profile}
              viewMode={viewMode}
              onOpenContactModal={() => setContactModalOpen(true)}
              onOpenEditModal={() => setEditModalOpen(true)}
            />

            <StatsBar profile={profile} />

            <div className="grid grid-cols-1 gap-6">
              <AboutSection profile={profile} />
              <ExperienceSection profile={profile} />
              <SkillsSection profile={profile} />
              <ProjectsSection profile={profile} />
              <CertificationsSection profile={profile} />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <EducationSection profile={profile} />
                <ConnectedToolsSection profile={profile} />
              </div>
            </div>
          </div>
        ) : (
          <LinkedInProfileView
            profile={profile}
            onOpenContactModal={() => setContactModalOpen(true)}
            onOpenEditModal={() => setEditModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      {/* Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        profile={profile}
      />

      <HostGuideModal
        isOpen={hostModalOpen}
        onClose={() => setHostModalOpen(false)}
        profile={profile}
      />

      <ProfileEditorModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        profile={profile}
        onUpdateProfile={handleUpdateProfile}
        onResetDefaults={handleResetDefaults}
      />

    </div>
  );
}
