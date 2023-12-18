import React from "react";
import { Button } from "semantic-ui-react";
import { map } from "lodash";
import { Icon } from "../../../../assets";
import { socialData } from "../../../../utils";
import "./Info.scss";

export function Info() {
  return (
    <div className="footer-info">
      <Icon.LogoWhite className="logo" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
        autem ducimus illum sit libero debitis quae quisquam omnis animi maiores
        possimus quas nobis dolorum expedita numquam aspernatur cum, illo
        similique!
      </p>

      {map(socialData, (social) => (
        <Button
          key={social.type}
          as="a"
          target="_blank"
          href={social.link}
          color={social.type}
          icon={social.type}
        />
      ))}
    </div>
  );
}
