/** Chunk was on web.js **/
/** chunk id: 346013, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk831209 = require("./831209.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk367907 = require("./367907.js"),
  Chunk676742 = require("./676742.js"),
  Chunk1585 = require("./1585.jsx"),
  Chunk841762 = require("./841762.jsx"),
  Chunk336197 = require("./336197.js"),
  Chunk406432 = require("./406432.js"),
  Chunk348238 = require("./348238.jsx"),
  Chunk38267 = require("./38267.js"),
  Chunk884902 = require("./884902.js"),
  Chunk670188 = require("./670188.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk900849 = require("./900849.js"),
  Chunk506071 = require("./506071.js"),
  Chunk495114 = require("./495114.jsx"),
  Chunk170140 = require("./170140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk823708 = require("./823708.js"),
  Chunk527455 = require("./527455.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G(e) {
  var t, n, a, M;
  let {
    embedUrl: j,
    message: G,
    channel: B
  } = e, Z = i.useRef(null), F = i.useRef(null), V = (0, R.J)(j, G), {
    setPopout: H
  } = (0, b.Z)(G.id, w.d$), Y = (0, E.qo)(G, B, H, true), W = v.QK.useSetting(), K = (0, C.n)(), [z, q] = i.useState(false), [X, Q] = i.useState((null == V ? true : V.coverImage) == null), J = (0, c.e7)([I.ZP, T.default], () => {
    var e;
    return I.ZP.isMember(null == V ? true : V.guildId, null == (e = T.default.getCurrentUser()) ? true : e.id)
  }, [V]), $ = (0, c.e7)([I.ZP], () => (null == V ? true : V.authorId) != null ? I.ZP.getMember(V.guildId, V.authorId) : null), ee = (0, _.Z)((null == $ ? true : $.avatarDecoration) != null ? null == $ ? true : $.avatarDecoration : null == V || null == (t = V.user) ? true : t.avatarDecoration), [et, en, er] = i.useMemo(() => {
    var e, t;
    return [null != (e = null == $ ? true : $.colorString) ? e : "inherit", null != (t = null == $ ? true : $.colorStrings) ? t : null, null == $ ? true : $.colorRoleId]
  }, [$]), ei = (0, y.X7)(null == $ ? true : $.guildId, null != (a = null == V ? true : V.authorId) ? a : true, en), {
    reducedMotion: ea
  } = i.useContext(u.Sfi), [eo, es] = i.useState(false), el = i.useCallback(() => {
    q(true)
  }, [q]), ec = i.useCallback(() => {
    q(false)
  }, [q]), eu = i.useCallback(async () => {
    null != V && ((0, f.yw)(P.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
      media_post_id: V.threadId,
      channel_id: B.id,
      can_access: V.canAccess,
      is_member: J
    }), V.canAccess ? (0, m.Z)(P.Z5c.CHANNEL(V.guildId, V.threadId, V.messageId)) : J ? (0, m.Z)(P.Z5c.CHANNEL(V.guildId, V.parentChannelId)) : await A.Ub(V.guildId, {}, {
      channelId: V.parentChannelId
    }))
  }, [V, B, J]);
  if (null == V) return null;
  let ed = (0, S.NZ)({
      avatarDecoration: ee,
      size: (0, p.y9)(u.EFr.SIZE_40),
      canAnimate: eo
    }),
    ef = null == (n = V.user) ? true : n.getAvatarURL(V.guildId, 40, eo),
    e_ = () => {
      ea.enabled || es(e => !e)
    },
    ep = () => null == V.authorId ? (0, r.jsx)(u.rz2, {
      name: V.authorName,
      colorString: et,
      colorStrings: ei,
      className: L.authorName
    }) : (0, r.jsx)(O.Z, {
      targetElementRef: Z,
      userId: V.authorId,
      guildId: V.guildId,
      channelId: B.id,
      messageId: G.id,
      roleId: er,
      avatarUrl: V.avatarUrl,
      newAnalyticsLocations: [d.Z.USERNAME],
      children: e => (0, r.jsx)(u.rz2, U(k({}, e), {
        ref: Z,
        name: V.authorName,
        colorString: et,
        colorStrings: ei,
        className: L.authorName
      }))
    }, (0, s.Z)()),
    eh = V.coverImage,
    em = null != eh && (0, g.d$)(eh),
    eg = K && (W || z);
  return (0, r.jsxs)("div", {
    className: L.postPreviewContainer,
    children: [(0, r.jsxs)("div", {
      className: L.thumbnailContainer,
      onMouseEnter: el,
      onMouseLeave: ec,
      children: [!X && (true === V.shouldShowBlurredThumbnailImage ? (0, r.jsx)("img", {
        src: x,
        alt: D.intl.string(D.t.rIbh8H),
        className: o()(L.thumbnail, {
          [L.spoiler]: V.shouldSpoiler
        }),
        onContextMenu: Y,
        onError: () => Q(true)
      }) : (0, r.jsx)(h.Z, {
        src: !eg && em ? "".concat(eh, "?format=png") : eh,
        backgroundSrc: "".concat(eh, "?format=png"),
        alt: D.intl.string(D.t.rIbh8H),
        aspectRatio: 16 / 9,
        className: o()(L.thumbnail, {
          [L.spoiler]: V.shouldSpoiler
        }),
        imageChildClassName: L.thumbnailImage,
        onContextMenu: Y,
        onError: () => Q(true)
      })), null != V.coverImageOverlayText && (0, r.jsx)(u.P3F, {
        onClick: eu,
        children: (0, r.jsx)("div", {
          className: L.thumbnailOverlay,
          children: (0, r.jsxs)("div", {
            className: L.thumbnailOverlayCta,
            children: [(0, r.jsx)(N.Z, {
              color: l.Z.WHITE
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/semibold",
              color: "always-white",
              children: V.coverImageOverlayText
            })]
          })
        })
      })]
    }), (0, r.jsxs)("div", {
      className: L.descriptionContainer,
      children: [(0, r.jsxs)("div", {
        className: L.descriptionHeader,
        children: [(0, r.jsx)(u.Text, {
          variant: "text-md/semibold",
          color: "text-default",
          className: L.descriptionHeaderText,
          children: V.title
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: o()(L.descriptionHeaderText, L.descriptionSubtitle),
          children: V.subtitle
        })]
      }), (0, r.jsxs)("div", {
        className: L.descriptionFooter,
        children: [null != V.authorId && null != ef && (0, r.jsx)(O.Z, {
          targetElementRef: F,
          userId: V.authorId,
          guildId: V.guildId,
          channelId: B.id,
          messageId: G.id,
          roleId: er,
          avatarUrl: V.avatarUrl,
          newAnalyticsLocations: [d.Z.AVATAR],
          spacing: 12,
          children: e => (0, r.jsx)("div", {
            onMouseEnter: e_,
            onMouseLeave: e_,
            children: (0, r.jsx)(u.qEK, U(k({}, e), {
              ref: F,
              size: u.EFr.SIZE_40,
              src: ef,
              "aria-label": D.intl.string(D.t.KXz3XB),
              avatarDecoration: ed
            }))
          })
        }), (0, r.jsxs)("div", {
          className: L.descriptionFooterContainer,
          children: [(0, r.jsxs)("div", {
            className: L.descriptionFooterChannelName,
            children: [null != V.channelName && (0, r.jsx)(u.EAQ, {
              size: "md",
              color: "currentColor",
              className: L.mediaChannelIcon
            }), (0, r.jsx)(u.P3F, {
              onClick: eu,
              className: L.channelName,
              children: (0, r.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: null != (M = V.channelName) ? M : V.guildName
              })
            })]
          }), null != V.authorName && (0, r.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            className: L.descriptionFooterAuthorContainer,
            children: D.intl.format(D.t.voIDKa, {
              authorName: V.authorName,
              authorNameHook: ep
            })
          })]
        }), V.canAccess ? (0, r.jsx)(u.Button, {
          variant: "primary",
          onClick: eu,
          text: V.ctaText
        }) : (0, r.jsx)(u.Button, {
          onClick: eu,
          variant: "primary",
          text: V.ctaText
        })]
      })]
    })]
  })
}