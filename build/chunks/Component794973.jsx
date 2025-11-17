/** Chunk was on 56826 **/
/** chunk id: 794973, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk489618 = require("./489618.js"),
  Chunk592125 = require("./592125.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, n) {
  let {
    rearrangeContextMenu: t
  } = a.Z.useExperiment({
    location: "useCloseDMItem"
  }), d = s.Z.getChannel(e);
  return null == d || d.isMultiUserDM() ? null : (0, i.jsx)(r.sNh, {
    id: "close-dm",
    label: o.intl.string(t ? o.t.oI64T4 : o.t.jsvgc3),
    subtext: t ? o.intl.string(o.t.JENR6J) : true,
    action: () => l.Z.closePrivateChannel(e, n)
  })
}