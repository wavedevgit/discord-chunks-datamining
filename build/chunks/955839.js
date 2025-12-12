/** Chunk was on web.js **/
/** chunk id: 955839, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => u
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk232567 = require("./232567.js"),
  Chunk281494 = require("./281494.js"),
  Chunk276444 = require("./276444.js");
let u = e => {
  let {
    searchQuery: t,
    selectedUsers: n,
    limit: i
  } = e, u = (0, a.e7)([c.Z], () => c.Z.getRecipientStatus()), d = (0, a.e7)([c.Z], () => c.Z.getReferralsRemaining()), [f, p] = r.useState(0), [_, m] = r.useState([]), [h, g] = r.useState(false), [E, b] = r.useState(false), [y, O] = r.useState(new Map);
  o()(null != d, "Referrals remaining should not be null");
  let v = async (e, r) => {
    if (!h && !E && null != e && 0 !== d) try {
      g(true);
      let i = [...y.values()];
      for (let [e, t] of u)
        if (t === l.Fe.PENDING && !y.has(e)) {
          let t = await (0, s.PR)(e);
          i.push(t)
        } let o = await (0, l.iF)(e, t, r);
      m(t => {
        let r = o.users.filter(e => !n.has(e.id));
        return (i = i.filter(e => !n.has(e.id)), 0 === e) ? [...n.values(), ...i.values(), ...r] : [...t, ...r]
      }), O(e => {
        let t = new Map(e);
        for (let e of i) t.set(e.id, e);
        return t
      }), p(o.nextIndex)
    } catch (e) {
      b(true)
    } finally {
      g(false)
    }
  }, S = {
    limit: i,
    getNextRows: v,
    getLocalReferrals: async () => {
      let e = new Map;
      for (let [t, n] of u)
        if (n === l.Fe.PENDING && !y.has(t)) {
          let n = await (0, s.PR)(t);
          e.set(n.id, n)
        } O(e), m(Array.from(e.values()))
    }
  }, I = r.useRef(S);
  return r.useEffect(() => {
    I.current = S
  }), r.useEffect(() => {
    let {
      getNextRows: e,
      limit: t,
      getLocalReferrals: n
    } = I.current;
    d > 0 ? e(0, t) : n()
  }, [t, d]), {
    eligibleUsers: _,
    fetchUsers: () => v(f, i),
    hasError: E,
    isFetching: h,
    resendUsers: y
  }
}