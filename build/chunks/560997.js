/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  KM: () => f,
  R2: () => p,
  TG: () => _,
  Zc: () => d
});
var r = n(442837),
  i = n(570140),
  o = n(238514),
  a = n(675478),
  s = n(581883),
  l = n(526761);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t, n, i) {
  let o = () => {
      var r;
      return n(null === (r = s.Z.settings[e]) || void 0 === r ? void 0 : r[t])
    },
    c = () => (0, r.e7)([s.Z], o);
  return {
    getSetting: o,
    updateSetting: h(o, n => a.hW.updateAsync(e, e => {
      e[t] = i(n, e[t])
    }, l.fy.INFREQUENT_USER_ACTION)),
    useSetting: c
  }
}

function f(e, t, n) {
  let a = () => {
    var r;
    let i = o.Z.getState()[t];
    return null !== (r = null == i ? void 0 : i.settings[n]) && void 0 !== r ? r : e.getSetting()
  };
  return {
    getSetting: a,
    useSetting: () => {
      let i = e.useSetting(),
        a = (0, r.e7)([o.Z], () => {
          let e = o.Z.getState()[t];
          return null == e ? void 0 : e.settings[n]
        });
      return null != a ? a : i
    },
    updateSetting: h(a, r => o.Z.shouldSync(t) ? e.updateSetting(r) : (i.Z.dispatch({
      type: "SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",
      changes: {
        [t]: {
          settings: {
            [n]: r
          }
        }
      }
    }), Promise.resolve()))
  }
}

function p(e, t, n, r) {
  let o = () => {
    var t;
    return null !== (t = n()) && void 0 !== t ? t : e.getSetting()
  };
  return {
    getSetting: o,
    useSetting: () => {
      let t = e.useSetting(),
        n = r();
      return null != n ? n : t
    },
    updateSetting: h(o, n => (i.Z.dispatch({
      type: "USER_SETTINGS_OVERRIDE_CLEAR",
      settings: [t]
    }), e.updateSetting(n)))
  }
}

function _(e) {
  let {
    baseSetting: t,
    isEligible: n,
    useIsEligible: r,
    eligibleDefault: i,
    ineligibleDefault: o
  } = e;
  return {
    getSetting: () => {
      let e = t.getSetting();
      return null != e ? e : n() ? i() : o
    },
    useSetting: () => {
      let e = t.useSetting(),
        n = r();
      return null != e ? e : n ? i() : o
    },
    updateSetting: e => t.updateSetting(e)
  }
}

function h(e, t) {
  return function(n) {
    return "function" == typeof n ? t(n(e())) : t(n)
  }
}