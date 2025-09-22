/** Chunk was on web.js **/
/** chunk id: 82927, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => _
});
var Chunk173213 = require("./173213.js"),
  Chunk533339 = require("./533339.js"),
  Chunk459613 = require("./459613.js"),
  Chunk362602 = require("./362602.js"),
  Chunk87624 = require("./87624.js"),
  Chunk795074 = require("./795074.js"),
  Chunk816187 = require("./816187.js"),
  Chunk506364 = require("./506364.js"),
  Chunk804970 = require("./804970.js"),
  Chunk647438 = require("./647438.js");

function _(e) {
  let {
    id: t,
    selectionManager: n,
    key: _,
    ref: m,
    shouldSelectOnPressUp: g,
    shouldUseVirtualFocus: E,
    focus: b,
    isDisabled: y,
    onAction: O,
    allowsDifferentPressOrigin: v,
    linkBehavior: I = "action"
  } = e, T = (0, s.tv)();
  t = (0, l.Me)(t);
  let S = e => {
    if ("keyboard" === e.pointerType && (0, r.FJ)(e)) n.toggleSelection(_);
    else {
      if ("none" === n.selectionMode) return;
      if (n.isLink(_)) {
        if ("selection" === I && m.current) {
          let t = n.getItemProps(_);
          T.open(m.current, e, t.href, t.routerOptions), n.setSelectedKeys(n.selectedKeys);
          return
        } else if ("override" === I || "none" === I) return
      }
      "single" === n.selectionMode ? n.isSelected(_) && !n.disallowEmptySelection ? n.toggleSelection(_) : n.replaceSelection(_) : e && e.shiftKey ? n.extendSelection(_) : "toggle" === n.selectionBehavior || e && ((0, c.y)(e) || "touch" === e.pointerType || "virtual" === e.pointerType) ? n.toggleSelection(_) : n.replaceSelection(_)
    }
  };
  (0, f.useEffect)(() => {
    _ === n.focusedKey && n.isFocused && (E ? (0, d.q6)(m.current) : b ? b() : document.activeElement !== m.current && m.current && (0, i.e)(m.current))
  }, [m, _, n.focusedKey, n.childFocusStrategy, n.isFocused, E]), y = y || n.isDisabled(_);
  let A = {};
  E || y ? y && (A.onMouseDown = e => {
    e.preventDefault()
  }) : A = {
    tabIndex: _ === n.focusedKey ? 0 : false,
    onFocus(e) {
      e.target === m.current && n.setFocusedKey(_)
    }
  };
  let C = n.isLink(_) && "override" === I,
    N = n.isLink(_) && "selection" !== I && "none" !== I,
    R = !y && n.canSelectItem(_) && !C,
    P = (O || N) && !y,
    w = P && ("replace" === n.selectionBehavior ? !R : !R || n.isEmpty),
    D = P && R && "replace" === n.selectionBehavior,
    x = w || D,
    L = (0, f.useRef)(null),
    j = x && R,
    M = (0, f.useRef)(false),
    k = (0, f.useRef)(false),
    U = e => {
      if (O && O(), N && m.current) {
        let t = n.getItemProps(_);
        T.open(m.current, e, t.href, t.routerOptions)
      }
    },
    G = {};
  g ? (G.onPressStart = e => {
    L.current = e.pointerType, M.current = j, "keyboard" === e.pointerType && (!x || h()) && S(e)
  }, v ? (G.onPressUp = w ? true : e => {
    "mouse" === e.pointerType && R && S(e)
  }, G.onPress = w ? U : e => {
    "keyboard" !== e.pointerType && "mouse" !== e.pointerType && R && S(e)
  }) : G.onPress = e => {
    w || D && "mouse" !== e.pointerType ? ("keyboard" !== e.pointerType || p()) && U(e) : "keyboard" !== e.pointerType && R && S(e)
  }) : (G.onPressStart = e => {
    L.current = e.pointerType, M.current = j, k.current = w, R && ("mouse" === e.pointerType && !w || "keyboard" === e.pointerType && (!P || h())) && S(e)
  }, G.onPress = e => {
    ("touch" === e.pointerType || "pen" === e.pointerType || "virtual" === e.pointerType || "keyboard" === e.pointerType && x && p() || "mouse" === e.pointerType && k.current) && (x ? U(e) : R && S(e))
  }), A["data-collection"] = (0, r.Zx)(n.collection), A["data-key"] = _, G.preventFocusOnPress = E, E && (G = (0, u.d)(G, {
    onPressStart(e) {
      "touch" !== e.pointerType && (n.setFocused(true), n.setFocusedKey(_))
    },
    onPress(e) {
      "touch" === e.pointerType && (n.setFocused(true), n.setFocusedKey(_))
    }
  }));
  let {
    pressProps: B,
    isPressed: Z
  } = (0, a.r)(G), F = D ? e => {
    "mouse" === L.current && (e.stopPropagation(), e.preventDefault(), U(e))
  } : true, {
    longPressProps: V
  } = (0, o.T)({
    isDisabled: !j,
    onLongPress(e) {
      "touch" === e.pointerType && (S(e), n.setSelectionBehavior("toggle"))
    }
  }), H = e => {
    "touch" === L.current && M.current && e.preventDefault()
  }, Y = n.isLink(_) ? e => {
    s.nG.isOpening || e.preventDefault()
  } : true;
  return {
    itemProps: (0, u.d)(A, R || w || E ? B : {}, j ? V : {}, {
      onDoubleClick: F,
      onDragStartCapture: H,
      onClick: Y,
      id: t
    }, E ? {
      onMouseDown: e => e.preventDefault()
    } : true),
    isPressed: Z,
    isSelected: n.isSelected(_),
    isFocused: n.isFocused && n.focusedKey === _,
    isDisabled: y,
    allowsSelection: R,
    hasAction: x
  }
}

function p() {
  let e = window.event;
  return (null == module ? true : module.key) === "Enter"
}

function h() {
  let e = window.event;
  return (null == module ? true : module.key) === " " || (null == module ? true : module.code) === "Space"
}