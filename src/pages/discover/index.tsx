import React, { memo, useEffect } from "react";
import { renderRoutes } from "react-router-config";

import { dicoverMenu } from "../../common/local-data";
import request from "../../services/request";

import { NavLink } from "react-router-dom";
import { DiscoverWrapper, TopMenu } from "./style";

interface IRouter {
  path: string;
  exact?: boolean;
  component?: React.NamedExoticComponent<object>;
  render?: any;
  routes?: IRouter[];
}

interface Iprops {
  route: IRouter;
}

interface ILink {
  title: string;
  link: string;
}

const ZTDiscover: React.FC<Iprops> = memo(function (props) {
  const { route } = props;

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map((item: ILink, index: number) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  );
});

export default ZTDiscover;
