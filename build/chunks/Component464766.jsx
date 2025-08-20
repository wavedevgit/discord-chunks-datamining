/** Chunk was on 25046 **/
/** chunk id: 464766, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk500537 = require("./500537.js");

function o(e) {
  let {
    selectedTab: t,
    onTabSelected: n,
    userCount: o,
    isHub: c = false
  } = e, u = l.useRef(null);
  l.useEffect(() => {
    var e, t, n;
    return null == (n = u.current) || null == (t = n.ref) || null == (e = t.blur) ? true : e.call(t)
  }, []);
  let _ = d.intl.formatToPlainString(d.t["ZrTT/P"], {
      userCount: o
    }),
    g = [(0, i.jsx)(r.njP.Item, {
      className: s.tabBarItem,
      id: a.fL.EVENT_INFO,
      children: d.intl.string(d.t.iW6Xur)
    }, "event-details")];
  return c || g.push((0, i.jsx)(r.njP.Item, {
    className: s.tabBarItem,
    id: a.fL.RSVP_LIST,
    children: _
  }, "is-hub")), (0, i.jsx)("div", {
    className: s.container,
    children: (0, i.jsx)(r.njP, {
      className: s.tabBar,
      "aria-label": d.intl.string(d.t["+1H47u"]),
      selectedItem: t,
      type: "top",
      onItemSelect: n,
      children: g
    })
  })
}