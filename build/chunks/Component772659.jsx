/** Chunk was on 97492 **/
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
    error: f,
    loaded: p,
    message: h
  } = (0, s.I)(t);
  if (null == h && (p || f)) return null;
  let b = () => {
    null == c || c(), i.A.closePrivateChannel(t.id)
  };
  return (0, r.jsx)(l.Button, {
    variant: "critical-primary",
    size: "sm",
    disabled: null == h,
    onClick: e => {
      e.stopPropagation(), null == n || n(), null != h && (0, a.b8)(h, b)
    },
    onMouseEnter: u,
    onMouseLeave: d,
    text: o.intl.string(o.t["+78Pfm"])
  })
}