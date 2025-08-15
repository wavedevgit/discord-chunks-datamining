/** Chunk was on 86357 **/
/** chunk id: 933793, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk240872 = require("./240872.jsx"),
  Chunk456269 = require("./456269.js"),
  Chunk346479 = require("./346479.js"),
  Chunk665906 = require("./665906.js"),
  Chunk592125 = require("./592125.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  let t = (0, i.e7)([u.Z], () => u.Z.getChannel(e.parent_id)),
    n = (0, c.Xb)(e),
    h = (0, o.kF)(e);
  return (null == t ? true : t.isForumLikeChannel()) && n ? e.hasFlag(d.zZ.PINNED) ? (0, r.jsx)(l.sNh, {
    id: "unpin-thread",
    label: p.intl.string(p.t.trD8am),
    action: () => s.Z.unpin(e)
  }) : (0, r.jsx)(l.sNh, {
    id: "pin-thread",
    label: p.intl.string(p.t.EnaWho),
    action: function() {
      null != h ? a.Z.show({
        title: p.intl.string(p.t.IMbjxs),
        body: p.intl.string(p.t["mi5+Vl"]),
        onConfirm: async () => {
          await s.Z.unpin(h), s.Z.pin(e)
        }
      }) : s.Z.pin(e)
    }
  }) : null
}