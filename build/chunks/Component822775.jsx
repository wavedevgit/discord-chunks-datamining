/** Chunk was on web.js **/
/** chunk id: 822775, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk474397 = require("./474397.jsx"),
  Chunk206835 = require("./206835.js"),
  Chunk961350 = require("./961350.js"),
  Chunk71393 = require("./71393.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk958805 = require("./958805.js"),
  Chunk61881 = require("./61881.js"),
  Chunk993401 = require("./993401.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk78219 = require("./78219.js");

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

function y(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = b(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function O(e) {
  let {
    user: t,
    guildId: n,
    fullWidth: g,
    appContext: b,
    onClose: O
  } = e, v = (0, a.bG)([c.default], () => c.default.getId() === t.id), A = (0, a.bG)([u.A], () => null != n ? u.A.getGuild(n) : null), I = (0, a.bG)([p.A], () => p.A.hasUnsavedChanges()), S = (0, l.A)({
    guild: A
  }), T = (0, l.A)({}), {
    trackUserProfileAction: C
  } = (0, d.NJ)(), N = i.useRef(null);
  return v ? null == A ? (0, r.jsx)(_.FD, {
    action: "EDIT_PROFILE",
    text: h.intl.string(h.t.s5vZlQ),
    icon: s.R2l,
    autoFocus: true,
    fullWidth: g,
    variant: "primary",
    onClick: () => {
      I ? f.A.notifyUnsavedWidgets() : (null == O || O(), T(), (0, o.A)(b))
    }
  }) : (0, r.jsx)(s.YNO, {
    targetElementRef: N,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsxs)(s.W1t, {
        className: m.P,
        onSelect: true,
        navId: "edit-profile-popout",
        onClose: t,
        "aria-label": h.intl.string(h.t.AXIHpV),
        children: [(0, r.jsx)(s.Drp, {
          id: "edit-server-profile",
          label: h.intl.string(h.t["PKQB/H"]),
          subtext: h.intl.string(h.t.VYHWKJ),
          action: () => {
            C({
              action: "EDIT_GUILD_PROFILE"
            }), null == O || O(), S(), (0, o.A)(b)
          }
        }), (0, r.jsx)(s.Drp, {
          id: "edit-main-profile",
          label: h.intl.string(h.t.HmFaFB),
          subtext: h.intl.string(h.t["+EERMk"]),
          action: () => {
            C({
              action: "EDIT_PROFILE"
            }), null == O || O(), T(), (0, o.A)(b)
          }
        })]
      })
    },
    children: e => {
      let {
        onClick: t
      } = e, n = y(e, ["onClick"]);
      return (0, r.jsx)(_.FD, E({
        buttonRef: N,
        text: h.intl.string(h.t.s5vZlQ),
        icon: s.R2l,
        autoFocus: true,
        fullWidth: g,
        variant: "primary",
        onClick: () => {
          I ? f.A.notifyUnsavedWidgets() : null == t || t()
        }
      }, n))
    }
  }) : null
}