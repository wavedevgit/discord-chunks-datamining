/** Chunk was on web.js **/
/** chunk id: 443375, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => q
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk227832 = require("./227832.js");

function K(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      K(e, t, n[t])
    })
  }
  return e
}

function q(e) {
  var t;
  let {
    user: n,
    currentUser: o,
    activity: K,
    application: q,
    voiceGuild: X,
    voiceChannel: Q,
    profileGuildId: J,
    className: $,
    onClose: ee
  } = e, et = (0, E.Dt)(), en = (0, E.Dt)(), er = i.useRef(null), {
    analyticsLocations: ei
  } = (0, _.ZP)(f.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), {
    themeType: eo
  } = (0, w.z)(), {
    interactionSource: ea,
    interactionSourceId: es
  } = (0, C.Xo)(), el = (0, g.Z)({
    activity: K,
    user: n
  }), ec = (0, I.Z)({
    display: "live",
    user: n,
    activity: K,
    entry: el,
    analyticsLocations: ei
  }), eu = (0, T.Z)({
    userId: n.id,
    onAction: ec
  }), ed = (0, S.Z)(K), ef = null != ed.text && "" !== ed.text, {
    largeImage: e_,
    smallImage: ep
  } = (0, p.FO)(K, q), eh = (0, Z.Z)({
    location: "UserProfileActivityCardWithInteractionToolbar",
    user: n,
    currentUser: o,
    activity: K,
    application: q,
    entry: el,
    onClose: ee
  }), em = () => {
    let e = (0, l.Z)(K) ? "crunchyroll" : "default",
      t = eo === F.lY.MODAL_V2 ? m.J.SIZE_100 : m.J.SIZE_60;
    return K.type === V.IIU.HANG_STATUS ? (0, r.jsx)(y.Z, {
      hangStatusActivity: K,
      className: a()(W.hangStatusIcon, W.image, {
        [W.small]: eo !== F.lY.MODAL_V2
      })
    }) : null == eh ? (0, r.jsx)(m.E, {
      image: e_,
      smallImage: ep,
      size: t,
      aspectRatio: e,
      className: W.image
    }) : (0, r.jsx)(m.E, {
      image: e_,
      smallImage: ep,
      size: t,
      className: W.clickableImage,
      aspectRatio: e,
      onClick: e => {
        e.stopPropagation(), ec({
          action: "PRESS_IMAGE"
        }), eh(e)
      }
    })
  }, eg = () => K.type === V.IIU.HANG_STATUS ? (0, r.jsx)(j.f, {
    variant: "heading-sm/semibold",
    text: (0, b.O8)(K),
    id: et
  }) : (0, d.Z)(K) && null != Q ? (0, r.jsxs)("div", {
    className: W.voiceChannelText,
    children: [(0, r.jsx)(s.gj8, {
      size: "xxs",
      color: s.TVs.colors.TEXT_DEFAULT,
      className: W.voiceIcon
    }), (0, r.jsx)(j.f, {
      variant: "heading-sm/semibold",
      text: Q.name,
      id: et
    })]
  }) : (0, u.Z)(K) || (0, v.dS)(K) ? (0, r.jsx)(j.f, {
    variant: "heading-sm/semibold",
    text: K.name,
    id: et
  }) : null != K.details ? (0, r.jsx)(h._, {
    href: K.details_url,
    children: (0, r.jsx)(j.f, {
      variant: "heading-sm/semibold",
      text: K.details,
      id: et
    })
  }) : (0, r.jsx)(j.f, {
    variant: "heading-sm/semibold",
    text: K.name,
    id: et
  }), eE = () => {
    if (K.type === V.IIU.HANG_STATUS) return null;
    if ((0, d.Z)(K) && null != X) return (0, r.jsx)(j.Z, {
      variant: "text-xs/normal",
      text: Y.intl.formatToPlainString(Y.t["hq/Qzc"], {
        guildName: X.name
      }),
      onClick: () => {
        (0, O.X)(X.id), ec({
          action: "OPEN_VOICE_GUILD"
        }), null == ee || ee()
      }
    });
    if ((0, u.Z)(K)) return (0, r.jsx)(h._, {
      href: K.details_url,
      children: (0, r.jsx)(j.Z, {
        variant: "text-xs/normal",
        text: K.details
      })
    });
    if ((0, v.dS)(K)) {
      var e;
      return (0, r.jsx)(j.Z, {
        variant: "text-xs/normal",
        text: null == K || null == (e = K.assets) ? true : e.small_text
      })
    }
    return (0, r.jsx)(h._, {
      href: K.state_url,
      children: (0, r.jsx)(j.Z, {
        variant: "text-xs/normal",
        text: K.state
      })
    })
  }, eb = () => {
    var e, t, n, i, o, a, s, l;
    if (K.type === V.IIU.WATCHING) return null;
    if ((0, u.Z)(K)) return ey();
    if ((0, v.dS)(K) && (null == (e = K.party) ? true : e.size) != null && (null == (t = K.party) ? true : t.size.length) >= 2) {
      let e = Y.intl.formatToPlainString(Y.t["JC/3x8"], {
        numSpeakers: null == (i = K.party) ? true : i.size[0],
        numListeners: (null == (o = K.party) ? true : o.size[1]) - (null == (a = K.party) ? true : a.size[0])
      });
      return (0, r.jsx)(j.Z, {
        variant: "text-xs/normal",
        text: e
      })
    }
    return (null == (n = K.assets) ? true : n.large_text) != null ? (0, r.jsx)(h._, {
      href: null == (s = K.assets) ? true : s.large_url,
      children: (0, r.jsx)(j.Z, {
        text: null == (l = K.assets) ? true : l.large_text,
        variant: "text-xs/normal"
      })
    }) : null
  }, ey = () => {
    var e, t, n, i;
    return (null == (e = K.party) ? true : e.size) == null && K.application_id === H.Zc ? (0, r.jsxs)("div", {
      className: W.gameState,
      children: [(0, r.jsx)(h._, {
        href: K.state_url,
        children: (0, r.jsx)(j.Z, {
          variant: "text-xs/normal",
          text: K.state
        })
      }), (0, r.jsx)(j.Z, {
        variant: "text-xs/normal",
        text: Y.intl.formatToPlainString(Y.t["u//9Bw"], {
          count: "0",
          max: null != (i = null == q ? true : q.getMaxParticipants()) ? i : 0
        })
      })]
    }) : (0, c.Z)(K) && (null == (t = K.party) ? true : t.size) != null && (null == (n = K.party) ? true : n.size.length) >= 2 ? (0, r.jsxs)("div", {
      className: W.gameState,
      children: [(0, r.jsx)(h._, {
        href: K.state_url,
        children: (0, r.jsx)(j.Z, {
          variant: "text-xs/normal",
          text: K.state
        })
      }), (0, r.jsx)(j.Z, {
        variant: "text-xs/normal",
        text: 0 === K.party.size[1] ? Y.intl.formatToPlainString(Y.t.IM4J4e, {
          count: K.party.size[0]
        }) : Y.intl.formatToPlainString(Y.t["u//9Bw"], {
          count: K.party.size[0],
          max: K.party.size[1]
        })
      })]
    }) : null == K.party ? (0, r.jsx)(h._, {
      href: K.state_url,
      children: (0, r.jsx)(j.Z, {
        variant: "text-xs/normal",
        text: K.state
      })
    }) : null
  }, eO = () => {
    if (!(0, N.Z)(K)) return null;
    let {
      start: e,
      end: t
    } = K.timestamps;
    return (0, r.jsx)(G.Z, {
      start: e,
      end: t
    })
  }, ev = () => null == eh ? (0, r.jsxs)("div", {
    children: [eg(), eE(), eb()]
  }) : (0, r.jsxs)(s.P3F, {
    className: W.clickableText,
    onClick: e => {
      e.stopPropagation(), ec({
        action: "PRESS_TEXT"
      }), eh(e)
    },
    children: [eg(), eE(), eb()]
  }), eI = () => null == X || null == Q ? null : (0, r.jsx)(U.Z, {
    user: n,
    guild: X,
    channel: Q,
    onAction: ec,
    onClose: ee
  }), eT = () => n.id === o.id ? null : (0, r.jsx)("div", {
    className: W.actions,
    children: (0, r.jsx)(L.Z, {
      activity: K,
      user: n,
      onAction: ec,
      onClose: ee,
      application: q
    })
  });
  if (null === eo) return null;
  let eS = null != (t = K.application_id) ? t : K.name,
    eA = ea === F.n_.ACTIVITY && es === eS;
  return (0, r.jsx)(_.Gt, {
    value: ei,
    children: (0, r.jsx)(D.Z, {
      targetElementRef: er,
      sourceType: F.n_.ACTIVITY,
      user: n,
      children: (0, r.jsx)(R.Z, {
        user: n,
        guildId: J,
        themeType: eo,
        sourceId: eS,
        sourceDetails: null == el ? (0, A.Z)(K) : null,
        entry: el,
        onAction: ec,
        sourceType: F.n_.ACTIVITY,
        children: () => (0, r.jsx)(P.Z, {
          ref: er,
          user: n,
          className: W.toolbarContainer,
          interactionSourceId: eS,
          sourceType: F.n_.ACTIVITY,
          onAction: ec,
          renderMoreButtonPopout: e => (0, r.jsx)(B.Z, {
            display: "live",
            user: n,
            activity: K,
            entry: el,
            onClose: ee,
            children: e
          }),
          onShowToolbar: () => ec({
            action: "HOVER_ACTIVITY_CARD"
          }),
          children: (0, r.jsxs)(M.Z, {
            ref: eu,
            className: a()($, {
              [W.hoisted]: eA
            }),
            onAction: ec,
            onClose: ee,
            "aria-labelledby": ef ? "".concat(en, " ").concat(et) : et,
            children: [(0, r.jsx)(k.Z, z({
              textId: en
            }, ed)), (0, r.jsxs)("div", {
              className: W.body,
              children: [(0, r.jsxs)("div", {
                className: W.content,
                children: [!n.bot && em(), (0, r.jsxs)("div", {
                  className: W.details,
                  children: [ev(), !n.bot && (0, r.jsx)(x.Z, {
                    user: n,
                    activity: K,
                    className: W.badges
                  }), eO(), eo === F.lY.MODAL_V2 && eT()]
                }), eo === F.lY.MODAL && eT()]
              }), eI()]
            }), eo !== F.lY.MODAL && eo !== F.lY.MODAL_V2 && eT()]
          })
        })
      })
    })
  })
}