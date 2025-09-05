/** Chunk was on 1272 **/
/** chunk id: 352455, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk924628 = require("./924628.js"),
  Chunk230711 = require("./230711.js"),
  Chunk548816 = require("./548816.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk632256 = require("./632256.js");

function h(e) {
  let {
    className: t,
    markAsDismissed: n
  } = e;
  return (0, r.jsxs)(c.Z, {
    className: l()(f.card, t),
    children: [(0, r.jsx)(a.X6q, {
      variant: "heading-md/semibold",
      className: f.header,
      children: p.intl.string(p.t.HcbnMD)
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      children: p.intl.format(p.t.NkFrzM, {
        onPrivacyClick: () => {
          s.Z.open(u.oAB.DATA_AND_PRIVACY)
        }
      })
    }), (0, r.jsxs)("div", {
      className: f.buttonContainer,
      children: [(0, r.jsx)(a.zxk, {
        variant: "primary",
        size: "sm",
        fullWidth: true,
        text: p.intl.string(p.t.ebojgI),
        onClick: () => (0, o.g)([u.pjP.PERSONALIZATION], [])
      }), (0, r.jsx)(a.zxk, {
        variant: "secondary",
        size: "sm",
        fullWidth: true,
        text: p.intl.string(p.t.f3Pet7),
        onClick: () => n(d.L.DISMISS)
      })]
    })]
  })
}