/** Chunk was on 77986 **/
/** chunk id: 315960, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk988794 = require("./988794.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk45750 = require("./45750.js");

function d(e) {
  let {
    selectedTab: t,
    onTabSelected: n,
    userCount: d
  } = e, u = r.useRef(null);
  return r.useEffect(() => {
    var e, t, n;
    return null == (n = u.current) || null == (t = n.ref) || null == (e = t.blur) ? true : e.call(t)
  }, []), (0, l.jsx)("div", {
    className: c.kL,
    children: (0, l.jsxs)(s.VQ0, {
      className: c.$H,
      "aria-label": a.intl.string(a.t["+1H47t"]),
      selectedItem: t,
      type: "top",
      onItemSelect: n,
      children: [(0, l.jsx)(s.VQ0.Item, {
        className: c.YU,
        id: i.al.EVENT_INFO,
        children: a.intl.string(a.t.iW6Xuo)
      }), (0, l.jsx)(s.VQ0.Item, {
        className: c.YU,
        id: i.al.RSVP_LIST,
        children: a.intl.formatToPlainString(a.t["ZrTT/N"], {
          userCount: d
        })
      })]
    })
  })
}