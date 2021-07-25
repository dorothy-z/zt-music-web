import React from "react";
import { Redirect } from "react-router-dom";

const ZTDiscover = React.lazy(() => import("../pages/discover"));
const ZTRecommend = React.lazy(
  () => import("../pages/discover/C-Pages/Recommend")
);
const ZTRanking = React.lazy(() => import("../pages/discover/C-Pages/Ranking"));
const ZTSongs = React.lazy(() => import("../pages/discover/C-Pages/Songs"));
const ZTDjRadio = React.lazy(() => import("../pages/discover/C-Pages/DjRadio"));
const ZTArtist = React.lazy(() => import("../pages/discover/C-Pages/Artist"));
const ZTAlbum = React.lazy(() => import("../pages/discover/C-Pages/Album"));
const ZTPlayer = React.lazy(() => import("../pages/Player"));

const ZTFriend = React.lazy(() => import("../pages/Friend"));
const ZTMine = React.lazy(() => import("../pages/Mine"));

// import ZTDiscover from "../pages/discover";
// import ZTRecommend from "../pages/discover/C-Pages/Recommend";
// import ZTRanking from "../pages/discover/C-Pages/Ranking";
// import ZTSongs from "../pages/discover/C-Pages/Songs";
// import ZTDjRadio from "../pages/discover/C-Pages/DjRadio";
// import ZTArtist from "../pages/discover/C-Pages/Artist";
// import ZTAlbum from "../pages/discover/C-Pages/Album";
// import ZTPlayer from "../pages/Player";

// import ZTMine from "../pages/Mine";
// import ZTFriend from "../pages/Friend";

interface IRouter {
  path: string;
  exact?: boolean;
  component?: React.FC<any>;
  render?: any;
  routes?: IRouter[];
}

const routes: IRouter[] = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: ZTDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        component: ZTRecommend,
      },
      {
        path: "/discover/ranking",
        component: ZTRanking,
      },
      {
        path: "/discover/songs",
        component: ZTSongs,
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: ZTDjRadio,
      },
      {
        path: "/discover/artist",
        component: ZTArtist,
      },
      {
        path: "/discover/album",
        component: ZTAlbum,
      },
      {
        path: "/discover/player",
        component: ZTPlayer,
      },
    ],
  },
  {
    path: "/mine",
    component: ZTMine,
  },
  {
    path: "/friend",
    component: ZTFriend,
  },
];

export default routes;
