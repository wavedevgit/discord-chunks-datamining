/** Chunk was on web.js **/
/** chunk id: 185288, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => l
});
var Chunk13163 = require("./13163.js"),
  Chunk803082 = require("./803082.js"),
  Chunk853590 = require("./853590.js"),
  Chunk64700 = require("./64700.js"),
  Chunk8321 = require("./8321.js");

function l(e, t, n) {
  let {
    direction: l
  } = (0, a.Y)(), u = (0, s.useMemo)(() => (0, r.C7)(t), [t]), d = r => {
    if (r.currentTarget.contains(r.target) && (r.altKey && ("ArrowDown" === r.key || "ArrowUp" === r.key) && "setOpen" in e && (r.preventDefault(), r.stopPropagation(), e.setOpen(true)), !n)) switch (r.key) {
      case "ArrowLeft":
        if (r.preventDefault(), r.stopPropagation(), "rtl" === l) {
          if (t.current) {
            let e = r.target,
              n = c(t.current, e.getBoundingClientRect().left, false);
            n && n.focus()
          }
        } else u.focusPrevious();
        break;
      case "ArrowRight":
        if (r.preventDefault(), r.stopPropagation(), "rtl" === l) {
          if (t.current) {
            let e = r.target,
              n = c(t.current, e.getBoundingClientRect().left, 1);
            n && n.focus()
          }
        } else u.focusNext()
    }
  }, f = () => {
    var e;
    if (!t.current) return;
    let n = null == (e = window.event) ? true : e.target,
      i = (0, r.N$)(t.current, {
        tabbable: true
      });
    if (n && (i.currentNode = n, n = i.previousNode()), !n) {
      let e;
      do(e = i.lastChild()) && (n = e); while (e)
    }
    for (; null == n ? true : n.hasAttribute("data-placeholder");) {
      let e = i.previousNode();
      if (e && e.hasAttribute("data-placeholder")) n = e;
      else break
    }
    n && n.focus()
  }, {
    pressProps: p
  } = (0, o.d)({
    preventFocusOnPress: true,
    allowTextSelectionOnPress: true,
    onPressStart(e) {
      "mouse" === e.pointerType && f()
    },
    onPress(e) {
      ("touch" === e.pointerType || "pen" === e.pointerType) && f()
    }
  });
  return (0, i.v)(p, {
    onKeyDown: d
  })
}

function c(e, t, n) {
  let i = (0, r.N$)(e, {
      tabbable: true
    }),
    a = i.nextNode(),
    s = null,
    o = 1 / 0;
  for (; a;) {
    let e = a.getBoundingClientRect().left - t,
      r = Math.abs(e);
    Math.sign(e) === n && r < o && (s = a, o = r), a = i.nextNode()
  }
  return s
}