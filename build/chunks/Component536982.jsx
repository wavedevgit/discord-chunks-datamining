/** Chunk was on 40725 **/
/** chunk id: 536982, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk428760 = require("./428760.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk469716 = require("./469716.js");

function c(e) {
  let {
    onChange: t,
    initialValue: n,
    maxWordCount: c,
    collapsed: d = false
  } = e, [u, m] = i.useState(!d);
  return (0, r.jsx)(l.zF9, {
    isExpanded: u,
    collapsibleContent: (0, r.jsx)(a.Z, {
      onChangeText: t,
      maxWordCount: c,
      className: o.keywordTextAreaContainer,
      textAreaClassName: o.keywordTextArea,
      subtitleText: s.intl.formatToMarkdownString(s.t.qm7UZ2, {}),
      initialValue: n
    }),
    className: o.collapseable,
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(l.P3F, {
        onClick: e => {
          m(!u), t(e)
        },
        children: (0, r.jsxs)("div", {
          className: o.header,
          children: [(0, r.jsx)(l.X6q, {
            variant: "text-sm/medium",
            children: s.intl.string(s.t.lbE2Nj)
          }), u ? (0, r.jsx)(l.u04, {
            size: "md",
            color: "currentColor",
            className: o.arrow
          }) : (0, r.jsx)(l.CJ0, {
            size: "md",
            color: "currentColor",
            className: o.arrow
          })]
        })
      })
    }
  })
}