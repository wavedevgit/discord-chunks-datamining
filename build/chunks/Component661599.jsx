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
    return (0, r.jsx)(o.Z, {
      guild: this.props.guild,
      onClick: () => (0, a.openUserSettings)(l.n.ACCOUNT_PANEL, {
        section: s.oAB.ACCOUNT
      }),
      message: c.intl.format(c.t["oCd+at"], {}),
      cta: c.intl.string(c.t["8dCrV9"]),
      trackingSource: s.PsQ.GUILD_MFA_WARNING,
      type: s.vID.MFA_WARNING,
      image: u,
      imageMarginX: 54,
      undismissable: true
    })
  }
}
let p = d