/** Chunk was on 10570 **/
/** chunk id: 766775, original params: e,n,i (module,exports,require) **/
require.d(exports, {
  default: () => h
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
  Chunk861758 = require("./861758.js");

function h(e) {
  let {
    transitionState: n,
    onClose: i,
    guildTemplate: c
  } = e, {
    form: h,
    preview: C,
    handleSubmit: m
  } = (0, s.Z)(c, false), u = (0, l.Dt)();
  return (0, a.jsxs)(r.IX, {
    transitionState: n,
    onClose: i,
    size: "xxl",
    "aria-labelledby": u,
    children: [(0, a.jsxs)("div", {
      className: f.modalContainer,
      children: [(0, a.jsx)("div", {
        className: t()(f.modalSection, f.ctaSection),
        children: (0, a.jsx)("div", {
          className: f.ctaContainer,
          children: (0, a.jsx)(d.Z, {
            guildTemplate: c,
            headerId: u
          })
        })
      }), (0, a.jsx)("div", {
        className: t()(f.modalSection, f.formSection),
        children: (0, a.jsxs)(o.Ttm, {
          className: f.formContainer,
          children: [(0, a.jsx)(o.Heading, {
            variant: "heading-xl/semibold",
            className: f.header,
            children: _.intl.string(_.t.UNFvtM)
          }), (0, a.jsxs)(o.C3N, {
            children: [h, C]
          })]
        })
      })]
    }), (0, a.jsx)(r.Go$, {
      actions: [{
        variant: "secondary",
        text: _.intl.string(_.t.cpT0Cq),
        onClick: i
      }, {
        variant: "primary",
        text: _.intl.string(_.t.CumH4u),
        onClick: async () => {
          null != await m() && i()
        }
      }]
    })]
  })
}