/** Chunk was on 66452 **/
/** chunk id: 464766, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk115875 = require("./115875.js");

function o(e) {
  let {
    selectedTab: t,
    onTabSelected: n,
    userCount: o
  } = e, d = r.useRef(null);
  return r.useEffect(() => {
    var e, t, n;
    return null == (n = d.current) || null == (t = n.ref) || null == (e = t.blur) ? true : e.call(t)
  }, []), (0, l.jsx)("div", {
    className: c.container,
    children: (0, l.jsxs)(i.njP, {
      className: c.tabBar,
      "aria-label": s.intl.string(s.t["+1H47t"]),
      selectedItem: t,
      type: "top",
      onItemSelect: n,
      children: [(0, l.jsx)(i.njP.Item, {
        className: c.tabBarItem,
        id: a.fL.EVENT_INFO,
        children: s.intl.string(s.t.iW6Xuo)
      }), (0, l.jsx)(i.njP.Item, {
        className: c.tabBarItem,
        id: a.fL.RSVP_LIST,
        children: s.intl.formatToPlainString(s.t["ZrTT/N"], {
          userCount: o
        })
      })]
    })
  })
}