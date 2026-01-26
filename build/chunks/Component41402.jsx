/** Chunk was on 88974 **/
/** chunk id: 41402, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk579872 = require("./579872.jsx"),
  Chunk435470 = require("./435470.js"),
  Chunk867455 = require("./867455.js"),
  Chunk406704 = require("./406704.js"),
  Chunk734057 = require("./734057.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx");

function A(t) {
  let n = (0, r.bG)([u.A], () => u.A.getChannel(t.parent_id)),
    i = (0, s.H_)(t),
    A = (0, d.Eh)(t);
  return (null == n ? true : n.isForumLikeChannel()) && i ? t.hasFlag(c.lx.PINNED) ? (0, e.jsx)(l.Drp, {
    id: "unpin-thread",
    label: h.intl.string(h.t.trD8ao),
    action: () => o.A.unpin(t)
  }) : (0, e.jsx)(l.Drp, {
    id: "pin-thread",
    label: h.intl.string(h.t.EnaWhu),
    action: function() {
      null != A ? a.A.show({
        title: h.intl.string(h.t.IMbjxo),
        body: h.intl.string(h.t["mi5+Vl"]),
        onConfirm: async () => {
          await o.A.unpin(A), o.A.pin(t)
        }
      }) : o.A.pin(t)
    }
  }) : null
}