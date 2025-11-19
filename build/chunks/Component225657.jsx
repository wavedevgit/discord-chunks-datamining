/** Chunk was on web.js **/
/** chunk id: 225657, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk987209 = require("./987209.jsx"),
  Chunk752048 = require("./752048.js"),
  Chunk837411 = require("./837411.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk69143 = require("./69143.js"),
  Chunk388032 = require("./388032.jsx");
let h = e => {
  let {
    selectedSkuId: t,
    validateSelectedGift: n,
    className: h,
    searchableSelectWrapperClassName: m
  } = e, {
    affineGiftingEnabled: g,
    affinityThreshold: E
  } = _.Z.useConfig({
    location: "Collectibles Gift Recipient Picker"
  }), b = (0, i.Wu)([u.Z], () => u.Z.getFriendIDs()), y = (0, i.Wu)([l.Z], () => l.Z.getUserAffinities().filter(e => {
    let {
      isFriend: t,
      communicationProbability: n,
      vcProbability: r,
      otherUserId: i
    } = e, a = !t && (n >= E || r >= E), o = (0, c.n)(i);
    return a && o
  }).map(e => {
    let {
      otherUserId: t
    } = e;
    return t
  })), O = [...b, ...g ? y : []], v = (0, i.Wu)([d.default], () => d.default.filter(e => O.includes(e.id) && !e.bot), [O]), {
    giftRecipient: I,
    setGiftRecipient: T
  } = (0, s.wD)();
  if (null == t) return null;
  let S = e => {
    n(e, t), T(e)
  };
  return (0, r.jsx)("div", {
    className: h,
    children: (0, r.jsx)(a.VcW, {
      wrapperClassName: m,
      label: p.intl.string(p.t.xFn72s),
      placeholder: p.intl.string(p.t.R0vK0N),
      renderOptionPrefix: e => (null == e ? true : e.value) == null ? null : (0, r.jsx)(o.Z, {
        user: e.value,
        size: a.EFr.SIZE_20
      }),
      value: I,
      onChange: S,
      options: v.map(e => ({
        value: e,
        label: "".concat(f.ZP.getUserTag(e))
      }))
    })
  })
}