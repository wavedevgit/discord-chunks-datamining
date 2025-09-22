/** Chunk was on web.js **/
/** chunk id: 138798, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => l
});
var Chunk854675 = require("./854675.js"),
  Chunk26722 = require("./26722.js"),
  Chunk732153 = require("./732153.js"),
  Chunk647438 = require("./647438.js"),
  Chunk835717 = require("./835717.js");

function l(e) {
  let {
    filter: t,
    layoutDelegate: n
  } = e, l = (0, i.q)(e), u = (0, o.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set, [e.disabledKeys]), d = (0, o.useCallback)(e => new(0, r.D)(t ? t(e) : e), [t]), f = (0, o.useMemo)(() => ({
    suppressTextValueWarning: e.suppressTextValueWarning
  }), [e.suppressTextValueWarning]), _ = (0, s.K)(e, d, f), p = (0, o.useMemo)(() => new(0, a.Z)(_, l, {
    layoutDelegate: n
  }), [_, l, n]);
  return c(_, p), {
    collection: _,
    disabledKeys: u,
    selectionManager: p
  }
}

function c(e, t) {
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