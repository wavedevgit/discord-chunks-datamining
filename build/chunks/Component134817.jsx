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
    return (0, Chunk54381.jsx)(Chunk233787.C, {
      transitionState: exports,
      onClose: async () => {
        await require(false)
      },
      "aria-label": Chunk388032.intl.string(Chunk388032.t.BNg1ir),
      title: Chunk388032.intl.string(Chunk388032.t.BNg1ir),
      premiumModalType: Chunk233787.C.Types.UPGRADE,
      primary: {
        onClick: () => require(true),
        label: Chunk388032.intl.string(Chunk388032.t.P3etAv)
      },
      children: Chunk74538.ZP.isPremium(module) && !Chunk74538.ZP.canInstallPremiumApplications(module) ? Chunk388032.intl.string(Chunk388032.t.mKA9OJ) : Chunk388032.intl.string(Chunk388032.t.sqSlm4)
    })
  }
}
let p = Chunk442837.ZP.connectStores([Chunk594174.default], () => {
  let e = Chunk594174.default.getCurrentUser();
  return l()(null != module, "PremiumRequiredModal: user cannot be null"), {
    user: module
  }
})(m)