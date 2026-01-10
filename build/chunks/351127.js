/** Chunk was on 69937 **/
/** chunk id: 351127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B2: () => I,
  Ov: () => g,
  Qn: () => f,
  _o: () => T,
  pd: () => A
}), require("./388685.js"), require("./415506.js"), require("./539854.js");
var Chunk149765 = require("./149765.js"),
  Chunk399606 = require("./399606.js"),
  Chunk601964 = require("./601964.js"),
  Chunk345162 = require("./345162.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk700785 = require("./700785.js"),
  Chunk981631 = require("./981631.js"),
  Chunk135899 = require("./135899.js");
let A = Object.keys(Chunk981631.Plq),
  f = Array.from(new Set([...Chunk135899.$X, ...Chunk981631.yYS, Chunk981631.Plq.ADMINISTRATOR, Chunk981631.Plq.KICK_MEMBERS, Chunk981631.Plq.BAN_MEMBERS, Chunk981631.Plq.MANAGE_GUILD, Chunk981631.Plq.MANAGE_CHANNELS, Chunk981631.Plq.MANAGE_ROLES, Chunk981631.Plq.MANAGE_MESSAGES, Chunk981631.Plq.MANAGE_THREADS, Chunk981631.Plq.MANAGE_GUILD_EXPRESSIONS, Chunk981631.Plq.CREATE_GUILD_EXPRESSIONS, Chunk981631.Plq.MANAGE_EVENTS, Chunk981631.Plq.CREATE_EVENTS, Chunk981631.Plq.MODERATE_MEMBERS, Chunk981631.Plq.MENTION_EVERYONE, Chunk981631.Plq.MANAGE_WEBHOOKS])).map(e => {
    let t = A.find(t => E.Plq[t] === e);
    if (null == t) throw Error("Permission ".concat(e, " not found in Permissions"));
    return t
  }),
  T = new Set(Chunk981631.yYS);

function g(e, t) {
  return e === t
}

function I(e, t, n) {
  let _ = (0, l.e7)([c.Z], () => c.Z.getGuild(t), [t]);
  return (0, l.e7)([s.ZP, u.default, o.Z], () => {
    let l = {},
      c = s.ZP.getMember(t, e),
      A = u.default.getUser(e);
    if (null == _ || null == c || null == A) return l;
    let f = o.Z.getEveryoneRole(_),
      T = d.uB({
        user: A,
        context: _
      });
    for (let e of n) {
      let t = E.Plq[e];
      if (r.e$(T, t)) {
        for (let n of (l[e] = [], c.roles)) {
          let r = o.Z.getRole(_.id, n);
          null != r && ((0, a.Fs)(r, E.Plq.ADMINISTRATOR) || (0, a._N)(r, t)) && l[e].push(r.id)
        }((0, a.Fs)(f, E.Plq.ADMINISTRATOR) || (0, a._N)(f, t)) && l[e].push(f.id), (0, i.eM)(_, A) && l[e].push(A.id)
      }
    }
    return l
  }, [_, t, n, e])
}