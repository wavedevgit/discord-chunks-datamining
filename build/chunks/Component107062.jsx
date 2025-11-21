/** Chunk was on web.js **/
/** chunk id: 107062, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => L
}), require("./804061.js"), require("./704826.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk456100 = require("./456100.js"),
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
let P = (e, t) => R.intl.formatToPlainString(R.t.tAwI1k, {
    username: t.username,
    activity: e.extra.activity_name
  }),
  D = (e, t, n) => {
    let r = R.t["bES+y2"],
      i = b.ZP.getName(t.guild_id, t.id, n),
      a = e.extra.activity_name;
    return R.intl.formatToMarkdownString(r, {
      gameName: a,
      userName: i
    }).replaceAll("*", "")
  },
  w = e => {
    let {
      entry: t,
      channel: n,
      users: r,
      countOthers: i
    } = e, a = R.t["7j/5mg"];
    return R.intl.formatToMarkdownString(a, {
      gameName: t.extra.activity_name,
      user1: b.ZP.getName(null == n ? true : n.guild_id, null == n ? true : n.id, r[0]),
      user2: b.ZP.getName(null == n ? true : n.guild_id, null == n ? true : n.id, r[1]),
      countOthers: i
    }).replaceAll("*", "")
  },
  L = e => {
    let {
      channel: t,
      entry: n,
      onReaction: b,
      onVoiceChannelPreview: L,
      disableActivityProfileLinks: x
    } = e, {
      largeImage: M
    } = (0, y.rv)({
      entry: n,
      showCoverImage: false
    }), {
      user: k,
      details: j,
      activity: U,
      embeddedActivity: G
    } = (0, C.n)(n), {
      primaryColor: B,
      secondaryColor: Z
    } = (0, T.Z)(null == M ? true : M.src), F = (0, a.e7)([g.default], () => g.default.locale), {
      displayParticipants: V,
      participant1: H,
      participant2: Y,
      numOtherParticipants: W
    } = (0, O.Z)(n, 3), K = () => {
      _._(p._b.TEXT, m.Ie.NORMAL, {
        applicationId: n.extra.application_id
      })
    }, z = i.useCallback(e => {
      if ((null == M ? true : M.src) == null || null == t || null == k) return;
      let r = W > 0 ? w({
        entry: n,
        channel: t,
        users: [H, Y],
        countOthers: W
      }) : D(n, t, k);
      return (0, I.C4)({
        entry: n,
        applicationImageSrc: null == M ? true : M.src,
        avatarSrcs: V.map(e => e.getAvatarURL(t.guild_id, 128)),
        description: r,
        timestamp: (0, v.yh)(n, F),
        colors: [B, Z],
        channelId: e
      })
    }, [null == M ? true : M.src, t, V, n, F, W, H, Y, B, Z, k]), {
      data: q
    } = (0, h.IX)(n.extra.application_id), X = (0, u.Z)({
      application: q,
      analyticsLocations: [f.Z.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT]
    }), {
      enabled: Q
    } = s.c.useExperiment({
      location: "MemberListAcitivtyContentPopout"
    }, {
      autoTrackExposure: true
    });
    if (null == k) return null;
    let J = (0, r.jsx)(S.PZ, {
        location: S.Gt.POPOUT,
        entry: n
      }),
      $ = (0, r.jsx)(A.wG, {
        channel: t,
        userDescription: (0, v.kr)(n) ? R.t.vPg1JT : R.t.rPqqts,
        title: n.extra.activity_name,
        subtitle: j,
        badges: J,
        entry: n,
        showCoverImage: false,
        onClickTitle: x ? true : K,
        onClickSubtitle: x ? true : K,
        onClickThumbnail: x ? true : K
      }),
      ee = (0, l.Z)(U, N.xjy.JOIN) || (0, c.Z)(U),
      et = ee ? (0, r.jsx)(d.Z, {
        embeddedActivity: G,
        activity: U,
        user: k,
        variant: "primary",
        size: "md",
        icon: o.YVR
      }) : null,
      en = null == X ? null : (0, r.jsx)(o.Button, {
        variant: "primary",
        size: "md",
        fullWidth: true,
        onClick: X,
        text: R.intl.string(R.t["jaYS/h"]),
        icon: o.v3n
      }),
      er = Q ? o.iWm : o.jje,
      ei = null != en || x ? null : (0, r.jsx)(o.Button, {
        variant: "primary",
        size: "md",
        fullWidth: true,
        onClick: K,
        text: R.intl.string(R.t.GDWYR8),
        icon: er
      }),
      ea = [en, ee && !x ? et : ei].filter(E.lm);
    return (0, r.jsxs)(A.yR, {
      children: [$, (0, r.jsx)(A.St, {
        children: (0, r.jsx)(A.WT, {
          onReaction: b,
          onVoiceChannelPreview: L,
          user: k,
          channel: t,
          generateReactionImage: z,
          reactionImageAltText: P(n, k),
          entry: n,
          buttons: ea
        })
      })]
    })
  }