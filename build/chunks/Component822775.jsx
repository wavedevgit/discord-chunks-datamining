/** Chunk was on web.js **/
/** chunk id: 822775, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
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
  Chunk985018 = require("./985018.jsx");

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

function E(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = y(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function b(e) {
  let {
    user: t,
    guildId: n,
    fullWidth: m,
    appContext: y,
    onClose: b
  } = e, O = (0, a.bG)([c.default], () => c.default.getId() === t.id), v = (0, a.bG)([u.A], () => null != n ? u.A.getGuild(n) : null), A = (0, a.bG)([p.A], () => p.A.hasUnsavedChanges()), I = (0, l.A)({
    guild: v
  }), S = (0, l.A)({}), {
    trackUserProfileAction: T
  } = (0, d.NJ)(), C = i.useRef(null);
  return O ? null == v ? (0, r.jsx)(_.FD, {
    action: "EDIT_PROFILE",
    text: h.intl.string(h.t.s5vZlQ),
    icon: o.R2l,
    autoFocus: true,
    fullWidth: m,
    variant: "primary",
    onClick: () => {
      A ? f.A.notifyUnsavedWidgets() : (null == b || b(), S(), (0, s.A)(y))
    }
  }) : (0, r.jsx)(o.YNO, {
    targetElementRef: C,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsxs)(o.W1t, {
        "data-menu-needs-review": true,
        onSelect: true,
        navId: "edit-profile-popout",
        onClose: t,
        "aria-label": h.intl.string(h.t.AXIHpV),
        children: [(0, r.jsx)(o.Drp, {
          id: "edit-server-profile",
          label: h.intl.string(h.t["PKQB/H"]),
          subtext: h.intl.string(h.t.VYHWKJ),
          action: () => {
            T({
              action: "EDIT_GUILD_PROFILE"
            }), null == b || b(), I(), (0, s.A)(y)
          }
        }), (0, r.jsx)(o.Drp, {
          id: "edit-main-profile",
          label: h.intl.string(h.t.HmFaFB),
          subtext: h.intl.string(h.t["+EERMk"]),
          action: () => {
            T({
              action: "EDIT_PROFILE"
            }), null == b || b(), S(), (0, s.A)(y)
          }
        })]
      })
    },
    children: e => {
      let {
        onClick: t
      } = e, n = E(e, ["onClick"]);
      return (0, r.jsx)(_.FD, g({
        buttonRef: C,
        text: h.intl.string(h.t.s5vZlQ),
        icon: o.R2l,
        autoFocus: true,
        fullWidth: m,
        variant: "primary",
        onClick: () => {
          A ? f.A.notifyUnsavedWidgets() : null == t || t()
        }
      }, n))
    }
  }) : null
}