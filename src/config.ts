import type { AgendaConfig } from './types'

export const NEXTCLOUD_BASE = 'https://cloud.lfirennes.fun/remote.php/dav/public-calendars'

export const POLL_BACKEND_URL: string =
  (import.meta as unknown as { env: Record<string, string> }).env.VITE_POLL_BACKEND_URL ??
  'https://poll.lfirennes.fun'

export const CITY_LAT = 48.117266
export const CITY_LON = -1.6777926

export const AGENDAS: AgendaConfig[] = [
  { name: '🌟 Événements marquants', id: 'SePsN5nHprEKwPxg', color: '#D50000' },
  { name: '📖 Formations',    id: 'bwSbQ4mRQPzcR3es', color: '#3949AB' },
  { name: '📣 Assemblée', id: 'X8GkWKikaPPyjBLZ', color: '#C51162' },
  { name: '📷 Expositions',    id: 'm7XaGj9HzENDmtJo', color: '#43A047' },
]
