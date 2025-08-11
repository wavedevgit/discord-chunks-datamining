/** Chunk was on 75708 **/
/** chunk id: 88624, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk346951 = require("./346951.js"),
  Chunk644744 = require("./644744.js"),
  Chunk792423 = require("./792423.js"),
  Chunk674985 = require("./674985.js"),
  Chunk594174 = require("./594174.js"),
  Chunk843200 = require("./843200.js"),
  Chunk388032 = require("./388032.js"),
  Chunk647573 = require("./647573.js");

function f() {
  let {
    houseMembership: e,
    isClaimed: t,
    isVerified: n
  } = (0, Chunk442837.cj)([Chunk594174.default, Chunk674985.Z], () => {
    let e = Chunk594174.default.getCurrentUser();
    return s()(null != module, "UserSettingsHypeSquad: currentUser cannot be undefined"), {
      houseMembership: Chunk674985.Z.getHouseMembership(),
      isClaimed: module.isClaimed(),
      isVerified: module.verified
    }
  });
  return <Chunk481060.y5t component={(0, Chunk255367.jsxs)("div", {
      className: Chunk647573.intro,
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-xxl/semibold",
        className: Chunk647573.introHeader,
        children: null == module ? Chunk388032.intl.string(Chunk388032.t.iZowCQ) : Chunk388032.intl.string(Chunk388032.t.e7fL7O)
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-lg/normal",
        children: Chunk388032.intl.string(Chunk388032.t["6FaVFB"])
      })]
    })}>{<Chunk843200.Z className={Chunk647573.verificationNotice} unclaimedNotice={Chunk388032.intl.string(Chunk388032.t.vZU8Ki)} unverifiedNotice={Chunk388032.intl.string(Chunk388032.t.T7TYEB)} />}{<Chunk644744.Z houseMembership={module} isClaimed={exports} isVerified={require} />}{<Chunk346951.Z />}{<Chunk792423.Z isHypeSquadOnlineMember={null != module} />}</Chunk481060.y5t>
}