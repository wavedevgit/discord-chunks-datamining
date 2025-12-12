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
  Chunk216215 = require("./216215.js");

function b(e) {
  var t;
  let {
    handleClose: n
  } = e, {
    analyticsLocations: a
  } = (0, c.ZP)(), {
    skusById: b,
    selectedSkuId: _,
    application: j
  } = (0, u.JL)(), {
    isGift: I,
    giftRecipient: P
  } = (0, d.wD)();
  r()(null != _, "Expected selectedSkuId"), r()(null != j, "Expected application");
  let w = b[_];
  return (r()(null != w, "Expected sku"), l.useEffect(() => {
    I || ((0, h.U)(), n(), (0, p.I)({
      sku: w,
      application: j,
      analyticsLocations: a
    }))
  }, [I, w, j, n, a]), I) ? (0, i.jsxs)(f.C3, {
    children: [(0, i.jsx)(m.Z, {}), (0, i.jsx)(g.Z, {}), (0, i.jsxs)("div", {
      className: C.confirmation,
      children: [(0, i.jsx)(x.A, {
        sku: w,
        shape: "square",
        containerClassName: C.skuImage
      }), (0, i.jsx)(o.Heading, {
        variant: "heading-xl/semibold",
        className: C.confirmationHeader,
        children: v.intl.string(v.t["5glWta"])
      }), (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        className: C.confirmationDescription,
        children: v.intl.formatToPlainString(v.t["2VjPTw"], {
          itemName: w.name,
          giftRecipient: null != (t = null == P ? true : P.username) ? t : "your recipient"
        })
      }), (0, i.jsx)(s.zxk, {
        onClick: n,
        text: v.intl.string(v.t.cpT0Cq),
        fullWidth: true
      })]
    })]
  }) : null
}