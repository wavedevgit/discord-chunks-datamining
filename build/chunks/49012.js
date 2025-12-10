/** Chunk was on web.js **/
/** chunk id: 49012, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => P,
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
  let r = E.Z.getChannel(I.Z.getChannelId());
  return (null == r || r.type !== C.d4z.DM || !!S.Z.isFriend(null != (n = r.getRecipientId()) ? n : "")) && e === t
}

function P(e, t) {
  let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
    S = arguments.length > 3 ? arguments[3] : true,
    {
      trusted: I,
      onClick: N,
      onConfirm: P,
      onCancel: R,
      shouldConfirm: w,
      messageId: D,
      channelId: x
    } = e,
    L = i().sanitizeUrl(e.href);
  if (null == L) {
    null != t && t.preventDefault(), a.Z.show({
      title: A.intl.string(A.t.x87gan),
      body: A.intl.format(A.t["9rqRwl"], {
        url: e.href
      }),
      isDismissable: true,
      contextKey: S
    });
    return
  }
  let j = L;
  try {
    decodeURI(L)
  } catch (e) {
    j = encodeURI(L)
  }
  let M = null,
    k = false,
    U = D,
    G = x,
    Z = null;
  if (null != D && null != x) {
    var B, F, V;
    let e = v.Z.getMessage(x, D),
      t = E.Z.getBasicChannel(x);
    M = null != (V = null == t ? true : t.guild_id) ? V : null;
    let n = b.Z.getGuild(M),
      r = (null == e || null == (B = e.messageReference) ? true : B.guild_id) != null && (null == e ? true : e.webhookId) != null && (null == e ? true : e.hasFlag(C.iLy.IS_CROSSPOST)) && null != M;
    r && (null == e || null == (F = e.messageReference) ? true : F.guild_id) != null ? (U = e.messageReference.message_id, G = e.messageReference.channel_id, Z = e.messageReference.guild_id) : Z = M;
    let i = (null == t ? true : t.type) === C.d4z.GUILD_ANNOUNCEMENT && (null == n ? true : n.features.has(C.GuildFeatures.COMMUNITY)) === true,
      a = (null == e ? true : e.hasFlag(C.iLy.EPHEMERAL)) === true;
    k = null != e && !a && (r || i)
  }
  if (null != x) {
    let e = E.Z.getChannel(x),
      t = b.Z.getGuild(null == e ? true : e.getGuildId());
    null != e && null != t && t.features.has(C.GuildFeatures.DISCOVERABLE) && T.default.track(C.rMx.URL_CLICKED, {
      url_domain: (0, O.F)(j),
      guild_id: t.id,
      channel_id: e.id
    }), (0, u.Z)(x) && T.default.track(C.rMx.CHANGE_LOG_CTA_CLICKED, {
      cta_type: "inline_link",
      target: j
    })
  }
  if (p.Z.trackLinkClicked(j), null != N) {
    if (N(t)) return
  } else {
    let {
      default: e
    } = n(315263), i = e(j, {
      skipExtensionCheck: true,
      analyticsLocations: r
    });
    if (null != i && i(t)) return
  }
  let H = () => {
      if (k && p.Z.trackAnnouncementMessageLinkClicked({
          messageId: U,
          channelId: x,
          guildId: M,
          sourceChannelId: G,
          sourceGuildId: Z
        }), null != P) return void P();
      (0, s.Z)(j)
    },
    Y = null != R ? R : () => {};
  if (null !== c.Z.isBlockedDomain(j)) {
    null == t || t.preventDefault(), l.Z.show(j);
    return
  }
  if (null != (0, g.v)(j)) {
    null == t || t.preventDefault(), h.Z.show(j);
    return
  }
  if ((0, f.I)(j)) {
    null == t || t.preventDefault(), d.Z.show(j);
    return
  }
  let W = "function" == typeof I ? I() : I,
    K = (0, O.E)(j),
    z = "http:" !== K && "https:" !== K;
  if (!z && (W || y.Z.isTrustedDomain(j)) || z && y.Z.isTrustedProtocol(j)) return void(null == t || null != w && w ? H() : k && p.Z.trackAnnouncementMessageLinkClicked({
    messageId: U,
    channelId: x,
    guildId: M,
    sourceChannelId: G,
    sourceGuildId: Z
  }));
  if (null != t && t.preventDefault(), z) m.Z.show({
    url: j,
    trustUrl: o.u,
    onConfirm: H,
    onCancel: Y,
    isProtocol: true,
    contextKey: S
  });
  else {
    let e = (0, _.yw)(j),
      t = null != e ? e.displayTarget : j;
    m.Z.show({
      url: t,
      trustUrl: o.o,
      onConfirm: H,
      onCancel: Y,
      isProtocol: false,
      contextKey: S
    })
  }
}