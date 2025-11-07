/** Chunk was on 26494 **/
/** chunk id: 526746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk367907 = require("./367907.js"),
  Chunk535139 = require("./535139.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk826380 = require("./826380.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  var t;
  let {
    connection: n,
    guildId: f,
    location: g
  } = e, j = (0, r.e7)([s.Z], () => null != n.application_id ? s.Z.getApplication(n.application_id) : null, [n.application_id]);
  i.useEffect(() => {
    null != j || null == n.application_id || s.Z.isFetchingApplication(n.application_id) || s.Z.didFetchingApplicationFail(n.application_id) || (0, c.UM)(n.application_id).catch(() => {})
  }, [j, n.application_id]);
  let v = null != (t = null == j ? true : j.name) ? t : h.intl.string(h.t.cgPbaZ),
    {
      hasAlreadyLinked: x,
      canStartAuthorization: y,
      startAuthorization: b,
      fetched: C
    } = (0, a.F)(j),
    O = (0, l.jsx)(u.Z, {
      game: j,
      size: u.A.MEDIUM
    }),
    Z = i.useCallback(() => {
      var e, t, l;
      d.default.track(p.rMx.GUILD_ONBOARDING_CONNECTION_CLICKED, (t = function(e) {
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
      }({}, (0, o.hH)(f)), l = l = {
        connection_type: "application",
        application_id: null != (e = n.application_id) ? e : true,
        location: g
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
      }), t)), b()
    }, [b, f, n.application_id, g]);
  return (0, l.jsx)(m.Z, {
    displayName: v,
    description: n.description,
    icon: O,
    isLoading: !C,
    isConnected: x,
    canConnect: y,
    onConnect: Z
  })
}