/** Chunk was on 74665 **/
/** chunk id: 315960, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk988794 = require("./988794.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk45750 = require("./45750.js");

function o(e) {
  let {
    selectedTab: n,
    onTabSelected: t,
    userCount: o
  } = e, c = i.useRef(null);
  return i.useEffect(() => {
    var e, n, t;
    return null == (t = c.current) || null == (n = t.ref) || null == (e = n.blur) ? true : e.call(n)
  }, []), (0, l.jsx)("div", {
    className: a.kL,
    children: (0, l.jsxs)(r.VQ0, {
      className: a.$H,
      "aria-label": s.intl.string(s.t["+1H47t"]),
      selectedItem: n,
      type: "top",
      onItemSelect: t,
      children: [(0, l.jsx)(r.VQ0.Item, {
        className: a.YU,
        id: d.al.EVENT_INFO,
        children: s.intl.string(s.t.iW6Xuo)
      }), (0, l.jsx)(r.VQ0.Item, {
        className: a.YU,
        id: d.al.RSVP_LIST,
        children: s.intl.formatToPlainString(s.t["ZrTT/N"], {
          userCount: o
        })
      })]
    })
  })
}