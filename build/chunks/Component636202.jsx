/** Chunk was on web.js **/
/** chunk id: 636202, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => G,
  n: () => U
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk808380 = require("./808380.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk833349 = require("./833349.js"),
  Chunk765379 = require("./765379.js"),
  Chunk960076 = require("./960076.js"),
  Chunk359549 = require("./359549.js"),
  Chunk566021 = require("./566021.jsx"),
  Chunk284525 = require("./284525.jsx"),
  Chunk648246 = require("./648246.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk627363 = require("./627363.js"),
  Chunk308335 = require("./308335.js"),
  Chunk773669 = require("./773669.js"),
  Chunk790381 = require("./790381.jsx"),
  Chunk266080 = require("./266080.jsx"),
  Chunk403362 = require("./403362.js"),
  Chunk939341 = require("./939341.js"),
  Chunk576757 = require("./576757.js"),
  Chunk202195 = require("./202195.js"),
  Chunk583846 = require("./583846.js"),
  Chunk821988 = require("./821988.js"),
  Chunk329575 = require("./329575.js"),
  Chunk434200 = require("./434200.js"),
  Chunk176563 = require("./176563.js"),
  Chunk322789 = require("./322789.jsx"),
  Chunk506326 = require("./506326.jsx"),
  Chunk910692 = require("./910692.jsx"),
  Chunk18282 = require("./18282.jsx"),
  Chunk299846 = require("./299846.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let k = [...Chunk322789.n, Chunk506326.Yq],
  U = {
    [Chunk808380.Y.DESKTOP]: null,
    [Chunk808380.Y.LINUX]: null,
    [Chunk808380.Y.MACOS]: null,
    [Chunk808380.Y.NINTENDO]: null,
    [Chunk808380.Y.IOS]: null,
    [Chunk808380.Y.ANDROID]: null,
    [Chunk808380.Y.XBOX]: Chunk266080.A,
    [Chunk808380.Y.PLAYSTATION]: Chunk790381.A
  },
  G = e => {
    var t, n;
    let {
      channel: y,
      entry: b,
      disableGameProfileLinks: R,
      onReaction: G,
      onVoiceChannelPreview: V,
      onUserPopoutClosed: F,
      trackRankingItemInteraction: B
    } = e, {
      largeImage: H
    } = (0, v.nO)({
      entry: b
    }), {
      user: Y,
      details: W,
      appName: K,
      activity: z,
      embeddedActivity: q
    } = (0, L.u)(b), {
      primaryColor: Z,
      secondaryColor: X
    } = (0, w.A)(null == H ? true : H.src), Q = (0, s.bG)([E.default], () => E.default.locale), {
      streamPreviewUrl: J,
      stream: $
    } = (0, I.A)(b), {
      displayParticipants: ee,
      participant1: et,
      participant2: en,
      numOtherParticipants: er
    } = (0, A.A)(b, 3), ei = b.extra.platform, ea = null != ei ? U[ei] : null, es = ei === a.Y.XBOX ? j.fg2.XBOX : ei === a.Y.PLAYSTATION ? j.fg2.PLAYSTATION : true, eo = (0, N.A)(es), {
      data: el
    } = (0, m.YY)(b.extra.application_id), ec = (0, d.J)(el), eu = (0, g.o)(null != (t = null != (n = null == z ? true : z.application_id) ? n : null == q ? true : q.applicationId) ? t : null == el ? true : el.id), ed = i.useCallback(e => {
      if ((null == H ? true : H.src) == null || null == y || null == Y) return;
      let t = er > 0 ? (0, C.v$)({
        entry: b,
        channel: y,
        users: [et, en],
        countOthers: er
      }) : (0, C.op)(b, y, Y);
      return (0, T.p6)({
        entry: b,
        applicationImageSrc: null == H ? true : H.src,
        avatarSrcs: ee.map(e => e.getAvatarURL(y.guild_id, 128)),
        description: t,
        timestamp: (0, S.As)(b, Q),
        colors: [Z, X],
        channelId: e
      })
    }, [null == H ? true : H.src, y, ee, b, Q, er, et, en, Z, X, Y]);
    if (null == Y) return null;
    let ef = (0, r.jsx)(P.mG, {
        location: null == J ? P.N5.POPOUT : P.N5.STREAMING_POPOUT,
        children: k.map((e, t) => (0, r.jsx)(e, {
          entry: b
        }, t))
      }),
      ep = null == $ ? (0, r.jsx)(D.BC, {
        channel: y,
        headerIcons: null == ea ? null : (0, r.jsx)(x.A, {
          onClick: eo,
          Icon: ea,
          "aria-label": M.intl.string(M.t.YR4cHH)
        }),
        userDescription: (0, S.JM)(b) ? M.t.vPg1JT : M.t.rPqqts,
        title: K,
        subtitle: W,
        badges: ef,
        entry: b,
        disableGameProfileLinks: R,
        onUserPopoutClosed: F,
        trackRankingItemInteraction: B
      }) : (0, r.jsx)(D.Fl, {
        channel: y,
        title: b.extra.game_name,
        subtitle: W,
        badges: ef,
        userDescription: M.t["6oWFUN"],
        entry: b,
        stream: $,
        onUserPopoutClosed: F,
        trackRankingItemInteraction: B
      }),
      e_ = !eu && ec ? (0, r.jsx)(f.A, {
        application: el,
        analyticsLocation: h.A.MEMBER_LIST_GAMING_CONTENT_POPOUT
      }, "cloud-play") : null,
      eh = [null == e_ && ((0, l.A)(z, j.jUm.JOIN) || (0, c.A)(z)) ? (0, r.jsx)(p.A, {
        activity: z,
        user: Y,
        variant: "primary",
        size: "md",
        icon: o._xR
      }, "join") : null, (0, u.A)(z) ? (0, r.jsx)(_.A, {
        activity: z,
        size: "md",
        variant: "primary",
        icon: o.bMW
      }, "watch") : null, e_].filter(O.Vq);
    return (0, r.jsxs)(D.YN, {
      children: [ep, (0, r.jsx)(D.Eh, {
        children: (0, r.jsx)(D.fD, {
          onReaction: G,
          onVoiceChannelPreview: V,
          user: Y,
          channel: y,
          generateReactionImage: ed,
          reactionImageAltText: (0, C.uG)(b, Y),
          entry: b,
          buttons: eh
        })
      })]
    })
  }