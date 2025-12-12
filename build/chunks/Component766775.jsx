/** Chunk was on 93099 **/
/** chunk id: 766775, original params: e,a,c (module,exports,require) **/
require.d(exports, {
  default: () => C
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  t = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk659900 = require("./659900.jsx"),
  Chunk473855 = require("./473855.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk193352 = require("./193352.js");

function C(e) {
  let {
    transitionState: a,
    onClose: c,
    guildTemplate: i
  } = e, {
    form: C,
    preview: m,
    handleSubmit: u
  } = (0, l.Z)(i, false), _ = (0, o.Dt)();
  return (0, n.jsxs)(r.IX, {
    transitionState: a,
    onClose: c,
    size: "xxl",
    "aria-labelledby": _,
    children: [(0, n.jsxs)("div", {
      className: h.modalContainer,
      children: [(0, n.jsx)("div", {
        className: t()(h.modalSection, h.ctaSection),
        children: (0, n.jsx)("div", {
          className: h.ctaContainer,
          children: (0, n.jsx)(s.Z, {
            guildTemplate: i,
            headerId: _
          })
        })
      }), (0, n.jsx)("div", {
        className: t()(h.modalSection, h.formSection),
        children: (0, n.jsxs)(d.Ttm, {
          className: h.formContainer,
          children: [(0, n.jsx)(d.Heading, {
            variant: "heading-xl/semibold",
            className: h.header,
            children: f.intl.string(f.t.UNFvtM)
          }), (0, n.jsxs)(d.C3N, {
            children: [C, m]
          })]
        })
      })]
    }), (0, n.jsx)(r.Go$, {
      actions: [{
        variant: "secondary",
        text: f.intl.string(f.t.cpT0Cq),
        onClick: c
      }, {
        variant: "primary",
        text: f.intl.string(f.t.CumH4u),
        onClick: async () => {
          null != await u() && c()
        }
      }]
    })]
  })
}