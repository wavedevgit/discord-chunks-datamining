/** Chunk was on 40394 **/
/** chunk id: 24661, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk931991 = require("./931991.js"),
  Chunk849736 = require("./849736.js"),
  Chunk698441 = require("./698441.js"),
  Chunk496092 = require("./496092.js"),
  Chunk988794 = require("./988794.js"),
  Chunk985018 = require("./985018.jsx");

function A(n, t, A) {
  let {
    canManageGuildEvent: b
  } = (0, a.nr)(null != A ? A : t), g = (0, l.bG)([c.Ay], () => c.Ay.isActive(n)), h = (0, l.bG)([c.Ay], () => c.Ay.getGuildScheduledEvent(n), [n]), j = b(h);
  if (null == n || !j || !g || (null == h ? true : h.entity_type) === d.Ps.EXTERNAL) return null;
  let v = () => {
    (null == A ? true : A.isGuildStageVoice()) ? (0, s.OE)(A) : null != n && o.A.endEvent(n, t.id), (0, r.s7G)()
  };
  return (0, i.jsx)(r.Drp, {
    id: u.intl.string(u.t.qaYzPA),
    label: u.intl.string(u.t.qaYzPA),
    action: function() {
      (0, r.mMO)(async () => {
        let {
          Modal: n
        } = await Promise.resolve().then(e.bind(e, 158954));
        return t => {
          let {
            onClose: e,
            transitionState: l
          } = t;
          return (0, i.jsx)(n, {
            transitionState: l,
            title: u.intl.string(u.t.qaYzPA),
            subtitle: u.intl.string(u.t.bnDQ7E),
            onClose: e,
            actions: [{
              onClick: e,
              variant: "secondary",
              text: u.intl.string(u.t["ETE/oC"])
            }, {
              onClick: v,
              variant: "critical-primary",
              text: u.intl.string(u.t.mjB9pd)
            }]
          })
        }
      })
    },
    color: "danger"
  })
}