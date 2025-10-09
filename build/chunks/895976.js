/** Chunk was on 74318 **/
/** chunk id: 895976, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => c
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk247272 = require("./247272.js"),
  Chunk751771 = require("./751771.js"),
  Chunk938475 = require("./938475.js"),
  Chunk245335 = require("./245335.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  let {
    guild: t,
    inviteChannel: n,
    inviteTargetType: c,
    applicationId: d
  } = e, [g, m, I, p] = (0, i.Wu)([r.Z, s.ZP], () => [r.Z.getInviteSuggestionRows(), r.Z.getTotalSuggestionsCount() >= 1, r.Z.getInitialCounts(), null == n ? null : s.ZP.getVoiceStatesForChannel(n)], [n]), f = l.useMemo(() => {
    let e = new Set;
    return c === o.Iq.STREAM && null != p && p.forEach(t => {
      let {
        user: n
      } = t;
      e.add(n.id)
    }), e
  }, [n]);
  return l.useEffect(() => {
    (0, a.x)({
      omitUserIds: f,
      guild: t,
      channel: n,
      applicationId: d,
      inviteTargetType: c
    }).catch(u.VqG)
  }, [f, t, n, d, c]), {
    rows: g,
    showFriends: m,
    initialCounts: I
  }
}