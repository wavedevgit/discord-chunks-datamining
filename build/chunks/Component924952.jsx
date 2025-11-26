/** Chunk was on 83331 **/
/** chunk id: 924952, original params: n,t,e (module,exports,require) **/
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

function Z(n, t, Z) {
  let {
    canManageGuildEvent: h
  } = (0, a.XJ)(null != Z ? Z : t), g = (0, l.e7)([s.ZP], () => s.ZP.isActive(n)), f = (0, l.e7)([s.ZP], () => s.ZP.getGuildScheduledEvent(n), [n]), v = h(f);
  if (null == n || !v || !g || (null == f ? true : f.entity_type) === d.WX.EXTERNAL) return null;
  let j = () => {
    (null == Z ? true : Z.isGuildStageVoice()) ? (0, c.NZ)(Z) : null != n && o.Z.endEvent(n, t.id), (0, r.pTH)()
  };
  return (0, i.jsx)(r.sNh, {
    id: u.intl.string(u.t.qaYzPA),
    label: u.intl.string(u.t.qaYzPA),
    action: function() {
      (0, r.ZDy)(async () => {
        let {
          Modal: n
        } = await Promise.resolve().then(e.bind(e, 793030));
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
              onClick: j,
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