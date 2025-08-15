/** Chunk was on web.js **/
/** chunk id: 350327, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CM: () => I,
  Cf: () => O,
  ID: () => v,
  Ls: () => g,
  Xz: () => A,
  Z: () => m,
  c_: () => S,
  f4: () => N,
  g_: () => y,
  ho: () => b,
  pG: () => E,
  rf: () => C,
  x3: () => R,
  z5: () => T
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk957730 = require("./957730.js"),
  Chunk695346 = require("./695346.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk956664 = require("./956664.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e) {
  c.default.track(d.rMx.PREMIUM_FEATURE_TRY_OUT, {
    feature_name: e,
    feature_tier: f.h1.PREMIUM_STANDARD
  })
}
async function m(e, t) {
  var n, c, u;
  let f = null == (n = l.default.getCurrentUser()) ? true : n.id;
  if (null == f) return;
  let _ = s.dN.getSetting();
  null != e.bio && _ && (e.bio = o.ZP.parse(true, e.bio).content);
  try {
    i.Z.dispatch({
      type: "USER_PROFILE_UPDATE_START",
      userId: f
    });
    let n = await r.tn.patch({
      url: null != t ? d.ANM.USER_GUILD_PROFILE(t, d.ME) : d.ANM.USER_PROFILE(d.ME),
      body: e,
      rejectWithError: false
    });
    if (n.ok) {
      let e = null == (c = n.body.profile_effect) ? true : c.id,
        t = null == (u = n.body.profile_effect) ? true : u.expires_at;
      i.Z.dispatch(p({
        type: "USER_PROFILE_UPDATE_SUCCESS",
        userId: f,
        profileEffectId: e,
        profileEffectExpiresAt: t
      }, n.body))
    } else {
      let e = new a.Hx(n);
      i.Z.dispatch({
        type: "USER_PROFILE_UPDATE_FAILURE",
        errors: n.body,
        apiError: e
      })
    }
    return n
  } catch (t) {
    let e = new a.Hx(t);
    return i.Z.dispatch({
      type: "USER_PROFILE_UPDATE_FAILURE",
      errors: {},
      apiError: e
    }), t
  }
}

function g(e, t) {
  var n;
  let r = null == (n = l.default.getCurrentUser()) ? true : n.id;
  null != r && i.Z.dispatch({
    type: "USER_PROFILE_PIN_BADGES_ON_CLIENT",
    badges: e,
    ttlInSeconds: t,
    userId: r
  })
}

function E() {
  Chunk570140.Z.dispatch({
    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
  })
}

function b(e) {
  (null == e ? true : e.startsWith("https:")) === true ? fetch(e).then(e => e.blob()).then(e => (0, u.fD)(e)).then(e => y(e)) : null != e && y(e)
}

function y(e) {
  i.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
    banner: e
  })
}

function O(e) {
  i.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
    bio: e
  })
}

function v(e) {
  i.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
    pronouns: e
  })
}

function I(e) {
  i.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
    color: e
  })
}

function T(e) {
  i.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
    themeColors: e
  })
}

function S(e) {
  i.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
    avatar: e
  }), h(f.QP.ANIMATED_AVATAR)
}

function A(e) {
  i.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
    avatarDecoration: e
  }), h(f.QP.AVATAR_DECORATION)
}

function N(e) {
  i.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
    banner: e
  }), h(f.QP.PROFILE_BANNER)
}

function C(e) {
  i.Z.dispatch({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
    themeColors: e
  }), h(f.QP.PROFILE_THEME_COLOR)
}

function R(e) {
  i.Z.dispatch(p({
    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET"
  }, e)), h(f.QP.PRESET)
}