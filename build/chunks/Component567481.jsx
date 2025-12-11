/** Chunk was on 1272 **/
/** chunk id: 567481, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk24124 = require("./24124.js"),
  Chunk447543 = require("./447543.js"),
  Chunk13245 = require("./13245.js"),
  Chunk596223 = require("./596223.js"),
  Chunk710845 = require("./710845.js"),
  Chunk293273 = require("./293273.js"),
  Chunk885110 = require("./885110.js"),
  Chunk996106 = require("./996106.js"),
  Chunk914946 = require("./914946.js"),
  Chunk452426 = require("./452426.js"),
  Chunk852926 = require("./852926.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");
let E = new Chunk710845.Z("RPCCommandsOverlay"),
  O = {
    [Chunk981631.Etm.SET_OVERLAY_LOCKED]: {
      scope: Chunk186901.lH,
      validation: e => (0, h.Z)(e).required().keys({
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
        if (E.verbose("RPCCommands.SET_OVERLAY_LOCKED", {
            locked: t,
            pid: n
          }), null == r.id) throw new f.Z({
          errorCode: _.lTL.INVALID_COMMAND
        }, "No application.");
        o.Z.setInputLocked(t, n)
      }
    },
    [Chunk981631.Etm.OPEN_OVERLAY_ACTIVITY_INVITE]: {
      scope: Chunk186901.lH,
      validation: e => (0, h.Z)(e).required().keys({
        type: e.number().required().valid([_.mFx.JOIN]),
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
        if (null == i) throw new f.Z({
          errorCode: _.lTL.INVALID_COMMAND
        }, "No application.");
        let l = d.Z.getApplicationActivity(i);
        if (null == l || null == l.secrets || !(0, g.t9)(n, l.party, l.secrets)) throw new f.Z({
          errorCode: _.lTL.NO_ELIGIBLE_ACTIVITY
        }, "No eligible activity for application. Ensure an activity includes a party and appropriate secret.");
        let {
          lock: s,
          context: o
        } = (0, m.jU)(r), u = (0, c.Z)(l, p.Z);
        return (0, a.h7)(l, u, o).then(() => {
          if (s(), u) throw new f.Z({
            errorCode: _.lTL.NO_ELIGIBLE_ACTIVITY
          }, "No eligible activity for application. Ensure user does have have privacy enabled.")
        })
      }
    },
    [Chunk981631.Etm.OPEN_OVERLAY_GUILD_INVITE]: {
      scope: Chunk186901.lH,
      validation: e => (0, h.Z)(e).required().keys({
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
        if (null == r.application.id) throw new f.Z({
          errorCode: _.lTL.INVALID_COMMAND
        }, "No application.");
        return s.ZP.resolveInvite(t, "Game SDK").then(e => {
          let {
            invite: t,
            code: r
          } = e;
          if (null == t) throw new f.Z({
            errorCode: _.lTL.INVALID_INVITE
          }, "Invalid invite id: ".concat(r));
          let {
            context: i,
            lock: a
          } = (0, m.jU)(n);
          return new Promise(e => {
            l.Z.dispatch({
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
    [Chunk981631.Etm.OPEN_OVERLAY_VOICE_SETTINGS]: {
      scope: Chunk186901.lH,
      validation: e => (0, h.Z)(e).required().keys({
        pid: e.number().min(0).required()
      }),
      handler(e) {
        let {
          args: {
            pid: t
          },
          socket: l
        } = e, a = l.application.id;
        if (null == a) throw new f.Z({
          errorCode: _.lTL.INVALID_COMMAND
        }, "No application.");
        let {
          lock: s,
          context: o
        } = (0, m.jU)(t);
        return new Promise(e => {
          (0, i.ZDy)(async () => {
            let {
              default: e
            } = await n.e("51749").then(n.bind(n, 800740));
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
            contextKey: o === _.IlC.POPOUT ? i.u1M : i.z1l,
            onCloseCallback: () => {
              s(), e()
            }
          })
        })
      }
    }
  }