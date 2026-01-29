/** Chunk was on 15682 **/
/** chunk id: 30925, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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
  Chunk836602 = require("./836602.js"),
  Chunk950191 = require("./950191.js"),
  Chunk686189 = require("./686189.js"),
  Chunk946356 = require("./946356.jsx"),
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

function w(e, t) {
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

function I(e) {
  let {
    user: t,
    guild: l,
    displayName: s,
    selectedFontId: I,
    selectedEffectId: k,
    selectedColors: R,
    onClose: G
  } = e, z = (0, c.Ay)(), M = (0, i.Mwr)(z), [H, U] = (0, r.useState)(M), Y = (0, v.Ay)(t.id, null), {
    bannerSrc: B
  } = (0, N.A)({
    displayProfile: Y,
    size: 413,
    canAnimate: false
  }), J = (0, o.cf)([j.A, d.A], () => null == l ? j.A.getPendingChanges() : d.A.getAllPending()), F = (0, h.V7)({
    userId: t.id,
    image: J.pendingAvatar
  }), {
    userNameplate: V,
    guildNameplate: K,
    pendingNameplate: q
  } = (0, x.rv)(t, null == l ? true : l.id), X = null != K ? (0, g.WK)(K) : true;
  H && !M ? z = y.NJ8.DARK : !H && M && (z = y.NJ8.LIGHT);
  let Q = (0, r.useCallback)(() => {
      C.default.track(y.HAw.DISPLAY_NAME_STYLES_CLOSED), G()
    }, [G]),
    Z = (0, r.useCallback)(e => {
      U(e === y.NJ8.DARK), C.default.track(y.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, {
        dark: e === y.NJ8.DARK
      })
    }, []),
    W = (0, r.useMemo)(() => w(D({}, (0, p.FT)(t, null)), {
      nick: s,
      displayNameStyles: {
        fontId: I,
        effectId: k,
        colors: R
      }
    }), [t, I, k, R, s]);
  return (0, n.jsxs)("div", {
    className: P._l,
    children: [(0, n.jsx)(i.rQ0, {
      "data-migration-pending": true,
      separator: false,
      className: P.bV,
      children: (0, n.jsx)(i.s_y, {
        "data-migration-pending": true,
        onClick: Q,
        innerClassName: P.b
      })
    }), null != B && (0, n.jsx)(A.A, {
      user: t,
      displayProfile: Y,
      themeType: O.d.MODAL_V2,
      className: P.LX,
      forceUserTheme: true,
      children: (0, n.jsx)("div", {
        className: P.b8,
        style: {
          backgroundImage: "url(".concat(B, ")")
        }
      })
    }), (0, n.jsx)(i.NPJ, {
      theme: z,
      children: e => (0, n.jsxs)("div", {
        className: a()(P.cq, e),
        inert: true,
        children: [(0, n.jsx)(b.A, w(D({
          user: t,
          guild: l
        }, J), {
          pendingAvatar: F,
          pendingGlobalName: s,
          pendingDisplayNameStyles: W.displayNameStyles,
          canUsePremiumCustomization: true,
          disabledInputs: true,
          hideCustomStatus: true,
          hideBioSection: true,
          containerClassName: P.ME,
          interactive: false,
          hideExampleButton: true
        })), (0, n.jsx)(f.A, {
          author: W,
          message: (0, u.rh)(w(D({}, (0, m.Ay)({
            channelId: "1337",
            content: T.intl.string(E.default.h5Cuej)
          })), {
            state: y.cmJ.SENT,
            id: "0"
          })),
          isGroupStart: true,
          hideSimpleEmbedContent: true,
          hideGuildTag: true,
          className: P.OT,
          previewGuildId: null == l ? true : l.id
        }), (0, n.jsx)(_.A, {
          user: t,
          guildId: null == l ? true : l.id,
          nameplate: q,
          nameplateData: null == q ? null != X ? X : V : true,
          pendingGlobalName: s,
          pendingDisplayNameStyles: W.displayNameStyles,
          isHighlighted: true,
          className: P.qF
        })]
      })
    }), (0, n.jsxs)("div", {
      className: P.dI,
      children: [(0, n.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: T.intl.format(E.default.prQba8, {
          helpArticleLink: S.A.getArticleURL(y.MVz.DISPLAY_NAME_STYLES)
        })
      }), (0, n.jsx)(L, {
        darkPreview: H,
        onToggleTheme: Z
      })]
    })]
  })
}

function L(e) {
  let {
    darkPreview: t,
    onToggleTheme: l
  } = e, r = t ? y.NJ8.DARK : y.NJ8.LIGHT;
  return (0, n.jsx)(i.IzF, {
    className: P.xr,
    optionClassName: P.$C,
    options: [{
      name: "",
      tooltip: T.intl.string(T.t.b8Cei3),
      value: y.NJ8.DARK,
      icon: i.Zve,
      className: r === y.NJ8.DARK ? P.iB : true
    }, {
      name: "",
      tooltip: T.intl.string(T.t.K2sFfo),
      value: y.NJ8.LIGHT,
      icon: i.FVN,
      className: r === y.NJ8.LIGHT ? P.iB : true
    }],
    value: r,
    onChange: e => {
      let {
        value: t
      } = e;
      return l(t)
    },
    look: "pill"
  })
}