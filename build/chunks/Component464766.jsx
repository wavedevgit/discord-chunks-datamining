/** Chunk was on 25046 **/
/** chunk id: 464766, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk500537 = require("./500537.js");

function a(e) {
  let {
    selectedTab: t,
    onTabSelected: n,
    userCount: a
  } = e, u = r.useRef(null);
  return r.useEffect(() => {
    var e, t, n;
    return null == (n = u.current) || null == (t = n.ref) || null == (e = t.blur) ? true : e.call(t)
  }, []), (0, l.jsx)("div", {
    className: o.container,
    children: (0, l.jsxs)(i.njP, {
      className: o.tabBar,
      "aria-label": c.intl.string(c.t["+1H47t"]),
      selectedItem: t,
      type: "top",
      onItemSelect: n,
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