/** Chunk was on 92091 **/
/** chunk id: 933793, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  Z: () => Z
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
    i = (0, o.Xb)(t),
    Z = (0, s.kF)(t);
  return (null == n ? true : n.isForumLikeChannel()) && i ? t.hasFlag(c.zZ.PINNED) ? (0, e.jsx)(r.sNh, {
    id: "unpin-thread",
    label: h.intl.string(h.t.trD8ao),
    action: () => d.Z.unpin(t)
  }) : (0, e.jsx)(r.sNh, {
    id: "pin-thread",
    label: h.intl.string(h.t.EnaWhu),
    action: function() {
      null != Z ? a.Z.show({
        title: h.intl.string(h.t.IMbjxo),
        body: h.intl.string(h.t["mi5+Vl"]),
        onConfirm: async () => {
          await d.Z.unpin(Z), d.Z.pin(t)
        }
      }) : d.Z.pin(t)
    }
  }) : null
}