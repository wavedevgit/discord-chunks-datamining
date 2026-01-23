/** Chunk was on web.js **/
/** chunk id: 788951, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => p
});
var Chunk966209 = require("./966209.js"),
  Chunk805447 = require("./805447.js"),
  Chunk885714 = require("./885714.js"),
  Chunk13163 = require("./13163.js"),
  Chunk400606 = require("./400606.js"),
  Chunk150047 = require("./150047.js"),
  Chunk803082 = require("./803082.js"),
  Chunk64700 = require("./64700.js"),
  Chunk853590 = require("./853590.js"),
  Chunk404108 = require("./404108.js");

function p(e, t, n) {
  var p;
  let {
    node: h,
    isVirtualized: m,
    focusMode: g = "child",
    shouldSelectOnPressUp: E,
    onAction: y
  } = e, {
    direction: b
  } = (0, d.Y)(), {
    keyboardDelegate: O,
    actions: {
      onCellAction: v
    }
  } = r.B.get(t), A = (0, u.useRef)(null), I = () => {
    if (n.current) {
      let e = (0, s.N$)(n.current);
      if ("child" === g) {
        if (n.current.contains(document.activeElement) && n.current !== document.activeElement) return;
        let r = "last" === t.selectionManager.childFocusStrategy ? _(e) : e.firstChild();
        if (r) return void(0, i.l)(r)
      }(null == A.current || h.key === A.current) && n.current.contains(document.activeElement) || (0, i.l)(n.current)
    }
  }, {
    itemProps: S,
    isPressed: T
  } = (0, f.p)({
    selectionManager: t.selectionManager,
    key: h.key,
    ref: n,
    isVirtualized: m,
    focus: I,
    shouldSelectOnPressUp: E,
    onAction: v ? () => v(h.key) : y,
    isDisabled: 0 === t.collection.size
  }), C = e => {
    var r, a, c, u, d;
    if (!e.currentTarget.contains(e.target) || t.isKeyboardNavigationDisabled || !n.current || !document.activeElement) return;
    let f = (0, s.N$)(n.current);
    switch (f.currentNode = document.activeElement, e.key) {
      case "ArrowLeft": {
        let t = "rtl" === b ? f.nextNode() : f.previousNode();
        if ("child" === g && t === n.current && (t = null), e.preventDefault(), e.stopPropagation(), t)(0, i.l)(t), (0, o.o)(t, {
          containingElement: (0, l.m)(n.current)
        });
        else {
          if ((null == (r = O.getKeyLeftOf) ? true : r.call(O, h.key)) !== h.key) {
            null == (a = n.current.parentElement) || a.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
            break
          }
          "cell" === g && "rtl" === b ? ((0, i.l)(n.current), (0, o.o)(n.current, {
            containingElement: (0, l.m)(n.current)
          })) : (f.currentNode = n.current, (t = "rtl" === b ? f.firstChild() : _(f)) && ((0, i.l)(t), (0, o.o)(t, {
            containingElement: (0, l.m)(n.current)
          })))
        }
        break
      }
      case "ArrowRight": {
        let t = "rtl" === b ? f.previousNode() : f.nextNode();
        if ("child" === g && t === n.current && (t = null), e.preventDefault(), e.stopPropagation(), t)(0, i.l)(t), (0, o.o)(t, {
          containingElement: (0, l.m)(n.current)
        });
        else {
          if ((null == (c = O.getKeyRightOf) ? true : c.call(O, h.key)) !== h.key) {
            null == (u = n.current.parentElement) || u.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
            break
          }
          "cell" === g && "ltr" === b ? ((0, i.l)(n.current), (0, o.o)(n.current, {
            containingElement: (0, l.m)(n.current)
          })) : (f.currentNode = n.current, (t = "rtl" === b ? _(f) : f.firstChild()) && ((0, i.l)(t), (0, o.o)(t, {
            containingElement: (0, l.m)(n.current)
          })))
        }
        break
      }
      case "ArrowUp":
      case "ArrowDown":
        !e.altKey && n.current.contains(e.target) && (e.stopPropagation(), e.preventDefault(), null == (d = n.current.parentElement) || d.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)))
    }
  }, N = e => {
    if (A.current = h.key, e.target !== n.current) {
      (0, a.pP)() || t.selectionManager.setFocusedKey(h.key);
      return
    }
    requestAnimationFrame(() => {
      "child" === g && document.activeElement === n.current && I()
    })
  }, R = (0, c.v)(S, {
    role: "gridcell",
    onKeyDownCapture: C,
    "aria-colspan": h.colSpan,
    "aria-colindex": null != h.colIndex ? h.colIndex + 1 : true,
    colSpan: m ? true : h.colSpan,
    onFocus: N
  });
  return m && (R["aria-colindex"] = (null != (p = h.colIndex) ? p : h.index) + 1), E && null != R.tabIndex && null == R.onPointerDown && (R.onPointerDown = e => {
    let t = e.currentTarget,
      n = t.getAttribute("tabindex");
    t.removeAttribute("tabindex"), requestAnimationFrame(() => {
      null != n && t.setAttribute("tabindex", n)
    })
  }), {
    gridCellProps: R,
    isPressed: T
  }
}

function _(e) {
  let t = null,
    n = null;
  do(n = e.lastChild()) && (t = n); while (n);
  return t
}