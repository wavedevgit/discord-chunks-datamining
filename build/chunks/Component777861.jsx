/** Chunk was on web.js **/
/** chunk id: 777861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => o,
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  return null == e || null == e.end_time ? null : a.intl.formatToPlainString(a.t.j7h4AJ, {
    endTime: new Date(e.end_time).toLocaleString(a.intl.currentLocale, {
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    })
  })
}

function s(e) {
  let {
    muteConfig: t,
    className: n
  } = e, a = o(t);
  return null != a ? (0, r.jsx)(i.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: n,
    children: a
  }) : null
}