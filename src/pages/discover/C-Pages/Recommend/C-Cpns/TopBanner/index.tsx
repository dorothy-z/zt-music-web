// 导入第三方库
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

// 导入功能性的东西
import { getTopBannerAction } from "../../store/actionCreators";

// 导入组件
import { Carousel } from "antd";
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";
import { CarouselRef } from "antd/lib/carousel";

interface IState {
  getIn: any;
}

export default memo(function ZTTopBanner() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);

  // 组件和redux关联:获取数据和进项dispatch操作
  const { topBanners } = useSelector(
    (state: IState) => ({
      // topBanners: state.get("recommend").get("topBanners"),
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  //  其他hooks
  const bannerRef = useRef<CarouselRef>(null);
  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);

  // 其他业务逻辑
  const bgImage =
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";

  return (
    <div>
      <BannerWrapper bgImage={bgImage}>
        <div className="banner wrap-v2">
          <BannerLeft>
            <Carousel
              effect="fade"
              autoplay
              ref={bannerRef}
              beforeChange={bannerChange}
            >
              {topBanners.map((item: any, index: number) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img
                      className="image"
                      src={item.imageUrl}
                      alt={item.typeTitle}
                    />
                  </div>
                );
              })}
            </Carousel>
          </BannerLeft>
          <BannerRight></BannerRight>
          <BannerControl>
            <button
              className="btn left"
              onClick={(e) => bannerRef.current?.prev()}
            ></button>
            <button
              className="btn right"
              onClick={(e) => bannerRef.current?.next()}
            ></button>
          </BannerControl>
        </div>
      </BannerWrapper>
    </div>
  );
});
