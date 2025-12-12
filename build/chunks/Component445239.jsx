/** Chunk was on web.js **/
/** chunk id: 445239, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk138167 = require("./138167.js");
let l = function(e) {
  let {
    onAccountHolderNameChange: t,
    billingAddressInfo: n
  } = e, l = i.useRef(null);
  return (0, r.jsx)("div", {
    className: s.body,
    children: (0, r.jsx)(o.oil, {
      label: a.intl.string(a.t.sN3wrd),
      inputRef: l,
      name: a.intl.string(a.t.sN3wrd),
      placeholder: a.intl.string(a.t.sN3wrd),
      onChange: e => t(e),
      value: n.name
    })
  })
}