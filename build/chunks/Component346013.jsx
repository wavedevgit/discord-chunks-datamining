/** Chunk was on web.js **/
/** chunk id: 346013, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk399606 = require("./399606.js"),
  Chunk692547 = require("./692547.js"),
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
    channel: Z
  } = e, B = i.useRef(null), F = i.useRef(null), V = (0, P.J)(k, G), {
    setPopout: H
  } = (0, b.Z)(G.id, w.d$), Y = (0, E.qo)(G, Z, H, true), W = v.QK.useSetting(), K = (0, C.n)(), [z, q] = i.useState(false), [X, Q] = i.useState((null == V ? true : V.coverImage) == null), J = (0, l.e7)([S.ZP, I.default], () => {
    var e;
    return S.ZP.isMember(null == V ? true : V.guildId, null == (e = I.default.getCurrentUser()) ? true : e.id)
  }, [V]), $ = (0, l.e7)([S.ZP], () => (null == V ? true : V.authorId) != null ? S.ZP.getMember(V.guildId, V.authorId) : null), ee = (0, p.Z)((null == $ ? true : $.avatarDecoration) != null ? null == $ ? true : $.avatarDecoration : null == V || null == (t = V.user) ? true : t.avatarDecoration), [et, en, er] = i.useMemo(() => {
    var e, t;
    return [null != (e = null == $ ? true : $.colorString) ? e : "inherit", null != (t = null == $ ? true : $.colorStrings) ? t : null, null == $ ? true : $.colorRoleId]
  }, [$]), ei = (0, y.X7)(null == $ ? true : $.guildId, null != (a = null == V ? true : V.authorId) ? a : true, en), {
    reducedMotion: ea
  } = i.useContext(u.Sfi), [eo, es] = i.useState(false), el = i.useCallback(() => {
    q(true)
  }, [q]), ec = i.useCallback(() => {
    q(false)
  }, [q]), eu = i.useCallback(async () => {
    null != V && ((0, f.yw)(R.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
      media_post_id: V.threadId,
      channel_id: Z.id,
      can_access: V.canAccess,
      is_member: J
    }), V.canAccess ? (0, h.Z)(R.Z5c.CHANNEL(V.guildId, V.threadId, V.messageId)) : J ? (0, h.Z)(R.Z5c.CHANNEL(V.guildId, V.parentChannelId)) : await A.Ub(V.guildId, {}, {
      channelId: V.parentChannelId
    }))
  }, [V, Z, J]);
  if (null == V) return null;
  let ed = (0, T.NZ)({
      avatarDecoration: ee,
      size: (0, _.y9)(u.EFr.SIZE_40),
      canAnimate: eo
    }),
    ef = null == (n = V.user) ? true : n.getAvatarURL(V.guildId, 40, eo),
    ep = () => {
      ea.enabled || es(e => !e)
    },
    e_ = () => null == V.authorId ? (0, r.jsx)(u.rz2, {
      name: V.authorName,
      colorString: et,
      colorStrings: ei,
      className: x.authorName
    }) : (0, r.jsx)(O.Z, {
      targetElementRef: B,
      userId: V.authorId,
      guildId: V.guildId,
      channelId: Z.id,
      messageId: G.id,
      roleId: er,
      avatarUrl: V.avatarUrl,
      newAnalyticsLocations: [d.Z.USERNAME],
      children: e => (0, r.jsx)(u.rz2, U(M({}, e), {
        ref: B,
        name: V.authorName,
        colorString: et,
        colorStrings: ei,
        className: x.authorName
      }))
    }, (0, s.Z)()),
    em = V.coverImage,
    eh = null != em && (0, g.d$)(em),
    eg = K && (W || z);
  return (0, r.jsxs)("div", {
    className: x.postPreviewContainer,
    children: [(0, r.jsxs)("div", {
      className: x.thumbnailContainer,
      onMouseEnter: el,
      onMouseLeave: ec,
      children: [!X && (true === V.shouldShowBlurredThumbnailImage ? (0, r.jsx)("img", {
        src: L,
        alt: D.intl.string(D.t.rIbh8H),
        className: o()(x.thumbnail, {
          [x.spoiler]: V.shouldSpoiler
        }),
        onContextMenu: Y,
        onError: () => Q(true)
      }) : (0, r.jsx)(m.Z, {
        src: !eg && eh ? "".concat(em, "?format=png") : em,
        backgroundSrc: "".concat(em, "?format=png"),
        alt: D.intl.string(D.t.rIbh8H),
        aspectRatio: 16 / 9,
        className: o()(x.thumbnail, {
          [x.spoiler]: V.shouldSpoiler
        }),
        imageChildClassName: x.thumbnailImage,
        onContextMenu: Y,
        onError: () => Q(true)
      })), null != V.coverImageOverlayText && (0, r.jsx)(u.P3F, {
        onClick: eu,
        children: (0, r.jsx)("div", {
          className: x.thumbnailOverlay,
          children: (0, r.jsxs)("div", {
            className: x.thumbnailOverlayCta,
            children: [(0, r.jsx)(N.Z, {
              color: c.Z.colors.WHITE.css
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/semibold",
              color: "always-white",
              children: V.coverImageOverlayText
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
          children: V.title
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: o()(x.descriptionHeaderText, x.descriptionSubtitle),
          children: V.subtitle
        })]
      }), (0, r.jsxs)("div", {
        className: x.descriptionFooter,
        children: [null != V.authorId && null != ef && (0, r.jsx)(O.Z, {
          targetElementRef: F,
          userId: V.authorId,
          guildId: V.guildId,
          channelId: Z.id,
          messageId: G.id,
          roleId: er,
          avatarUrl: V.avatarUrl,
          newAnalyticsLocations: [d.Z.AVATAR],
          spacing: 12,
          children: e => (0, r.jsx)("div", {
            onMouseEnter: ep,
            onMouseLeave: ep,
            children: (0, r.jsx)(u.qEK, U(M({}, e), {
              ref: F,
              size: u.EFr.SIZE_40,
              src: ef,
              "aria-label": D.intl.string(D.t.KXz3XB),
              avatarDecoration: ed
            }))
          })
        }), (0, r.jsxs)("div", {
          className: x.descriptionFooterContainer,
          children: [(0, r.jsxs)("div", {
            className: x.descriptionFooterChannelName,
            children: [null != V.channelName && (0, r.jsx)(u.EAQ, {
              size: "md",
              color: "currentColor",
              className: x.mediaChannelIcon
            }), (0, r.jsx)(u.P3F, {
              onClick: eu,
              className: x.channelName,
              children: (0, r.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: null != (j = V.channelName) ? j : V.guildName
              })
            })]
          }), null != V.authorName && (0, r.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            className: x.descriptionFooterAuthorContainer,
            children: D.intl.format(D.t.voIDKa, {
              authorName: V.authorName,
              authorNameHook: e_
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