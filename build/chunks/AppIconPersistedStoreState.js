/** Chunk was on web.js **/
/** chunk id: 737604, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk550385 = require("./550385.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk997945 = require("./997945.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = 2,
  h = {
    client: {
      desktop: Chunk997945.aH.DEFAULT,
      coachmarkImpressions: 0
    }
  },
  g = true,
  E = () => {
    (g = !c.ZP.canUsePremiumAppIcons(s.default.getCurrentUser())) && b(u.aH.DEFAULT)
  },
  b = e => {
    if (h.client.desktop = e, !g) {
      var t;
      l.default.track(d.rMx.APP_ICON_UPDATED, {
        icon_id: e,
        user_premium_tier: null == (t = s.default.getCurrentUser()) ? true : t.premiumType,
        icon_premium_tier: e !== u.aH.DEFAULT ? p.PremiumTypes.TIER_2 : null
      })
    }
  };

function y(e) {
  let {
    id: t
  } = e;
  null != t && b(t)
}

function O() {
  g && (h.client = {
    desktop: u.aH.DEFAULT,
    coachmarkImpressions: m
  })
}

function v(e) {
  let {
    markAsDismissed: t
  } = e;
  h.client.coachmarkImpressions += 1, h.client.coachmarkImpressions >= m && (null == t || t(f.L.UNKNOWN), O(), (0, o.Ll)())
}
class S extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (h = e), this.waitFor(s.default), this.syncWith([s.default], E)
  }
  get isUpsellPreview() {
    return g
  }
  getState() {
    return h
  }
  getCurrentDesktopIcon() {
    var e;
    return null == h || null == (e = h.client) ? true : e.desktop
  }
}
_(S, "displayName", "AppIconPersistedStoreState"), _(S, "persistKey", "AppIconPersistedStoreState");
let I = new S(Chunk570140.Z, {
  APP_ICON_UPDATED: y,
  APP_ICON_EDITOR_RESET: O,
  APP_ICON_TRACK_IMPRESSION: v,
  LOGOUT: O
})