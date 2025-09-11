/** Chunk was on web.js **/
/** chunk id: 445239, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk233671 = require("./233671.js");
let l = function(e) {
  let {
    onAccountHolderNameChange: t,
    billingAddressInfo: n
  } = e, l = i.useRef(null);
  return (0, r.jsx)("div", {
    className: s.body,
    children: (0, r.jsx)(a.hjN, {
      title: o.intl.string(o.t.sN3wra),
      children: (0, r.jsx)(a.oil, {
        inputRef: l,
        name: o.intl.string(o.t.sN3wra),
        placeholder: o.intl.string(o.t.sN3wra),
        onChange: e => t(e),
        value: n.name
      })
    })
  })
}