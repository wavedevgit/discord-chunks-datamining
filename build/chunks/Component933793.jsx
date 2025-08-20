/** Chunk was on 99534 **/
/** chunk id: 933793, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  Z: () => Z
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

function Z(t) {
  let n = (0, l.e7)([u.Z], () => u.Z.getChannel(t.parent_id)),
    i = (0, s.Xb)(t),
    Z = (0, d.kF)(t);
  return (null == n ? true : n.isForumLikeChannel()) && i ? t.hasFlag(c.zZ.PINNED) ? (0, e.jsx)(r.sNh, {
    id: "unpin-thread",
    label: h.intl.string(h.t.trD8am),
    action: () => o.Z.unpin(t)
  }) : (0, e.jsx)(r.sNh, {
    id: "pin-thread",
    label: h.intl.string(h.t.EnaWho),
    action: function() {
      null != Z ? a.Z.show({
        title: h.intl.string(h.t.IMbjxs),
        body: h.intl.string(h.t["mi5+Vl"]),
        onConfirm: async () => {
          await o.Z.unpin(Z), o.Z.pin(t)
        }
      }) : o.Z.pin(t)
    }
  }) : null
}