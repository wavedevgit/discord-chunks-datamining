/** Chunk was on 7654 **/
/** chunk id: 895976, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => d
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk247272 = require("./247272.js"),
  Chunk751771 = require("./751771.js"),
  Chunk938475 = require("./938475.js"),
  Chunk245335 = require("./245335.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
  let {
    guild: t,
    inviteChannel: n,
    inviteTargetType: d,
    applicationId: c
  } = e, [g, h, m, p] = (0, i.Wu)([s.Z, a.ZP], () => [s.Z.getInviteSuggestionRows(), s.Z.getTotalSuggestionsCount() >= 1, s.Z.getInitialCounts(), null == n ? null : a.ZP.getVoiceStatesForChannel(n)], [n]), v = l.useMemo(() => {
    let e = new Set;
    return d === o.Iq.STREAM && null != p && p.forEach(t => {
      let {
        user: n
      } = t;
      e.add(n.id)
    }), e
  }, [n]);
  return l.useEffect(() => {
    (0, r.x)({
      omitUserIds: v,
      guild: t,
      channel: n,
      applicationId: c,
      inviteTargetType: d
    }).catch(u.VqG)
  }, [v, t, n, c, d]), {
    rows: g,
    showFriends: h,
    initialCounts: m
  }
}