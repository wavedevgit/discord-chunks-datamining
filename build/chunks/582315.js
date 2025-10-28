/** Chunk was on web.js **/
/** chunk id: 582315, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => p
});
var Chunk363343 = require("./363343.js"),
  Chunk900197 = require("./900197.js"),
  Chunk677061 = require("./677061.js"),
  Chunk111663 = require("./111663.js"),
  Chunk43341 = require("./43341.js"),
  Chunk690936 = require("./690936.js"),
  Chunk495873 = require("./495873.js"),
  Chunk647199 = require("./647199.js"),
  Chunk10380 = require("./10380.js"),
  Chunk519878 = require("./519878.js"),
  Chunk647438 = require("./647438.js");

function p(e) {
  let {
    id: t,
    selectionManager: n,
    key: p,
    ref: g,
    shouldSelectOnPressUp: E,
    shouldUseVirtualFocus: b,
    focus: y,
    isDisabled: O,
    onAction: v,
    allowsDifferentPressOrigin: I,
    linkBehavior: T = "action"
  } = e, S = (0, i.tv)();
  t = (0, a.Me)(t);
  let A = e => {
    if ("keyboard" === e.pointerType && (0, r.FJ)(e)) n.toggleSelection(p);
    else {
      if ("none" === n.selectionMode) return;
      if (n.isLink(p)) {
        if ("selection" === T && g.current) {
          let t = n.getItemProps(p);
          S.open(g.current, e, t.href, t.routerOptions), n.setSelectedKeys(n.selectedKeys);
          return
        } else if ("override" === T || "none" === T) return
      }
      "single" === n.selectionMode ? n.isSelected(p) && !n.disallowEmptySelection ? n.toggleSelection(p) : n.replaceSelection(p) : e && e.shiftKey ? n.extendSelection(p) : "toggle" === n.selectionBehavior || e && ((0, o.y)(e) || "touch" === e.pointerType || "virtual" === e.pointerType) ? n.toggleSelection(p) : n.replaceSelection(p)
    }
  };
  (0, _.useEffect)(() => {
    p === n.focusedKey && n.isFocused && (b ? (0, f.q6)(g.current) : y ? y() : document.activeElement !== g.current && g.current && (0, c.e)(g.current))
  }, [g, p, n.focusedKey, n.childFocusStrategy, n.isFocused, b]), O = O || n.isDisabled(p);
  let C = {};
  b || O ? O && (C.onMouseDown = e => {
    e.preventDefault()
  }) : C = {
    tabIndex: p === n.focusedKey ? 0 : false,
    onFocus(e) {
      e.target === g.current && n.setFocusedKey(p)
    }
  };
  let N = n.isLink(p) && "override" === T,
    R = v && "action" === e.UNSTABLE_itemBehavior,
    P = n.isLink(p) && "selection" !== T && "none" !== T,
    w = !O && n.canSelectItem(p) && !N && !R,
    D = (v || P) && !O,
    L = D && ("replace" === n.selectionBehavior ? !w : !w || n.isEmpty),
    x = D && w && "replace" === n.selectionBehavior,
    M = L || x,
    k = (0, _.useRef)(null),
    j = M && w,
    U = (0, _.useRef)(false),
    G = (0, _.useRef)(false),
    B = n.getItemProps(p),
    Z = e => {
      if (v) {
        var t;
        v(), null == (t = g.current) || t.dispatchEvent(new CustomEvent("react-aria-item-action", {
          bubbles: true
        }))
      }
      P && g.current && S.open(g.current, e, B.href, B.routerOptions)
    },
    F = {
      ref: g
    };
  if (E ? (F.onPressStart = e => {
      k.current = e.pointerType, U.current = j, "keyboard" === e.pointerType && (!M || m()) && A(e)
    }, I ? (F.onPressUp = L ? true : e => {
      "mouse" === e.pointerType && w && A(e)
    }, F.onPress = L ? Z : e => {
      "keyboard" !== e.pointerType && "mouse" !== e.pointerType && w && A(e)
    }) : F.onPress = e => {
      L || x && "mouse" !== e.pointerType ? ("keyboard" !== e.pointerType || h()) && Z(e) : "keyboard" !== e.pointerType && w && A(e)
    }) : (F.onPressStart = e => {
      k.current = e.pointerType, U.current = j, G.current = L, w && ("mouse" === e.pointerType && !L || "keyboard" === e.pointerType && (!D || m())) && A(e)
    }, F.onPress = e => {
      ("touch" === e.pointerType || "pen" === e.pointerType || "virtual" === e.pointerType || "keyboard" === e.pointerType && M && h() || "mouse" === e.pointerType && G.current) && (M ? Z(e) : w && A(e))
    }), C["data-collection"] = (0, r.Zx)(n.collection), C["data-key"] = p, F.preventFocusOnPress = b, b && (F = (0, s.d)(F, {
      onPressStart(e) {
        "touch" !== e.pointerType && (n.setFocused(true), n.setFocusedKey(p))
      },
      onPress(e) {
        "touch" === e.pointerType && (n.setFocused(true), n.setFocusedKey(p))
      }
    })), B)
    for (let e of ["onPressStart", "onPressEnd", "onPressChange", "onPress", "onPressUp", "onClick"]) B[e] && (F[e] = (0, l.t)(F[e], B[e]));
  let {
    pressProps: V,
    isPressed: H
  } = (0, u.r)(F), Y = x ? e => {
    "mouse" === k.current && (e.stopPropagation(), e.preventDefault(), Z(e))
  } : true, {
    longPressProps: W
  } = (0, d.T)({
    isDisabled: !j,
    onLongPress(e) {
      "touch" === e.pointerType && (A(e), n.setSelectionBehavior("toggle"))
    }
  }), K = e => {
    "touch" === k.current && U.current && e.preventDefault()
  }, z = "none" !== T && n.isLink(p) ? e => {
    i.nG.isOpening || e.preventDefault()
  } : true;
  return {
    itemProps: (0, s.d)(C, w || L || b && !O ? V : {}, j ? W : {}, {
      onDoubleClick: Y,
      onDragStartCapture: K,
      onClick: z,
      id: t
    }, b ? {
      onMouseDown: e => e.preventDefault()
    } : true),
    isPressed: H,
    isSelected: n.isSelected(p),
    isFocused: n.isFocused && n.focusedKey === p,
    isDisabled: O,
    allowsSelection: w,
    hasAction: M
  }
}

function h() {
  let e = window.event;
  return (null == module ? true : module.key) === "Enter"
}

function m() {
  let e = window.event;
  return (null == module ? true : module.key) === " " || (null == module ? true : module.code) === "Space"
}