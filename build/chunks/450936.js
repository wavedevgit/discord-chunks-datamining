/** Chunk was on web.js **/
/** chunk id: 450936, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk73800 = require("./73800.js"),
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
let m = [Chunk911969.yU.PRIMARY_ENTRY_POINT, Chunk911969.yU.CHAT, Chunk911969.yU.MESSAGE, Chunk911969.yU.USER];

function g(e) {
  var t, n, g;
  let {
    context: E
  } = e, b = E.channel, y = r.useMemo(() => {
    if (true !== b.isDM()) return null;
    let e = p.default.getUser(b.getRecipientId());
    return true === e || true !== e.bot ? null : e
  }, [b]), O = (0, i.e7)([d.Z], () => {
    var e;
    return d.Z.isFetchingProfile(null != (e = null == y ? true : y.id) ? e : h.lds)
  }), v = (0, s.Z)(O), I = (0, i.e7)([c.Z], () => c.Z.getAppIdForBotUserId(null == y ? true : y.id)), T = (0, i.e7)([d.Z], () => {
    var e;
    return null !== y ? null == (e = d.Z.getUserProfile(null == y ? true : y.id)) ? true : e.application : true
  }), S = null != I ? I : null == T ? true : T.id;
  r.useEffect(() => {
    if (null == S) {
      var e;
      (0, f.Z)(null != (e = null == y ? true : y.id) ? e : h.lds, true, {
        withMutualGuilds: true
      })
    }
  }, [y, S]), r.useEffect(() => {
    (null == y ? true : y.id) != null && o.Z.dispatch({
      type: "APP_DM_OPEN",
      botUserId: y.id
    })
  }, [null == y ? true : y.id]);
  let A = (0, l.v1)({
      channel: b,
      type: "channel"
    }, {
      commandTypes: m
    }, {
      applicationId: S,
      allowFetch: (null == y ? true : y.id) != null,
      allowApplicationState: true
    }),
    N = A.commands.filter(e => e.type === a.yU.PRIMARY_ENTRY_POINT && e.applicationId === S)[0],
    C = A.commands.filter(e => "0" !== e.id && !e.id.startsWith("-")),
    R = A.loading,
    P = null == (t = A.descriptors.find(e => {
      var t;
      return (null == (t = e.application) ? true : t.id) === S
    })) ? true : t.application,
    w = r.useMemo(() => null != P ? _.ZP.createFromServer(P) : true, [P]),
    D = (0, u.q)(null == w ? S : true),
    L = null != (n = null != w ? w : D) ? n : true,
    x = null == L || R && 0 === C.length;
  return {
    application: L,
    isInitialLoading: x,
    isAppDM: null != (g = null == y ? true : y.bot) && g,
    primaryEntryPointCommand: N,
    isProfileFetching: O,
    wasProfileFetching: null != v ? v : null,
    applicationId: S,
    channelId: b.id,
    commands: C
  }
}