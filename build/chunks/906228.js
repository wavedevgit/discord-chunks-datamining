/** Chunk was on 1272 **/
/** chunk id: 906228, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk243814 = require("./243814.js"),
  Chunk120960 = require("./120960.js"),
  Chunk996106 = require("./996106.js"),
  Chunk452426 = require("./452426.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");
let u = {
  [Chunk981631.Etm.SET_CERTIFIED_DEVICES]: {
    scope: {
      [Chunk186901.Gp.ANY]: [Chunk243814.x.RPC, Chunk186901.lH]
    },
    validation: e => (0, a.Z)(e).required().keys({
      devices: e.array().items((0, a.Z)(e).keys({
        type: e.string().required().valid([c.h7.AUDIO_INPUT, c.h7.AUDIO_OUTPUT, c.h7.VIDEO_INPUT]),
        id: e.string().required().min(1),
        vendor: (0, a.Z)(e).required().keys({
          name: e.string().min(1),
          url: e.string().min(1)
        }),
        model: (0, a.Z)(e).required().keys({
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
      if (null == t.application.id) throw new l.Z({
        errorCode: o.lTL.INVALID_COMMAND
      }, "No application.");
      (0, i.N)(t.application.id, n.map(e => ({
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