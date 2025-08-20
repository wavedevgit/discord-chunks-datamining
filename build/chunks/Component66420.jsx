/** Chunk was on 26434 **/
/** chunk id: 66420, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk664677 = require("./664677.js");

function s(e) {
  let {
    channel: t,
    message: n,
    content: s,
    subtitle: c,
    compact: u,
    action: d
  } = e, p = n.reactions.length > 0;
  return (0, r.jsxs)(o.Z, {
    iconNode: t.isGroupDM() ? (0, r.jsx)(i.Dkj, {
      size: "md",
      color: "var(--premium-tier-2-purple-for-gradients-2)"
    }) : (0, r.jsx)(i.vdY, {
      size: "md",
      color: "var(--premium-tier-2-purple-for-gradients-2)"
    }),
    iconContainerClassName: a.iconContainer,
    compact: u,
    contentClassName: a.content,
    className: p ? a.withReactions : a.noReactions,
    children: [(0, r.jsxs)("div", {
      className: a.textContainer,
      children: [(0, r.jsx)(l.xv, {
        variant: "text-md/medium",
        color: "header-primary",
        children: s
      }), null != c && (0, r.jsx)(l.xv, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: c
      })]
    }), d]
  })
}