/** Chunk was on web.js **/
/** chunk id: 734925, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk966327 = require("./966327.jsx"),
  Chunk937008 = require("./937008.jsx"),
  Chunk427262 = require("./427262.js"),
  Chunk985018 = require("./985018.jsx");
let c = e => {
  let {
    selectedSkuId: t,
    validateSelectedGift: n,
    className: c,
    recipients: u
  } = e, {
    giftRecipient: d,
    setGiftRecipient: f
  } = (0, s.Pv)();
  if (null == t) return null;
  let p = e => {
    n(e, t), f(e)
  };
  return (0, r.jsx)("div", {
    className: c,
    children: (0, r.jsx)(i.ZiE, {
      selectionMode: "single",
      label: l.intl.string(l.t.xFn72s),
      placeholder: l.intl.string(l.t.R0vK0N),
      value: d,
      onSelectionChange: p,
      options: u.map(e => ({
        id: e.id,
        value: e,
        label: "".concat(o.Ay.getUserTag(e)),
        leading: (0, r.jsx)(a.A, {
          user: e,
          size: i._3J.SIZE_20
        })
      }))
    })
  })
}