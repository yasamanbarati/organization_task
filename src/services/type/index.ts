import { ReactNode } from 'react'

export interface messageProps {
  text: string
  visibilityCount: number
  favoriteCount: number
  time: Date
  saveMessageFUN?: () => void
}
export interface TabCardProps {
  value?: number
  avatar: string
  title: string
  messageCount?: number
  time?: Date
  subheader?: string & ReactNode
}
export const messagePropsEmpty = {
  text: '',
  visibilityCount: 1,
  favoriteCount: 0,
  time: '2023-12-16T23:54:00.000Z',
}
