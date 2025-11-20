/** Chunk was on 97418 **/
/** chunk id: 777861, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  U: () => r,
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function r(e) {
  return null == e || null == e.end_time ? null : l.intl.formatToPlainString(l.t.j7h4AJ, {
    endTime: new Date(e.end_time).toLocaleString(l.intl.currentLocale, {
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    })
  })
}

function u(e) {
  let {
    muteConfig: n,
    className: t
  } = e, l = r(n);
  return null != l ? (0, i.jsx)(a.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: t,
    children: l
  }) : null
}