/** Chunk was on 1636 **/
/** chunk id: 420975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk969632 = require("./969632.js"),
  Chunk649963 = require("./649963.js"),
  Chunk406704 = require("./406704.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p(e, t) {
  let n = (0, s.Id)(t);
  return !(0, i.bG)([d.A], () => d.A.can(u.xBc.MANAGE_MESSAGES, t) && n, [t, n]) || null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, o.Gh)(e) ? null : (0, r.jsx)(l.Drp, {
    id: "remove-reactions",
    label: g.intl.string(g.t.ZbtGBm),
    leadingAccessory: {
      type: "icon",
      icon: l.tjR
    },
    action: function(n) {
      n.shiftKey ? (0, c.Go)(t.id, e.id) : a.A.show({
        title: g.intl.string(g.t.iz3vYX),
        body: g.intl.string(g.t.VpjOCo),
        confirmText: g.intl.string(g.t.p89ACt),
        confirmVariant: "critical-primary",
        cancelText: g.intl.string(g.t.gm1Vej),
        onConfirm: () => {
          (0, c.Go)(t.id, e.id)
        }
      })
    },
    color: "danger"
  })
}