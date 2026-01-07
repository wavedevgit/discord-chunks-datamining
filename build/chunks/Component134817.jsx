/** Chunk was on 29393 **/
/** chunk id: 134817, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk233787 = require("./233787.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk388032 = require("./388032.jsx");
class m extends Chunk473749.Component {
  render() {
    let {
      user: e,
      transitionState: t,
      onClose: r
    } = this.props;
    return (0, n.jsx)(c.C, {
      transitionState: t,
      onClose: async () => {
        await r(false)
      },
      "aria-label": u.intl.string(u.t.BNg1ir),
      title: u.intl.string(u.t.BNg1ir),
      premiumModalType: c.C.Types.UPGRADE,
      primary: {
        onClick: () => r(true),
        label: u.intl.string(u.t.P3etAv)
      },
      children: d.ZP.isPremium(e) && !d.ZP.canInstallPremiumApplications(e) ? u.intl.string(u.t.mKA9OJ) : u.intl.string(u.t.sqSlm4)
    })
  }
}
let p = Chunk442837.ZP.connectStores([Chunk594174.default], () => {
  let e = s.default.getCurrentUser();
  return l()(null != e, "PremiumRequiredModal: user cannot be null"), {
    user: e
  }
})(m)