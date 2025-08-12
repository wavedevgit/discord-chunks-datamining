/** Chunk was on 6850 **/
/** chunk id: 434368, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk498607 = require("./498607.js"),
  i = require.n(Chunk498607),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk203893 = require("./203893.jsx"),
  Chunk910693 = require("./910693.js"),
  Chunk893966 = require("./893966.js"),
  Chunk527379 = require("./527379.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk895502 = require("./895502.js");

function f(e) {
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

function j(e) {
  let {
    guildId: t,
    onClose: n
  } = e, o = (0, a.e7)([d.Z], () => d.Z.getSearchStateByGuildId(t), [t], i()), j = (0, u.dW)(t), g = l.useCallback(() => {
    o.requireUnusualDmActivity || j(u.aY.UNUSUAL_DM_ACTIVITY), (0, C.Dr)(t, h(f({}, o), {
      requireUnusualDmActivity: !o.requireUnusualDmActivity
    }))
  }, [t, o, j]), x = l.useCallback(() => {
    o.requireCommunicationDisabled || j(u.aY.COMMUNICATION_DISABLED), (0, C.Dr)(t, h(f({}, o), {
      requireCommunicationDisabled: !o.requireCommunicationDisabled
    }))
  }, [t, o, j]), v = l.useCallback(() => {
    o.requireUnusualAccountActivity || j(u.aY.UNUSUAL_ACCOUNT_ACTIVITY), (0, C.Dr)(t, h(f({}, o), {
      requireUnusualAccountActivity: !o.requireUnusualAccountActivity
    }))
  }, [t, o, j]), y = l.useCallback(() => {
    o.requireUsernameQuarantined || j(u.aY.USERNAME_QUARANTINED), (0, C.Dr)(t, h(f({}, o), {
      requireUsernameQuarantined: !o.requireUsernameQuarantined
    }))
  }, [t, o, j]);
  return (0, r.jsx)(s.v2r, {
    navId: "member-safety-flags",
    onClose: n,
    "aria-label": b.intl.string(b.t.k9m8Rk),
    onSelect: m.dG4,
    children: (0, r.jsxs)(s.kSQ, {
      children: [(0, r.jsx)(s.S89, {
        id: "toggle-require-unusual-dm-activity",
        label: (0, r.jsxs)("div", {
          className: p.checkboxLabel,
          children: [(0, r.jsx)(s.b6m, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: p.unusualDMLabelIcon
          }), b.intl.string(b.t.ZRnONz)]
        }),
        action: g,
        checked: o.requireUnusualDmActivity
      }), (0, r.jsx)(s.S89, {
        id: "toggle-require-communication-disabled",
        label: (0, r.jsxs)("div", {
          className: p.checkboxLabel,
          children: [(0, r.jsx)(s.YlB, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: p.timeoutLabelIcon
          }), b.intl.string(b.t.z3wbj4)]
        }),
        action: x,
        checked: o.requireCommunicationDisabled
      }), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.S89, {
          id: "toggle-require-unusual-account-activity",
          label: (0, r.jsxs)("div", {
            className: p.checkboxLabel,
            children: [(0, r.jsx)(c.Z, {
              width: 16,
              height: 16,
              className: p.unusualAccountActivityLabelIcon
            }), b.intl.string(b.t.DIQsDw)]
          }),
          action: v,
          checked: o.requireUnusualAccountActivity
        }), (0, r.jsx)(s.S89, {
          id: "toggle-require-username-quarantined",
          label: (0, r.jsxs)("div", {
            className: p.checkboxLabel,
            children: [(0, r.jsx)(s.ics, {
              size: "custom",
              color: "currentColor",
              width: 16,
              height: 16,
              className: p.quarantinedLabelIcon
            }), b.intl.string(b.t.Jloklp)]
          }),
          action: y,
          checked: o.requireUsernameQuarantined
        })]
      })]
    })
  })
}