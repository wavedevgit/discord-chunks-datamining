/** Chunk was on 1272 **/
/** chunk id: 661599, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk230711 = require("./230711.js"),
  Chunk82950 = require("./82950.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk510342 = require("./510342.js");
class u extends Chunk73800.PureComponent {
  render() {
    return (0, Chunk255367.jsx)(Chunk82950.Z, {
      guild: this.props.guild,
      onClick: () => Chunk230711.Z.open(Chunk981631.oAB.ACCOUNT),
      message: Chunk388032.intl.format(Chunk388032.t["oCd+am"], {}),
      cta: Chunk388032.intl.string(Chunk388032.t["8dCrV1"]),
      trackingSource: Chunk981631.PsQ.GUILD_MFA_WARNING,
      type: Chunk981631.vID.MFA_WARNING,
      image: Chunk510342,
      imageMarginX: 54,
      undismissable: true
    })
  }
}
let d = u