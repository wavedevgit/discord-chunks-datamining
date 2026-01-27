/** Chunk was on web.js **/
/** chunk id: 646769, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mt: () => u,
  Tg: () => d,
  c$: () => c,
  c6: () => f
});
var Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk284016 = require("./284016.js"),
  Chunk594061 = require("./594061.js"),
  Chunk617617 = require("./617617.js"),
  Chunk355097 = require("./355097.js");

function c(e, t, n, i) {
  let {
    delay: a = l.Sb.INFREQUENT_USER_ACTION,
    comparator: c = (e, t) => e === t
  } = arguments.length > 4 && true !== arguments[4] ? arguments[4] : {}, u = () => {
    var r;
    return n(null == (r = s.A.settings[e]) ? true : r[t])
  }, d = () => (0, r.bG)([s.A], u, true, c);
  return {
    getSetting: u,
    updateSetting: p(u, n => o.wc.updateAsync(e, e => {
      e[t] = i(n, e[t])
    }, a)),
    useSetting: d
  }
}

function u(e, t, n) {
  let o = () => {
    var r;
    let i = a.A.getState()[t];
    return null != (r = null == i ? true : i.settings[n]) ? r : e.getSetting()
  };
  return {
    getSetting: o,
    useSetting: () => {
      let i = e.useSetting(),
        o = (0, r.bG)([a.A], () => {
          let e = a.A.getState()[t];
          return null == e ? true : e.settings[n]
        });
      return null != o ? o : i
    },
    updateSetting: p(o, r => a.A.shouldSync(t) ? e.updateSetting(r) : (i.h.dispatch({
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
    updateSetting: p(a, n => (i.h.dispatch({
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

function p(e, t) {
  return function(n) {
    return "function" == typeof n ? t(n(e())) : t(n)
  }
}