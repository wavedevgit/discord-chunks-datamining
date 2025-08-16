/** Chunk was on 36499 **/
/** chunk id: 525541, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk493683 = require("./493683.js"),
  Chunk726521 = require("./726521.js"),
  Chunk213010 = require("./213010.js"),
  Chunk718538 = require("./718538.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    otherUserId: t,
    channel: n,
    buttonSize: u = i.Ph.TINY,
    className: d,
    buttonText: p,
    navigateAwayOnReportSuccess: h = true,
    onReportClick: f,
    onReportSubmit: m,
    onMouseEnter: g,
    onMouseLeave: b
  } = e, y = (0, o.Q)(t), _ = (0, s.V)(n.id, t);
  if (!y || null == _) return null;
  let C = () => {
    null == m || m(), l.Z.closePrivateChannel(n.id, h)
  };
  return (0, r.jsx)(i.zx, {
    className: d,
    size: u,
    color: i.zx.Colors.RED,
    disabled: null == _,
    onClick: () => {
      null == f || f(), (0, a.WL)(_, C)
    },
    onMouseEnter: g,
    onMouseLeave: b,
    children: null != p ? p : c.intl.string(c.t.HHZmDg)
  })
}