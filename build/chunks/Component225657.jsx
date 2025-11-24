/** Chunk was on web.js **/
/** chunk id: 225657, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk987209 = require("./987209.jsx"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx");
let c = e => {
  let {
    selectedSkuId: t,
    validateSelectedGift: n,
    className: c,
    searchableSelectWrapperClassName: u,
    recipients: d
  } = e, {
    giftRecipient: f,
    setGiftRecipient: _
  } = (0, o.wD)();
  if (null == t) return null;
  let p = e => {
    n(e, t), _(e)
  };
  return (0, r.jsx)("div", {
    className: c,
    children: (0, r.jsx)(i.VcW, {
      wrapperClassName: u,
      label: l.intl.string(l.t.xFn72s),
      placeholder: l.intl.string(l.t.R0vK0N),
      renderOptionPrefix: e => (null == e ? true : e.value) == null ? null : (0, r.jsx)(a.Z, {
        user: e.value,
        size: i.EFr.SIZE_20
      }),
      value: f,
      onChange: p,
      options: d.map(e => ({
        value: e,
        label: "".concat(s.ZP.getUserTag(e))
      }))
    })
  })
}