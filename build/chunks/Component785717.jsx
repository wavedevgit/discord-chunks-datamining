/** Chunk was on web.js **/
/** chunk id: 785717, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KZ: () => p,
  Mt: () => d,
  ZB: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
let u = Chunk473749.createContext(null),
  d = e => {
    let {
      value: t,
      children: n,
      openedAt: a,
      fetchStartedAt: l,
      fetchEndedAt: d,
      isLoaded: f = false
    } = e, {
      analyticsLocations: p
    } = (0, o.ZP)(), _ = i.useRef(true), m = {
      analyticsLocations: p,
      value: t
    }, h = i.useRef(m);
    return i.useEffect(() => {
      h.current = m
    }), i.useEffect(() => {
      let e = Date.now();
      if (null == _.current && null != a && (_.current = e - a), !f) return;
      let {
        analyticsLocations: t,
        value: n
      } = h.current;
      (0, s.pQ)(c({
        action: "VIEW",
        analyticsLocations: t
      }, n)), (0, s.RV)(c({
        profileUi: "USER_PROFILE",
        timeToInteractiveMs: _.current,
        timeToLoadMs: null != a ? e - a : true,
        timeToFetchMs: null != l && null != d ? d - l : true,
        viewStartedAt: a,
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
      guildId: o,
      channelId: s,
      messageId: l,
      roleId: c,
      sourceSessionId: d,
      showGuildProfile: f = true
    } = e, p = null == (t = i.useContext(u)) ? true : t.sessionId;
    return i.useMemo(() => ({
      sessionId: (0, a.Z)(),
      sourceSessionId: null != d ? d : p,
      layout: n,
      userId: r,
      guildId: o,
      channelId: s,
      messageId: l,
      roleId: c,
      showGuildProfile: f
    }), [p, n, r, o, s, l, c, d, f])
  },
  p = () => {
    let e = Chunk473749.useContext(u),
      {
        analyticsLocations: t
      } = (0, Chunk906732.ZP)();
    return {
      context: module,
      trackUserProfileAction: Chunk473749.useCallback(n => {
        null != e && (0, s.pQ)(c({
          analyticsLocations: t
        }, e, n))
      }, [module, exports]),
      trackUserProfileEditAction: Chunk473749.useCallback(n => {
        null != e && (0, s.Of)(c({
          analyticsLocations: t
        }, e, n))
      }, [module, exports]),
      trackUserProfileEditSaved: Chunk473749.useCallback(n => {
        null != e && (0, s.V1)(c({
          analyticsLocations: t
        }, e, n))
      }, [module, exports]),
      trackUserProfileWishlistAction: Chunk473749.useCallback(n => {
        null != e && (0, s.Er)(c({
          analyticsLocations: t
        }, e, n))
      }, [module, exports])
    }
  }