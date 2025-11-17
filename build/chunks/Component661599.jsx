/** Chunk was on 1272 **/
/** chunk id: 661599, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk82950 = require("./82950.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk510342 = require("./510342.js");
class d extends Chunk473749.PureComponent {
  render() {
    return (0, Chunk54381.jsx)(Chunk82950.Z, {
      guild: this.props.guild,
      onClick: () => (0, Chunk518596.openUserSettings)(Chunk313789.n.ACCOUNT_PANEL, {
        section: Chunk981631.oAB.ACCOUNT
      }),
      message: Chunk388032.intl.format(Chunk388032.t["oCd+at"], {}),
      cta: Chunk388032.intl.string(Chunk388032.t["8dCrV9"]),
      trackingSource: Chunk981631.PsQ.GUILD_MFA_WARNING,
      type: Chunk981631.vID.MFA_WARNING,
      image: Chunk510342,
      imageMarginX: 54,
      undismissable: true
    })
  }
}
let p = d