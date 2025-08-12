/** Chunk was on web.js **/
/** chunk id: 66420, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js"),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk920706 = require("./920706.js");

function l(e) {
  let {
    channel: t,
    message: n,
    content: l,
    subtitle: c,
    compact: u,
    action: d
  } = e, f = n.reactions.length > 0;
  return (0, r.jsxs)(a.Z, {
    iconNode: t.isGroupDM() ? (0, r.jsx)(i.Dkj, {
      size: "md",
      color: "var(--premium-tier-2-purple-for-gradients-2)"
    }) : (0, r.jsx)(i.vdY, {
      size: "md",
      color: "var(--premium-tier-2-purple-for-gradients-2)"
    }),
    iconContainerClassName: s.iconContainer,
    compact: u,
    contentClassName: s.content,
    className: f ? s.withReactions : s.noReactions,
    children: [(0, r.jsxs)("div", {
      className: s.textContainer,
      children: [(0, r.jsx)(o.xv, {
        variant: "text-md/medium",
        color: "header-primary",
        children: l
      }), null != c && (0, r.jsx)(o.xv, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: c
      })]
    }), d]
  })
}