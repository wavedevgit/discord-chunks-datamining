/** Chunk was on web.js **/
/** chunk id: 171316, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KK: () => b,
  NZ: () => y,
  gr: () => E,
  lH: () => S,
  uM: () => O,
  xs: () => g
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk873298 = require("./873298.js"),
  Chunk444802 = require("./444802.js"),
  Chunk662502 = require("./662502.js"),
  Chunk93857 = require("./93857.js"),
  Chunk287809 = require("./287809.js"),
  Chunk115063 = require("./115063.js"),
  Chunk899847 = require("./899847.js"),
  Chunk842144 = require("./842144.js"),
  Chunk704724 = require("./704724.js"),
  Chunk500470 = require("./500470.js"),
  Chunk834981 = require("./834981.js"),
  Chunk835002 = require("./835002.js");
let g = () => {
    let e = (0, _.x)(),
      t = l.p7.useControlledSetting(null == e ? true : e.id);
    return null == e ? null : {
      explicitContentNonFriendDm: (0, p.J6)({
        teenId: null == e ? true : e.id,
        setting: null == t ? true : t.explicitContentNonFriendDm
      }),
      explicitContentFriendDm: (0, p.J6)({
        teenId: null == e ? true : e.id,
        setting: null == t ? true : t.explicitContentFriendDm,
        isFriend: true
      }),
      explicitContentGuilds: a.TO.BLUR
    }
  },
  E = () => {
    let e = (0, _.x)(),
      t = l.oQ.useControlledSetting(null == e ? true : e.id);
    if (null == e) return null;
    let {
      goreContentNonFriendDm: n,
      goreContentFriendDm: r
    } = null != t ? t : {};
    return {
      goreContentNonFriendDm: (0, p.ky)(n) ? n : (0, s.jj)({
        isDm: true
      }),
      goreContentFriendDm: (0, p.ky)(r) ? r : (0, s.jj)({
        isDm: true,
        isFriend: true
      }),
      goreContentGuilds: a.TO.BLUR
    }
  },
  b = () => {
    let e = (0, _.x)(),
      t = l.qz.useControlledSetting(null == e ? true : e.id),
      n = l.yr.useControlledSetting(null == e ? true : e.id);
    return null != n ? n : !!t || t
  };

function y() {
  let e = (0, _.x)(),
    t = l.up.useControlledSetting(null == e ? true : e.id),
    n = r.useMemo(() => (0, u.Lx)(t), [t]);
  return n.mutualGuilds && !n.all
}

function O() {
  let e = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
    t = (0, h.Li)();
  return (null == e ? true : e.nsfwAllowed) === false && t
}

function A(e) {
  let t = (0, _.k)();
  return (0, i.bG)([f.A], () => f.A.hasConsented(t, e))
}

function v(e) {
  let t = (0, _.k)();
  return r.useCallback(async n => {
    if (null == t) return;
    let r = n ? [e] : [],
      i = n ? [] : [e];
    try {
      await d.Ay.updateTeenConsents(t, r, i)
    } catch (e) {
      o.A.showFailedToast(m.OB.GENERIC_ERROR)
    }
  }, [t, e])
}

function S(e) {
  return {
    hasConsented: A(e),
    updateConsent: v(e)
  }
}