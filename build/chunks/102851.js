/** Chunk was on web.js **/
/** chunk id: 102851, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => l
});
var Chunk537396 = require("./537396.js"),
  Chunk952976 = require("./952976.js"),
  Chunk121885 = require("./121885.js"),
  Chunk647438 = require("./647438.js"),
  Chunk861391 = require("./861391.js");

function l(e) {
  let {
    filter: t,
    layoutDelegate: n
  } = e, l = (0, i.q)(e), u = (0, a.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set, [e.disabledKeys]), d = (0, a.useCallback)(e => new(0, r.D)(t ? t(e) : e), [t]), f = (0, a.useMemo)(() => ({
    suppressTextValueWarning: e.suppressTextValueWarning
  }), [e.suppressTextValueWarning]), _ = (0, s.K)(e, d, f), p = (0, a.useMemo)(() => new(0, o.Z)(_, l, {
    layoutDelegate: n
  }), [_, l, n]);
  return c(_, p), {
    collection: _,
    disabledKeys: u,
    selectionManager: p
  }
}

function c(e, t) {
  let n = (0, a.useRef)(null);
  (0, a.useEffect)(() => {
    if (null != t.focusedKey && !e.getItem(t.focusedKey) && n.current) {
      var r, i, o, a, s, l, c;
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
        p = Math.min(_ > 1 ? Math.max((null != (o = null == u ? true : u.index) ? o : 0) - _ + 1, 0) : null != (a = null == u ? true : u.index) ? a : 0, (null != (s = null == f ? true : f.length) ? s : 0) - 1),
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