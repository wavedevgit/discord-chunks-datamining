/** Chunk was on web.js **/
/** chunk id: 521450, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk799899 = require("./799899.js"),
  Chunk435935 = require("./435935.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk960412 = require("./960412.js"),
  Chunk151662 = require("./151662.js"),
  Chunk695346 = require("./695346.js"),
  Chunk342386 = require("./342386.js"),
  Chunk981631 = require("./981631.js"),
  Chunk930441 = require("./930441.js"),
  Chunk412297 = require("./412297.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk262526 = require("./262526.js"),
  Chunk10198 = require("./10198.js");
let O = () => {
  let e = Chunk695346.Ex.useSetting(),
    {
      categories: t,
      initialized: n
    } = (0, Chunk442837.cj)([Chunk151662.Z], () => Chunk151662.Z.getEmailSettings());

  function a(e) {
    (0, d.pR)(m.$Z.FAMILY_CENTER_DIGEST, e)
  }
  return Chunk647438.useEffect(() => {
    null == require && (0, Chunk960412.Y7)()
  }, [require]), (0, Chunk951288.jsxs)("div", {
    className: Chunk262526.container,
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "eyebrow",
      color: "text-muted",
      children: Chunk388032.intl.string(Chunk412297.default.USIXU1)
    }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
      className: o()(Chunk10198.marginTop8, Chunk10198.marginBottom20),
      value: module,
      note: Chunk388032.intl.string(Chunk412297.default["5MdB3t"]),
      hideBorder: true,
      onChange: Chunk695346.Ex.updateSetting,
      children: Chunk388032.intl.string(Chunk412297.default.zkEceX)
    }), module ? (0, Chunk951288.jsx)(Chunk481060.Zbd, {
      className: Chunk262526.enableCard,
      type: Chunk481060.Zbd.Types.CUSTOM,
      outline: true,
      children: (0, Chunk951288.jsxs)(Chunk435935.k, {
        justify: Chunk435935.k.Justify.END,
        children: [(0, Chunk951288.jsx)(Chunk435935.k.Child, {
          children: (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/semibold",
            color: "text-default",
            children: Chunk388032.intl.string(Chunk412297.default.xAVm7O)
          })
        }), (0, Chunk951288.jsx)(Chunk481060.P3F, {
          children: (0, Chunk951288.jsx)(Chunk799899.rU, {
            onClick: Chunk342386.default,
            to: {
              pathname: Chunk981631.Z5c.FAMILY_CENTER,
              state: {
                scrollRestoration: false
              }
            },
            children: Chunk388032.intl.string(Chunk412297.default.cUIXFR)
          })
        }), (0, Chunk951288.jsx)(Chunk481060.G2e, {
          icon: Chunk481060.ZSh,
          className: Chunk262526.arrow,
          disableColor: true
        })]
      })
    }) : null, (0, Chunk951288.jsx)(Chunk481060.j7V, {
      className: o()(Chunk10198.marginTop20, Chunk10198.marginBottom20),
      value: !!exports[Chunk930441.$Z.FAMILY_CENTER_DIGEST],
      note: Chunk388032.intl.string(Chunk412297.default["y34S4+"]),
      hideBorder: true,
      onChange: Chunk120356,
      children: Chunk388032.intl.string(Chunk412297.default.irvJKS)
    })]
  })
}