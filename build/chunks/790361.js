/** Chunk was on web.js **/
/** chunk id: 790361, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => O
});
var Chunk173213 = require("./173213.js"),
  Chunk572139 = require("./572139.js"),
  Chunk87624 = require("./87624.js"),
  Chunk816187 = require("./816187.js"),
  Chunk945353 = require("./945353.js"),
  Chunk361834 = require("./361834.js"),
  Chunk368742 = require("./368742.js"),
  Chunk370617 = require("./370617.js"),
  Chunk101741 = require("./101741.js"),
  Chunk499435 = require("./499435.js"),
  Chunk506364 = require("./506364.js"),
  Chunk603113 = require("./603113.js"),
  Chunk647438 = require("./647438.js"),
  Chunk998925 = require("./998925.js"),
  Chunk533339 = require("./533339.js"),
  Chunk229114 = require("./229114.js"),
  Chunk804970 = require("./804970.js"),
  Chunk578206 = require("./578206.js");

function O(e) {
  let t, {
      selectionManager: n,
      keyboardDelegate: O,
      ref: v,
      autoFocus: I = false,
      shouldFocusWrap: T = false,
      disallowEmptySelection: S = false,
      disallowSelectAll: A = false,
      selectOnFocus: C = "replace" === n.selectionBehavior,
      disallowTypeAhead: N = false,
      shouldUseVirtualFocus: R,
      allowsTabNavigation: P = false,
      isVirtualized: w,
      scrollRef: D = v,
      linkBehavior: x = "action"
    } = e,
    {
      direction: L
    } = (0, y.j)(),
    j = (0, a.tv)(),
    M = e => {
      var t, i, a, l, c, u, d, f, _, h, m, g, b;
      if (e.altKey && "Tab" === e.key && e.preventDefault(), !(null == (t = v.current) ? true : t.contains(e.target))) return;
      let y = (t, i) => {
        if (null != t) {
          if (n.isLink(t) && "selection" === x && C && !(0, r.FJ)(e)) {
            (0, p.flushSync)(() => {
              n.setFocusedKey(t, i)
            });
            let a = (0, r.D0)(v, t),
              o = n.getItemProps(t);
            a && j.open(a, e, o.href, o.routerOptions);
            return
          }
          n.setFocusedKey(t, i), n.isLink(t) && "override" === x || (e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : C && !(0, r.FJ)(e) && n.replaceSelection(t))
        }
      };
      switch (e.key) {
        case "ArrowDown":
          if (O.getKeyBelow) {
            let t = null != n.focusedKey ? null == (i = O.getKeyBelow) ? true : i.call(O, n.focusedKey) : null == (a = O.getFirstKey) ? true : a.call(O);
            null == t && T && (t = null == (l = O.getFirstKey) ? true : l.call(O, n.focusedKey)), null != t && (e.preventDefault(), y(t))
          }
          break;
        case "ArrowUp":
          if (O.getKeyAbove) {
            let t = null != n.focusedKey ? null == (c = O.getKeyAbove) ? true : c.call(O, n.focusedKey) : null == (u = O.getLastKey) ? true : u.call(O);
            null == t && T && (t = null == (d = O.getLastKey) ? true : d.call(O, n.focusedKey)), null != t && (e.preventDefault(), y(t))
          }
          break;
        case "ArrowLeft":
          if (O.getKeyLeftOf) {
            let t = null != n.focusedKey ? null == (f = O.getKeyLeftOf) ? true : f.call(O, n.focusedKey) : null;
            null == t && T && (t = "rtl" === L ? null == (_ = O.getFirstKey) ? true : _.call(O, n.focusedKey) : null == (h = O.getLastKey) ? true : h.call(O, n.focusedKey)), null != t && (e.preventDefault(), y(t, "rtl" === L ? "first" : "last"))
          }
          break;
        case "ArrowRight":
          if (O.getKeyRightOf) {
            let t = null != n.focusedKey ? null == (m = O.getKeyRightOf) ? true : m.call(O, n.focusedKey) : null;
            null == t && T && (t = "rtl" === L ? null == (g = O.getLastKey) ? true : g.call(O, n.focusedKey) : null == (b = O.getFirstKey) ? true : b.call(O, n.focusedKey)), null != t && (e.preventDefault(), y(t, "rtl" === L ? "last" : "first"))
          }
          break;
        case "Home":
          if (O.getFirstKey) {
            if (null === n.focusedKey && e.shiftKey) return;
            e.preventDefault();
            let t = O.getFirstKey(n.focusedKey, (0, o.y)(e));
            n.setFocusedKey(t), null != t && ((0, o.y)(e) && e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : C && n.replaceSelection(t))
          }
          break;
        case "End":
          if (O.getLastKey) {
            if (null === n.focusedKey && e.shiftKey) return;
            e.preventDefault();
            let t = O.getLastKey(n.focusedKey, (0, o.y)(e));
            n.setFocusedKey(t), null != t && ((0, o.y)(e) && e.shiftKey && "multiple" === n.selectionMode ? n.extendSelection(t) : C && n.replaceSelection(t))
          }
          break;
        case "PageDown":
          if (O.getKeyPageBelow && null != n.focusedKey) {
            let t = O.getKeyPageBelow(n.focusedKey);
            null != t && (e.preventDefault(), y(t))
          }
          break;
        case "PageUp":
          if (O.getKeyPageAbove && null != n.focusedKey) {
            let t = O.getKeyPageAbove(n.focusedKey);
            null != t && (e.preventDefault(), y(t))
          }
          break;
        case "a":
          (0, o.y)(e) && "multiple" === n.selectionMode && true !== A && (e.preventDefault(), n.selectAll());
          break;
        case "Escape":
          S || 0 === n.selectedKeys.size || (e.stopPropagation(), e.preventDefault(), n.clearSelection());
          break;
        case "Tab":
          if (!P)
            if (e.shiftKey) v.current.focus();
            else {
              let e, t, n = (0, E.QL)(v.current, {
                tabbable: true
              });
              do(t = n.lastChild()) && (e = t); while (t);
              e && !e.contains(document.activeElement) && (0, s.A)(e)
            }
      }
    },
    k = (0, h.useRef)({
      top: 0,
      left: 0
    });
  (0, l.z)(D, "scroll", w ? true : () => {
    var e, t, n, r;
    k.current = {
      top: null != (n = null == (e = D.current) ? true : e.scrollTop) ? n : 0,
      left: null != (r = null == (t = D.current) ? true : t.scrollLeft) ? r : 0
    }
  });
  let U = e => {
      if (n.isFocused) {
        e.currentTarget.contains(e.target) || n.setFocused(false);
        return
      }
      if (e.currentTarget.contains(e.target)) {
        if (n.setFocused(true), null == n.focusedKey) {
          var t, i, a, o;
          let r = e => {
              null != e && (n.setFocusedKey(e), C && !n.isSelected(e) && n.replaceSelection(e))
            },
            s = e.relatedTarget;
          s && e.currentTarget.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING ? r(null != (a = n.lastSelectedKey) ? a : null == (t = O.getLastKey) ? true : t.call(O)) : r(null != (o = n.firstSelectedKey) ? o : null == (i = O.getFirstKey) ? true : i.call(O))
        } else !w && D.current && (D.current.scrollTop = k.current.top, D.current.scrollLeft = k.current.left);
        if (null != n.focusedKey && D.current) {
          let e = (0, r.D0)(v, n.focusedKey);
          e instanceof HTMLElement && (e.contains(document.activeElement) || R || (0, s.A)(e), "keyboard" === (0, m.Jz)() && (0, c.G)(e, {
            containingElement: v.current
          }))
        }
      }
    },
    G = e => {
      e.currentTarget.contains(e.relatedTarget) || n.setFocused(false)
    },
    B = (0, h.useRef)(false);
  (0, l.z)(v, u.N, R ? e => {
    let {
      detail: t
    } = e;
    e.stopPropagation(), n.setFocused(true), (null == t ? true : t.focusStrategy) === "first" && (B.current = true)
  } : true);
  let Z = (0, d.i)(() => {
    var e, t;
    let r = null != (t = null == (e = O.getFirstKey) ? true : e.call(O)) ? t : null;
    null == r ? ((0, b.q6)(v.current), n.collection.size > 0 && (B.current = false)) : (n.setFocusedKey(r), B.current = false)
  });
  (0, f.i)(() => {
    B.current && Z()
  }, [n.collection, Z]);
  let F = (0, d.i)(() => {
    n.collection.size > 0 && (B.current = false)
  });
  (0, f.i)(() => {
    F()
  }, [n.focusedKey, F]), (0, l.z)(v, u.o, R ? e => {
    var t;
    e.stopPropagation(), n.setFocused(false), (null == (t = e.detail) ? true : t.clearFocusKey) && n.setFocusedKey(null)
  } : true);
  let V = (0, h.useRef)(I),
    H = (0, h.useRef)(false);
  (0, h.useEffect)(() => {
    if (V.current) {
      var e, t, r, i;
      let a = null;
      "first" === I && (a = null != (r = null == (e = O.getFirstKey) ? true : e.call(O)) ? r : null), "last" === I && (a = null != (i = null == (t = O.getLastKey) ? true : t.call(O)) ? i : null);
      let o = n.selectedKeys;
      if (o.size) {
        for (let e of o)
          if (n.canSelectItem(e)) {
            a = e;
            break
          }
      }
      n.setFocused(true), n.setFocusedKey(a), null == a && !R && v.current && (0, g.e)(v.current), n.collection.size > 0 && (V.current = false, H.current = true)
    }
  });
  let Y = (0, h.useRef)(n.focusedKey);
  (0, h.useEffect)(() => {
    if (n.isFocused && null != n.focusedKey && (n.focusedKey !== Y.current || H.current) && D.current && v.current) {
      let e = (0, m.Jz)(),
        t = (0, r.D0)(v, n.focusedKey);
      if (!(t instanceof HTMLElement)) return;
      ("keyboard" === e || H.current) && ((0, c.z)(D.current, t), "virtual" !== e && (0, c.G)(t, {
        containingElement: v.current
      }))
    }!R && n.isFocused && null == n.focusedKey && null != Y.current && v.current && (0, g.e)(v.current), Y.current = n.focusedKey, H.current = false
  }), (0, l.z)(v, "react-aria-focus-scope-restore", e => {
    e.preventDefault(), n.setFocused(true)
  });
  let W = {
      onKeyDown: M,
      onFocus: U,
      onBlur: G,
      onMouseDown(e) {
        D.current === e.target && e.preventDefault()
      }
    },
    {
      typeSelectProps: K
    } = (0, i.i)({
      keyboardDelegate: O,
      selectionManager: n
    });
  N || (W = (0, _.d)(K, W)), R || (t = null == n.focusedKey ? 0 : false);
  let z = (0, r.Mm)(n.collection);
  return {
    collectionProps: (0, _.d)(W, {
      tabIndex: t,
      "data-collection": z
    })
  }
}