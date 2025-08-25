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
  let o = arguments.length > 4 && true !== arguments[4] ? arguments[4] : l.fy.INFREQUENT_USER_ACTION,
    c = () => {
      var r;
      return n(null == (r = s.Z.settings[e]) ? true : r[t])
    },
    u = () => (0, r.e7)([s.Z], c);
  return {
    getSetting: c,
    updateSetting: h(c, n => a.hW.updateAsync(e, e => {
      e[t] = i(n, e[t])
    }, o)),
    useSetting: u
  }
}

function f(e, t, n) {
  let a = () => {
    var r;
    let i = o.Z.getState()[t];
    return null != (r = null == i ? true : i.settings[n]) ? r : e.getSetting()
  };
  return {
    getSetting: a,
    useSetting: () => {
      let i = e.useSetting(),
        a = (0, r.e7)([o.Z], () => {
          let e = o.Z.getState()[t];
          return null == e ? true : e.settings[n]
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

function _(e, t, n, r) {
  let o = () => {
    var t;
    return null != (t = n()) ? t : e.getSetting()
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

function p(e) {
  let {
    baseSetting: t,
    isEligible: n,
    useIsEligible: r,
    eligibleDefault: i,
    ineligibleDefault: o,
    onUseDefault: a
  } = e;
  return {
    getSetting: () => {
      let e = t.getSetting();
      return null != e ? e : (null == a || a(), n() ? i() : o)
    },
    useSetting: () => {
      let e = t.useSetting(),
        n = r();
      return null != e ? e : (null == a || a(), n ? i() : o)
    },
    updateSetting: e => t.updateSetting(e)
  }
}

function h(e, t) {
  return function(n) {
    return "function" == typeof n ? t(n(e())) : t(n)
  }
}