/** Chunk was on 27978 **/
/** chunk id: 587444, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m,
  u: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk736688 = require("./736688.js"),
  Chunk149715 = require("./149715.js"),
  Chunk197571 = require("./197571.js");

function g(e) {
  let {
    text: t,
    buttonCta: i,
    onClick: u
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Ee, {
      src: n(689411)
    }), (0, r.jsx)(a.Dx, {
      className: l()(p.marginTop20, p.marginBottom8, f.flexCenter),
      children: d.intl.string(d.t.eL5z0t)
    }), (0, r.jsx)(a.DK, {
      className: p.marginBottom40,
      children: d.intl.string(d.t["poAv6+"])
    }), (0, r.jsxs)(s.Zbd, {
      className: h.card,
      type: s.Zbd.Types.CUSTOM,
      children: [(0, r.jsx)("img", {
        alt: "",
        className: h.cardAccentLeft,
        src: n(70519)
      }), (0, r.jsx)("img", {
        alt: "",
        className: h.cardAccentRight,
        src: n(806848)
      }), (0, r.jsxs)(c.Z, {
        className: h.cardContents,
        direction: c.Z.Direction.VERTICAL,
        align: c.Z.Align.STRETCH,
        grow: 0,
        children: [(0, r.jsx)(s.Text, {
          tag: "strong",
          className: h.buttonTitle,
          variant: "text-md/normal",
          style: {
            color: o.Z.unsafe_rawColors.PRIMARY_300.css
          },
          children: t
        }), (0, r.jsx)(a.zx, {
          className: h.button,
          onClick: u,
          children: i
        })]
      })]
    })]
  })
}

function m(e) {
  let {
    text: t,
    buttonCta: n,
    theme: i = u.BRd.DARK,
    onClick: l
  } = e;
  return (0, r.jsx)(a.ZP, {
    theme: i,
    children: (0, r.jsx)(g, {
      text: t,
      buttonCta: n,
      onClick: l
    })
  })
}