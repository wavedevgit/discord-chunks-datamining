/** Chunk was on 37220 **/
/** chunk id: 385302, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk79390 = require("./79390.js"),
  Chunk222677 = require("./222677.js"),
  Chunk665906 = require("./665906.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g(e, t) {
  let n = (0, c.$R)(t);
  return !(0, i.e7)([u.Z], () => u.Z.can(d.Plq.MANAGE_MESSAGES, t) && n, [t, n]) || null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, o.eQ)(e) ? null : (0, r.jsx)(l.sNh, {
    id: "remove-reactions",
    label: f.intl.string(f.t.ZbtGBg),
    action: function(n) {
      n.shiftKey ? (0, s.wX)(t.id, e.id) : a.Z.show({
        title: f.intl.string(f.t.iz3vYW),
        body: f.intl.string(f.t.VpjOCg),
        confirmText: f.intl.string(f.t.p89ACg),
        confirmVariant: "critical-primary",
        cancelText: f.intl.string(f.t.gm1Ven),
        onConfirm: () => {
          (0, s.wX)(t.id, e.id)
        }
      })
    },
    color: "danger"
  })
}