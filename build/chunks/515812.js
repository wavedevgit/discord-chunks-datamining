/** Chunk was on web.js **/
/** chunk id: 515812, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => p
});
var Chunk916816 = require("./916816.js"),
  Chunk520297 = require("./520297.js"),
  Chunk743994 = require("./743994.js"),
  Chunk327657 = require("./327657.js"),
  Chunk506523 = require("./506523.js"),
  Chunk485119 = require("./485119.js"),
  Chunk288804 = require("./288804.js"),
  Chunk592158 = require("./592158.js"),
  Chunk668774 = require("./668774.js"),
  Chunk545893 = require("./545893.js"),
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
    linkBehavior: S = "action"
  } = e, T = (0, i.tv)();
  t = (0, a.Me)(t);
  let A = e => {
    if ("keyboard" === e.pointerType && (0, r.FJ)(e)) n.toggleSelection(p);
    else {
      if ("none" === n.selectionMode) return;
      if (n.isLink(p)) {
        if ("selection" === S && g.current) {
          let t = n.getItemProps(p);
          T.open(g.current, e, t.href, t.routerOptions), n.setSelectedKeys(n.selectedKeys);
          return
        } else if ("override" === S || "none" === S) return
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
  let N = n.isLink(p) && "override" === S,
    R = n.isLink(p) && "selection" !== S && "none" !== S,
    P = !O && n.canSelectItem(p) && !N,
    w = (v || R) && !O,
    D = w && ("replace" === n.selectionBehavior ? !P : !P || n.isEmpty),
    x = w && P && "replace" === n.selectionBehavior,
    L = D || x,
    j = (0, _.useRef)(null),
    M = L && P,
    k = (0, _.useRef)(false),
    U = (0, _.useRef)(false),
    G = n.getItemProps(p),
    B = e => {
      v && v(), R && g.current && T.open(g.current, e, G.href, G.routerOptions)
    },
    Z = {
      ref: g
    };
  if (E ? (Z.onPressStart = e => {
      j.current = e.pointerType, k.current = M, "keyboard" === e.pointerType && (!L || m()) && A(e)
    }, I ? (Z.onPressUp = D ? true : e => {
      "mouse" === e.pointerType && P && A(e)
    }, Z.onPress = D ? B : e => {
      "keyboard" !== e.pointerType && "mouse" !== e.pointerType && P && A(e)
    }) : Z.onPress = e => {
      D || x && "mouse" !== e.pointerType ? ("keyboard" !== e.pointerType || h()) && B(e) : "keyboard" !== e.pointerType && P && A(e)
    }) : (Z.onPressStart = e => {
      j.current = e.pointerType, k.current = M, U.current = D, P && ("mouse" === e.pointerType && !D || "keyboard" === e.pointerType && (!w || m())) && A(e)
    }, Z.onPress = e => {
      ("touch" === e.pointerType || "pen" === e.pointerType || "virtual" === e.pointerType || "keyboard" === e.pointerType && L && h() || "mouse" === e.pointerType && U.current) && (L ? B(e) : P && A(e))
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
  } = (0, u.r)(Z), H = x ? e => {
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
  }, K = "none" !== S && n.isLink(p) ? e => {
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
    hasAction: L
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