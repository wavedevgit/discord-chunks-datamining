/** Chunk was on web.js **/
/** chunk id: 844898, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => p
});
var Chunk606105 = require("./606105.js"),
  Chunk132979 = require("./132979.js"),
  Chunk39807 = require("./39807.js"),
  Chunk885454 = require("./885454.js"),
  Chunk586235 = require("./586235.js"),
  Chunk716601 = require("./716601.js"),
  Chunk361637 = require("./361637.js"),
  Chunk146810 = require("./146810.js"),
  Chunk347991 = require("./347991.js"),
  Chunk373701 = require("./373701.js"),
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
    R = n.isLink(p) && "selection" !== T && "none" !== T,
    P = !O && n.canSelectItem(p) && !N,
    w = (v || R) && !O,
    D = w && ("replace" === n.selectionBehavior ? !P : !P || n.isEmpty),
    L = w && P && "replace" === n.selectionBehavior,
    x = D || L,
    j = (0, _.useRef)(null),
    M = x && P,
    k = (0, _.useRef)(false),
    U = (0, _.useRef)(false),
    G = n.getItemProps(p),
    B = e => {
      v && v(), R && g.current && S.open(g.current, e, G.href, G.routerOptions)
    },
    Z = {
      ref: g
    };
  if (E ? (Z.onPressStart = e => {
      j.current = e.pointerType, k.current = M, "keyboard" === e.pointerType && (!x || m()) && A(e)
    }, I ? (Z.onPressUp = D ? true : e => {
      "mouse" === e.pointerType && P && A(e)
    }, Z.onPress = D ? B : e => {
      "keyboard" !== e.pointerType && "mouse" !== e.pointerType && P && A(e)
    }) : Z.onPress = e => {
      D || L && "mouse" !== e.pointerType ? ("keyboard" !== e.pointerType || h()) && B(e) : "keyboard" !== e.pointerType && P && A(e)
    }) : (Z.onPressStart = e => {
      j.current = e.pointerType, k.current = M, U.current = D, P && ("mouse" === e.pointerType && !D || "keyboard" === e.pointerType && (!w || m())) && A(e)
    }, Z.onPress = e => {
      ("touch" === e.pointerType || "pen" === e.pointerType || "virtual" === e.pointerType || "keyboard" === e.pointerType && x && h() || "mouse" === e.pointerType && U.current) && (x ? B(e) : P && A(e))
    }), C["data-collection"] = (0, r.Zx)(n.collection), C["data-key"] = p, Z.preventFocusOnPress = b, b && (Z = (0, s.d)(Z, {
      onPressStart(e) {
        "touch" !== e.pointerType && (n.setFocused(true), n.setFocusedKey(p))
      },
      onPress(e) {
        "touch" === e.pointerType && (n.setFocused(true), n.setFocusedKey(p))
      }
    })), G)
    for (let e of ["onPressStart", "onPressEnd", "onPressChange", "onPress", "onPressUp", "onClick"]) G[e] && (Z[e] = (0, l.t)(Z[e], G[e]));
  let {
    pressProps: F,
    isPressed: V
  } = (0, u.r)(Z), H = L ? e => {
    "mouse" === j.current && (e.stopPropagation(), e.preventDefault(), B(e))
  } : true, {
    longPressProps: Y
  } = (0, d.T)({
    isDisabled: !M,
    onLongPress(e) {
      "touch" === e.pointerType && (A(e), n.setSelectionBehavior("toggle"))
    }
  }), W = e => {
    "touch" === j.current && k.current && e.preventDefault()
  }, K = "none" !== T && n.isLink(p) ? e => {
    i.nG.isOpening || e.preventDefault()
  } : true;
  return {
    itemProps: (0, s.d)(C, P || D || b && !O ? F : {}, M ? Y : {}, {
      onDoubleClick: H,
      onDragStartCapture: W,
      onClick: K,
      id: t
    }, b ? {
      onMouseDown: e => e.preventDefault()
    } : true),
    isPressed: V,
    isSelected: n.isSelected(p),
    isFocused: n.isFocused && n.focusedKey === p,
    isDisabled: O,
    allowsSelection: P,
    hasAction: x
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