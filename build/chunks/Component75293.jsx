/** Chunk was on 2795 **/
/** chunk id: 75293, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk923928 = require("./923928.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk594190 = require("./594190.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function p(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}
class m extends Chunk647438.Component {
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
    return (0, Chunk951288.jsxs)(Chunk481060.Y0X, {
      transitionState: this.props.transitionState,
      "aria-label": Chunk388032.intl.string(Chunk388032.t["4xSkEB"]),
      parentComponent: "ElevatedPermissionsSound",
      children: [(0, Chunk951288.jsxs)(Chunk481060.xBx, {
        justify: Chunk600164.Z.Justify.BETWEEN,
        separator: false,
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/semibold",
          children: Chunk388032.intl.string(Chunk388032.t["4xSkEB"])
        }), (0, Chunk951288.jsx)(Chunk481060.olH, {
          onClick: this.handleClose
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.hzk, {
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          tag: "strong",
          variant: "text-md/normal",
          className: Chunk197571.marginBottom20,
          children: Chunk388032.intl.string(Chunk388032.t.UCEXPq)
        })
      }), (0, Chunk951288.jsx)(Chunk481060.mzw, {
        children: (0, Chunk951288.jsxs)(Chunk481060.ButtonGroup, {
          direction: "horizontal-reverse",
          children: [(0, Chunk951288.jsx)(Chunk481060.Button, {
            variant: "primary",
            text: Chunk388032.intl.string(Chunk388032.t.taPRcJ),
            onClick: this.handleRequestElevated
          }), (0, Chunk951288.jsx)(Chunk481060.Button, {
            variant: "secondary",
            text: Chunk388032.intl.string(Chunk388032.t.of0VoB),
            onClick: this.handleStreamWithoutSound
          })]
        })
      })]
    })
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
let x = m