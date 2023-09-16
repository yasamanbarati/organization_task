import { Bookmark, BookmarkBorder, Favorite, FavoriteBorder, MoreVert, VisibilityOutlined } from "@mui/icons-material"
import { Avatar, Card, CardActions, CardContent, CardHeader, Checkbox, IconButton, styled, Typography } from "@mui/material"

const CardBox = styled(Card)(({ theme }) => ({
  background: theme.palette.violet.dark,
  minWidth: '320px',
  width: '380px',
  marginTop: '24px',
  padding: '16px 16px 0 16px',
  "& .MuiCardHeader-avatar": {
    marginRight: '0',
    marginLeft: '10px',
  },
  "& .MuiAvatar-root.MuiAvatar-circular": {
    background: theme.palette.yellow.main,
  },
  "& .MuiButtonBase-root": {
    color: theme.palette.white,
  },
  "& .MuiCardHeader-title": {
    color: theme.palette.white,
    fontSize: '0.875rem',
    fontWeight: '500',
    lineHeight: '20px',
    letterSpacing: '0'
  },
}))

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const MessageCard = () => {
  return (
    <CardBox>
      <CardHeader sx={{ padding: '0' }}
        avatar={
          <Avatar aria-label="recipe">
            ا ن
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" >
            <MoreVert />
          </IconButton>
        }
        title="امین نیک نام"
      />

      <CardContent sx={{ padding: '16px 0' }}>
        <Typography variant="body1" component='p' color="white">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </Typography>
      </CardContent>

      <CardActions disableSpacing sx={{ padding: '16px 0', justifyContent: 'space-between' }}>
        <div>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            color="error" sx={{ paddingRight: '0' }}
          />
          <Typography variant="body2" component='span' color='white'>50 پسندیده</Typography>
        </div>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          color='default' sx={{ paddingLeft: '0' }}
        />
      </CardActions>

      <CardContent sx={{
        padding: '0',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <Typography variant="body2" component='p' color="lightsteelblue">16:24</Typography>
        <Typography variant="body2" component='p' color="lightsteelblue"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
          }}>
          <VisibilityOutlined sx={{
            color: "lightsteelblue",
            marginLeft: "5px",
            fontSize: " 1.2rem"
          }} />
          100 بازدید
        </Typography>
      </CardContent>

    </CardBox>
  )
}
