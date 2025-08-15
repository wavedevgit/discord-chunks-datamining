/** Chunk was on 59727 **/
/** chunk id: 273389, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
      canNavigateBack: m,
      onBackClicked: p,
      isModeratorReport: _
    } = e,
    g = a.useRef(null),
    b = null != n && "cancel" !== n.type,
    h = m && (null == n ? true : n.type) !== "done",
    x = b || h;
  if (a.useEffect(() => {
      if ((null == n ? true : n.type) === "submit" || (null == n ? true : n.type) === "done") {
        var e;
        null == (e = g.current) || e.focus()
      }
    }, [null == n ? true : n.type]), !x) return null;
  let f = o.intl.string(o.t.i4jeWV);
  return (null == n ? true : n.type) === "submit" ? (t = "critical-primary", f = _ ? o.intl.string(s.default.ZUyreX) : o.intl.string(o.t["G+vU8/"])) : (null == n ? true : n.type) === "next" ? f = o.intl.string(o.t.PDTjLC) : (null == n ? true : n.type) === "cancel" && (f = o.intl.string(o.t["ETE/oK"]), t = "secondary"), (0, r.jsx)(i.mzw, {
    "data-migration-pending": true,
    direction: l.Z.Direction.HORIZONTAL,
    children: (0, r.jsxs)(i.hE2, {
      fullWidth: h && b,
      children: [h && (0, r.jsx)(i.zxk, {
        onClick: p,
        variant: "secondary",
        disabled: c,
        text: o.intl.string(o.t["13/7kZ"])
      }), b && (0, r.jsx)(i.zxk, {
        onClick: () => {
          null != n && u(n)
        },
        variant: t,
        disabled: c || d,
        buttonRef: g,
        text: f
      })]
    })
  })
}