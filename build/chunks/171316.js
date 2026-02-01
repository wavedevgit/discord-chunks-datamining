/** Chunk was on 9207 **/
/** chunk id: 171316, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  KK: () => b,
  NZ: () => h,
  gr: () => f,
  lH: () => O,
  uM: () => E,
  xs: () => A
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
let A = () => {
    let e = (0, p.x)(),
      t = o.p7.useControlledSetting(null == e ? true : e.id);
    return null == e ? null : {
      explicitContentNonFriendDm: (0, _.J6)({
        teenId: null == e ? true : e.id,
        setting: null == t ? true : t.explicitContentNonFriendDm
      }),
      explicitContentFriendDm: (0, _.J6)({
        teenId: null == e ? true : e.id,
        setting: null == t ? true : t.explicitContentFriendDm,
        isFriend: true
      }),
      explicitContentGuilds: l.TO.BLUR
    }
  },
  f = () => {
    let e = (0, p.x)(),
      t = o.oQ.useControlledSetting(null == e ? true : e.id);
    if (null == e) return null;
    let {
      goreContentNonFriendDm: n,
      goreContentFriendDm: r
    } = null != t ? t : {};
    return {
      goreContentNonFriendDm: (0, _.ky)(n) ? n : (0, s.jj)({
        isDm: true
      }),
      goreContentFriendDm: (0, _.ky)(r) ? r : (0, s.jj)({
        isDm: true,
        isFriend: true
      }),
      goreContentGuilds: l.TO.BLUR
    }
  },
  b = () => {
    let e = (0, p.x)(),
      t = o.qz.useControlledSetting(null == e ? true : e.id),
      n = o.yr.useControlledSetting(null == e ? true : e.id);
    return null != n ? n : !!t || t
  };

function h() {
  let e = (0, p.x)(),
    t = o.up.useControlledSetting(null == e ? true : e.id),
    n = r.useMemo(() => (0, c.Lx)(t), [t]);
  return n.mutualGuilds && !n.all
}

function E() {
  return (0, m.Du)()
}

function O(e) {
  let t, n;
  return {
    hasConsented: (t = (0, p.k)(), (0, i.bG)([u.A], () => u.A.hasConsented(t, e))),
    updateConsent: (n = (0, p.k)(), r.useCallback(async t => {
      if (null != n) try {
        await d.Ay.updateTeenConsents(n, t ? [e] : [], t ? [] : [e])
      } catch (e) {
        a.A.showFailedToast(g.OB.GENERIC_ERROR)
      }
    }, [n, e]))
  }
}