/** Chunk was on 73755 **/
/** chunk id: 86203, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
    loaded: h,
    message: f
  } = (0, o.a)(t);
  if (null == f && (h || p)) return null;
  let m = () => {
    null == c || c(), l.Z.closePrivateChannel(t.id)
  };
  return (0, i.jsx)(r.Button, {
    variant: "critical-primary",
    size: "sm",
    disabled: null == f,
    onClick: e => {
      e.stopPropagation(), null == n || n(), null != f && (0, a.WL)(f, m)
    },
    onMouseEnter: u,
    onMouseLeave: d,
    text: s.intl.string(s.t["+78Pfm"])
  })
}