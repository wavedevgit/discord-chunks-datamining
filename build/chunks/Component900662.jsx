/** Chunk was on 86142 **/
/** chunk id: 900662, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f,
  N: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk413700 = require("./413700.js"),
  Chunk20976 = require("./20976.js"),
  Chunk473169 = require("./473169.js");

function _(e) {
  let {
    text: t,
    buttonCta: i,
    onClick: d
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o._V, {
      src: n(431979)
    }), (0, r.jsx)(o.hE, {
      className: s()(g.QX, g.QB, p.tR),
      children: u.intl.string(u.t.eL5z0i)
    }), (0, r.jsx)(o.tK, {
      className: g.C2,
      children: u.intl.string(u.t.poAv63)
    }), (0, r.jsxs)(a.ZpM, {
      className: h.Nr,
      type: a.ZpM.Types.CUSTOM,
      children: [(0, r.jsx)("img", {
        alt: "",
        className: h.q8,
        src: n(133531)
      }), (0, r.jsx)("img", {
        alt: "",
        className: h.dw,
        src: n(610925)
      }), (0, r.jsxs)(c.A, {
        className: h.p_,
        direction: c.A.Direction.VERTICAL,
        align: c.A.Align.STRETCH,
        grow: 0,
        children: [(0, r.jsx)(a.Text, {
          tag: "strong",
          className: h.p8,
          variant: "text-md/normal",
          style: {
            color: l.A.unsafe_rawColors.PRIMARY_300.css
          },
          children: t
        }), (0, r.jsx)("div", {
          className: h.x6,
          children: (0, r.jsx)(a.Button, {
            text: i,
            fullWidth: true,
            onClick: d
          })
        })]
      })]
    })]
  })
}

function f(e) {
  let {
    text: t,
    buttonCta: n,
    theme: i = d.NJ8.DARK,
    onClick: s
  } = e;
  return (0, r.jsx)(o.Ay, {
    theme: i,
    children: (0, r.jsx)(_, {
      text: t,
      buttonCta: n,
      onClick: s
    })
  })
}