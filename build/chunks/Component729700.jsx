/** Chunk was on 1272 **/
/** chunk id: 729700, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk907862 = require("./907862.js"),
  Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk335131 = require("./335131.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let g = e => {
  let {
    displayOptions: t,
    targetElementRef: n,
    onRequestClose: g,
    onClick: h
  } = e, {
    analyticsLocations: m
  } = (0, c.ZP)(s.Z.HOME_PAGE_SHOP_TAB), b = (0, o.ZP)(), _ = (0, a.wj)(b) ? t.assetDark : t.assetLight, E = i.useRef(g);
  return E.current = g, i.useEffect(() => () => {
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
      src: _
    },
    actions: [{
      text: f.intl.string(f.t.fYfGgK),
      variant: "primary",
      onClick: () => {
        null == h || h(), (0, u.uL)(p.Z5c.COLLECTIBLES_SHOP), (0, d.mK)({
          analyticsLocations: m,
          analyticsSource: s.Z.HOME_PAGE_SHOP_TAB
        })
      }
    }],
    onRequestClose: g
  })
}