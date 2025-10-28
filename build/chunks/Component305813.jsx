/** Chunk was on 47495 **/
/** chunk id: 305813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk778825 = require("./778825.js"),
  Chunk786761 = require("./786761.js"),
  Chunk3148 = require("./3148.js"),
  Chunk739566 = require("./739566.js"),
  Chunk753206 = require("./753206.jsx"),
  Chunk4242 = require("./4242.js"),
  Chunk566697 = require("./566697.jsx"),
  Chunk150039 = require("./150039.js"),
  Chunk678135 = require("./678135.jsx"),
  Chunk643879 = require("./643879.js"),
  Chunk687158 = require("./687158.js"),
  Chunk28660 = require("./28660.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk25990 = require("./25990.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk352609 = require("./352609.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk270816 = require("./270816.js");

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e) {
  let {
    user: t,
    guild: n,
    displayName: r,
    selectedFontId: A,
    selectedEffectId: L,
    selectedColors: w,
    onClose: B
  } = e, Z = (0, c.ZP)(), M = (0, s.wjy)(Z), [G, Y] = (0, o.useState)(M), H = (0, S.ZP)(t.id, null), {
    bannerSrc: F
  } = (0, j.Z)({
    displayProfile: H,
    size: 413,
    canAnimate: false
  }), z = (0, a.cj)([v.Z, d.Z], () => null == n ? v.Z.getAllPending() : d.Z.getAllPending()), U = (0, _.SD)({
    userId: t.id,
    image: z.pendingAvatar
  }), {
    userNameplate: q,
    guildNameplate: K,
    pendingNameplate: X
  } = (0, x.Zx)(t, null == n ? true : n.id), V = null != K ? (0, g.Pb)(K) : true, W = G ? y.BRd.DARK : y.BRd.LIGHT;
  (M && G || !M && !G) && (W = Z);
  let $ = (0, o.useCallback)(() => {
      P.default.track(y.rMx.DISPLAY_NAME_STYLES_CLOSED), B()
    }, [B]),
    J = (0, o.useCallback)(e => {
      Y(e === y.BRd.DARK), P.default.track(y.rMx.DISPLAY_NAME_STYLES_THEME_TOGGLE, {
        dark: e === y.BRd.DARK
      })
    }, []),
    Q = (0, o.useMemo)(() => R(D({}, (0, m.ij)(t, null)), {
      nick: r,
      displayNameStyles: {
        fontId: A,
        effectId: L,
        colors: w
      }
    }), [t, A, L, w, r]);
  return (0, l.jsxs)("div", {
    className: E.previewSection,
    children: [(0, l.jsx)(s.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: E.sectionHeader,
      children: (0, l.jsx)(s.olH, {
        "data-migration-pending": true,
        onClick: $,
        innerClassName: E.closeButton
      })
    }), null != F && (0, l.jsx)(C.Z, {
      user: t,
      displayProfile: H,
      themeType: k.l.MODAL_V2,
      className: E.backgroundThemeContainer,
      forceUserTheme: true,
      children: (0, l.jsx)("div", {
        className: E.bannerBackground,
        style: {
          backgroundImage: "url(".concat(F, ")")
        }
      })
    }), (0, l.jsx)(s.f6W, {
      theme: W,
      children: e => (0, l.jsxs)("div", {
        className: i()(E.previewCards, e),
        inert: true,
        children: [(0, l.jsx)(b.Z, R(D({
          user: t,
          guild: n
        }, z), {
          pendingAvatar: U,
          pendingGlobalName: r,
          pendingDisplayNameStyles: Q.displayNameStyles,
          canUsePremiumCustomization: true,
          disabledInputs: true,
          hideCustomStatus: true,
          hideBioSection: true,
          containerClassName: E.profile,
          interactive: false,
          hideExampleButton: true
        })), (0, l.jsx)(f.Z, {
          author: Q,
          message: (0, u.e5)(R(D({}, (0, p.ZP)({
            channelId: "1337",
            content: T.intl.string(O.default.h5Cuej)
          })), {
            state: y.yb.SENT,
            id: "0"
          })),
          isGroupStart: true,
          hideSimpleEmbedContent: true,
          hideGuildTag: true,
          className: E.chatMessage,
          previewGuildId: null == n ? true : n.id
        }), (0, l.jsx)(h.Z, {
          user: t,
          guildId: null == n ? true : n.id,
          nameplate: X,
          nameplateData: null == X ? null != V ? V : q : true,
          pendingGlobalName: r,
          pendingDisplayNameStyles: Q.displayNameStyles,
          isHighlighted: true,
          className: E.nameplate
        })]
      })
    }), (0, l.jsxs)("div", {
      className: E.themeToggleSection,
      children: [(0, l.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: T.intl.format(O.default.prQba8, {
          helpArticleLink: N.Z.getArticleURL(y.BhN.DISPLAY_NAME_STYLES)
        })
      }), (0, l.jsx)(I, {
        darkPreview: G,
        onToggleTheme: J
      })]
    })]
  })
}

function I(e) {
  let {
    darkPreview: t,
    onToggleTheme: n
  } = e, o = t ? y.BRd.DARK : y.BRd.LIGHT;
  return (0, l.jsx)(s.sY7, {
    className: E.themeToggleControl,
    optionClassName: E.themeToggleOption,
    options: [{
      name: "",
      tooltip: T.intl.string(T.t.b8Cei3),
      value: y.BRd.DARK,
      icon: s.Z6G,
      className: o === y.BRd.DARK ? E.themeToggleOptionSelected : true
    }, {
      name: "",
      tooltip: T.intl.string(T.t.K2sFfo),
      value: y.BRd.LIGHT,
      icon: s.chG,
      className: o === y.BRd.LIGHT ? E.themeToggleOptionSelected : true
    }],
    value: o,
    onChange: e => {
      let {
        value: t
      } = e;
      return n(t)
    },
    look: "pill"
  })
}