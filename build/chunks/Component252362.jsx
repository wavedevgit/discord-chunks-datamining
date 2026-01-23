/** Chunk was on 21738 **/
/** chunk id: 252362, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk342494 = require("./342494.js"),
  Chunk582754 = require("./582754.js"),
  Chunk736653 = require("./736653.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk979286 = require("./979286.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let g = e => {
  let {
    displayOptions: t,
    targetElementRef: n,
    onRequestClose: g,
    onClick: f
  } = e, {
    analyticsLocations: m
  } = (0, c.Ay)(o.A.HOME_PAGE_SHOP_TAB), A = (0, s.Ay)(), _ = (0, a.Mw)(A) ? t.assetDark : t.assetLight, b = i.useRef(g);
  return b.current = g, i.useEffect(() => () => {
    var e;
    null == (e = b.current) || e.call(b)
  }, []), (0, r.jsx)(l.AM, {
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
      text: h.intl.string(h.t.fYfGgK),
      variant: "primary",
      onClick: () => {
        null == f || f(), (0, u.pX)(p.BVt.COLLECTIBLES_SHOP), (0, d.Cz)({
          analyticsLocations: m,
          analyticsSource: o.A.HOME_PAGE_SHOP_TAB
        })
      }
    }],
    onRequestClose: g
  })
}