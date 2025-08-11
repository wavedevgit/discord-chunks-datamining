/** Chunk was on 44799 **/
/** chunk id: 426771, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk973772 = require("./973772.js"),
  Chunk838968 = require("./838968.js"),
  Chunk857666 = require("./857666.js"),
  Chunk279475 = require("./279475.js"),
  Chunk535396 = require("./535396.js"),
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk475338 = require("./475338.js");

function x(e) {
  var t, n, x;
  let _, {
      guildId: v,
      group: b,
      powerups: j
    } = e,
    [h, E] = o.useState(false),
    C = (0, a.Gv)(v, j),
    I = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
    O = (0, u.Z)(b, v);
  if (true === O || j.length <= 0) return null;
  let y = C.some(e => e.type !== p.A3.INACTIVE),
    P = (0, d.d)(y),
    w = C.reduce((e, t) => {
      let {
        sourceEntitlement: n
      } = t, r = null == n ? true : n.ends_at;
      return null == r ? e : null == e || r < e ? r : e
    }, true);
  true !== w ? _ = {
    type: "expiring",
    expiringAt: w
  } : y && (_ = {
    type: "active",
    statusText: m.intl.string(f.default.FFLkm5)
  });
  let N = C.reduce((e, t) => {
      let {
        type: n,
        powerup: r
      } = t;
      return n === p.A3.POWERUP_ACTIVATED ? e + r.cost : e
    }, 0),
    Z = C.reduce((e, t) => {
      var n, r;
      let {
        powerup: o
      } = t;
      return e < (null != (n = null == o ? true : o.cost) ? n : 0) ? e : null != (r = null == o ? true : o.cost) ? r : 0
    }, null != (x = null == (n = C[0]) || null == (t = n.powerup) ? true : t.cost) ? x : 0),
    S = C.reduce((e, t) => {
      var n;
      let {
        powerup: r
      } = t;
      return e + (null != (n = null == r ? true : r.cost) ? n : 0)
    }, 0),
    T = y ? N : Z,
    A = !y && S > T ? "+" : true,
    R = !I && h ? O.image.animatedUrl : O.image.staticUrl,
    k = null != O.viewCta && "" !== O.viewCta ? O.viewCta : m.intl.string(f.default["27GkOj"]);
  return <c.aB label={O.title} isActive={y} badge={O.badge} onClick={() => O.openModal(j)} onMouseOver={() => E(true)} onMouseLeave={() => E(false)}>{<img alt={""} src={R} className={g.image} />}{<c.Q9 title={O.title} textColor={P} footer={(0, r.jsx)(c.uf, {
        status: _,
        cost: T,
        costDecorator: A
      })}><l.Text className={g.description} color={P} variant={"text-sm/medium"}>{O.description}</l.Text></c.Q9>}{<c.N4><l.zxk text={k} fullWidth={true} /></c.N4>}</c.aB>
}