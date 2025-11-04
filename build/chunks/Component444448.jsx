/** Chunk was on 45227 **/
/** chunk id: 444448, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
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

function x(e) {
  var t;
  let {
    handleClose: n
  } = e, {
    skusById: l,
    selectedSkuId: x,
    application: j
  } = (0, d.JL)(), {
    isGift: C,
    giftRecipient: _
  } = (0, c.wD)();
  a()(null != x, "Expected selectedSkuId"), a()(null != j, "Expected application");
  let y = l[x];
  return (a()(null != y, "Expected sku"), r.useEffect(() => {
    C || ((0, m.U)(), n(), (0, p.I)({
      sku: y,
      application: j
    }))
  }, [C, y, j, n]), C) ? (0, i.jsxs)(u.C3, {
    children: [(0, i.jsx)(g.Z, {}), (0, i.jsx)(f.Z, {}), (0, i.jsxs)("div", {
      className: h.confirmation,
      children: [(0, i.jsx)(v.A, {
        sku: y,
        shape: "square",
        containerClassName: h.skuImage
      }), (0, i.jsx)(s.Heading, {
        variant: "heading-xxl/bold",
        className: h.confirmationHeader,
        children: b.intl.string(b.t["5glWta"])
      }), (0, i.jsx)(s.Text, {
        variant: "text-md/normal",
        children: b.intl.formatToPlainString(b.t["2VjPTw"], {
          itemName: y.name,
          giftRecipient: null != (t = null == _ ? true : _.username) ? t : "your recipient"
        })
      }), (0, i.jsx)("div", {
        className: h.divider
      }), (0, i.jsx)(o.zxk, {
        onClick: n,
        text: b.intl.string(b.t.cpT0Cq),
        fullWidth: true
      })]
    })]
  }) : null
}