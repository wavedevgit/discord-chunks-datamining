/** Chunk was on 1272 **/
/** chunk id: 624714, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./997841.js");
var Chunk544891 = require("./544891.js"),
  Chunk115130 = require("./115130.js"),
  Chunk287545 = require("./287545.js"),
  Chunk812206 = require("./812206.js"),
  Chunk695103 = require("./695103.js"),
  Chunk626135 = require("./626135.js"),
  Chunk630388 = require("./630388.js"),
  Chunk996106 = require("./996106.js"),
  Chunk914946 = require("./914946.js"),
  Chunk452426 = require("./452426.js"),
  Chunk561205 = require("./561205.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");
let g = {
  [Chunk981631.Etm.SEND_ANALYTICS_EVENT]: {
    validation: e => (0, p.Z)(e).required().keys({
      event_name: e.string().required(),
      event_properties: (0, p.Z)(e).required()
    }),
    handler(e) {
      var t;
      let {
        socket: n,
        args: {
          event_name: r,
          event_properties: i
        }
      } = e;
      (0, d.bu)(n.transport), (0, d._f)(n.application);
      let s = n.application.id,
        p = (0, f.Z)(),
        h = null == p ? true : p.getGuildId(),
        g = a.Z.getApplication(s);
      if (!(0, c.yE)(null != (t = null == g ? true : g.flags) ? t : 0, m.udG.EMBEDDED_FIRST_PARTY)) throw new u.Z({
        errorCode: m.lTL.INVALID_COMMAND
      }, "This application cannot access this API");
      let _ = (0, l.U)(s),
        b = {
          activity_application_id: s,
          activity_channel_type: null == p ? true : p.type,
          activity_guild_id: h,
          activity_user_session_id: null == _ ? true : _.activityUserSessionId
        };
      o.default.track(r, function(e) {
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
      }({}, b, i))
    }
  },
  [Chunk981631.Etm.GET_APPLICATION_TICKET]: {
    scope: Chunk186901.lH,
    handler(e) {
      let {
        socket: t
      } = e, n = t.application.id;
      if (null == n) throw new u.Z({
        errorCode: m.lTL.INVALID_COMMAND
      }, "No application.");
      return r.tn.post({
        url: m.ANM.APPLICATION_TICKET(n),
        body: {
          test_mode: s.Z.inTestModeForApplication(n) || i.Z.inDevModeForApplication(n)
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