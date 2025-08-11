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
    limit: r
  } = e, o = (0, i.e7)([c.Z], () => c.Z.getRecipientStatus()), u = (0, i.e7)([c.Z], () => c.Z.getReferralsRemaining()), [h, m] = n.useState(0), [f, x] = n.useState([]), [g, j] = n.useState(false), [p, v] = n.useState(false), [N, S] = n.useState(new Map);
  a()(null != u, "Referrals remaining should not be null");
  let b = async (e, n) => {
    if (!g && !p && null != e && 0 !== u) try {
      j(true);
      let r = [...N.values()];
      for (let [e, t] of o)
        if (t === d.Fe.PENDING && !N.has(e)) {
          let t = await (0, l.PR)(e);
          r.push(t)
        } let a = await (0, d.iF)(e, t, n);
      x(t => {
        let n = a.users.filter(e => !s.has(e.id));
        return (r = r.filter(e => !s.has(e.id)), 0 === e) ? [...s.values(), ...r.values(), ...n] : [...t, ...n]
      }), S(e => {
        let t = new Map(e);
        for (let e of r) t.set(e.id, e);
        return t
      }), m(a.nextIndex)
    } catch (e) {
      v(true)
    } finally {
      j(false)
    }
  }, w = {
    limit: r,
    getNextRows: b,
    getLocalReferrals: async () => {
      let e = new Map;
      for (let [t, s] of o)
        if (s === d.Fe.PENDING && !N.has(t)) {
          let s = await (0, l.PR)(t);
          e.set(s.id, s)
        } S(e), x(Array.from(e.values()))
    }
  }, Z = n.useRef(w);
  return n.useEffect(() => {
    Z.current = w
  }), n.useEffect(() => {
    let {
      getNextRows: e,
      limit: t,
      getLocalReferrals: s
    } = Z.current;
    u > 0 ? e(0, t) : s()
  }, [t, u]), {
    eligibleUsers: f,
    fetchUsers: () => b(h, r),
    hasError: p,
    isFetching: g,
    resendUsers: N
  }
}