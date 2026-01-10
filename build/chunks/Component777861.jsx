/** Chunk was on 91736 **/
/** chunk id: 777861, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  U: () => a,
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function a(t) {
  return null == t || null == t.end_time ? null : r.intl.formatToPlainString(r.t.j7h4AJ, {
    endTime: new Date(t.end_time).toLocaleString(r.intl.currentLocale, {
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    })
  })
}

function s(t) {
  let {
    muteConfig: e,
    className: n
  } = t, r = a(e);
  return null != r ? (0, i.jsx)(l.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: n,
    children: r
  }) : null
}