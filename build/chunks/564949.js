/** Chunk was on web.js **/
/** chunk id: 564949, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => A
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

function A(e) {
  let t, {
      selectionManager: n,
      keyboardDelegate: A,
      ref: v,
      autoFocus: S = false,
      shouldFocusWrap: I = false,
      disallowEmptySelection: T = false,
      disallowSelectAll: C = false,
      escapeKeyBehavior: N = "clearSelection",
      selectOnFocus: R = "replace" === n.selectionBehavior,
      disallowTypeAhead: w = false,
      shouldUseVirtualFocus: P,
      allowsTabNavigation: D = false,
      isVirtualized: x,
      scrollRef: L = v,
      linkBehavior: j = "action"
    } = e,
    {
      direction: M
    } = (0, O.Y)(),
    k = (0, a.rd)(),
    U = e => {
      var t, i, a, l, c, u, d, f, p, _, m, E, b;
      if (e.altKey && "Tab" === e.key && e.preventDefault(), !(null == (t = v.current) ? true : t.contains(e.target))) return;
      let y = (t, i) => {
        if (null != t) {
          if (n.isLink(t) && "selection" === j && R && !(0, r.N9)(e)) {
            (0, g.flushSync)(() => {
              n.setFocusedKey(t, i)
            });
            let a = (0, r.au)(v, t),
              s = n.getItemProps(t);
            a && k.open(a, e, s.href, s.routerOptions);
            return
          }
          n.setFocusedKey(t, i), n.isLink(t) && "override" === j || (e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : R && !(0, r.N9)(e) && n.replaceSelection(t))
        }
      };
      switch (e.key) {
        case "ArrowDown":
          if (A.getKeyBelow) {
            let t = null != n.focusedKey ? null == (i = A.getKeyBelow) ? true : i.call(A, n.focusedKey) : null == (a = A.getFirstKey) ? true : a.call(A);
            null == t && I && (t = null == (l = A.getFirstKey) ? true : l.call(A, n.focusedKey)), null != t && (e.preventDefault(), y(t))
          }
          break;
        case "ArrowUp":
          if (A.getKeyAbove) {
            let t = null != n.focusedKey ? null == (c = A.getKeyAbove) ? true : c.call(A, n.focusedKey) : null == (u = A.getLastKey) ? true : u.call(A);
            null == t && I && (t = null == (d = A.getLastKey) ? true : d.call(A, n.focusedKey)), null != t && (e.preventDefault(), y(t))
          }
          break;
        case "ArrowLeft":
          if (A.getKeyLeftOf) {
            let t = null != n.focusedKey ? null == (f = A.getKeyLeftOf) ? true : f.call(A, n.focusedKey) : null;
            null == t && I && (t = "rtl" === M ? null == (p = A.getFirstKey) ? true : p.call(A, n.focusedKey) : null == (_ = A.getLastKey) ? true : _.call(A, n.focusedKey)), null != t && (e.preventDefault(), y(t, "rtl" === M ? "first" : "last"))
          }
          break;
        case "ArrowRight":
          if (A.getKeyRightOf) {
            let t = null != n.focusedKey ? null == (m = A.getKeyRightOf) ? true : m.call(A, n.focusedKey) : null;
            null == t && I && (t = "rtl" === M ? null == (E = A.getLastKey) ? true : E.call(A, n.focusedKey) : null == (b = A.getFirstKey) ? true : b.call(A, n.focusedKey)), null != t && (e.preventDefault(), y(t, "rtl" === M ? "last" : "first"))
          }
          break;
        case "Home":
          if (A.getFirstKey) {
            if (null === n.focusedKey && e.shiftKey) return;
            e.preventDefault();
            let t = A.getFirstKey(n.focusedKey, (0, s.B)(e));
            n.setFocusedKey(t), null != t && ((0, s.B)(e) && e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : R && n.replaceSelection(t))
          }
          break;
        case "End":
          if (A.getLastKey) {
            if (null === n.focusedKey && e.shiftKey) return;
            e.preventDefault();
            let t = A.getLastKey(n.focusedKey, (0, s.B)(e));
            n.setFocusedKey(t), null != t && ((0, s.B)(e) && e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : R && n.replaceSelection(t))
          }
          break;
        case "PageDown":
          if (A.getKeyPageBelow && null != n.focusedKey) {
            let t = A.getKeyPageBelow(n.focusedKey);
            null != t && (e.preventDefault(), y(t))
          }
          break;
        case "PageUp":
          if (A.getKeyPageAbove && null != n.focusedKey) {
            let t = A.getKeyPageAbove(n.focusedKey);
            null != t && (e.preventDefault(), y(t))
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
            if (e.shiftKey) v.current.focus();
            else {
              let e, t, n = (0, h.N$)(v.current, {
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
              null != e && (n.setFocusedKey(e), R && !n.isSelected(e) && n.replaceSelection(e))
            },
            o = e.relatedTarget;
          o && e.currentTarget.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING ? r(null != (a = n.lastSelectedKey) ? a : null == (t = A.getLastKey) ? true : t.call(A)) : r(null != (s = n.firstSelectedKey) ? s : null == (i = A.getFirstKey) ? true : i.call(A))
        } else !x && L.current && (L.current.scrollTop = G.current.top, L.current.scrollLeft = G.current.left);
        if (null != n.focusedKey && L.current) {
          let e = (0, r.au)(v, n.focusedKey);
          e instanceof HTMLElement && (e.contains(document.activeElement) || P || (0, o.e)(e), "keyboard" === (0, b.ME)() && (0, c.o)(e, {
            containingElement: v.current
          }))
        }
      }
    },
    F = e => {
      e.currentTarget.contains(e.relatedTarget) || n.setFocused(false)
    },
    B = (0, E.useRef)(false);
  (0, l._)(v, u.C, P ? e => {
    let {
      detail: t
    } = e;
    e.stopPropagation(), n.setFocused(true), (null == t ? true : t.focusStrategy) === "first" && (B.current = true)
  } : true);
  let H = (0, d.J)(() => {
    var e, t;
    let r = null != (t = null == (e = A.getFirstKey) ? true : e.call(A)) ? t : null;
    if (null == r) {
      let e = (0, f.bq)();
      (0, m.vX)(v.current), (0, m.Ig)(e, null), n.collection.size > 0 && (B.current = false)
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
  }, [n.focusedKey, Y]), (0, l._)(v, u.m, P ? e => {
    var t;
    e.stopPropagation(), n.setFocused(false), (null == (t = e.detail) ? true : t.clearFocusKey) && n.setFocusedKey(null)
  } : true);
  let W = (0, E.useRef)(S),
    K = (0, E.useRef)(false);
  (0, E.useEffect)(() => {
    if (W.current) {
      var e, t, r, i;
      let a = null;
      "first" === S && (a = null != (r = null == (e = A.getFirstKey) ? true : e.call(A)) ? r : null), "last" === S && (a = null != (i = null == (t = A.getLastKey) ? true : t.call(A)) ? i : null);
      let s = n.selectedKeys;
      if (s.size) {
        for (let e of s)
          if (n.canSelectItem(e)) {
            a = e;
            break
          }
      }
      n.setFocused(true), n.setFocusedKey(a), null == a && !P && v.current && (0, y.l)(v.current), n.collection.size > 0 && (W.current = false, K.current = true)
    }
  });
  let z = (0, E.useRef)(n.focusedKey),
    q = (0, E.useRef)(null);
  (0, E.useEffect)(() => {
    if (n.isFocused && null != n.focusedKey && (n.focusedKey !== z.current || K.current) && L.current && v.current) {
      let e = (0, b.ME)(),
        t = (0, r.au)(v, n.focusedKey);
      if (!(t instanceof HTMLElement)) return;
      ("keyboard" === e || K.current) && (q.current && cancelAnimationFrame(q.current), q.current = requestAnimationFrame(() => {
        L.current && ((0, c.R)(L.current, t), "virtual" !== e && (0, c.o)(t, {
          containingElement: v.current
        }))
      }))
    }!P && n.isFocused && null == n.focusedKey && null != z.current && v.current && (0, y.l)(v.current), z.current = n.focusedKey, K.current = false
  }), (0, E.useEffect)(() => () => {
    q.current && cancelAnimationFrame(q.current)
  }, []), (0, l._)(v, "react-aria-focus-scope-restore", e => {
    e.preventDefault(), n.setFocused(true)
  });
  let X = {
      onKeyDown: U,
      onFocus: V,
      onBlur: F,
      onMouseDown(e) {
        L.current === e.target && e.preventDefault()
      }
    },
    {
      typeSelectProps: Z
    } = (0, i.I)({
      keyboardDelegate: A,
      selectionManager: n
    });
  w || (X = (0, _.v)(Z, X)), P || (t = null == n.focusedKey ? 0 : false);
  let Q = (0, r.j5)(n.collection);
  return {
    collectionProps: (0, _.v)(X, {
      tabIndex: t,
      "data-collection": Q
    })
  }
}