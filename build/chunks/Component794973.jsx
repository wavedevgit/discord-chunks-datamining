/** Chunk was on 56826 **/
/** chunk id: 794973, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk592125 = require("./592125.js"),
  Chunk388032 = require("./388032.jsx");

function s(e, t) {
  let n = a.Z.getChannel(e);
  return null == n || n.isMultiUserDM() ? null : (0, i.jsx)(r.sNh, {
    id: "close-dm",
    label: o.intl.string(o.t.jsvgc3),
    action: () => l.Z.closePrivateChannel(e, t)
  })
}