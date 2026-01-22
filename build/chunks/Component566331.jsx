/** Chunk was on web.js **/
/** chunk id: 566331, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk401843 = require("./401843.js"),
  Chunk964486 = require("./964486.js"),
  Chunk652896 = require("./652896.js"),
  Chunk734057 = require("./734057.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk814651 = require("./814651.js");

function h(e) {
  var t;
  let {
    stream: n,
    width: i
  } = e, h = (0, s.bG)([d.A], () => d.A.getChannel(n.channelId));
  (0, c.Ay)(() => {
    (null == h ? true : h.isGuildStageVoice()) && (0, l.Xi)((0, u._z)(n), false)
  });
  let m = () => (0, l.Xi)((0, u._z)(n)),
    g = (t = i) < 550 ? "small" : t < 1e3 ? "medium" : "large";
  return (0, r.jsx)(o.NPJ, {
    disableAdaptiveTheme: true,
    theme: f.NJ.MIDNIGHT,
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
          children: [(0, r.jsx)(o.Heading, {
            color: "none",
            variant: "small" === g ? "heading-md/normal" : "heading-lg/normal",
            className: _.header,
            children: p.intl.formatToMarkdownString(p.t.Kb4Ukp, {})
          }), (0, r.jsx)(o.Button, {
            variant: "secondary",
            size: "small" === g ? "sm" : "md",
            onClick: e => {
              e.stopPropagation(), m()
            },
            text: p.intl.string(p.t["4EGMWL"])
          })]
        })]
      })
    })
  })
}