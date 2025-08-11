/** Chunk was on web.js **/
/** chunk id: 86203, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
    error: f,
    loaded: _,
    message: p
  } = (0, s.a)(t);
  if (null == p && (_ || f)) return null;
  let h = () => {
      null == c || c(), o.Z.closePrivateChannel(t.id)
    },
    m = e => {
      e.stopPropagation(), null == n || n(), null != p && (0, a.WL)(p, h)
    };
  return (0, r.jsx)(i.zxk, {
    variant: "critical-primary",
    size: "sm",
    disabled: null == p,
    onClick: m,
    onMouseEnter: u,
    onMouseLeave: d,
    text: l.intl.string(l.t["+78Pfn"])
  })
}