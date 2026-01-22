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
class b extends Chunk64700.Component {
  render() {
    let {
      user: e,
      transitionState: t,
      onClose: r
    } = this.props;
    return (0, n.jsx)(o.A, {
      transitionState: t,
      onClose: async () => {
        await r(false)
      },
      "aria-label": u.intl.string(u.t.BNg1ir),
      title: u.intl.string(u.t.BNg1ir),
      premiumModalType: o.A.Types.UPGRADE,
      primary: {
        onClick: () => r(true),
        label: u.intl.string(u.t.P3etAv)
      },
      children: p.Ay.isPremium(e) && !p.Ay.canInstallPremiumApplications(e) ? u.intl.string(u.t.mKA9OJ) : u.intl.string(u.t.sqSlm4)
    })
  }
}
let d = Chunk311907.Ay.connectStores([Chunk287809.default], () => {
  let e = s.default.getCurrentUser();
  return l()(null != e, "PremiumRequiredModal: user cannot be null"), {
    user: e
  }
})(b)