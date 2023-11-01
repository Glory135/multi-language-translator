import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import { LinkedIn } from '@mui/icons-material';

const DeveloperCard = ({ img, name, title, role, milestone }) => {
  return (
    <Card className='developerCard' data-aos='fade-right'>
      <CardActionArea>
        <CardMedia
          sx={{ height: 400 }}
          image={img}
          title="developer"
        />
        <CardContent className='detailsCan'>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="ul" className='detaillist'>
            <li> <span className="liTitle">Title</span>: <span className="liAns">{title}</span> </li>
            <li> <span className="liTitle">Role</span>: <span className="liAns">{role}</span> </li>
            <li> <span className="liTitle">MLSA milestone</span>: <span className="liAns">{milestone}</span> </li>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="share">
          <MicrosoftIcon />
        </IconButton>
        <IconButton aria-label="share">
          <LinkedIn />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default DeveloperCard