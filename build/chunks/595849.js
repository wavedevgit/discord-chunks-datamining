/** Chunk was on 94503 **/
/** chunk id: 595849, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  RP: () => I,
  S2: () => T,
  _G: () => h,
  lp: () => g,
  yO: () => A
}), require("./896048.js"), require("./65821.js"), require("./321073.js");
var Chunk136722 = require("./136722.js"),
  Chunk417597 = require("./417597.js"),
  Chunk260509 = require("./260509.js"),
  Chunk34457 = require("./34457.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk488926 = require("./488926.js"),
  Chunk652215 = require("./652215.js"),
  Chunk124759 = require("./124759.js");
let g = Object.keys(Chunk652215.xBc),
  A = Array.from(new Set([...Chunk124759.dR, ...Chunk652215.nfo, Chunk652215.xBc.ADMINISTRATOR, Chunk652215.xBc.KICK_MEMBERS, Chunk652215.xBc.BAN_MEMBERS, Chunk652215.xBc.MANAGE_GUILD, Chunk652215.xBc.MANAGE_CHANNELS, Chunk652215.xBc.MANAGE_ROLES, Chunk652215.xBc.MANAGE_MESSAGES, Chunk652215.xBc.MANAGE_THREADS, Chunk652215.xBc.MANAGE_GUILD_EXPRESSIONS, Chunk652215.xBc.CREATE_GUILD_EXPRESSIONS, Chunk652215.xBc.MANAGE_EVENTS, Chunk652215.xBc.CREATE_EVENTS, Chunk652215.xBc.MODERATE_MEMBERS, Chunk652215.xBc.MENTION_EVERYONE, Chunk652215.xBc.MANAGE_WEBHOOKS])).map(e => {
    let t = g.find(t => d.xBc[t] === e);
    if (null == t) throw Error("Permission ".concat(e, " not found in Permissions"));
    return t
  }),
  T = new Set(Chunk652215.nfo);

function h(e, t) {
  return e === t
}

function I(e, t, n) {
  let _ = (0, r.bG)([u.A], () => u.A.getGuild(t), [t]);
  return (0, r.bG)([s.Ay, c.default, o.A], () => {
    let r = {},
      u = s.Ay.getMember(t, e),
      g = c.default.getUser(e);
    if (null == _ || null == u || null == g) return r;
    let A = o.A.getEveryoneRole(_),
      T = E.cc({
        user: g,
        context: _
      });
    for (let e of n) {
      let t = d.xBc[e];
      if (l.zy(T, t)) {
        for (let n of (r[e] = [], u.roles)) {
          let l = o.A.getRole(_.id, n);
          null != l && ((0, i._m)(l, d.xBc.ADMINISTRATOR) || (0, i.sx)(l, t)) && r[e].push(l.id)
        }((0, i._m)(A, d.xBc.ADMINISTRATOR) || (0, i.sx)(A, t)) && r[e].push(A.id), (0, a.bM)(_, g) && r[e].push(g.id)
      }
    }
    return r
  }, [_, t, n, e])
}