/** Chunk was on 54160 **/
/** chunk id: 621866, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./801541.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk889137 = require("./889137.js"),
  Chunk963334 = require("./963334.js"),
  Chunk871210 = require("./871210.js"),
  Chunk565478 = require("./565478.js"),
  Chunk885168 = require("./885168.jsx");

function c(e) {
  let {
    username: t,
    oneClickFlow: r = false
  } = e, c = (0, o.W)((0, s.h_)(t), true, false, r);
  if (null == c) return null;
  let u = (0, i.YW)(c.type).with(a.q.RATE_LIMIT, () => "info").with(a.q.ERROR, () => "error").with(a.q.AVAILABLE, () => "success").with(a.q.INTERNAL_ERROR, () => null).exhaustive();
  return null == u ? null : (0, n.jsx)(l.A, {
    type: u,
    children: c.message
  })
}