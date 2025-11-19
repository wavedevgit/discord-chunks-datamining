/** Chunk was on web.js **/
/** chunk id: 225657, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk987209 = require("./987209.jsx"),
  Chunk752048 = require("./752048.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk69143 = require("./69143.js"),
  Chunk388032 = require("./388032.jsx");
let p = e => {
  let {
    selectedSkuId: t,
    validateSelectedGift: n,
    className: p,
    searchableSelectWrapperClassName: h
  } = e, {
    affineGiftingEnabled: m,
    affinityThreshold: g
  } = f.Z.useConfig({
    location: "Collectibles Gift Recipient Picker"
  }), E = (0, i.Wu)([c.Z], () => c.Z.getFriendIDs()), b = (0, i.Wu)([l.Z], () => l.Z.getUserAffinities().filter(e => {
    let {
      isFriend: t,
      communicationProbability: n,
      vcProbability: r
    } = e;
    return !t && (n >= g || r > g)
  }).map(e => {
    let {
      otherUserId: t
    } = e;
    return t
  })), y = [...E, ...m ? b : []], O = (0, i.Wu)([u.default], () => u.default.filter(e => y.includes(e.id) && !e.bot), [y]), {
    giftRecipient: v,
    setGiftRecipient: I
  } = (0, s.wD)();
  if (null == t) return null;
  let T = e => {
    n(e, t), I(e)
  };
  return (0, r.jsx)("div", {
    className: p,
    children: (0, r.jsx)(a.VcW, {
      wrapperClassName: h,
      label: _.intl.string(_.t.xFn72s),
      placeholder: _.intl.string(_.t.R0vK0N),
      renderOptionPrefix: e => (null == e ? true : e.value) == null ? null : (0, r.jsx)(o.Z, {
        user: e.value,
        size: a.EFr.SIZE_20
      }),
      value: v,
      onChange: T,
      options: O.map(e => ({
        value: e,
        label: "".concat(d.ZP.getUserTag(e))
      }))
    })
  })
}