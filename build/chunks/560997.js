/** Chunk was on web.js **/
/** chunk id: 560997, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KM: () => f,
  R2: () => _,
  TG: () => p,
  Zc: () => d
});
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk238514 = require("./238514.js"),
  Chunk675478 = require("./675478.js"),
  Chunk581883 = require("./581883.js"),
  Chunk526761 = require("./526761.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
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
  let a = arguments.length > 4 && true !== arguments[4] ? arguments[4] : l.fy.INFREQUENT_USER_ACTION,
    c = () => {
      var r;
      return n(null == (r = s.Z.settings[e]) ? true : r[t])
    },
    u = () => (0, r.e7)([s.Z], c);
  return {
    getSetting: c,
    updateSetting: h(c, n => o.hW.updateAsync(e, e => {
      e[t] = i(n, e[t])
    }, a)),
    useSetting: u
  }
}

function f(e, t, n) {
  let o = () => {
    var r;
    let i = a.Z.getState()[t];
    return null != (r = null == i ? true : i.settings[n]) ? r : e.getSetting()
  };
  return {
    getSetting: o,
    useSetting: () => {
      let i = e.useSetting(),
        o = (0, r.e7)([a.Z], () => {
          let e = a.Z.getState()[t];
          return null == e ? true : e.settings[n]
        });
      return null != o ? o : i
    },
    updateSetting: h(o, r => a.Z.shouldSync(t) ? e.updateSetting(r) : (i.Z.dispatch({
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

function _(e, t, n, r) {
  let a = () => {
    var t;
    return null != (t = n()) ? t : e.getSetting()
  };
  return {
    getSetting: a,
    useSetting: () => {
      let t = e.useSetting(),
        n = r();
      return null != n ? n : t
    },
    updateSetting: h(a, n => (i.Z.dispatch({
      type: "USER_SETTINGS_OVERRIDE_CLEAR",
      settings: [t]
    }), e.updateSetting(n)))
  }
}

function p(e) {
  let {
    baseSetting: t,
    isEligible: n,
    useIsEligible: r,
    eligibleDefault: i,
    ineligibleDefault: a,
    onUseDefault: o
  } = e;
  return {
    getSetting: () => {
      let e = t.getSetting();
      return null != e ? e : (null == o || o(), n() ? i() : a)
    },
    useSetting: () => {
      let e = t.useSetting(),
        n = r();
      return null != e ? e : (null == o || o(), n ? i() : a)
    },
    updateSetting: e => t.updateSetting(e)
  }
}

function h(e, t) {
  return function(n) {
    return "function" == typeof n ? t(n(e())) : t(n)
  }
}