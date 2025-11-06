import { useState } from 'react';
import { Activity, Users, Zap, Settings, Link2, Home, Dumbbell, Apple } from 'lucide-react';
import { Toaster } from './components/ui/sonner';
import VerticalNav from './components/layout/VerticalNav';
import CommandBar from './components/layout/CommandBar';
import LandingPage from './components/landing/LandingPage';
import AuthScreen from './components/auth/AuthScreen';
import Dashboard from './components/dashboard/Dashboard';
import OnboardingFlow from './components/onboarding/OnboardingFlow';
import ProtocolsView from './components/protocols/ProtocolsView';
import PractitionerWorkspace from './components/practitioner/PractitionerWorkspace';
import CommunityFeed from './components/community/CommunityFeed';
import SettingsPage from './components/settings/SettingsPage';
import IntegrationsPage from './components/integrations/IntegrationsPage';
import GymWorkoutCreator from './components/gym/GymWorkoutCreator';
import NutritionView from './components/nutrition/NutritionView';

type AppState = 'landing' | 'auth' | 'authenticated';
type View = 'dashboard' | 'protocols' | 'gym' | 'nutrition' | 'practitioner' | 'community' | 'settings' | 'integrations';

const navigationItems = [
  { id: 'dashboard' as View, label: 'Dashboard', icon: Home },
  { id: 'protocols' as View, label: 'Protocols', icon: Activity },
  { id: 'gym' as View, label: 'Training', icon: Dumbbell },
  { id: 'nutrition' as View, label: 'Nutrition', icon: Apple },
  { id: 'practitioner' as View, label: 'Practitioner', icon: Users },
  { id: 'community' as View, label: 'Community', icon: Zap },
  { id: 'integrations' as View, label: 'Integrations', icon: Link2 },
  { id: 'settings' as View, label: 'Settings', icon: Settings },
];

export default function App() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [showOnboarding, setShowOnboarding] = useState(false);

  // Landing/Auth Flow
  if (appState === 'landing') {
    return (
      <>
        <LandingPage 
          onGetStarted={() => setAppState('auth')}
          onSignIn={() => setAppState('auth')}
        />
        <Toaster />
      </>
    );
  }

  if (appState === 'auth') {
    return (
      <>
        <AuthScreen 
          onAuth={() => {
            setAppState('authenticated');
            setShowOnboarding(true);
          }}
          onBack={() => setAppState('landing')}
        />
        <Toaster />
      </>
    );
  }

  // Authenticated App
  const renderView = () => {
    if (showOnboarding) {
      return <OnboardingFlow onComplete={() => setShowOnboarding(false)} />;
    }

    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'protocols':
        return <ProtocolsView />;
      case 'gym':
        return <GymWorkoutCreator />;
      case 'nutrition':
        return <NutritionView />;
      case 'practitioner':
        return <PractitionerWorkspace />;
      case 'community':
        return <CommunityFeed />;
      case 'settings':
        return <SettingsPage />;
      case 'integrations':
        return <IntegrationsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Vertical Navigation */}
      <VerticalNav 
        items={navigationItems} 
        currentView={currentView} 
        onNavigate={setCurrentView} 
      />
      
      {/* Command Bar */}
      <CommandBar onStartOnboarding={() => setShowOnboarding(true)} />
      
      {/* Main Content */}
      <main>
        {renderView()}
      </main>
      
      <Toaster />
    </div>
  );
}
