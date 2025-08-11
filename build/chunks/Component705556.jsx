/** Chunk was on web.js **/
/** chunk id: 705556, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk549879 = require("./549879.jsx"),
  Chunk300284 = require("./300284.js"),
  Chunk314897 = require("./314897.js"),
  Chunk430824 = require("./430824.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk732380 = require("./732380.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk206435 = require("./206435.js");

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

function g(e) {
  let {
    user: t,
    guildId: n,
    fullWidth: h,
    appContext: g,
    onClose: E
  } = e, b = (0, o.e7)([c.default], () => c.default.getId() === t.id), y = (0, o.e7)([u.Z], () => null != n ? u.Z.getGuild(n) : null), O = (0, l.Z)({
    guild: y
  }), v = (0, l.Z)({}), {
    trackUserProfileAction: I
  } = (0, d.KZ)(), T = i.useRef(null);
  return b ? null == y ? (0, r.jsx)(f.O1, {
    action: "EDIT_PROFILE",
    text: _.intl.string(_.t.s5vZlZ),
    icon: a.vdY,
    autoFocus: true,
    fullWidth: h,
    variant: "primary",
    onClick: () => {
      null == E || E(), v(), (0, s.i)(g)
    }
  }) : (0, r.jsx)(a.yRy, {
    targetElementRef: T,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsxs)(a.v2r, {
        className: p.popoutMenu,
        onSelect: true,
        navId: "edit-profile-popout",
        onClose: () => {
          t(), null == E || E()
        },
        "aria-label": _.intl.string(_.t.AXIHpa),
        children: [(0, r.jsx)(a.sNh, {
          id: "edit-server-profile",
          label: _.intl.string(_.t["PKQB/P"]),
          subtext: _.intl.string(_.t.VYHWKC),
          action: () => {
            I({
              action: "EDIT_GUILD_PROFILE"
            }), O(), (0, s.i)(g)
          }
        }), (0, r.jsx)(a.sNh, {
          id: "edit-main-profile",
          label: _.intl.string(_.t.HmFaFB),
          subtext: _.intl.string(_.t["+EERMj"]),
          action: () => {
            I({
              action: "EDIT_PROFILE"
            }), v(), (0, s.i)(g)
          }
        })]
      })
    },
    children: e => (0, r.jsx)(f.O1, m({
      buttonRef: T,
      text: _.intl.string(_.t.s5vZlZ),
      icon: a.vdY,
      autoFocus: true,
      fullWidth: h,
      variant: "primary"
    }, e))
  }) : null
}