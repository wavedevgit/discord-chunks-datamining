/** Chunk was on 2795 **/
/** chunk id: 75293, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk159691 = require("./159691.js"),
  Chunk923928 = require("./923928.js"),
  Chunk594190 = require("./594190.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}
class c extends Chunk647438.Component {
  componentDidMount() {
    let {
      pid: t
    } = this.props, e = null != module ? Chunk594190.ZP.getGameForPID(module) : null;
    Chunk626135.default.track(Chunk981631.rMx.OPEN_MODAL, {
      type: "Elevated Permissions Sound",
      application_id: null != exports ? exports.id : null,
      application_name: null != exports ? exports.name : null,
      game_id: null != exports ? exports.id : null
    })
  }
  render() {
    return (0, Chunk951288.jsx)(Chunk159691.u_l, {
      size: "md",
      title: Chunk388032.intl.string(Chunk388032.t["4xSkEB"]),
      subtitle: Chunk388032.intl.string(Chunk388032.t.UCEXPq),
      actions: [{
        variant: "secondary",
        text: Chunk388032.intl.string(Chunk388032.t.of0VoB),
        onClick: this.handleStreamWithoutSound
      }, {
        variant: "primary",
        text: Chunk388032.intl.string(Chunk388032.t.taPRcJ),
        onClick: this.handleRequestElevated
      }],
      onClose: this.props.onClose,
      transitionState: this.props.transitionState
    })
  }
  constructor(...t) {
    super(...t), p(this, "handleStreamWithoutSound", () => {
      let {
        handleStream: t,
        onClose: e,
        pid: n
      } = this.props;
      a.Z.continueNonelevatedProcess(n), t(), e()
    }), p(this, "handleRequestElevated", () => {
      let {
        handleStream: t,
        onClose: e,
        pid: n
      } = this.props;
      a.Z.requestElevatedProcess(n), t(), e()
    })
  }
}
let h = c