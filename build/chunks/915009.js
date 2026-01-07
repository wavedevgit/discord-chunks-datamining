/** Chunk was on web.js **/
/** chunk id: 915009, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  LN: () => O,
  T3: () => E,
  aR: () => I,
  q1: () => b,
  rD: () => y,
  xf: () => g
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk925513 = require("./925513.js"),
  Chunk681678 = require("./681678.js"),
  Chunk722687 = require("./722687.js"),
  Chunk594174 = require("./594174.js"),
  Chunk88658 = require("./88658.js"),
  Chunk260722 = require("./260722.js"),
  Chunk473007 = require("./473007.js"),
  Chunk800651 = require("./800651.js"),
  Chunk652262 = require("./652262.js"),
  Chunk631885 = require("./631885.js"),
  Chunk484710 = require("./484710.js");
let g = () => {
    let e = (0, _.F)(),
      t = l.sx.useControlledSetting(null == e ? true : e.id);
    return null == e ? null : {
      explicitContentNonFriendDm: (0, p.bE)({
        teenId: null == e ? true : e.id,
        setting: null == t ? true : t.explicitContentNonFriendDm
      }),
      explicitContentFriendDm: (0, p.bE)({
        teenId: null == e ? true : e.id,
        setting: null == t ? true : t.explicitContentFriendDm,
        isFriend: true
      }),
      explicitContentGuilds: a.Q4.BLUR
    }
  },
  E = () => {
    let e = (0, _.F)(),
      t = l.up.useControlledSetting(null == e ? true : e.id);
    if (null == e) return null;
    let {
      goreContentNonFriendDm: n,
      goreContentFriendDm: r
    } = null != t ? t : {};
    return {
      goreContentNonFriendDm: (0, p.n6)(n) ? n : (0, o.zR)({
        isDm: true
      }),
      goreContentFriendDm: (0, p.n6)(r) ? r : (0, o.zR)({
        isDm: true,
        isFriend: true
      }),
      goreContentGuilds: a.Q4.BLUR
    }
  },
  b = () => {
    let e = (0, _.F)(),
      t = l.Ov.useControlledSetting(null == e ? true : e.id),
      n = l.vV.useControlledSetting(null == e ? true : e.id);
    return null != n ? n : !!t || t
  };

function y() {
  let e = (0, _.F)(),
    t = l.vB.useControlledSetting(null == e ? true : e.id),
    n = r.useMemo(() => (0, u.bL)(t), [t]);
  return n.mutualGuilds && !n.all
}

function O() {
  let e = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
    t = (0, m.AZ)();
  return (null == e ? true : e.nsfwAllowed) === false && t
}

function v(e) {
  let t = (0, _.M)();
  return (0, i.e7)([f.Z], () => f.Z.hasConsented(t, e))
}

function S(e) {
  let t = (0, _.M)();
  return r.useCallback(async n => {
    if (null == t) return;
    let r = n ? [e] : [],
      i = n ? [] : [e];
    try {
      await d.ZP.updateTeenConsents(t, r, i)
    } catch (e) {
      s.Z.showFailedToast(h.wQ.GENERIC_ERROR)
    }
  }, [t, e])
}

function I(e) {
  return {
    hasConsented: v(e),
    updateConsent: S(e)
  }
}