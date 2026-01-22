/** Chunk was on 1636 **/
/** chunk id: 420975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function g(e, t) {
  let n = (0, s.Id)(t);
  return !(0, l.bG)([d.A], () => d.A.can(u.xBc.MANAGE_MESSAGES, t) && n, [t, n]) || null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, a.Gh)(e) ? null : (0, r.jsx)(i.Drp, {
    id: "remove-reactions",
    label: f.intl.string(f.t.ZbtGBm),
    action: function(n) {
      n.shiftKey ? (0, c.Go)(t.id, e.id) : o.A.show({
        title: f.intl.string(f.t.iz3vYX),
        body: f.intl.string(f.t.VpjOCo),
        confirmText: f.intl.string(f.t.p89ACt),
        confirmVariant: "critical-primary",
        cancelText: f.intl.string(f.t.gm1Vej),
        onConfirm: () => {
          (0, c.Go)(t.id, e.id)
        }
      })
    },
    color: "danger"
  })
}