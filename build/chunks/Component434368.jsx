/** Chunk was on 6850 **/
/** chunk id: 434368, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk498607 = require("./498607.js"),
  o = require.n(Chunk498607),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk203893 = require("./203893.jsx"),
  Chunk910693 = require("./910693.js"),
  Chunk893966 = require("./893966.js"),
  Chunk527379 = require("./527379.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk936765 = require("./936765.js");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  let {
    guildId: t,
    onClose: n
  } = e, i = (0, a.e7)([d.Z], () => d.Z.getSearchStateByGuildId(t), [t], o()), g = (0, u.dW)(t), j = l.useCallback(() => {
    i.requireUnusualDmActivity || g(u.aY.UNUSUAL_DM_ACTIVITY), (0, C.Dr)(t, h(p({}, i), {
      requireUnusualDmActivity: !i.requireUnusualDmActivity
    }))
  }, [t, i, g]), x = l.useCallback(() => {
    i.requireCommunicationDisabled || g(u.aY.COMMUNICATION_DISABLED), (0, C.Dr)(t, h(p({}, i), {
      requireCommunicationDisabled: !i.requireCommunicationDisabled
    }))
  }, [t, i, g]), v = l.useCallback(() => {
    i.requireUnusualAccountActivity || g(u.aY.UNUSUAL_ACCOUNT_ACTIVITY), (0, C.Dr)(t, h(p({}, i), {
      requireUnusualAccountActivity: !i.requireUnusualAccountActivity
    }))
  }, [t, i, g]), y = l.useCallback(() => {
    i.requireUsernameQuarantined || g(u.aY.USERNAME_QUARANTINED), (0, C.Dr)(t, h(p({}, i), {
      requireUsernameQuarantined: !i.requireUsernameQuarantined
    }))
  }, [t, i, g]);
  return (0, r.jsx)(s.v2r, {
    navId: "member-safety-flags",
    onClose: n,
    "aria-label": b.intl.string(b.t.k9m8Rg),
    onSelect: m.dG4,
    children: (0, r.jsxs)(s.kSQ, {
      children: [(0, r.jsx)(s.S89, {
        id: "toggle-require-unusual-dm-activity",
        label: (0, r.jsxs)("div", {
          className: f.checkboxLabel,
          children: [(0, r.jsx)(s.b6m, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: f.unusualDMLabelIcon
          }), b.intl.string(b.t.ZRnON3)]
        }),
        action: j,
        checked: i.requireUnusualDmActivity
      }), (0, r.jsx)(s.S89, {
        id: "toggle-require-communication-disabled",
        label: (0, r.jsxs)("div", {
          className: f.checkboxLabel,
          children: [(0, r.jsx)(s.YlB, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: f.timeoutLabelIcon
          }), b.intl.string(b.t.z3wbj8)]
        }),
        action: x,
        checked: i.requireCommunicationDisabled
      }), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.S89, {
          id: "toggle-require-unusual-account-activity",
          label: (0, r.jsxs)("div", {
            className: f.checkboxLabel,
            children: [(0, r.jsx)(c.Z, {
              width: 16,
              height: 16,
              className: f.unusualAccountActivityLabelIcon
            }), b.intl.string(b.t.DIQsD9)]
          }),
          action: v,
          checked: i.requireUnusualAccountActivity
        }), (0, r.jsx)(s.S89, {
          id: "toggle-require-username-quarantined",
          label: (0, r.jsxs)("div", {
            className: f.checkboxLabel,
            children: [(0, r.jsx)(s.ics, {
              size: "custom",
              color: "currentColor",
              width: 16,
              height: 16,
              className: f.quarantinedLabelIcon
            }), b.intl.string(b.t.Jloklk)]
          }),
          action: y,
          checked: i.requireUsernameQuarantined
        })]
      })]
    })
  })
}