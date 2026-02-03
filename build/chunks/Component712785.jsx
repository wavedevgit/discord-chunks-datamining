/** Chunk was on web.js **/
/** chunk id: 712785, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => J
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk696292 = require("./696292.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk541806 = require("./541806.js"),
  Chunk765379 = require("./765379.js"),
  Chunk672979 = require("./672979.js"),
  Chunk960076 = require("./960076.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk939341 = require("./939341.js"),
  Chunk662010 = require("./662010.jsx"),
  Chunk623671 = require("./623671.jsx"),
  Chunk365185 = require("./365185.js"),
  Chunk915089 = require("./915089.js"),
  Chunk886019 = require("./886019.js"),
  Chunk559405 = require("./559405.jsx"),
  Chunk753845 = require("./753845.jsx"),
  Chunk345942 = require("./345942.js"),
  Chunk82149 = require("./82149.js"),
  Chunk92240 = require("./92240.js"),
  Chunk257367 = require("./257367.js"),
  Chunk317572 = require("./317572.js"),
  Chunk53257 = require("./53257.js"),
  Chunk657331 = require("./657331.js"),
  Chunk939496 = require("./939496.jsx"),
  Chunk964195 = require("./964195.jsx"),
  Chunk167272 = require("./167272.jsx"),
  Chunk282197 = require("./282197.jsx"),
  Chunk624951 = require("./624951.jsx"),
  Chunk584904 = require("./584904.jsx"),
  Chunk351638 = require("./351638.jsx"),
  Chunk531648 = require("./531648.jsx"),
  Chunk910607 = require("./910607.jsx"),
  Chunk753713 = require("./753713.jsx"),
  Chunk8738 = require("./8738.jsx"),
  Chunk707794 = require("./707794.js"),
  Chunk518477 = require("./518477.js"),
  Chunk652215 = require("./652215.js"),
  Chunk360469 = require("./360469.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk380297 = require("./380297.js");

function q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
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

function Q(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function X(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function J(e) {
  let {
    user: t,
    currentUser: n,
    activity: i,
    application: q,
    voiceGuild: Q,
    voiceChannel: J,
    className: $,
    onClose: ee,
    appContext: et
  } = e, en = (0, y.GV)(), er = (0, y.GV)(), {
    analyticsLocations: ei
  } = (0, _.Ay)(p.A.USER_PROFILE_LIVE_ACTIVITY_CARD), {
    themeType: ea
  } = (0, R.E)(), eo = (0, E.A)({
    activity: i,
    user: t
  }), es = (0, S.A)({
    display: "live",
    user: t,
    activity: i,
    entry: eo,
    analyticsLocations: ei
  }), el = (0, T.A)({
    userId: t.id,
    onAction: es
  }), ec = (0, C.A)(i), eu = null != ec.text && "" !== ec.text, {
    largeImage: ed,
    smallImage: ef
  } = (0, h.XN)(i, q), ep = (0, V.A)({
    location: "UserProfileActivityCard",
    user: t,
    currentUser: n,
    activity: i,
    application: q,
    entry: eo,
    onClose: ee
  }), e_ = () => i.type !== H.$pd.HANG_STATUS || t.id !== n.id || null == J ? null : (0, r.jsx)(s.m, {
    text: K.intl.string(K.t.QSOBaq),
    children: (0, r.jsx)(l.mir, {
      size: "xxs"
    })
  }), eh = () => {
    let e = (0, c.A)(i) ? "crunchyroll" : "default",
      n = ea === W.d.MODAL_V2 ? g.w.SIZE_100 : g.w.SIZE_60;
    return i.type === H.$pd.HANG_STATUS ? (0, r.jsx)(O.A, {
      userId: t.id,
      size: ea !== W.d.MODAL_V2 ? 60 : 100,
      hangStatusActivity: i,
      className: a()(z.W9, z.Sl, {
        [z.EX]: ea !== W.d.MODAL_V2
      })
    }) : null == ep ? (0, r.jsx)(g.d, {
      image: ed,
      smallImage: ef,
      size: n,
      aspectRatio: e,
      className: z.Sl
    }) : (0, r.jsx)(g.d, {
      image: ed,
      smallImage: ef,
      size: n,
      className: z.mM,
      aspectRatio: e,
      onClick: e => {
        es({
          action: "PRESS_IMAGE"
        }), ep(e)
      }
    })
  }, em = () => i.type === H.$pd.HANG_STATUS ? (0, r.jsx)(k.Q, {
    variant: "heading-sm/semibold",
    text: (0, b.Au)(t.id, i),
    id: en
  }) : (0, f.A)(i) && null != J ? (0, r.jsxs)("div", {
    className: z.FH,
    children: [(0, r.jsx)(l.HKD, {
      size: "xxs",
      color: l.LU0.colors.TEXT_DEFAULT,
      className: z.Ow
    }), (0, r.jsx)(k.Q, {
      variant: "heading-sm/semibold",
      text: J.name,
      id: en
    })]
  }) : (0, d.A)(i) || (0, I.Cy)(i) ? (0, r.jsx)(k.Q, {
    variant: "heading-sm/semibold",
    text: i.name,
    id: en
  }) : null != i.details ? (0, r.jsx)(m.O, {
    href: i.details_url,
    children: (0, r.jsx)(k.Q, {
      variant: "heading-sm/semibold",
      text: i.details,
      id: en
    })
  }) : (0, r.jsx)(k.Q, {
    variant: "heading-sm/semibold",
    text: i.name,
    id: en
  }), eg = () => {
    if (i.type === H.$pd.HANG_STATUS) return null;
    if ((0, f.A)(i) && null != Q) return (0, r.jsx)(k.A, {
      variant: "text-xs/normal",
      text: K.intl.formatToPlainString(K.t["hq/Qze"], {
        guildName: Q.name
      }),
      onClick: () => {
        (0, A.u)(Q.id), es({
          action: "OPEN_VOICE_GUILD"
        }), null == ee || ee()
      }
    });
    if ((0, d.A)(i)) return (0, r.jsx)(m.O, {
      href: i.details_url,
      children: (0, r.jsx)(k.A, {
        variant: "text-xs/normal",
        text: i.details
      })
    });
    if ((0, I.Cy)(i)) {
      var e;
      return (0, r.jsx)(k.A, {
        variant: "text-xs/normal",
        text: null == i || null == (e = i.assets) ? true : e.small_text
      })
    }
    return (0, r.jsx)(m.O, {
      href: i.state_url,
      children: (0, r.jsx)(k.A, {
        variant: "text-xs/normal",
        text: i.state
      })
    })
  }, eE = () => {
    var e, t, n, a, o, s, l, c;
    if (i.type === H.$pd.WATCHING) return null;
    if ((0, d.A)(i)) return ey();
    if ((0, I.Cy)(i) && (null == (e = i.party) ? true : e.size) != null && (null == (t = i.party) ? true : t.size.length) >= 2) {
      let e = K.intl.formatToPlainString(K.t["JC/3xw"], {
        numSpeakers: null == (a = i.party) ? true : a.size[0],
        numListeners: (null == (o = i.party) ? true : o.size[1]) - (null == (s = i.party) ? true : s.size[0])
      });
      return (0, r.jsx)(k.A, {
        variant: "text-xs/normal",
        text: e
      })
    }
    return (null == (n = i.assets) ? true : n.large_text) != null ? (0, r.jsx)(m.O, {
      href: null == (l = i.assets) ? true : l.large_url,
      children: (0, r.jsx)(k.A, {
        text: null == (c = i.assets) ? true : c.large_text,
        variant: "text-xs/normal"
      })
    }) : null
  }, ey = () => {
    var e, t, n, a;
    return (null == (e = i.party) ? true : e.size) == null && i.application_id === Y.I4 ? (0, r.jsxs)("div", {
      className: z.CI,
      children: [(0, r.jsx)(m.O, {
        href: i.state_url,
        children: (0, r.jsx)(k.A, {
          variant: "text-xs/normal",
          text: i.state
        })
      }), (0, r.jsx)(k.A, {
        variant: "text-xs/normal",
        text: K.intl.formatToPlainString(K.t["u//9By"], {
          count: "0",
          max: null != (a = null == q ? true : q.getMaxParticipants()) ? a : 0
        })
      })]
    }) : (0, u.A)(i) && (null == (t = i.party) ? true : t.size) != null && (null == (n = i.party) ? true : n.size.length) >= 2 ? (0, r.jsxs)("div", {
      className: z.CI,
      children: [(0, r.jsx)(m.O, {
        href: i.state_url,
        children: (0, r.jsx)(k.A, {
          variant: "text-xs/normal",
          text: i.state
        })
      }), (0, r.jsx)(k.A, {
        variant: "text-xs/normal",
        text: 0 === i.party.size[1] ? K.intl.formatToPlainString(K.t.IM4J4e, {
          count: i.party.size[0]
        }) : K.intl.formatToPlainString(K.t["u//9By"], {
          count: i.party.size[0],
          max: i.party.size[1]
        })
      })]
    }) : null == i.party ? (0, r.jsx)(m.O, {
      href: i.state_url,
      children: (0, r.jsx)(k.A, {
        variant: "text-xs/normal",
        text: i.state
      })
    }) : null
  }, eb = () => {
    if (!(0, N.A)(i)) return null;
    let {
      start: e,
      end: t
    } = i.timestamps;
    return (0, r.jsx)(G.A, {
      start: e,
      end: t
    })
  }, eO = () => null == ep ? (0, r.jsxs)("div", {
    children: [em(), eg(), eE()]
  }) : (0, r.jsxs)(l.DUT, {
    className: z.sd,
    onClick: e => {
      es({
        action: "PRESS_TEXT"
      }), ep(e)
    },
    children: [em(), eg(), eE()]
  }), ev = () => null == Q || null == J ? null : (0, r.jsx)(U.A, {
    user: t,
    guild: Q,
    channel: J,
    onAction: es,
    onClose: ee
  }), eA = () => (0, r.jsx)(D.A, {
    containerClassName: z.o1,
    activity: i,
    user: t,
    onAction: es,
    onClose: ee,
    application: q
  });
  return (0, r.jsx)(_.f5, {
    value: ei,
    children: (0, r.jsxs)(M.A, {
      ref: el,
      className: a()(z.Nr, $),
      onAction: es,
      onClose: ee,
      "aria-labelledby": eu ? "".concat(er, " ").concat(en) : en,
      children: [(0, r.jsx)(j.A, X(Z({
        textId: er,
        tags: e_()
      }, ec), {
        contextMenu: (0, r.jsx)(F.A, {
          display: "live",
          user: t,
          activity: i,
          entry: eo,
          onClose: ee,
          appContext: et
        })
      })), (0, r.jsx)(v.A, {
        applicationId: null == q ? true : q.id,
        questContent: o.u.USER_PROFILE_ACTIVITY,
        children: e => (0, r.jsxs)("div", {
          className: z.rf,
          ref: e,
          children: [(0, r.jsxs)("div", {
            className: z.Qs,
            children: [!t.bot && eh(), (0, r.jsxs)("div", {
              className: z.zH,
              children: [eO(), !t.bot && (0, r.jsx)(L.A, {
                user: t,
                activity: i,
                className: z.jp
              }), eb(), ea === W.d.MODAL_V2 && eA()]
            }), ea === W.d.MODAL && eA()]
          }), ev()]
        })
      }), ea !== W.d.MODAL && ea !== W.d.MODAL_V2 && (0, r.jsxs)(r.Fragment, {
        children: [eA(), (0, r.jsx)(P.A, {
          className: z.AB,
          userId: t.id,
          activityApplication: q,
          onClickViewMore: e => {
            e.stopPropagation(), es({
              action: "PRESS_APPLICATION_WIDGET_PREVIEW_VIEW_MORE"
            }), null == ee || ee(), (0, w.openUserProfileModal)({
              userId: t.id,
              tabSection: B.RP.WIDGETS
            })
          }
        })]
      }), (0, r.jsx)(x.A, {
        applicationId: null == q ? true : q.id,
        onAction: es,
        onClose: ee,
        activity: i
      })]
    })
  })
}