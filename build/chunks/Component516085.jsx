/** Chunk was on web.js **/
/** chunk id: 516085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fm: () => c,
  IS: () => u,
  Ij: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk875731 = require("./875731.jsx"),
  Chunk516607 = require("./516607.js"),
  Chunk270582 = require("./270582.js");
let s = {
  [Chunk516607.SS]: new Chunk875731.d
};

function l(e) {
  var t;
  let n = e.application_id;
  if (null == n) return;
  let r = s[n];
  if (null != r && (null == (t = r.shouldShow) ? true : t.call(r, e)) !== false) return r.createHeader(e)
}

function c(e) {
  var t;
  let n = e.application_id;
  if (null == n) return;
  let i = s[n];
  if ((null == i ? true : i.body) != null && (null == (t = i.shouldShow) ? true : t.call(i, e)) !== false) {
    let t = i.body;
    return (0, r.jsx)("section", {
      className: o.uW,
      children: (0, r.jsx)(t, {
        activity: e
      })
    }, "delegate-".concat(n))
  }
}

function u(e) {
  var t;
  let n = e.application_id;
  if (null == n) returntrue;
  let r = s[n];
  return null == r || (null == (t = r.shouldShow) ? true : t.call(r, e)) !== false
}