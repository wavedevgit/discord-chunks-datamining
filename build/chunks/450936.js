/** Chunk was on 13873 **/
/** chunk id: 450936, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk911969 = require("./911969.js"),
  Chunk110924 = require("./110924.js"),
  Chunk213459 = require("./213459.js"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk621853 = require("./621853.js"),
  Chunk484459 = require("./484459.js"),
  Chunk973616 = require("./973616.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");
let g = [Chunk911969.yU.PRIMARY_ENTRY_POINT, Chunk911969.yU.CHAT, Chunk911969.yU.MESSAGE, Chunk911969.yU.USER];

function b(e) {
  var t, n, b;
  let {
    context: _
  } = e, y = _.channel, C = r.useMemo(() => {
    if (true !== y.isDM()) return null;
    let e = h.default.getUser(y.getRecipientId());
    return true === e || true !== e.bot ? null : e
  }, [y]), v = (0, i.e7)([d.Z], () => {
    var e;
    return d.Z.isFetchingProfile(null != (e = null == C ? true : C.id) ? e : m.lds)
  }), O = (0, o.Z)(v), x = (0, i.e7)([c.Z], () => c.Z.getAppIdForBotUserId(null == C ? true : C.id)), E = (0, i.e7)([d.Z], () => {
    var e;
    return null !== C ? null == (e = d.Z.getUserProfile(null == C ? true : C.id)) ? true : e.application : true
  }), j = null != x ? x : null == E ? true : E.id;
  r.useEffect(() => {
    if (null == j) {
      var e;
      (0, p.Z)(null != (e = null == C ? true : C.id) ? e : m.lds, true, {
        withMutualGuilds: true
      })
    }
  }, [C, j]), r.useEffect(() => {
    (null == C ? true : C.id) != null && l.Z.dispatch({
      type: "APP_DM_OPEN",
      botUserId: C.id
    })
  }, [null == C ? true : C.id]);
  let S = (0, s.v1)({
      channel: y,
      type: "channel"
    }, {
      commandTypes: g
    }, {
      applicationId: j,
      allowFetch: (null == C ? true : C.id) != null,
      allowApplicationState: true
    }),
    P = S.commands.filter(e => e.type === a.yU.PRIMARY_ENTRY_POINT && e.applicationId === j)[0],
    I = S.commands.filter(e => "0" !== e.id && !e.id.startsWith("-")),
    Z = S.loading,
    T = null == (t = S.descriptors.find(e => {
      var t;
      return (null == (t = e.application) ? true : t.id) === j
    })) ? true : t.application,
    N = r.useMemo(() => null != T ? f.ZP.createFromServer(T) : true, [T]),
    A = (0, u.q)(null == N ? j : true),
    w = null != (n = null != N ? N : A) ? n : true,
    M = null == w || Z && 0 === I.length;
  return {
    application: w,
    isInitialLoading: M,
    isAppDM: null != (b = null == C ? true : C.bot) && b,
    primaryEntryPointCommand: P,
    isProfileFetching: v,
    wasProfileFetching: null != O ? O : null,
    applicationId: j,
    channelId: y.id,
    commands: I
  }
}