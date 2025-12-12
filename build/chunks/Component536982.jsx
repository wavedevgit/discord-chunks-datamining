/** Chunk was on 384 **/
/** chunk id: 536982, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk428760 = require("./428760.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk469716 = require("./469716.js");

function c(e) {
  let {
    onChange: t,
    initialValue: n,
    maxWordCount: c,
    collapsed: u = false
  } = e, [d, g] = i.useState(!u);
  return (0, r.jsx)(l.zF9, {
    isExpanded: d,
    collapsibleContent: (0, r.jsx)(s.Z, {
      onChangeText: t,
      maxWordCount: c,
      className: o.keywordTextAreaContainer,
      textAreaClassName: o.keywordTextArea,
      subtitleText: a.intl.formatToMarkdownString(a.t.qm7UZ8, {}),
      initialValue: n
    }),
    className: o.collapseable,
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(l.P3F, {
        onClick: e => {
          g(!d), t(e)
        },
        children: (0, r.jsxs)("div", {
          className: o.header,
          children: [(0, r.jsx)(l.Heading, {
            variant: "text-sm/medium",
            children: a.intl.string(a.t.lbE2Nm)
          }), d ? (0, r.jsx)(l.u04, {
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