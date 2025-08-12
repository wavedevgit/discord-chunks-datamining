/** Chunk was on web.js **/
/** chunk id: 542726, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk872810 = require("./872810.js"),
  Chunk493773 = require("./493773.js"),
  Chunk569545 = require("./569545.js"),
  Chunk592125 = require("./592125.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk412293 = require("./412293.js");

function m(e) {
  let {
    stream: t,
    width: n
  } = e, i = (0, a.e7)([f.Z], () => f.Z.getChannel(t.channelId));

  function m(e) {
    return e < 550 ? "small" : e < 1e3 ? "medium" : "large"
  }(0, u.ZP)(() => {
    (null == i ? true : i.isGuildStageVoice()) && (0, c.aP)((0, d.V9)(t), false)
  });
  let g = () => (0, c.aP)((0, d.V9)(t)),
    E = p.intl.string(p.t["4EGMWF"]),
    b = m(n);
  return (0, r.jsx)(l.f6W, {
    disableAdaptiveTheme: true,
    theme: _.BR.MIDNIGHT,
    children: e => (0, r.jsx)("div", {
      className: o()(h.container, e),
      children: (0, r.jsxs)("div", {
        className: h.content,
        children: [(0, r.jsx)("div", {
          className: o()(h.artContainer, h[b]),
          children: (0, r.jsx)("div", {
            className: o()(h.art, h[b])
          })
        }), (0, r.jsxs)("div", {
          className: h.cta,
          children: [(0, r.jsx)(l.X6q, {
            color: "none",
            variant: "small" === b ? "heading-md/normal" : "heading-lg/normal",
            className: h.header,
            children: p.intl.formatToMarkdownString(p.t.Kb4Ukp, {})
          }), (0, r.jsx)(s.zx, {
            size: "small" === b ? s.zx.Sizes.MEDIUM : s.zx.Sizes.LARGE,
            color: s.zx.Colors.PRIMARY,
            onClick: e => {
              e.stopPropagation(), g()
            },
            children: (0, r.jsx)(l.Text, {
              color: "none",
              variant: "text-md/semibold",
              children: E
            })
          })]
        })]
      })
    })
  })
}