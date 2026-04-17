import React from "react";
import { useLanguage } from "@/src/i18n/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/src/components/ui/Button";

export function Builds() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const projectToCaseStudyId: Record<string, string> = {
    "Instagram Growth System": "instagram-growth-system",
    "Meta Ads Playbook": "meta-ads-playbook",
    "Content Creator Toolkit": "content-creator-toolkit",
  };

  const projects = t.builds?.projects || [
    {
      title: "Instagram Growth System",
      type: "Social Media Strategy",
      description:
        "A comprehensive framework I developed for growing Instagram accounts organically. Includes content pillars, posting schedules, hashtag research methods, and engagement tactics that helped me build a 15K+ following for my brand.",
      image: "/hero.jpeg",
    },
    {
      title: "Meta Ads Playbook",
      type: "Advertising Guide",
      description:
        "My complete guide to running profitable Facebook and Instagram ads for Tanzanian businesses. Covers audience targeting, creative testing, budget optimization, and scaling strategies I've used to generate 6-figure revenue for clients.",
      image: "/hero.jpeg",
    },
    {
      title: "Content Creator Toolkit",
      type: "Digital Product",
      description:
        "A collection of 100+ Canva templates, caption templates, and content calendars I created to help small businesses post consistently on social media without hiring expensive designers or agencies.",
      image: "/hero.jpeg",
    },
  ];

  return (
    <section id="builds" className="bg-brand-dark">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Social <span className="text-brand-green">Media</span> Mastery
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t.builds?.subtitle ||
              "Frameworks, strategies, and tools I've built to master social media marketing"}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="h-full rounded-xl bg-brand-navy/20 border border-white/5 hover:border-brand-green/30 hover:bg-brand-navy/30 transition-all flex flex-col overflow-hidden">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={(project as any).image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div>
                    <p className="text-brand-green text-sm font-medium mb-2">
                      {(project as any).type}
                    </p>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-green transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-text-muted text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Action */}
                  <Button
                    className="w-full"
                    variant="outline"
                    onClick={() => {
                      const caseStudyId = projectToCaseStudyId[project.title];
                      if (caseStudyId) {
                        navigate(`/case-study/${caseStudyId}`);
                      }
                    }}
                  >
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
