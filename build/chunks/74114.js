/** Chunk was on web.js **/
/** chunk id: 74114, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => E
});
var Chunk588225 = require("./588225.js"),
  Chunk752689 = require("./752689.js"),
  Chunk929767 = require("./929767.js"),
  Chunk776608 = require("./776608.js"),
  Chunk348672 = require("./348672.js"),
  Chunk601339 = require("./601339.js"),
  Chunk158821 = require("./158821.js"),
  Chunk172395 = require("./172395.js"),
  Chunk605294 = require("./605294.js"),
  Chunk473749 = require("./473749.js"),
  Chunk981166 = require("./981166.js"),
  Chunk624641 = require("./624641.js"),
  Chunk227399 = require("./227399.js");
let h = {
    ltr: "ArrowRight",
    rtl: "ArrowLeft"
  },
  g = {
    ltr: "ArrowLeft",
    rtl: "ArrowRight"
  };

function E(e, t, n) {
  var E, y, O, v, S, I;
  let {
    node: T,
    isVirtualized: C
  } = e, {
    direction: A
  } = (0, m.j)(), {
    onAction: N,
    linkBehavior: P,
    keyboardNavigationBehavior: R,
    shouldSelectOnPressUp: w
  } = r.Co.get(t), D = (0, i.mp)(), x = (0, f.useRef)(null), L = () => {
    var e;
    null === n.current || (null == x.current || T.key === x.current) && (null == (e = n.current) ? true : e.contains(document.activeElement)) || (0, u.e)(n.current)
  }, j = {}, M = e.hasChildItems, k = t.selectionManager.isLink(T.key);
  if (null != T && "expandedKeys" in t) {
    let e = null == (O = (v = t.collection).getChildren) ? true : O.call(v, T.key);
    M = M || [...null != e ? e : []].length > 1, null == N && !k && "none" === t.selectionManager.selectionMode && M && (N = () => t.toggleKey(T.key));
    let n = M ? t.expandedKeys.has(T.key) : true,
      r = 1;
    if (T.level > 0 && (null == T ? true : T.parentKey) != null) {
      let e = t.collection.getItem(T.parentKey);
      e && (r = [...null == (S = (I = t.collection).getChildren) ? true : S.call(I, e.key)].filter(e => "item" === e.type).length)
    } else r = [...t.collection].filter(e => 0 === e.level && "item" === e.type).length;
    j = {
      "aria-expanded": n,
      "aria-level": T.level + 1,
      "aria-posinset": (null == T ? true : T.index) + 1,
      "aria-setsize": r
    }
  }
  let {
    itemProps: U,
    ...G
  } = (0, _.C)({
    selectionManager: t.selectionManager,
    key: T.key,
    ref: n,
    isVirtualized: C,
    shouldSelectOnPressUp: e.shouldSelectOnPressUp || w,
    onAction: N || (null == (E = T.props) ? true : E.onAction) ? (0, o.t)(null == (y = T.props) ? true : y.onAction, N ? () => N(T.key) : true) : true,
    focus: L,
    linkBehavior: P
  }), Z = e => {
    if (!e.currentTarget.contains(e.target) || !n.current || !document.activeElement) return;
    let r = (0, d.QL)(n.current);
    if (r.currentNode = document.activeElement, "expandedKeys" in t && document.activeElement === n.current) {
      if (e.key === h[A] && t.selectionManager.focusedKey === T.key && M && !t.expandedKeys.has(T.key)) {
        t.toggleKey(T.key), e.stopPropagation();
        return
      } else if (e.key === g[A] && t.selectionManager.focusedKey === T.key && M && t.expandedKeys.has(T.key)) {
        t.toggleKey(T.key), e.stopPropagation();
        return
      }
    }
    switch (e.key) {
      case "ArrowLeft":
        if ("arrow" === R) {
          let t = "rtl" === A ? r.nextNode() : r.previousNode();
          if (t) e.preventDefault(), e.stopPropagation(), (0, u.e)(t), (0, a.G)(t, {
            containingElement: (0, s.r)(n.current)
          });
          else if (e.preventDefault(), e.stopPropagation(), "rtl" === A)(0, u.e)(n.current), (0, a.G)(n.current, {
            containingElement: (0, s.r)(n.current)
          });
          else {
            r.currentNode = n.current;
            let e = b(r);
            e && ((0, u.e)(e), (0, a.G)(e, {
              containingElement: (0, s.r)(n.current)
            }))
          }
        }
        break;
      case "ArrowRight":
        if ("arrow" === R) {
          let t = "rtl" === A ? r.previousNode() : r.nextNode();
          if (t) e.preventDefault(), e.stopPropagation(), (0, u.e)(t), (0, a.G)(t, {
            containingElement: (0, s.r)(n.current)
          });
          else if (e.preventDefault(), e.stopPropagation(), "ltr" === A)(0, u.e)(n.current), (0, a.G)(n.current, {
            containingElement: (0, s.r)(n.current)
          });
          else {
            r.currentNode = n.current;
            let e = b(r);
            e && ((0, u.e)(e), (0, a.G)(e, {
              containingElement: (0, s.r)(n.current)
            }))
          }
        }
        break;
      case "ArrowUp":
      case "ArrowDown":
        if (!e.altKey && n.current.contains(e.target)) {
          var i;
          e.stopPropagation(), e.preventDefault(), null == (i = n.current.parentElement) || i.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent))
        }
    }
  }, F = e => {
    if (x.current = T.key, e.target !== n.current) {
      (0, p.E)() || t.selectionManager.setFocusedKey(T.key);
      return
    }
  }, B = e => {
    if (e.currentTarget.contains(e.target) && n.current && document.activeElement && "Tab" === e.key && "tab" === R) {
      let t = (0, d.QL)(n.current, {
        tabbable: true
      });
      t.currentNode = document.activeElement, (e.shiftKey ? t.previousNode() : t.nextNode()) && e.stopPropagation()
    }
  }, V = (0, l.fU)(T.props), H = G.hasAction ? V : {}, Y = (0, c.d)(U, H, {
    role: "row",
    onKeyDownCapture: Z,
    onKeyDown: B,
    onFocus: F,
    "aria-label": T.textValue || true,
    "aria-selected": t.selectionManager.canSelectItem(T.key) ? t.selectionManager.isSelected(T.key) : true,
    "aria-disabled": t.selectionManager.isDisabled(T.key) || true,
    "aria-labelledby": D && T.textValue ? `${(0,r.XQ)(t,T.key)} ${D}` : true,
    id: (0, r.XQ)(t, T.key)
  });
  if (C) {
    let {
      collection: e
    } = t, n = [...e];
    Y["aria-rowindex"] = n.find(e => "section" === e.type) ? [...e.getKeys()].filter(t => {
      var n;
      return (null == (n = e.getItem(t)) ? true : n.type) !== "section"
    }).findIndex(e => e === T.key) + 1 : T.index + 1
  }
  let W = {
    role: "gridcell",
    "aria-colindex": 1
  };
  return {
    rowProps: {
      ...(0, c.d)(Y, j)
    },
    gridCellProps: W,
    descriptionProps: {
      id: D
    },
    ...G
  }
}

function b(e) {
  let t = null,
    n = null;
  do(n = e.lastChild()) && (t = n); while (n);
  return t
}