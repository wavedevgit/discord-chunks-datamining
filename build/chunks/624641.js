/** Chunk was on web.js **/
/** chunk id: 624641, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => _
});
var Chunk422037 = require("./422037.js"),
  Chunk601339 = require("./601339.js"),
  Chunk752689 = require("./752689.js"),
  Chunk592840 = require("./592840.js"),
  Chunk158821 = require("./158821.js"),
  Chunk929767 = require("./929767.js"),
  Chunk172395 = require("./172395.js"),
  Chunk226098 = require("./226098.js"),
  Chunk443983 = require("./443983.js"),
  Chunk461960 = require("./461960.js"),
  Chunk473749 = require("./473749.js");

function _(e) {
  let {
    id: t,
    selectionManager: n,
    key: _,
    ref: g,
    shouldSelectOnPressUp: E,
    shouldUseVirtualFocus: b,
    focus: y,
    isDisabled: O,
    onAction: v,
    allowsDifferentPressOrigin: S,
    linkBehavior: I = "action"
  } = e, T = (0, i.tv)();
  t = (0, a.Me)(t);
  let A = e => {
    if ("keyboard" === e.pointerType && (0, r.FJ)(e)) n.toggleSelection(_);
    else {
      if ("none" === n.selectionMode) return;
      if (n.isLink(_)) {
        if ("selection" === I && g.current) {
          let t = n.getItemProps(_);
          T.open(g.current, e, t.href, t.routerOptions), n.setSelectedKeys(n.selectedKeys);
          return
        } else if ("override" === I || "none" === I) return
      }
      "single" === n.selectionMode ? n.isSelected(_) && !n.disallowEmptySelection ? n.toggleSelection(_) : n.replaceSelection(_) : e && e.shiftKey ? n.extendSelection(_) : "toggle" === n.selectionBehavior || e && ((0, o.y)(e) || "touch" === e.pointerType || "virtual" === e.pointerType) ? n.toggleSelection(_) : n.replaceSelection(_)
    }
  };
  (0, p.useEffect)(() => {
    _ === n.focusedKey && n.isFocused && (b ? (0, f.q6)(g.current) : y ? y() : document.activeElement !== g.current && g.current && (0, c.e)(g.current))
  }, [g, _, n.focusedKey, n.childFocusStrategy, n.isFocused, b]), O = O || n.isDisabled(_);
  let C = {};
  b || O ? O && (C.onMouseDown = e => {
    e.preventDefault()
  }) : C = {
    tabIndex: _ === n.focusedKey ? 0 : false,
    onFocus(e) {
      e.target === g.current && n.setFocusedKey(_)
    }
  };
  let N = n.isLink(_) && "override" === I,
    P = v && "action" === e.UNSTABLE_itemBehavior,
    R = n.isLink(_) && "selection" !== I && "none" !== I,
    D = !O && n.canSelectItem(_) && !N && !P,
    w = (v || R) && !O,
    x = w && ("replace" === n.selectionBehavior ? !D : !D || n.isEmpty),
    L = w && D && "replace" === n.selectionBehavior,
    j = x || L,
    M = (0, p.useRef)(null),
    k = j && D,
    U = (0, p.useRef)(false),
    G = (0, p.useRef)(false),
    Z = n.getItemProps(_),
    B = e => {
      if (v) {
        var t;
        v(), null == (t = g.current) || t.dispatchEvent(new CustomEvent("react-aria-item-action", {
          bubbles: true
        }))
      }
      R && g.current && T.open(g.current, e, Z.href, Z.routerOptions)
    },
    F = {
      ref: g
    };
  if (E ? (F.onPressStart = e => {
      M.current = e.pointerType, U.current = k, "keyboard" === e.pointerType && (!j || h()) && A(e)
    }, S ? (F.onPressUp = x ? true : e => {
      "mouse" === e.pointerType && D && A(e)
    }, F.onPress = x ? B : e => {
      "keyboard" !== e.pointerType && "mouse" !== e.pointerType && D && A(e)
    }) : F.onPress = e => {
      x || L && "mouse" !== e.pointerType ? ("keyboard" !== e.pointerType || m()) && B(e) : "keyboard" !== e.pointerType && D && A(e)
    }) : (F.onPressStart = e => {
      M.current = e.pointerType, U.current = k, G.current = x, D && ("mouse" === e.pointerType && !x || "keyboard" === e.pointerType && (!w || h())) && A(e)
    }, F.onPress = e => {
      ("touch" === e.pointerType || "pen" === e.pointerType || "virtual" === e.pointerType || "keyboard" === e.pointerType && j && m() || "mouse" === e.pointerType && G.current) && (j ? B(e) : D && A(e))
    }), C["data-collection"] = (0, r.Zx)(n.collection), C["data-key"] = _, F.preventFocusOnPress = b, b && (F = (0, s.d)(F, {
      onPressStart(e) {
        "touch" !== e.pointerType && (n.setFocused(true), n.setFocusedKey(_))
      },
      onPress(e) {
        "touch" === e.pointerType && (n.setFocused(true), n.setFocusedKey(_))
      }
    })), Z)
    for (let e of ["onPressStart", "onPressEnd", "onPressChange", "onPress", "onPressUp", "onClick"]) Z[e] && (F[e] = (0, l.t)(F[e], Z[e]));
  let {
    pressProps: V,
    isPressed: H
  } = (0, u.r)(F), Y = L ? e => {
    "mouse" === M.current && (e.stopPropagation(), e.preventDefault(), B(e))
  } : true, {
    longPressProps: W
  } = (0, d.T)({
    isDisabled: !k,
    onLongPress(e) {
      "touch" === e.pointerType && (A(e), n.setSelectionBehavior("toggle"))
    }
  }), K = e => {
    "touch" === M.current && U.current && e.preventDefault()
  }, z = "none" !== I && n.isLink(_) ? e => {
    i.nG.isOpening || e.preventDefault()
  } : true;
  return {
    itemProps: (0, s.d)(C, D || x || b && !O ? V : {}, k ? W : {}, {
      onDoubleClick: Y,
      onDragStartCapture: K,
      onClick: z,
      id: t
    }, b ? {
      onMouseDown: e => e.preventDefault()
    } : true),
    isPressed: H,
    isSelected: n.isSelected(_),
    isFocused: n.isFocused && n.focusedKey === _,
    isDisabled: O,
    allowsSelection: D,
    hasAction: j
  }
}

function m() {
  let e = window.event;
  return (null == module ? true : module.key) === "Enter"
}

function h() {
  let e = window.event;
  return (null == module ? true : module.key) === " " || (null == module ? true : module.code) === "Space"
}