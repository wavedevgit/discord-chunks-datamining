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
  } = null != s ? s : {}, c = null != l ? o.ZP.getType(l.brand) : o.ZP.Types.UNKNOWN;
  return (0, r.jsx)("div", {
    className: t,
    children: (0, r.jsx)(i.oil, {
      label: a.intl.string(a.t["mmDvV+"]),
      leading: {
        type: "image",
        src: (0, o.hx)(c)
      },
      value: n && null != l ? a.intl.formatToPlainString(a.t.bCynoK, l) : true,
      readOnly: true,
      placeholder: a.intl.string(a.t.bWMH78)
    })
  })
}