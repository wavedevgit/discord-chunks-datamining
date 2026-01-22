/** Chunk was on web.js **/
/** chunk id: 893234, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk812745 = require("./812745.jsx"),
  Chunk985018 = require("./985018.jsx");
let o = e => {
  let {
    className: t,
    submitting: n,
    stripePaymentMethod: o
  } = e, {
    card: l
  } = null != o ? o : {}, c = null != l ? a.Ay.getType(l.brand) : a.Ay.Types.UNKNOWN;
  return (0, r.jsx)("div", {
    className: t,
    children: (0, r.jsx)(i.ksK, {
      label: s.intl.string(s.t["mmDvV+"]),
      leading: {
        type: "image",
        src: (0, a.Nj)(c)
      },
      value: n && null != l ? s.intl.formatToPlainString(s.t.bCynoK, l) : true,
      readOnly: true,
      placeholder: s.intl.string(s.t.bWMH78)
    })
  })
}