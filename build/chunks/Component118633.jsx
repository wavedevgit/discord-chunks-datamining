/** Chunk was on 16939 **/
/** chunk id: 118633, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk58149 = require("./58149.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk362490 = require("./362490.js"),
  Chunk627363 = require("./627363.js"),
  Chunk587895 = require("./587895.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk184952 = require("./184952.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
  var t;
  let {
    connection: n,
    guildId: g,
    location: v
  } = e, y = (0, i.bG)([u.A], () => null != n.application_id ? u.A.getApplication(n.application_id) : null, [n.application_id]), {
    analyticsLocations: j
  } = (0, o.Ay)(v);
  r.useEffect(() => {
    null != y || null == n.application_id || u.A.isFetchingApplication(n.application_id) || u.A.didFetchingApplicationFail(n.application_id) || (0, s.TA)(n.application_id).catch(() => {})
  }, [y, n.application_id]);
  let x = null != (t = null == y ? true : y.name) ? t : f.intl.string(f.t.cgPbaZ),
    {
      hasAlreadyLinked: A,
      canStartAuthorization: b,
      startAuthorization: C,
      fetched: O
    } = (0, c.RD)(y),
    w = (0, l.jsx)(d.A, {
      game: y,
      size: d.M.MEDIUM
    }),
    _ = r.useCallback(() => {
      var e, t, l;
      m.default.track(h.HAw.GUILD_ONBOARDING_CONNECTION_CLICKED, (t = function(e) {
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
      }({}, (0, a.H$)(g)), l = l = {
        connection_type: "application",
        application_id: null != (e = n.application_id) ? e : true,
        location: v
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
      }), t)), C({
        analyticsLocations: j
      })
    }, [C, g, n.application_id, v, j]);
  return (0, l.jsx)(p.A, {
    displayName: x,
    description: n.description,
    icon: w,
    isLoading: !O,
    isConnected: A,
    canConnect: b,
    onConnect: _
  })
}