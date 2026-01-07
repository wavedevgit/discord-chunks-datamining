/** Chunk was on web.js **/
/** chunk id: 813370, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d,
  g: () => u
}), require("./997841.js");
var Chunk473749 = require("./473749.js"),
  Chunk95015 = require("./95015.js"),
  Chunk783097 = require("./783097.js"),
  Chunk28881 = require("./28881.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  var t;
  if (!(0, a.BQ)(e)) returnfalse;
  let n = null != (t = e.flags) ? t : 0,
    r = (0, i.yE)(n, s.udG.EMBEDDED),
    o = (0, i.yE)(n, s.udG.CONTEXTLESS_ACTIVITY);
  return r && o
}

function c(e, t) {
  return null != e && !!l(e)
}

function u(e) {
  return c(e, (0, o.sd)("canLaunchFrame"))
}

function d(e) {
  let t = (0, o.WA)("canLaunchFrame");
  return r.useMemo(() => c(e, t), [e, t])
}