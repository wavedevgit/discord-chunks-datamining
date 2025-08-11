/** Chunk was on 83667 **/
/** chunk id: 955839, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  q: () => o
}), require("./388685.js"), require("./539854.js");
var Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk232567 = require("./232567.js"),
  Chunk281494 = require("./281494.js"),
  Chunk276444 = require("./276444.js");
let o = e => {
  let {
    searchQuery: t,
    selectedUsers: s,
    limit: n
  } = e, o = (0, i.e7)([d.Z], () => d.Z.getRecipientStatus()), u = (0, i.e7)([d.Z], () => d.Z.getReferralsRemaining()), [h, m] = r.useState(0), [f, x] = r.useState([]), [g, j] = r.useState(false), [p, v] = r.useState(false), [N, S] = r.useState(new Map);
  a()(null != u, "Referrals remaining should not be null");
  let b = async (e, r) => {
    if (!g && !p && null != e && 0 !== u) try {
      j(true);
      let n = [...N.values()];
      for (let [e, t] of o)
        if (t === c.Fe.PENDING && !N.has(e)) {
          let t = await (0, l.PR)(e);
          n.push(t)
        } let a = await (0, c.iF)(e, t, r);
      x(t => {
        let r = a.users.filter(e => !s.has(e.id));
        return (n = n.filter(e => !s.has(e.id)), 0 === e) ? [...s.values(), ...n.values(), ...r] : [...t, ...r]
      }), S(e => {
        let t = new Map(e);
        for (let e of n) t.set(e.id, e);
        return t
      }), m(a.nextIndex)
    } catch (e) {
      v(true)
    } finally {
      j(false)
    }
  }, w = {
    limit: n,
    getNextRows: b,
    getLocalReferrals: async () => {
      let e = new Map;
      for (let [t, s] of o)
        if (s === c.Fe.PENDING && !N.has(t)) {
          let s = await (0, l.PR)(t);
          e.set(s.id, s)
        } S(e), x(Array.from(e.values()))
    }
  }, Z = r.useRef(w);
  return r.useEffect(() => {
    Z.current = w
  }), r.useEffect(() => {
    let {
      getNextRows: e,
      limit: t,
      getLocalReferrals: s
    } = Z.current;
    u > 0 ? e(0, t) : s()
  }, [t, u]), {
    eligibleUsers: f,
    fetchUsers: () => b(h, n),
    hasError: p,
    isFetching: g,
    resendUsers: N
  }
}