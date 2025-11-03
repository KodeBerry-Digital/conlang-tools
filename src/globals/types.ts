export interface User {
  id: number,
  email: string,
  displayName: string,
  isAnonymous: boolean
}

export interface Word { // temporary
  word: string
}

export interface Conlang {
  id: number,
  name: string,
  description: string,
  user: User,
  dictionary: Word[],
  isCompound: boolean,
  isPublic: boolean
}
