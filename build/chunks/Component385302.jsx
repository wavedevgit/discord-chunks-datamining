/** Chunk was on web.js **/
/** chunk id: 385302, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk79390 = require("./79390.js"),
  Chunk222677 = require("./222677.js"),
  Chunk665906 = require("./665906.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function _(e, t) {
  let n = (0, c.$R)(t);

  function _(n) {
    n.shiftKey ? (0, l.wX)(t.id, e.id) : a.Z.show({
      title: f.intl.string(f.t.iz3vYW),
      body: f.intl.string(f.t.VpjOCg),
      confirmText: f.intl.string(f.t.p89ACg),
      confirmVariant: "critical-primary",
      cancelText: f.intl.string(f.t.gm1Ven),
      onConfirm: () => {
        (0, l.wX)(t.id, e.id)
      }
    })
  }
  return !(0, i.e7)([u.Z], () => u.Z.can(d.Plq.MANAGE_MESSAGES, t) && n, [t, n]) || null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, s.eQ)(e) ? null : (0, r.jsx)(o.sNh, {
    id: "remove-reactions",
    label: f.intl.string(f.t.ZbtGBg),
    action: _,
    color: "danger"
  })
}