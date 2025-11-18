/** Chunk was on web.js **/
/** chunk id: 985184, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk936141 = require("./936141.js"),
  Chunk411405 = require("./411405.jsx"),
  Chunk197653 = require("./197653.jsx"),
  Chunk979372 = require("./979372.jsx"),
  Chunk954717 = require("./954717.js");

function f(e) {
  let {
    components: t,
    accentColor: n,
    spoiler: a,
    renderComponents: f
  } = e, [_, p] = i.useState(a), h = e => (0, r.jsx)(c.am.AutoMeasuredNestedContainer, {
    children: i => (0, r.jsx)("div", {
      ref: i,
      className: o()(d.container, {
        [d.isHidden]: e,
        [d.withAccentColor]: null != n
      }),
      style: {
        "--__accent-color": n
      },
      children: (0, r.jsx)(u.U, {
        size: "reduced",
        children: f(t)
      })
    })
  });
  return null == t || 0 === t.length ? null : a ? (0, r.jsx)(l.ZP, {
    type: l.ZP.Types.ATTACHMENT,
    reason: s.wk.SPOILER,
    obscured: _,
    onToggleObscurity: () => p(e => !e),
    children: e => h(e)
  }) : h(false)
}