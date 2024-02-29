import { ResourceTab } from "@shared/ui/ResourceTab";
import React from "react";

export const ResourcesScreen = () => {
  return (
    <section className="container items-center">
      <h1 className="heading">Наши ресурсы</h1>
      <p className="paragraph text-center mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros mi,
        facilisis ac tristique ut, malesuada et risus. In hac habitasse platea
        dictumst. Integer laoreet magna nulla, sed feugiat nisi mollis nec. Ut
        tempor id tellus at semper.
      </p>
      <div className="flex justify-between items-start">
        <ResourceTab name="" />
        <ResourceTab />
        <ResourceTab />
      </div>
    </section>
  );
};
