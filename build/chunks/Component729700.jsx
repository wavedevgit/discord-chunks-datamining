/** Chunk was on 1272 **/
/** chunk id: 729700, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk907862 = require("./907862.js"),
  Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk335131 = require("./335131.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk304837 = require("./304837.js");
let g = e => {
  let {
    displayOptions: t,
    targetElementRef: n,
    onRequestClose: g,
    onClick: m
  } = e, {
    analyticsLocations: b
  } = (0, c.ZP)(s.Z.HOME_PAGE_SHOP_TAB), _ = (0, o.ZP)(), O = (0, a.wj)(_) ? t.assetDark : t.assetLight, E = i.useRef(g);
  return E.current = g, i.useEffect(() => () => {
    var e;
    null == (e = E.current) || e.call(E)
  }, []), (0, r.jsx)(l.J2, {
    targetElementRef: n,
    position: "right",
    align: "top",
    size: "md",
    caretConfig: {
      position: "left",
      align: "start"
    },
    title: t.title(),
    body: t.body(),
    asset: (0, r.jsx)("img", {
      className: f.art,
      src: O,
      alt: ""
    }),
    actions: [{
      text: h.intl.string(h.t.fYfGgI),
      variant: "primary",
      onClick: () => {
        null == m || m(), (0, u.uL)(p.Z5c.COLLECTIBLES_SHOP), (0, d.mK)({
          openInLayer: false,
          analyticsLocations: b,
          analyticsSource: s.Z.HOME_PAGE_SHOP_TAB
        })
      }
    }],
    onRequestClose: g
  })
}