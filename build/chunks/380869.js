/** Chunk was on web.js **/
/** chunk id: 380869, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => l
});
var Chunk605294 = require("./605294.js"),
  Chunk158821 = require("./158821.js"),
  Chunk227399 = require("./227399.js"),
  Chunk473749 = require("./473749.js"),
  Chunk226098 = require("./226098.js");

function l(e, t, n) {
  let {
    direction: l
  } = (0, o.j)(), u = (0, a.useMemo)(() => (0, r.E7)(t), [t]), d = r => {
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
      i = (0, r.QL)(t.current, {
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
  } = (0, s.r)({
    preventFocusOnPress: true,
    allowTextSelectionOnPress: true,
    onPressStart(e) {
      "mouse" === e.pointerType && f()
    },
    onPress(e) {
      ("touch" === e.pointerType || "pen" === e.pointerType) && f()
    }
  });
  return (0, i.d)(p, {
    onKeyDown: d
  })
}

function c(e, t, n) {
  let i = (0, r.QL)(e, {
      tabbable: true
    }),
    o = i.nextNode(),
    a = null,
    s = 1 / 0;
  for (; o;) {
    let e = o.getBoundingClientRect().left - t,
      r = Math.abs(e);
    Math.sign(e) === n && r < s && (a = o, s = r), o = i.nextNode()
  }
  return a
}