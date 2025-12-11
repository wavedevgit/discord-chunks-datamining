/** Chunk was on 1272 **/
/** chunk id: 381416, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk871612 = require("./871612.js");

function s(e) {
  let {
    onDiscardApplication: t,
    onContinueApplication: n,
    guild: s
  } = e;
  return (0, r.jsxs)("div", {
    className: a.confirmation,
    children: [(0, r.jsx)("div", {
      className: a.iconWrapper,
      children: (0, r.jsx)(i.Gzi, {
        size: "md",
        color: i.TVs.colors.INTERACTIVE_TEXT_ACTIVE
      })
    }), (0, r.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: null != s ? l.intl.formatToPlainString(l.t.f5Jaw7, {
        guildName: s.name
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