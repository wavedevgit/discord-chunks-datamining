/** Chunk was on web.js **/
/** chunk id: 350327, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CM: () => A,
  Cf: () => I,
  ID: () => T,
  Ls: () => y,
  Xz: () => P,
  Z: () => b,
  c_: () => N,
  f4: () => R,
  g_: () => S,
  ho: () => v,
  pG: () => O,
  rH: () => w,
  rf: () => D,
  uV: () => j,
  x3: () => x,
  z5: () => C
});
var Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk957730 = require("./957730.js"),
  Chunk695346 = require("./695346.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk956664 = require("./956664.js"),
  Chunk960048 = require("./960048.js"),
  Chunk621853 = require("./621853.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function h(e, t, n) {
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
      h(e, t, n[t])
    })
  }
  return e
}

function E(e) {
  u.default.track(_.rMx.PREMIUM_FEATURE_TRY_OUT, {
    feature_name: e,
    feature_tier: m.h1.PREMIUM_STANDARD
  })
}
async function b(e, t) {
  var n;
  let r = null == (n = c.default.getCurrentUser()) ? true : n.id;
  if (null == r) return;
  let u = l.dN.getSetting();
  null != e.bio && u && (e.bio = s.ZP.parse(true, e.bio).content);
  try {
    a.Z.dispatch({
      type: "USER_PROFILE_UPDATE_START",
      userId: r
    });
    let n = await i.tn.patch({
      url: null != t ? _.ANM.USER_GUILD_PROFILE(t, _.ME) : _.ANM.USER_PROFILE(_.ME),
      body: e,
      rejectWithError: false
    });
    if (n.ok) a.Z.dispatch(g({
      type: "USER_PROFILE_UPDATE_SUCCESS",
      userId: r
    }, n.body));
    else {
      let e = new o.Hx(n);
      a.Z.dispatch({
        type: "USER_PROFILE_UPDATE_FAILURE",
        errors: n.body,
        apiError: e
      })
    }
    return n
  } catch (t) {
    let e = new o.Hx(t);
    return a.Z.dispatch({
      type: "USER_PROFILE_UPDATE_FAILURE",
      errors: {},
      apiError: e
    }), t
  }
}

function y(e, t) {
  var n;
  let r = null == (n = c.default.getCurrentUser()) ? true : n.id;
  null != r && a.Z.dispatch({
    type: "USER_PROFILE_PIN_BADGES_ON_CLIENT",
    badges: e,
    ttlInSeconds: t,
    userId: r
  })
}

function O() {
  Chunk570140.Z.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
  })
}

function v(e) {
  (null == e ? true : e.startsWith("https:")) === true ? fetch(e).then(e => e.blob()).then(e => (0, d.fD)(e)).then(e => S(e)) : null != e && S(e)
}

function S(e) {
  a.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
    banner: e
  })
}

function I(e) {
  a.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
    bio: e
  })
}

function T(e) {
  a.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
    pronouns: e
  })
}

function A(e) {
  a.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
    color: e
  })
}

function C(e) {
  a.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
    themeColors: e
  })
}

function N(e) {
  a.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
    avatar: e
  }), E(m.QP.ANIMATED_AVATAR)
}

function P(e) {
  a.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
    avatarDecoration: e
  }), E(m.QP.AVATAR_DECORATION)
}

function R(e) {
  a.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
    banner: e
  }), E(m.QP.PROFILE_BANNER)
}

function D(e) {
  a.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
    themeColors: e
  }), E(m.QP.PROFILE_THEME_COLOR)
}

function w(e) {
  a.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES",
    displayNameStyles: e
  }), E(m.QP.DISPLAY_NAME_STYLES)
}

function x(e) {
  a.Z.dispatch(g({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET"
  }, e)), E(m.QP.PRESET)
}
async function L() {
  if (null == Chunk621853.Z.applicationWidgetApplicationConfigs || !(Chunk621853.Z.applicationWidgetApplicationConfigs.length > 0)) {
    Chunk570140.Z.dispatch({
      type: "USER_PROFILE_APPLICATION_WIDGET_APPLICATION_CONFIGS_FETCH_START"
    });
    try {
      let e = await Chunk544891.tn.get({
        url: Chunk981631.ANM.USER_PROFILE_APPLICATION_WIDGET_APPLICATION_IDS,
        rejectWithError: true
      });
      Chunk570140.Z.dispatch({
        type: "USER_PROFILE_APPLICATION_WIDGET_APPLICATION_CONFIGS_FETCH_SUCCESS",
        applicationConfigs: module.body.application_configs
      })
    } catch (e) {
      throw Chunk570140.Z.dispatch({
        type: "USER_PROFILE_APPLICATION_WIDGET_APPLICATION_CONFIGS_FETCH_FAILURE"
      }), Chunk960048.Z.captureException(module), module
    }
  }
}
let j = (0, Chunk442837.Kb)(Chunk621853.Z, {
  getQueryId: Chunk981631.McO.APPLICATION_WIDGET_APPLICATION_CONFIGS,
  get: () => Chunk621853.Z.applicationWidgetApplicationConfigs,
  load: () => L()
})