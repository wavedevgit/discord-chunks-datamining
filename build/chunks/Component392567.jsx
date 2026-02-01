/** Chunk was on 92617 **/
/** chunk id: 392567, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o,
  M: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx");

function l(e) {
  return null == e || null == e.end_time ? null : a.intl.formatToPlainString(a.t.j7h4AJ, {
    endTime: new Date(e.end_time).toLocaleString(a.intl.currentLocale, {
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    })
  })
}

function o(e) {
  let {
    muteConfig: t,
    className: n
  } = e, a = l(t);
  return null != a ? (0, r.jsx)(i.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: n,
    children: a
  }) : null
}