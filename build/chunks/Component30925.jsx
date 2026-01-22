/** Chunk was on 15682 **/
/** chunk id: 30925, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => P
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk833336 = require("./833336.js"),
  Chunk141468 = require("./141468.js"),
  Chunk963852 = require("./963852.js"),
  Chunk763754 = require("./763754.js"),
  Chunk20851 = require("./20851.jsx"),
  Chunk369496 = require("./369496.js"),
  Chunk550111 = require("./550111.jsx"),
  Chunk919395 = require("./919395.js"),
  Chunk287070 = require("./287070.jsx"),
  Chunk101058 = require("./101058.js"),
  Chunk950191 = require("./950191.js"),
  Chunk686189 = require("./686189.js"),
  Chunk946356 = require("./946356.jsx"),
  Chunk752319 = require("./752319.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk996988 = require("./996988.js"),
  Chunk927961 = require("./927961.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk635249 = require("./635249.js");

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var l = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = l[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var l = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      l.push.apply(l, n)
    }
    return l
  })(Object(t)).forEach(function(l) {
    Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l))
  }), e
}

function P(e) {
  let {
    user: t,
    guild: l,
    displayName: s,
    selectedFontId: P,
    selectedEffectId: k,
    selectedColors: R,
    onClose: G
  } = e, z = (0, c.Ay)(), M = (0, o.Mwr)(z), [U, H] = (0, a.useState)(M), Y = (0, v.Ay)(t.id, null), {
    bannerSrc: J
  } = (0, N.A)({
    displayProfile: Y,
    size: 413,
    canAnimate: false
  }), F = (0, i.cf)([y.A, d.A], () => null == l ? y.A.getAllPending() : d.A.getAllPending()), B = (0, h.V7)({
    userId: t.id,
    image: F.pendingAvatar
  }), {
    userNameplate: V,
    guildNameplate: K,
    pendingNameplate: q
  } = (0, g.rv)(t, null == l ? true : l.id), X = null != K ? (0, p.WK)(K) : true;
  U && !M ? z = O.NJ8.DARK : !U && M && (z = O.NJ8.LIGHT);
  let Q = (0, a.useCallback)(() => {
      _.default.track(O.HAw.DISPLAY_NAME_STYLES_CLOSED), G()
    }, [G]),
    Z = (0, a.useCallback)(e => {
      H(e === O.NJ8.DARK), _.default.track(O.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, {
        dark: e === O.NJ8.DARK
      })
    }, []),
    W = (0, a.useMemo)(() => I(D({}, (0, m.FT)(t, null)), {
      nick: s,
      displayNameStyles: {
        fontId: P,
        effectId: k,
        colors: R
      }
    }), [t, P, k, R, s]);
  return (0, n.jsxs)("div", {
    className: w._l,
    children: [(0, n.jsx)(o.rQ0, {
      "data-migration-pending": true,
      separator: false,
      className: w.bV,
      children: (0, n.jsx)(o.s_y, {
        "data-migration-pending": true,
        onClick: Q,
        innerClassName: w.b
      })
    }), null != J && (0, n.jsx)(A.A, {
      user: t,
      displayProfile: Y,
      themeType: C.d.MODAL_V2,
      className: w.LX,
      forceUserTheme: true,
      children: (0, n.jsx)("div", {
        className: w.b8,
        style: {
          backgroundImage: "url(".concat(J, ")")
        }
      })
    }), (0, n.jsx)(o.NPJ, {
      theme: z,
      children: e => (0, n.jsxs)("div", {
        className: r()(w.cq, e),
        inert: true,
        children: [(0, n.jsx)(j.A, I(D({
          user: t,
          guild: l
        }, F), {
          pendingAvatar: B,
          pendingGlobalName: s,
          pendingDisplayNameStyles: W.displayNameStyles,
          canUsePremiumCustomization: true,
          disabledInputs: true,
          hideCustomStatus: true,
          hideBioSection: true,
          containerClassName: w.ME,
          interactive: false,
          hideExampleButton: true
        })), (0, n.jsx)(b.A, {
          author: W,
          message: (0, u.rh)(I(D({}, (0, f.Ay)({
            channelId: "1337",
            content: T.intl.string(E.default.h5Cuej)
          })), {
            state: O.cmJ.SENT,
            id: "0"
          })),
          isGroupStart: true,
          hideSimpleEmbedContent: true,
          hideGuildTag: true,
          className: w.OT,
          previewGuildId: null == l ? true : l.id
        }), (0, n.jsx)(x.A, {
          user: t,
          guildId: null == l ? true : l.id,
          nameplate: q,
          nameplateData: null == q ? null != X ? X : V : true,
          pendingGlobalName: s,
          pendingDisplayNameStyles: W.displayNameStyles,
          isHighlighted: true,
          className: w.qF
        })]
      })
    }), (0, n.jsxs)("div", {
      className: w.dI,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: T.intl.format(E.default.prQba8, {
          helpArticleLink: S.A.getArticleURL(O.MVz.DISPLAY_NAME_STYLES)
        })
      }), (0, n.jsx)(L, {
        darkPreview: U,
        onToggleTheme: Z
      })]
    })]
  })
}

function L(e) {
  let {
    darkPreview: t,
    onToggleTheme: l
  } = e, a = t ? O.NJ8.DARK : O.NJ8.LIGHT;
  return (0, n.jsx)(o.IzF, {
    className: w.xr,
    optionClassName: w.$C,
    options: [{
      name: "",
      tooltip: T.intl.string(T.t.b8Cei3),
      value: O.NJ8.DARK,
      icon: o.Zve,
      className: a === O.NJ8.DARK ? w.iB : true
    }, {
      name: "",
      tooltip: T.intl.string(T.t.K2sFfo),
      value: O.NJ8.LIGHT,
      icon: o.FVN,
      className: a === O.NJ8.LIGHT ? w.iB : true
    }],
    value: a,
    onChange: e => {
      let {
        value: t
      } = e;
      return l(t)
    },
    look: "pill"
  })
}