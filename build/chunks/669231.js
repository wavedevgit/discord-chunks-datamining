/** Chunk was on 33622 **/
/** chunk id: 669231, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  H: () => l
});
var Chunk750528 = require("./750528.js"),
  Chunk43341 = require("./43341.js"),
  Chunk594886 = require("./594886.js"),
  Chunk647438 = require("./647438.js"),
  Chunk647199 = require("./647199.js");

function l(e, a, t) {
  let {
    direction: l
  } = (0, r.j)(), d = (0, i.useMemo)(() => (0, u.E7)(a), [a]), c = () => {
    var e;
    if (!a.current) return;
    let t = null == (e = window.event) ? true : e.target,
      n = (0, u.QL)(a.current, {
        tabbable: true
      });
    if (t && (n.currentNode = t, t = n.previousNode()), !t) {
      let e;
      do(e = n.lastChild()) && (t = e); while (e)
    }
    for (; null == t ? true : t.hasAttribute("data-placeholder");) {
      let e = n.previousNode();
      if (e && e.hasAttribute("data-placeholder")) t = e;
      else break
    }
    t && t.focus()
  }, {
    pressProps: m
  } = (0, o.r)({
    preventFocusOnPress: true,
    allowTextSelectionOnPress: true,
    onPressStart(e) {
      "mouse" === e.pointerType && c()
    },
    onPress(e) {
      ("touch" === e.pointerType || "pen" === e.pointerType) && c()
    }
  });
  return (0, n.d)(m, {
    onKeyDown: u => {
      if (u.currentTarget.contains(u.target) && (u.altKey && ("ArrowDown" === u.key || "ArrowUp" === u.key) && "setOpen" in e && (u.preventDefault(), u.stopPropagation(), e.setOpen(true)), !t)) switch (u.key) {
        case "ArrowLeft":
          if (u.preventDefault(), u.stopPropagation(), "rtl" === l) {
            if (a.current) {
              let e = u.target,
                t = s(a.current, e.getBoundingClientRect().left, false);
              t && t.focus()
            }
          } else d.focusPrevious();
          break;
        case "ArrowRight":
          if (u.preventDefault(), u.stopPropagation(), "rtl" === l) {
            if (a.current) {
              let e = u.target,
                t = s(a.current, e.getBoundingClientRect().left, 1);
              t && t.focus()
            }
          } else d.focusNext()
      }
    }
  })
}

function s(e, a, t) {
  let n = (0, u.QL)(e, {
      tabbable: true
    }),
    r = n.nextNode(),
    i = null,
    o = 1 / 0;
  for (; r;) {
    let e = r.getBoundingClientRect().left - a,
      u = Math.abs(e);
    Math.sign(e) === t && u < o && (i = r, o = u), r = n.nextNode()
  }
  return i
}