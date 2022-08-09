import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { CsCard, CsCardMedia } from "./Projects.styles";

const ProjectCard = (project) => {
  return (
    <CsCard>
      <CsCardMedia
        image={project.mainImage.asset.url}
        title={project.mainImage.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {project.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {project.body[0].children[0].text}
        </Typography>
      </CardContent>
      <CardActions>
        {project.links &&
          project.links.map((data) => (
            <Button
              key={data._key}
              href={data.url}
              target="_blank"
              size="small"
              color="secondary"
            >
              {data.text}
            </Button>
          ))}
      </CardActions>
    </CsCard>
  );
};

export default ProjectCard;
