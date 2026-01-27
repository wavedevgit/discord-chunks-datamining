/** Chunk was on web.js **/
/** chunk id: 207803, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dv: () => v,
  EW: () => D,
  Er: () => I,
  FY: () => M,
  Go: () => w,
  Gr: () => b,
  Iz: () => A,
  Oz: () => S,
  RE: () => O,
  XW: () => T,
  Zz: () => C,
  a: () => P,
  e$: () => N,
  gi: () => y,
  w5: () => L,
  xe: () => R
});
var Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk198982 = require("./198982.js"),
  Chunk451909 = require("./451909.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk515718 = require("./515718.js"),
  Chunk728458 = require("./728458.js"),
  Chunk622543 = require("./622543.js"),
  Chunk814390 = require("./814390.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e) {
  c.default.track(_.HAw.PREMIUM_FEATURE_TRY_OUT, {
    feature_name: e,
    feature_tier: h.tz.PREMIUM_STANDARD
  })
}
async function y(e, t) {
  var n;
  let r = null == (n = l.default.getCurrentUser()) ? true : n.id;
  if (null == r) return;
  let c = (0, p.h)();
  null != e.bio && c && (e.bio = s.Ay.parse(true, e.bio).content);
  try {
    a.h.dispatch({
      type: "USER_PROFILE_UPDATE_START",
      userId: r
    });
    let n = await i.Bo.patch({
      url: null != t ? _.Rsh.USER_GUILD_PROFILE(t, _.ME) : _.Rsh.USER_PROFILE(_.ME),
      body: e,
      rejectWithError: false
    });
    if (n.ok) a.h.dispatch(g({
      type: "USER_PROFILE_UPDATE_SUCCESS",
      userId: r
    }, n.body));
    else {
      let e = new o.LG(n);
      a.h.dispatch({
        type: "USER_PROFILE_UPDATE_FAILURE",
        errors: n.body,
        apiError: e
      })
    }
    return n
  } catch (t) {
    let e = new o.LG(t);
    return a.h.dispatch({
      type: "USER_PROFILE_UPDATE_FAILURE",
      errors: {},
      apiError: e
    }), t
  }
}

function b(e, t) {
  var n;
  let r = null == (n = l.default.getCurrentUser()) ? true : n.id;
  null != r && a.h.dispatch({
    type: "USER_PROFILE_PIN_BADGES_ON_CLIENT",
    badges: e,
    ttlInSeconds: t,
    userId: r
  })
}

function O() {
  a.h.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
  })
}

function v(e) {
  (null == e ? true : e.startsWith("https:")) === true ? fetch(e).then(e => e.blob()).then(e => (0, u.We)(e)).then(e => A(e)) : null != e && A(e)
}

function A(e) {
  a.h.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
    banner: e
  })
}

function I(e) {
  a.h.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
    bio: e
  })
}

function S(e) {
  a.h.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
    pronouns: e
  })
}

function T(e) {
  a.h.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
    color: e
  })
}

function C(e) {
  a.h.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
    themeColors: e
  })
}

function N(e) {
  a.h.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
    avatar: e
  }), E(h.Ae.ANIMATED_AVATAR)
}

function w(e) {
  a.h.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
    avatarDecoration: e
  }), E(h.Ae.AVATAR_DECORATION)
}

function R(e) {
  a.h.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
    banner: e
  }), E(h.Ae.PROFILE_BANNER)
}

function P(e) {
  a.h.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
    themeColors: e
  }), E(h.Ae.PROFILE_THEME_COLOR)
}

function D(e) {
  a.h.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES",
    displayNameStyles: e
  }), E(h.Ae.DISPLAY_NAME_STYLES)
}

function L(e) {
  a.h.dispatch(g({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET"
  }, e)), E(h.Ae.PRESET)
}
async function x() {
  if (null == f.A.applicationWidgetConfigs || !(f.A.applicationWidgetConfigs.length > 0)) {
    a.h.dispatch({
      type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_START"
    });
    try {
      let e = await i.Bo.get({
        url: _.Rsh.USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS,
        rejectWithError: true
      });
      a.h.dispatch({
        type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_SUCCESS",
        applicationConfigs: e.body.application_configs
      })
    } catch (e) {
      throw a.h.dispatch({
        type: "USER_PROFILE_APPLICATION_WIDGET_CONFIGS_FETCH_FAILURE"
      }), d.A.captureException(e), e
    }
  }
}
let M = (0, Chunk311907.UT)(Chunk622543.A, {
  getQueryId: Chunk652215.fic.APPLICATION_WIDGET_APPLICATION_CONFIGS,
  get: () => f.A.applicationWidgetConfigs,
  load: () => x()
})