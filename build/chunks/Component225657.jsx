/** Chunk was on web.js **/
/** chunk id: 225657, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk987209 = require("./987209.jsx"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx");
let f = e => {
  let {
    selectedSkuId: t,
    validateSelectedGift: n,
    className: f
  } = e, _ = (0, i.Wu)([l.Z], () => l.Z.getFriendIDs()), p = (0, i.Wu)([c.default], () => c.default.filter(e => _.includes(e.id) && !e.bot), [_]), {
    giftRecipient: h,
    setGiftRecipient: m
  } = (0, s.wD)();
  if (null == t) return null;
  let g = e => {
    n(e, t), m(e)
  };
  return (0, r.jsxs)("div", {
    className: f,
    children: [(0, r.jsx)(o.vwX, {
      children: d.intl.string(d.t.xFn72t)
    }), (0, r.jsx)(o.VcW, {
      placeholder: d.intl.string(d.t.R0vK0N),
      renderOptionPrefix: e => (null == e ? true : e.value) == null ? null : (0, r.jsx)(a.Z, {
        user: e.value,
        size: o.EFr.SIZE_20
      }),
      value: h,
      onChange: g,
      options: p.map(e => ({
        value: e,
        label: "".concat(u.ZP.getUserTag(e))
      }))
    })]
  })
}