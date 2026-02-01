/** Chunk was on 61344 **/
/** chunk id: 772659, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk928658 = require("./928658.js"),
  Chunk978914 = require("./978914.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  let {
    channel: t,
    onReportClick: n,
    onReportSubmit: c,
    onMouseEnter: u,
    onMouseLeave: d
  } = e, {
    error: h,
    loaded: p,
    message: f
  } = (0, s.I)(t);
  if (null == f && (p || h)) return null;
  let m = () => {
    null == c || c(), i.A.closePrivateChannel(t.id)
  };
  return (0, l.jsx)(r.Button, {
    variant: "critical-primary",
    size: "sm",
    disabled: null == f,
    onClick: e => {
      e.stopPropagation(), null == n || n(), null != f && (0, a.b8)(f, m)
    },
    onMouseEnter: u,
    onMouseLeave: d,
    text: o.intl.string(o.t.HHZmDn)
  })
}