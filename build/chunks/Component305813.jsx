/** Chunk was on 47495 **/
/** chunk id: 305813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
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

function N(e) {
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

function E(e, t) {
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

function T(e) {
  let {
    user: t,
    selectedFontId: n,
    selectedEffectId: l,
    selectedColors: T,
    onClose: R
  } = e, A = (0, c.ZP)(), I = (0, s.wjy)(A), [w, L] = (0, o.useState)(I), B = (0, b.ZP)(t.id, null), {
    bannerSrc: M
  } = (0, x.Z)({
    displayProfile: B,
    size: 413,
    canAnimate: false
  }), G = (0, i.cj)([_.Z], () => _.Z.getAllPending()), Z = (0, h.SD)({
    userId: t.id,
    image: G.pendingAvatar
  }), Y = w ? O.BRd.DARK : O.BRd.LIGHT;
  (I && w || !I && !w) && (Y = A);
  let H = (0, o.useCallback)(() => {
      S.default.track(O.rMx.DISPLAY_NAME_STYLES_CLOSED), R()
    }, [R]),
    z = (0, o.useCallback)(e => {
      L(e === O.BRd.DARK), S.default.track(O.rMx.DISPLAY_NAME_STYLES_THEME_TOGGLE, {
        dark: e === O.BRd.DARK
      })
    }, []),
    F = (0, o.useMemo)(() => {
      var e;
      let r = (0, f.ij)(t, null);
      return E(N({}, r), {
        nick: null != (e = G.pendingGlobalName) ? e : r.nick,
        displayNameStyles: {
          fontId: n,
          effectId: l,
          colors: T
        }
      })
    }, [t, n, l, T, G.pendingGlobalName]);
  return (0, r.jsxs)("div", {
    className: k.previewSection,
    children: [(0, r.jsx)(s.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: k.sectionHeader,
      children: (0, r.jsx)(s.olH, {
        "data-migration-pending": true,
        onClick: H,
        innerClassName: k.closeButton
      })
    }), null != M && (0, r.jsx)(j.Z, {
      user: t,
      displayProfile: B,
      themeType: v.l.MODAL_V2,
      className: k.backgroundThemeContainer,
      forceUserTheme: true,
      children: (0, r.jsx)("div", {
        className: k.bannerBackground,
        style: {
          backgroundImage: "url(".concat(M, ")")
        }
      })
    }), (0, r.jsx)(s.f6W, {
      theme: Y,
      children: e => (0, r.jsxs)("div", {
        className: a()(k.previewCards, e),
        inert: true,
        children: [(0, r.jsx)(g.Z, E(N({
          user: t
        }, G), {
          pendingAvatar: Z,
          pendingDisplayNameStyles: F.displayNameStyles,
          canUsePremiumCustomization: true,
          disabledInputs: true,
          hideCustomStatus: true,
          hideBioSection: true,
          containerClassName: k.profile,
          interactive: false,
          hideExampleButton: true
        })), (0, r.jsx)(m.Z, {
          author: F,
          message: (0, u.e5)(E(N({}, (0, p.ZP)({
            channelId: "1337",
            content: y.intl.string(P.default.h5Cuen)
          })), {
            state: O.yb.SENT,
            id: "0"
          })),
          isGroupStart: true,
          hideSimpleEmbedContent: true,
          hideGuildTag: true,
          className: k.chatMessage
        }), (0, r.jsx)(d.Z, {
          user: t,
          nameplate: G.pendingNameplate,
          nameplateData: true === G.pendingNameplate ? t.nameplate : true,
          pendingGlobalName: G.pendingGlobalName,
          pendingDisplayNameStyles: F.displayNameStyles,
          isHighlighted: true,
          className: k.nameplate
        })]
      })
    }), (0, r.jsxs)("div", {
      className: k.themeToggleSection,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: y.intl.format(P.default.prQba2, {
          helpArticleLink: C.Z.getArticleURL(O.BhN.DISPLAY_NAME_STYLES)
        })
      }), (0, r.jsx)(D, {
        darkPreview: w,
        onToggleTheme: z
      })]
    })]
  })
}

function D(e) {
  let {
    darkPreview: t,
    onToggleTheme: n
  } = e, o = t ? O.BRd.DARK : O.BRd.LIGHT;
  return (0, r.jsx)(s.sY7, {
    className: k.themeToggleControl,
    optionClassName: k.themeToggleOption,
    options: [{
      name: "",
      tooltip: y.intl.string(y.t.b8Cei4),
      value: O.BRd.DARK,
      icon: s.Z6G,
      className: o === O.BRd.DARK ? k.themeToggleOptionSelected : true
    }, {
      name: "",
      tooltip: y.intl.string(y.t.K2sFfn),
      value: O.BRd.LIGHT,
      icon: s.chG,
      className: o === O.BRd.LIGHT ? k.themeToggleOptionSelected : true
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