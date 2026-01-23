/** Chunk was on web.js **/
/** chunk id: 195898, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk317097 = require("./317097.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk345815 = require("./345815.js"),
  Chunk590703 = require("./590703.js"),
  Chunk543699 = require("./543699.js"),
  Chunk112847 = require("./112847.js"),
  Chunk996988 = require("./996988.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
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
let g = {
    [Chunk996988.d.POPOUT]: "user-profile-popout",
    [Chunk996988.d.MODAL]: "user-profile-modal",
    [Chunk996988.d.MODAL_V2]: "user-profile-modal-v2",
    [Chunk996988.d.SIDEBAR]: "user-profile-sidebar",
    [Chunk996988.d.VIDEO_TILE_BACKGROUND]: "user-profile-video-tile-background"
  },
  E = "custom-user-profile-theme",
  y = Object.freeze({
    "--profile-gradient-primary-color": "var(--background-surface-high)",
    "--profile-gradient-secondary-color": "var(--background-surface-high)",
    "--profile-gradient-overlay-color": "rgba(0, 0, 0, 0)",
    "--profile-gradient-button-color": "var(--background-mod-subtle)",
    "--profile-gradient-modal-background-color": "var(--background-base-lower)"
  });

function b(e) {
  let {
    theme: t,
    themeType: n,
    primaryColor: i,
    secondaryColor: _,
    forceUserTheme: h = false
  } = e, [b, O] = (0, o.yK)([c.A], () => [c.A.desaturateUserColors, c.A.syncProfileThemeWithUserTheme]), v = (0, p.k)(t), A = O || h ? null == v ? true : v.overlaySyncedWithUserTheme : null == v ? true : v.overlay;
  return {
    profileThemeStyle: (0, r.useMemo)(() => {
      if (null == i || null == _ || null == v || null == A) return y;
      let e = (e, t) => (0, s.$k)(e, b, null, t);
      return m({
        "--profile-gradient-primary-color": e(i),
        "--profile-gradient-secondary-color": e(_),
        "--profile-gradient-overlay-color": A,
        "--profile-gradient-button-color": e((0, f.wg)(i)),
        "--profile-gradient-modal-background-color": e((0, f.v2)(i, _, O || h ? t : true))
      }, (0, u.Zk)({
        enabled: true,
        primaryColor: i,
        secondaryColor: _,
        isDarkTheme: (0, l.Mwr)(t),
        textMixAmount: 25
      }))
    }, [i, _, v, A, O, h, t, b]),
    profileThemeClassName: a()((0, l.mo9)(t), null != n ? {
      [g[n]]: true
    } : true, {
      [d.Gc]: null != i,
      [E]: null != i
    })
  }
}