/** Chunk was on 29393 **/
/** chunk id: 134817, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk233787 = require("./233787.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk388032 = require("./388032.js");
class d extends Chunk73800.Component {
  render() {
    let {
      user: e,
      transitionState: t,
      onClose: n
    } = this.props;
    return <Chunk233787.C transitionState={exports} onClose={async () => {
        await require(false)
      }} aria-label={Chunk388032.intl.string(Chunk388032.t.BNg1io)} title={Chunk388032.intl.string(Chunk388032.t.BNg1io)} premiumModalType={Chunk233787.C.Types.UPGRADE} primary={{
        onClick: () => require(true),
        label: Chunk388032.intl.string(Chunk388032.t.P3etAg)
      }}>{Chunk74538.ZP.isPremium(module) && !Chunk74538.ZP.canInstallPremiumApplications(module) ? Chunk388032.intl.string(Chunk388032.t.mKA9OD) : Chunk388032.intl.string(Chunk388032.t.sqSlm5)}</Chunk233787.C>
  }
}
let g = Chunk442837.ZP.connectStores([Chunk594174.default], () => {
  let e = Chunk594174.default.getCurrentUser();
  return s()(null != module, "PremiumRequiredModal: user cannot be null"), {
    user: module
  }
})(d)