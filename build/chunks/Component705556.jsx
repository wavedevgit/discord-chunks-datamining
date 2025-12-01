/** Chunk was on web.js **/
/** chunk id: 705556, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk887413 = require("./887413.jsx"),
  Chunk300284 = require("./300284.js"),
  Chunk314897 = require("./314897.js"),
  Chunk430824 = require("./430824.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk732380 = require("./732380.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk530401 = require("./530401.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function O(e) {
  let {
    user: t,
    guildId: n,
    fullWidth: g,
    appContext: y,
    onClose: O
  } = e, v = (0, a.e7)([c.default], () => c.default.getId() === t.id), S = (0, a.e7)([u.Z], () => null != n ? u.Z.getGuild(n) : null), I = (0, a.e7)([p.Z], () => p.Z.hasSaveablePendingChanges()), T = (0, l.Z)({
    guild: S
  }), A = (0, l.Z)({}), {
    trackUserProfileAction: C
  } = (0, d.KZ)(), N = i.useRef(null);
  return v ? null == S ? (0, r.jsx)(_.O1, {
    action: "EDIT_PROFILE",
    text: m.intl.string(m.t.s5vZlQ),
    icon: o.vdY,
    autoFocus: true,
    fullWidth: g,
    variant: "primary",
    onClick: () => {
      if (I) return void f.Z.notifyPendingWidgets();
      null == O || O(), A(), (0, s.i)(y)
    }
  }) : (0, r.jsx)(o.yRy, {
    targetElementRef: N,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsxs)(o.v2r, {
        className: h.popoutMenu,
        onSelect: true,
        navId: "edit-profile-popout",
        onClose: () => {
          t(), null == O || O()
        },
        "aria-label": m.intl.string(m.t.AXIHpV),
        children: [(0, r.jsx)(o.sNh, {
          id: "edit-server-profile",
          label: m.intl.string(m.t["PKQB/H"]),
          subtext: m.intl.string(m.t.VYHWKJ),
          action: () => {
            C({
              action: "EDIT_GUILD_PROFILE"
            }), T(), (0, s.i)(y)
          }
        }), (0, r.jsx)(o.sNh, {
          id: "edit-main-profile",
          label: m.intl.string(m.t.HmFaFB),
          subtext: m.intl.string(m.t["+EERMk"]),
          action: () => {
            C({
              action: "EDIT_PROFILE"
            }), A(), (0, s.i)(y)
          }
        })]
      })
    },
    children: e => {
      var {
        onClick: t
      } = e, n = b(e, ["onClick"]);
      return (0, r.jsx)(_.O1, E({
        buttonRef: N,
        text: m.intl.string(m.t.s5vZlQ),
        icon: o.vdY,
        autoFocus: true,
        fullWidth: g,
        variant: "primary",
        onClick: () => {
          if (I) return void f.Z.notifyPendingWidgets();
          null == t || t()
        }
      }, n))
    }
  }) : null
}