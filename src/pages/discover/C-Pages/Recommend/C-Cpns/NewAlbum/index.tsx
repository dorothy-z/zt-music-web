import { memo, useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { CarouselRef } from "antd/lib/carousel";

import { getNewAlbumAction } from "../../store/actionCreators";

import { Carousel } from "antd";
import ZTAlbumCover from "../../../../../../components/AlbumCover";
import ZTThemeHeaderRCM from "../../../../../../components/ThemeHeaderRem";
import { AlbumWrapper } from "./style";

// interface IRes {
//   albums: Array<any>;
// }

interface Istate {
  getIn: any;
}

export default memo(function ZTNewAlbum() {
  // const [albums, setAlbums] = useState<any[]>([]);

  // redux hooks
  const { newAlbums } = useSelector(
    (state: Istate) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  const pageRef = useRef<CarouselRef>(null);
  useEffect(() => {
    // 如果dispatch的内容是一个函数,就会执行这个函数并把dispatch传过去
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);

  return (
    <AlbumWrapper>
      <ZTThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current?.prev()}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums
                    .slice(item * 5, (item + 1) * 5)
                    .map((iten: any) => {
                      return (
                        <ZTAlbumCover
                          key={iten.id}
                          info={iten}
                          size={100}
                          width={118}
                          bgp="-570px"
                        />
                      );
                    })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current?.next()}
        ></button>
      </div>
    </AlbumWrapper>
  );
});
