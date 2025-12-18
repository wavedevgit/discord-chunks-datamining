/** Chunk was on 77069 **/
/** chunk id: 56404, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk95015 = require("./95015.js"),
  Chunk915009 = require("./915009.js"),
  Chunk509613 = require("./509613.js"),
  Chunk88658 = require("./88658.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let c = (0, Chunk509613.qs)(Chunk313789.n.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_GUILDS_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.qsMfsH),
  useValue: () => {
    let t = Chunk695346.xq.useSetting(),
      e = Chunk473749.useMemo(() => (0, Chunk88658.bL)(module), [module]);
    return exports.all || exports.mutualGuilds
  },
  setValue: t => {
    let e = a.xq.getSetting();
    a.xq.updateSetting(t ? l.pj(e, T.SOq.MUTUAL_GUILDS) : l.M1(e, T.SOq.MUTUAL_GUILDS, T.SOq.NO_RELATION))
  },
  useDisabled: () => (0, Chunk915009.LN)()
})