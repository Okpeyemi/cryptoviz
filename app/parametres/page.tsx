'use client';

import SystemStatus from '@/components/parametres/SystemStatus';
import SystemLogs from '@/components/parametres/SystemLogs';
import CollectionConfig from '@/components/parametres/CollectionConfig';

export default function ParametresPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Paramètres & Administration
          </h1>
          <p className="text-muted-foreground">
            Gérez les composants backend et la configuration
          </p>
        </div>

        {/* System Status */}
        <SystemStatus />

        {/* System Logs */}
        <SystemLogs />
        
        {/* Collection Config */}
        <CollectionConfig />
      </div>
    </div>
  );
}
