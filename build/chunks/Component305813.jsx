/** Chunk was on 47495 **/
/** chunk id: 305813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk22267 = require("./22267.jsx"),
  Chunk786761 = require("./786761.js"),
  Chunk3148 = require("./3148.js"),
  Chunk739566 = require("./739566.js"),
  Chunk753206 = require("./753206.jsx"),
  Chunk678135 = require("./678135.jsx"),
  Chunk687158 = require("./687158.js"),
  Chunk28660 = require("./28660.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk598077 = require("./598077.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk228168 = require("./228168.js"),
  Chunk698282 = require("./698282.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk53426 = require("./53426.js");

function v(e) {
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

function k(e, t) {
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

function E(e) {
  let {
    user: t,
    selectedFontId: n,
    selectedEffectId: l,
    selectedColors: E,
    onClose: N
  } = e, D = new x.Z(k(v({}, t), {
    displayNameStyles: {
      fontId: n,
      effectId: l,
      colors: E
    }
  })), w = (0, s.ZP)(), R = (0, a.wjy)(w), [I, A] = (0, o.useState)(R), L = (0, g.ZP)(t.id, null), {
    bannerSrc: B
  } = (0, h.Z)({
    displayProfile: L,
    size: 413,
    canAnimate: false
  }), M = I ? S.BRd.DARK : S.BRd.LIGHT;
  (R && I || !R && !I) && (M = w);
  let Z = (0, o.useCallback)(() => {
      j.default.track(S.rMx.DISPLAY_NAME_STYLES_CLOSED), N()
    }, [N]),
    Y = (0, o.useCallback)(e => {
      A(e === S.BRd.DARK), j.default.track(S.rMx.DISPLAY_NAME_STYLES_THEME_TOGGLE, {
        dark: e === S.BRd.DARK
      })
    }, []);
  return (0, r.jsxs)("div", {
    className: P.previewSection,
    children: [(0, r.jsx)(a.xBx, {
      "data-migration-pending": true,
      separator: false,
      className: P.sectionHeader,
      children: (0, r.jsx)(a.olH, {
        "data-migration-pending": true,
        onClick: Z,
        innerClassName: P.closeButton
      })
    }), null != B && (0, r.jsx)(b.Z, {
      user: D,
      displayProfile: L,
      themeType: C.lY.MODAL_V2,
      className: P.backgroundThemeContainer,
      forceUserTheme: true,
      children: (0, r.jsx)("div", {
        className: P.bannerBackground,
        style: {
          backgroundImage: "url(".concat(B, ")")
        }
      })
    }), (0, r.jsx)(a.f6W, {
      theme: M,
      children: e => (0, r.jsxs)("div", {
        className: i()(P.previewCards, e),
        inert: true,
        children: [(0, r.jsx)(m.Z, {
          user: D,
          pendingAvatar: true,
          canUsePremiumCustomization: true,
          disabledInputs: true,
          hideCustomStatus: true,
          hideBioSection: true,
          containerClassName: P.profile,
          interactive: false,
          hideViewFullProfileButton: true
        }), (0, r.jsx)(f.Z, {
          author: (0, p.ij)(D, null),
          message: (0, d.e5)(k(v({}, (0, u.ZP)({
            channelId: "1337",
            content: y.intl.string(O.default.h5Cuen)
          })), {
            state: S.yb.SENT,
            id: "0"
          })),
          isGroupStart: true,
          hideSimpleEmbedContent: true,
          hideGuildTag: true,
          className: P.chatMessage
        }), (0, r.jsx)(c.Z, {
          user: D,
          nameplate: null,
          nameplateData: D.nameplate,
          className: P.nameplate
        })]
      })
    }), (0, r.jsxs)("div", {
      className: P.themeToggleSection,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: y.intl.format(O.default.prQba2, {
          helpArticleLink: _.Z.getArticleURL(S.BhN.DISPLAY_NAME_STYLES)
        })
      }), (0, r.jsx)(T, {
        darkPreview: I,
        onToggleTheme: Y
      })]
    })]
  })
}

function T(e) {
  let {
    darkPreview: t,
    onToggleTheme: n
  } = e, o = t ? S.BRd.DARK : S.BRd.LIGHT;
  return (0, r.jsx)(a.sY7, {
    className: P.themeToggleControl,
    optionClassName: P.themeToggleOption,
    options: [{
      name: "",
      tooltip: y.intl.string(y.t.b8Cei4),
      value: S.BRd.DARK,
      icon: a.Z6G,
      className: o === S.BRd.DARK ? P.themeToggleOptionSelected : true
    }, {
      name: "",
      tooltip: y.intl.string(y.t.K2sFfn),
      value: S.BRd.LIGHT,
      icon: a.chG,
      className: o === S.BRd.LIGHT ? P.themeToggleOptionSelected : true
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