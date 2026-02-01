/** Chunk was on web.js **/
/** chunk id: 849258, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => R
}), require("./747238.js"), require("./812715.js"), require("./866193.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk833349 = require("./833349.js"),
  Chunk765379 = require("./765379.js"),
  Chunk359549 = require("./359549.js"),
  Chunk284525 = require("./284525.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk297486 = require("./297486.js"),
  Chunk627363 = require("./627363.js"),
  Chunk773669 = require("./773669.js"),
  Chunk403362 = require("./403362.js"),
  Chunk562153 = require("./562153.js"),
  Chunk939341 = require("./939341.js"),
  Chunk576757 = require("./576757.js"),
  Chunk583846 = require("./583846.js"),
  Chunk398328 = require("./398328.js"),
  Chunk176563 = require("./176563.js"),
  Chunk506326 = require("./506326.jsx"),
  Chunk910692 = require("./910692.jsx"),
  Chunk299846 = require("./299846.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let C = (e, t) => T.intl.formatToPlainString(T.t.tAwI1k, {
    username: t.username,
    activity: e.extra.activity_name
  }),
  N = (e, t, n) => {
    let r = T.t["bES+y2"],
      i = m.Ay.getName(t.guild_id, t.id, n),
      a = e.extra.activity_name;
    return T.intl.formatToMarkdownString(r, {
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
    } = e, a = T.t["7j/5mg"];
    return T.intl.formatToMarkdownString(a, {
      gameName: t.extra.activity_name,
      user1: m.Ay.getName(null == n ? true : n.guild_id, null == n ? true : n.id, r[0]),
      user2: m.Ay.getName(null == n ? true : n.guild_id, null == n ? true : n.id, r[1]),
      countOthers: i
    }).replaceAll("*", "")
  },
  R = e => {
    let {
      channel: t,
      entry: n,
      onReaction: m,
      onVoiceChannelPreview: R,
      disableActivityProfileLinks: P
    } = e, {
      largeImage: D
    } = (0, g.nO)({
      entry: n,
      showCoverImage: false
    }), {
      user: L,
      details: x,
      activity: M,
      embeddedActivity: j
    } = (0, I.u)(n), {
      primaryColor: k,
      secondaryColor: U
    } = (0, O.A)(null == D ? true : D.src), G = (0, a.bG)([_.default], () => _.default.locale), {
      displayParticipants: V,
      participant1: F,
      participant2: B,
      numOtherParticipants: H
    } = (0, E.A)(n, 3), Y = () => {
      (0, f.hg)(n.extra.application_id)
    }, W = i.useCallback(e => {
      if ((null == D ? true : D.src) == null || null == t || null == L) return;
      let r = H > 0 ? w({
        entry: n,
        channel: t,
        users: [F, B],
        countOthers: H
      }) : N(n, t, L);
      return (0, b.Vq)({
        entry: n,
        applicationImageSrc: null == D ? true : D.src,
        avatarSrcs: V.map(e => e.getAvatarURL(t.guild_id, 128)),
        description: r,
        timestamp: (0, y.As)(n, G),
        colors: [k, U],
        channelId: e
      })
    }, [null == D ? true : D.src, t, V, n, G, H, F, B, k, U, L]), {
      data: K
    } = (0, p.YY)(n.extra.application_id), z = (0, c.A)({
      application: K,
      analyticsLocations: [d.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT]
    });
    if (null == L) return null;
    let q = (0, r.jsx)(v.iT, {
        location: v.N5.POPOUT,
        entry: n
      }),
      Z = (0, r.jsx)(A.BC, {
        channel: t,
        userDescription: (0, y.JM)(n) ? T.t.vPg1JT : T.t.rPqqts,
        title: n.extra.activity_name,
        subtitle: x,
        badges: q,
        entry: n,
        showCoverImage: false,
        onClickTitle: P ? true : Y,
        onClickSubtitle: P ? true : Y,
        onClickThumbnail: P ? true : Y
      }),
      Q = (0, s.A)(M, S.jUm.JOIN) || (0, l.A)(M),
      X = Q ? (0, r.jsx)(u.A, {
        embeddedActivity: j,
        activity: M,
        user: L,
        variant: "primary",
        size: "md",
        icon: o.Ihz
      }) : null,
      J = null == z ? null : (0, r.jsx)(o.Button, {
        variant: "primary",
        size: "md",
        fullWidth: true,
        onClick: z,
        text: T.intl.string(T.t["jaYS/h"]),
        icon: o.hpF
      }),
      $ = null != J || P ? null : (0, r.jsx)(o.Button, {
        variant: "primary",
        size: "md",
        fullWidth: true,
        onClick: Y,
        text: T.intl.string(T.t.GDWYR8),
        icon: o.k9F
      }),
      ee = [J, Q && !P ? X : $].filter(h.Vq);
    return (0, r.jsxs)(A.YN, {
      children: [Z, (0, r.jsx)(A.Eh, {
        children: (0, r.jsx)(A.fD, {
          onReaction: m,
          onVoiceChannelPreview: R,
          user: L,
          channel: t,
          generateReactionImage: W,
          reactionImageAltText: C(n, L),
          entry: n,
          buttons: ee
        })
      })]
    })
  }