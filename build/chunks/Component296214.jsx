/** Chunk was on web.js **/
/** chunk id: 296214, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk219929 = require("./219929.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk137362 = require("./137362.js");
let d = e => {
  let {
    className: t,
    submitting: n,
    stripePaymentMethod: i
  } = e, {
    card: d
  } = null != i ? i : {}, f = null != d ? l.ZP.getType(d.brand) : l.ZP.Types.UNKNOWN;
  return (0, r.jsx)(s.hjN, {
    className: t,
    title: c.intl.string(c.t.mmDvV1),
    children: (0, r.jsxs)("div", {
      className: u.cardNumberWrapper,
      children: [(0, r.jsx)(l.ZP, {
        className: o()(u.cardIcon, {
          [u.submitting]: n
        }),
        type: f
      }), (0, r.jsx)(a.Is, {
        value: n && null != d ? c.intl.formatToPlainString(c.t.bCynoK, d) : true,
        editable: false,
        readOnly: true,
        placeholder: c.intl.string(c.t["bWMH7+"]),
        inputClassName: u.cardNumberInput
      })]
    })
  })
}