/** Chunk was on 12236 **/
/** chunk id: 482578, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk641131 = require("./641131.js");
let d = e => {
  let t, {
      button: n,
      submitting: d,
      disableNext: c,
      onClick: u,
      canNavigateBack: m,
      onBackClicked: p,
      isModeratorReport: b
    } = e,
    _ = r.useRef(null),
    g = null != n && "cancel" !== n.type,
    x = m && (null == n ? true : n.type) !== "done",
    h = g || x;
  if (r.useEffect(() => {
      if ((null == n ? true : n.type) === "submit" || (null == n ? true : n.type) === "done") {
        var e;
        null == (e = _.current) || e.focus()
      }
    }, [null == n ? true : n.type]), !h) return null;
  let v = s.intl.string(s.t.i4jeWR);
  return (null == n ? true : n.type) === "submit" ? (t = "critical-primary", v = b ? s.intl.string(o.default.ZUyreS) : s.intl.string(s.t["G+vU89"])) : (null == n ? true : n.type) === "next" ? v = s.intl.string(s.t.PDTjLN) : (null == n ? true : n.type) === "cancel" && (v = s.intl.string(s.t["ETE/oC"]), t = "secondary"), (0, l.jsx)(i.jlY, {
    "data-migration-pending": true,
    direction: a.A.Direction.HORIZONTAL,
    children: (0, l.jsxs)(i.ButtonGroup, {
      fullWidth: true,
      children: [x && (0, l.jsx)(i.Button, {
        onClick: p,
        variant: "secondary",
        disabled: d,
        text: s.intl.string(s.t["13/7kX"])
      }), g && (0, l.jsx)(i.Button, {
        onClick: () => {
          null != n && u(n)
        },
        variant: t,
        disabled: d || c,
        buttonRef: _,
        text: v
      })]
    })
  })
}