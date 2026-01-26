/** Chunk was on 39048 **/
/** chunk id: 855537, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  _z: () => c,
  fe: () => o,
  p9: () => a
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");

function s(e, t) {
  let n = new Date,
    i = new Date(n.getTime() - (n.getDay() + 1) * 864e5 - 36288e5);
  return r.Bo.get({
    url: t(e),
    query: {
      start: i.toISOString(),
      end: n.toISOString(),
      interval: 2
    },
    oldFormErrors: true,
    rejectWithError: false
  })
}

function a(e) {
  return s(e, l.Rsh.GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW).then(t => {
    let {
      body: n
    } = t;
    i.h.dispatch({
      type: "GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS",
      guildId: e,
      stats: n.slice(0, 2)
    })
  }, e => {
    i.h.dispatch({
      type: "GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE",
      error: e.body
    })
  })
}

function o(e) {
  return s(e, l.Rsh.GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW).then(t => {
    let {
      body: n
    } = t;
    i.h.dispatch({
      type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS",
      guildId: e,
      stats: n.slice(0, 2)
    })
  }, e => {
    i.h.dispatch({
      type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE",
      error: e.body
    })
  })
}

function c(e) {
  return s(e, l.Rsh.GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION).then(t => {
    let {
      body: n
    } = t, r = n.filter(e => e.hasOwnProperty("pct_retained")).map(e => {
      let {
        interval_start_timestamp: t,
        pct_retained: n
      } = e;
      return function(e, t) {
        if (null != e) {
          var n, r, i, l = {};
          if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return
          }
          if (l = function(e, t) {
              if (null == e) return {};
              var n, r, i = {},
                l = Object.getOwnPropertyNames(e);
              for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
              return i
            }(e, t), Object.getOwnPropertySymbols)
            for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
        }
      }(e, ["interval_start_timestamp", "pct_retained"]), {
        interval_start_timestamp: t,
        pct_retained: n
      }
    });
    i.h.dispatch({
      type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS",
      guildId: e,
      stats: r.slice(0, 2)
    })
  }, e => {
    i.h.dispatch({
      type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE",
      error: e.body
    })
  })
}