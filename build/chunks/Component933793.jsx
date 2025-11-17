/** Chunk was on 89250 **/
/** chunk id: 933793, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => f
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

function f(t) {
  let n = (0, a.e7)([u.Z], () => u.Z.getChannel(t.parent_id)),
    e = (0, d.Xb)(t),
    f = (0, s.kF)(t);
  return (null == n ? true : n.isForumLikeChannel()) && e ? t.hasFlag(c.zZ.PINNED) ? (0, i.jsx)(l.sNh, {
    id: "unpin-thread",
    label: h.intl.string(h.t.trD8ao),
    action: () => o.Z.unpin(t)
  }) : (0, i.jsx)(l.sNh, {
    id: "pin-thread",
    label: h.intl.string(h.t.EnaWhu),
    action: function() {
      null != f ? r.Z.show({
        title: h.intl.string(h.t.IMbjxo),
        body: h.intl.string(h.t["mi5+Vl"]),
        onConfirm: async () => {
          await o.Z.unpin(f), o.Z.pin(t)
        }
      }) : o.Z.pin(t)
    }
  }) : null
}