/** Chunk was on web.js **/
/** chunk id: 74396, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk728458 = require("./728458.js"),
  Chunk185928 = require("./185928.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = [],
  u = 0;

function d(e) {
  try {
    let t = s.dP[e.base_theme];
    return e.colors.length > 0 && "number" == typeof e.gradient_angle && "number" == typeof e.base_mix && null != t
  } catch (e) {
    return o.A.captureMessage("Invalid saved custom theme: " + e, {
      tags: {
        app_context: "SavedCustomThemeStore"
      }
    }), false
  }
}

function f() {
  u = 1
}
let p = e => {
    let {
      themes: t
    } = e;
    u = 2, c = t.filter(d).map(e => {
      let t = s.dP;
      return {
        colors: e.colors,
        gradient_angle: e.gradient_angle,
        base_mix: e.base_mix,
        base_theme: t[e.base_theme]
      }
    })
  },
  _ = e => {
    let {
      error: t
    } = e;
    u = 3, o.A.captureException(t, {
      tags: {
        app_context: "SavedCustomThemeStore"
      }
    })
  };
class h extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && (c = e.savedCustomThemes), u = 0
  }
  getState() {
    return {
      savedCustomThemes: null != c ? c : []
    }
  }
  getSavedCustomTheme() {
    return (null == c ? true : c.length) > 0 && c[0].colors.length > 0 ? c[0] : null
  }
  getFetchState() {
    return u
  }
  hasSavedCustomThemes() {
    return (null == c ? true : c.length) > 0
  }
  isFetching() {
    return 1 === u
  }
  hasFetched() {
    return 2 === u
  }
  hasError() {
    return 3 === u
  }
}
l(h, "displayName", "SavedCustomThemeStore"), l(h, "persistKey", "SavedCustomThemeStore");
let m = new h(Chunk73153.h, {
  SAVED_CUSTOM_THEMES_FETCH_START: f,
  SAVED_CUSTOM_THEMES_FETCH_SUCCESS: p,
  SAVED_CUSTOM_THEMES_FETCH_FAILURE: _
})