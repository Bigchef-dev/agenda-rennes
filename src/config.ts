import type { AgendaConfig } from './types'

export const NEXTCLOUD_BASE = 'https://cloud.lfirennes.fun/remote.php/dav/public-calendars'

export const POLL_BACKEND_URL: string =
  (import.meta as unknown as { env: Record<string, string> }).env.VITE_POLL_BACKEND_URL ??
  'https://poll.lfirennes.fun'

export const CITY_LAT = 48.117266
export const CITY_LON = -1.6777926

export const AGENDAS: AgendaConfig[] = [
  { name: '🌟 Événements marquants', id: 'SePsN5nHprEKwPxg', color: '#D50000' },
  { name: '📖 Formations', id: 'bwSbQ4mRQPzcR3es', color: '#9b07f7' },
  { name: '🚩 Manifestations', id: 'K9AeAK7ncMtpfM2G', color: '#ff6f00' },
  { name: '📣 Assemblée', id: 'X8GkWKikaPPyjBLZ', color: '#C51162' },
  { name: '📷 Expositions', id: 'm7XaGj9HzENDmtJo', color: '#0448bf' },
]
