/** Chunk was on 21738 **/
/** chunk id: 796111, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js"), require("./938796.js");
var Chunk665260 = require("./665260.js"),
  Chunk562465 = require("./562465.js"),
  Chunk10716 = require("./10716.js"),
  Chunk458664 = require("./458664.js"),
  Chunk587895 = require("./587895.js"),
  Chunk147964 = require("./147964.js"),
  Chunk954571 = require("./954571.js"),
  Chunk636401 = require("./636401.js"),
  Chunk90924 = require("./90924.js"),
  Chunk629471 = require("./629471.js"),
  Chunk569475 = require("./569475.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js");
let m = {
  [Chunk652215.e$_.SEND_ANALYTICS_EVENT]: {
    validation: e => (0, p.A)(e).required().keys({
      event_name: e.string().required(),
      event_properties: (0, p.A)(e).required()
    }),
    handler(e) {
      var t;
      let {
        socket: n,
        args: {
          event_name: i,
          event_properties: l
        }
      } = e;
      (0, d.lG)(n.transport), (0, d.D2)(n.application);
      let o = n.application.id,
        p = (0, h.A)(),
        f = null == p ? true : p.getGuildId(),
        m = s.A.getApplication(o);
      if (!(0, r.Lt)(null != (t = null == m ? true : m.flags) ? t : 0, g.gfo.EMBEDDED_FIRST_PARTY)) throw new u.A({
        errorCode: g.Lw6.INVALID_COMMAND
      }, "This application cannot access this API");
      let A = (0, a.D)(o),
        _ = {
          activity_application_id: o,
          activity_channel_type: null == p ? true : p.type,
          activity_guild_id: f,
          activity_user_session_id: null == A ? true : A.activityUserSessionId
        };
      c.default.track(i, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, _, l))
    }
  },
  [Chunk652215.e$_.GET_APPLICATION_TICKET]: {
    scope: Chunk613057.hj,
    handler(e) {
      let {
        socket: t
      } = e, n = t.application.id;
      if (null == n) throw new u.A({
        errorCode: g.Lw6.INVALID_COMMAND
      }, "No application.");
      return i.Bo.post({
        url: g.Rsh.APPLICATION_TICKET(n),
        body: {
          test_mode: o.A.inTestModeForApplication(n) || l.A.inDevModeForApplication(n)
        },
        retries: 3,
        oldFormErrors: true,
        rejectWithError: false
      }).then(e => {
        let {
          body: t
        } = e;
        return t
      })
    }
  }
}