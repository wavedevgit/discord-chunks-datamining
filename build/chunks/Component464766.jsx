/** Chunk was on 98464 **/
/** chunk id: 464766, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk500537 = require("./500537.js");

function s(e) {
  let {
    selectedTab: n,
    onTabSelected: t,
    userCount: s,
    isHub: c = false
  } = e, u = l.useRef(null);
  l.useEffect(() => {
    var e, n, t;
    return null == (t = u.current) || null == (n = t.ref) || null == (e = n.blur) ? true : e.call(n)
  }, []);
  let _ = a.intl.formatToPlainString(a.t["ZrTT/P"], {
      userCount: s
    }),
    g = [(0, i.jsx)(r.njP.Item, {
      className: o.tabBarItem,
      id: d.fL.EVENT_INFO,
      children: a.intl.string(a.t.iW6Xur)
    }, "event-details")];
  return c || g.push((0, i.jsx)(r.njP.Item, {
    className: o.tabBarItem,
    id: d.fL.RSVP_LIST,
    children: _
  }, "is-hub")), (0, i.jsx)("div", {
    className: o.container,
    children: (0, i.jsx)(r.njP, {
      className: o.tabBar,
      "aria-label": a.intl.string(a.t["+1H47u"]),
      selectedItem: n,
      type: "top",
      onItemSelect: t,
      children: g
    })
  })
}