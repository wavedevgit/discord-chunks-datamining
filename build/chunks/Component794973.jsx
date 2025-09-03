/** Chunk was on 56826 **/
/** chunk id: 794973, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk489618 = require("./489618.js"),
  Chunk592125 = require("./592125.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t) {
  let {
    rearrangeContextMenu: n
  } = a.Z.useExperiment({
    location: "useCloseDMItem"
  }), c = o.Z.getChannel(e);
  return null == c || c.isMultiUserDM() ? null : (0, r.jsx)(i.sNh, {
    id: "close-dm",
    label: s.intl.string(n ? s.t.oI64T0 : s.t.jsvgc3),
    subtext: n ? s.intl.string(s.t.JENR6O) : true,
    action: () => l.Z.closePrivateChannel(e, t)
  })
}