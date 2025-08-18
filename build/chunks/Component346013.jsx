/** Chunk was on 91173 **/
/** chunk id: 346013, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e) {
  var t, n, l, M;
  let {
    embedUrl: k,
    message: U,
    channel: F
  } = e, B = i.useRef(null), G = i.useRef(null), H = (0, P.J)(k, U), {
    setPopout: V
  } = (0, E.Z)(U.id, A.d$), z = (0, b.qo)(U, F, V, true), W = O.QK.useSetting(), Y = (0, S.n)(), [K, X] = i.useState(false), [q, Q] = i.useState((null == H ? true : H.coverImage) == null), J = (0, c.e7)([y.ZP, x.default], () => {
    var e;
    return y.ZP.isMember(null == H ? true : H.guildId, null == (e = x.default.getCurrentUser()) ? true : e.id)
  }, [H]), $ = (0, c.e7)([y.ZP], () => (null == H ? true : H.authorId) != null ? y.ZP.getMember(H.guildId, H.authorId) : null), ee = (0, m.Z)((null == $ ? true : $.avatarDecoration) != null ? null == $ ? true : $.avatarDecoration : null == H || null == (t = H.user) ? true : t.avatarDecoration), [et, en, er] = i.useMemo(() => {
    var e, t;
    return [null != (e = null == $ ? true : $.colorString) ? e : "inherit", null != (t = null == $ ? true : $.colorStrings) ? t : null, null == $ ? true : $.colorRoleId]
  }, [$]), ei = (0, C.X7)(null == $ ? true : $.guildId, null != (l = null == H ? true : H.authorId) ? l : true, en), {
    reducedMotion: el
  } = i.useContext(u.Sfi), [ea, eo] = i.useState(false), es = i.useCallback(() => {
    X(true)
  }, [X]), ec = i.useCallback(() => {
    X(false)
  }, [X]), eu = i.useCallback(async () => {
    null != H && ((0, p.yw)(N.rMx.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
      media_post_id: H.threadId,
      channel_id: F.id,
      can_access: H.canAccess,
      is_member: J
    }), H.canAccess ? (0, g.Z)(N.Z5c.CHANNEL(H.guildId, H.threadId, H.messageId)) : J ? (0, g.Z)(N.Z5c.CHANNEL(H.guildId, H.parentChannelId)) : await I.Ub(H.guildId, {}, {
      channelId: H.parentChannelId
    }))
  }, [H, F, J]);
  if (null == H) return null;
  let ed = (0, j.NZ)({
      avatarDecoration: ee,
      size: (0, f.y9)(u.EFr.SIZE_40),
      canAnimate: ea
    }),
    ep = null == (n = H.user) ? true : n.getAvatarURL(H.guildId, 40, ea),
    em = () => {
      el.enabled || eo(e => !e)
    },
    ef = H.coverImage,
    e_ = null != ef && (0, h.d$)(ef);
  return (0, r.jsxs)("div", {
    className: Z.postPreviewContainer,
    children: [(0, r.jsxs)("div", {
      className: Z.thumbnailContainer,
      onMouseEnter: es,
      onMouseLeave: ec,
      children: [!q && (true === H.shouldShowBlurredThumbnailImage ? (0, r.jsx)("img", {
        src: R,
        alt: w.intl.string(w.t.rIbh8P),
        className: a()(Z.thumbnail, {
          [Z.spoiler]: H.shouldSpoiler
        }),
        onContextMenu: z,
        onError: () => Q(true)
      }) : (0, r.jsx)(_.Z, {
        src: !(Y && (W || K)) && e_ ? "".concat(ef, "?format=png") : ef,
        backgroundSrc: "".concat(ef, "?format=png"),
        alt: w.intl.string(w.t.rIbh8P),
        aspectRatio: 16 / 9,
        className: a()(Z.thumbnail, {
          [Z.spoiler]: H.shouldSpoiler
        }),
        imageChildClassName: Z.thumbnailImage,
        onContextMenu: z,
        onError: () => Q(true)
      })), null != H.coverImageOverlayText && (0, r.jsx)(u.P3F, {
        onClick: eu,
        children: (0, r.jsx)("div", {
          className: Z.thumbnailOverlay,
          children: (0, r.jsxs)("div", {
            className: Z.thumbnailOverlayCta,
            children: [(0, r.jsx)(T.Z, {
              color: s.Z.WHITE
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/semibold",
              color: "always-white",
              children: H.coverImageOverlayText
            })]
          })
        })
      })]
    }), (0, r.jsxs)("div", {
      className: Z.descriptionContainer,
      children: [(0, r.jsxs)("div", {
        className: Z.descriptionHeader,
        children: [(0, r.jsx)(u.Text, {
          variant: "text-md/semibold",
          color: "text-default",
          className: Z.descriptionHeaderText,
          children: H.title
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: a()(Z.descriptionHeaderText, Z.descriptionSubtitle),
          children: H.subtitle
        })]
      }), (0, r.jsxs)("div", {
        className: Z.descriptionFooter,
        children: [null != H.authorId && null != ep && (0, r.jsx)(v.Z, {
          targetElementRef: G,
          userId: H.authorId,
          guildId: H.guildId,
          channelId: F.id,
          messageId: U.id,
          roleId: er,
          avatarUrl: H.avatarUrl,
          newAnalyticsLocations: [d.Z.AVATAR],
          spacing: 12,
          children: e => (0, r.jsx)("div", {
            onMouseEnter: em,
            onMouseLeave: em,
            children: (0, r.jsx)(u.qEK, D(L({}, e), {
              ref: G,
              size: u.EFr.SIZE_40,
              src: ep,
              "aria-label": w.intl.string(w.t.KXz3XF),
              avatarDecoration: ed
            }))
          })
        }), (0, r.jsxs)("div", {
          className: Z.descriptionFooterContainer,
          children: [(0, r.jsxs)("div", {
            className: Z.descriptionFooterChannelName,
            children: [null != H.channelName && (0, r.jsx)(u.EAQ, {
              size: "md",
              color: "currentColor",
              className: Z.mediaChannelIcon
            }), (0, r.jsx)(u.P3F, {
              onClick: eu,
              className: Z.channelName,
              children: (0, r.jsx)(u.X6q, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: null != (M = H.channelName) ? M : H.guildName
              })
            })]
          }), null != H.authorName && (0, r.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            className: Z.descriptionFooterAuthorContainer,
            children: w.intl.format(w.t.voIDKS, {
              authorName: H.authorName,
              authorNameHook: () => null == H.authorId ? (0, r.jsx)(u.rz2, {
                name: H.authorName,
                colorString: et,
                colorStrings: ei,
                className: Z.authorName
              }) : (0, r.jsx)(v.Z, {
                targetElementRef: B,
                userId: H.authorId,
                guildId: H.guildId,
                channelId: F.id,
                messageId: U.id,
                roleId: er,
                avatarUrl: H.avatarUrl,
                newAnalyticsLocations: [d.Z.USERNAME],
                children: e => (0, r.jsx)(u.rz2, D(L({}, e), {
                  ref: B,
                  name: H.authorName,
                  colorString: et,
                  colorStrings: ei,
                  className: Z.authorName
                }))
              }, (0, o.Z)())
            })
          })]
        }), H.canAccess ? (0, r.jsx)(u.zxk, {
          variant: "primary",
          onClick: eu,
          text: H.ctaText
        }) : (0, r.jsx)(u.zxk, {
          onClick: eu,
          variant: "primary",
          text: H.ctaText
        })]
      })]
    })]
  })
}