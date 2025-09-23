/** Chunk was on 46154 **/
/** chunk id: 933793, original params: t,n,e (module,exports,require) **/
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

function h(t) {
  let n = (0, a.e7)([u.Z], () => u.Z.getChannel(t.parent_id)),
    e = (0, d.Xb)(t),
    h = (0, o.kF)(t);
  return (null == n ? true : n.isForumLikeChannel()) && e ? t.hasFlag(c.zZ.PINNED) ? (0, i.jsx)(l.sNh, {
    id: "unpin-thread",
    label: f.intl.string(f.t.trD8am),
    action: () => s.Z.unpin(t)
  }) : (0, i.jsx)(l.sNh, {
    id: "pin-thread",
    label: f.intl.string(f.t.EnaWho),
    action: function() {
      null != h ? r.Z.show({
        title: f.intl.string(f.t.IMbjxs),
        body: f.intl.string(f.t["mi5+Vl"]),
        onConfirm: async () => {
          await s.Z.unpin(h), s.Z.pin(t)
        }
      }) : s.Z.pin(t)
    }
  }) : null
}