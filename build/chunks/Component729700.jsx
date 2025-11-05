/** Chunk was on 1272 **/
/** chunk id: 729700, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk907862 = require("./907862.js"),
  Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk335131 = require("./335131.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let h = e => {
  let {
    displayOptions: t,
    targetElementRef: n,
    onRequestClose: h,
    onClick: g
  } = e, {
    analyticsLocations: m
  } = (0, c.ZP)(o.Z.HOME_PAGE_SHOP_TAB), _ = (0, s.ZP)(), b = (0, a.wj)(_) ? t.assetDark : t.assetLight, E = i.useRef(h);
  return E.current = h, i.useEffect(() => () => {
    var e;
    null == (e = E.current) || e.call(E)
  }, []), (0, r.jsx)(l.J2, {
    targetElementRef: n,
    position: "right",
    align: "top",
    size: "md",
    caretConfig: {
      align: "start"
    },
    title: t.title(),
    body: t.body(),
    graphic: {
      type: "image",
      src: b
    },
    actions: [{
      text: f.intl.string(f.t.fYfGgK),
      variant: "primary",
      onClick: () => {
        null == g || g(), (0, u.uL)(p.Z5c.COLLECTIBLES_SHOP), (0, d.mK)({
          analyticsLocations: m,
          analyticsSource: o.Z.HOME_PAGE_SHOP_TAB
        })
      }
    }],
    onRequestClose: h
  })
}