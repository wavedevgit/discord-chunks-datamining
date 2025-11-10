/** Chunk was on 384 **/
/** chunk id: 798528, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  SR: () => o,
  Vk: () => s,
  xl: () => c
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

function a(e, t) {
  let n = new Date,
    i = new Date(n.getTime() - (n.getDay() + 1) * 864e5 - 36288e5);
  return r.tn.get({
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

function s(e) {
  return a(e, l.ANM.GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW).then(t => {
    let {
      body: n
    } = t;
    i.Z.dispatch({
      type: "GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS",
      guildId: e,
      stats: n.slice(0, 2)
    })
  }, e => {
    i.Z.dispatch({
      type: "GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE",
      error: e.body
    })
  })
}

function o(e) {
  return a(e, l.ANM.GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW).then(t => {
    let {
      body: n
    } = t;
    i.Z.dispatch({
      type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS",
      guildId: e,
      stats: n.slice(0, 2)
    })
  }, e => {
    i.Z.dispatch({
      type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE",
      error: e.body
    })
  })
}

function c(e) {
  return a(e, l.ANM.GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION).then(t => {
    let {
      body: n
    } = t, r = n.filter(e => e.hasOwnProperty("pct_retained")).map(e => {
      let {
        interval_start_timestamp: t,
        pct_retained: n
      } = e;
      return function(e, t) {
        if (null != e) {
          var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
        }
      }(e, ["interval_start_timestamp", "pct_retained"]), {
        interval_start_timestamp: t,
        pct_retained: n
      }
    });
    i.Z.dispatch({
      type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS",
      guildId: e,
      stats: r.slice(0, 2)
    })
  }, e => {
    i.Z.dispatch({
      type: "GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE",
      error: e.body
    })
  })
}