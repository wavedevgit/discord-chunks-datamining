/** Chunk was on web.js **/
/** chunk id: 107062, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => P
}), require("./804061.js"), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk456100 = require("./456100.js"),
  Chunk620662 = require("./620662.js"),
  Chunk841784 = require("./841784.js"),
  Chunk429589 = require("./429589.jsx"),
  Chunk499254 = require("./499254.js"),
  Chunk827498 = require("./827498.js"),
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
let C = (e, t) => A.intl.formatToPlainString(A.t.tAwI1t, {
    username: t.username,
    activity: e.extra.activity_name
  }),
  N = (e, t, n) => {
    let r = A.t["bES+y8"],
      i = m.ZP.getName(t.guild_id, t.id, n),
      a = e.extra.activity_name;
    return A.intl.formatToMarkdownString(r, {
      gameName: a,
      userName: i
    }).replaceAll("*", "")
  },
  R = e => {
    let {
      entry: t,
      channel: n,
      users: r,
      countOthers: i
    } = e, a = A.t["7j/5mp"];
    return A.intl.formatToMarkdownString(a, {
      gameName: t.extra.activity_name,
      user1: m.ZP.getName(null == n ? true : n.guild_id, null == n ? true : n.id, r[0]),
      user2: m.ZP.getName(null == n ? true : n.guild_id, null == n ? true : n.id, r[1]),
      countOthers: i
    }).replaceAll("*", "")
  },
  P = e => {
    let {
      channel: t,
      entry: n,
      onReaction: m,
      onVoiceChannelPreview: P,
      disableActivityProfileLinks: w
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
    } = (0, T.n)(n), {
      primaryColor: k,
      secondaryColor: U
    } = (0, O.Z)(null == D ? true : D.src), G = (0, a.e7)([p.default], () => p.default.locale), {
      displayParticipants: B,
      participant1: Z,
      participant2: V,
      numOtherParticipants: F
    } = (0, E.Z)(n, 3), H = () => {
      d.__(f._b.TEXT, _.Ie.NORMAL, {
        applicationId: n.extra.application_id
      })
    }, Y = i.useCallback(e => {
      if ((null == D ? true : D.src) == null || null == t || null == x) return;
      let r = F > 0 ? R({
        entry: n,
        channel: t,
        users: [Z, V],
        countOthers: F
      }) : N(n, t, x);
      return (0, y.C4)({
        entry: n,
        applicationImageSrc: null == D ? true : D.src,
        avatarSrcs: B.map(e => e.getAvatarURL(t.guild_id, 128)),
        description: r,
        timestamp: (0, b.yh)(n, G),
        colors: [k, U],
        channelId: e
      })
    }, [null == D ? true : D.src, t, B, n, G, F, Z, V, k, U, x]), {
      enabled: W
    } = s.c.useExperiment({
      location: "MemberListAcitivtyContentPopout"
    }, {
      autoTrackExposure: true
    });
    if (null == x) return null;
    let K = (0, r.jsx)(v.PZ, {
        location: v.Gt.POPOUT,
        entry: n
      }),
      z = (0, r.jsx)(I.wG, {
        channel: t,
        userDescription: (0, b.kr)(n) ? A.t.vPg1JS : A.t.rPqqtr,
        title: n.extra.activity_name,
        subtitle: L,
        badges: K,
        entry: n,
        showCoverImage: false,
        onClickTitle: w ? true : H,
        onClickSubtitle: w ? true : H,
        onClickThumbnail: w ? true : H
      }),
      q = (0, l.Z)(j, S.xjy.JOIN) || (0, c.Z)(j),
      X = q ? (0, r.jsx)(u.Z, {
        embeddedActivity: M,
        activity: j,
        user: x,
        variant: "primary",
        size: "md",
        icon: o.YVR
      }) : null,
      Q = W ? o.iWm : o.jje,
      J = w ? null : (0, r.jsx)(o.zxk, {
        variant: "primary",
        size: "md",
        fullWidth: true,
        onClick: H,
        text: A.intl.string(A.t.GDWYR0),
        icon: Q
      }),
      $ = [q && !w ? X : J].filter(h.lm);
    return (0, r.jsxs)(I.yR, {
      children: [z, (0, r.jsx)(I.St, {
        children: (0, r.jsx)(I.WT, {
          onReaction: m,
          onVoiceChannelPreview: P,
          user: x,
          channel: t,
          generateReactionImage: Y,
          reactionImageAltText: C(n, x),
          entry: n,
          buttons: $
        })
      })]
    })
  }