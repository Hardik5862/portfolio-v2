import { useState } from "react";
import Grid from "@mui/material/Grid";

import ProjectCard from "./ProjectCard";
import FilterIcon from "./FilterIcon";

import { CsContainer, CsHeader, CsGrid } from "./Projects.styles";

const ProjectsPage = ({ projects }) => {
  const [title, setTitle] = useState("Top Projects");

  const handleTitle = (text) => {
    setTitle(text);
  };

  const filteredProjects = projects.filter((project) => {
    return project.tags.includes(title.toLocaleLowerCase());
  });

  return (
    <CsContainer>
      <CsHeader>
        <h1>{title}</h1>
        <FilterIcon handleTitle={handleTitle} />
      </CsHeader>
      <CsGrid container justifyContent="center" spacing={5}>
        {filteredProjects.map((data, i) => (
          <Grid item key={i}>
            <ProjectCard {...data} />
          </Grid>
        ))}
      </CsGrid>
    </CsContainer>
  );
};

export default ProjectsPage;
