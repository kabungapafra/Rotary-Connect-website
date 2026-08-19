export function QRIcon({ size = 22 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="3" height="3" rx="0.5" />
      <rect x="18" y="14" width="3" height="3" rx="0.5" />
      <rect x="14" y="18" width="3" height="3" rx="0.5" />
      <rect x="18" y="18" width="3" height="3" rx="0.5" />
    </svg>
  );
}

export function AIIcon({ size = 22 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M12 2.5l1.7 5.1 5.1 1.7-5.1 1.7L12 16.1l-1.7-5.1-5.1-1.7 5.1-1.7L12 2.5z" />
      <path d="M19 14l.8 2.2 2.2.8-2.2.8L19 20l-.8-2.2-2.2-.8 2.2-.8L19 14z" />
    </svg>
  );
}

export function DueIcon({ size = 22 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 15.2c.5.9 1.5 1.3 2.7 1.3 1.8 0 3-1 3-2.3 0-1.4-1.2-1.9-3-2.4-1.8-.5-3-1-3-2.4 0-1.3 1.2-2.3 3-2.3 1.2 0 2.2.4 2.7 1.3" />
      <path d="M12 6.5v1.3M12 16.2v1.3" />
    </svg>
  );
}

export const SERVICE_ICONS = { QR: QRIcon, AI: AIIcon, DUE: DueIcon };
