/** Chunk was on 26475 **/
/** chunk id: 273389, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk764295 = require("./764295.js");
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
    g = a.useRef(null),
    f = null != n && "cancel" !== n.type,
    b = _ && (null == n ? true : n.type) !== "done",
    h = f || b;
  if (a.useEffect(() => {
      if ((null == n ? true : n.type) === "submit" || (null == n ? true : n.type) === "done") {
        var e;
        null == (e = g.current) || e.focus()
      }
    }, [null == n ? true : n.type]), !h) return null;
  let x = l.intl.string(l.t.i4jeWV);
  return (null == n ? true : n.type) === "submit" ? (t = "critical-primary", x = p ? l.intl.string(s.default.ZUyreX) : l.intl.string(l.t["G+vU8/"])) : (null == n ? true : n.type) === "next" ? x = l.intl.string(l.t.PDTjLC) : (null == n ? true : n.type) === "cancel" && (x = l.intl.string(l.t["ETE/oK"]), t = "secondary"), (0, r.jsx)(i.mzw, {
    "data-migration-pending": true,
    direction: o.Z.Direction.HORIZONTAL,
    children: (0, r.jsxs)(i.hE2, {
      fullWidth: b && f,
      children: [b && (0, r.jsx)(i.zxk, {
        onClick: m,
        variant: "secondary",
        disabled: c,
        text: l.intl.string(l.t["13/7kZ"])
      }), f && (0, r.jsx)(i.zxk, {
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