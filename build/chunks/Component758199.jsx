/** Chunk was on web.js **/
/** chunk id: 758199, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => N,
  u: () => S
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434650 = require("./434650.js"),
  Chunk607070 = require("./607070.js"),
  Chunk206295 = require("./206295.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk572004 = require("./572004.js"),
  Chunk914498 = require("./914498.js"),
  Chunk967249 = require("./967249.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk906376 = require("./906376.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v() {
  return (v = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function I(e) {
  if (null == e) throw TypeError("Cannot destructure " + e);
  return e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}
var S = function(e) {
  return e[e.BOT = 0] = "BOT", e[e.ACTIVITY = 1] = "ACTIVITY", e
}({});

function A(e) {
  var t, n, r;
  return {
    id: null != (t = null == e ? true : e.id) ? t : "0",
    linkType: null != (n = null == e ? true : e.linkType) ? n : g.U.UNKNOWN,
    referrerId: null != (r = null == e ? true : e.referrerId) ? r : p.default.getId(),
    activityCustomId: null == e ? true : e.activityCustomId,
    onView: null == e ? true : e.onView,
    onLinkCopied: null == e ? true : e.onLinkCopied,
    guildId: null == e ? true : e.guildId,
    channelId: null == e ? true : e.channelId,
    messageId: null == e ? true : e.messageId
  }
}

function C(e) {
  let {
    onClick: t,
    children: n,
    className: i
  } = e;
  return null != t ? (0, r.jsx)(c.P3F, {
    onClick: t,
    className: o()({
      [y.cursorPointer]: null != t
    }, i),
    children: n
  }) : (0, r.jsx)("div", {
    className: i,
    children: n
  })
}

function N(e) {
  let {
    title: t,
    header: n,
    footer: a,
    info: p,
    staticBannerSrc: g,
    videoBannerSrc: O,
    bannerAspectRatio: S = 0,
    iconSrc: N,
    embedUrl: R,
    infoUrl: P,
    actions: w = [],
    trackingConfig: D,
    onClickContent: x,
    onClickBanner: L
  } = e;
  D = A(D);
  let {
    primaryColor: j,
    secondaryColor: M
  } = (0, f.Z)(null != N ? N : g), k = "linear-gradient(45deg, ".concat(j, ", ").concat(M, ")"), U = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), G = i.useRef(false), B = (0, u.O)(e => {
    if (false === G.current && e) {
      var t;
      null == D || null == (t = D.onView) || t.call(D), (0, m.GF)({
        appId: D.id,
        linkType: D.linkType,
        referrerId: D.referrerId,
        customId: D.activityCustomId,
        guildId: D.guildId,
        channelId: D.channelId,
        messageId: D.messageId
      }), G.current = true
    }
  }, true), Z = h.wS && null != R ? (0, r.jsx)(l.zx, {
    look: l.zx.Looks.BLANK,
    size: l.zx.Sizes.ICON,
    "aria-label": b.intl.string(b.t.WqhZsr),
    className: y.linkIcon,
    onClick: () => {
      (0, h.JG)(R, () => (0, c.showToast)((0, c.createToast)(b.intl.string(b.t["L/PwZW"]), c.ToastType.SUCCESS))), (0, m.Yu)(D.id, D.linkType)
    },
    children: (0, r.jsx)(c.xPt, {
      size: "xs",
      color: "currentColor"
    })
  }) : null, F = null != P ? (0, r.jsx)(c.eee, {
    "aria-label": b.intl.string(b.t.wuRE8P),
    className: y.linkIcon,
    href: P,
    children: (0, r.jsx)(c.d3s, {
      size: "xs",
      color: c.TVs.colors.APP_MESSAGE_EMBED_SECONDARY_TEXT.css
    })
  }) : null, V = null != g, H = null != O && false === U, Y = V || H, W = 0 === S ? y.bannerAspectRatioBot : y.bannerAspectRatioActivity, K = i.useRef(null), z = i.useCallback(() => {
    let e = K.current;
    null != e && ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play())
  }, []), q = i.useMemo(() => !!H && new URL(O).pathname.endsWith(".gif"), [H, O]), X = i.useMemo(() => {
    if (null != x) return e => {
      x(e), (0, m.KX)(D.id, D.linkType, m.j_.CONTENT, D.referrerId, D.activityCustomId)
    }
  }, [x, D]), Q = i.useMemo(() => {
    if (null != L) return e => {
      L(e), (0, m.KX)(D.id, D.linkType, m.j_.BANNER, D.referrerId, D.activityCustomId)
    }
  }, [L, D]);
  return (0, r.jsxs)("div", {
    ref: B,
    className: y.embed,
    children: [Y && (0, r.jsxs)(C, {
      onClick: Q,
      className: o()(y.bannerWrapper, W, {
        [y.showVideoOnFocus]: H
      }),
      children: [H && (q ? (0, r.jsx)("div", {
        className: y.videoBanner,
        style: {
          backgroundImage: "url(".concat(O, ")")
        }
      }) : (0, r.jsx)(_.Z, {
        ref: K,
        src: O,
        mediaLayoutType: E.hV.MOSAIC,
        loop: true,
        muted: true,
        className: y.videoBanner
      })), V && (0, r.jsx)("div", {
        className: y.staticBanner,
        style: {
          backgroundImage: "url(".concat(g, ")")
        },
        onTransitionEnd: z
      })]
    }), (0, r.jsxs)("div", {
      style: {
        background: k
      },
      children: [(0, r.jsxs)("div", {
        className: y.contentContainer,
        children: [null != n && (0, r.jsxs)("div", {
          className: y.header,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-sm/semibold",
            color: "none",
            children: n
          }), null != Z ? Z : F]
        }), (0, r.jsxs)("div", {
          className: y.contentAndCopyButtonWrapper,
          children: [(0, r.jsxs)(C, {
            onClick: X,
            className: o()(y.contentWrapper, {
              [y.contentWrapperClickable]: null != X
            }),
            children: [null != N && (0, r.jsx)("div", {
              className: y.img,
              style: {
                backgroundImage: "url(".concat(N, ")")
              }
            }), (0, r.jsxs)("div", {
              className: y.content,
              children: [(0, r.jsx)(c.Text, {
                variant: "text-md/semibold",
                color: "none",
                lineClamp: 1,
                className: y.contentTitle,
                children: t
              }), (0, r.jsx)("div", {
                className: y.contentInfoWrapper,
                children: p
              })]
            })]
          }), null == n && (null != Z ? Z : F)]
        }), w.length > 0 && (0, r.jsx)("div", {
          className: y.actionWrapper,
          children: w.map((e, t) => {
            let {
              label: n,
              icon: i,
              onClick: a,
              disabledReason: o,
              submitting: s,
              trackingArea: u
            } = e, d = null != o, f = 0 === t, _ = null != i ? (0, r.jsxs)(r.Fragment, {
              children: [i, (0, r.jsx)("span", {
                children: n
              })]
            }) : n, p = {
              color: f ? l.zx.Colors.WHITE : l.zx.Colors.TRANSPARENT,
              className: f ? y.primaryButton : y.alwaysWhiteText,
              disabled: d,
              submitting: s,
              children: _,
              onClick(e) {
                a(e), (0, m.KX)(D.id, D.linkType, u, D.referrerId, D.activityCustomId)
              }
            };
            return d ? (0, r.jsx)(c.ua7, {
              text: o,
              children: e => {
                var t = v({}, I(e));
                return (0, r.jsx)(l.zx, T({}, p, t))
              }
            }, n) : (0, r.jsx)(l.zx, T({}, p), n)
          })
        })]
      }), null != a && a]
    })]
  })
}