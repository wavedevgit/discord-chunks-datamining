/** Chunk was on 20941 **/
/** chunk id: 383797, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk338717 = require("./338717.js"),
  Chunk302031 = require("./302031.jsx"),
  Chunk953756 = require("./953756.jsx"),
  Chunk647901 = require("./647901.jsx"),
  Chunk612089 = require("./612089.js");

function m(e) {
  let {
    components: t,
    accentColor: n,
    spoiler: a,
    renderComponents: m
  } = e, [f, p] = l.useState(a), [h, b] = l.useState(a);
  a !== f && (p(a), b(a));
  let g = e => (0, r.jsx)(c.O7.AutoMeasuredNestedContainer, {
    children: l => (0, r.jsx)("div", {
      ref: l,
      className: i()(d.kL, {
        [d.dK]: e,
        [d._7]: null != n
      }),
      style: {
        "--__accent-color": n
      },
      children: (0, r.jsx)(u.x, {
        size: "reduced",
        children: m(t)
      })
    })
  });
  return null == t || 0 === t.length ? null : a ? (0, r.jsx)(o.Ay, {
    type: o.Ay.Types.ATTACHMENT,
    reason: s.Oc.SPOILER,
    obscured: h,
    onToggleObscurity: () => b(e => !e),
    children: e => g(e)
  }) : g(false)
}