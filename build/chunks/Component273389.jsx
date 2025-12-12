/** Chunk was on 54844 **/
/** chunk id: 273389, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk964721 = require("./964721.js");
let c = e => {
  let t, {
      button: n,
      submitting: c,
      disableNext: d,
      onClick: u,
      canNavigateBack: m,
      onBackClicked: p,
      isModeratorReport: g
    } = e,
    _ = l.useRef(null),
    b = null != n && "cancel" !== n.type,
    x = m && (null == n ? true : n.type) !== "done",
    h = b || x;
  if (l.useEffect(() => {
      if ((null == n ? true : n.type) === "submit" || (null == n ? true : n.type) === "done") {
        var e;
        null == (e = _.current) || e.focus()
      }
    }, [null == n ? true : n.type]), !h) return null;
  let f = s.intl.string(s.t.i4jeWR);
  return (null == n ? true : n.type) === "submit" ? (t = "critical-primary", f = g ? s.intl.string(o.default.ZUyreS) : s.intl.string(s.t["G+vU89"])) : (null == n ? true : n.type) === "next" ? f = s.intl.string(s.t.PDTjLN) : (null == n ? true : n.type) === "cancel" && (f = s.intl.string(s.t["ETE/oC"]), t = "secondary"), (0, r.jsx)(i.mzw, {
    "data-migration-pending": true,
    direction: a.Z.Direction.HORIZONTAL,
    children: (0, r.jsxs)(i.ButtonGroup, {
      fullWidth: x && b,
      children: [x && (0, r.jsx)(i.Button, {
        onClick: p,
        variant: "secondary",
        disabled: c,
        text: s.intl.string(s.t["13/7kX"])
      }), b && (0, r.jsx)(i.Button, {
        onClick: () => {
          null != n && u(n)
        },
        variant: t,
        disabled: c || d,
        buttonRef: _,
        text: f
      })]
    })
  })
}