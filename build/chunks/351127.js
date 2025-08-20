/** Chunk was on 7318 **/
/** chunk id: 351127, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  B2: () => C,
  Ov: () => E,
  Qn: () => u,
  _o: () => d,
  pd: () => h
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
let h = Object.keys(Chunk981631.Plq),
  u = Array.from(new Set([...Chunk135899.$X, ...Chunk981631.yYS, Chunk981631.Plq.ADMINISTRATOR, Chunk981631.Plq.KICK_MEMBERS, Chunk981631.Plq.BAN_MEMBERS, Chunk981631.Plq.MANAGE_GUILD, Chunk981631.Plq.MANAGE_CHANNELS, Chunk981631.Plq.MANAGE_ROLES, Chunk981631.Plq.MANAGE_MESSAGES, Chunk981631.Plq.MANAGE_THREADS, Chunk981631.Plq.MANAGE_GUILD_EXPRESSIONS, Chunk981631.Plq.CREATE_GUILD_EXPRESSIONS, Chunk981631.Plq.MANAGE_EVENTS, Chunk981631.Plq.CREATE_EVENTS, Chunk981631.Plq.MODERATE_MEMBERS, Chunk981631.Plq.MENTION_EVERYONE, Chunk981631.Plq.MANAGE_WEBHOOKS])).map(A => {
    let e = h.find(e => f.Plq[e] === A);
    if (null == e) throw Error("Permission ".concat(A, " not found in Permissions"));
    return e
  }),
  d = new Set(Chunk981631.yYS);

function E(A, e) {
  return A === e
}

function C(A, e, t) {
  let v = (0, r.e7)([o.Z], () => o.Z.getGuild(e), [e]);
  return (0, r.e7)([s.ZP, g.default, a.Z], () => {
    let r = {},
      o = s.ZP.getMember(e, A),
      h = g.default.getUser(A);
    if (null == v || null == o || null == h) return r;
    let u = a.Z.getEveryoneRole(v),
      d = c.uB({
        user: h,
        context: v
      });
    for (let A of t) {
      let e = f.Plq[A];
      if (n.e$(d, e)) {
        for (let t of (r[A] = [], o.roles)) {
          let n = a.Z.getRole(v.id, t);
          null != n && ((0, i.Fs)(n, f.Plq.ADMINISTRATOR) || (0, i._N)(n, e)) && r[A].push(n.id)
        }((0, i.Fs)(u, f.Plq.ADMINISTRATOR) || (0, i._N)(u, e)) && r[A].push(u.id), (0, l.eM)(v, h) && r[A].push(h.id)
      }
    }
    return r
  }, [v, e, t, A])
}