/** Chunk was on 9753 **/
/** chunk id: 972007, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => u
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk803306 = require("./803306.js"),
  Chunk326084 = require("./326084.js"),
  Chunk851746 = require("./851746.js");
let u = e => {
  let {
    searchQuery: t,
    selectedUsers: n,
    limit: i
  } = e, u = (0, a.bG)([c.A], () => c.A.getRecipientStatus()), d = (0, a.bG)([c.A], () => c.A.getReferralsRemaining()), [p, m] = r.useState(0), [f, g] = r.useState([]), [_, h] = r.useState(false), [b, y] = r.useState(false), [A, v] = r.useState(new Map);
  l()(null != d, "Referrals remaining should not be null");
  let O = async (e, r) => {
    if (!_ && !b && null != e && 0 !== d) try {
      h(true);
      let i = [...A.values()];
      for (let [e, t] of u)
        if (t === o.aK.PENDING && !A.has(e)) {
          let t = await (0, s.wz)(e);
          i.push(t)
        } let l = await (0, o.P7)(e, t, r);
      g(t => {
        let r = l.users.filter(e => !n.has(e.id));
        return (i = i.filter(e => !n.has(e.id)), 0 === e) ? [...n.values(), ...i.values(), ...r] : [...t, ...r]
      }), v(e => {
        let t = new Map(e);
        for (let e of i) t.set(e.id, e);
        return t
      }), m(l.nextIndex)
    } catch (e) {
      y(true)
    } finally {
      h(false)
    }
  }, x = {
    limit: i,
    getNextRows: O,
    getLocalReferrals: async () => {
      let e = new Map;
      for (let [t, n] of u)
        if (n === o.aK.PENDING && !A.has(t)) {
          let n = await (0, s.wz)(t);
          e.set(n.id, n)
        } v(e), g(Array.from(e.values()))
    }
  }, E = r.useRef(x);
  return r.useEffect(() => {
    E.current = x
  }), r.useEffect(() => {
    let {
      getNextRows: e,
      limit: t,
      getLocalReferrals: n
    } = E.current;
    d > 0 ? e(0, t) : n()
  }, [t, d]), {
    eligibleUsers: f,
    fetchUsers: () => O(p, i),
    hasError: b,
    isFetching: _,
    resendUsers: A
  }
}