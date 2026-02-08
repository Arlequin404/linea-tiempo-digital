export type TimelineItem = {
  year: number
  country: 'ec' | 'dk'
  title: string
  description: string
  focus: ('legal' | 'tech' | 'inst')[]
}

export const timelineData: TimelineItem[] = [
  {
    year: 1968,
    country: 'dk',
    title: 'Sistema de Registro Civil Digital',
    description:
      'Dinamarca implementa el primer sistema centralizado de registro civil (CPR), estableciendo un número único de identificación para cada ciudadano.',
    focus: ['inst', 'tech'],
  },
  {
    year: 1978,
    country: 'dk',
    title: 'CPR Número Obligatorio',
    description:
      'El número CPR se vuelve obligatorio para todas las transacciones oficiales, creando interoperabilidad entre sistemas.',
    focus: ['legal', 'inst'],
  },
  {
    year: 1992,
    country: 'ec',
    title: 'Primera Conexión a Internet',
    description:
      'Ecuador establece su primera conexión a Internet a través de INTERCOM, marcando el inicio de la era digital.',
    focus: ['tech'],
  },
  {
    year: 1994,
    country: 'dk',
    title: 'Estrategia Nacional de IT',
    description:
      'Dinamarca lanza su primera estrategia nacional de tecnologías de la información.',
    focus: ['inst', 'tech'],
  },
  {
    year: 2013,
    country: 'ec',
    title: 'Plan Nacional de Gobierno Electrónico',
    description:
      'Se impulsa la digitalización de servicios públicos y la interacción ciudadano-Estado.',
    focus: ['inst', 'tech'],
  },
  {
    year: 2022,
    country: 'ec',
    title: 'Agenda Digital Ecuador 2022–2025',
    description:
      'Se establecen objetivos estratégicos para acelerar la transformación digital del país.',
    focus: ['inst', 'legal', 'tech'],
  },
]
