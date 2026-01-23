/** Chunk was on web.js **/
/** chunk id: 171316, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KK: () => E,
  NZ: () => y,
  gr: () => g,
  lH: () => A,
  uM: () => b,
  xs: () => m
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk873298 = require("./873298.js"),
  Chunk444802 = require("./444802.js"),
  Chunk662502 = require("./662502.js"),
  Chunk93857 = require("./93857.js"),
  Chunk115063 = require("./115063.js"),
  Chunk899847 = require("./899847.js"),
  Chunk842144 = require("./842144.js"),
  Chunk704724 = require("./704724.js"),
  Chunk500470 = require("./500470.js"),
  Chunk834981 = require("./834981.js"),
  Chunk835002 = require("./835002.js");
let m = () => {
    let e = (0, p.x)(),
      t = l.p7.useControlledSetting(null == e ? true : e.id);
    return null == e ? null : {
      explicitContentNonFriendDm: (0, f.J6)({
        teenId: null == e ? true : e.id,
        setting: null == t ? true : t.explicitContentNonFriendDm
      }),
      explicitContentFriendDm: (0, f.J6)({
        teenId: null == e ? true : e.id,
        setting: null == t ? true : t.explicitContentFriendDm,
        isFriend: true
      }),
      explicitContentGuilds: a.TO.BLUR
    }
  },
  g = () => {
    let e = (0, p.x)(),
      t = l.oQ.useControlledSetting(null == e ? true : e.id);
    if (null == e) return null;
    let {
      goreContentNonFriendDm: n,
      goreContentFriendDm: r
    } = null != t ? t : {};
    return {
      goreContentNonFriendDm: (0, f.ky)(n) ? n : (0, s.jj)({
        isDm: true
      }),
      goreContentFriendDm: (0, f.ky)(r) ? r : (0, s.jj)({
        isDm: true,
        isFriend: true
      }),
      goreContentGuilds: a.TO.BLUR
    }
  },
  E = () => {
    let e = (0, p.x)(),
      t = l.qz.useControlledSetting(null == e ? true : e.id),
      n = l.yr.useControlledSetting(null == e ? true : e.id);
    return null != n ? n : !!t || t
  };

function y() {
  let e = (0, p.x)(),
    t = l.up.useControlledSetting(null == e ? true : e.id),
    n = r.useMemo(() => (0, c.Lx)(t), [t]);
  return n.mutualGuilds && !n.all
}

function b() {
  return (0, _.Du)()
}

function O(e) {
  let t = (0, p.k)();
  return (0, i.bG)([d.A], () => d.A.hasConsented(t, e))
}

function v(e) {
  let t = (0, p.k)();
  return r.useCallback(async n => {
    if (null == t) return;
    let r = n ? [e] : [],
      i = n ? [] : [e];
    try {
      await u.Ay.updateTeenConsents(t, r, i)
    } catch (e) {
      o.A.showFailedToast(h.OB.GENERIC_ERROR)
    }
  }, [t, e])
}

function A(e) {
  return {
    hasConsented: O(e),
    updateConsent: v(e)
  }
}