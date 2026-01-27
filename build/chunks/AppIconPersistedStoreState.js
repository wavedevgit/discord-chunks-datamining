/** Chunk was on web.js **/
/** chunk id: 526162, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk793943 = require("./793943.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk350972 = require("./350972.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk788868 = require("./788868.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = 2,
  m = {
    client: {
      desktop: Chunk350972.LW.DEFAULT,
      coachmarkImpressions: 0
    }
  },
  g = true,
  E = () => {
    (g = !c.Ay.canUsePremiumAppIcons(s.default.getCurrentUser())) && y(u.LW.DEFAULT)
  },
  y = e => {
    if (m.client.desktop = e, !g) {
      var t;
      l.default.track(d.HAw.APP_ICON_UPDATED, {
        icon_id: e,
        user_premium_tier: null == (t = s.default.getCurrentUser()) ? true : t.premiumType,
        icon_premium_tier: e !== u.LW.DEFAULT ? p.PremiumTypes.TIER_2 : null
      })
    }
  };

function b(e) {
  let {
    id: t
  } = e;
  null != t && y(t)
}

function O() {
  g && (m.client = {
    desktop: u.LW.DEFAULT,
    coachmarkImpressions: h
  })
}

function v(e) {
  let {
    markAsDismissed: t
  } = e;
  m.client.coachmarkImpressions += 1, m.client.coachmarkImpressions >= h && (null == t || t(f.i.UNKNOWN), O(), (0, o.Jp)())
}
class A extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && (m = e), this.waitFor(s.default), this.syncWith([s.default], E)
  }
  get isUpsellPreview() {
    return g
  }
  getState() {
    return m
  }
  getCurrentDesktopIcon() {
    var e;
    return null == m || null == (e = m.client) ? true : e.desktop
  }
}
_(A, "displayName", "AppIconPersistedStoreState"), _(A, "persistKey", "AppIconPersistedStoreState");
let I = new A(Chunk73153.h, {
  APP_ICON_UPDATED: b,
  APP_ICON_EDITOR_RESET: O,
  APP_ICON_TRACK_IMPRESSION: v,
  LOGOUT: O
})