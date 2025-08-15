/** Chunk was on 96750 **/
/** chunk id: 697761, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk710845 = require("./710845.js"),
  Chunk620662 = require("./620662.js"),
  Chunk915863 = require("./915863.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    activity: t,
    user: n,
    look: c,
    color: u,
    onAction: d
  } = e;
  return (0, l.Z)(t, o.xjy.INSTANCE) ? (0, r.jsx)(a.Z, {
    look: c,
    color: u,
    onClick: () => {
      null == d || d(), new i.Z("UserActivityActions").log("notify", n.id, t)
    },
    fullWidth: true,
    children: s.intl.string(s.t.vwl1PD)
  }, "notify") : null
}