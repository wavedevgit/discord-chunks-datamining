/** Chunk was on web.js **/
/** chunk id: 195043, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => o
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
  } = e, i = (0, a.PH)(), s = (0, a.AC)(n), o = i[n];
  return null != o.predicate && (null == (t = o.predicate) ? true : t.call(o)) !== true || s.size > 0 && !s.has(n) ? null : r
}

function o(e) {
  let {
    setting: t,
    children: n
  } = e;
  return (0, i.dk)("AccountProfileCardSetting") ? n : (0, r.jsx)(s, {
    setting: t,
    children: n
  })
}