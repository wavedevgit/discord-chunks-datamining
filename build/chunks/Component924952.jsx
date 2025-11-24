/** Chunk was on 83331 **/
/** chunk id: 924952, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk357156 = require("./357156.js"),
  Chunk471253 = require("./471253.js"),
  Chunk924301 = require("./924301.js"),
  Chunk482241 = require("./482241.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx");

function Z(e, t, Z) {
  let {
    canManageGuildEvent: f
  } = (0, a.XJ)(null != Z ? Z : t), b = (0, r.e7)([c.ZP], () => c.ZP.isActive(e)), g = (0, r.e7)([c.ZP], () => c.ZP.getGuildScheduledEvent(e), [e]), h = f(g);
  if (null == e || !h || !b || (null == g ? true : g.entity_type) === u.WX.EXTERNAL) return null;
  let j = () => {
    (null == Z ? true : Z.isGuildStageVoice()) ? (0, o.NZ)(Z) : null != e && s.Z.endEvent(e, t.id), (0, l.pTH)()
  };
  return (0, i.jsx)(l.sNh, {
    id: d.intl.string(d.t.qaYzPA),
    label: d.intl.string(d.t.qaYzPA),
    action: function() {
      (0, l.ZDy)(async () => {
        let {
          Modal: e
        } = await Promise.resolve().then(n.bind(n, 793030));
        return t => {
          let {
            onClose: n,
            transitionState: r
          } = t;
          return (0, i.jsx)(e, {
            transitionState: r,
            title: d.intl.string(d.t.qaYzPA),
            subtitle: d.intl.string(d.t.bnDQ7E),
            onClose: n,
            actions: [{
              onClick: n,
              variant: "secondary",
              text: d.intl.string(d.t["ETE/oC"])
            }, {
              onClick: j,
              variant: "critical-primary",
              text: d.intl.string(d.t.mjB9pd)
            }]
          })
        }
      })
    },
    color: "danger"
  })
}