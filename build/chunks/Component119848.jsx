/** Chunk was on 85342 **/
/** chunk id: 119848, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./314940.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk278074 = require("./278074.js"),
  Chunk219496 = require("./219496.js"),
  Chunk346585 = require("./346585.js"),
  Chunk363577 = require("./363577.js"),
  Chunk81259 = require("./81259.jsx");

function c(e) {
  let {
    username: t,
    oneClickFlow: r = false
  } = e, c = (0, s.M)((0, a.R_)(t), true, false, r);
  if (null == c) return null;
  let u = (0, i.EQ)(c.type).with(o.K.RATE_LIMIT, () => "info").with(o.K.ERROR, () => "error").with(o.K.AVAILABLE, () => "success").with(o.K.INTERNAL_ERROR, () => null).exhaustive();
  return null == u ? null : (0, n.jsx)(l.Z, {
    type: u,
    children: c.message
  })
}