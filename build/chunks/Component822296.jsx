/** Chunk was on web.js **/
/** chunk id: 822296, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk872810 = require("./872810.js"),
  Chunk493773 = require("./493773.js"),
  Chunk569545 = require("./569545.js"),
  Chunk592125 = require("./592125.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk134119 = require("./134119.js");

function m(e) {
  var t;
  let {
    stream: n,
    width: i
  } = e, m = (0, o.e7)([d.Z], () => d.Z.getChannel(n.channelId));
  (0, c.ZP)(() => {
    (null == m ? true : m.isGuildStageVoice()) && (0, l.aP)((0, u.V9)(n), false)
  });
  let h = () => (0, l.aP)((0, u.V9)(n)),
    g = (t = i) < 550 ? "small" : t < 1e3 ? "medium" : "large";
  return (0, r.jsx)(s.f6W, {
    disableAdaptiveTheme: true,
    theme: f.BR.MIDNIGHT,
    children: e => (0, r.jsx)("div", {
      className: a()(_.container, e),
      children: (0, r.jsxs)("div", {
        className: _.content,
        children: [(0, r.jsx)("div", {
          className: a()(_.artContainer, _[g]),
          children: (0, r.jsx)("div", {
            className: a()(_.art, _[g])
          })
        }), (0, r.jsxs)("div", {
          className: _.cta,
          children: [(0, r.jsx)(s.Heading, {
            color: "none",
            variant: "small" === g ? "heading-md/normal" : "heading-lg/normal",
            className: _.header,
            children: p.intl.formatToMarkdownString(p.t.Kb4Ukp, {})
          }), (0, r.jsx)(s.Button, {
            variant: "secondary",
            size: "small" === g ? "sm" : "md",
            onClick: e => {
              e.stopPropagation(), h()
            },
            text: p.intl.string(p.t["4EGMWL"])
          })]
        })]
      })
    })
  })
}