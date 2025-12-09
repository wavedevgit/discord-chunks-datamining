/** Chunk was on 26494 **/
/** chunk id: 526746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk524995 = require("./524995.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk826380 = require("./826380.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  var t;
  let {
    connection: n,
    guildId: g,
    location: j
  } = e, v = (0, r.e7)([u.Z], () => null != n.application_id ? u.Z.getApplication(n.application_id) : null, [n.application_id]), {
    analyticsLocations: x
  } = (0, a.ZP)(j);
  i.useEffect(() => {
    null != v || null == n.application_id || u.Z.isFetchingApplication(n.application_id) || u.Z.didFetchingApplicationFail(n.application_id) || (0, s.UM)(n.application_id).catch(() => {})
  }, [v, n.application_id]);
  let y = null != (t = null == v ? true : v.name) ? t : f.intl.string(f.t.cgPbaZ),
    {
      hasAlreadyLinked: b,
      canStartAuthorization: C,
      startAuthorization: O,
      fetched: Z
    } = (0, c.F)(v),
    w = (0, l.jsx)(d.Z, {
      game: v,
      size: d.A.MEDIUM
    }),
    _ = i.useCallback(() => {
      var e, t, l;
      m.default.track(h.rMx.GUILD_ONBOARDING_CONNECTION_CLICKED, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
              value: l,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = l
          })
        }
        return e
      }({}, (0, o.hH)(g)), l = l = {
        connection_type: "application",
        application_id: null != (e = n.application_id) ? e : true,
        location: j
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
      }), t)), O({
        analyticsLocations: x
      })
    }, [O, g, n.application_id, j, x]);
  return (0, l.jsx)(p.Z, {
    displayName: y,
    description: n.description,
    icon: w,
    isLoading: !Z,
    isConnected: b,
    canConnect: C,
    onConnect: _
  })
}