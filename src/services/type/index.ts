export interface messageProps {
  text: string
  visibilityCount: number
  favoriteCount: number
  time: Date
}
export const messagePropsEmpty = {
  text: '',
  visibilityCount: 1,
  favoriteCount: 0,
  time: '',
}
