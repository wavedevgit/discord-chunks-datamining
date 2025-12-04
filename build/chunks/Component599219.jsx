/** Chunk was on 91848 **/
/** chunk id: 599219, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk215292 = require("./215292.jsx"),
  Chunk382086 = require("./382086.jsx"),
  Chunk996453 = require("./996453.jsx"),
  Chunk446706 = require("./446706.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk179645 = require("./179645.js"),
  Chunk436046 = require("./436046.jsx"),
  Chunk963209 = require("./963209.jsx"),
  Chunk436457 = require("./436457.jsx"),
  Chunk877758 = require("./877758.jsx"),
  Chunk701476 = require("./701476.js"),
  Chunk785997 = require("./785997.js"),
  Chunk981631 = require("./981631.js"),
  Chunk834891 = require("./834891.js"),
  Chunk675999 = require("./675999.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk751629 = require("./751629.js");

function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e) {
  let t = (0, _.Dt)(),
    {
      onSlideChange: n
    } = e,
    s = function(e, t) {
      if (null == e) return {};
      var n, a, o = function(e, t) {
        if (null == e) return {};
        var n, a, o = {},
          s = Object.keys(e);
        for (a = 0; a < s.length; a++) n = s[a], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (a = 0; a < s.length; a++) n = s[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(e, ["onSlideChange"]),
    {
      onClose: S
    } = s,
    [L, w] = o.useState(false),
    M = (0, r.e7)([b.default], () => b.default.getCurrentUser()),
    k = null != M && null == M.nsfwAllowed,
    [P, U] = o.useState(k ? y.F.AGE_GATE : y.F.CHOOSE_TEMPLATE),
    [R, B] = o.useState(null);
  o.useEffect(() => {
    n(L ? y.F.COMPLETE : P)
  }, [n, P, L]);
  let [Z, H] = o.useState(null), [W, z] = o.useState(null), [Y, V] = o.useState(false), J = (0, r.e7)([N.Z], () => N.Z.getType() === j.M5.INVITE_UNCLAIMED), K = o.useCallback(e => {
    z(e), U(y.F.CREATION_INTENT), E.default.track(O.rMx.GUILD_TEMPLATE_SELECTED, {
      template_name: e.label,
      template_code: e.code
    })
  }, [z, U]), {
    content: q,
    footer: X
  } = (0, f.v)({
    hasFooter: false,
    onBack: () => {
      z(null), U(y.F.CHOOSE_TEMPLATE)
    },
    onCreationIntentChosen: e => {
      V(e === I.lr.COMMUNITY), U(y.F.CUSTOMIZE_GUILD)
    }
  }), {
    content: Q,
    footer: $
  } = (0, m.G)({
    guildTemplate: W,
    titleClassName: G.customizeGuildTitle,
    hasFooter: false,
    onGuildCreated: e => {
      H(e), (null == W ? true : W.id) === v.l.CREATE ? U(y.F.CHANNEL_PROMPT) : w(true)
    },
    onBack: () => {
      U(y.F.CREATION_INTENT)
    },
    isSlideReady: R === y.F.CUSTOMIZE_GUILD,
    isCommunity: Y
  }), {
    content: ee,
    footer: et
  } = (0, p.F)({
    createdGuildId: Z,
    hasFooter: false,
    onChannelPromptCompleted: () => {
      w(true)
    },
    isSlideReady: R === y.F.CHANNEL_PROMPT
  }), {
    content: en,
    footer: ea
  } = (0, T.Z)({
    onBack: () => U(y.F.CHOOSE_TEMPLATE),
    onComplete: () => {
      S()
    },
    onConnect: S,
    isSlideReady: R === y.F.JOIN_GUILD
  }), eo = null;
  switch (P) {
    case y.F.CUSTOMIZE_GUILD:
      eo = $;
      break;
    case y.F.CHANNEL_PROMPT:
      eo = et;
      break;
    case y.F.JOIN_GUILD:
      eo = ea;
      break;
    case y.F.CREATION_INTENT:
      eo = X
  }
  let {
    ref: es,
    width: el
  } = (0, u.ZP)();
  if (L) return (0, a.jsx)(c.Y0X, D(F({}, s), {
    size: c.CgR.MEDIUM,
    className: l()(G.modal, G.completed),
    "aria-labelledby": t,
    parentComponent: "NUFModal",
    children: (0, a.jsx)(A.Z, {
      onComplete: S
    })
  }));
  let ei = {
    impression_group: i.ImpressionGroups.GUILD_ADD_NUF
  };
  return (0, a.jsxs)(c.Y0X, D(F({}, s), {
    size: c.CgR.MEDIUM,
    className: G.modal,
    "aria-labelledby": t,
    parentComponent: "NUFModal",
    children: [(0, a.jsx)("div", {
      className: G.sidebar,
      children: (0, a.jsx)(C.Z, {
        step: P
      })
    }), (0, a.jsx)(c.f6W, {
      theme: O.BRd.LIGHT,
      children: e => (0, a.jsxs)("div", {
        className: l()(G.content, e),
        ref: es,
        children: [(0, a.jsx)("div", {
          className: G.slidesContainer,
          children: (0, a.jsxs)(c.MyZ, {
            activeSlide: P,
            onSlideReady: e => B(e),
            centered: false,
            width: el,
            children: [(0, a.jsx)(c.Mi4, {
              id: y.F.AGE_GATE,
              children: (0, a.jsx)("div", {
                className: G.container,
                children: (0, a.jsx)(x.Z, {
                  onComplete: () => {
                    J ? S() : U(y.F.CHOOSE_TEMPLATE)
                  },
                  onClose: S
                })
              })
            }), (0, a.jsx)(c.Mi4, {
              id: y.F.CHOOSE_TEMPLATE,
              impressionName: i.ImpressionNames.GUILD_ADD_LANDING,
              impressionProperties: ei,
              children: (0, a.jsx)("div", {
                className: l()(G.container, G.shortFooter),
                children: (0, a.jsx)(h.Z, {
                  className: G.templates,
                  onChooseTemplate: K,
                  isNewUser: true
                })
              })
            }), (0, a.jsx)(c.Mi4, {
              id: y.F.CREATION_INTENT,
              impressionName: i.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
              impressionProperties: ei,
              children: (0, a.jsx)("div", {
                className: l()(G.container, G.standardFooter),
                children: q
              })
            }), (0, a.jsx)(c.Mi4, {
              id: y.F.CUSTOMIZE_GUILD,
              impressionName: i.ImpressionNames.GUILD_ADD_CUSTOMIZE,
              impressionProperties: ei,
              children: (0, a.jsx)("div", {
                className: l()(G.container, G.standardFooter),
                children: Q
              })
            }), (0, a.jsx)(c.Mi4, {
              id: y.F.CHANNEL_PROMPT,
              impressionName: i.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
              impressionProperties: ei,
              children: (0, a.jsx)("div", {
                className: l()(G.container, G.standardFooter),
                children: ee
              })
            }), (0, a.jsx)(c.Mi4, {
              id: y.F.JOIN_GUILD,
              impressionName: i.ImpressionNames.GUILD_ADD_JOIN,
              impressionProperties: ei,
              children: (0, a.jsx)("div", {
                className: l()(G.container, G.standardFooter),
                children: en
              })
            })]
          })
        }), P !== y.F.AGE_GATE ? (0, a.jsx)(c.olH, {
          onClick: S,
          className: G.closeButton
        }) : null, P === y.F.CHOOSE_TEMPLATE ? (0, a.jsx)(c.mzw, {
          justify: d.Z.Justify.BETWEEN,
          className: l()(G.footer, G.join),
          children: (0, a.jsx)(c.Anchor, {
            className: G.joinCTA,
            onClick: () => {
              U(y.F.JOIN_GUILD)
            },
            children: (0, a.jsxs)(c.Text, {
              variant: "text-sm/medium",
              className: G.joinCTA,
              children: [g.intl.string(g.t["N+Mi/U"]), " ", g.intl.string(g.t.yRjK4p)]
            })
          })
        }) : null, null != eo ? (0, a.jsx)(c.mzw, {
          justify: d.Z.Justify.BETWEEN,
          className: G.footer,
          children: eo
        }) : null]
      })
    })]
  }))
}