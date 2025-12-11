/** Chunk was on web.js **/
/** chunk id: 521450, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk319498 = require("./319498.js"),
  Chunk435935 = require("./435935.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk960412 = require("./960412.js"),
  Chunk151662 = require("./151662.js"),
  Chunk695346 = require("./695346.js"),
  Chunk342386 = require("./342386.js"),
  Chunk981631 = require("./981631.js"),
  Chunk930441 = require("./930441.js"),
  Chunk435757 = require("./435757.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk286661 = require("./286661.js");
let E = () => {
  let e = Chunk695346.Ex.useSetting(),
    {
      categories: t,
      initialized: n
    } = (0, Chunk442837.cj)([Chunk151662.Z], () => Chunk151662.Z.getEmailSettings());

  function E(e) {
    (0, c.pR)(_.$Z.FAMILY_CENTER_DIGEST, e)
  }
  return Chunk473749.useEffect(() => {
    null == require && (0, Chunk960412.Y7)()
  }, [require]), (0, Chunk54381.jsx)("div", {
    className: Chunk286661.container,
    children: (0, Chunk54381.jsxs)(Chunk481060.C3N, {
      label: Chunk388032.intl.string(Chunk435757.default.USIXU7),
      children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
        checked: module,
        description: Chunk388032.intl.string(Chunk435757.default["5MdB3j"]),
        onChange: Chunk695346.Ex.updateSetting,
        label: Chunk388032.intl.string(Chunk435757.default.zkEceS)
      }), module ? (0, Chunk54381.jsx)(Chunk481060.Zbd, {
        className: Chunk286661.enableCard,
        type: Chunk481060.Zbd.Types.CUSTOM,
        outline: true,
        children: (0, Chunk54381.jsxs)(Chunk435935.k, {
          justify: Chunk435935.k.Justify.END,
          children: [(0, Chunk54381.jsx)(Chunk435935.k.Child, {
            children: (0, Chunk54381.jsx)(Chunk481060.Text, {
              variant: "text-sm/semibold",
              color: "text-default",
              children: Chunk388032.intl.string(Chunk435757.default.xAVm7K)
            })
          }), (0, Chunk54381.jsx)(Chunk481060.P3F, {
            children: (0, Chunk54381.jsx)(Chunk319498.rU, {
              onClick: Chunk342386.default,
              to: {
                pathname: Chunk981631.Z5c.FAMILY_CENTER,
                state: {
                  scrollRestoration: false
                }
              },
              children: Chunk388032.intl.string(Chunk435757.default.cUIXFY)
            })
          }), (0, Chunk54381.jsx)(Chunk481060.G2e, {
            icon: Chunk481060.ZSh,
            className: Chunk286661.arrow,
            disableColor: true
          })]
        })
      }) : null, (0, Chunk54381.jsx)(Chunk481060.rsf, {
        checked: !!exports[Chunk930441.$Z.FAMILY_CENTER_DIGEST],
        description: Chunk388032.intl.string(Chunk435757.default.y34S46),
        onChange: E,
        label: Chunk388032.intl.string(Chunk435757.default.irvJKR)
      })]
    })
  })
}