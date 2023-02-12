import PageHeader from "@/components/layout/page-header";
import React from "react";

const About = () => {
	return (
		<>
			<PageHeader
				title={"About me"}
				subtitle={
					"I am a freelance full-stack developer (front-end focused). I create fast, clean, and maintainable web applications, ready to scale from few users to thousands."
				}
			/>
		</>
	);
};

export default About;
