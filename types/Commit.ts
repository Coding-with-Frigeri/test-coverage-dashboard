export type Commit = {
  id: string //hash
  author: Author
  message: string
  url: string
  timestamp: string
}

type Author = {
  email: string
  name: string
  username: string
}
