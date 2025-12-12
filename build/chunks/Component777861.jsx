/** Chunk was on 98414 **/
/** chunk id: 777861, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  U: () => o,
  Z: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  return null == e || null == e.end_time ? null : l.intl.formatToPlainString(l.t.j7h4AJ, {
    endTime: new Date(e.end_time).toLocaleString(l.intl.currentLocale, {
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    })
  })
}

function a(e) {
  let {
    muteConfig: n,
    className: t
  } = e, l = o(n);
  return null != l ? (0, r.jsx)(i.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: t,
    children: l
  }) : null
}