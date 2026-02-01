/** Chunk was on 61344 **/
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
    navigateAwayOnReportSuccess: h = true,
    onReportClick: p,
    onReportSubmit: f,
    onMouseEnter: m,
    onMouseLeave: g
  } = e, A = (0, s.V)(t), b = (0, o.D)(n.id, t);
  if (!A || null == b) return null;
  let _ = () => {
    null == f || f(), i.A.closePrivateChannel(n.id, h)
  };
  return (0, l.jsx)(r.Button, {
    size: d,
    variant: "critical-primary",
    disabled: null == b,
    onClick: () => {
      null == p || p(), (0, a.b8)(b, _)
    },
    onMouseEnter: m,
    onMouseLeave: g,
    text: null != u ? u : c.intl.string(c.t.HHZmDn)
  })
}