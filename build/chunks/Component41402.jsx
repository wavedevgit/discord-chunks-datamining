/** Chunk was on 78441 **/
/** chunk id: 41402, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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

function f(t) {
  let e = (0, r.bG)([u.A], () => u.A.getChannel(t.parent_id)),
    n = (0, d.H_)(t),
    f = (0, o.Eh)(t);
  return (null == e ? true : e.isForumLikeChannel()) && n ? t.hasFlag(c.lx.PINNED) ? (0, i.jsx)(l.Drp, {
    id: "unpin-thread",
    label: A.intl.string(A.t.trD8ao),
    action: () => s.A.unpin(t)
  }) : (0, i.jsx)(l.Drp, {
    id: "pin-thread",
    label: A.intl.string(A.t.EnaWhu),
    action: function() {
      null != f ? a.A.show({
        title: A.intl.string(A.t.IMbjxo),
        body: A.intl.string(A.t["mi5+Vl"]),
        onConfirm: async () => {
          await s.A.unpin(f), s.A.pin(t)
        }
      }) : s.A.pin(t)
    }
  }) : null
}