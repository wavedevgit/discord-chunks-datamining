/** Chunk was on 45227 **/
/** chunk id: 444448, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
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

function C(e) {
  var t;
  let {
    handleClose: n
  } = e, {
    skusById: a,
    selectedSkuId: C,
    application: j
  } = (0, c.JL)(), {
    isGift: b,
    giftRecipient: _
  } = (0, d.wD)();
  r()(null != C, "Expected selectedSkuId"), r()(null != j, "Expected application");
  let I = a[C];
  return (r()(null != I, "Expected sku"), l.useEffect(() => {
    b || ((0, p.U)(), n(), (0, m.I)({
      sku: I,
      application: j
    }))
  }, [b, I, j, n]), b) ? (0, i.jsxs)(u.C3, {
    children: [(0, i.jsx)(g.Z, {}), (0, i.jsx)(f.Z, {}), (0, i.jsxs)("div", {
      className: v.confirmation,
      children: [(0, i.jsx)(x.A, {
        sku: I,
        shape: "square",
        containerClassName: v.skuImage
      }), (0, i.jsx)(o.Heading, {
        variant: "heading-xxl/bold",
        className: v.confirmationHeader,
        children: h.intl.string(h.t["5glWta"])
      }), (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        children: h.intl.formatToPlainString(h.t["2VjPTw"], {
          itemName: I.name,
          giftRecipient: null != (t = null == _ ? true : _.username) ? t : "your recipient"
        })
      }), (0, i.jsx)("div", {
        className: v.divider
      }), (0, i.jsx)(s.zxk, {
        onClick: n,
        text: h.intl.string(h.t.cpT0Cq),
        fullWidth: true
      })]
    })]
  }) : null
}