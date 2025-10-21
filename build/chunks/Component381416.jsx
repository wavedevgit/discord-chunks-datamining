/** Chunk was on 1272 **/
/** chunk id: 381416, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk394121 = require("./394121.js");

function o(e) {
  let {
    onDiscardApplication: t,
    onContinueApplication: n,
    guild: o
  } = e;
  return (0, r.jsxs)("div", {
    className: a.confirmation,
    children: [(0, r.jsx)("div", {
      className: a.iconWrapper,
      children: (0, r.jsx)(i.Gzi, {
        size: "md",
        color: i.TVs.colors.INTERACTIVE_ACTIVE
      })
    }), (0, r.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: null != o ? l.intl.formatToPlainString(l.t.f5Jaw7, {
        guildName: o.name
      }) : l.intl.string(l.t["0sTyEb"])
    }), (0, r.jsxs)("div", {
      className: a.incompleteButtonsContainer,
      children: [(0, r.jsx)(i.Button, {
        fullWidth: true,
        onClick: n,
        variant: "secondary",
        size: "md",
        text: l.intl.string(l.t.h3aGmv)
      }), (0, r.jsx)(i.Button, {
        fullWidth: true,
        onClick: t,
        variant: "critical-primary",
        size: "md",
        text: l.intl.string(l.t.OQFlFD)
      })]
    })]
  })
}