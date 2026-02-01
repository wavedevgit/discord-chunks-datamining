/** Chunk was on 21738 **/
/** chunk id: 293890, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk298990 = require("./298990.js"),
  Chunk846293 = require("./846293.js"),
  Chunk684013 = require("./684013.js"),
  Chunk980142 = require("./980142.js"),
  Chunk626584 = require("./626584.js"),
  Chunk375492 = require("./375492.js"),
  Chunk461213 = require("./461213.js"),
  Chunk636401 = require("./636401.js"),
  Chunk90924 = require("./90924.js"),
  Chunk629471 = require("./629471.js"),
  Chunk546983 = require("./546983.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js");
let b = new Chunk626584.A("RPCCommandsOverlay"),
  E = {
    [Chunk652215.e$_.SET_OVERLAY_LOCKED]: {
      scope: Chunk613057.hj,
      validation: e => (0, m.A)(e).required().keys({
        locked: e.boolean().required(),
        pid: e.number().min(0).required()
      }),
      handler(e) {
        let {
          args: {
            locked: t,
            pid: n
          },
          socket: {
            application: r
          }
        } = e;
        if (b.verbose("RPCCommands.SET_OVERLAY_LOCKED", {
            locked: t,
            pid: n
          }), null == r.id) throw new h.A({
          errorCode: _.Lw6.INVALID_COMMAND
        }, "No application.");
        o.A.setInputLocked(t, n)
      }
    },
    [Chunk652215.e$_.OPEN_OVERLAY_ACTIVITY_INVITE]: {
      scope: Chunk613057.hj,
      validation: e => (0, m.A)(e).required().keys({
        type: e.number().required().valid([_.xL.JOIN]),
        pid: e.number().min(0).required()
      }),
      handler(e) {
        let {
          socket: t,
          args: {
            type: n,
            pid: r
          }
        } = e, i = t.application.id;
        if (null == i) throw new h.A({
          errorCode: _.Lw6.INVALID_COMMAND
        }, "No application.");
        let l = d.A.getApplicationActivity(i);
        if (null == l || null == l.secrets || !(0, g.px)(n, l.party, l.secrets)) throw new h.A({
          errorCode: _.Lw6.NO_ELIGIBLE_ACTIVITY
        }, "No eligible activity for application. Ensure an activity includes a party and appropriate secret.");
        let {
          lock: s,
          context: o
        } = (0, f.d5)(r), u = (0, c.A)(l, p.A);
        return (0, a.qf)(l, u, o).then(() => {
          if (s(), u) throw new h.A({
            errorCode: _.Lw6.NO_ELIGIBLE_ACTIVITY
          }, "No eligible activity for application. Ensure user does have have privacy enabled.")
        })
      }
    },
    [Chunk652215.e$_.OPEN_OVERLAY_GUILD_INVITE]: {
      scope: Chunk613057.hj,
      validation: e => (0, m.A)(e).required().keys({
        code: e.string().required(),
        pid: e.number().min(0).required()
      }),
      handler(e) {
        let {
          args: {
            code: t,
            pid: n
          },
          socket: r
        } = e;
        if (null == r.application.id) throw new h.A({
          errorCode: _.Lw6.INVALID_COMMAND
        }, "No application.");
        return s.Ay.resolveInvite(t, "Game SDK").then(e => {
          let {
            invite: t,
            code: r
          } = e;
          if (null == t) throw new h.A({
            errorCode: _.Lw6.INVALID_INVITE
          }, "Invalid invite id: ".concat(r));
          let {
            context: i,
            lock: a
          } = (0, f.d5)(n);
          return new Promise(e => {
            l.h.dispatch({
              type: "INVITE_MODAL_OPEN",
              invite: t,
              code: r,
              context: i,
              resolve: e
            })
          }).then(a)
        })
      }
    },
    [Chunk652215.e$_.OPEN_OVERLAY_VOICE_SETTINGS]: {
      scope: Chunk613057.hj,
      validation: e => (0, m.A)(e).required().keys({
        pid: e.number().min(0).required()
      }),
      handler(e) {
        let {
          args: {
            pid: t
          },
          socket: l
        } = e, a = l.application.id;
        if (null == a) throw new h.A({
          errorCode: _.Lw6.INVALID_COMMAND
        }, "No application.");
        let {
          lock: s,
          context: o
        } = (0, f.d5)(t);
        return new Promise(e => {
          (0, i.mMO)(async () => {
            let {
              default: e
            } = await n.e("96531").then(n.bind(n, 880510));
            return t => {
              var n, i, s;
              return (0, r.jsx)(e, (i = function(e) {
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
              }({}, t), s = s = {
                mediaEngineContext: a,
                subtitle: null != (n = l.application.name) ? n : true
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(s)).forEach(function(e) {
                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
              }), i))
            }
          }, {
            contextKey: o === _.BRT.POPOUT ? i.KX8 : i.SYi,
            onCloseCallback: () => {
              s(), e()
            }
          })
        })
      }
    }
  }