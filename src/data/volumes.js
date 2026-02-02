// Segmentos padrão em cada página de detalhe
export const SEGMENTOS = [
  'Ensino Infantil',
  'Anos Iniciais',
  'Anos Finais',
  'Ensino Médio',
  'Aprova+',
]

const volume3Chapters = [
  'O que é realidade aumentada',
  'Escaneando as páginas',
  'Personagens em RA',
  'Cenários interativos',
  'Projeto final em RA',
]

export const volumes = [
  {
    id: '1',
    volumeId: '1', // página: Livros Digitais
    badge: 'Volume 3',
    sectionTitle: 'Livros Digitais',
    description: 'Livros digitais do Volume 3: leitura e atividades interativas, minijogos e realidade aumentada nas páginas.',
    mediaPlaceholder: 'Vídeo ou GIF do livro interativo (coloque sua mídia aqui)',
    chapters: volume3Chapters,
  },
  {
    id: '2',
    volumeId: '2', // página: Objetos Interativos
    badge: 'Volume 3',
    sectionTitle: 'Objetos Interativos',
    description: 'Objetos interativos do Volume 3: jogos, quizzes, arrastar e soltar e experiências em realidade aumentada.',
    mediaPlaceholder: 'Vídeo ou GIF do objeto interativo',
    chapters: volume3Chapters,
  },
  {
    id: '3',
    volumeId: '3', // página: Realidade Aumentada
    badge: 'Volume 3',
    sectionTitle: 'Realidade Aumentada',
    description: 'Experiências em RA do Volume 3: escaneie páginas com o celular e veja personagens e cenários ganhando vida.',
    mediaPlaceholder: 'Vídeo ou GIF da experiência em RA',
    chapters: volume3Chapters,
  },
]
