/** Chunk was on 15718 **/
/** chunk id: 351127, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B2: () => f,
  Ov: () => m,
  Qn: () => T,
  _o: () => I,
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
  T = Array.from(new Set([...Chunk135899.$X, ...Chunk981631.yYS, Chunk981631.Plq.ADMINISTRATOR, Chunk981631.Plq.KICK_MEMBERS, Chunk981631.Plq.BAN_MEMBERS, Chunk981631.Plq.MANAGE_GUILD, Chunk981631.Plq.MANAGE_CHANNELS, Chunk981631.Plq.MANAGE_ROLES, Chunk981631.Plq.MANAGE_MESSAGES, Chunk981631.Plq.MANAGE_THREADS, Chunk981631.Plq.MANAGE_GUILD_EXPRESSIONS, Chunk981631.Plq.CREATE_GUILD_EXPRESSIONS, Chunk981631.Plq.MANAGE_EVENTS, Chunk981631.Plq.CREATE_EVENTS, Chunk981631.Plq.MODERATE_MEMBERS, Chunk981631.Plq.MENTION_EVERYONE, Chunk981631.Plq.MANAGE_WEBHOOKS])).map(e => {
    let t = A.find(t => d.Plq[t] === e);
    if (null == t) throw Error("Permission ".concat(e, " not found in Permissions"));
    return t
  }),
  I = new Set(Chunk981631.yYS);

function m(e, t) {
  return e === t
}

function f(e, t, n) {
  let _ = (0, l.e7)([u.Z], () => u.Z.getGuild(t), [t]);
  return (0, l.e7)([s.ZP, c.default, o.Z], () => {
    let l = {},
      u = s.ZP.getMember(t, e),
      A = c.default.getUser(e);
    if (null == _ || null == u || null == A) return l;
    let T = o.Z.getEveryoneRole(_),
      I = E.uB({
        user: A,
        context: _
      });
    for (let e of n) {
      let t = d.Plq[e];
      if (r.e$(I, t)) {
        for (let n of (l[e] = [], u.roles)) {
          let r = o.Z.getRole(_.id, n);
          null != r && ((0, a.Fs)(r, d.Plq.ADMINISTRATOR) || (0, a._N)(r, t)) && l[e].push(r.id)
        }((0, a.Fs)(T, d.Plq.ADMINISTRATOR) || (0, a._N)(T, t)) && l[e].push(T.id), (0, i.eM)(_, A) && l[e].push(A.id)
      }
    }
    return l
  }, [_, t, n, e])
}