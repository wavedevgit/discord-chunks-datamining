/** Chunk was on 44044 **/
/** chunk id: 766775, original params: e,i,n (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk659900 = require("./659900.jsx"),
  Chunk473855 = require("./473855.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk430537 = require("./430537.js");

function m(e) {
  let {
    transitionState: i,
    onClose: n,
    guildTemplate: t
  } = e, {
    form: m,
    preview: p,
    handleSubmit: h
  } = (0, d.Z)(t, false), C = (0, l.Dt)();
  return (0, a.jsx)("div", {
    children: (0, a.jsxs)(o.Y0X, {
      size: o.CgR.DYNAMIC,
      transitionState: i,
      className: f.modalRoot,
      "aria-labelledby": C,
      parentComponent: "GuildTemplateModal",
      children: [(0, a.jsxs)("div", {
        className: f.modalContainer,
        children: [(0, a.jsx)("div", {
          className: c()(f.modalSection, f.ctaSection),
          children: (0, a.jsx)("div", {
            className: f.ctaContainer,
            children: (0, a.jsx)(_.Z, {
              guildTemplate: t,
              headerId: C
            })
          })
        }), (0, a.jsx)("div", {
          className: c()(f.modalSection, f.formSection),
          children: (0, a.jsxs)(o.Ttm, {
            className: f.formContainer,
            children: [(0, a.jsx)(r.Dx, {
              className: f.header,
              children: s.intl.string(s.t.UNFvtL)
            }), m, p]
          })
        })]
      }), (0, a.jsxs)(o.mzw, {
        className: f.modalFooter,
        children: [(0, a.jsx)(o.zxk, {
          variant: "secondary",
          text: s.intl.string(s.t.cpT0Cg),
          onClick: n
        }), (0, a.jsx)(o.zxk, {
          variant: "active",
          text: s.intl.string(s.t.CumH4u),
          onClick: async () => {
            null != await h() && n()
          }
        })]
      })]
    })
  })
}