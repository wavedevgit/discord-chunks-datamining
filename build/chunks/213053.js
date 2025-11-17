/** Chunk was on web.js **/
/** chunk id: 213053, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk866442 = require("./866442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk629935 = require("./629935.js"),
  Chunk168551 = require("./168551.js"),
  Chunk168631 = require("./168631.js"),
  Chunk579132 = require("./579132.js"),
  Chunk671955 = require("./671955.js");

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
    [Chunk671955.l.POPOUT]: "user-profile-popout",
    [Chunk671955.l.MODAL]: "user-profile-modal",
    [Chunk671955.l.MODAL_V2]: "user-profile-modal-v2",
    [Chunk671955.l.SIDEBAR]: "user-profile-sidebar"
  },
  E = "custom-user-profile-theme",
  b = Object.freeze({
    "--profile-gradient-primary-color": "var(--background-surface-high)",
    "--profile-gradient-secondary-color": "var(--background-surface-high)",
    "--profile-gradient-overlay-color": "rgba(0, 0, 0, 0)",
    "--profile-gradient-button-color": "var(--background-mod-subtle)",
    "--profile-gradient-modal-background-color": "var(--background-base-lower)"
  });

function y(e) {
  let {
    theme: t,
    themeType: n,
    primaryColor: i,
    secondaryColor: p,
    forceUserTheme: h = false
  } = e, [y, O] = (0, s.Wu)([c.Z], () => [c.Z.desaturateUserColors, c.Z.syncProfileThemeWithUserTheme]), v = (0, _.f)(t), I = O || h ? null == v ? true : v.overlaySyncedWithUserTheme : null == v ? true : v.overlay;
  return {
    profileThemeStyle: (0, r.useMemo)(() => {
      if (null == i || null == p || null == v || null == I) return b;
      let e = (e, t) => (0, o.ho)(e, y, null, t);
      return m({
        "--profile-gradient-primary-color": e(i),
        "--profile-gradient-secondary-color": e(p),
        "--profile-gradient-overlay-color": I,
        "--profile-gradient-button-color": e((0, f.ZB)(i)),
        "--profile-gradient-modal-background-color": e((0, f.oU)(i, p, O || h ? t : true))
      }, (0, u.W4)({
        enabled: true,
        primaryColor: i,
        secondaryColor: p,
        isDarkTheme: (0, l.wjy)(t),
        textMixAmount: 25
      }))
    }, [i, p, v, I, O, h, t, y]),
    profileThemeClassName: a()((0, l.QeD)(t), null != n ? {
      [g[n]]: true
    } : true, {
      [d.e3]: null != i,
      [E]: null != i
    })
  }
}