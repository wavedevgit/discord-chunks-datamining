/** Chunk was on 21738 **/
/** chunk id: 892040, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk400783 = require("./400783.js");

function s(e) {
  let {
    onDiscardApplication: t,
    onContinueApplication: n,
    guild: s
  } = e;
  return (0, r.jsxs)("div", {
    className: a.EL,
    children: [(0, r.jsx)("div", {
      className: a.P0,
      children: (0, r.jsx)(i.pun, {
        size: "md",
        color: i.LU0.colors.INTERACTIVE_TEXT_ACTIVE
      })
    }), (0, r.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      children: null != s ? l.intl.formatToPlainString(l.t.f5Jaw7, {
        guildName: s.name
      }) : l.intl.string(l.t["0sTyEb"])
    }), (0, r.jsxs)("div", {
      className: a.rn,
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