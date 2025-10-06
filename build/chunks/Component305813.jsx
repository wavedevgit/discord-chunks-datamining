/** Chunk was on 47495 **/
/** chunk id: 305813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk22267 = require("./22267.jsx"),
  Chunk786761 = require("./786761.js"),
  Chunk3148 = require("./3148.js"),
  Chunk739566 = require("./739566.js"),
  Chunk753206 = require("./753206.jsx"),
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
  Chunk693450 = require("./693450.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk270816 = require("./270816.js");

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      o = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), o.forEach(function(t) {
      var o;
      o = n[t], t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = o
    })
  }
  return e
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      n.push.apply(n, o)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  let {
    user: t,
    displayName: n,
    selectedFontId: r,
    selectedEffectId: E,
    selectedColors: R,
    onClose: L
  } = e, A = (0, c.ZP)(), I = (0, s.wjy)(A), [w, B] = (0, l.useState)(I), M = (0, x.ZP)(t.id, null), {
    bannerSrc: Z
  } = (0, _.Z)({
    displayProfile: M,
    size: 413,
    canAnimate: false
  }), G = (0, i.cj)([S.Z], () => S.Z.getAllPending()), Y = (0, h.SD)({
    userId: t.id,
    image: G.pendingAvatar
  }), H = w ? v.BRd.DARK : v.BRd.LIGHT;
  (I && w || !I && !w) && (H = A);
  let z = (0, l.useCallback)(() => {
      j.default.track(v.rMx.DISPLAY_NAME_STYLES_CLOSED), L()
    }, [L]),
    F = (0, l.useCallback)(e => {
      B(e === v.BRd.DARK), j.default.track(v.rMx.DISPLAY_NAME_STYLES_THEME_TOGGLE, {
        dark: e === v.BRd.DARK
      })
    }, []),
    U = (0, l.useMemo)(() => T(O({}, (0, m.ij)(t, null)), {
      nick: n,
      displayNameStyles: {
        fontId: r,
        effectId: E,
        colors: R
      }
    }), [t, r, E, R, n]);
  return (0, o.jsxs)("div", {
    className: y.previewSection,
    children: [(0, o.jsx)(s.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: y.sectionHeader,
      children: (0, o.jsx)(s.olH, {
        "data-migration-pending": true,
        onClick: z,
        innerClassName: y.closeButton
      })
    }), null != Z && (0, o.jsx)(b.Z, {
      user: t,
      displayProfile: M,
      themeType: P.l.MODAL_V2,
      className: y.backgroundThemeContainer,
      forceUserTheme: true,
      children: (0, o.jsx)("div", {
        className: y.bannerBackground,
        style: {
          backgroundImage: "url(".concat(Z, ")")
        }
      })
    }), (0, o.jsx)(s.f6W, {
      theme: H,
      children: e => (0, o.jsxs)("div", {
        className: a()(y.previewCards, e),
        inert: true,
        children: [(0, o.jsx)(g.Z, T(O({
          user: t
        }, G), {
          pendingAvatar: Y,
          pendingGlobalName: n,
          pendingDisplayNameStyles: U.displayNameStyles,
          canUsePremiumCustomization: true,
          disabledInputs: true,
          hideCustomStatus: true,
          hideBioSection: true,
          containerClassName: y.profile,
          interactive: false,
          hideExampleButton: true
        })), (0, o.jsx)(f.Z, {
          author: U,
          message: (0, u.e5)(T(O({}, (0, p.ZP)({
            channelId: "1337",
            content: k.intl.string(N.default.h5Cuen)
          })), {
            state: v.yb.SENT,
            id: "0"
          })),
          isGroupStart: true,
          hideSimpleEmbedContent: true,
          hideGuildTag: true,
          className: y.chatMessage
        }), (0, o.jsx)(d.Z, {
          user: t,
          nameplate: G.pendingNameplate,
          nameplateData: true === G.pendingNameplate ? t.nameplate : true,
          pendingGlobalName: n,
          pendingDisplayNameStyles: U.displayNameStyles,
          isHighlighted: true,
          className: y.nameplate
        })]
      })
    }), (0, o.jsxs)("div", {
      className: y.themeToggleSection,
      children: [(0, o.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: k.intl.format(N.default.prQba2, {
          helpArticleLink: C.Z.getArticleURL(v.BhN.DISPLAY_NAME_STYLES)
        })
      }), (0, o.jsx)(D, {
        darkPreview: w,
        onToggleTheme: F
      })]
    })]
  })
}

function D(e) {
  let {
    darkPreview: t,
    onToggleTheme: n
  } = e, l = t ? v.BRd.DARK : v.BRd.LIGHT;
  return (0, o.jsx)(s.sY7, {
    className: y.themeToggleControl,
    optionClassName: y.themeToggleOption,
    options: [{
      name: "",
      tooltip: k.intl.string(k.t.b8Cei4),
      value: v.BRd.DARK,
      icon: s.Z6G,
      className: l === v.BRd.DARK ? y.themeToggleOptionSelected : true
    }, {
      name: "",
      tooltip: k.intl.string(k.t.K2sFfn),
      value: v.BRd.LIGHT,
      icon: s.chG,
      className: l === v.BRd.LIGHT ? y.themeToggleOptionSelected : true
    }],
    value: l,
    onChange: e => {
      let {
        value: t
      } = e;
      return n(t)
    },
    look: "pill"
  })
}