import { palette } from '@/setup/theme/palette'

export const stringAvatar = (name: string) => {
  return {
    sx: {
      bgcolor: palette.yellow.main,
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  }
}
