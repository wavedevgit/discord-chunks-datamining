/** Chunk was on web.js **/
/** chunk id: 49012, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => R,
  r: () => N
});
var Chunk159635 = require("./159635.js"),
  i = require.n(Chunk159635),
  Chunk668781 = require("./668781.js"),
  Chunk45986 = require("./45986.js"),
  Chunk782568 = require("./782568.js"),
  Chunk704133 = require("./704133.jsx"),
  Chunk139674 = require("./139674.js"),
  Chunk702321 = require("./702321.js"),
  Chunk900460 = require("./900460.jsx"),
  Chunk627714 = require("./627714.js"),
  Chunk364640 = require("./364640.js"),
  Chunk772096 = require("./772096.js"),
  Chunk982806 = require("./982806.jsx"),
  Chunk540709 = require("./540709.jsx"),
  Chunk881706 = require("./881706.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk20303 = require("./20303.js"),
  Chunk902676 = require("./902676.js"),
  Chunk375954 = require("./375954.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function N(e, t) {
  var n;
  let r = E.Z.getChannel(T.Z.getChannelId());
  return (null == r || r.type !== A.d4z.DM || !!I.Z.isFriend(null != (n = r.getRecipientId()) ? n : "")) && e === t
}

function R(e, t) {
  let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
    I = arguments.length > 3 ? arguments[3] : true,
    {
      trusted: T,
      onClick: N,
      onConfirm: R,
      onCancel: P,
      shouldConfirm: D,
      messageId: w,
      channelId: L
    } = e,
    x = i().sanitizeUrl(e.href);
  if (null == x) {
    null != t && t.preventDefault(), a.Z.show({
      title: C.intl.string(C.t.x87gan),
      body: C.intl.format(C.t["9rqRwl"], {
        url: e.href
      }),
      isDismissable: true,
      contextKey: I
    });
    return
  }
  let M = x;
  try {
    decodeURI(x)
  } catch (e) {
    M = encodeURI(x)
  }
  let k = null,
    j = false,
    U = w,
    G = L,
    B = null;
  if (null != w && null != L) {
    var Z, F, V;
    let e = v.Z.getMessage(L, w),
      t = E.Z.getBasicChannel(L);
    k = null != (V = null == t ? true : t.guild_id) ? V : null;
    let n = b.Z.getGuild(k),
      r = (null == e || null == (Z = e.messageReference) ? true : Z.guild_id) != null && (null == e ? true : e.webhookId) != null && (null == e ? true : e.hasFlag(A.iLy.IS_CROSSPOST)) && null != k;
    r && (null == e || null == (F = e.messageReference) ? true : F.guild_id) != null ? (U = e.messageReference.message_id, G = e.messageReference.channel_id, B = e.messageReference.guild_id) : B = k;
    let i = (null == t ? true : t.type) === A.d4z.GUILD_ANNOUNCEMENT && (null == n ? true : n.features.has(A.GuildFeatures.COMMUNITY)) === true,
      a = (null == e ? true : e.hasFlag(A.iLy.EPHEMERAL)) === true;
    j = null != e && !a && (r || i)
  }
  if (null != L) {
    let e = E.Z.getChannel(L),
      t = b.Z.getGuild(null == e ? true : e.getGuildId());
    null != e && null != t && t.features.has(A.GuildFeatures.DISCOVERABLE) && S.default.track(A.rMx.URL_CLICKED, {
      url_domain: (0, O.F)(M),
      guild_id: t.id,
      channel_id: e.id
    }), (0, u.Z)(L) && S.default.track(A.rMx.CHANGE_LOG_CTA_CLICKED, {
      cta_type: "inline_link",
      target: M
    })
  }
  if (_.Z.trackLinkClicked(M), null != N) {
    if (N(t)) return
  } else {
    let {
      default: e
    } = n(315263), i = e(M, {
      skipExtensionCheck: true,
      analyticsLocations: r
    });
    if (null != i && i(t)) return
  }
  let H = () => {
      if (j && _.Z.trackAnnouncementMessageLinkClicked({
          messageId: U,
          channelId: L,
          guildId: k,
          sourceChannelId: G,
          sourceGuildId: B
        }), null != R) return void R();
      (0, s.Z)(M)
    },
    W = null != P ? P : () => {};
  if (null !== c.Z.isBlockedDomain(M)) {
    null == t || t.preventDefault(), l.Z.show(M);
    return
  }
  if (null != (0, g.v)(M)) {
    null == t || t.preventDefault(), m.Z.show(M);
    return
  }
  if ((0, f.I)(M)) {
    null == t || t.preventDefault(), d.Z.show(M);
    return
  }
  let Y = "function" == typeof T ? T() : T,
    K = (0, O.E)(M),
    z = "http:" !== K && "https:" !== K;
  if (!z && (Y || y.Z.isTrustedDomain(M)) || z && y.Z.isTrustedProtocol(M)) return void(null == t || null != D && D ? H() : j && _.Z.trackAnnouncementMessageLinkClicked({
    messageId: U,
    channelId: L,
    guildId: k,
    sourceChannelId: G,
    sourceGuildId: B
  }));
  if (null != t && t.preventDefault(), z) h.Z.show({
    url: M,
    trustUrl: o.u,
    onConfirm: H,
    onCancel: W,
    isProtocol: true,
    contextKey: I
  });
  else {
    let e = (0, p.yw)(M),
      t = null != e ? e.displayTarget : M;
    h.Z.show({
      url: t,
      trustUrl: o.o,
      onConfirm: H,
      onCancel: W,
      isProtocol: false,
      contextKey: I
    })
  }
}