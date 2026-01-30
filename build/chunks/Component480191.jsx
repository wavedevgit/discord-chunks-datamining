/** Chunk was on 64935 **/
/** chunk id: 480191, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => k
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function M(e, t) {
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

function k(e) {
  var t, n, l, k;
  let {
    embedUrl: U,
    message: G,
    channel: B
  } = e, F = i.useRef(null), H = i.useRef(null), V = (0, T.D)(U, G), {
    setPopout: z
  } = (0, A.A)(G.id, P.Fd), W = (0, b.VL)(G, B, z, true), K = x.kt.useSetting(), Y = (0, I.j)(), [q, J] = i.useState(false), [Q, X] = i.useState((null == V ? true : V.coverImage) == null), Z = (0, o.bG)([O.Ay, E.default], () => {
    var e;
    return O.Ay.isMember(null == V ? true : V.guildId, null == (e = E.default.getCurrentUser()) ? true : e.id)
  }, [V]), $ = (0, o.bG)([O.Ay], () => (null == V ? true : V.authorId) != null ? O.Ay.getMember(V.guildId, V.authorId) : null), ee = (0, m.A)((null == $ ? true : $.avatarDecoration) != null ? null == $ ? true : $.avatarDecoration : null == V || null == (l = V.user) ? true : l.avatarDecoration), [et, en, er] = i.useMemo(() => {
    var e, t;
    return [null != (e = null == $ ? true : $.colorString) ? e : "inherit", null != (t = null == $ ? true : $.colorStrings) ? t : null, null == $ ? true : $.colorRoleId]
  }, [$]), ei = (0, y.gn)(null == $ ? true : $.guildId, null != (t = null == V ? true : V.authorId) ? t : true, en), {
    reducedMotion: el
  } = i.useContext(u.CZY), [ea, es] = i.useState(false), eo = i.useCallback(() => {
    J(true)
  }, [J]), ec = i.useCallback(() => {
    J(false)
  }, [J]), eu = i.useCallback(async () => {
    null != V && ((0, p.zV)(N.HAw.MEDIA_POST_PREVIEW_EMBED_CLICKED, {
      media_post_id: V.threadId,
      channel_id: B.id,
      can_access: V.canAccess,
      is_member: Z
    }), V.canAccess ? (0, _.A)(N.BVt.CHANNEL(V.guildId, V.threadId, V.messageId)) : Z ? (0, _.A)(N.BVt.CHANNEL(V.guildId, V.parentChannelId)) : await C.Z2(V.guildId, {}, {
      channelId: V.parentChannelId
    }))
  }, [V, B, Z]);
  if (null == V) return null;
  let ed = (0, j.F_)({
      avatarDecoration: ee,
      size: (0, f.Te)(u._3J.SIZE_40),
      canAnimate: ea
    }),
    ep = null == (k = V.user) ? true : k.getAvatarURL(V.guildId, 40, ea),
    em = () => {
      el.enabled || es(e => !e)
    },
    ef = V.coverImage,
    eg = null != ef && (0, h.ge)(ef);
  return (0, r.jsxs)("div", {
    className: R.wb,
    children: [(0, r.jsxs)("div", {
      className: R.iT,
      onMouseEnter: eo,
      onMouseLeave: ec,
      children: [!Q && (true === V.shouldShowBlurredThumbnailImage ? (0, r.jsx)("img", {
        src: D,
        alt: w.intl.string(w.t.rIbh8H),
        className: a()(R.xn, {
          [R.p6]: V.shouldSpoiler
        }),
        onContextMenu: W,
        onError: () => X(true)
      }) : (0, r.jsx)(g.A, {
        src: !(Y && (K || q)) && eg ? "".concat(ef, "?format=png") : ef,
        backgroundSrc: "".concat(ef, "?format=png"),
        alt: w.intl.string(w.t.rIbh8H),
        aspectRatio: 16 / 9,
        className: a()(R.xn, {
          [R.p6]: V.shouldSpoiler
        }),
        imageChildClassName: R.q_,
        onContextMenu: W,
        onError: () => X(true)
      })), null != V.coverImageOverlayText && (0, r.jsx)(u.DUT, {
        onClick: eu,
        children: (0, r.jsx)("div", {
          className: R.nx,
          children: (0, r.jsxs)("div", {
            className: R.BS,
            children: [(0, r.jsx)(S.A, {
              color: c.A.colors.WHITE.css
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/semibold",
              color: "always-white",
              children: V.coverImageOverlayText
            })]
          })
        })
      })]
    }), (0, r.jsxs)("div", {
      className: R.iQ,
      children: [(0, r.jsxs)("div", {
        className: R.OA,
        children: [(0, r.jsx)(u.Text, {
          variant: "text-md/semibold",
          color: "text-default",
          className: R.hF,
          children: V.title
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: a()(R.hF, R.Fq),
          children: V.subtitle
        })]
      }), (0, r.jsxs)("div", {
        className: R._5,
        children: [null != V.authorId && null != ep && (0, r.jsx)(v.A, {
          targetElementRef: H,
          userId: V.authorId,
          guildId: V.guildId,
          channelId: B.id,
          messageId: G.id,
          roleId: er,
          avatarUrl: V.avatarUrl,
          newAnalyticsLocations: [d.A.AVATAR],
          spacing: 12,
          children: e => (0, r.jsx)("div", {
            onMouseEnter: em,
            onMouseLeave: em,
            children: (0, r.jsx)(u.euF, M(L({}, e), {
              ref: H,
              size: u._3J.SIZE_40,
              src: ep,
              "aria-label": w.intl.string(w.t.KXz3XB),
              avatarDecoration: ed
            }))
          })
        }), (0, r.jsxs)("div", {
          className: R.Ny,
          children: [(0, r.jsxs)("div", {
            className: R.O9,
            children: [null != V.channelName && (0, r.jsx)(u.d2$, {
              size: "md",
              color: "currentColor",
              className: R.Xg
            }), (0, r.jsx)(u.DUT, {
              onClick: eu,
              className: R.HA,
              children: (0, r.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: null != (n = V.channelName) ? n : V.guildName
              })
            })]
          }), null != V.authorName && (0, r.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            className: R.wn,
            children: w.intl.format(w.t.voIDKa, {
              authorName: V.authorName,
              authorNameHook: () => null == V.authorId ? (0, r.jsx)(u.V30, {
                name: V.authorName,
                colorString: et,
                colorStrings: ei,
                className: R.fh
              }) : (0, r.jsx)(v.A, {
                targetElementRef: F,
                userId: V.authorId,
                guildId: V.guildId,
                channelId: B.id,
                messageId: G.id,
                roleId: er,
                avatarUrl: V.avatarUrl,
                newAnalyticsLocations: [d.A.USERNAME],
                children: e => (0, r.jsx)(u.V30, M(L({}, e), {
                  ref: F,
                  name: V.authorName,
                  colorString: et,
                  colorStrings: ei,
                  className: R.fh
                }))
              }, (0, s.A)())
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