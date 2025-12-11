/** Chunk was on 54844 **/
/** chunk id: 273389, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk162085 = require("./162085.js");
let d = e => {
  let t, {
      button: n,
      submitting: d,
      disableNext: c,
      onClick: u,
      canNavigateBack: m,
      onBackClicked: b,
      isModeratorReport: p
    } = e,
    g = l.useRef(null),
    f = null != n && "cancel" !== n.type,
    h = m && (null == n ? true : n.type) !== "done",
    x = f || h;
  if (l.useEffect(() => {
      if ((null == n ? true : n.type) === "submit" || (null == n ? true : n.type) === "done") {
        var e;
        null == (e = g.current) || e.focus()
      }
    }, [null == n ? true : n.type]), !x) return null;
  let v = s.intl.string(s.t.i4jeWR);
  return (null == n ? true : n.type) === "submit" ? (t = "critical-primary", v = p ? s.intl.string(o.default.ZUyreS) : s.intl.string(s.t["G+vU89"])) : (null == n ? true : n.type) === "next" ? v = s.intl.string(s.t.PDTjLN) : (null == n ? true : n.type) === "cancel" && (v = s.intl.string(s.t["ETE/oC"]), t = "secondary"), (0, r.jsx)(i.mzw, {
    "data-migration-pending": true,
    direction: a.Z.Direction.HORIZONTAL,
    children: (0, r.jsxs)(i.ButtonGroup, {
      fullWidth: h && f,
      children: [h && (0, r.jsx)(i.Button, {
        onClick: b,
        variant: "secondary",
        disabled: d,
        text: s.intl.string(s.t["13/7kX"])
      }), f && (0, r.jsx)(i.Button, {
        onClick: () => {
          null != n && u(n)
        },
        variant: t,
        disabled: d || c,
        buttonRef: g,
        text: v
      })]
    })
  })
}