/** Chunk was on web.js **/
/** chunk id: 409057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => z
});
var Chunk951288 = require("./951288.js"),
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
  Chunk220410 = require("./220410.js"),
  Chunk833858 = require("./833858.js"),
  Chunk223135 = require("./223135.jsx"),
  Chunk769654 = require("./769654.js"),
  Chunk750154 = require("./750154.js"),
  Chunk960870 = require("./960870.js"),
  Chunk139793 = require("./139793.js"),
  Chunk994746 = require("./994746.js"),
  Chunk232174 = require("./232174.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk555830 = require("./555830.jsx"),
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

function H(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      H(e, t, n[t])
    })
  }
  return e
}

function W(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function K(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : W(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function z(e) {
  let {
    user: t,
    currentUser: n,
    activity: i,
    application: H,
    voiceGuild: W,
    voiceChannel: z,
    className: q,
    onClose: X,
    appContext: Q
  } = e, J = (0, g.Dt)(), $ = (0, g.Dt)(), {
    analyticsLocations: ee
  } = (0, f.ZP)(d.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), {
    themeType: et
  } = (0, C.z)(), en = (0, m.Z)({
    activity: i,
    user: t
  }), er = (0, I.Z)({
    display: "live",
    user: t,
    activity: i,
    entry: en,
    analyticsLocations: ee
  }), ei = (0, T.Z)({
    userId: t.id,
    onAction: er
  }), ea = (0, E.P6)("UserProfileActivityCard"), eo = t.id === n.id, es = (0, c.Z)(i), el = eo && ea && es, ec = (0, S.Z)(i), eu = null != ec.text && "" !== ec.text, {
    largeImage: ed,
    smallImage: ef
  } = (0, _.FO)(i, H), e_ = (0, U.Z)({
    location: "UserProfileActivityCard",
    user: t,
    currentUser: n,
    activity: i,
    application: H,
    entry: en,
    onClose: X
  }), ep = () => {
    let e = (0, s.Z)(i) ? "crunchyroll" : "default",
      n = et === Z.l.MODAL_V2 ? h.J.SIZE_100 : h.J.SIZE_60;
    return i.type === G.IIU.HANG_STATUS ? (0, r.jsx)(y.Z, {
      userId: t.id,
      size: et !== Z.l.MODAL_V2 ? 60 : 100,
      hangStatusActivity: i,
      className: a()(V.hangStatusIcon, V.image, {
        [V.small]: et !== Z.l.MODAL_V2
      })
    }) : null == e_ ? (0, r.jsx)(h.E, {
      image: ed,
      smallImage: ef,
      size: n,
      aspectRatio: e,
      className: V.image
    }) : (0, r.jsx)(h.E, {
      image: ed,
      smallImage: ef,
      size: n,
      className: V.clickableImage,
      aspectRatio: e,
      onClick: e => {
        er({
          action: "PRESS_IMAGE"
        }), e_(e)
      }
    })
  }, eh = () => i.type === G.IIU.HANG_STATUS ? (0, r.jsx)(x.f, {
    variant: "heading-sm/semibold",
    text: (0, b.O8)(t.id, i),
    id: J
  }) : (0, u.Z)(i) && null != z ? (0, r.jsxs)("div", {
    className: V.voiceChannelText,
    children: [(0, r.jsx)(o.gj8, {
      size: "xxs",
      color: o.TVs.colors.TEXT_DEFAULT,
      className: V.voiceIcon
    }), (0, r.jsx)(x.f, {
      variant: "heading-sm/semibold",
      text: z.name,
      id: J
    })]
  }) : (0, c.Z)(i) || (0, v.dS)(i) ? (0, r.jsx)(x.f, {
    variant: "heading-sm/semibold",
    text: i.name,
    id: J
  }) : null != i.details ? (0, r.jsx)(p._, {
    href: i.details_url,
    children: (0, r.jsx)(x.f, {
      variant: "heading-sm/semibold",
      text: i.details,
      id: J
    })
  }) : (0, r.jsx)(x.f, {
    variant: "heading-sm/semibold",
    text: i.name,
    id: J
  }), em = () => {
    if (i.type === G.IIU.HANG_STATUS) return null;
    if ((0, u.Z)(i) && null != W) return (0, r.jsx)(x.Z, {
      variant: "text-xs/normal",
      text: F.intl.formatToPlainString(F.t["hq/Qzc"], {
        guildName: W.name
      }),
      onClick: () => {
        (0, O.X)(W.id), er({
          action: "OPEN_VOICE_GUILD"
        }), null == X || X()
      }
    });
    if ((0, c.Z)(i)) return (0, r.jsx)(p._, {
      href: i.details_url,
      children: (0, r.jsx)(x.Z, {
        variant: "text-xs/normal",
        text: i.details
      })
    });
    if ((0, v.dS)(i)) {
      var e;
      return (0, r.jsx)(x.Z, {
        variant: "text-xs/normal",
        text: null == i || null == (e = i.assets) ? true : e.small_text
      })
    }
    return (0, r.jsx)(p._, {
      href: i.state_url,
      children: (0, r.jsx)(x.Z, {
        variant: "text-xs/normal",
        text: i.state
      })
    })
  }, eg = () => {
    var e, t, n, a, o, s, l, u;
    if (i.type === G.IIU.WATCHING) return null;
    if ((0, c.Z)(i)) return eE();
    if ((0, v.dS)(i) && (null == (e = i.party) ? true : e.size) != null && (null == (t = i.party) ? true : t.size.length) >= 2) {
      let e = F.intl.formatToPlainString(F.t["JC/3x8"], {
        numSpeakers: null == (a = i.party) ? true : a.size[0],
        numListeners: (null == (o = i.party) ? true : o.size[1]) - (null == (s = i.party) ? true : s.size[0])
      });
      return (0, r.jsx)(x.Z, {
        variant: "text-xs/normal",
        text: e
      })
    }
    return (null == (n = i.assets) ? true : n.large_text) != null ? (0, r.jsx)(p._, {
      href: null == (l = i.assets) ? true : l.large_url,
      children: (0, r.jsx)(x.Z, {
        text: null == (u = i.assets) ? true : u.large_text,
        variant: "text-xs/normal"
      })
    }) : null
  }, eE = () => {
    var e, t, n, a;
    return (null == (e = i.party) ? true : e.size) == null && i.application_id === B.Zc ? (0, r.jsxs)("div", {
      className: V.gameState,
      children: [(0, r.jsx)(p._, {
        href: i.state_url,
        children: (0, r.jsx)(x.Z, {
          variant: "text-xs/normal",
          text: i.state
        })
      }), (0, r.jsx)(x.Z, {
        variant: "text-xs/normal",
        text: F.intl.formatToPlainString(F.t["u//9Bw"], {
          count: "0",
          max: null != (a = null == H ? true : H.getMaxParticipants()) ? a : 0
        })
      })]
    }) : (0, l.Z)(i) && (null == (t = i.party) ? true : t.size) != null && (null == (n = i.party) ? true : n.size.length) >= 2 ? (0, r.jsxs)("div", {
      className: V.gameState,
      children: [(0, r.jsx)(p._, {
        href: i.state_url,
        children: (0, r.jsx)(x.Z, {
          variant: "text-xs/normal",
          text: i.state
        })
      }), (0, r.jsx)(x.Z, {
        variant: "text-xs/normal",
        text: 0 === i.party.size[1] ? F.intl.formatToPlainString(F.t.IM4J4e, {
          count: i.party.size[0]
        }) : F.intl.formatToPlainString(F.t["u//9Bw"], {
          count: i.party.size[0],
          max: i.party.size[1]
        })
      })]
    }) : null == i.party ? (0, r.jsx)(p._, {
      href: i.state_url,
      children: (0, r.jsx)(x.Z, {
        variant: "text-xs/normal",
        text: i.state
      })
    }) : null
  }, eb = () => {
    if (!(0, A.Z)(i)) return null;
    let {
      start: e,
      end: t
    } = i.timestamps;
    return (0, r.jsx)(M.Z, {
      start: e,
      end: t
    })
  }, ey = () => null == e_ ? (0, r.jsxs)("div", {
    children: [eh(), em(), eg()]
  }) : (0, r.jsxs)(o.P3F, {
    className: V.clickableText,
    onClick: e => {
      er({
        action: "PRESS_TEXT"
      }), e_(e)
    },
    children: [eh(), em(), eg()]
  }), eO = () => null == W || null == z ? null : (0, r.jsx)(j.Z, {
    user: t,
    guild: W,
    channel: z,
    onAction: er,
    onClose: X
  }), ev = () => t.id === n.id ? null : (0, r.jsx)("div", {
    className: V.actions,
    children: (0, r.jsx)(R.Z, {
      activity: i,
      user: t,
      onAction: er,
      onClose: X,
      application: H
    })
  });
  return (0, r.jsx)(f.Gt, {
    value: ee,
    children: (0, r.jsxs)(D.Z, {
      ref: ei,
      className: a()(V.card, q),
      onAction: er,
      onClose: X,
      "aria-labelledby": eu ? "".concat($, " ").concat(J) : J,
      children: [(0, r.jsx)(L.Z, K(Y({
        textId: $
      }, ec), {
        contextMenu: (0, r.jsx)(k.Z, {
          display: "live",
          user: t,
          activity: i,
          entry: en,
          onClose: X,
          appContext: Q
        })
      })), (0, r.jsxs)("div", {
        className: V.body,
        children: [(0, r.jsxs)("div", {
          className: V.content,
          children: [!t.bot && ep(), (0, r.jsxs)("div", {
            className: V.details,
            children: [ey(), !t.bot && (0, r.jsx)(P.Z, {
              user: t,
              activity: i,
              className: V.badges
            }), eb(), et === Z.l.MODAL_V2 && ev()]
          }), et === Z.l.MODAL && ev()]
        }), eO()]
      }), et !== Z.l.MODAL && et !== Z.l.MODAL_V2 && ev(), (0, r.jsx)(w.Z, {
        applicationId: null == H ? true : H.id,
        onAction: er,
        onClose: X,
        activity: i
      }), el && (0, r.jsx)(N.Z, {
        activity: i,
        variant: et === Z.l.MODAL_V2 ? "horizontal" : "vertical"
      })]
    })
  })
}