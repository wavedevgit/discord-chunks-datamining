/** Chunk was on web.js **/
/** chunk id: 570314, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk177640 = require("./177640.js"),
  Chunk297486 = require("./297486.js"),
  Chunk342384 = require("./342384.js"),
  Chunk204776 = require("./204776.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk954571 = require("./954571.js"),
  Chunk957565 = require("./957565.js"),
  Chunk998218 = require("./998218.js"),
  Chunk692848 = require("./692848.js"),
  Chunk622543 = require("./622543.js"),
  Chunk403777 = require("./403777.jsx"),
  Chunk993401 = require("./993401.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = S(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function T(e) {
  let {
    user: t,
    closePopout: n
  } = e, v = I(e, ["user", "closePopout"]), S = i.useRef(null), T = (0, a.bG)([g.A], () => {
    var e;
    return null == (e = g.A.getUserProfile(t.id)) ? true : e.application
  }), C = (0, a.bG)([f.A, d.A], () => d.A.getChannel(f.A.getChannelId())), N = (0, o.A)(C), R = t.id, w = i.useCallback(() => {
    null != T && (N ? ((0, l.hg)(T.id), (0, s.OoC)((0, E.n)(R, null == C ? true : C.guild_id)), null == n || n(), p.default.track(b.HAw.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, {
      application_id: T.id
    })) : (0, m.o)(A({
      applicationId: T.id
    }, T)))
  }, [T, N, R, null == C ? true : C.guild_id, n]), P = N ? O.intl.string(O.t["Cia+A8"]) : O.intl.string(O.t.NgXl3C);
  if (null == T || !(0, u.Ie)(T)) return null;
  let {
    customInstallUrl: D
  } = T, x = null == D || h.A.isDiscordUrl(D) ? s.j96 : s.I9m, L = N ? true : x;
  return _.p5 ? (0, r.jsx)(s.YNO, {
    targetElementRef: S,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(s.W1t, {
        "data-menu-migration-ready": true,
        navId: "user-bot-profile-add-app",
        onClose: t,
        "aria-label": O.intl.string(O.t.dbkxVm),
        onSelect: true,
        children: (0, r.jsx)(s.rXV, {
          children: (0, r.jsx)(s.Drp, {
            id: "copy",
            label: O.intl.string(O.t.XWDihq),
            action: () => (0, _.C)((0, c.V)(T))
          })
        })
      })
    },
    children: e => {
      let {
        onClick: t
      } = e, n = I(e, ["onClick"]);
      return (0, r.jsx)(y.FD, A({
        buttonRef: S,
        action: "PRESS_ADD_APP",
        text: P,
        icon: L,
        onContextMenu: t,
        onClick: w
      }, n, v))
    }
  }) : (0, r.jsx)(y.FD, A({
    action: "PRESS_ADD_APP",
    text: P,
    icon: L,
    onClick: w,
    variant: "primary"
  }, v))
}