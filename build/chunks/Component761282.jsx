/** Chunk was on web.js **/
/** chunk id: 761282, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JE: () => u,
  ct: () => c,
  dc: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk261600 = require("./261600.jsx"),
  Chunk157925 = require("./157925.js"),
  Chunk544284 = require("./544284.js");
let s = {
  [Chunk157925.gD]: new Chunk261600.U
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
      className: o.section,
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