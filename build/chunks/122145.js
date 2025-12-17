/** Chunk was on 77069 **/
/** chunk id: 122145, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Y: () => T
});
var Chunk473749 = require("./473749.js"),
  Chunk915009 = require("./915009.js"),
  Chunk509613 = require("./509613.js"),
  Chunk88658 = require("./88658.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.qs)(Chunk313789.n.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_EVERYONE_SETTING, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t["7x9dyE"]),
  useValue: () => {
    let t = Chunk695346.xq.useSetting();
    return Chunk473749.useMemo(() => (0, Chunk88658.bL)(module), [module]).all
  },
  setValue: t => {
    r.xq.updateSetting(t ? o.HGf : o.HGf & ~o.SOq.NO_RELATION)
  },
  useDisabled: () => (0, Chunk915009.LN)()
})