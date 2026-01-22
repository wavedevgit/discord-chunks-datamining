/** Chunk was on web.js **/
/** chunk id: 480191, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => G
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk835245 = require("./835245.js"),
  Chunk417597 = require("./417597.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk58149 = require("./58149.js"),
  Chunk325445 = require("./325445.js"),
  Chunk954921 = require("./954921.jsx"),
  Chunk234914 = require("./234914.jsx"),
  Chunk22007 = require("./22007.js"),
  Chunk77350 = require("./77350.js"),
  Chunk112758 = require("./112758.jsx"),
  Chunk754459 = require("./754459.js"),
  Chunk967144 = require("./967144.js"),
  Chunk342296 = require("./342296.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk449054 = require("./449054.js"),
  Chunk218394 = require("./218394.js"),
  Chunk19178 = require("./19178.jsx"),
  Chunk650724 = require("./650724.js"),
  Chunk652215 = require("./652215.js"),
  Chunk381941 = require("./381941.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk780247 = require("./780247.js"),
  Chunk278664 = require("./278664.js");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
    })
  }
  return e
}

function k(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : k(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G(e) {
  var t, n, a, j;
  let {
    embedUrl: k,
    message: G,
    channel: V
  } = e, F = i.useRef(null), B = i.useRef(null), H = (0, R.D)(k, G), {
    setPopout: Y
  } = (0, b.A)(G.id, P.Fd), W = (0, E.VL)(G, V, Y, true), K = A.kt.useSetting(), z = (0, C.j)(), [q, X] = i.useState(false), [Z, Q] = i.useState((null == H ? true : H.coverImage) == null), $ = (0, l.bG)([v.Ay, S.default], () => {
    var e;
    return v.Ay.isMember(null == H ? true : H.guildId, null == (e = S.default.getCurrentUser()) ? true : e.id)
  }, [H]), J = (0, l.bG)([v.Ay], () => (null == H ? true : H.authorId) != null ? v.Ay.getMember(H.guildId, H.authorId) : null), ee = (0, p.A)((null == J ? true : J.avatarDecoration) != null ? null == J ? true : J.avatarDecoration : null == H || null == (a = H.user) ? true : a.avatarDecoration), [et, en, er] = i.useMemo(() => {
    var e, t;
    return [null != (e = null == J ? true : J.colorString) ? e : "inherit", null != (t = null == J ? true : J.colorStrings) ? t : null, null == J ? true : J.colorRoleId]
  }, [J]), ei = (0, y.gn)(null == J ? true : J.guildId, null != (t = null == H ? true : H.authorId) ? t : true, en), {
    reducedMotion: ea
  } = i.useContext(u.CZY), [es, eo] = i.useState(false), el = i.useCallback(() => {
    X(true)
  }, [X]), ec = i.useCallback(() => {
    X(false)
  }, [X]), eu = i.useCallback(async () => {
    null != H && ((0, f.zV)(w.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
      media_post_id: H.threadId,
      channel_id: V.id,
      can_access: H.canAccess,
      is_member: $
    }), H.canAccess ? (0, m.A)(w.BVt.CHANNEL(H.guildId, H.threadId, H.messageId)) : $ ? (0, m.A)(w.BVt.CHANNEL(H.guildId, H.parentChannelId)) : await T.Z2(H.guildId, {}, {
      channelId: H.parentChannelId
    }))
  }, [H, V, $]);
  if (null == H) return null;
  let ed = (0, I.F_)({
      avatarDecoration: ee,
      size: (0, _.Te)(u._3J.SIZE_40),
      canAnimate: es
    }),
    ef = null == (j = H.user) ? true : j.getAvatarURL(H.guildId, 40, es),
    ep = () => {
      ea.enabled || eo(e => !e)
    },
    e_ = () => null == H.authorId ? (0, r.jsx)(u.V30, {
      name: H.authorName,
      colorString: et,
      colorStrings: ei,
      className: x.fh
    }) : (0, r.jsx)(O.A, {
      targetElementRef: F,
      userId: H.authorId,
      guildId: H.guildId,
      channelId: V.id,
      messageId: G.id,
      roleId: er,
      avatarUrl: H.avatarUrl,
      newAnalyticsLocations: [d.A.USERNAME],
      children: e => (0, r.jsx)(u.V30, U(M({}, e), {
        ref: F,
        name: H.authorName,
        colorString: et,
        colorStrings: ei,
        className: x.fh
      }))
    }, (0, o.A)()),
    eh = H.coverImage,
    em = null != eh && (0, g.ge)(eh),
    eg = z && (K || q);
  return (0, r.jsxs)("div", {
    className: x.wb,
    children: [(0, r.jsxs)("div", {
      className: x.iT,
      onMouseEnter: el,
      onMouseLeave: ec,
      children: [!Z && (true === H.shouldShowBlurredThumbnailImage ? (0, r.jsx)("img", {
        src: L,
        alt: D.intl.string(D.t.rIbh8H),
        className: s()(x.xn, {
          [x.p6]: H.shouldSpoiler
        }),
        onContextMenu: W,
        onError: () => Q(true)
      }) : (0, r.jsx)(h.A, {
        src: !eg && em ? "".concat(eh, "?format=png") : eh,
        backgroundSrc: "".concat(eh, "?format=png"),
        alt: D.intl.string(D.t.rIbh8H),
        aspectRatio: 16 / 9,
        className: s()(x.xn, {
          [x.p6]: H.shouldSpoiler
        }),
        imageChildClassName: x.q_,
        onContextMenu: W,
        onError: () => Q(true)
      })), null != H.coverImageOverlayText && (0, r.jsx)(u.DUT, {
        onClick: eu,
        children: (0, r.jsx)("div", {
          className: x.nx,
          children: (0, r.jsxs)("div", {
            className: x.BS,
            children: [(0, r.jsx)(N.A, {
              color: c.A.colors.WHITE.css
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/semibold",
              color: "always-white",
              children: H.coverImageOverlayText
            })]
          })
        })
      })]
    }), (0, r.jsxs)("div", {
      className: x.iQ,
      children: [(0, r.jsxs)("div", {
        className: x.OA,
        children: [(0, r.jsx)(u.Text, {
          variant: "text-md/semibold",
          color: "text-default",
          className: x.hF,
          children: H.title
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: s()(x.hF, x.Fq),
          children: H.subtitle
        })]
      }), (0, r.jsxs)("div", {
        className: x._5,
        children: [null != H.authorId && null != ef && (0, r.jsx)(O.A, {
          targetElementRef: B,
          userId: H.authorId,
          guildId: H.guildId,
          channelId: V.id,
          messageId: G.id,
          roleId: er,
          avatarUrl: H.avatarUrl,
          newAnalyticsLocations: [d.A.AVATAR],
          spacing: 12,
          children: e => (0, r.jsx)("div", {
            onMouseEnter: ep,
            onMouseLeave: ep,
            children: (0, r.jsx)(u.euF, U(M({}, e), {
              ref: B,
              size: u._3J.SIZE_40,
              src: ef,
              "aria-label": D.intl.string(D.t.KXz3XB),
              avatarDecoration: ed
            }))
          })
        }), (0, r.jsxs)("div", {
          className: x.Ny,
          children: [(0, r.jsxs)("div", {
            className: x.O9,
            children: [null != H.channelName && (0, r.jsx)(u.d2$, {
              size: "md",
              color: "currentColor",
              className: x.Xg
            }), (0, r.jsx)(u.DUT, {
              onClick: eu,
              className: x.HA,
              children: (0, r.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: null != (n = H.channelName) ? n : H.guildName
              })
            })]
          }), null != H.authorName && (0, r.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            className: x.wn,
            children: D.intl.format(D.t.voIDKa, {
              authorName: H.authorName,
              authorNameHook: e_
            })
          })]
        }), H.canAccess ? (0, r.jsx)(u.Button, {
          variant: "primary",
          onClick: eu,
          text: H.ctaText
        }) : (0, r.jsx)(u.Button, {
          onClick: eu,
          variant: "primary",
          text: H.ctaText
        })]
      })]
    })]
  })
}