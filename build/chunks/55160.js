/** Chunk was on web.js **/
/** chunk id: 55160, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => s
});
let r = e => Symbol.iterator in e,
  i = e => "entries" in e,
  a = (e, t) => {
    let n = e instanceof Map ? e : new Map(e.entries()),
      r = t instanceof Map ? t : new Map(t.entries());
    if (n.size !== r.size) returnfalse;
    for (let [e, t] of n)
      if (!r.has(e) || !Object.is(t, r.get(e))) returnfalse;
    returntrue
  },
  o = (e, t) => {
    let n = e[Symbol.iterator](),
      r = t[Symbol.iterator](),
      i = n.next(),
      a = r.next();
    for (; !i.done && !a.done;) {
      if (!Object.is(i.value, a.value)) returnfalse;
      i = n.next(), a = r.next()
    }
    return !!i.done && !!a.done
  };

function s(e, t) {
  return !!Object.is(e, t) || "object" == typeof e && null !== e && "object" == typeof t && null !== t && Object.getPrototypeOf(e) === Object.getPrototypeOf(t) && (r(e) && r(t) ? i(e) && i(t) ? a(e, t) : o(e, t) : a({
    entries: () => Object.entries(e)
  }, {
    entries: () => Object.entries(t)
  }))
}