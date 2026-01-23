/** Chunk was on web.js **/
/** chunk id: 564949, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => v
});
var Chunk869795 = require("./869795.js"),
  Chunk292841 = require("./292841.js"),
  Chunk132716 = require("./132716.js"),
  Chunk2799 = require("./2799.js"),
  Chunk401705 = require("./401705.js"),
  Chunk248215 = require("./248215.js"),
  Chunk400606 = require("./400606.js"),
  Chunk827211 = require("./827211.js"),
  Chunk959462 = require("./959462.js"),
  Chunk241827 = require("./241827.js"),
  Chunk862535 = require("./862535.js"),
  Chunk803082 = require("./803082.js"),
  Chunk13163 = require("./13163.js"),
  Chunk862836 = require("./862836.js"),
  Chunk340287 = require("./340287.js"),
  Chunk64700 = require("./64700.js"),
  Chunk885714 = require("./885714.js"),
  Chunk805447 = require("./805447.js"),
  Chunk853590 = require("./853590.js");

function v(e) {
  let t, {
      selectionManager: n,
      keyboardDelegate: v,
      ref: A,
      autoFocus: I = false,
      shouldFocusWrap: S = false,
      disallowEmptySelection: T = false,
      disallowSelectAll: C = false,
      escapeKeyBehavior: N = "clearSelection",
      selectOnFocus: w = "replace" === n.selectionBehavior,
      disallowTypeAhead: R = false,
      shouldUseVirtualFocus: P,
      allowsTabNavigation: D = false,
      isVirtualized: x,
      scrollRef: L = A,
      linkBehavior: j = "action"
    } = e,
    {
      direction: M
    } = (0, O.Y)(),
    k = (0, a.rd)(),
    U = e => {
      var t, i, a, l, c, u, d, f, p, _, m, E, y;
      if (e.altKey && "Tab" === e.key && e.preventDefault(), !(null == (t = A.current) ? true : t.contains(e.target))) return;
      let b = (t, i) => {
        if (null != t) {
          if (n.isLink(t) && "selection" === j && w && !(0, r.N9)(e)) {
            (0, g.flushSync)(() => {
              n.setFocusedKey(t, i)
            });
            let a = (0, r.au)(A, t),
              s = n.getItemProps(t);
            a && k.open(a, e, s.href, s.routerOptions);
            return
          }
          n.setFocusedKey(t, i), n.isLink(t) && "override" === j || (e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : w && !(0, r.N9)(e) && n.replaceSelection(t))
        }
      };
      switch (e.key) {
        case "ArrowDown":
          if (v.getKeyBelow) {
            let t = null != n.focusedKey ? null == (i = v.getKeyBelow) ? true : i.call(v, n.focusedKey) : null == (a = v.getFirstKey) ? true : a.call(v);
            null == t && S && (t = null == (l = v.getFirstKey) ? true : l.call(v, n.focusedKey)), null != t && (e.preventDefault(), b(t))
          }
          break;
        case "ArrowUp":
          if (v.getKeyAbove) {
            let t = null != n.focusedKey ? null == (c = v.getKeyAbove) ? true : c.call(v, n.focusedKey) : null == (u = v.getLastKey) ? true : u.call(v);
            null == t && S && (t = null == (d = v.getLastKey) ? true : d.call(v, n.focusedKey)), null != t && (e.preventDefault(), b(t))
          }
          break;
        case "ArrowLeft":
          if (v.getKeyLeftOf) {
            let t = null != n.focusedKey ? null == (f = v.getKeyLeftOf) ? true : f.call(v, n.focusedKey) : null;
            null == t && S && (t = "rtl" === M ? null == (p = v.getFirstKey) ? true : p.call(v, n.focusedKey) : null == (_ = v.getLastKey) ? true : _.call(v, n.focusedKey)), null != t && (e.preventDefault(), b(t, "rtl" === M ? "first" : "last"))
          }
          break;
        case "ArrowRight":
          if (v.getKeyRightOf) {
            let t = null != n.focusedKey ? null == (m = v.getKeyRightOf) ? true : m.call(v, n.focusedKey) : null;
            null == t && S && (t = "rtl" === M ? null == (E = v.getLastKey) ? true : E.call(v, n.focusedKey) : null == (y = v.getFirstKey) ? true : y.call(v, n.focusedKey)), null != t && (e.preventDefault(), b(t, "rtl" === M ? "last" : "first"))
          }
          break;
        case "Home":
          if (v.getFirstKey) {
            if (null === n.focusedKey && e.shiftKey) return;
            e.preventDefault();
            let t = v.getFirstKey(n.focusedKey, (0, s.B)(e));
            n.setFocusedKey(t), null != t && ((0, s.B)(e) && e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : w && n.replaceSelection(t))
          }
          break;
        case "End":
          if (v.getLastKey) {
            if (null === n.focusedKey && e.shiftKey) return;
            e.preventDefault();
            let t = v.getLastKey(n.focusedKey, (0, s.B)(e));
            n.setFocusedKey(t), null != t && ((0, s.B)(e) && e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : w && n.replaceSelection(t))
          }
          break;
        case "PageDown":
          if (v.getKeyPageBelow && null != n.focusedKey) {
            let t = v.getKeyPageBelow(n.focusedKey);
            null != t && (e.preventDefault(), b(t))
          }
          break;
        case "PageUp":
          if (v.getKeyPageAbove && null != n.focusedKey) {
            let t = v.getKeyPageAbove(n.focusedKey);
            null != t && (e.preventDefault(), b(t))
          }
          break;
        case "a":
          (0, s.B)(e) && "multiple" === n.selectionMode && true !== C && (e.preventDefault(), n.selectAll());
          break;
        case "Escape":
          "clearSelection" !== N || T || 0 === n.selectedKeys.size || (e.stopPropagation(), e.preventDefault(), n.clearSelection());
          break;
        case "Tab":
          if (!D)
            if (e.shiftKey) A.current.focus();
            else {
              let e, t, n = (0, h.N$)(A.current, {
                tabbable: true
              });
              do(t = n.lastChild()) && (e = t); while (t);
              e && !e.contains(document.activeElement) && (0, o.e)(e)
            }
      }
    },
    G = (0, E.useRef)({
      top: 0,
      left: 0
    });
  (0, l._)(L, "scroll", x ? true : () => {
    var e, t, n, r;
    G.current = {
      top: null != (n = null == (e = L.current) ? true : e.scrollTop) ? n : 0,
      left: null != (r = null == (t = L.current) ? true : t.scrollLeft) ? r : 0
    }
  });
  let V = e => {
      if (n.isFocused) {
        e.currentTarget.contains(e.target) || n.setFocused(false);
        return
      }
      if (e.currentTarget.contains(e.target)) {
        if (n.setFocused(true), null == n.focusedKey) {
          var t, i, a, s;
          let r = e => {
              null != e && (n.setFocusedKey(e), w && !n.isSelected(e) && n.replaceSelection(e))
            },
            o = e.relatedTarget;
          o && e.currentTarget.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING ? r(null != (a = n.lastSelectedKey) ? a : null == (t = v.getLastKey) ? true : t.call(v)) : r(null != (s = n.firstSelectedKey) ? s : null == (i = v.getFirstKey) ? true : i.call(v))
        } else !x && L.current && (L.current.scrollTop = G.current.top, L.current.scrollLeft = G.current.left);
        if (null != n.focusedKey && L.current) {
          let e = (0, r.au)(A, n.focusedKey);
          e instanceof HTMLElement && (e.contains(document.activeElement) || P || (0, o.e)(e), "keyboard" === (0, y.ME)() && (0, c.o)(e, {
            containingElement: A.current
          }))
        }
      }
    },
    F = e => {
      e.currentTarget.contains(e.relatedTarget) || n.setFocused(false)
    },
    B = (0, E.useRef)(false);
  (0, l._)(A, u.C, P ? e => {
    let {
      detail: t
    } = e;
    e.stopPropagation(), n.setFocused(true), (null == t ? true : t.focusStrategy) === "first" && (B.current = true)
  } : true);
  let H = (0, d.J)(() => {
    var e, t;
    let r = null != (t = null == (e = v.getFirstKey) ? true : e.call(v)) ? t : null;
    if (null == r) {
      let e = (0, f.bq)();
      (0, m.vX)(A.current), (0, m.Ig)(e, null), n.collection.size > 0 && (B.current = false)
    } else n.setFocusedKey(r), B.current = false
  });
  (0, p.K)(() => {
    B.current && H()
  }, [n.collection, H]);
  let Y = (0, d.J)(() => {
    n.collection.size > 0 && (B.current = false)
  });
  (0, p.K)(() => {
    Y()
  }, [n.focusedKey, Y]), (0, l._)(A, u.m, P ? e => {
    var t;
    e.stopPropagation(), n.setFocused(false), (null == (t = e.detail) ? true : t.clearFocusKey) && n.setFocusedKey(null)
  } : true);
  let W = (0, E.useRef)(I),
    K = (0, E.useRef)(false);
  (0, E.useEffect)(() => {
    if (W.current) {
      var e, t, r, i;
      let a = null;
      "first" === I && (a = null != (r = null == (e = v.getFirstKey) ? true : e.call(v)) ? r : null), "last" === I && (a = null != (i = null == (t = v.getLastKey) ? true : t.call(v)) ? i : null);
      let s = n.selectedKeys;
      if (s.size) {
        for (let e of s)
          if (n.canSelectItem(e)) {
            a = e;
            break
          }
      }
      n.setFocused(true), n.setFocusedKey(a), null == a && !P && A.current && (0, b.l)(A.current), n.collection.size > 0 && (W.current = false, K.current = true)
    }
  });
  let z = (0, E.useRef)(n.focusedKey),
    q = (0, E.useRef)(null);
  (0, E.useEffect)(() => {
    if (n.isFocused && null != n.focusedKey && (n.focusedKey !== z.current || K.current) && L.current && A.current) {
      let e = (0, y.ME)(),
        t = (0, r.au)(A, n.focusedKey);
      if (!(t instanceof HTMLElement)) return;
      ("keyboard" === e || K.current) && (q.current && cancelAnimationFrame(q.current), q.current = requestAnimationFrame(() => {
        L.current && ((0, c.R)(L.current, t), "virtual" !== e && (0, c.o)(t, {
          containingElement: A.current
        }))
      }))
    }!P && n.isFocused && null == n.focusedKey && null != z.current && A.current && (0, b.l)(A.current), z.current = n.focusedKey, K.current = false
  }), (0, E.useEffect)(() => () => {
    q.current && cancelAnimationFrame(q.current)
  }, []), (0, l._)(A, "react-aria-focus-scope-restore", e => {
    e.preventDefault(), n.setFocused(true)
  });
  let Z = {
      onKeyDown: U,
      onFocus: V,
      onBlur: F,
      onMouseDown(e) {
        L.current === e.target && e.preventDefault()
      }
    },
    {
      typeSelectProps: X
    } = (0, i.I)({
      keyboardDelegate: v,
      selectionManager: n
    });
  R || (Z = (0, _.v)(X, Z)), P || (t = null == n.focusedKey ? 0 : false);
  let Q = (0, r.j5)(n.collection);
  return {
    collectionProps: (0, _.v)(Z, {
      tabIndex: t,
      "data-collection": Q
    })
  }
}