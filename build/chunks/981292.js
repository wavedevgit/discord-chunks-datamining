/** Chunk was on web.js **/
/** chunk id: 981292, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W3: () => s,
  pJ: () => i
}), require("./388685.js"), require("./539854.js"), require("./54381.js");
var Chunk473749 = require("./473749.js"),
  i = function(e) {
    return e[e.MOUNTED = 0] = "MOUNTED", e[e.ENTERED = 1] = "ENTERED", e[e.YEETED = 2] = "YEETED", e
  }({});
let o = {};

function a(e) {
  return e
}

function s(e) {
  let {
    items: t,
    renderItem: n,
    getItemKey: i,
    wrapChildren: s = a,
    lazyCleanUpDelay: l
  } = e, c = r.useRef(false);
  r.useLayoutEffect(() => {
    false !== c.current && clearTimeout(c.current)
  }, []);
  let [, u] = r.useState(o), d = r.useRef(null), f = r.useMemo(() => {
    var e;
    let r = new Set(null == (e = d.current) ? true : e.keys()),
      o = new Map(d.current);
    for (let e of t) {
      let t = i(e),
        a = o.get(t);
      if (null == a) {
        let r = +(null != d.current),
          i = () => {
            var e, n;
            let r = null == (e = d.current) ? true : e.get(t);
            null == r || (2 === r.state ? (null == (n = d.current) || n.delete(t), null != l ? (clearTimeout(c.current), c.current = setTimeout(() => u({}), l)) : u({})) : __DEV__ && console.warn("SimpleTransitionGroup.cleanUp: Attempted to remove an item that isn't yeetable: ".concat(t)))
          },
          o = n(t, e, r, i);
        a = {
          item: e,
          children: o,
          state: r,
          cleanUp: i,
          renderItem: n
        }
      } else if (a.item !== e || a.renderItem !== n || 2 === a.state) {
        let {
          cleanUp: r
        } = a, i = 2 === a.state ? 1 : a.state, o = n(t, e, i, a.cleanUp);
        a = {
          item: e,
          children: o,
          state: i,
          cleanUp: r,
          renderItem: n
        }
      }
      o.set(t, a), r.delete(t)
    }
    for (let e of r) {
      let t = o.get(e);
      if (null != t)
        if (2 !== t.state || t.renderItem !== n) {
          let {
            item: r,
            cleanUp: i
          } = t;
          null != (t = {
            item: r,
            children: n(e, t.item, 2, t.cleanUp),
            state: 2,
            cleanUp: i,
            renderItem: n
          }).children ? o.set(e, t) : o.delete(e)
        } else o.set(e, t)
    }
    return o
  }, [t, i, n, l]);
  r.useInsertionEffect(() => (d.current = f, () => {
    var e;
    return null == (e = d.current) ? true : e.clear()
  }), [f]);
  let p = [];
  for (let [, e] of f) p.push(e.children);
  return p.length > 0 ? s(p, t) : null
}