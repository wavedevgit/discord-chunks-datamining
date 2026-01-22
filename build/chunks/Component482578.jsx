/** Chunk was on 58652 **/
/** chunk id: 482578, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk641131 = require("./641131.js");
let c = e => {
  let t, {
      button: n,
      submitting: c,
      disableNext: d,
      onClick: u,
      canNavigateBack: m,
      onBackClicked: b,
      isModeratorReport: p
    } = e,
    x = r.useRef(null),
    g = null != n && "cancel" !== n.type,
    f = m && (null == n ? true : n.type) !== "done",
    v = g || f;
  if (r.useEffect(() => {
      if ((null == n ? true : n.type) === "submit" || (null == n ? true : n.type) === "done") {
        var e;
        null == (e = x.current) || e.focus()
      }
    }, [null == n ? true : n.type]), !v) return null;
  let h = s.intl.string(s.t.i4jeWR);
  return (null == n ? true : n.type) === "submit" ? (t = "critical-primary", h = p ? s.intl.string(o.default.ZUyreS) : s.intl.string(s.t["G+vU89"])) : (null == n ? true : n.type) === "next" ? h = s.intl.string(s.t.PDTjLN) : (null == n ? true : n.type) === "cancel" && (h = s.intl.string(s.t["ETE/oC"]), t = "secondary"), (0, l.jsx)(a.jlY, {
    "data-migration-pending": true,
    direction: i.A.Direction.HORIZONTAL,
    children: (0, l.jsxs)(a.ButtonGroup, {
      fullWidth: true,
      children: [f && (0, l.jsx)(a.Button, {
        onClick: b,
        variant: "secondary",
        disabled: c,
        text: s.intl.string(s.t["13/7kX"])
      }), g && (0, l.jsx)(a.Button, {
        onClick: () => {
          null != n && u(n)
        },
        variant: t,
        disabled: c || d,
        buttonRef: x,
        text: h
      })]
    })
  })
}