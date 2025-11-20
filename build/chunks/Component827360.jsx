/** Chunk was on 1272 **/
/** chunk id: 827360, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk907862 = require("./907862.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk595619 = require("./595619.js");
let p = e => {
  let {
    targetElementRef: t,
    onRequestClose: n,
    onClick: p
  } = e, {
    analyticsLocations: f
  } = (0, s.ZP)(a.Z.HOME_PAGE_SHOP_TAB), h = i.useRef(n);
  return h.current = n, i.useEffect(() => () => {
    var e;
    null == (e = h.current) || e.call(h)
  }, []), (0, r.jsx)(l.J2, {
    targetElementRef: t,
    position: "right",
    size: "md",
    alignmentStrategy: "edge",
    align: "top",
    caretConfig: {
      align: "start"
    },
    title: u.intl.string(u.t.epBu6F),
    body: u.intl.string(u.t["o8+3AX"]),
    graphic: {
      type: "image",
      src: d.Z
    },
    gradientColor: "blue",
    actions: [{
      text: u.intl.string(u.t.dp9qDi),
      variant: "primary",
      onClick: () => {
        null == p || p(), (0, o.mK)({
          analyticsLocations: f,
          analyticsSource: a.Z.HOME_PAGE_SHOP_TAB,
          tab: c.AW.HOME
        })
      }
    }],
    onRequestClose: n
  })
}