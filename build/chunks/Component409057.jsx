/** Chunk was on web.js **/
/** chunk id: 409057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => W
});
var Chunk951288 = require("./951288.js"),
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
  Chunk232174 = require("./232174.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk979038 = require("./979038.jsx"),
  Chunk448980 = require("./448980.jsx"),
  Chunk576759 = require("./576759.jsx"),
  Chunk336383 = require("./336383.jsx"),
  Chunk194811 = require("./194811.jsx"),
  Chunk373826 = require("./373826.jsx"),
  Chunk668700 = require("./668700.jsx"),
  Chunk262210 = require("./262210.jsx"),
  Chunk670451 = require("./670451.jsx"),
  Chunk881530 = require("./881530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk704543 = require("./704543.js");

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      F(e, t, n[t])
    })
  }
  return e
}

function H(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : H(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function W(e) {
  let {
    user: t,
    currentUser: n,
    activity: i,
    application: F,
    voiceGuild: H,
    voiceChannel: W,
    className: K,
    onClose: z,
    appContext: q
  } = e, X = (0, g.Dt)(), Q = (0, g.Dt)(), {
    analyticsLocations: J
  } = (0, f.ZP)(d.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), {
    themeType: $
  } = (0, A.z)(), ee = (0, m.Z)({
    activity: i,
    user: t
  }), et = (0, v.Z)({
    display: "live",
    user: t,
    activity: i,
    entry: ee,
    analyticsLocations: J
  }), en = (0, I.Z)({
    userId: t.id,
    onAction: et
  }), er = (0, T.Z)(i), ei = null != er.text && "" !== er.text, {
    largeImage: eo,
    smallImage: ea
  } = (0, _.FO)(i, F), es = (0, k.Z)({
    location: "UserProfileActivityCard",
    user: t,
    currentUser: n,
    activity: i,
    application: F,
    entry: ee,
    onClose: z
  }), el = () => {
    let e = (0, s.Z)(i) ? "crunchyroll" : "default",
      t = $ === G.l.MODAL_V2 ? h.J.SIZE_100 : h.J.SIZE_60;
    return i.type === M.IIU.HANG_STATUS ? (0, r.jsx)(b.Z, {
      hangStatusActivity: i,
      className: o()(Z.hangStatusIcon, Z.image, {
        [Z.small]: $ !== G.l.MODAL_V2
      })
    }) : null == es ? (0, r.jsx)(h.E, {
      image: eo,
      smallImage: ea,
      size: t,
      aspectRatio: e,
      className: Z.image
    }) : (0, r.jsx)(h.E, {
      image: eo,
      smallImage: ea,
      size: t,
      className: Z.clickableImage,
      aspectRatio: e,
      onClick: e => {
        et({
          action: "PRESS_IMAGE"
        }), es(e)
      }
    })
  }, ec = () => i.type === M.IIU.HANG_STATUS ? (0, r.jsx)(D.f, {
    variant: "heading-sm/semibold",
    text: (0, E.O8)(i),
    id: X
  }) : (0, u.Z)(i) && null != W ? (0, r.jsxs)("div", {
    className: Z.voiceChannelText,
    children: [(0, r.jsx)(a.gj8, {
      size: "xxs",
      color: a.TVs.colors.TEXT_DEFAULT,
      className: Z.voiceIcon
    }), (0, r.jsx)(D.f, {
      variant: "heading-sm/semibold",
      text: W.name,
      id: X
    })]
  }) : (0, c.Z)(i) || (0, O.dS)(i) ? (0, r.jsx)(D.f, {
    variant: "heading-sm/semibold",
    text: i.name,
    id: X
  }) : null != i.details ? (0, r.jsx)(p._, {
    href: i.details_url,
    children: (0, r.jsx)(D.f, {
      variant: "heading-sm/semibold",
      text: i.details,
      id: X
    })
  }) : (0, r.jsx)(D.f, {
    variant: "heading-sm/semibold",
    text: i.name,
    id: X
  }), eu = () => {
    if (i.type === M.IIU.HANG_STATUS) return null;
    if ((0, u.Z)(i) && null != H) return (0, r.jsx)(D.Z, {
      variant: "text-xs/normal",
      text: B.intl.formatToPlainString(B.t["hq/Qzc"], {
        guildName: H.name
      }),
      onClick: () => {
        (0, y.X)(H.id), et({
          action: "OPEN_VOICE_GUILD"
        }), null == z || z()
      }
    });
    if ((0, c.Z)(i)) return (0, r.jsx)(p._, {
      href: i.details_url,
      children: (0, r.jsx)(D.Z, {
        variant: "text-xs/normal",
        text: i.details
      })
    });
    if ((0, O.dS)(i)) {
      var e;
      return (0, r.jsx)(D.Z, {
        variant: "text-xs/normal",
        text: null == i || null == (e = i.assets) ? true : e.small_text
      })
    }
    return (0, r.jsx)(p._, {
      href: i.state_url,
      children: (0, r.jsx)(D.Z, {
        variant: "text-xs/normal",
        text: i.state
      })
    })
  }, ed = () => {
    var e, t, n, o, a, s, l, u;
    if (i.type === M.IIU.WATCHING) return null;
    if ((0, c.Z)(i)) return ef();
    if ((0, O.dS)(i) && (null == (e = i.party) ? true : e.size) != null && (null == (t = i.party) ? true : t.size.length) >= 2) {
      let e = B.intl.formatToPlainString(B.t["JC/3x8"], {
        numSpeakers: null == (o = i.party) ? true : o.size[0],
        numListeners: (null == (a = i.party) ? true : a.size[1]) - (null == (s = i.party) ? true : s.size[0])
      });
      return (0, r.jsx)(D.Z, {
        variant: "text-xs/normal",
        text: e
      })
    }
    return (null == (n = i.assets) ? true : n.large_text) != null ? (0, r.jsx)(p._, {
      href: null == (l = i.assets) ? true : l.large_url,
      children: (0, r.jsx)(D.Z, {
        text: null == (u = i.assets) ? true : u.large_text,
        variant: "text-xs/normal"
      })
    }) : null
  }, ef = () => {
    var e, t, n, o;
    return (null == (e = i.party) ? true : e.size) == null && i.application_id === U.Zc ? (0, r.jsxs)("div", {
      className: Z.gameState,
      children: [(0, r.jsx)(p._, {
        href: i.state_url,
        children: (0, r.jsx)(D.Z, {
          variant: "text-xs/normal",
          text: i.state
        })
      }), (0, r.jsx)(D.Z, {
        variant: "text-xs/normal",
        text: B.intl.formatToPlainString(B.t["u//9Bw"], {
          count: "0",
          max: null != (o = null == F ? true : F.getMaxParticipants()) ? o : 0
        })
      })]
    }) : (0, l.Z)(i) && (null == (t = i.party) ? true : t.size) != null && (null == (n = i.party) ? true : n.size.length) >= 2 ? (0, r.jsxs)("div", {
      className: Z.gameState,
      children: [(0, r.jsx)(p._, {
        href: i.state_url,
        children: (0, r.jsx)(D.Z, {
          variant: "text-xs/normal",
          text: i.state
        })
      }), (0, r.jsx)(D.Z, {
        variant: "text-xs/normal",
        text: 0 === i.party.size[1] ? B.intl.formatToPlainString(B.t.IM4J4e, {
          count: i.party.size[0]
        }) : B.intl.formatToPlainString(B.t["u//9Bw"], {
          count: i.party.size[0],
          max: i.party.size[1]
        })
      })]
    }) : null == i.party ? (0, r.jsx)(p._, {
      href: i.state_url,
      children: (0, r.jsx)(D.Z, {
        variant: "text-xs/normal",
        text: i.state
      })
    }) : null
  }, e_ = () => {
    if (!(0, S.Z)(i)) return null;
    let {
      start: e,
      end: t
    } = i.timestamps;
    return (0, r.jsx)(L.Z, {
      start: e,
      end: t
    })
  }, ep = () => null == es ? (0, r.jsxs)("div", {
    children: [ec(), eu(), ed()]
  }) : (0, r.jsxs)(a.P3F, {
    className: Z.clickableText,
    onClick: e => {
      et({
        action: "PRESS_TEXT"
      }), es(e)
    },
    children: [ec(), eu(), ed()]
  }), eh = () => null == H || null == W ? null : (0, r.jsx)(x.Z, {
    user: t,
    guild: H,
    channel: W,
    onAction: et,
    onClose: z
  }), em = () => t.id === n.id ? null : (0, r.jsx)("div", {
    className: Z.actions,
    children: (0, r.jsx)(C.Z, {
      activity: i,
      user: t,
      onAction: et,
      onClose: z,
      application: F
    })
  });
  return (0, r.jsx)(f.Gt, {
    value: J,
    children: (0, r.jsxs)(P.Z, {
      ref: en,
      className: o()(Z.card, K),
      onAction: et,
      onClose: z,
      "aria-labelledby": ei ? "".concat(Q, " ").concat(X) : X,
      children: [(0, r.jsx)(w.Z, Y(V({
        textId: Q
      }, er), {
        contextMenu: (0, r.jsx)(j.Z, {
          display: "live",
          user: t,
          activity: i,
          entry: ee,
          onClose: z,
          appContext: q
        })
      })), (0, r.jsxs)("div", {
        className: Z.body,
        children: [(0, r.jsxs)("div", {
          className: Z.content,
          children: [!t.bot && el(), (0, r.jsxs)("div", {
            className: Z.details,
            children: [ep(), !t.bot && (0, r.jsx)(N.Z, {
              user: t,
              activity: i,
              className: Z.badges
            }), e_(), $ === G.l.MODAL_V2 && em()]
          }), $ === G.l.MODAL && em()]
        }), eh()]
      }), $ !== G.l.MODAL && $ !== G.l.MODAL_V2 && em(), (0, r.jsx)(R.Z, {
        applicationId: null == F ? true : F.id,
        onAction: et,
        onClose: z
      })]
    })
  })
}