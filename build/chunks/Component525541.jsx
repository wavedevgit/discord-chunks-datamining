/** Chunk was on 81985 **/
/** chunk id: 525541, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
    onMouseEnter: g,
    onMouseLeave: m
  } = e, b = (0, o.Q)(t), y = (0, s.V)(n.id, t);
  if (!b || null == y) return null;
  let v = () => {
    null == h || h(), l.Z.closePrivateChannel(n.id, p)
  };
  return (0, r.jsx)(i.Button, {
    size: d,
    variant: "critical-primary",
    disabled: null == y,
    onClick: () => {
      null == f || f(), (0, a.WL)(y, v)
    },
    onMouseEnter: g,
    onMouseLeave: m,
    text: null != u ? u : c.intl.string(c.t.HHZmDn)
  })
}