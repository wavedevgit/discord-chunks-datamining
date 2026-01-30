/** Chunk was on 49559 **/
/** chunk id: 383797, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(e) {
  let {
    components: t,
    accentColor: n,
    spoiler: a,
    renderComponents: p
  } = e, [m, f] = l.useState(a), [O, b] = l.useState(a);
  a !== m && (f(a), b(a));
  let y = e => (0, r.jsx)(c.O7.AutoMeasuredNestedContainer, {
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
        children: p(t)
      })
    })
  });
  return null == t || 0 === t.length ? null : a ? (0, r.jsx)(s.Ay, {
    type: s.Ay.Types.ATTACHMENT,
    reason: o.Oc.SPOILER,
    obscured: O,
    onToggleObscurity: () => b(e => !e),
    children: e => y(e)
  }) : y(false)
}