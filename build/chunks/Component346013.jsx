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

function j(e, t, n) {
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
      j(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G(e) {
  var t, n, a, j;
  let {
    embedUrl: M,
    message: G,
    channel: B
  } = e, Z = i.useRef(null), V = i.useRef(null), F = (0, R.J)(M, G), {
    setPopout: H
  } = (0, b.Z)(G.id, w.d$), Y = (0, E.qo)(G, B, H, true), W = v.QK.useSetting(), K = (0, C.n)(), [z, q] = i.useState(false), [X, Q] = i.useState((null == F ? true : F.coverImage) == null), J = (0, c.e7)([I.ZP, T.default], () => {
    var e;
    return I.ZP.isMember(null == F ? true : F.guildId, null == (e = T.default.getCurrentUser()) ? true : e.id)
  }, [F]), $ = (0, c.e7)([I.ZP], () => (null == F ? true : F.authorId) != null ? I.ZP.getMember(F.guildId, F.authorId) : null), ee = (0, _.Z)((null == $ ? true : $.avatarDecoration) != null ? null == $ ? true : $.avatarDecoration : null == F || null == (t = F.user) ? true : t.avatarDecoration), [et, en, er] = i.useMemo(() => {
    var e, t;
    return [null != (e = null == $ ? true : $.colorString) ? e : "inherit", null != (t = null == $ ? true : $.colorStrings) ? t : null, null == $ ? true : $.colorRoleId]
  }, [$]), ei = (0, y.X7)(null == $ ? true : $.guildId, null != (a = null == F ? true : F.authorId) ? a : true, en), {
    reducedMotion: ea
  } = i.useContext(u.Sfi), [eo, es] = i.useState(false), el = i.useCallback(() => {
    q(true)
  }, [q]), ec = i.useCallback(() => {
    q(false)
  }, [q]), eu = i.useCallback(async () => {
    null != F && ((0, f.yw)(P.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
      media_post_id: F.threadId,
      channel_id: B.id,
      can_access: F.canAccess,
      is_member: J
    }), F.canAccess ? (0, m.Z)(P.Z5c.CHANNEL(F.guildId, F.threadId, F.messageId)) : J ? (0, m.Z)(P.Z5c.CHANNEL(F.guildId, F.parentChannelId)) : await A.Ub(F.guildId, {}, {
      channelId: F.parentChannelId
    }))
  }, [F, B, J]);
  if (null == F) return null;
  let ed = (0, S.NZ)({
      avatarDecoration: ee,
      size: (0, p.y9)(u.EFr.SIZE_40),
      canAnimate: eo
    }),
    ef = null == (n = F.user) ? true : n.getAvatarURL(F.guildId, 40, eo),
    e_ = () => {
      ea.enabled || es(e => !e)
    },
    ep = () => null == F.authorId ? (0, r.jsx)(u.rz2, {
      name: F.authorName,
      colorString: et,
      colorStrings: ei,
      className: x.authorName
    }) : (0, r.jsx)(O.Z, {
      targetElementRef: Z,
      userId: F.authorId,
      guildId: F.guildId,
      channelId: B.id,
      messageId: G.id,
      roleId: er,
      avatarUrl: F.avatarUrl,
      newAnalyticsLocations: [d.Z.USERNAME],
      children: e => (0, r.jsx)(u.rz2, U(k({}, e), {
        ref: Z,
        name: F.authorName,
        colorString: et,
        colorStrings: ei,
        className: x.authorName
      }))
    }, (0, s.Z)()),
    eh = F.coverImage,
    em = null != eh && (0, g.d$)(eh),
    eg = K && (W || z);
  return (0, r.jsxs)("div", {
    className: x.postPreviewContainer,
    children: [(0, r.jsxs)("div", {
      className: x.thumbnailContainer,
      onMouseEnter: el,
      onMouseLeave: ec,
      children: [!X && (true === F.shouldShowBlurredThumbnailImage ? (0, r.jsx)("img", {
        src: L,
        alt: D.intl.string(D.t.rIbh8P),
        className: o()(x.thumbnail, {
          [x.spoiler]: F.shouldSpoiler
        }),
        onContextMenu: Y,
        onError: () => Q(true)
      }) : (0, r.jsx)(h.Z, {
        src: !eg && em ? "".concat(eh, "?format=png") : eh,
        backgroundSrc: "".concat(eh, "?format=png"),
        alt: D.intl.string(D.t.rIbh8P),
        aspectRatio: 16 / 9,
        className: o()(x.thumbnail, {
          [x.spoiler]: F.shouldSpoiler
        }),
        imageChildClassName: x.thumbnailImage,
        onContextMenu: Y,
        onError: () => Q(true)
      })), null != F.coverImageOverlayText && (0, r.jsx)(u.P3F, {
        onClick: eu,
        children: (0, r.jsx)("div", {
          className: x.thumbnailOverlay,
          children: (0, r.jsxs)("div", {
            className: x.thumbnailOverlayCta,
            children: [(0, r.jsx)(N.Z, {
              color: l.Z.WHITE
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/semibold",
              color: "always-white",
              children: F.coverImageOverlayText
            })]
          })
        })
      })]
    }), (0, r.jsxs)("div", {
      className: x.descriptionContainer,
      children: [(0, r.jsxs)("div", {
        className: x.descriptionHeader,
        children: [(0, r.jsx)(u.Text, {
          variant: "text-md/semibold",
          color: "text-default",
          className: x.descriptionHeaderText,
          children: F.title
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: o()(x.descriptionHeaderText, x.descriptionSubtitle),
          children: F.subtitle
        })]
      }), (0, r.jsxs)("div", {
        className: x.descriptionFooter,
        children: [null != F.authorId && null != ef && (0, r.jsx)(O.Z, {
          targetElementRef: V,
          userId: F.authorId,
          guildId: F.guildId,
          channelId: B.id,
          messageId: G.id,
          roleId: er,
          avatarUrl: F.avatarUrl,
          newAnalyticsLocations: [d.Z.AVATAR],
          spacing: 12,
          children: e => (0, r.jsx)("div", {
            onMouseEnter: e_,
            onMouseLeave: e_,
            children: (0, r.jsx)(u.qEK, U(k({}, e), {
              ref: V,
              size: u.EFr.SIZE_40,
              src: ef,
              "aria-label": D.intl.string(D.t.KXz3XF),
              avatarDecoration: ed
            }))
          })
        }), (0, r.jsxs)("div", {
          className: x.descriptionFooterContainer,
          children: [(0, r.jsxs)("div", {
            className: x.descriptionFooterChannelName,
            children: [null != F.channelName && (0, r.jsx)(u.EAQ, {
              size: "md",
              color: "currentColor",
              className: x.mediaChannelIcon
            }), (0, r.jsx)(u.P3F, {
              onClick: eu,
              className: x.channelName,
              children: (0, r.jsx)(u.X6q, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: null != (j = F.channelName) ? j : F.guildName
              })
            })]
          }), null != F.authorName && (0, r.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            className: x.descriptionFooterAuthorContainer,
            children: D.intl.format(D.t.voIDKS, {
              authorName: F.authorName,
              authorNameHook: ep
            })
          })]
        }), F.canAccess ? (0, r.jsx)(u.zxk, {
          variant: "primary",
          onClick: eu,
          text: F.ctaText
        }) : (0, r.jsx)(u.zxk, {
          onClick: eu,
          variant: "primary",
          text: F.ctaText
        })]
      })]
    })]
  })
}