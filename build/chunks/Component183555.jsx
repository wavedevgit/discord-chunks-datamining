/** Chunk was on web.js **/
/** chunk id: 183555, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NJ: () => p,
  of: () => d,
  pb: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk672385 = require("./672385.js");

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
let u = Chunk64700.createContext(null),
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
    } = (0, o.Ay)(), _ = i.useRef(true), h = {
      analyticsLocations: p,
      value: t
    }, m = i.useRef(h);
    return i.useEffect(() => {
      m.current = h
    }), i.useEffect(() => {
      let e = Date.now();
      if (null == _.current && null != a && (_.current = e - a), !f) return;
      let {
        analyticsLocations: t,
        value: n
      } = m.current;
      (0, s.Wn)(c({
        action: "VIEW",
        analyticsLocations: t
      }, n)), (0, s.wd)(c({
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
      sessionId: (0, a.A)(),
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
    let e = i.useContext(u),
      {
        analyticsLocations: t
      } = (0, o.Ay)();
    return {
      context: e,
      trackUserProfileAction: i.useCallback(n => {
        null != e && (0, s.Wn)(c({
          analyticsLocations: t
        }, e, n))
      }, [e, t]),
      trackUserProfileEditAction: i.useCallback(n => {
        null != e && (0, s.un)(c({
          analyticsLocations: t
        }, e, n))
      }, [e, t]),
      trackUserProfileEditSaved: i.useCallback(n => {
        null != e && (0, s.pT)(c({
          analyticsLocations: t
        }, e, n))
      }, [e, t]),
      trackUserProfileWishlistAction: i.useCallback(n => {
        null != e && (0, s.nR)(c({
          analyticsLocations: t
        }, e, n))
      }, [e, t])
    }
  }