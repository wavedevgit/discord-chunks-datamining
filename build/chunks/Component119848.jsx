/** Chunk was on 85342 **/
/** chunk id: 119848, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./314940.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk278074 = require("./278074.js"),
  Chunk219496 = require("./219496.js"),
  Chunk346585 = require("./346585.js"),
  Chunk363577 = require("./363577.js"),
  Chunk81259 = require("./81259.jsx");

function c(e) {
  let {
    username: t,
    oneClickFlow: n = false
  } = e, c = (0, s.M)((0, o.R_)(t), true, false, n);
  if (null == c) return null;
  let u = (0, i.EQ)(c.type).with(a.K.RATE_LIMIT, () => "info").with(a.K.ERROR, () => "error").with(a.K.AVAILABLE, () => "success").with(a.K.INTERNAL_ERROR, () => null).exhaustive();
  return null == u ? null : (0, r.jsx)(l.Z, {
    type: u,
    children: c.message
  })
}