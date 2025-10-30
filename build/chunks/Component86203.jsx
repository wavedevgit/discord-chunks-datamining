/** Chunk was on 13873 **/
/** chunk id: 86203, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk726521 = require("./726521.js"),
  Chunk868807 = require("./868807.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    channel: t,
    onReportClick: n,
    onReportSubmit: c,
    onMouseEnter: u,
    onMouseLeave: d
  } = e, {
    error: p,
    loaded: f,
    message: h
  } = (0, o.a)(t);
  if (null == h && (f || p)) return null;
  let m = () => {
    null == c || c(), l.Z.closePrivateChannel(t.id)
  };
  return (0, r.jsx)(i.Button, {
    variant: "critical-primary",
    size: "sm",
    disabled: null == h,
    onClick: e => {
      e.stopPropagation(), null == n || n(), null != h && (0, a.WL)(h, m)
    },
    onMouseEnter: u,
    onMouseLeave: d,
    text: s.intl.string(s.t["+78Pfm"])
  })
}