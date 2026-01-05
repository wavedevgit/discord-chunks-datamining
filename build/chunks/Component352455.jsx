/** Chunk was on 1272 **/
/** chunk id: 352455, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk924628 = require("./924628.js"),
  Chunk548816 = require("./548816.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk915724 = require("./915724.js");

function m(e) {
  let {
    className: t,
    markAsDismissed: n
  } = e;
  return (0, r.jsxs)(s.Z, {
    className: l()(g.card, t),
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-md/semibold",
      className: g.header,
      children: f.intl.string(f.t.HcbnMM)
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      children: f.intl.format(f.t.NkFrzN, {
        onPrivacyClick: () => {
          (0, u.openUserSettings)(c.n.DATA_AND_PRIVACY_PANEL, {
            section: d.oAB.DATA_AND_PRIVACY
          })
        }
      })
    }), (0, r.jsxs)("div", {
      className: g.buttonContainer,
      children: [(0, r.jsx)(a.Button, {
        variant: "primary",
        size: "sm",
        fullWidth: true,
        text: f.intl.string(f.t.ebojgD),
        onClick: () => (0, o.g)([d.pjP.PERSONALIZATION], [])
      }), (0, r.jsx)(a.Button, {
        variant: "secondary",
        size: "sm",
        fullWidth: true,
        text: f.intl.string(f.t.f3Pet9),
        onClick: () => n(p.L.DISMISS)
      })]
    })]
  })
}