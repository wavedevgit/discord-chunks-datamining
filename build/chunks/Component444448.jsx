/** Chunk was on 45227 **/
/** chunk id: 444448, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
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
    skusById: a,
    selectedSkuId: x,
    application: j
  } = (0, d.JL)(), {
    isGift: C,
    giftRecipient: y
  } = (0, c.wD)();
  l()(null != x, "Expected selectedSkuId"), l()(null != j, "Expected application");
  let _ = a[x];
  return (l()(null != _, "Expected sku"), r.useEffect(() => {
    C || ((0, p.U)(), n(), (0, m.I)({
      sku: _,
      application: j
    }))
  }, [C, _, j, n]), C) ? (0, i.jsxs)(u.C3, {
    children: [(0, i.jsx)(g.Z, {}), (0, i.jsx)(f.Z, {}), (0, i.jsxs)("div", {
      className: h.confirmation,
      children: [(0, i.jsx)(b.A, {
        sku: _,
        shape: "square",
        containerClassName: h.skuImage
      }), (0, i.jsx)(o.Heading, {
        variant: "heading-xxl/bold",
        className: h.confirmationHeader,
        children: v.intl.string(v.t["5glWta"])
      }), (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        children: v.intl.formatToPlainString(v.t["2VjPTw"], {
          itemName: _.name,
          giftRecipient: null != (t = null == y ? true : y.username) ? t : "your recipient"
        })
      }), (0, i.jsx)("div", {
        className: h.divider
      }), (0, i.jsx)(s.zxk, {
        onClick: n,
        text: v.intl.string(v.t.cpT0Cq),
        fullWidth: true
      })]
    })]
  }) : null
}