/** Chunk was on web.js **/
/** chunk id: 596218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => c,
  n: () => l
});
var Chunk219964 = require("./219964.js"),
  Chunk634809 = require("./634809.js"),
  Chunk180717 = require("./180717.js"),
  Chunk473749 = require("./473749.js"),
  Chunk780667 = require("./780667.js");

function l(e) {
  let {
    filter: t,
    layoutDelegate: n
  } = e, l = (0, i.q)(e), c = (0, o.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set, [e.disabledKeys]), d = (0, o.useCallback)(e => new(0, r.D)(t ? t(e) : e), [t]), f = (0, o.useMemo)(() => ({
    suppressTextValueWarning: e.suppressTextValueWarning
  }), [e.suppressTextValueWarning]), _ = (0, s.K)(e, d, f), p = (0, o.useMemo)(() => new(0, a.Z)(_, l, {
    layoutDelegate: n
  }), [_, l, n]);
  return u(_, p), {
    collection: _,
    disabledKeys: c,
    selectionManager: p
  }
}

function c(e, t) {
  let n = (0, o.useMemo)(() => t ? e.collection.filter(t) : e.collection, [e.collection, t]),
    r = e.selectionManager.withCollection(n);
  return u(n, r), {
    collection: n,
    selectionManager: r,
    disabledKeys: e.disabledKeys
  }
}

function u(e, t) {
  let n = (0, o.useRef)(null);
  (0, o.useEffect)(() => {
    if (null != t.focusedKey && !e.getItem(t.focusedKey) && n.current) {
      var r, i, a, o, s, l, c;
      let u = n.current.getItem(t.focusedKey),
        d = [...n.current.getKeys()].map(e => {
          let t = n.current.getItem(e);
          return (null == t ? true : t.type) === "item" ? t : null
        }).filter(e => null !== e),
        f = [...e.getKeys()].map(t => {
          let n = e.getItem(t);
          return (null == n ? true : n.type) === "item" ? n : null
        }).filter(e => null !== e),
        _ = (null != (r = null == d ? true : d.length) ? r : 0) - (null != (i = null == f ? true : f.length) ? i : 0),
        p = Math.min(_ > 1 ? Math.max((null != (a = null == u ? true : u.index) ? a : 0) - _ + 1, 0) : null != (o = null == u ? true : u.index) ? o : 0, (null != (s = null == f ? true : f.length) ? s : 0) - 1),
        h = null,
        m = false;
      for (; p >= 0;) {
        if (!t.isDisabled(f[p].key)) {
          h = f[p];
          break
        }
        p < f.length - 1 && !m ? p++ : (m = true, p > (null != (l = null == u ? true : u.index) ? l : 0) && (p = null != (c = null == u ? true : u.index) ? c : 0), p--)
      }
      t.setFocusedKey(h ? h.key : null)
    }
    n.current = e
  }, [e, t])
}