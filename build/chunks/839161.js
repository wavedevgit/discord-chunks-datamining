/** Chunk was on web.js **/
/** chunk id: 839161, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => _
});
var Chunk82462 = require("./82462.js"),
  Chunk361637 = require("./361637.js"),
  Chunk938264 = require("./938264.js"),
  Chunk306024 = require("./306024.js"),
  Chunk954085 = require("./954085.js"),
  Chunk993633 = require("./993633.js"),
  Chunk586235 = require("./586235.js"),
  Chunk647438 = require("./647438.js"),
  Chunk960095 = require("./960095.js"),
  Chunk844898 = require("./844898.js");

function _(e, t, n) {
  var _;
  let {
    node: h,
    isVirtualized: m,
    focusMode: g = "child",
    shouldSelectOnPressUp: E,
    onAction: b
  } = e, {
    direction: y
  } = (0, d.j)(), {
    keyboardDelegate: O,
    actions: {
      onCellAction: v
    }
  } = r.B.get(t), I = (0, u.useRef)(null), T = () => {
    if (n.current) {
      let e = (0, o.QL)(n.current);
      if ("child" === g) {
        if (n.current.contains(document.activeElement) && n.current !== document.activeElement) return;
        let r = "last" === t.selectionManager.childFocusStrategy ? p(e) : e.firstChild();
        if (r) return void(0, i.e)(r)
      }(null == I.current || h.key === I.current) && n.current.contains(document.activeElement) || (0, i.e)(n.current)
    }
  }, {
    itemProps: S,
    isPressed: A
  } = (0, f.C)({
    selectionManager: t.selectionManager,
    key: h.key,
    ref: n,
    isVirtualized: m,
    focus: T,
    shouldSelectOnPressUp: E,
    onAction: v ? () => v(h.key) : b,
    isDisabled: 0 === t.collection.size
  }), C = e => {
    var r, a, c, u, d;
    if (!e.currentTarget.contains(e.target) || t.isKeyboardNavigationDisabled || !n.current || !document.activeElement) return;
    let f = (0, o.QL)(n.current);
    switch (f.currentNode = document.activeElement, e.key) {
      case "ArrowLeft": {
        let t = "rtl" === y ? f.nextNode() : f.previousNode();
        if ("child" === g && t === n.current && (t = null), e.preventDefault(), e.stopPropagation(), t)(0, i.e)(t), (0, s.G)(t, {
          containingElement: (0, l.r)(n.current)
        });
        else {
          if ((null == (r = O.getKeyLeftOf) ? true : r.call(O, h.key)) !== h.key) {
            null == (a = n.current.parentElement) || a.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
            break
          }
          "cell" === g && "rtl" === y ? ((0, i.e)(n.current), (0, s.G)(n.current, {
            containingElement: (0, l.r)(n.current)
          })) : (f.currentNode = n.current, (t = "rtl" === y ? f.firstChild() : p(f)) && ((0, i.e)(t), (0, s.G)(t, {
            containingElement: (0, l.r)(n.current)
          })))
        }
        break
      }
      case "ArrowRight": {
        let t = "rtl" === y ? f.previousNode() : f.nextNode();
        if ("child" === g && t === n.current && (t = null), e.preventDefault(), e.stopPropagation(), t)(0, i.e)(t), (0, s.G)(t, {
          containingElement: (0, l.r)(n.current)
        });
        else {
          if ((null == (c = O.getKeyRightOf) ? true : c.call(O, h.key)) !== h.key) {
            null == (u = n.current.parentElement) || u.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
            break
          }
          "cell" === g && "ltr" === y ? ((0, i.e)(n.current), (0, s.G)(n.current, {
            containingElement: (0, l.r)(n.current)
          })) : (f.currentNode = n.current, (t = "rtl" === y ? p(f) : f.firstChild()) && ((0, i.e)(t), (0, s.G)(t, {
            containingElement: (0, l.r)(n.current)
          })))
        }
        break
      }
      case "ArrowUp":
      case "ArrowDown":
        !e.altKey && n.current.contains(e.target) && (e.stopPropagation(), e.preventDefault(), null == (d = n.current.parentElement) || d.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)))
    }
  }, N = e => {
    if (I.current = h.key, e.target !== n.current) {
      (0, a.E)() || t.selectionManager.setFocusedKey(h.key);
      return
    }
    requestAnimationFrame(() => {
      "child" === g && document.activeElement === n.current && T()
    })
  }, R = (0, c.d)(S, {
    role: "gridcell",
    onKeyDownCapture: C,
    "aria-colspan": h.colSpan,
    "aria-colindex": null != h.colIndex ? h.colIndex + 1 : true,
    colSpan: m ? true : h.colSpan,
    onFocus: N
  });
  return m && (R["aria-colindex"] = (null != (_ = h.colIndex) ? _ : h.index) + 1), E && null != R.tabIndex && null == R.onPointerDown && (R.onPointerDown = e => {
    let t = e.currentTarget,
      n = t.getAttribute("tabindex");
    t.removeAttribute("tabindex"), requestAnimationFrame(() => {
      null != n && t.setAttribute("tabindex", n)
    })
  }), {
    gridCellProps: R,
    isPressed: A
  }
}

function p(e) {
  let t = null,
    n = null;
  do(n = e.lastChild()) && (t = n); while (n);
  return t
}