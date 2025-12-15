/** Chunk was on 45227 **/
/** chunk id: 444448, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk614277 = require("./614277.jsx"),
  Chunk698708 = require("./698708.jsx"),
  Chunk844068 = require("./844068.jsx"),
  Chunk517730 = require("./517730.jsx"),
  Chunk436585 = require("./436585.jsx"),
  Chunk848118 = require("./848118.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk358035 = require("./358035.js");

function b(e) {
  var t;
  let {
    handleClose: n
  } = e, {
    analyticsLocations: l
  } = (0, d.ZP)(), {
    skusById: b,
    selectedSkuId: j,
    application: I
  } = (0, u.JL)(), {
    isGift: P,
    giftRecipient: w
  } = (0, c.wD)();
  r()(null != j, "Expected selectedSkuId"), r()(null != I, "Expected application");
  let S = b[j];
  return (r()(null != S, "Expected sku"), a.useEffect(() => {
    P || ((0, h.U)(), n(), (0, p.I)({
      sku: S,
      application: I,
      analyticsLocations: l
    }))
  }, [P, S, I, n, l]), P) ? (0, i.jsxs)(f.C3, {
    children: [(0, i.jsx)(m.Z, {}), (0, i.jsx)(g.Z, {}), (0, i.jsxs)("div", {
      className: v.confirmation,
      children: [(0, i.jsx)(C.A, {
        sku: S,
        shape: "square",
        containerClassName: v.skuImage
      }), (0, i.jsx)(o.Heading, {
        variant: "heading-xl/semibold",
        className: v.confirmationHeader,
        children: x.intl.string(x.t["5glWta"])
      }), (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        className: v.confirmationDescription,
        children: x.intl.formatToPlainString(x.t["2VjPTw"], {
          itemName: S.name,
          giftRecipient: null != (t = null == w ? true : w.username) ? t : "your recipient"
        })
      }), (0, i.jsx)(s.zxk, {
        onClick: n,
        text: x.intl.string(x.t.cpT0Cq),
        fullWidth: true
      })]
    })]
  }) : null
}