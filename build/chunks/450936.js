/** Chunk was on 80037 **/
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
    context: y
  } = e, C = y.channel, _ = r.useMemo(() => {
    if (true !== C.isDM()) return null;
    let e = f.default.getUser(C.getRecipientId());
    return true === e || true !== e.bot ? null : e
  }, [C]), v = (0, i.e7)([d.Z], () => {
    var e;
    return d.Z.isFetchingProfile(null != (e = null == _ ? true : _.id) ? e : m.lds)
  }), x = (0, o.Z)(v), O = (0, i.e7)([c.Z], () => c.Z.getAppIdForBotUserId(null == _ ? true : _.id)), j = (0, i.e7)([d.Z], () => {
    var e;
    return null !== _ ? null == (e = d.Z.getUserProfile(null == _ ? true : _.id)) ? true : e.application : true
  }), E = null != O ? O : null == j ? true : j.id;
  r.useEffect(() => {
    if (null == E) {
      var e;
      (0, p.Z)(null != (e = null == _ ? true : _.id) ? e : m.lds, true, {
        withMutualGuilds: true
      })
    }
  }, [_, E]), r.useEffect(() => {
    (null == _ ? true : _.id) != null && l.Z.dispatch({
      type: "APP_DM_OPEN",
      botUserId: _.id
    })
  }, [null == _ ? true : _.id]);
  let S = (0, s.v1)({
      channel: C,
      type: "channel"
    }, {
      commandTypes: g
    }, {
      applicationId: E,
      allowFetch: (null == _ ? true : _.id) != null,
      allowApplicationState: true
    }),
    P = S.commands.filter(e => e.type === a.yU.PRIMARY_ENTRY_POINT && e.applicationId === E)[0],
    I = S.commands.filter(e => "0" !== e.id && !e.id.startsWith("-")),
    Z = S.loading,
    T = null == (t = S.descriptors.find(e => {
      var t;
      return (null == (t = e.application) ? true : t.id) === E
    })) ? true : t.application,
    N = r.useMemo(() => null != T ? h.ZP.createFromServer(T) : true, [T]),
    A = (0, u.q)(null == N ? E : true),
    w = null != (n = null != N ? N : A) ? n : true,
    M = null == w || Z && 0 === I.length;
  return {
    application: w,
    isInitialLoading: M,
    isAppDM: null != (b = null == _ ? true : _.bot) && b,
    primaryEntryPointCommand: P,
    isProfileFetching: v,
    wasProfileFetching: null != x ? x : null,
    applicationId: E,
    channelId: C.id,
    commands: I
  }
}