/** Chunk was on web.js **/
/** chunk id: 225657, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
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
    className: f,
    searchableSelectWrapperClassName: _
  } = e, p = (0, i.Wu)([l.Z], () => l.Z.getFriendIDs()), h = (0, i.Wu)([c.default], () => c.default.filter(e => p.includes(e.id) && !e.bot), [p]), {
    giftRecipient: m,
    setGiftRecipient: g
  } = (0, s.wD)();
  if (null == t) return null;
  let E = e => {
    n(e, t), g(e)
  };
  return (0, r.jsx)("div", {
    className: f,
    children: (0, r.jsx)(a.VcW, {
      wrapperClassName: _,
      label: d.intl.string(d.t.xFn72s),
      placeholder: d.intl.string(d.t.R0vK0N),
      renderOptionPrefix: e => (null == e ? true : e.value) == null ? null : (0, r.jsx)(o.Z, {
        user: e.value,
        size: a.EFr.SIZE_20
      }),
      value: m,
      onChange: E,
      options: h.map(e => ({
        value: e,
        label: "".concat(u.ZP.getUserTag(e))
      }))
    })
  })
}