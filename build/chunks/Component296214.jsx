/** Chunk was on web.js **/
/** chunk id: 296214, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk219929 = require("./219929.jsx"),
  Chunk388032 = require("./388032.jsx");
let s = e => {
  let {
    className: t,
    submitting: n,
    stripePaymentMethod: s
  } = e, {
    card: l
  } = null != s ? s : {}, c = null != l ? a.ZP.getType(l.brand) : a.ZP.Types.UNKNOWN;
  return (0, r.jsx)("div", {
    className: t,
    children: (0, r.jsx)(i.oil, {
      label: o.intl.string(o.t["mmDvV+"]),
      leading: {
        type: "image",
        src: (0, a.hx)(c)
      },
      value: n && null != l ? o.intl.formatToPlainString(o.t.bCynoK, l) : true,
      readOnly: true,
      placeholder: o.intl.string(o.t.bWMH78)
    })
  })
}