/** Chunk was on 4042 **/
/** chunk id: 72715, original params: e,a,i (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  t = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk225858 = require("./225858.jsx"),
  Chunk895600 = require("./895600.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk167451 = require("./167451.js");

function h(e) {
  let {
    transitionState: a,
    onClose: i,
    guildTemplate: c
  } = e, {
    form: h,
    preview: f,
    handleSubmit: p
  } = (0, l.A)(c, false), C = (0, _.GV)();
  return (0, n.jsxs)(r.dWK, {
    transitionState: a,
    onClose: i,
    size: "xxl",
    "aria-labelledby": C,
    children: [(0, n.jsxs)("div", {
      className: x.jT,
      children: [(0, n.jsx)("div", {
        className: t()(x.jx, x.Iz),
        children: (0, n.jsx)("div", {
          className: x.OQ,
          children: (0, n.jsx)(d.A, {
            guildTemplate: c,
            headerId: C
          })
        })
      }), (0, n.jsx)("div", {
        className: t()(x.jx, x.gy),
        children: (0, n.jsxs)(s.HOs, {
          className: x.KJ,
          children: [(0, n.jsx)(s.Heading, {
            variant: "heading-xl/semibold",
            className: x.wx,
            children: o.intl.string(o.t.UNFvtM)
          }), (0, n.jsxs)(s.nVY, {
            children: [h, f]
          })]
        })
      })]
    }), (0, n.jsx)(r.H7u, {
      actions: [{
        variant: "secondary",
        text: o.intl.string(o.t.cpT0Cq),
        onClick: i
      }, {
        variant: "primary",
        text: o.intl.string(o.t.CumH4u),
        onClick: async () => {
          null != await p() && i()
        }
      }]
    })]
  })
}