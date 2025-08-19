/** Chunk was on 84533 **/
/** chunk id: 955839, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  q: () => o
}), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  n = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk232567 = require("./232567.js"),
  Chunk281494 = require("./281494.js"),
  Chunk276444 = require("./276444.js");
let o = e => {
  let {
    searchQuery: t,
    selectedUsers: r,
    limit: s
  } = e, o = (0, i.e7)([d.Z], () => d.Z.getRecipientStatus()), u = (0, i.e7)([d.Z], () => d.Z.getReferralsRemaining()), [m, h] = a.useState(0), [f, x] = a.useState([]), [g, p] = a.useState(false), [j, v] = a.useState(false), [N, R] = a.useState(new Map);
  n()(null != u, "Referrals remaining should not be null");
  let b = async (e, a) => {
    if (!g && !j && null != e && 0 !== u) try {
      p(true);
      let s = [...N.values()];
      for (let [e, t] of o)
        if (t === c.Fe.PENDING && !N.has(e)) {
          let t = await (0, l.PR)(e);
          s.push(t)
        } let n = await (0, c.iF)(e, t, a);
      x(t => {
        let a = n.users.filter(e => !r.has(e.id));
        return (s = s.filter(e => !r.has(e.id)), 0 === e) ? [...r.values(), ...s.values(), ...a] : [...t, ...a]
      }), R(e => {
        let t = new Map(e);
        for (let e of s) t.set(e.id, e);
        return t
      }), h(n.nextIndex)
    } catch (e) {
      v(true)
    } finally {
      p(false)
    }
  }, E = {
    limit: s,
    getNextRows: b,
    getLocalReferrals: async () => {
      let e = new Map;
      for (let [t, r] of o)
        if (r === c.Fe.PENDING && !N.has(t)) {
          let r = await (0, l.PR)(t);
          e.set(r.id, r)
        } R(e), x(Array.from(e.values()))
    }
  }, S = a.useRef(E);
  return a.useEffect(() => {
    S.current = E
  }), a.useEffect(() => {
    let {
      getNextRows: e,
      limit: t,
      getLocalReferrals: r
    } = S.current;
    u > 0 ? e(0, t) : r()
  }, [t, u]), {
    eligibleUsers: f,
    fetchUsers: () => b(m, s),
    hasError: j,
    isFetching: g,
    resendUsers: N
  }
}