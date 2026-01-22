/** Chunk was on 21738 **/
/** chunk id: 540063, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk342494 = require("./342494.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk979286 = require("./979286.js"),
  Chunk758836 = require("./758836.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk166805 = require("./166805.js");
let p = e => {
  let {
    targetElementRef: t,
    onRequestClose: n,
    onClick: p
  } = e, {
    analyticsLocations: f
  } = (0, s.Ay)(a.A.HOME_PAGE_SHOP_TAB), h = i.useRef(n);
  return h.current = n, i.useEffect(() => () => {
    var e;
    null == (e = h.current) || e.call(h)
  }, []), (0, r.jsx)(l.AM, {
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
      src: d.A
    },
    gradientColor: "blue",
    actions: [{
      text: u.intl.string(u.t.dp9qDi),
      variant: "primary",
      onClick: () => {
        null == p || p(), (0, o.Cz)({
          analyticsLocations: f,
          analyticsSource: a.A.HOME_PAGE_SHOP_TAB,
          tab: c.G2.HOME
        })
      }
    }],
    onRequestClose: n
  })
}