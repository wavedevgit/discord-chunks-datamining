/** Chunk was on web.js **/
/** chunk id: 6332, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk893330 = require("./893330.js");
let l = function(e) {
  let {
    onAccountHolderNameChange: t,
    billingAddressInfo: n
  } = e, l = i.useRef(null);
  return (0, r.jsx)("div", {
    className: s.r,
    children: (0, r.jsx)(a.ksK, {
      label: o.intl.string(o.t.sN3wrd),
      inputRef: l,
      name: o.intl.string(o.t.sN3wrd),
      placeholder: o.intl.string(o.t.sN3wrd),
      onChange: e => t(e),
      value: n.name
    })
  })
}