/** Chunk was on 37220 **/
/** chunk id: 385302, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  return !(0, i.e7)([u.Z], () => u.Z.can(d.Plq.MANAGE_MESSAGES, t) && n, [t, n]) || null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, a.eQ)(e) ? null : (0, r.jsx)(l.sNh, {
    id: "remove-reactions",
    label: f.intl.string(f.t.ZbtGBm),
    action: function(n) {
      n.shiftKey ? (0, s.wX)(t.id, e.id) : o.Z.show({
        title: f.intl.string(f.t.iz3vYX),
        body: f.intl.string(f.t.VpjOCo),
        confirmText: f.intl.string(f.t.p89ACt),
        confirmVariant: "critical-primary",
        cancelText: f.intl.string(f.t.gm1Vej),
        onConfirm: () => {
          (0, s.wX)(t.id, e.id)
        }
      })
    },
    color: "danger"
  })
}