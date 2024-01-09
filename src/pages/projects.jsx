import PageHeader from "@/components/layout/page-header";
import PageCard from "@/components/page-card";
import React from "react";

const Projects = () => {
  return (
    <>
      <PageHeader
        title={"Projects"}
        subtitle={"Some stuff I've made"}
      />
      <div className={"flex flex-row flex-wrap justify-center gap-8 mt-8"}>
        <PageCard
          link={null}
          title={"Sarasa"}
          description={"lorem sarasa"}
          image={null}
        />
        <PageCard
          link={null}
          title={"Sarasa"}
          description={"lorem sarasa"}
          image={null}
        />
        <PageCard
          link={null}
          title={"Sarasa"}
          description={"lorem sarasa"}
          image={null}
        />
        <PageCard
          link={null}
          title={"Sarasa"}
          description={"lorem sarasa"}
          image={null}
        />
      </div>

    </>
  );
};

export default Projects;
