/** Chunk was on web.js **/
/** chunk id: 972007, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => u
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk803306 = require("./803306.js"),
  Chunk326084 = require("./326084.js"),
  Chunk851746 = require("./851746.js");
let u = e => {
  let {
    searchQuery: t,
    selectedUsers: n,
    limit: i
  } = e, u = (0, s.bG)([c.A], () => c.A.getRecipientStatus()), d = (0, s.bG)([c.A], () => c.A.getReferralsRemaining()), [f, p] = r.useState(0), [_, h] = r.useState([]), [m, g] = r.useState(false), [E, b] = r.useState(false), [y, O] = r.useState(new Map);
  a()(null != d, "Referrals remaining should not be null");
  let A = async (e, r) => {
    if (!m && !E && null != e && 0 !== d) try {
      g(true);
      let i = [...y.values()];
      for (let [e, t] of u)
        if (t === l.aK.PENDING && !y.has(e)) {
          let t = await (0, o.wz)(e);
          i.push(t)
        } let a = await (0, l.P7)(e, t, r);
      h(t => {
        let r = a.users.filter(e => !n.has(e.id));
        return (i = i.filter(e => !n.has(e.id)), 0 === e) ? [...n.values(), ...i.values(), ...r] : [...t, ...r]
      }), O(e => {
        let t = new Map(e);
        for (let e of i) t.set(e.id, e);
        return t
      }), p(a.nextIndex)
    } catch (e) {
      b(true)
    } finally {
      g(false)
    }
  }, v = {
    limit: i,
    getNextRows: A,
    getLocalReferrals: async () => {
      let e = new Map;
      for (let [t, n] of u)
        if (n === l.aK.PENDING && !y.has(t)) {
          let n = await (0, o.wz)(t);
          e.set(n.id, n)
        } O(e), h(Array.from(e.values()))
    }
  }, S = r.useRef(v);
  return r.useEffect(() => {
    S.current = v
  }), r.useEffect(() => {
    let {
      getNextRows: e,
      limit: t,
      getLocalReferrals: n
    } = S.current;
    d > 0 ? e(0, t) : n()
  }, [t, d]), {
    eligibleUsers: _,
    fetchUsers: () => A(f, i),
    hasError: E,
    isFetching: m,
    resendUsers: y
  }
}