/** Chunk was on web.js **/
/** chunk id: 795122, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => E
});
var Chunk625557 = require("./625557.js"),
  Chunk723906 = require("./723906.js"),
  Chunk260431 = require("./260431.js"),
  Chunk400606 = require("./400606.js"),
  Chunk150047 = require("./150047.js"),
  Chunk132716 = require("./132716.js"),
  Chunk803082 = require("./803082.js"),
  Chunk805447 = require("./805447.js"),
  Chunk13163 = require("./13163.js"),
  Chunk64700 = require("./64700.js"),
  Chunk885714 = require("./885714.js"),
  Chunk404108 = require("./404108.js"),
  Chunk853590 = require("./853590.js");
let m = {
    ltr: "ArrowRight",
    rtl: "ArrowLeft"
  },
  g = {
    ltr: "ArrowLeft",
    rtl: "ArrowRight"
  };

function E(e, t, n) {
  var E, y, O, A, v, S;
  let {
    node: I,
    isVirtualized: T
  } = e, {
    direction: C
  } = (0, h.Y)(), {
    onAction: N,
    linkBehavior: R,
    keyboardNavigationBehavior: w,
    shouldSelectOnPressUp: P
  } = r.nV.get(t), D = (0, i.X1)(), x = (0, f.useRef)(null), L = () => {
    var e;
    null === n.current || (null == x.current || I.key === x.current) && (null == (e = n.current) ? true : e.contains(document.activeElement)) || (0, u.l)(n.current)
  }, j = {}, M = e.hasChildItems, k = t.selectionManager.isLink(I.key);
  if (null != I && "expandedKeys" in t) {
    let e = null == (O = (A = t.collection).getChildren) ? true : O.call(A, I.key);
    M = M || [...null != e ? e : []].length > 1, null == N && !k && "none" === t.selectionManager.selectionMode && M && (N = () => t.toggleKey(I.key));
    let n = M ? t.expandedKeys.has(I.key) : true,
      r = 1;
    if (I.level > 0 && (null == I ? true : I.parentKey) != null) {
      let e = t.collection.getItem(I.parentKey);
      e && (r = [...null == (v = (S = t.collection).getChildren) ? true : v.call(S, e.key)].filter(e => "item" === e.type).length)
    } else r = [...t.collection].filter(e => 0 === e.level && "item" === e.type).length;
    j = {
      "aria-expanded": n,
      "aria-level": I.level + 1,
      "aria-posinset": (null == I ? true : I.index) + 1,
      "aria-setsize": r
    }
  }
  let {
    itemProps: U,
    ...G
  } = (0, _.p)({
    selectionManager: t.selectionManager,
    key: I.key,
    ref: n,
    isVirtualized: T,
    shouldSelectOnPressUp: e.shouldSelectOnPressUp || P,
    onAction: N || (null == (E = I.props) ? true : E.onAction) ? (0, a.c)(null == (y = I.props) ? true : y.onAction, N ? () => N(I.key) : true) : true,
    focus: L,
    linkBehavior: R
  }), V = e => {
    if (!e.currentTarget.contains(e.target) || !n.current || !document.activeElement) return;
    let r = (0, d.N$)(n.current);
    if (r.currentNode = document.activeElement, "expandedKeys" in t && document.activeElement === n.current) {
      if (e.key === m[C] && t.selectionManager.focusedKey === I.key && M && !t.expandedKeys.has(I.key)) {
        t.toggleKey(I.key), e.stopPropagation();
        return
      } else if (e.key === g[C] && t.selectionManager.focusedKey === I.key && M && t.expandedKeys.has(I.key)) {
        t.toggleKey(I.key), e.stopPropagation();
        return
      }
    }
    switch (e.key) {
      case "ArrowLeft":
        if ("arrow" === w) {
          let t = "rtl" === C ? r.nextNode() : r.previousNode();
          if (t) e.preventDefault(), e.stopPropagation(), (0, u.l)(t), (0, s.o)(t, {
            containingElement: (0, o.m)(n.current)
          });
          else if (e.preventDefault(), e.stopPropagation(), "rtl" === C)(0, u.l)(n.current), (0, s.o)(n.current, {
            containingElement: (0, o.m)(n.current)
          });
          else {
            r.currentNode = n.current;
            let e = b(r);
            e && ((0, u.l)(e), (0, s.o)(e, {
              containingElement: (0, o.m)(n.current)
            }))
          }
        }
        break;
      case "ArrowRight":
        if ("arrow" === w) {
          let t = "rtl" === C ? r.previousNode() : r.nextNode();
          if (t) e.preventDefault(), e.stopPropagation(), (0, u.l)(t), (0, s.o)(t, {
            containingElement: (0, o.m)(n.current)
          });
          else if (e.preventDefault(), e.stopPropagation(), "ltr" === C)(0, u.l)(n.current), (0, s.o)(n.current, {
            containingElement: (0, o.m)(n.current)
          });
          else {
            r.currentNode = n.current;
            let e = b(r);
            e && ((0, u.l)(e), (0, s.o)(e, {
              containingElement: (0, o.m)(n.current)
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
    if (x.current = I.key, e.target !== n.current) {
      (0, p.pP)() || t.selectionManager.setFocusedKey(I.key);
      return
    }
  }, B = e => {
    if (e.currentTarget.contains(e.target) && n.current && document.activeElement && "Tab" === e.key && "tab" === w) {
      let t = (0, d.N$)(n.current, {
        tabbable: true
      });
      t.currentNode = document.activeElement, (e.shiftKey ? t.previousNode() : t.nextNode()) && e.stopPropagation()
    }
  }, H = (0, l.HI)(I.props), Y = G.hasAction ? H : {}, W = (0, c.v)(U, Y, {
    role: "row",
    onKeyDownCapture: V,
    onKeyDown: B,
    onFocus: F,
    "aria-label": I.textValue || true,
    "aria-selected": t.selectionManager.canSelectItem(I.key) ? t.selectionManager.isSelected(I.key) : true,
    "aria-disabled": t.selectionManager.isDisabled(I.key) || true,
    "aria-labelledby": D && I.textValue ? `${(0,r.uk)(t,I.key)} ${D}` : true,
    id: (0, r.uk)(t, I.key)
  });
  if (T) {
    let {
      collection: e
    } = t, n = [...e];
    W["aria-rowindex"] = n.find(e => "section" === e.type) ? [...e.getKeys()].filter(t => {
      var n;
      return (null == (n = e.getItem(t)) ? true : n.type) !== "section"
    }).findIndex(e => e === I.key) + 1 : I.index + 1
  }
  let K = {
    role: "gridcell",
    "aria-colindex": 1
  };
  return {
    rowProps: {
      ...(0, c.v)(W, j)
    },
    gridCellProps: K,
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