/** Chunk was on 45620 **/
/** chunk id: 384067, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk597688 = require("./597688.js"),
  Chunk297651 = require("./297651.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk806734 = require("./806734.js");
let h = e => {
  var t, n, a;
  let {
    wideBannerBlock: h,
    handleTransition: m,
    tab: _
  } = e, v = null == (t = u.Z.getCategoryByStoreListingId(h.categoryStoreListingId)) ? true : t.skuId, O = l.useRef(null), C = l.useRef(null), [E, S] = l.useState();
  l.useEffect(() => {
    let e = C.current;
    if (null == e) return;
    let t = () => {
      e.naturalWidth > 0 && e.naturalHeight > 0 && S(1080 * (e.naturalHeight / e.naturalWidth))
    };
    return e.complete ? t() : e.onload = t, () => {
      e.onload = null
    }
  }, []);
  let y = null != v ? v : "",
    {
      handleCardVisibilityChange: x
    } = (0, d.E)(y, "home", "marketing wide banner"),
    j = h.bannerUrl;
  if (null == j) return null;
  let T = _ === p.AW.ORBS;
  return <o.$ innerRef={O} onChange={x} threshold={0}><div ref={O} className={i()(b.row, b.between, b.bannerBlockContainer, b.centeredSection, {
        [b.extraRounded]: T
      })}>{<div className={i()(b.wideBannerBackgroundImg, {
          [b.extraRounded]: T
        })}><img ref={C} src={j} alt={h.title} className={i()(b.wideBannerArt, {
            [b.wideBannerArtOrbs]: T
          })} style={{
            height: null != E ? "".concat(E, "px") : "auto"
          }} /></div>}{<div className={b.wideBannerContentContainer} style={{
          maxHeight: null != E ? "".concat(E, "px") : "auto"
        }}><div className={b.wideBannerTextContainer}>{<s.X6q style={{
              color: null != (n = h.bannerTextColor) ? n : "var(--header-primary)"
            }} className={T ? b.wideBannerOrbsHeading : true} variant={T ? "heading-xl/bold" : "heading-lg/semibold"}>{h.title}</s.X6q>}{<s.Text style={{
              color: null != (a = h.bannerTextColor) ? a : "var(--text-muted)"
            }} lineClamp={2} variant={T ? "text-md/medium" : "text-sm/medium"}>{T ? f.intl.format(f.t.SFFP7O, {
              helpdeskArticle: c.Z.getArticleURL(g.BhN.VIRTUAL_CURRENCY_LEARN_MORE)
            }) : h.body}</s.Text>}</div></div>}{true !== h.disableCta && <div className={b.wideBannerBlockButton}><s.zxk variant={"overlay-primary"} onClick={() => m("shop wide banner", y)} text={f.intl.string(f.t.jVcuVV)} /></div>}</div></o.$>
}