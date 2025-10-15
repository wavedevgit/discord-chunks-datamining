/** Chunk was on 25244 **/
/** chunk id: 273389, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk833540 = require("./833540.js");
let c = e => {
  let t, {
      button: n,
      submitting: c,
      disableNext: d,
      onClick: u,
      canNavigateBack: _,
      onBackClicked: m,
      isModeratorReport: p
    } = e,
    g = i.useRef(null),
    f = null != n && "cancel" !== n.type,
    h = _ && (null == n ? true : n.type) !== "done",
    b = f || h;
  if (i.useEffect(() => {
      if ((null == n ? true : n.type) === "submit" || (null == n ? true : n.type) === "done") {
        var e;
        null == (e = g.current) || e.focus()
      }
    }, [null == n ? true : n.type]), !b) return null;
  let x = o.intl.string(o.t.i4jeWR);
  return (null == n ? true : n.type) === "submit" ? (t = "critical-primary", x = p ? o.intl.string(s.default.ZUyreS) : o.intl.string(o.t["G+vU89"])) : (null == n ? true : n.type) === "next" ? x = o.intl.string(o.t.PDTjLN) : (null == n ? true : n.type) === "cancel" && (x = o.intl.string(o.t["ETE/oC"]), t = "secondary"), (0, r.jsx)(l.mzw, {
    "data-migration-pending": true,
    direction: a.Z.Direction.HORIZONTAL,
    children: (0, r.jsxs)(l.ButtonGroup, {
      fullWidth: h && f,
      children: [h && (0, r.jsx)(l.Button, {
        onClick: m,
        variant: "secondary",
        disabled: c,
        text: o.intl.string(o.t["13/7kX"])
      }), f && (0, r.jsx)(l.Button, {
        onClick: () => {
          null != n && u(n)
        },
        variant: t,
        disabled: c || d,
        buttonRef: g,
        text: x
      })]
    })
  })
}