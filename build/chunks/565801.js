/** Chunk was on web.js **/
/** chunk id: 565801, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c,
  p: () => l
});
var Chunk67733 = require("./67733.js"),
  Chunk36310 = require("./36310.js"),
  Chunk74733 = require("./74733.js"),
  Chunk64700 = require("./64700.js"),
  Chunk555578 = require("./555578.js");

function l(e) {
  let {
    filter: t,
    layoutDelegate: n
  } = e, l = (0, i.R)(e), c = (0, s.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set, [e.disabledKeys]), d = (0, s.useCallback)(e => new(0, r.J)(t ? t(e) : e), [t]), f = (0, s.useMemo)(() => ({
    suppressTextValueWarning: e.suppressTextValueWarning
  }), [e.suppressTextValueWarning]), p = (0, o.G)(e, d, f), _ = (0, s.useMemo)(() => new(0, a.Y)(p, l, {
    layoutDelegate: n
  }), [p, l, n]);
  return u(p, _), {
    collection: p,
    disabledKeys: c,
    selectionManager: _
  }
}

function c(e, t) {
  let n = (0, s.useMemo)(() => t ? e.collection.filter(t) : e.collection, [e.collection, t]),
    r = e.selectionManager.withCollection(n);
  return u(n, r), {
    collection: n,
    selectionManager: r,
    disabledKeys: e.disabledKeys
  }
}

function u(e, t) {
  let n = (0, s.useRef)(null);
  (0, s.useEffect)(() => {
    if (null != t.focusedKey && !e.getItem(t.focusedKey) && n.current) {
      var r, i, a, s, o, l, c;
      let u = n.current.getItem(t.focusedKey),
        d = [...n.current.getKeys()].map(e => {
          let t = n.current.getItem(e);
          return (null == t ? true : t.type) === "item" ? t : null
        }).filter(e => null !== e),
        f = [...e.getKeys()].map(t => {
          let n = e.getItem(t);
          return (null == n ? true : n.type) === "item" ? n : null
        }).filter(e => null !== e),
        p = (null != (r = null == d ? true : d.length) ? r : 0) - (null != (i = null == f ? true : f.length) ? i : 0),
        _ = Math.min(p > 1 ? Math.max((null != (a = null == u ? true : u.index) ? a : 0) - p + 1, 0) : null != (s = null == u ? true : u.index) ? s : 0, (null != (o = null == f ? true : f.length) ? o : 0) - 1),
        h = null,
        m = false;
      for (; _ >= 0;) {
        if (!t.isDisabled(f[_].key)) {
          h = f[_];
          break
        }
        _ < f.length - 1 && !m ? _++ : (m = true, _ > (null != (l = null == u ? true : u.index) ? l : 0) && (_ = null != (c = null == u ? true : u.index) ? c : 0), _--)
      }
      t.setFocusedKey(h ? h.key : null)
    }
    n.current = e
  }, [e, t])
}