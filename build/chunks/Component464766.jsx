/** Chunk was on 25046 **/
/** chunk id: 464766, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk500537 = require("./500537.js");

function a(e) {
  let {
    selectedTab: n,
    onTabSelected: t,
    userCount: a
  } = e, d = r.useRef(null);
  return r.useEffect(() => {
    var e, n, t;
    return null == (t = d.current) || null == (n = t.ref) || null == (e = n.blur) ? true : e.call(n)
  }, []), (0, l.jsx)("div", {
    className: o.container,
    children: (0, l.jsxs)(i.njP, {
      className: o.tabBar,
      "aria-label": c.intl.string(c.t["+1H47t"]),
      selectedItem: n,
      type: "top",
      onItemSelect: t,
      children: [(0, l.jsx)(i.njP.Item, {
        className: o.tabBarItem,
        id: s.fL.EVENT_INFO,
        children: c.intl.string(c.t.iW6Xuo)
      }), (0, l.jsx)(i.njP.Item, {
        className: o.tabBarItem,
        id: s.fL.RSVP_LIST,
        children: c.intl.formatToPlainString(c.t["ZrTT/N"], {
          userCount: a
        })
      })]
    })
  })
}