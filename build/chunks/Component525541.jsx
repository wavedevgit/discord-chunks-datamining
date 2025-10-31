/** Chunk was on 88647 **/
/** chunk id: 525541, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk726521 = require("./726521.js"),
  Chunk213010 = require("./213010.js"),
  Chunk718538 = require("./718538.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    otherUserId: t,
    channel: n,
    buttonText: u,
    buttonSize: d = "sm",
    navigateAwayOnReportSuccess: p = true,
    onReportClick: f,
    onReportSubmit: h,
    onMouseEnter: m,
    onMouseLeave: g
  } = e, b = (0, o.Q)(t), _ = (0, s.V)(n.id, t);
  if (!b || null == _) return null;
  let y = () => {
    null == h || h(), l.Z.closePrivateChannel(n.id, p)
  };
  return (0, r.jsx)(i.Button, {
    size: d,
    variant: "critical-primary",
    disabled: null == _,
    onClick: () => {
      null == f || f(), (0, a.WL)(_, y)
    },
    onMouseEnter: m,
    onMouseLeave: g,
    text: null != u ? u : c.intl.string(c.t.HHZmDn)
  })
}