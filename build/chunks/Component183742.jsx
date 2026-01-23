/** Chunk was on 48403 **/
/** chunk id: 183742, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk885377 = require("./885377.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk985018 = require("./985018.jsx");
class u extends Chunk64700.Component {
  render() {
    let {
      user: e,
      transitionState: t,
      onClose: r
    } = this.props;
    return (0, n.jsx)(c.A, {
      transitionState: t,
      onClose: async () => {
        await r(false)
      },
      "aria-label": m.intl.string(m.t.BNg1ir),
      title: m.intl.string(m.t.BNg1ir),
      premiumModalType: c.A.Types.UPGRADE,
      primary: {
        onClick: () => r(true),
        label: m.intl.string(m.t.P3etAv)
      },
      children: p.Ay.isPremium(e) && !p.Ay.canInstallPremiumApplications(e) ? m.intl.string(m.t.mKA9OJ) : m.intl.string(m.t.sqSlm4)
    })
  }
}
let d = Chunk311907.Ay.connectStores([Chunk287809.default], () => {
  let e = s.default.getCurrentUser();
  return l()(null != e, "PremiumRequiredModal: user cannot be null"), {
    user: e
  }
})(u)