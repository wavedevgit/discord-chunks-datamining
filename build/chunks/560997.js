/** Chunk was on web.js **/
/** chunk id: 560997, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KM: () => u,
  R2: () => d,
  TG: () => f,
  Zc: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk238514 = require("./238514.js"),
  Chunk675478 = require("./675478.js"),
  Chunk581883 = require("./581883.js"),
  Chunk526761 = require("./526761.js");

function c(e, t, n, i) {
  let {
    delay: o = l.fy.INFREQUENT_USER_ACTION,
    comparator: c = (e, t) => e === t
  } = arguments.length > 4 && true !== arguments[4] ? arguments[4] : {}, u = () => {
    var r;
    return n(null == (r = s.Z.settings[e]) ? true : r[t])
  }, d = () => (0, r.e7)([s.Z], u, true, c);
  return {
    getSetting: u,
    updateSetting: p(u, n => a.hW.updateAsync(e, e => {
      e[t] = i(n, e[t])
    }, o)),
    useSetting: d
  }
}

function u(e, t, n) {
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
    updateSetting: p(a, r => o.Z.shouldSync(t) ? e.updateSetting(r) : (i.Z.dispatch({
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

function d(e, t, n, r) {
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
    updateSetting: p(o, n => (i.Z.dispatch({
      type: "USER_SETTINGS_OVERRIDE_CLEAR",
      settings: [t]
    }), e.updateSetting(n)))
  }
}

function f(e) {
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

function p(e, t) {
  return function(n) {
    return "function" == typeof n ? t(n(e())) : t(n)
  }
}