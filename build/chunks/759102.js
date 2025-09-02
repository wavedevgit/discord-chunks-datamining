/** Chunk was on web.js **/
/** chunk id: 759102, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => E
});
var Chunk217249 = require("./217249.js"),
  Chunk743994 = require("./743994.js"),
  Chunk485119 = require("./485119.js"),
  Chunk423567 = require("./423567.js"),
  Chunk441525 = require("./441525.js"),
  Chunk520297 = require("./520297.js"),
  Chunk506523 = require("./506523.js"),
  Chunk288804 = require("./288804.js"),
  Chunk255834 = require("./255834.js"),
  Chunk647438 = require("./647438.js"),
  Chunk775282 = require("./775282.js"),
  Chunk515812 = require("./515812.js"),
  Chunk911931 = require("./911931.js");
let m = {
    ltr: "ArrowRight",
    rtl: "ArrowLeft"
  },
  g = {
    ltr: "ArrowLeft",
    rtl: "ArrowRight"
  };

function E(e, t, n) {
  var E, y, O, v, I, S;
  let {
    node: T,
    isVirtualized: A
  } = e, {
    direction: C
  } = (0, h.j)(), {
    onAction: N,
    linkBehavior: R,
    keyboardNavigationBehavior: P,
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
      e && (r = [...null == (I = (S = t.collection).getChildren) ? true : I.call(S, e.key)].filter(e => "item" === e.type).length)
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
  } = (0, p.C)({
    selectionManager: t.selectionManager,
    key: T.key,
    ref: n,
    isVirtualized: A,
    shouldSelectOnPressUp: e.shouldSelectOnPressUp || w,
    onAction: N || (null == (E = T.props) ? true : E.onAction) ? (0, a.t)(null == (y = T.props) ? true : y.onAction, N ? () => N(T.key) : true) : true,
    focus: L,
    linkBehavior: R
  }), B = e => {
    if (!e.currentTarget.contains(e.target) || !n.current || !document.activeElement) return;
    let r = (0, d.QL)(n.current);
    if (r.currentNode = document.activeElement, "expandedKeys" in t && document.activeElement === n.current) {
      if (e.key === m[C] && t.selectionManager.focusedKey === T.key && M && !t.expandedKeys.has(T.key)) {
        t.toggleKey(T.key), e.stopPropagation();
        return
      } else if (e.key === g[C] && t.selectionManager.focusedKey === T.key && M && t.expandedKeys.has(T.key)) {
        t.toggleKey(T.key), e.stopPropagation();
        return
      }
    }
    switch (e.key) {
      case "ArrowLeft":
        if ("arrow" === P) {
          let t = "rtl" === C ? r.nextNode() : r.previousNode();
          if (t) e.preventDefault(), e.stopPropagation(), (0, u.e)(t), (0, o.G)(t, {
            containingElement: (0, s.r)(n.current)
          });
          else if (e.preventDefault(), e.stopPropagation(), "rtl" === C)(0, u.e)(n.current), (0, o.G)(n.current, {
            containingElement: (0, s.r)(n.current)
          });
          else {
            r.currentNode = n.current;
            let e = b(r);
            e && ((0, u.e)(e), (0, o.G)(e, {
              containingElement: (0, s.r)(n.current)
            }))
          }
        }
        break;
      case "ArrowRight":
        if ("arrow" === P) {
          let t = "rtl" === C ? r.previousNode() : r.nextNode();
          if (t) e.preventDefault(), e.stopPropagation(), (0, u.e)(t), (0, o.G)(t, {
            containingElement: (0, s.r)(n.current)
          });
          else if (e.preventDefault(), e.stopPropagation(), "ltr" === C)(0, u.e)(n.current), (0, o.G)(n.current, {
            containingElement: (0, s.r)(n.current)
          });
          else {
            r.currentNode = n.current;
            let e = b(r);
            e && ((0, u.e)(e), (0, o.G)(e, {
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
  }, Z = e => {
    if (x.current = T.key, e.target !== n.current) {
      (0, _.E)() || t.selectionManager.setFocusedKey(T.key);
      return
    }
  }, F = e => {
    if (e.currentTarget.contains(e.target) && n.current && document.activeElement && "Tab" === e.key && "tab" === P) {
      let t = (0, d.QL)(n.current, {
        tabbable: true
      });
      t.currentNode = document.activeElement, (e.shiftKey ? t.previousNode() : t.nextNode()) && e.stopPropagation()
    }
  }, V = (0, l.fU)(T.props), H = G.hasAction ? V : {}, Y = (0, c.d)(U, H, {
    role: "row",
    onKeyDownCapture: B,
    onKeyDown: F,
    onFocus: Z,
    "aria-label": T.textValue || true,
    "aria-selected": t.selectionManager.canSelectItem(T.key) ? t.selectionManager.isSelected(T.key) : true,
    "aria-disabled": t.selectionManager.isDisabled(T.key) || true,
    "aria-labelledby": D && T.textValue ? `${(0,r.XQ)(t,T.key)} ${D}` : true,
    id: (0, r.XQ)(t, T.key)
  });
  if (A) {
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