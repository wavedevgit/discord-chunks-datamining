/** Chunk was on web.js **/
/** chunk id: 675981, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => _
});
var Chunk952628 = require("./952628.js"),
  Chunk495873 = require("./495873.js"),
  Chunk521707 = require("./521707.js"),
  Chunk750528 = require("./750528.js"),
  Chunk565963 = require("./565963.js"),
  Chunk470649 = require("./470649.js"),
  Chunk43341 = require("./43341.js"),
  Chunk647438 = require("./647438.js"),
  Chunk594886 = require("./594886.js"),
  Chunk582315 = require("./582315.js");

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
  } = r.B.get(t), I = (0, u.useRef)(null), S = () => {
    if (n.current) {
      let e = (0, o.QL)(n.current);
      if ("child" === g) {
        if (n.current.contains(document.activeElement) && n.current !== document.activeElement) return;
        let r = "last" === t.selectionManager.childFocusStrategy ? p(e) : e.firstChild();
        if (r) return void(0, i.e)(r)
      }(null == I.current || h.key === I.current) && n.current.contains(document.activeElement) || (0, i.e)(n.current)
    }
  }, {
    itemProps: T,
    isPressed: A
  } = (0, f.C)({
    selectionManager: t.selectionManager,
    key: h.key,
    ref: n,
    isVirtualized: m,
    focus: S,
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
      "child" === g && document.activeElement === n.current && S()
    })
  }, R = (0, c.d)(T, {
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