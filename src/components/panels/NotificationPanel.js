import React from 'react';
import { HeaderPanel } from 'carbon-components-react/lib/components/UIShell';

export const Notification = ({ isNotificationPanelExpanded }) => (
  <HeaderPanel aria-label="Header panel" expanded={isNotificationPanelExpanded} />
)
