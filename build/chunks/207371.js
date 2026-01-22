/** Chunk was on web.js **/
/** chunk id: 207371, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => d,
  x: () => u
}), require("./938796.js");
var Chunk64700 = require("./64700.js"),
  Chunk665260 = require("./665260.js"),
  Chunk735991 = require("./735991.js"),
  Chunk216238 = require("./216238.js"),
  Chunk652215 = require("./652215.js");

function l(e) {
  var t;
  if (!(0, a.$B)(e)) returnfalse;
  let n = null != (t = e.flags) ? t : 0,
    r = (0, i.Lt)(n, o.gfo.EMBEDDED),
    s = (0, i.Lt)(n, o.gfo.CONTEXTLESS_ACTIVITY);
  return r && s
}

function c(e, t) {
  return null != e && !!l(e)
}

function u(e) {
  return c(e, (0, s.oj)("canLaunchFrame"))
}

function d(e) {
  let t = (0, s.$N)("canLaunchFrame");
  return r.useMemo(() => c(e, t), [e, t])
}