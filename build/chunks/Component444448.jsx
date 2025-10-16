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
  Chunk388032 = require("./388032.jsx"),
  Chunk216215 = require("./216215.js");

function x(e) {
  var t;
  let {
    handleClose: n
  } = e, {
    skusById: l,
    selectedSkuId: x,
    application: h
  } = (0, d.JL)(), {
    isGift: j,
    giftRecipient: C
  } = (0, c.wD)();
  a()(null != x, "Expected selectedSkuId"), a()(null != h, "Expected application");
  let y = l[x];
  return (a()(null != y, "Expected sku"), r.useEffect(() => {
    j || ((0, m.U)(), n(), (0, p.I)({
      sku: y,
      application: h
    }))
  }, [j, y, h, n]), j) ? (0, i.jsxs)(u.C3, {
    children: [(0, i.jsx)(g.Z, {}), (0, i.jsx)(f.Z, {}), (0, i.jsxs)("div", {
      className: b.confirmation,
      children: [(0, i.jsx)(s.Heading, {
        variant: "heading-xxl/bold",
        className: b.confirmationHeader,
        children: v.intl.string(v.t["5glWtb"])
      }), (0, i.jsx)(s.Text, {
        variant: "text-md/normal",
        children: v.intl.formatToPlainString(v.t["2VjPT0"], {
          itemName: y.name,
          giftRecipient: null != (t = null == C ? true : C.username) ? t : "your recipient"
        })
      }), (0, i.jsx)("div", {
        className: b.divider
      }), (0, i.jsx)(o.zxk, {
        onClick: n,
        text: v.intl.string(v.t.cpT0Cg),
        fullWidth: true
      })]
    })]
  }) : null
}