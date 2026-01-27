/** Chunk was on 96430 **/
/** chunk id: 392567, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => o,
  M: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx");

function l(t) {
  return null == t || null == t.end_time ? null : a.intl.formatToPlainString(a.t.j7h4AJ, {
    endTime: new Date(t.end_time).toLocaleString(a.intl.currentLocale, {
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    })
  })
}

function o(t) {
  let {
    muteConfig: e,
    className: n
  } = t, a = l(e);
  return null != a ? (0, r.jsx)(i.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: n,
    children: a
  }) : null
}