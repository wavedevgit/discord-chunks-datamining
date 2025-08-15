/** Chunk was on 78650 **/
/** chunk id: 933793, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  let t = (0, r.e7)([u.Z], () => u.Z.getChannel(e.parent_id)),
    n = (0, d.Xb)(e),
    h = (0, o.kF)(e);
  return (null == t ? true : t.isForumLikeChannel()) && n ? e.hasFlag(c.zZ.PINNED) ? (0, i.jsx)(l.sNh, {
    id: "unpin-thread",
    label: f.intl.string(f.t.trD8am),
    action: () => s.Z.unpin(e)
  }) : (0, i.jsx)(l.sNh, {
    id: "pin-thread",
    label: f.intl.string(f.t.EnaWho),
    action: function() {
      null != h ? a.Z.show({
        title: f.intl.string(f.t.IMbjxs),
        body: f.intl.string(f.t["mi5+Vl"]),
        onConfirm: async () => {
          await s.Z.unpin(h), s.Z.pin(e)
        }
      }) : s.Z.pin(e)
    }
  }) : null
}