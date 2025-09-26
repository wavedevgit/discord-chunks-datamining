/** Chunk was on 40276 **/
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
    g = i.useRef(null),
    f = null != n && "cancel" !== n.type,
    b = _ && (null == n ? true : n.type) !== "done",
    h = f || b;
  if (i.useEffect(() => {
      if ((null == n ? true : n.type) === "submit" || (null == n ? true : n.type) === "done") {
        var e;
        null == (e = g.current) || e.focus()
      }
    }, [null == n ? true : n.type]), !h) return null;
  let x = o.intl.string(o.t.i4jeWV);
  return (null == n ? true : n.type) === "submit" ? (t = "critical-primary", x = p ? o.intl.string(s.default.ZUyreX) : o.intl.string(o.t["G+vU8/"])) : (null == n ? true : n.type) === "next" ? x = o.intl.string(o.t.PDTjLC) : (null == n ? true : n.type) === "cancel" && (x = o.intl.string(o.t["ETE/oK"]), t = "secondary"), (0, r.jsx)(l.mzw, {
    "data-migration-pending": true,
    direction: a.Z.Direction.HORIZONTAL,
    children: (0, r.jsxs)(l.hE2, {
      fullWidth: b && f,
      children: [b && (0, r.jsx)(l.zxk, {
        onClick: m,
        variant: "secondary",
        disabled: c,
        text: o.intl.string(o.t["13/7kZ"])
      }), f && (0, r.jsx)(l.zxk, {
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