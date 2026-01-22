/** Chunk was on 4042 **/
/** chunk id: 72715, original params: e,a,s (module,exports,require) **/
require.d(exports, {
  default: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk225858 = require("./225858.jsx"),
  Chunk895600 = require("./895600.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk167451 = require("./167451.js");

function _(e) {
  let {
    transitionState: a,
    onClose: s,
    guildTemplate: d
  } = e, {
    form: _,
    preview: o,
    handleSubmit: p
  } = (0, n.A)(d, false), h = (0, f.GV)();
  return (0, c.jsxs)(t.dWK, {
    transitionState: a,
    onClose: s,
    size: "xxl",
    "aria-labelledby": h,
    children: [(0, c.jsxs)("div", {
      className: x.jT,
      children: [(0, c.jsx)("div", {
        className: i()(x.jx, x.Iz),
        children: (0, c.jsx)("div", {
          className: x.OQ,
          children: (0, c.jsx)(l.A, {
            guildTemplate: d,
            headerId: h
          })
        })
      }), (0, c.jsx)("div", {
        className: i()(x.jx, x.gy),
        children: (0, c.jsxs)(b.HOs, {
          className: x.KJ,
          children: [(0, c.jsx)(b.Heading, {
            variant: "heading-xl/semibold",
            className: x.wx,
            children: r.intl.string(r.t.UNFvtM)
          }), (0, c.jsxs)(b.nVY, {
            children: [_, o]
          })]
        })
      })]
    }), (0, c.jsx)(t.H7u, {
      actions: [{
        variant: "secondary",
        text: r.intl.string(r.t.cpT0Cq),
        onClick: s
      }, {
        variant: "primary",
        text: r.intl.string(r.t.CumH4u),
        onClick: async () => {
          null != await p() && s()
        }
      }]
    })]
  })
}