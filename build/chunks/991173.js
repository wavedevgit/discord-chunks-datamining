/** Chunk was on 21738 **/
/** chunk id: 991173, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk179771 = require("./179771.js"),
  Chunk10584 = require("./10584.js"),
  Chunk636401 = require("./636401.js"),
  Chunk629471 = require("./629471.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js");
let u = {
  [Chunk652215.e$_.SET_CERTIFIED_DEVICES]: {
    scope: {
      [Chunk613057.sm.ANY]: [Chunk179771.F.RPC, Chunk613057.hj]
    },
    validation: e => (0, a.A)(e).required().keys({
      devices: e.array().items((0, a.A)(e).keys({
        type: e.string().required().valid([c.oh.AUDIO_INPUT, c.oh.AUDIO_OUTPUT, c.oh.VIDEO_INPUT]),
        id: e.string().required().min(1),
        vendor: (0, a.A)(e).required().keys({
          name: e.string().min(1),
          url: e.string().min(1)
        }),
        model: (0, a.A)(e).required().keys({
          name: e.string().min(1),
          url: e.string().min(1)
        }),
        related: e.array().items(e.string().min(1)),
        echo_cancellation: e.boolean(),
        noise_suppression: e.boolean(),
        automatic_gain_control: e.boolean(),
        hardware_mute: e.boolean()
      }))
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          devices: n
        }
      } = e;
      if (null == t.application.id) throw new l.A({
        errorCode: o.Lw6.INVALID_COMMAND
      }, "No application.");
      (0, i.z)(t.application.id, n.map(e => ({
        type: e.type,
        id: e.id,
        vendor: e.vendor,
        model: e.model,
        related: e.related.filter(e => n.some(t => t.id === e)),
        echoCancellation: e.echo_cancellation,
        noiseSuppression: e.noise_suppression,
        automaticGainControl: e.automatic_gain_control,
        hardwareMute: e.hardware_mute
      })))
    }
  }
}