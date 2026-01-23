/** Chunk was on web.js **/
/** chunk id: 404108, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => _
});
var Chunk869795 = require("./869795.js"),
  Chunk132716 = require("./132716.js"),
  Chunk723906 = require("./723906.js"),
  Chunk2799 = require("./2799.js"),
  Chunk803082 = require("./803082.js"),
  Chunk260431 = require("./260431.js"),
  Chunk805447 = require("./805447.js"),
  Chunk8321 = require("./8321.js"),
  Chunk854499 = require("./854499.js"),
  Chunk862836 = require("./862836.js"),
  Chunk64700 = require("./64700.js");

function _(e) {
  let {
    id: t,
    selectionManager: n,
    key: _,
    ref: g,
    shouldSelectOnPressUp: E,
    shouldUseVirtualFocus: y,
    focus: b,
    isDisabled: O,
    onAction: v,
    allowsDifferentPressOrigin: A,
    linkBehavior: I = "action"
  } = e, S = (0, i.rd)();
  t = (0, a.Bi)(t);
  let T = e => {
    if ("keyboard" === e.pointerType && (0, r.N9)(e)) n.toggleSelection(_);
    else {
      if ("none" === n.selectionMode) return;
      if (n.isLink(_)) {
        if ("selection" === I && g.current) {
          let t = n.getItemProps(_);
          S.open(g.current, e, t.href, t.routerOptions), n.setSelectedKeys(n.selectedKeys);
          return
        } else if ("override" === I || "none" === I) return
      }
      "single" === n.selectionMode ? n.isSelected(_) && !n.disallowEmptySelection ? n.toggleSelection(_) : n.replaceSelection(_) : e && e.shiftKey ? n.extendSelection(_) : "toggle" === n.selectionBehavior || e && ((0, s.B)(e) || "touch" === e.pointerType || "virtual" === e.pointerType) ? n.toggleSelection(_) : n.replaceSelection(_)
    }
  };
  (0, p.useEffect)(() => {
    _ === n.focusedKey && n.isFocused && (y ? (0, f.vX)(g.current) : b ? b() : document.activeElement !== g.current && g.current && (0, c.l)(g.current))
  }, [g, _, n.focusedKey, n.childFocusStrategy, n.isFocused, y]), O = O || n.isDisabled(_);
  let C = {};
  y || O ? O && (C.onMouseDown = e => {
    e.preventDefault()
  }) : C = {
    tabIndex: _ === n.focusedKey ? 0 : false,
    onFocus(e) {
      e.target === g.current && n.setFocusedKey(_)
    }
  };
  let N = n.isLink(_) && "override" === I,
    w = v && "action" === e.UNSTABLE_itemBehavior,
    R = n.isLink(_) && "selection" !== I && "none" !== I,
    P = !O && n.canSelectItem(_) && !N && !w,
    D = (v || R) && !O,
    x = D && ("replace" === n.selectionBehavior ? !P : !P || n.isEmpty),
    L = D && P && "replace" === n.selectionBehavior,
    j = x || L,
    M = (0, p.useRef)(null),
    k = j && P,
    U = (0, p.useRef)(false),
    G = (0, p.useRef)(false),
    V = n.getItemProps(_),
    F = e => {
      if (v) {
        var t;
        v(), null == (t = g.current) || t.dispatchEvent(new CustomEvent("react-aria-item-action", {
          bubbles: true
        }))
      }
      R && g.current && S.open(g.current, e, V.href, V.routerOptions)
    },
    B = {
      ref: g
    };
  if (E ? (B.onPressStart = e => {
      M.current = e.pointerType, U.current = k, "keyboard" === e.pointerType && (!j || m()) && T(e)
    }, A ? (B.onPressUp = x ? true : e => {
      "mouse" === e.pointerType && P && T(e)
    }, B.onPress = x ? F : e => {
      "keyboard" !== e.pointerType && "mouse" !== e.pointerType && P && T(e)
    }) : B.onPress = e => {
      x || L && "mouse" !== e.pointerType ? ("keyboard" !== e.pointerType || h()) && F(e) : "keyboard" !== e.pointerType && P && T(e)
    }) : (B.onPressStart = e => {
      M.current = e.pointerType, U.current = k, G.current = x, P && ("mouse" === e.pointerType && !x || "keyboard" === e.pointerType && (!D || m())) && T(e)
    }, B.onPress = e => {
      ("touch" === e.pointerType || "pen" === e.pointerType || "virtual" === e.pointerType || "keyboard" === e.pointerType && j && h() || "mouse" === e.pointerType && G.current) && (j ? F(e) : P && T(e))
    }), C["data-collection"] = (0, r.EG)(n.collection), C["data-key"] = _, B.preventFocusOnPress = y, y && (B = (0, o.v)(B, {
      onPressStart(e) {
        "touch" !== e.pointerType && (n.setFocused(true), n.setFocusedKey(_))
      },
      onPress(e) {
        "touch" === e.pointerType && (n.setFocused(true), n.setFocusedKey(_))
      }
    })), V)
    for (let e of ["onPressStart", "onPressEnd", "onPressChange", "onPress", "onPressUp", "onClick"]) V[e] && (B[e] = (0, l.c)(B[e], V[e]));
  let {
    pressProps: H,
    isPressed: Y
  } = (0, u.d)(B), W = L ? e => {
    "mouse" === M.current && (e.stopPropagation(), e.preventDefault(), F(e))
  } : true, {
    longPressProps: K
  } = (0, d.H)({
    isDisabled: !k,
    onLongPress(e) {
      "touch" === e.pointerType && (T(e), n.setSelectionBehavior("toggle"))
    }
  }), z = e => {
    "touch" === M.current && U.current && e.preventDefault()
  }, q = "none" !== I && n.isLink(_) ? e => {
    i.Fe.isOpening || e.preventDefault()
  } : true;
  return {
    itemProps: (0, o.v)(C, P || x || y && !O ? H : {}, k ? K : {}, {
      onDoubleClick: W,
      onDragStartCapture: z,
      onClick: q,
      id: t
    }, y ? {
      onMouseDown: e => e.preventDefault()
    } : true),
    isPressed: Y,
    isSelected: n.isSelected(_),
    isFocused: n.isFocused && n.focusedKey === _,
    isDisabled: O,
    allowsSelection: P,
    hasAction: j
  }
}

function h() {
  let e = window.event;
  return (null == e ? true : e.key) === "Enter"
}

function m() {
  let e = window.event;
  return (null == e ? true : e.key) === " " || (null == e ? true : e.code) === "Space"
}