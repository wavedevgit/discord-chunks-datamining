/** Chunk was on 47841 **/
/** chunk id: 858229, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk391958 = require("./391958.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk816925 = require("./816925.js");

function o(e) {
  let {
    onChange: t,
    initialValue: n,
    maxWordCount: o,
    collapsed: d = false
  } = e, [u, f] = i.useState(!d);
  return (0, r.jsx)(l.Nt8, {
    isExpanded: u,
    collapsibleContent: (0, r.jsx)(s.A, {
      onChangeText: t,
      maxWordCount: o,
      className: c.ft,
      textAreaClassName: c.cC,
      subtitleText: a.intl.formatToMarkdownString(a.t.qm7UZ8, {}),
      initialValue: n
    }),
    className: c.uR,
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(l.DUT, {
        onClick: e => {
          f(!u), t(e)
        },
        children: (0, r.jsxs)("div", {
          className: c.wx,
          children: [(0, r.jsx)(l.Heading, {
            variant: "text-sm/medium",
            children: a.intl.string(a.t.lbE2Nm)
          }), u ? (0, r.jsx)(l.tN5, {
            size: "md",
            color: "currentColor",
            className: c.UE
          }) : (0, r.jsx)(l.abt, {
            size: "md",
            color: "currentColor",
            className: c.UE
          })]
        })
      })
    }
  })
}