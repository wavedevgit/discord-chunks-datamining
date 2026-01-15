/** Chunk was on web.js **/
/** chunk id: 225657, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk668339 = require("./668339.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk987209 = require("./987209.jsx"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx");
let u = e => {
  let {
    selectedSkuId: t,
    validateSelectedGift: n,
    className: u,
    searchableSelectWrapperClassName: d,
    recipients: f
  } = e, {
    giftRecipient: p,
    setGiftRecipient: _
  } = (0, s.wD)();
  if (null == t) return null;
  let h = e => {
    n(e, t), _(e)
  };
  return (0, r.jsx)("div", {
    className: u,
    children: (0, r.jsx)(i.d, {
      wrapperClassName: d,
      label: c.intl.string(c.t.xFn72s),
      placeholder: c.intl.string(c.t.R0vK0N),
      renderOptionPrefix: e => (null == e ? true : e.value) == null ? null : (0, r.jsx)(o.Z, {
        user: e.value,
        size: a.EFr.SIZE_20
      }),
      value: p,
      onChange: h,
      options: f.map(e => ({
        value: e,
        label: "".concat(l.ZP.getUserTag(e))
      }))
    })
  })
}