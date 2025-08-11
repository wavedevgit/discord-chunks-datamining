/** Chunk was on web.js **/
/** chunk id: 813370, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u,
  g: () => c
}), require("./997841.js");
var Chunk73800 = require("./73800.js"),
  Chunk783097 = require("./783097.js"),
  Chunk630388 = require("./630388.js"),
  Chunk28881 = require("./28881.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  var t;
  if (!(0, i.BQ)(e)) returnfalse;
  let n = null != (t = e.flags) ? t : 0,
    r = (0, o.yE)(n, s.udG.EMBEDDED),
    a = (0, o.yE)(n, s.udG.CONTEXTLESS_ACTIVITY);
  return r && a
}

function c(e) {
  return !!l(e) && (0, a.QK)("canLaunchFrame").enabled
}

function u(e) {
  let {
    enabled: t
  } = (0, a.u$)("canLaunchFrame");
  return r.useMemo(() => null != e && l(e) && t, [e, t])
}