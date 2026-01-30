/** Chunk was on 78376 **/
/** chunk id: 195043, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk358776 = require("./358776.js"),
  Chunk360619 = require("./360619.js");

function s(e) {
  var t;
  let {
    setting: n,
    children: r
  } = e, i = (0, l.PH)(), s = (0, l.AC)(n), a = i[n];
  return null != a.predicate && (null == (t = a.predicate) ? true : t.call(a)) !== true || s.size > 0 && !s.has(n) ? null : r
}

function a(e) {
  let {
    setting: t,
    children: n
  } = e;
  return (0, i.dk)("AccountProfileCardSetting") ? n : (0, r.jsx)(s, {
    setting: t,
    children: n
  })
}