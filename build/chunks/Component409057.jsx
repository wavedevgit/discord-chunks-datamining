/** Chunk was on web.js **/
/** chunk id: 409057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Y
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
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
  Chunk336383 = require("./336383.jsx"),
  Chunk194811 = require("./194811.jsx"),
  Chunk373826 = require("./373826.jsx"),
  Chunk668700 = require("./668700.jsx"),
  Chunk262210 = require("./262210.jsx"),
  Chunk670451 = require("./670451.jsx"),
  Chunk881530 = require("./881530.js"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk704543 = require("./704543.js");

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Z(e, t, n[t])
    })
  }
  return e
}

function V(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function H(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Y(e) {
  let {
    user: t,
    currentUser: n,
    activity: i,
    application: Z,
    voiceGuild: V,
    voiceChannel: Y,
    className: W,
    onClose: K,
    appContext: z
  } = e, q = (0, g.Dt)(), X = (0, g.Dt)(), {
    analyticsLocations: Q
  } = (0, f.ZP)(d.Z.USER_PROFILE_LIVE_ACTIVITY_CARD), {
    themeType: J
  } = (0, A.z)(), $ = (0, m.Z)({
    activity: i,
    user: t
  }), ee = (0, v.Z)({
    display: "live",
    user: t,
    activity: i,
    entry: $,
    analyticsLocations: Q
  }), et = (0, I.Z)({
    userId: t.id,
    onAction: ee
  }), en = (0, T.Z)(i), er = null != en.text && "" !== en.text, {
    largeImage: ei,
    smallImage: eo
  } = (0, _.FO)(i, Z), ea = (0, M.Z)({
    location: "UserProfileActivityCard",
    user: t,
    currentUser: n,
    activity: i,
    application: Z,
    entry: $,
    onClose: K
  }), es = () => {
    let e = (0, s.Z)(i) ? "crunchyroll" : "default",
      t = J === j.lY.MODAL_V2 ? h.J.SIZE_100 : h.J.SIZE_60;
    return i.type === k.IIU.HANG_STATUS ? (0, r.jsx)(b.Z, {
      hangStatusActivity: i,
      className: o()(B.hangStatusIcon, B.image, {
        [B.small]: J !== j.lY.MODAL_V2
      })
    }) : null == ea ? (0, r.jsx)(h.E, {
      image: ei,
      smallImage: eo,
      size: t,
      aspectRatio: e,
      className: B.image
    }) : (0, r.jsx)(h.E, {
      image: ei,
      smallImage: eo,
      size: t,
      className: B.clickableImage,
      aspectRatio: e,
      onClick: e => {
        ee({
          action: "PRESS_IMAGE"
        }), ea(e)
      }
    })
  }, el = () => i.type === k.IIU.HANG_STATUS ? (0, r.jsx)(w.f, {
    variant: "heading-sm/semibold",
    text: (0, E.O8)(i),
    id: q
  }) : (0, u.Z)(i) && null != Y ? (0, r.jsxs)("div", {
    className: B.voiceChannelText,
    children: [(0, r.jsx)(a.gj8, {
      size: "xxs",
      color: a.TVs.colors.TEXT_DEFAULT,
      className: B.voiceIcon
    }), (0, r.jsx)(w.f, {
      variant: "heading-sm/semibold",
      text: Y.name,
      id: q
    })]
  }) : (0, c.Z)(i) || (0, O.dS)(i) ? (0, r.jsx)(w.f, {
    variant: "heading-sm/semibold",
    text: i.name,
    id: q
  }) : null != i.details ? (0, r.jsx)(p._, {
    href: i.details_url,
    children: (0, r.jsx)(w.f, {
      variant: "heading-sm/semibold",
      text: i.details,
      id: q
    })
  }) : (0, r.jsx)(w.f, {
    variant: "heading-sm/semibold",
    text: i.name,
    id: q
  }), ec = () => {
    if (i.type === k.IIU.HANG_STATUS) return null;
    if ((0, u.Z)(i) && null != V) return (0, r.jsx)(w.Z, {
      variant: "text-xs/normal",
      text: G.intl.formatToPlainString(G.t["hq/Qzc"], {
        guildName: V.name
      }),
      onClick: () => {
        (0, y.X)(V.id), ee({
          action: "OPEN_VOICE_GUILD"
        }), null == K || K()
      }
    });
    if ((0, c.Z)(i)) return (0, r.jsx)(p._, {
      href: i.details_url,
      children: (0, r.jsx)(w.Z, {
        variant: "text-xs/normal",
        text: i.details
      })
    });
    if ((0, O.dS)(i)) {
      var e;
      return (0, r.jsx)(w.Z, {
        variant: "text-xs/normal",
        text: null == i || null == (e = i.assets) ? true : e.small_text
      })
    }
    return (0, r.jsx)(p._, {
      href: i.state_url,
      children: (0, r.jsx)(w.Z, {
        variant: "text-xs/normal",
        text: i.state
      })
    })
  }, eu = () => {
    var e, t, n, o, a, s, l, u;
    if (i.type === k.IIU.WATCHING) return null;
    if ((0, c.Z)(i)) return ed();
    if ((0, O.dS)(i) && (null == (e = i.party) ? true : e.size) != null && (null == (t = i.party) ? true : t.size.length) >= 2) {
      let e = G.intl.formatToPlainString(G.t["JC/3x8"], {
        numSpeakers: null == (o = i.party) ? true : o.size[0],
        numListeners: (null == (a = i.party) ? true : a.size[1]) - (null == (s = i.party) ? true : s.size[0])
      });
      return (0, r.jsx)(w.Z, {
        variant: "text-xs/normal",
        text: e
      })
    }
    return (null == (n = i.assets) ? true : n.large_text) != null ? (0, r.jsx)(p._, {
      href: null == (l = i.assets) ? true : l.large_url,
      children: (0, r.jsx)(w.Z, {
        text: null == (u = i.assets) ? true : u.large_text,
        variant: "text-xs/normal"
      })
    }) : null
  }, ed = () => {
    var e, t, n, o;
    return (null == (e = i.party) ? true : e.size) == null && i.application_id === U.Zc ? (0, r.jsxs)("div", {
      className: B.gameState,
      children: [(0, r.jsx)(p._, {
        href: i.state_url,
        children: (0, r.jsx)(w.Z, {
          variant: "text-xs/normal",
          text: i.state
        })
      }), (0, r.jsx)(w.Z, {
        variant: "text-xs/normal",
        text: G.intl.formatToPlainString(G.t["u//9Bw"], {
          count: "0",
          max: null != (o = null == Z ? true : Z.getMaxParticipants()) ? o : 0
        })
      })]
    }) : (0, l.Z)(i) && (null == (t = i.party) ? true : t.size) != null && (null == (n = i.party) ? true : n.size.length) >= 2 ? (0, r.jsxs)("div", {
      className: B.gameState,
      children: [(0, r.jsx)(p._, {
        href: i.state_url,
        children: (0, r.jsx)(w.Z, {
          variant: "text-xs/normal",
          text: i.state
        })
      }), (0, r.jsx)(w.Z, {
        variant: "text-xs/normal",
        text: 0 === i.party.size[1] ? G.intl.formatToPlainString(G.t.IM4J4e, {
          count: i.party.size[0]
        }) : G.intl.formatToPlainString(G.t["u//9Bw"], {
          count: i.party.size[0],
          max: i.party.size[1]
        })
      })]
    }) : null == i.party ? (0, r.jsx)(p._, {
      href: i.state_url,
      children: (0, r.jsx)(w.Z, {
        variant: "text-xs/normal",
        text: i.state
      })
    }) : null
  }, ef = () => {
    if (!(0, S.Z)(i)) return null;
    let {
      start: e,
      end: t
    } = i.timestamps;
    return (0, r.jsx)(L.Z, {
      start: e,
      end: t
    })
  }, e_ = () => null == ea ? (0, r.jsxs)("div", {
    children: [el(), ec(), eu()]
  }) : (0, r.jsxs)(a.P3F, {
    className: B.clickableText,
    onClick: e => {
      ee({
        action: "PRESS_TEXT"
      }), ea(e)
    },
    children: [el(), ec(), eu()]
  }), ep = () => null == V || null == Y ? null : (0, r.jsx)(D.Z, {
    user: t,
    guild: V,
    channel: Y,
    onAction: ee,
    onClose: K
  }), eh = () => t.id === n.id ? null : (0, r.jsx)("div", {
    className: B.actions,
    children: (0, r.jsx)(N.Z, {
      activity: i,
      user: t,
      onAction: ee,
      onClose: K,
      application: Z
    })
  });
  return (0, r.jsx)(f.Gt, {
    value: Q,
    children: (0, r.jsxs)(R.Z, {
      ref: et,
      className: o()(B.card, W),
      onAction: ee,
      onClose: K,
      "aria-labelledby": er ? "".concat(X, " ").concat(q) : q,
      children: [(0, r.jsx)(P.Z, H(F({
        textId: X
      }, en), {
        contextMenu: (0, r.jsx)(x.Z, {
          display: "live",
          user: t,
          activity: i,
          entry: $,
          onClose: K,
          appContext: z
        })
      })), (0, r.jsxs)("div", {
        className: B.body,
        children: [(0, r.jsxs)("div", {
          className: B.content,
          children: [!t.bot && es(), (0, r.jsxs)("div", {
            className: B.details,
            children: [e_(), !t.bot && (0, r.jsx)(C.Z, {
              user: t,
              activity: i,
              className: B.badges
            }), ef(), J === j.lY.MODAL_V2 && eh()]
          }), J === j.lY.MODAL && eh()]
        }), ep()]
      }), J !== j.lY.MODAL && J !== j.lY.MODAL_V2 && eh()]
    })
  })
}