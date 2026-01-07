/** Chunk was on 77069 **/
/** chunk id: 523044, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  y: () => c
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
let c = (0, Chunk509613.qs)(Chunk313789.n.CONTENT_AND_SOCIAL_FRIEND_REQUESTS_MUTUAL_FRIENDS_SETTING, {
  useTitle: () => S.intl.string(S.t.NfeuZ3),
  useValue: () => {
    let t = a.xq.useSetting(),
      e = i.useMemo(() => (0, r.bL)(t), [t]);
    return e.all || e.mutualFriends
  },
  setValue: t => {
    let e = a.xq.getSetting();
    a.xq.updateSetting(t ? l.pj(e, T.SOq.MUTUAL_FRIENDS) : l.M1(e, T.SOq.MUTUAL_FRIENDS, T.SOq.NO_RELATION))
  },
  useDisabled: () => (0, s.LN)()
})