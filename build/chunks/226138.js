/** Chunk was on web.js **/
/** chunk id: 226138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => E
});
var Chunk464780 = require("./464780.js"),
  Chunk677061 = require("./677061.js"),
  Chunk690936 = require("./690936.js"),
  Chunk565963 = require("./565963.js"),
  Chunk470649 = require("./470649.js"),
  Chunk900197 = require("./900197.js"),
  Chunk43341 = require("./43341.js"),
  Chunk495873 = require("./495873.js"),
  Chunk750528 = require("./750528.js"),
  Chunk647438 = require("./647438.js"),
  Chunk521707 = require("./521707.js"),
  Chunk582315 = require("./582315.js"),
  Chunk594886 = require("./594886.js");
let m = {
    ltr: "ArrowRight",
    rtl: "ArrowLeft"
  },
  g = {
    ltr: "ArrowLeft",
    rtl: "ArrowRight"
  };

function E(e, t, n) {
  var E, y, O, v, I, T;
  let {
    node: S,
    isVirtualized: A
  } = e, {
    direction: C
  } = (0, h.j)(), {
    onAction: N,
    linkBehavior: R,
    keyboardNavigationBehavior: P,
    shouldSelectOnPressUp: D
  } = r.Co.get(t), w = (0, i.mp)(), L = (0, f.useRef)(null), x = () => {
    var e;
    null === n.current || (null == L.current || S.key === L.current) && (null == (e = n.current) ? true : e.contains(document.activeElement)) || (0, u.e)(n.current)
  }, M = {}, k = e.hasChildItems, j = t.selectionManager.isLink(S.key);
  if (null != S && "expandedKeys" in t) {
    let e = null == (O = (v = t.collection).getChildren) ? true : O.call(v, S.key);
    k = k || [...null != e ? e : []].length > 1, null == N && !j && "none" === t.selectionManager.selectionMode && k && (N = () => t.toggleKey(S.key));
    let n = k ? t.expandedKeys.has(S.key) : true,
      r = 1;
    if (S.level > 0 && (null == S ? true : S.parentKey) != null) {
      let e = t.collection.getItem(S.parentKey);
      e && (r = [...null == (I = (T = t.collection).getChildren) ? true : I.call(T, e.key)].filter(e => "item" === e.type).length)
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
  } = (0, p.C)({
    selectionManager: t.selectionManager,
    key: S.key,
    ref: n,
    isVirtualized: A,
    shouldSelectOnPressUp: e.shouldSelectOnPressUp || D,
    onAction: N || (null == (E = S.props) ? true : E.onAction) ? (0, a.t)(null == (y = S.props) ? true : y.onAction, N ? () => N(S.key) : true) : true,
    focus: x,
    linkBehavior: R
  }), B = e => {
    if (!e.currentTarget.contains(e.target) || !n.current || !document.activeElement) return;
    let r = (0, d.QL)(n.current);
    if (r.currentNode = document.activeElement, "expandedKeys" in t && document.activeElement === n.current) {
      if (e.key === m[C] && t.selectionManager.focusedKey === S.key && k && !t.expandedKeys.has(S.key)) {
        t.toggleKey(S.key), e.stopPropagation();
        return
      } else if (e.key === g[C] && t.selectionManager.focusedKey === S.key && k && t.expandedKeys.has(S.key)) {
        t.toggleKey(S.key), e.stopPropagation();
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
    if (L.current = S.key, e.target !== n.current) {
      (0, _.E)() || t.selectionManager.setFocusedKey(S.key);
      return
    }
  }, F = e => {
    if (e.currentTarget.contains(e.target) && n.current && document.activeElement && "Tab" === e.key && "tab" === P) {
      let t = (0, d.QL)(n.current, {
        tabbable: true
      });
      t.currentNode = document.activeElement, (e.shiftKey ? t.previousNode() : t.nextNode()) && e.stopPropagation()
    }
  }, V = (0, l.fU)(S.props), H = G.hasAction ? V : {}, Y = (0, c.d)(U, H, {
    role: "row",
    onKeyDownCapture: B,
    onKeyDown: F,
    onFocus: Z,
    "aria-label": S.textValue || true,
    "aria-selected": t.selectionManager.canSelectItem(S.key) ? t.selectionManager.isSelected(S.key) : true,
    "aria-disabled": t.selectionManager.isDisabled(S.key) || true,
    "aria-labelledby": w && S.textValue ? `${(0,r.XQ)(t,S.key)} ${w}` : true,
    id: (0, r.XQ)(t, S.key)
  });
  if (A) {
    let {
      collection: e
    } = t, n = [...e];
    Y["aria-rowindex"] = n.find(e => "section" === e.type) ? [...e.getKeys()].filter(t => {
      var n;
      return (null == (n = e.getItem(t)) ? true : n.type) !== "section"
    }).findIndex(e => e === S.key) + 1 : S.index + 1
  }
  let W = {
    role: "gridcell",
    "aria-colindex": 1
  };
  return {
    rowProps: {
      ...(0, c.d)(Y, M)
    },
    gridCellProps: W,
    descriptionProps: {
      id: w
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