/** Chunk was on web.js **/
/** chunk id: 756586, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => v
});
var Chunk916816 = require("./916816.js"),
  Chunk609281 = require("./609281.js"),
  Chunk520297 = require("./520297.js"),
  Chunk327657 = require("./327657.js"),
  Chunk183014 = require("./183014.js"),
  Chunk941796 = require("./941796.js"),
  Chunk423567 = require("./423567.js"),
  Chunk420365 = require("./420365.js"),
  Chunk300941 = require("./300941.js"),
  Chunk763809 = require("./763809.js"),
  Chunk742804 = require("./742804.js"),
  Chunk506523 = require("./506523.js"),
  Chunk255834 = require("./255834.js"),
  Chunk545893 = require("./545893.js"),
  Chunk603113 = require("./603113.js"),
  Chunk647438 = require("./647438.js"),
  Chunk775282 = require("./775282.js"),
  Chunk288804 = require("./288804.js"),
  Chunk911931 = require("./911931.js");

function v(e) {
  let t, {
      selectionManager: n,
      keyboardDelegate: v,
      ref: I,
      autoFocus: T = false,
      shouldFocusWrap: S = false,
      disallowEmptySelection: A = false,
      disallowSelectAll: C = false,
      escapeKeyBehavior: N = "clearSelection",
      selectOnFocus: R = "replace" === n.selectionBehavior,
      disallowTypeAhead: P = false,
      shouldUseVirtualFocus: w,
      allowsTabNavigation: D = false,
      isVirtualized: x,
      scrollRef: L = I,
      linkBehavior: j = "action"
    } = e,
    {
      direction: k
    } = (0, O.j)(),
    M = (0, a.tv)(),
    U = e => {
      var t, i, a, l, c, u, d, f, _, p, m, E, b;
      if (e.altKey && "Tab" === e.key && e.preventDefault(), !(null == (t = I.current) ? true : t.contains(e.target))) return;
      let y = (t, i) => {
        if (null != t) {
          if (n.isLink(t) && "selection" === j && R && !(0, r.FJ)(e)) {
            (0, g.flushSync)(() => {
              n.setFocusedKey(t, i)
            });
            let a = (0, r.D0)(I, t),
              o = n.getItemProps(t);
            a && M.open(a, e, o.href, o.routerOptions);
            return
          }
          n.setFocusedKey(t, i), n.isLink(t) && "override" === j || (e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : R && !(0, r.FJ)(e) && n.replaceSelection(t))
        }
      };
      switch (e.key) {
        case "ArrowDown":
          if (v.getKeyBelow) {
            let t = null != n.focusedKey ? null == (i = v.getKeyBelow) ? true : i.call(v, n.focusedKey) : null == (a = v.getFirstKey) ? true : a.call(v);
            null == t && S && (t = null == (l = v.getFirstKey) ? true : l.call(v, n.focusedKey)), null != t && (e.preventDefault(), y(t))
          }
          break;
        case "ArrowUp":
          if (v.getKeyAbove) {
            let t = null != n.focusedKey ? null == (c = v.getKeyAbove) ? true : c.call(v, n.focusedKey) : null == (u = v.getLastKey) ? true : u.call(v);
            null == t && S && (t = null == (d = v.getLastKey) ? true : d.call(v, n.focusedKey)), null != t && (e.preventDefault(), y(t))
          }
          break;
        case "ArrowLeft":
          if (v.getKeyLeftOf) {
            let t = null != n.focusedKey ? null == (f = v.getKeyLeftOf) ? true : f.call(v, n.focusedKey) : null;
            null == t && S && (t = "rtl" === k ? null == (_ = v.getFirstKey) ? true : _.call(v, n.focusedKey) : null == (p = v.getLastKey) ? true : p.call(v, n.focusedKey)), null != t && (e.preventDefault(), y(t, "rtl" === k ? "first" : "last"))
          }
          break;
        case "ArrowRight":
          if (v.getKeyRightOf) {
            let t = null != n.focusedKey ? null == (m = v.getKeyRightOf) ? true : m.call(v, n.focusedKey) : null;
            null == t && S && (t = "rtl" === k ? null == (E = v.getLastKey) ? true : E.call(v, n.focusedKey) : null == (b = v.getFirstKey) ? true : b.call(v, n.focusedKey)), null != t && (e.preventDefault(), y(t, "rtl" === k ? "last" : "first"))
          }
          break;
        case "Home":
          if (v.getFirstKey) {
            if (null === n.focusedKey && e.shiftKey) return;
            e.preventDefault();
            let t = v.getFirstKey(n.focusedKey, (0, o.y)(e));
            n.setFocusedKey(t), null != t && ((0, o.y)(e) && e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : R && n.replaceSelection(t))
          }
          break;
        case "End":
          if (v.getLastKey) {
            if (null === n.focusedKey && e.shiftKey) return;
            e.preventDefault();
            let t = v.getLastKey(n.focusedKey, (0, o.y)(e));
            n.setFocusedKey(t), null != t && ((0, o.y)(e) && e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : R && n.replaceSelection(t))
          }
          break;
        case "PageDown":
          if (v.getKeyPageBelow && null != n.focusedKey) {
            let t = v.getKeyPageBelow(n.focusedKey);
            null != t && (e.preventDefault(), y(t))
          }
          break;
        case "PageUp":
          if (v.getKeyPageAbove && null != n.focusedKey) {
            let t = v.getKeyPageAbove(n.focusedKey);
            null != t && (e.preventDefault(), y(t))
          }
          break;
        case "a":
          (0, o.y)(e) && "multiple" === n.selectionMode && true !== C && (e.preventDefault(), n.selectAll());
          break;
        case "Escape":
          "clearSelection" !== N || A || 0 === n.selectedKeys.size || (e.stopPropagation(), e.preventDefault(), n.clearSelection());
          break;
        case "Tab":
          if (!D)
            if (e.shiftKey) I.current.focus();
            else {
              let e, t, n = (0, h.QL)(I.current, {
                tabbable: true
              });
              do(t = n.lastChild()) && (e = t); while (t);
              e && !e.contains(document.activeElement) && (0, s.A)(e)
            }
      }
    },
    G = (0, E.useRef)({
      top: 0,
      left: 0
    });
  (0, l.z)(L, "scroll", x ? true : () => {
    var e, t, n, r;
    G.current = {
      top: null != (n = null == (e = L.current) ? true : e.scrollTop) ? n : 0,
      left: null != (r = null == (t = L.current) ? true : t.scrollLeft) ? r : 0
    }
  });
  let B = e => {
      if (n.isFocused) {
        e.currentTarget.contains(e.target) || n.setFocused(false);
        return
      }
      if (e.currentTarget.contains(e.target)) {
        if (n.setFocused(true), null == n.focusedKey) {
          var t, i, a, o;
          let r = e => {
              null != e && (n.setFocusedKey(e), R && !n.isSelected(e) && n.replaceSelection(e))
            },
            s = e.relatedTarget;
          s && e.currentTarget.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING ? r(null != (a = n.lastSelectedKey) ? a : null == (t = v.getLastKey) ? true : t.call(v)) : r(null != (o = n.firstSelectedKey) ? o : null == (i = v.getFirstKey) ? true : i.call(v))
        } else !x && L.current && (L.current.scrollTop = G.current.top, L.current.scrollLeft = G.current.left);
        if (null != n.focusedKey && L.current) {
          let e = (0, r.D0)(I, n.focusedKey);
          e instanceof HTMLElement && (e.contains(document.activeElement) || w || (0, s.A)(e), "keyboard" === (0, b.Jz)() && (0, c.G)(e, {
            containingElement: I.current
          }))
        }
      }
    },
    Z = e => {
      e.currentTarget.contains(e.relatedTarget) || n.setFocused(false)
    },
    F = (0, E.useRef)(false);
  (0, l.z)(I, u.N, w ? e => {
    let {
      detail: t
    } = e;
    e.stopPropagation(), n.setFocused(true), (null == t ? true : t.focusStrategy) === "first" && (F.current = true)
  } : true);
  let V = (0, d.i)(() => {
    var e, t;
    let r = null != (t = null == (e = v.getFirstKey) ? true : e.call(v)) ? t : null;
    if (null == r) {
      let e = (0, f.vY)();
      (0, m.q6)(I.current), (0, m.Jv)(e, null), n.collection.size > 0 && (F.current = false)
    } else n.setFocusedKey(r), F.current = false
  });
  (0, _.i)(() => {
    F.current && V()
  }, [n.collection, V]);
  let H = (0, d.i)(() => {
    n.collection.size > 0 && (F.current = false)
  });
  (0, _.i)(() => {
    H()
  }, [n.focusedKey, H]), (0, l.z)(I, u.o, w ? e => {
    var t;
    e.stopPropagation(), n.setFocused(false), (null == (t = e.detail) ? true : t.clearFocusKey) && n.setFocusedKey(null)
  } : true);
  let Y = (0, E.useRef)(T),
    W = (0, E.useRef)(false);
  (0, E.useEffect)(() => {
    if (Y.current) {
      var e, t, r, i;
      let a = null;
      "first" === T && (a = null != (r = null == (e = v.getFirstKey) ? true : e.call(v)) ? r : null), "last" === T && (a = null != (i = null == (t = v.getLastKey) ? true : t.call(v)) ? i : null);
      let o = n.selectedKeys;
      if (o.size) {
        for (let e of o)
          if (n.canSelectItem(e)) {
            a = e;
            break
          }
      }
      n.setFocused(true), n.setFocusedKey(a), null == a && !w && I.current && (0, y.e)(I.current), n.collection.size > 0 && (Y.current = false, W.current = true)
    }
  });
  let K = (0, E.useRef)(n.focusedKey),
    z = (0, E.useRef)(null);
  (0, E.useEffect)(() => {
    if (n.isFocused && null != n.focusedKey && (n.focusedKey !== K.current || W.current) && L.current && I.current) {
      let e = (0, b.Jz)(),
        t = (0, r.D0)(I, n.focusedKey);
      if (!(t instanceof HTMLElement)) return;
      ("keyboard" === e || W.current) && (z.current && cancelAnimationFrame(z.current), z.current = requestAnimationFrame(() => {
        L.current && ((0, c.z)(L.current, t), "virtual" !== e && (0, c.G)(t, {
          containingElement: I.current
        }))
      }))
    }!w && n.isFocused && null == n.focusedKey && null != K.current && I.current && (0, y.e)(I.current), K.current = n.focusedKey, W.current = false
  }), (0, E.useEffect)(() => () => {
    z.current && cancelAnimationFrame(z.current)
  }, []), (0, l.z)(I, "react-aria-focus-scope-restore", e => {
    e.preventDefault(), n.setFocused(true)
  });
  let q = {
      onKeyDown: U,
      onFocus: B,
      onBlur: Z,
      onMouseDown(e) {
        L.current === e.target && e.preventDefault()
      }
    },
    {
      typeSelectProps: X
    } = (0, i.i)({
      keyboardDelegate: v,
      selectionManager: n
    });
  P || (q = (0, p.d)(X, q)), w || (t = null == n.focusedKey ? 0 : false);
  let Q = (0, r.Mm)(n.collection);
  return {
    collectionProps: (0, p.d)(q, {
      tabIndex: t,
      "data-collection": Q
    })
  }
}