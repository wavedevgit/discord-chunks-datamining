/** Chunk was on 74300 **/
/** chunk id: 566852, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk923928 = require("./923928.js"),
  Chunk600164 = require("./600164.js"),
  Chunk594190 = require("./594190.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk20493 = require("./20493.js");

function p(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}
class x extends Chunk73800.Component {
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
    return <Chunk481060.Y0X transitionState={this.props.transitionState} aria-label={Chunk388032.intl.string(Chunk388032.t["4xSkEB"])} parentComponent={"ElevatedPermissionsSound"}>{<Chunk481060.xBx justify={Chunk600164.Z.Justify.BETWEEN} separator={false}>{<Chunk481060.X6q variant={"heading-lg/semibold"}>{Chunk388032.intl.string(Chunk388032.t["4xSkEB"])}</Chunk481060.X6q>}{<Chunk481060.olH onClick={this.handleClose} />}</Chunk481060.xBx>}{<Chunk481060.hzk><Chunk481060.Text tag={"strong"} variant={"text-md/normal"} className={Chunk20493.marginBottom20}>{Chunk388032.intl.string(Chunk388032.t.UCEXPj)}</Chunk481060.Text></Chunk481060.hzk>}{<Chunk481060.mzw><Chunk481060.hE2 direction={"horizontal-reverse"}>{<Chunk481060.zxk variant={"primary"} text={Chunk388032.intl.string(Chunk388032.t.taPRcH)} onClick={this.handleRequestElevated} />}{<Chunk481060.zxk variant={"secondary"} text={Chunk388032.intl.string(Chunk388032.t.of0VoK)} onClick={this.handleStreamWithoutSound} />}</Chunk481060.hE2></Chunk481060.mzw>}</Chunk481060.Y0X>
  }
  constructor(...t) {
    super(...t), p(this, "handleClose", () => {
      let {
        onClose: t
      } = this.props;
      null == t || t()
    }), p(this, "handleStreamWithoutSound", () => {
      let {
        handleStream: t,
        onClose: e,
        pid: n
      } = this.props;
      r.Z.continueNonelevatedProcess(n), t(), e()
    }), p(this, "handleRequestElevated", () => {
      let {
        handleStream: t,
        onClose: e,
        pid: n
      } = this.props;
      r.Z.requestElevatedProcess(n), t(), e()
    })
  }
}
let m = x