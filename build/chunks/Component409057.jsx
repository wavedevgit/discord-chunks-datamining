/** Chunk was on web.js **/
/** chunk id: 409057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => q
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk636977 = require("./636977.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk633181 = require("./633181.jsx"),
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
  Chunk251806 = require("./251806.js");

function Y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Y(e, t, n[t])
    })
  }
  return e
}

function K(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : K(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function q(e) {
  let {
    user: t,
    currentUser: n,
    activity: i,
    application: Y,
    voiceGuild: K,
    voiceChannel: q,
    className: Q,
    onClose: X,
    appContext: J
  } = e, $ = (0, b.Dt)(), ee = (0, b.Dt)(), {
    analyticsLocations: et
  } = (0, _.ZP)(p.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), {
    themeType: en
  } = (0, P.z)(), er = (0, E.Z)({
    activity: i,
    user: t
  }), ei = (0, T.Z)({
    display: "live",
    user: t,
    activity: i,
    entry: er,
    analyticsLocations: et
  }), ea = (0, C.Z)({
    userId: t.id,
    onAction: ei
  }), eo = (0, A.Z)(i), es = null != eo.text && "" !== eo.text, {
    largeImage: el,
    smallImage: ec
  } = (0, h.FO)(i, Y), eu = (0, G.Z)({
    location: "UserProfileActivityCard",
    user: t,
    currentUser: n,
    activity: i,
    application: Y,
    entry: er,
    onClose: X
  }), ed = () => i.type !== Z.IIU.HANG_STATUS || t.id !== n.id || null == q ? null : (0, r.jsx)(s.u, {
    text: V.intl.string(V.t.QSOBaq),
    children: (0, r.jsx)(l.d3s, {
      size: "xxs"
    })
  }), ef = () => {
    let e = (0, c.Z)(i) ? "crunchyroll" : "default",
      n = en === B.l.MODAL_V2 ? g.J.SIZE_100 : g.J.SIZE_60;
    return i.type === Z.IIU.HANG_STATUS ? (0, r.jsx)(O.Z, {
      userId: t.id,
      size: en !== B.l.MODAL_V2 ? 60 : 100,
      hangStatusActivity: i,
      className: a()(H.hangStatusIcon, H.image, {
        [H.small]: en !== B.l.MODAL_V2
      })
    }) : null == eu ? (0, r.jsx)(g.E, {
      image: el,
      smallImage: ec,
      size: n,
      aspectRatio: e,
      className: H.image
    }) : (0, r.jsx)(g.E, {
      image: el,
      smallImage: ec,
      size: n,
      className: H.clickableImage,
      aspectRatio: e,
      onClick: e => {
        ei({
          action: "PRESS_IMAGE"
        }), eu(e)
      }
    })
  }, ep = () => i.type === Z.IIU.HANG_STATUS ? (0, r.jsx)(j.f, {
    variant: "heading-sm/semibold",
    text: (0, y.O8)(t.id, i),
    id: $
  }) : (0, f.Z)(i) && null != q ? (0, r.jsxs)("div", {
    className: H.voiceChannelText,
    children: [(0, r.jsx)(l.gj8, {
      size: "xxs",
      color: l.TVs.colors.TEXT_DEFAULT,
      className: H.voiceIcon
    }), (0, r.jsx)(j.f, {
      variant: "heading-sm/semibold",
      text: q.name,
      id: $
    })]
  }) : (0, d.Z)(i) || (0, I.dS)(i) ? (0, r.jsx)(j.f, {
    variant: "heading-sm/semibold",
    text: i.name,
    id: $
  }) : null != i.details ? (0, r.jsx)(m._, {
    href: i.details_url,
    children: (0, r.jsx)(j.f, {
      variant: "heading-sm/semibold",
      text: i.details,
      id: $
    })
  }) : (0, r.jsx)(j.f, {
    variant: "heading-sm/semibold",
    text: i.name,
    id: $
  }), e_ = () => {
    if (i.type === Z.IIU.HANG_STATUS) return null;
    if ((0, f.Z)(i) && null != K) return (0, r.jsx)(j.Z, {
      variant: "text-xs/normal",
      text: V.intl.formatToPlainString(V.t["hq/Qze"], {
        guildName: K.name
      }),
      onClick: () => {
        (0, S.X)(K.id), ei({
          action: "OPEN_VOICE_GUILD"
        }), null == X || X()
      }
    });
    if ((0, d.Z)(i)) return (0, r.jsx)(m._, {
      href: i.details_url,
      children: (0, r.jsx)(j.Z, {
        variant: "text-xs/normal",
        text: i.details
      })
    });
    if ((0, I.dS)(i)) {
      var e;
      return (0, r.jsx)(j.Z, {
        variant: "text-xs/normal",
        text: null == i || null == (e = i.assets) ? true : e.small_text
      })
    }
    return (0, r.jsx)(m._, {
      href: i.state_url,
      children: (0, r.jsx)(j.Z, {
        variant: "text-xs/normal",
        text: i.state
      })
    })
  }, eh = () => {
    var e, t, n, a, o, s, l, c;
    if (i.type === Z.IIU.WATCHING) return null;
    if ((0, d.Z)(i)) return em();
    if ((0, I.dS)(i) && (null == (e = i.party) ? true : e.size) != null && (null == (t = i.party) ? true : t.size.length) >= 2) {
      let e = V.intl.formatToPlainString(V.t["JC/3xw"], {
        numSpeakers: null == (a = i.party) ? true : a.size[0],
        numListeners: (null == (o = i.party) ? true : o.size[1]) - (null == (s = i.party) ? true : s.size[0])
      });
      return (0, r.jsx)(j.Z, {
        variant: "text-xs/normal",
        text: e
      })
    }
    return (null == (n = i.assets) ? true : n.large_text) != null ? (0, r.jsx)(m._, {
      href: null == (l = i.assets) ? true : l.large_url,
      children: (0, r.jsx)(j.Z, {
        text: null == (c = i.assets) ? true : c.large_text,
        variant: "text-xs/normal"
      })
    }) : null
  }, em = () => {
    var e, t, n, a;
    return (null == (e = i.party) ? true : e.size) == null && i.application_id === F.Zc ? (0, r.jsxs)("div", {
      className: H.gameState,
      children: [(0, r.jsx)(m._, {
        href: i.state_url,
        children: (0, r.jsx)(j.Z, {
          variant: "text-xs/normal",
          text: i.state
        })
      }), (0, r.jsx)(j.Z, {
        variant: "text-xs/normal",
        text: V.intl.formatToPlainString(V.t["u//9By"], {
          count: "0",
          max: null != (a = null == Y ? true : Y.getMaxParticipants()) ? a : 0
        })
      })]
    }) : (0, u.Z)(i) && (null == (t = i.party) ? true : t.size) != null && (null == (n = i.party) ? true : n.size.length) >= 2 ? (0, r.jsxs)("div", {
      className: H.gameState,
      children: [(0, r.jsx)(m._, {
        href: i.state_url,
        children: (0, r.jsx)(j.Z, {
          variant: "text-xs/normal",
          text: i.state
        })
      }), (0, r.jsx)(j.Z, {
        variant: "text-xs/normal",
        text: 0 === i.party.size[1] ? V.intl.formatToPlainString(V.t.IM4J4e, {
          count: i.party.size[0]
        }) : V.intl.formatToPlainString(V.t["u//9By"], {
          count: i.party.size[0],
          max: i.party.size[1]
        })
      })]
    }) : null == i.party ? (0, r.jsx)(m._, {
      href: i.state_url,
      children: (0, r.jsx)(j.Z, {
        variant: "text-xs/normal",
        text: i.state
      })
    }) : null
  }, eg = () => {
    if (!(0, N.Z)(i)) return null;
    let {
      start: e,
      end: t
    } = i.timestamps;
    return (0, r.jsx)(k.Z, {
      start: e,
      end: t
    })
  }, eE = () => null == eu ? (0, r.jsxs)("div", {
    children: [ep(), e_(), eh()]
  }) : (0, r.jsxs)(l.P3F, {
    className: H.clickableText,
    onClick: e => {
      ei({
        action: "PRESS_TEXT"
      }), eu(e)
    },
    children: [ep(), e_(), eh()]
  }), eb = () => null == K || null == q ? null : (0, r.jsx)(M.Z, {
    user: t,
    guild: K,
    channel: q,
    onAction: ei,
    onClose: X
  }), ey = () => (0, r.jsx)(w.Z, {
    containerClassName: H.actions,
    activity: i,
    user: t,
    onAction: ei,
    onClose: X,
    application: Y
  });
  return (0, r.jsx)(_.Gt, {
    value: et,
    children: (0, r.jsxs)(x.Z, {
      ref: ea,
      className: a()(H.card, Q),
      onAction: ei,
      onClose: X,
      "aria-labelledby": es ? "".concat(ee, " ").concat($) : $,
      children: [(0, r.jsx)(L.Z, z(W({
        textId: ee,
        tags: ed()
      }, eo), {
        contextMenu: (0, r.jsx)(U.Z, {
          display: "live",
          user: t,
          activity: i,
          entry: er,
          onClose: X,
          appContext: J
        })
      })), (0, r.jsx)(v.Z, {
        applicationId: null == Y ? true : Y.id,
        questContent: o.j.USER_PROFILE_ACTIVITY,
        children: e => (0, r.jsxs)("div", {
          className: H.body,
          ref: e,
          children: [(0, r.jsxs)("div", {
            className: H.content,
            children: [!t.bot && ef(), (0, r.jsxs)("div", {
              className: H.details,
              children: [eE(), !t.bot && (0, r.jsx)(R.Z, {
                user: t,
                activity: i,
                className: H.badges
              }), eg(), en === B.l.MODAL_V2 && ey()]
            }), en === B.l.MODAL && ey()]
          }), eb()]
        })
      }), en !== B.l.MODAL && en !== B.l.MODAL_V2 && ey(), (0, r.jsx)(D.Z, {
        applicationId: null == Y ? true : Y.id,
        onAction: ei,
        onClose: X,
        activity: i
      })]
    })
  })
}