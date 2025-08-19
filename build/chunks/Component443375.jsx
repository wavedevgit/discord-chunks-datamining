/** Chunk was on web.js **/
/** chunk id: 443375, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Q
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk394821 = require("./394821.js"),
  Chunk841784 = require("./841784.js"),
  Chunk833664 = require("./833664.js"),
  Chunk420660 = require("./420660.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk379357 = require("./379357.js"),
  Chunk264832 = require("./264832.jsx"),
  Chunk358696 = require("./358696.jsx"),
  Chunk649700 = require("./649700.js"),
  Chunk313201 = require("./313201.js"),
  Chunk833858 = require("./833858.js"),
  Chunk223135 = require("./223135.jsx"),
  Chunk769654 = require("./769654.js"),
  Chunk750154 = require("./750154.js"),
  Chunk960870 = require("./960870.js"),
  Chunk139793 = require("./139793.js"),
  Chunk994746 = require("./994746.js"),
  Chunk273284 = require("./273284.js"),
  Chunk232174 = require("./232174.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk287954 = require("./287954.jsx"),
  Chunk660579 = require("./660579.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk64621 = require("./64621.jsx"),
  Chunk979038 = require("./979038.jsx"),
  Chunk448980 = require("./448980.jsx"),
  Chunk576759 = require("./576759.jsx"),
  Chunk336383 = require("./336383.jsx"),
  Chunk194811 = require("./194811.jsx"),
  Chunk373826 = require("./373826.jsx"),
  Chunk668700 = require("./668700.jsx"),
  Chunk262210 = require("./262210.jsx"),
  Chunk386019 = require("./386019.jsx"),
  Chunk881530 = require("./881530.js"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk704543 = require("./704543.js");

function q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      q(e, t, n[t])
    })
  }
  return e
}

function Q(e) {
  var t;
  let {
    user: n,
    currentUser: a,
    activity: q,
    application: Q,
    voiceGuild: J,
    voiceChannel: $,
    profileGuildId: ee,
    className: et,
    onClose: en
  } = e, er = (0, E.Dt)(), ei = (0, E.Dt)(), ea = i.useRef(null), {
    analyticsLocations: eo
  } = (0, _.ZP)(f.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), {
    themeType: es
  } = (0, w.z)(), {
    interactionSource: el,
    interactionSourceId: ec
  } = (0, C.Xo)(), eu = (0, g.Z)({
    activity: q,
    user: n
  }), ed = (0, I.Z)({
    display: "live",
    user: n,
    activity: q,
    entry: eu,
    analyticsLocations: eo
  }), ef = (0, T.Z)({
    userId: n.id,
    onAction: ed
  }), e_ = (0, S.Z)(q), ep = null != e_.text && "" !== e_.text, {
    largeImage: eh,
    smallImage: em
  } = (0, p.FO)(q, Q), eg = (0, F.Z)({
    location: "UserProfileActivityCardWithInteractionToolbar",
    user: n,
    currentUser: a,
    activity: q,
    application: Q,
    entry: eu,
    onClose: en
  }), eE = () => {
    let e = (0, l.Z)(q) ? "crunchyroll" : "default",
      t = es === W.l.MODAL_V2 ? m.J.SIZE_100 : m.J.SIZE_60;
    return q.type === H.IIU.HANG_STATUS ? (0, r.jsx)(y.Z, {
      hangStatusActivity: q,
      className: o()(z.hangStatusIcon, z.image, {
        [z.small]: es !== W.l.MODAL_V2
      })
    }) : null == eg ? (0, r.jsx)(m.E, {
      image: eh,
      smallImage: em,
      size: t,
      aspectRatio: e,
      className: z.image
    }) : (0, r.jsx)(m.E, {
      image: eh,
      smallImage: em,
      size: t,
      className: z.clickableImage,
      aspectRatio: e,
      onClick: e => {
        e.stopPropagation(), ed({
          action: "PRESS_IMAGE"
        }), eg(e)
      }
    })
  }, eb = () => q.type === H.IIU.HANG_STATUS ? (0, r.jsx)(U.f, {
    variant: "heading-sm/semibold",
    text: (0, b.O8)(q),
    id: er
  }) : (0, d.Z)(q) && null != $ ? (0, r.jsxs)("div", {
    className: z.voiceChannelText,
    children: [(0, r.jsx)(s.gj8, {
      size: "xxs",
      color: s.TVs.colors.TEXT_DEFAULT,
      className: z.voiceIcon
    }), (0, r.jsx)(U.f, {
      variant: "heading-sm/semibold",
      text: $.name,
      id: er
    })]
  }) : (0, u.Z)(q) || (0, v.dS)(q) ? (0, r.jsx)(U.f, {
    variant: "heading-sm/semibold",
    text: q.name,
    id: er
  }) : null != q.details ? (0, r.jsx)(h._, {
    href: q.details_url,
    children: (0, r.jsx)(U.f, {
      variant: "heading-sm/semibold",
      text: q.details,
      id: er
    })
  }) : (0, r.jsx)(U.f, {
    variant: "heading-sm/semibold",
    text: q.name,
    id: er
  }), ey = () => {
    if (q.type === H.IIU.HANG_STATUS) return null;
    if ((0, d.Z)(q) && null != J) return (0, r.jsx)(U.Z, {
      variant: "text-xs/normal",
      text: K.intl.formatToPlainString(K.t["hq/Qzc"], {
        guildName: J.name
      }),
      onClick: () => {
        (0, O.X)(J.id), ed({
          action: "OPEN_VOICE_GUILD"
        }), null == en || en()
      }
    });
    if ((0, u.Z)(q)) return (0, r.jsx)(h._, {
      href: q.details_url,
      children: (0, r.jsx)(U.Z, {
        variant: "text-xs/normal",
        text: q.details
      })
    });
    if ((0, v.dS)(q)) {
      var e;
      return (0, r.jsx)(U.Z, {
        variant: "text-xs/normal",
        text: null == q || null == (e = q.assets) ? true : e.small_text
      })
    }
    return (0, r.jsx)(h._, {
      href: q.state_url,
      children: (0, r.jsx)(U.Z, {
        variant: "text-xs/normal",
        text: q.state
      })
    })
  }, eO = () => {
    var e, t, n, i, a, o, s, l;
    if (q.type === H.IIU.WATCHING) return null;
    if ((0, u.Z)(q)) return ev();
    if ((0, v.dS)(q) && (null == (e = q.party) ? true : e.size) != null && (null == (t = q.party) ? true : t.size.length) >= 2) {
      let e = K.intl.formatToPlainString(K.t["JC/3x8"], {
        numSpeakers: null == (i = q.party) ? true : i.size[0],
        numListeners: (null == (a = q.party) ? true : a.size[1]) - (null == (o = q.party) ? true : o.size[0])
      });
      return (0, r.jsx)(U.Z, {
        variant: "text-xs/normal",
        text: e
      })
    }
    return (null == (n = q.assets) ? true : n.large_text) != null ? (0, r.jsx)(h._, {
      href: null == (s = q.assets) ? true : s.large_url,
      children: (0, r.jsx)(U.Z, {
        text: null == (l = q.assets) ? true : l.large_text,
        variant: "text-xs/normal"
      })
    }) : null
  }, ev = () => {
    var e, t, n, i;
    return (null == (e = q.party) ? true : e.size) == null && q.application_id === Y.Zc ? (0, r.jsxs)("div", {
      className: z.gameState,
      children: [(0, r.jsx)(h._, {
        href: q.state_url,
        children: (0, r.jsx)(U.Z, {
          variant: "text-xs/normal",
          text: q.state
        })
      }), (0, r.jsx)(U.Z, {
        variant: "text-xs/normal",
        text: K.intl.formatToPlainString(K.t["u//9Bw"], {
          count: "0",
          max: null != (i = null == Q ? true : Q.getMaxParticipants()) ? i : 0
        })
      })]
    }) : (0, c.Z)(q) && (null == (t = q.party) ? true : t.size) != null && (null == (n = q.party) ? true : n.size.length) >= 2 ? (0, r.jsxs)("div", {
      className: z.gameState,
      children: [(0, r.jsx)(h._, {
        href: q.state_url,
        children: (0, r.jsx)(U.Z, {
          variant: "text-xs/normal",
          text: q.state
        })
      }), (0, r.jsx)(U.Z, {
        variant: "text-xs/normal",
        text: 0 === q.party.size[1] ? K.intl.formatToPlainString(K.t.IM4J4e, {
          count: q.party.size[0]
        }) : K.intl.formatToPlainString(K.t["u//9Bw"], {
          count: q.party.size[0],
          max: q.party.size[1]
        })
      })]
    }) : null == q.party ? (0, r.jsx)(h._, {
      href: q.state_url,
      children: (0, r.jsx)(U.Z, {
        variant: "text-xs/normal",
        text: q.state
      })
    }) : null
  }, eI = () => {
    if (!(0, N.Z)(q)) return null;
    let {
      start: e,
      end: t
    } = q.timestamps;
    return (0, r.jsx)(B.Z, {
      start: e,
      end: t
    })
  }, eT = () => null == eg ? (0, r.jsxs)("div", {
    children: [eb(), ey(), eO()]
  }) : (0, r.jsxs)(s.P3F, {
    className: z.clickableText,
    onClick: e => {
      e.stopPropagation(), ed({
        action: "PRESS_TEXT"
      }), eg(e)
    },
    children: [eb(), ey(), eO()]
  }), eS = () => null == J || null == $ ? null : (0, r.jsx)(G.Z, {
    user: n,
    guild: J,
    channel: $,
    onAction: ed,
    onClose: en
  }), eA = () => n.id === a.id ? null : (0, r.jsx)("div", {
    className: z.actions,
    children: (0, r.jsx)(L.Z, {
      activity: q,
      user: n,
      onAction: ed,
      onClose: en,
      application: Q
    })
  });
  if (null === es) return null;
  let eN = null != (t = q.application_id) ? t : q.name,
    eC = el === Z.n_.ACTIVITY && ec === eN;
  return (0, r.jsx)(_.Gt, {
    value: eo,
    children: (0, r.jsx)(D.Z, {
      targetElementRef: ea,
      sourceType: Z.n_.ACTIVITY,
      user: n,
      children: (0, r.jsx)(R.Z, {
        user: n,
        guildId: ee,
        themeType: es,
        sourceId: eN,
        sourceDetails: null == eu ? (0, A.Z)(q) : null,
        entry: eu,
        onAction: ed,
        sourceType: Z.n_.ACTIVITY,
        children: () => (0, r.jsx)(P.Z, {
          ref: ea,
          user: n,
          className: z.toolbarContainer,
          interactionSourceId: eN,
          sourceType: Z.n_.ACTIVITY,
          onAction: ed,
          renderMoreButtonPopout: e => (0, r.jsx)(V.Z, {
            display: "live",
            user: n,
            activity: q,
            entry: eu,
            onClose: en,
            children: e
          }),
          onShowToolbar: () => ed({
            action: "HOVER_ACTIVITY_CARD"
          }),
          children: (0, r.jsxs)(k.Z, {
            ref: ef,
            className: o()(et, {
              [z.hoisted]: eC
            }),
            onAction: ed,
            onClose: en,
            "aria-labelledby": ep ? "".concat(ei, " ").concat(er) : er,
            children: [(0, r.jsx)(j.Z, X({
              textId: ei
            }, e_)), (0, r.jsxs)("div", {
              className: z.body,
              children: [(0, r.jsxs)("div", {
                className: z.content,
                children: [!n.bot && eE(), (0, r.jsxs)("div", {
                  className: z.details,
                  children: [eT(), !n.bot && (0, r.jsx)(x.Z, {
                    user: n,
                    activity: q,
                    className: z.badges
                  }), eI(), es === W.l.MODAL_V2 && eA()]
                }), es === W.l.MODAL && eA()]
              }), eS()]
            }), es !== W.l.MODAL && es !== W.l.MODAL_V2 && eA(), (0, r.jsx)(M.Z, {
              applicationId: null == Q ? true : Q.id,
              onAction: ed,
              onClose: en
            })]
          })
        })
      })
    })
  })
}