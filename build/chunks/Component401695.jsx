/** Chunk was on 35894 **/
/** chunk id: 401695, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk33851 = require("./33851.js"),
  o = require.n(Chunk33851),
  Chunk417597 = require("./417597.js"),
  Chunk565787 = require("./565787.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk530347 = require("./530347.jsx"),
  Chunk504049 = require("./504049.js"),
  Chunk266047 = require("./266047.js"),
  Chunk221950 = require("./221950.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function b(e) {
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
let g = (0, Chunk565787.k)(Chunk530347.A);

function h(e) {
  let {
    guildId: t,
    onClose: n
  } = e, i = (0, a.bG)([C.A], () => C.A.getSearchStateByGuildId(t), [t], o()), s = (0, d.Tj)(t), u = l.useCallback(() => {
    i.requireUnusualDmActivity || s(d.Zp.UNUSUAL_DM_ACTIVITY), (0, m.Ld)(t, j(b({}, i), {
      requireUnusualDmActivity: !i.requireUnusualDmActivity
    }))
  }, [t, i, s]), h = l.useCallback(() => {
    i.requireCommunicationDisabled || s(d.Zp.COMMUNICATION_DISABLED), (0, m.Ld)(t, j(b({}, i), {
      requireCommunicationDisabled: !i.requireCommunicationDisabled
    }))
  }, [t, i, s]), x = l.useCallback(() => {
    i.requireUnusualAccountActivity || s(d.Zp.UNUSUAL_ACCOUNT_ACTIVITY), (0, m.Ld)(t, j(b({}, i), {
      requireUnusualAccountActivity: !i.requireUnusualAccountActivity
    }))
  }, [t, i, s]), y = l.useCallback(() => {
    i.requireUsernameQuarantined || s(d.Zp.USERNAME_QUARANTINED), (0, m.Ld)(t, j(b({}, i), {
      requireUsernameQuarantined: !i.requireUsernameQuarantined
    }))
  }, [t, i, s]);
  return (0, r.jsx)(c.W1t, {
    "data-menu-migrated": true,
    navId: "member-safety-flags",
    onClose: n,
    "aria-label": f.intl.string(f.t.k9m8Rg),
    onSelect: p.tEg,
    children: (0, r.jsxs)(c.rXV, {
      children: [(0, r.jsx)(c.sLh, {
        id: "toggle-require-unusual-dm-activity",
        label: f.intl.string(f.t.ZRnON3),
        leftIcon: c.EF8,
        leadingAccessory: {
          type: "icon",
          icon: c.EF8
        },
        action: u,
        checked: i.requireUnusualDmActivity
      }), (0, r.jsx)(c.sLh, {
        id: "toggle-require-communication-disabled",
        label: f.intl.string(f.t.z3wbj8),
        leftIcon: c.gQi,
        leadingAccessory: {
          type: "icon",
          icon: c.gQi
        },
        action: h,
        checked: i.requireCommunicationDisabled
      }), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.sLh, {
          id: "toggle-require-unusual-account-activity",
          label: f.intl.string(f.t.DIQsD9),
          leftIcon: g,
          leadingAccessory: {
            type: "icon",
            icon: g
          },
          action: x,
          checked: i.requireUnusualAccountActivity
        }), (0, r.jsx)(c.sLh, {
          id: "toggle-require-username-quarantined",
          label: f.intl.string(f.t.Jloklk),
          leftIcon: c._mZ,
          leadingAccessory: {
            type: "icon",
            icon: c._mZ
          },
          action: y,
          checked: i.requireUsernameQuarantined
        })]
      })]
    })
  })
}