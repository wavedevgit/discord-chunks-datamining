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
  var E, b, O, v, A, I;
  let {
    node: S,
    isVirtualized: T
  } = e, {
    direction: C
  } = (0, h.Y)(), {
    onAction: N,
    linkBehavior: w,
    keyboardNavigationBehavior: R,
    shouldSelectOnPressUp: P
  } = r.nV.get(t), D = (0, i.X1)(), L = (0, f.useRef)(null), x = () => {
    var e;
    null === n.current || (null == L.current || S.key === L.current) && (null == (e = n.current) ? true : e.contains(document.activeElement)) || (0, u.l)(n.current)
  }, M = {}, j = e.hasChildItems, k = t.selectionManager.isLink(S.key);
  if (null != S && "expandedKeys" in t) {
    let e = null == (O = (v = t.collection).getChildren) ? true : O.call(v, S.key);
    j = j || [...null != e ? e : []].length > 1, null == N && !k && "none" === t.selectionManager.selectionMode && j && (N = () => t.toggleKey(S.key));
    let n = j ? t.expandedKeys.has(S.key) : true,
      r = 1;
    if (S.level > 0 && (null == S ? true : S.parentKey) != null) {
      let e = t.collection.getItem(S.parentKey);
      e && (r = [...null == (A = (I = t.collection).getChildren) ? true : A.call(I, e.key)].filter(e => "item" === e.type).length)
    } else r = [...t.collection].filter(e => 0 === e.level && "item" === e.type).length;
    M = {
      "aria-expanded": n,
      "aria-level": S.level + 1,
      "aria-posinset": (null == S ? true : S.index) + 1,
      "aria-setsize": r
    }
  }
  let {
    itemProps: U,
    ...G
  } = (0, _.p)({
    selectionManager: t.selectionManager,
    key: S.key,
    ref: n,
    isVirtualized: T,
    shouldSelectOnPressUp: e.shouldSelectOnPressUp || P,
    onAction: N || (null == (E = S.props) ? true : E.onAction) ? (0, a.c)(null == (b = S.props) ? true : b.onAction, N ? () => N(S.key) : true) : true,
    focus: x,
    linkBehavior: w
  }), F = e => {
    if (!e.currentTarget.contains(e.target) || !n.current || !document.activeElement) return;
    let r = (0, d.N$)(n.current);
    if (r.currentNode = document.activeElement, "expandedKeys" in t && document.activeElement === n.current) {
      if (e.key === m[C] && t.selectionManager.focusedKey === S.key && j && !t.expandedKeys.has(S.key)) {
        t.toggleKey(S.key), e.stopPropagation();
        return
      } else if (e.key === g[C] && t.selectionManager.focusedKey === S.key && j && t.expandedKeys.has(S.key)) {
        t.toggleKey(S.key), e.stopPropagation();
        return
      }
    }
    switch (e.key) {
      case "ArrowLeft":
        if ("arrow" === R) {
          let t = "rtl" === C ? r.nextNode() : r.previousNode();
          if (t) e.preventDefault(), e.stopPropagation(), (0, u.l)(t), (0, o.o)(t, {
            containingElement: (0, s.m)(n.current)
          });
          else if (e.preventDefault(), e.stopPropagation(), "rtl" === C)(0, u.l)(n.current), (0, o.o)(n.current, {
            containingElement: (0, s.m)(n.current)
          });
          else {
            r.currentNode = n.current;
            let e = y(r);
            e && ((0, u.l)(e), (0, o.o)(e, {
              containingElement: (0, s.m)(n.current)
            }))
          }
        }
        break;
      case "ArrowRight":
        if ("arrow" === R) {
          let t = "rtl" === C ? r.previousNode() : r.nextNode();
          if (t) e.preventDefault(), e.stopPropagation(), (0, u.l)(t), (0, o.o)(t, {
            containingElement: (0, s.m)(n.current)
          });
          else if (e.preventDefault(), e.stopPropagation(), "ltr" === C)(0, u.l)(n.current), (0, o.o)(n.current, {
            containingElement: (0, s.m)(n.current)
          });
          else {
            r.currentNode = n.current;
            let e = y(r);
            e && ((0, u.l)(e), (0, o.o)(e, {
              containingElement: (0, s.m)(n.current)
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
  }, V = e => {
    if (L.current = S.key, e.target !== n.current) {
      (0, p.pP)() || t.selectionManager.setFocusedKey(S.key);
      return
    }
  }, B = e => {
    if (e.currentTarget.contains(e.target) && n.current && document.activeElement && "Tab" === e.key && "tab" === R) {
      let t = (0, d.N$)(n.current, {
        tabbable: true
      });
      t.currentNode = document.activeElement, (e.shiftKey ? t.previousNode() : t.nextNode()) && e.stopPropagation()
    }
  }, H = (0, l.HI)(S.props), Y = G.hasAction ? H : {}, W = (0, c.v)(U, Y, {
    role: "row",
    onKeyDownCapture: F,
    onKeyDown: B,
    onFocus: V,
    "aria-label": S.textValue || true,
    "aria-selected": t.selectionManager.canSelectItem(S.key) ? t.selectionManager.isSelected(S.key) : true,
    "aria-disabled": t.selectionManager.isDisabled(S.key) || true,
    "aria-labelledby": D && S.textValue ? `${(0,r.uk)(t,S.key)} ${D}` : true,
    id: (0, r.uk)(t, S.key)
  });
  if (T) {
    let {
      collection: e
    } = t, n = [...e];
    W["aria-rowindex"] = n.find(e => "section" === e.type) ? [...e.getKeys()].filter(t => {
      var n;
      return (null == (n = e.getItem(t)) ? true : n.type) !== "section"
    }).findIndex(e => e === S.key) + 1 : S.index + 1
  }
  let K = {
    role: "gridcell",
    "aria-colindex": 1
  };
  return {
    rowProps: {
      ...(0, c.v)(W, M)
    },
    gridCellProps: K,
    descriptionProps: {
      id: D
    },
    ...G
  }
}

function y(e) {
  let t = null,
    n = null;
  do(n = e.lastChild()) && (t = n); while (n);
  return t
}