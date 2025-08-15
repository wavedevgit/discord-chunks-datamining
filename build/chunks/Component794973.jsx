/** Chunk was on 56826 **/
/** chunk id: 794973, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk489618 = require("./489618.js"),
  Chunk592125 = require("./592125.js"),
  Chunk388032 = require("./388032.jsx");

function u(t, n) {
  let {
    rearrangeContextMenu: e
  } = s.Z.useExperiment({
    location: "useCloseDMItem"
  }), u = a.Z.getChannel(t);
  return null == u || u.isMultiUserDM() ? null : (0, i.jsx)(r.sNh, {
    id: "close-dm",
    label: d.intl.string(e ? d.t.oI64T0 : d.t.jsvgc3),
    subtext: e ? d.intl.string(d.t.JENR6O) : true,
    action: () => l.Z.closePrivateChannel(t, n)
  })
}