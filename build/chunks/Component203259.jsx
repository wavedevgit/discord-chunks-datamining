/** Chunk was on 1272 **/
/** chunk id: 203259, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk39604 = require("./39604.js"),
  Chunk176127 = require("./176127.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk854181 = require("./854181.js");

function u(e) {
  let {
    onOpenClipsGallery: t,
    clipIconRef: n,
    lastClipsSession: u
  } = e;
  return (0, r.jsxs)(l.gqK, {
    tooltipClassName: c.reminderTooltip,
    tooltipContentClassName: c.tooltipContent,
    targetElementRef: {
      current: n
    },
    position: "bottom",
    color: l.r6K.PRIMARY,
    children: [(0, r.jsx)(o.Z, {}), (0, r.jsx)(l.Heading, {
      variant: "heading-md/extrabold",
      children: s.intl.format(s.t["+qxkzM"], {
        count: u.newClipIds.length
      })
    }), (0, r.jsxs)("div", {
      className: c.buttonContainer,
      children: [(0, r.jsx)(i.zx, {
        color: i.zx.Colors.TRANSPARENT,
        onClick: a.eL,
        children: s.intl.string(s.t.WAI6xs)
      }), (0, r.jsx)(l.Button, {
        variant: "primary",
        text: s.intl.string(s.t.tQPBmp),
        onClick: t
      })]
    })]
  })
}