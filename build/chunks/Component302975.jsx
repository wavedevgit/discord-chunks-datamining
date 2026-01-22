/** Chunk was on 97492 **/
/** chunk id: 302975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk928658 = require("./928658.js"),
  Chunk623075 = require("./623075.js"),
  Chunk977347 = require("./977347.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    otherUserId: t,
    channel: n,
    buttonText: u,
    buttonSize: d = "sm",
    navigateAwayOnReportSuccess: f = true,
    onReportClick: p,
    onReportSubmit: h,
    onMouseEnter: b,
    onMouseLeave: g
  } = e, m = (0, s.V)(t), A = (0, o.D)(n.id, t);
  if (!m || null == A) return null;
  let y = () => {
    null == h || h(), i.A.closePrivateChannel(n.id, f)
  };
  return (0, r.jsx)(l.Button, {
    size: d,
    variant: "critical-primary",
    disabled: null == A,
    onClick: () => {
      null == p || p(), (0, a.b8)(A, y)
    },
    onMouseEnter: b,
    onMouseLeave: g,
    text: null != u ? u : c.intl.string(c.t.HHZmDn)
  })
}