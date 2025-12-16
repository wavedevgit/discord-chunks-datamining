/** Chunk was on web.js **/
/** chunk id: 444448, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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

function y(e) {
  var t;
  let {
    handleClose: n
  } = e, {
    analyticsLocations: a
  } = (0, c.ZP)(), {
    skusById: y,
    selectedSkuId: O,
    application: v
  } = (0, d.JL)(), {
    isGift: S,
    giftRecipient: I
  } = (0, u.wD)();
  o()(null != O, "Expected selectedSkuId"), o()(null != v, "Expected application");
  let T = y[O];
  return (o()(null != T, "Expected sku"), i.useEffect(() => {
    S || ((0, h.U)(), n(), (0, m.I)({
      sku: T,
      application: v,
      analyticsLocations: a
    }))
  }, [S, T, v, n, a]), S) ? (0, r.jsxs)(f.C3, {
    children: [(0, r.jsx)(_.Z, {}), (0, r.jsx)(p.Z, {}), (0, r.jsxs)("div", {
      className: b.confirmation,
      children: [(0, r.jsx)(g.A, {
        sku: T,
        shape: "square",
        containerClassName: b.skuImage
      }), (0, r.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        className: b.confirmationHeader,
        children: E.intl.string(E.t["5glWta"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        className: b.confirmationDescription,
        children: E.intl.formatToPlainString(E.t["2VjPTw"], {
          itemName: T.name,
          giftRecipient: null != (t = null == I ? true : I.username) ? t : "your recipient"
        })
      }), (0, r.jsx)(s.zxk, {
        onClick: n,
        text: E.intl.string(E.t.cpT0Cq),
        fullWidth: true
      })]
    })]
  }) : null
}