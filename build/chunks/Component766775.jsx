/** Chunk was on 86015 **/
/** chunk id: 766775, original params: e,n,a (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk659900 = require("./659900.jsx"),
  Chunk473855 = require("./473855.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk204078 = require("./204078.js");

function m(e) {
  let {
    transitionState: n,
    onClose: a,
    guildTemplate: t
  } = e, {
    form: m,
    preview: h,
    handleSubmit: C
  } = (0, d.Z)(t, false), u = (0, l.Dt)();
  return (0, i.jsx)("div", {
    children: (0, i.jsxs)(o.Y0X, {
      size: o.CgR.DYNAMIC,
      transitionState: n,
      className: f.modalRoot,
      "aria-labelledby": u,
      parentComponent: "GuildTemplateModal",
      children: [(0, i.jsxs)("div", {
        className: f.modalContainer,
        children: [(0, i.jsx)("div", {
          className: c()(f.modalSection, f.ctaSection),
          children: (0, i.jsx)("div", {
            className: f.ctaContainer,
            children: (0, i.jsx)(s.Z, {
              guildTemplate: t,
              headerId: u
            })
          })
        }), (0, i.jsx)("div", {
          className: c()(f.modalSection, f.formSection),
          children: (0, i.jsxs)(o.Ttm, {
            className: f.formContainer,
            children: [(0, i.jsx)(r.Dx, {
              className: f.header,
              children: _.intl.string(_.t.UNFvtM)
            }), (0, i.jsxs)(o.C3N, {
              children: [m, h]
            })]
          })
        })]
      }), (0, i.jsxs)(o.mzw, {
        className: f.modalFooter,
        children: [(0, i.jsx)(o.Button, {
          variant: "secondary",
          text: _.intl.string(_.t.cpT0Cq),
          onClick: a
        }), (0, i.jsx)(o.Button, {
          variant: "active",
          text: _.intl.string(_.t.CumH4u),
          onClick: async () => {
            null != await C() && a()
          }
        })]
      })]
    })
  })
}