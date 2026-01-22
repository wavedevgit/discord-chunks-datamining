/** Chunk was on web.js **/
/** chunk id: 383797, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk338717 = require("./338717.js"),
  Chunk302031 = require("./302031.jsx"),
  Chunk953756 = require("./953756.jsx"),
  Chunk647901 = require("./647901.jsx"),
  Chunk612089 = require("./612089.js");

function f(e) {
  let {
    components: t,
    accentColor: n,
    spoiler: a,
    renderComponents: f
  } = e, [p, _] = i.useState(a), [h, m] = i.useState(a);
  a !== p && (_(a), m(a));
  let g = e => (0, r.jsx)(c.O7.AutoMeasuredNestedContainer, {
    children: i => (0, r.jsx)("div", {
      ref: i,
      className: s()(d.kL, {
        [d.dK]: e,
        [d._7]: null != n
      }),
      style: {
        "--__accent-color": n
      },
      children: (0, r.jsx)(u.x, {
        size: "reduced",
        children: f(t)
      })
    })
  });
  return null == t || 0 === t.length ? null : a ? (0, r.jsx)(l.Ay, {
    type: l.Ay.Types.ATTACHMENT,
    reason: o.Oc.SPOILER,
    obscured: h,
    onToggleObscurity: () => m(e => !e),
    children: e => g(e)
  }) : g(false)
}