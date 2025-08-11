/** Chunk was on web.js **/
/** chunk id: 785717, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KZ: () => _,
  Mt: () => d,
  ZB: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk772848 = require("./772848.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk221292 = require("./221292.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
let u = Chunk73800.createContext(null),
  d = e => {
    let {
      value: t,
      children: n,
      openedAt: o,
      fetchStartedAt: l,
      fetchEndedAt: d,
      isLoaded: f = false
    } = e, {
      analyticsLocations: _
    } = (0, a.ZP)(), p = i.useRef(true), h = {
      analyticsLocations: _,
      value: t
    }, m = i.useRef(h);
    return i.useEffect(() => {
      m.current = h
    }), i.useEffect(() => {
      let e = Date.now();
      if (null == p.current && null != o && (p.current = e - o), !f) return;
      let {
        analyticsLocations: t,
        value: n
      } = m.current;
      (0, s.pQ)(c({
        action: "VIEW",
        analyticsLocations: t
      }, n)), (0, s.RV)(c({
        profileUi: "USER_PROFILE",
        timeToInteractiveMs: p.current,
        timeToLoadMs: null != o ? e - o : true,
        timeToFetchMs: null != l && null != d ? d - l : true,
        viewStartedAt: o,
        fetchStartedAt: l,
        analyticsLocations: t
      }, n))
    }, [f]), (0, r.jsx)(u.Provider, {
      value: t,
      children: n
    })
  },
  f = e => {
    var t;
    let {
      layout: n,
      userId: r,
      guildId: a,
      channelId: s,
      messageId: l,
      roleId: c,
      sourceSessionId: d,
      showGuildProfile: f = true
    } = e, _ = null == (t = i.useContext(u)) ? true : t.sessionId;
    return i.useMemo(() => ({
      sessionId: (0, o.Z)(),
      sourceSessionId: null != d ? d : _,
      layout: n,
      userId: r,
      guildId: a,
      channelId: s,
      messageId: l,
      roleId: c,
      showGuildProfile: f
    }), [_, n, r, a, s, l, c, d, f])
  },
  _ = () => {
    let e = Chunk73800.useContext(u),
      {
        analyticsLocations: t
      } = (0, Chunk906732.ZP)();
    return {
      context: module,
      trackUserProfileAction: Chunk73800.useCallback(n => {
        null != e && (0, s.pQ)(c({
          analyticsLocations: t
        }, e, n))
      }, [module, exports])
    }
  }