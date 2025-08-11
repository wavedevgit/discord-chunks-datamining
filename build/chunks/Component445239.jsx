/** Chunk was on web.js **/
/** chunk id: 445239, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk581278 = require("./581278.js");
let l = function(e) {
  let {
    onAccountHolderNameChange: t,
    billingAddressInfo: n
  } = e, l = i.useRef(null);
  return (0, r.jsx)("div", {
    className: s.body,
    children: (0, r.jsx)(o.hjN, {
      title: a.intl.string(a.t.sN3wra),
      children: (0, r.jsx)(o.oil, {
        inputRef: l,
        name: a.intl.string(a.t.sN3wra),
        placeholder: a.intl.string(a.t.sN3wra),
        onChange: e => t(e),
        value: n.name
      })
    })
  })
}