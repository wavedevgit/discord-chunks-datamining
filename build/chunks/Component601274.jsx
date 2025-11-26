/** Chunk was on 83331 **/
/** chunk id: 601274, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk703656 = require("./703656.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(n, t) {
  return (0, l.e7)([s.Z], () => s.Z.can(o.Plq.CONNECT, n), [n]) && n.isGuildVocal() ? (0, i.jsx)(r.sNh, {
    id: "open-chat",
    label: d.intl.string(d.t.ZXxLQg),
    action: () => {
      a.Z.updateChatOpen(n.id, true), (0, c.XU)(t.id, n.id)
    }
  }) : null
}