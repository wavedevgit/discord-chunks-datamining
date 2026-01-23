/** Chunk was on 21738 **/
/** chunk id: 466444, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk179771 = require("./179771.js"),
  Chunk827343 = require("./827343.js"),
  Chunk140175 = require("./140175.js"),
  Chunk430452 = require("./430452.js"),
  Chunk350535 = require("./350535.js"),
  Chunk636401 = require("./636401.js"),
  Chunk629471 = require("./629471.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js");

function h(e) {
  let t = e.application.id;
  if (null == t) throw new o.A({
    errorCode: d.Lw6.INVALID_COMMAND
  }, "No application.");
  return t
}
let g = {
  [Chunk652215.e$_.SET_VOICE_SETTINGS_2]: {
    scope: Chunk613057.hj,
    validation: e => (0, c.A)(e).required().keys({
      input_mode: (0, c.A)(e).keys({
        type: e.string().valid(Object.keys(d.TBI)),
        shortcut: e.string().required()
      }),
      self_mute: e.boolean(),
      self_deaf: e.boolean()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          input_mode: n,
          self_mute: r,
          self_deaf: l
        }
      } = e, o = h(t);
      null != n && i.A.setMode(n.type, {
        shortcut: (0, s.OH)(n.shortcut)
      }, o), null != r && r !== a.A.isSelfMute(o) && i.A.toggleSelfMute({
        context: o
      }), null != l && l !== a.A.isSelfDeaf(o) && i.A.toggleSelfDeaf({
        context: o
      })
    }
  },
  [Chunk652215.e$_.SET_USER_VOICE_SETTINGS_2]: {
    scope: Chunk613057.hj,
    validation: e => (0, c.A)(e).required().keys({
      user_id: e.string().required(),
      volume: e.number().min(0).max(200),
      mute: e.boolean()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          user_id: n,
          mute: r,
          volume: l
        }
      } = e, s = h(t);
      null != r && r !== a.A.isLocalMute(n, s) && i.A.toggleLocalMute(n, s), null != l && i.A.setLocalVolume(n, l, s)
    }
  },
  [Chunk652215.e$_.PUSH_TO_TALK]: {
    scope: {
      [Chunk613057.sm.ALL]: [Chunk179771.F.RPC, Chunk179771.F.RPC_VOICE_WRITE]
    },
    validation: e => (0, c.A)(e).required().keys({
      active: e.boolean()
    }),
    handler(e) {
      let {
        args: {
          active: t
        }
      } = e;
      a.A.getMode(p.x.DEFAULT) === d.TBI.PUSH_TO_TALK && (0, l.N)(t)
    }
  }
}