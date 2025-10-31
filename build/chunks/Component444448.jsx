/** Chunk was on 45227 **/
/** chunk id: 444448, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => O
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

function O(e) {
  var t;
  let {
    handleClose: n
  } = e, {
    skusById: l,
    selectedSkuId: O,
    application: y
  } = (0, u.JL)(), {
    isGift: h,
    giftRecipient: x
  } = (0, s.wD)();
  a()(null != O, "Expected selectedSkuId"), a()(null != y, "Expected application");
  let C = l[O];
  return (a()(null != C, "Expected sku"), i.useEffect(() => {
    h || ((0, b.U)(), n(), (0, g.I)({
      sku: C,
      application: y
    }))
  }, [h, C, y, n]), h) ? (0, r.jsxs)(d.C3, {
    children: [(0, r.jsx)(p.Z, {}), (0, r.jsx)(f.Z, {}), (0, r.jsxs)("div", {
      className: j.confirmation,
      children: [(0, r.jsx)(m.A, {
        sku: C,
        shape: "square",
        containerClassName: j.skuImage
      }), (0, r.jsx)(c.Heading, {
        variant: "heading-xxl/bold",
        className: j.confirmationHeader,
        children: v.intl.string(v.t["5glWta"])
      }), (0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        children: v.intl.formatToPlainString(v.t["2VjPTw"], {
          itemName: C.name,
          giftRecipient: null != (t = null == x ? true : x.username) ? t : "your recipient"
        })
      }), (0, r.jsx)("div", {
        className: j.divider
      }), (0, r.jsx)(o.zxk, {
        onClick: n,
        text: v.intl.string(v.t.cpT0Cq),
        fullWidth: true
      })]
    })]
  }) : null
}