/** Chunk was on web.js **/
/** chunk id: 307600, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => w,
  m: () => N
});
var Chunk791332 = require("./791332.js"),
  i = require.n(Chunk791332),
  Chunk157559 = require("./157559.js"),
  Chunk318972 = require("./318972.js"),
  Chunk975807 = require("./975807.js"),
  Chunk73539 = require("./73539.jsx"),
  Chunk754450 = require("./754450.js"),
  Chunk343328 = require("./343328.js"),
  Chunk868582 = require("./868582.jsx"),
  Chunk784947 = require("./784947.js"),
  Chunk235393 = require("./235393.js"),
  Chunk694403 = require("./694403.js"),
  Chunk953866 = require("./953866.jsx"),
  Chunk788995 = require("./788995.jsx"),
  Chunk556022 = require("./556022.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk259439 = require("./259439.js"),
  Chunk155078 = require("./155078.js"),
  Chunk320501 = require("./320501.js"),
  Chunk994500 = require("./994500.js"),
  Chunk309010 = require("./309010.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function N(e, t) {
  var n;
  let r = E.A.getChannel(I.A.getChannelId());
  return (null == r || r.type !== T.rbe.DM || !!A.A.isFriend(null != (n = r.getRecipientId()) ? n : "")) && e === t
}

function w(e, t) {
  let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
    A = arguments.length > 3 ? arguments[3] : true,
    {
      trusted: I,
      onClick: N,
      onConfirm: w,
      onCancel: R,
      shouldConfirm: P,
      messageId: D,
      channelId: L
    } = e,
    x = i().sanitizeUrl(e.href);
  if (null == x) {
    null != t && t.preventDefault(), a.A.show({
      title: C.intl.string(C.t.x87gan),
      body: C.intl.format(C.t["9rqRwl"], {
        url: e.href
      }),
      isDismissable: true,
      contextKey: A
    });
    return
  }
  let M = x;
  try {
    decodeURI(x)
  } catch (e) {
    M = encodeURI(x)
  }
  let j = null,
    k = false,
    U = D,
    G = L,
    V = null;
  if (null != D && null != L) {
    var F, B, H;
    let e = v.A.getMessage(L, D),
      t = E.A.getBasicChannel(L);
    j = null != (F = null == t ? true : t.guild_id) ? F : null;
    let n = y.A.getGuild(j),
      r = (null == e || null == (B = e.messageReference) ? true : B.guild_id) != null && (null == e ? true : e.webhookId) != null && (null == e ? true : e.hasFlag(T.pr7.IS_CROSSPOST)) && null != j;
    r && (null == e || null == (H = e.messageReference) ? true : H.guild_id) != null ? (U = e.messageReference.message_id, G = e.messageReference.channel_id, V = e.messageReference.guild_id) : V = j;
    let i = (null == t ? true : t.type) === T.rbe.GUILD_ANNOUNCEMENT && (null == n ? true : n.features.has(T.GuildFeatures.COMMUNITY)) === true,
      a = (null == e ? true : e.hasFlag(T.pr7.EPHEMERAL)) === true;
    k = null != e && !a && (r || i)
  }
  if (null != L) {
    let e = E.A.getChannel(L),
      t = y.A.getGuild(null == e ? true : e.getGuildId());
    null != e && null != t && t.features.has(T.GuildFeatures.DISCOVERABLE) && S.default.track(T.HAw.URL_CLICKED, {
      url_domain: (0, O.E)(M),
      guild_id: t.id,
      channel_id: e.id
    }), (0, u.A)(L) && S.default.track(T.HAw.CHANGE_LOG_CTA_CLICKED, {
      cta_type: "inline_link",
      target: M
    })
  }
  if (p.A.trackLinkClicked(M), null != N) {
    if (N(t)) return
  } else {
    let {
      default: e
    } = n(352423), i = e(M, {
      skipExtensionCheck: true,
      analyticsLocations: r
    });
    if (null != i && i(t)) return
  }
  let Y = () => {
      (k && p.A.trackAnnouncementMessageLinkClicked({
        messageId: U,
        channelId: L,
        guildId: j,
        sourceChannelId: G,
        sourceGuildId: V
      }), null != w) ? w(): (0, s.A)(M)
    },
    W = null != R ? R : () => {};
  if (null !== c.A.isBlockedDomain(M)) {
    null == t || t.preventDefault(), l.A.show(M);
    return
  }
  if (null != (0, g.m)(M)) {
    null == t || t.preventDefault(), m.A.show(M);
    return
  }
  if ((0, f.Y)(M)) {
    null == t || t.preventDefault(), d.A.show(M);
    return
  }
  let K = "function" == typeof I ? I() : I,
    z = (0, O.J)(M),
    q = "http:" !== z && "https:" !== z;
  if (!q && (K || b.A.isTrustedDomain(M)) || q && b.A.isTrustedProtocol(M)) return void(null == t || null != P && P ? Y() : k && p.A.trackAnnouncementMessageLinkClicked({
    messageId: U,
    channelId: L,
    guildId: j,
    sourceChannelId: G,
    sourceGuildId: V
  }));
  if (null != t && t.preventDefault(), q) h.A.show({
    url: M,
    trustUrl: o.u,
    onConfirm: Y,
    onCancel: W,
    isProtocol: true,
    contextKey: A
  });
  else {
    let e = (0, _.W1)(M),
      t = null != e ? e.displayTarget : M;
    h.A.show({
      url: t,
      trustUrl: o.b,
      onConfirm: Y,
      onCancel: W,
      isProtocol: false,
      contextKey: A
    })
  }
}