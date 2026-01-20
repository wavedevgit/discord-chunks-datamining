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
  Chunk176412 = require("./176412.js"),
  Chunk728345 = require("./728345.js"),
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
let A = (e, t) => C.intl.formatToPlainString(C.t.tAwI1k, {
    username: t.username,
    activity: e.extra.activity_name
  }),
  N = (e, t, n) => {
    let r = C.t["bES+y2"],
      i = m.ZP.getName(t.guild_id, t.id, n),
      a = e.extra.activity_name;
    return C.intl.formatToMarkdownString(r, {
      gameName: a,
      userName: i
    }).replaceAll("*", "")
  },
  P = e => {
    let {
      entry: t,
      channel: n,
      users: r,
      countOthers: i
    } = e, a = C.t["7j/5mg"];
    return C.intl.formatToMarkdownString(a, {
      gameName: t.extra.activity_name,
      user1: m.ZP.getName(null == n ? true : n.guild_id, null == n ? true : n.id, r[0]),
      user2: m.ZP.getName(null == n ? true : n.guild_id, null == n ? true : n.id, r[1]),
      countOthers: i
    }).replaceAll("*", "")
  },
  w = e => {
    let {
      channel: t,
      entry: n,
      onReaction: m,
      onVoiceChannelPreview: w,
      disableActivityProfileLinks: R
    } = e, {
      largeImage: D
    } = (0, g.rv)({
      entry: n,
      showCoverImage: false
    }), {
      user: x,
      details: L,
      activity: j,
      embeddedActivity: M
    } = (0, I.n)(n), {
      primaryColor: k,
      secondaryColor: U
    } = (0, O.Z)(null == D ? true : D.src), G = (0, a.e7)([_.default], () => _.default.locale), {
      displayParticipants: Z,
      participant1: F,
      participant2: B,
      numOtherParticipants: V
    } = (0, E.Z)(n, 3), H = () => {
      (0, f.X)(n.extra.application_id)
    }, Y = i.useCallback(e => {
      if ((null == D ? true : D.src) == null || null == t || null == x) return;
      let r = V > 0 ? P({
        entry: n,
        channel: t,
        users: [F, B],
        countOthers: V
      }) : N(n, t, x);
      return (0, y.C4)({
        entry: n,
        applicationImageSrc: null == D ? true : D.src,
        avatarSrcs: Z.map(e => e.getAvatarURL(t.guild_id, 128)),
        description: r,
        timestamp: (0, b.yh)(n, G),
        colors: [k, U],
        channelId: e
      })
    }, [null == D ? true : D.src, t, Z, n, G, V, F, B, k, U, x]), {
      data: W
    } = (0, p.IX)(n.extra.application_id), K = (0, c.Z)({
      application: W,
      analyticsLocations: [d.Z.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT]
    });
    if (null == x) return null;
    let z = (0, r.jsx)(v.PZ, {
        location: v.Gt.POPOUT,
        entry: n
      }),
      q = (0, r.jsx)(S.wG, {
        channel: t,
        userDescription: (0, b.kr)(n) ? C.t.vPg1JT : C.t.rPqqts,
        title: n.extra.activity_name,
        subtitle: L,
        badges: z,
        entry: n,
        showCoverImage: false,
        onClickTitle: R ? true : H,
        onClickSubtitle: R ? true : H,
        onClickThumbnail: R ? true : H
      }),
      Q = (0, s.Z)(j, T.xjy.JOIN) || (0, l.Z)(j),
      X = Q ? (0, r.jsx)(u.Z, {
        embeddedActivity: M,
        activity: j,
        user: x,
        variant: "primary",
        size: "md",
        icon: o.YVR
      }) : null,
      J = null == K ? null : (0, r.jsx)(o.Button, {
        variant: "primary",
        size: "md",
        fullWidth: true,
        onClick: K,
        text: C.intl.string(C.t["jaYS/h"]),
        icon: o.v3n
      }),
      $ = null != J || R ? null : (0, r.jsx)(o.Button, {
        variant: "primary",
        size: "md",
        fullWidth: true,
        onClick: H,
        text: C.intl.string(C.t.GDWYR8),
        icon: o.jje
      }),
      ee = [J, Q && !R ? X : $].filter(h.lm);
    return (0, r.jsxs)(S.yR, {
      children: [q, (0, r.jsx)(S.St, {
        children: (0, r.jsx)(S.WT, {
          onReaction: m,
          onVoiceChannelPreview: w,
          user: x,
          channel: t,
          generateReactionImage: Y,
          reactionImageAltText: A(n, x),
          entry: n,
          buttons: ee
        })
      })]
    })
  }