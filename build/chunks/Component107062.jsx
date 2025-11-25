/** Chunk was on web.js **/
/** chunk id: 107062, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => w
}), require("./804061.js"), require("./704826.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk620662 = require("./620662.js"),
  Chunk841784 = require("./841784.js"),
  Chunk206074 = require("./206074.js"),
  Chunk429589 = require("./429589.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk499254 = require("./499254.js"),
  Chunk827498 = require("./827498.js"),
  Chunk728345 = require("./728345.js"),
  Chunk541716 = require("./541716.js"),
  Chunk706454 = require("./706454.js"),
  Chunk823379 = require("./823379.js"),
  Chunk5192 = require("./5192.js"),
  Chunk379357 = require("./379357.js"),
  Chunk192918 = require("./192918.js"),
  Chunk561308 = require("./561308.js"),
  Chunk907152 = require("./907152.js"),
  Chunk206295 = require("./206295.js"),
  Chunk297781 = require("./297781.jsx"),
  Chunk591853 = require("./591853.jsx"),
  Chunk797342 = require("./797342.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let R = (e, t) => N.intl.formatToPlainString(N.t.tAwI1k, {
    username: t.username,
    activity: e.extra.activity_name
  }),
  P = (e, t, n) => {
    let r = N.t["bES+y2"],
      i = E.ZP.getName(t.guild_id, t.id, n),
      a = e.extra.activity_name;
    return N.intl.formatToMarkdownString(r, {
      gameName: a,
      userName: i
    }).replaceAll("*", "")
  },
  D = e => {
    let {
      entry: t,
      channel: n,
      users: r,
      countOthers: i
    } = e, a = N.t["7j/5mg"];
    return N.intl.formatToMarkdownString(a, {
      gameName: t.extra.activity_name,
      user1: E.ZP.getName(null == n ? true : n.guild_id, null == n ? true : n.id, r[0]),
      user2: E.ZP.getName(null == n ? true : n.guild_id, null == n ? true : n.id, r[1]),
      countOthers: i
    }).replaceAll("*", "")
  },
  w = e => {
    let {
      channel: t,
      entry: n,
      onReaction: E,
      onVoiceChannelPreview: w,
      disableActivityProfileLinks: L
    } = e, {
      largeImage: x
    } = (0, b.rv)({
      entry: n,
      showCoverImage: false
    }), {
      user: M,
      details: k,
      activity: j,
      embeddedActivity: U
    } = (0, A.n)(n), {
      primaryColor: G,
      secondaryColor: B
    } = (0, I.Z)(null == x ? true : x.src), Z = (0, a.e7)([m.default], () => m.default.locale), {
      displayParticipants: F,
      participant1: V,
      participant2: H,
      numOtherParticipants: Y
    } = (0, y.Z)(n, 3), W = () => {
      f._(_._b.TEXT, h.Ie.NORMAL, {
        applicationId: n.extra.application_id
      })
    }, K = i.useCallback(e => {
      if ((null == x ? true : x.src) == null || null == t || null == M) return;
      let r = Y > 0 ? D({
        entry: n,
        channel: t,
        users: [V, H],
        countOthers: Y
      }) : P(n, t, M);
      return (0, v.C4)({
        entry: n,
        applicationImageSrc: null == x ? true : x.src,
        avatarSrcs: F.map(e => e.getAvatarURL(t.guild_id, 128)),
        description: r,
        timestamp: (0, O.yh)(n, Z),
        colors: [G, B],
        channelId: e
      })
    }, [null == x ? true : x.src, t, F, n, Z, Y, V, H, G, B, M]), {
      data: z
    } = (0, p.IX)(n.extra.application_id), q = (0, c.Z)({
      application: z,
      analyticsLocations: [d.Z.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT]
    });
    if (null == M) return null;
    let X = (0, r.jsx)(T.PZ, {
        location: T.Gt.POPOUT,
        entry: n
      }),
      Q = (0, r.jsx)(S.wG, {
        channel: t,
        userDescription: (0, O.kr)(n) ? N.t.vPg1JT : N.t.rPqqts,
        title: n.extra.activity_name,
        subtitle: k,
        badges: X,
        entry: n,
        showCoverImage: false,
        onClickTitle: L ? true : W,
        onClickSubtitle: L ? true : W,
        onClickThumbnail: L ? true : W
      }),
      J = (0, s.Z)(j, C.xjy.JOIN) || (0, l.Z)(j),
      $ = J ? (0, r.jsx)(u.Z, {
        embeddedActivity: U,
        activity: j,
        user: M,
        variant: "primary",
        size: "md",
        icon: o.YVR
      }) : null,
      ee = null == q ? null : (0, r.jsx)(o.Button, {
        variant: "primary",
        size: "md",
        fullWidth: true,
        onClick: q,
        text: N.intl.string(N.t["jaYS/h"]),
        icon: o.v3n
      }),
      et = null != ee || L ? null : (0, r.jsx)(o.Button, {
        variant: "primary",
        size: "md",
        fullWidth: true,
        onClick: W,
        text: N.intl.string(N.t.GDWYR8),
        icon: o.jje
      }),
      en = [ee, J && !L ? $ : et].filter(g.lm);
    return (0, r.jsxs)(S.yR, {
      children: [Q, (0, r.jsx)(S.St, {
        children: (0, r.jsx)(S.WT, {
          onReaction: E,
          onVoiceChannelPreview: w,
          user: M,
          channel: t,
          generateReactionImage: K,
          reactionImageAltText: R(n, M),
          entry: n,
          buttons: en
        })
      })]
    })
  }