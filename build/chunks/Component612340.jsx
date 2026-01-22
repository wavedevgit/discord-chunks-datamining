/** Chunk was on 21738 **/
/** chunk id: 612340, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk64983 = require("./64983.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk72692 = require("./72692.js");
class d extends Chunk64700.PureComponent {
  render() {
    return (0, r.jsx)(s.A, {
      guild: this.props.guild,
      onClick: () => (0, a.openUserSettings)(l.X.ACCOUNT_PANEL, {
        section: o.nc_.ACCOUNT
      }),
      message: c.intl.format(c.t["oCd+at"], {}),
      cta: c.intl.string(c.t["8dCrV9"]),
      trackingSource: o.kZU.GUILD_MFA_WARNING,
      type: o.n5X.MFA_WARNING,
      image: u,
      imageMarginX: 54,
      undismissable: true
    })
  }
}
let p = d