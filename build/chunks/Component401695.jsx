/** Chunk was on 35894 **/
/** chunk id: 401695, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk33851 = require("./33851.js"),
  o = require.n(Chunk33851),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk530347 = require("./530347.jsx"),
  Chunk504049 = require("./504049.js"),
  Chunk266047 = require("./266047.js"),
  Chunk221950 = require("./221950.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk328151 = require("./328151.js");

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

function j(e, t) {
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
  } = e, i = (0, a.bG)([u.A], () => u.A.getSearchStateByGuildId(t), [t], o()), g = (0, d.Tj)(t), h = l.useCallback(() => {
    i.requireUnusualDmActivity || g(d.Zp.UNUSUAL_DM_ACTIVITY), (0, C.Ld)(t, j(p({}, i), {
      requireUnusualDmActivity: !i.requireUnusualDmActivity
    }))
  }, [t, i, g]), x = l.useCallback(() => {
    i.requireCommunicationDisabled || g(d.Zp.COMMUNICATION_DISABLED), (0, C.Ld)(t, j(p({}, i), {
      requireCommunicationDisabled: !i.requireCommunicationDisabled
    }))
  }, [t, i, g]), y = l.useCallback(() => {
    i.requireUnusualAccountActivity || g(d.Zp.UNUSUAL_ACCOUNT_ACTIVITY), (0, C.Ld)(t, j(p({}, i), {
      requireUnusualAccountActivity: !i.requireUnusualAccountActivity
    }))
  }, [t, i, g]), O = l.useCallback(() => {
    i.requireUsernameQuarantined || g(d.Zp.USERNAME_QUARANTINED), (0, C.Ld)(t, j(p({}, i), {
      requireUsernameQuarantined: !i.requireUsernameQuarantined
    }))
  }, [t, i, g]);
  return (0, r.jsx)(s.W1t, {
    navId: "member-safety-flags",
    onClose: n,
    "aria-label": b.intl.string(b.t.k9m8Rg),
    onSelect: f.tEg,
    children: (0, r.jsxs)(s.rXV, {
      children: [(0, r.jsx)(s.sLh, {
        id: "toggle-require-unusual-dm-activity",
        label: (0, r.jsxs)("div", {
          className: m.mH,
          children: [(0, r.jsx)(s.EF8, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: m.iD
          }), b.intl.string(b.t.ZRnON3)]
        }),
        action: h,
        checked: i.requireUnusualDmActivity
      }), (0, r.jsx)(s.sLh, {
        id: "toggle-require-communication-disabled",
        label: (0, r.jsxs)("div", {
          className: m.mH,
          children: [(0, r.jsx)(s.gQi, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16,
            className: m.Xu
          }), b.intl.string(b.t.z3wbj8)]
        }),
        action: x,
        checked: i.requireCommunicationDisabled
      }), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.sLh, {
          id: "toggle-require-unusual-account-activity",
          label: (0, r.jsxs)("div", {
            className: m.mH,
            children: [(0, r.jsx)(c.A, {
              width: 16,
              height: 16,
              className: m.hG
            }), b.intl.string(b.t.DIQsD9)]
          }),
          action: y,
          checked: i.requireUnusualAccountActivity
        }), (0, r.jsx)(s.sLh, {
          id: "toggle-require-username-quarantined",
          label: (0, r.jsxs)("div", {
            className: m.mH,
            children: [(0, r.jsx)(s._mZ, {
              size: "custom",
              color: "currentColor",
              width: 16,
              height: 16,
              className: m.k8
            }), b.intl.string(b.t.Jloklk)]
          }),
          action: O,
          checked: i.requireUsernameQuarantined
        })]
      })]
    })
  })
}