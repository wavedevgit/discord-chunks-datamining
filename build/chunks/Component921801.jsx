/** Chunk was on web.js **/
/** chunk id: 921801, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk526665 = require("./526665.js"),
  Chunk991346 = require("./991346.js");

function o(e) {
  var t;
  let {
    setting: n,
    children: r
  } = e, i = (0, a.Pt)(), o = (0, a.Gj)(n), s = i[n];
  return null != s.predicate && (null == (t = s.predicate) ? true : t.call(s)) !== true || o.size > 0 && !o.has(n) ? null : r
}

function s(e) {
  let {
    setting: t,
    children: n
  } = e;
  return (0, i.gN)("AccountProfileCardSetting") ? n : (0, r.jsx)(o, {
    setting: t,
    children: n
  })
}