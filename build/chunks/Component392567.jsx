/** Chunk was on 89209 **/
/** chunk id: 392567, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a,
  M: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  return null == e || null == e.end_time ? null : i.intl.formatToPlainString(i.t.j7h4AJ, {
    endTime: new Date(e.end_time).toLocaleString(i.intl.currentLocale, {
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    })
  })
}

function a(e) {
  let {
    muteConfig: t,
    className: n
  } = e, i = u(t);
  return null != i ? (0, r.jsx)(l.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: n,
    children: i
  }) : null
}