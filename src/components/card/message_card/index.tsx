import { timeDateFormatter } from '@/helper/time'
import { messageProps } from '@/services/type'
import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
  MoreVert,
  VisibilityOutlined,
} from '@mui/icons-material'
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  IconButton,
  styled,
  Typography,
} from '@mui/material'
import { useState } from 'react'

const CardBox = styled(Card)(({ theme }) => ({
  background: theme.palette.violet.dark,
  width: '100%',
  height: 'auto',
  marginTop: '24px',
  padding: '16px 16px 0 16px',
  overflow: 'initial',

  '& .MuiCardHeader-avatar': {
    marginRight: '0',
    marginLeft: '10px',
  },
  '& .MuiAvatar-root.MuiAvatar-circular': {
    background: theme.palette.yellow.main,
  },
  '& .MuiButtonBase-root': {
    color: theme.palette.white,
  },
  '& .MuiCardHeader-title': {
    color: theme.palette.white,
    fontSize: '0.875rem',
    fontWeight: '500',
    lineHeight: '20px',
    letterSpacing: '0',
  },
}))

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

export const MessageCard = ({
  text,
  visibilityCount,
  favoriteCount,
  time,
}: messageProps) => {
  const [FavoriteCount, setFavoriteCount] = useState<number>(favoriteCount)

  const [isLike, setIsLike] = useState(false)

  const HandleOnClick = () => {
    setIsLike(!isLike)

    if (isLike) setFavoriteCount(FavoriteCount - 1)
    else setFavoriteCount(FavoriteCount + 1)
  }

  return (
    <CardBox>
      <CardHeader
        sx={{ padding: '0' }}
        avatar={<Avatar aria-label="recipe">ا ن</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="امین نیک نام"
      />

      <CardContent sx={{ padding: '16px 0' }}>
        <Typography variant="body1" component="p" color="white">
          {text}
        </Typography>
      </CardContent>

      <CardActions
        disableSpacing
        sx={{ padding: '16px 0', justifyContent: 'space-between' }}
      >
        <div>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            color="error"
            sx={{ paddingRight: '0' }}
            onClick={HandleOnClick}
          />
          <Typography variant="body2" component="span" color="white">
            {FavoriteCount} پسندیده
          </Typography>
        </div>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          color="default"
          sx={{ paddingLeft: '0' }}
        />
      </CardActions>

      <CardContent
        sx={{
          padding: '0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* <Typography variant="body2" component='p' color="lightsteelblue">{timeDateFormatter.format(time)}</Typography> */}

        <Typography
          variant="body2"
          component="p"
          color="lightsteelblue"
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <VisibilityOutlined
            sx={{
              color: 'lightsteelblue',
              marginLeft: '5px',
              fontSize: ' 1.2rem',
            }}
          />
          {visibilityCount} بازدید
        </Typography>
      </CardContent>
    </CardBox>
  )
}
