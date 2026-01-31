/** Chunk was on 17534 **/
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
    onReportSubmit: g,
    onMouseEnter: f,
    onMouseLeave: m
  } = e, b = (0, a.V)(t), A = (0, o.D)(n.id, t);
  if (!b || null == A) return null;
  let y = () => {
    null == g || g(), i.A.closePrivateChannel(n.id, h)
  };
  return (0, r.jsx)(l.Button, {
    size: d,
    variant: "critical-primary",
    disabled: null == A,
    onClick: () => {
      null == p || p(), (0, s.b8)(A, y)
    },
    onMouseEnter: f,
    onMouseLeave: m,
    text: null != u ? u : c.intl.string(c.t.HHZmDn)
  })
}