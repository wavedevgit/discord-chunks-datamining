/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => A
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(225433),
  o = n(150350);

function A(e) {
  let {
    hasSetEmoji: t,
    onClick: n,
    children: s,
    className: A,
    buttonClassName: c,
    look: d
  } = e, [u, g] = i.useState(!1), f = i.useCallback(() => {
    n(), g(!1)
  }, [n, g]);
  return (0, r.jsxs)("div", {
    className: a()(o.container, A),
    onMouseEnter: () => {
      if (t) {
        g(!0);
        return
      }
      g(!1)
    },
    onMouseLeave: () => {
      g(!1)
    },
    children: [s, t && u ? (0, r.jsx)(l.Z, {
      onClick: f,
      className: a()(o.removeButton, c),
      look: d
    }) : null]
  })
}