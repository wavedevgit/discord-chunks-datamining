/** Chunk was on 24028 **/
/** chunk id: 599219, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk22742 = require("./22742.js");

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
  let t = (0, f.Dt)(),
    {
      onSlideChange: n
    } = e,
    i = function(e, t) {
      if (null == e) return {};
      var n, a, o = function(e, t) {
        if (null == e) return {};
        var n, a, o = {},
          i = Object.keys(e);
        for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(e, ["onSlideChange"]),
    {
      onClose: S
    } = i,
    [L, w] = o.useState(false),
    M = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
    k = null != M && null == M.nsfwAllowed,
    [P, U] = o.useState(k ? j.F.AGE_GATE : j.F.CHOOSE_TEMPLATE),
    [R, B] = o.useState(null);
  o.useEffect(() => {
    n(L ? j.F.COMPLETE : P)
  }, [n, P, L]);
  let [Z, H] = o.useState(null), [W, z] = o.useState(null), [Y, V] = o.useState(false), J = (0, l.e7)([N.Z], () => N.Z.getType() === g.M5.INVITE_UNCLAIMED), K = o.useCallback(e => {
    z(e), U(j.F.CREATION_INTENT), E.default.track(O.rMx.GUILD_TEMPLATE_SELECTED, {
      template_name: e.label,
      template_code: e.code
    })
  }, [z, U]), {
    content: q,
    footer: X
  } = (0, b.v)({
    hasFooter: false,
    onBack: () => {
      z(null), U(j.F.CHOOSE_TEMPLATE)
    },
    onCreationIntentChosen: e => {
      V(e === v.lr.COMMUNITY), U(j.F.CUSTOMIZE_GUILD)
    }
  }), {
    content: Q,
    footer: $
  } = (0, m.G)({
    guildTemplate: W,
    titleClassName: G.customizeGuildTitle,
    hasFooter: false,
    onGuildCreated: e => {
      H(e), (null == W ? true : W.id) === y.l.CREATE ? U(j.F.CHANNEL_PROMPT) : w(true)
    },
    onBack: () => {
      U(j.F.CREATION_INTENT)
    },
    isSlideReady: R === j.F.CUSTOMIZE_GUILD,
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
    isSlideReady: R === j.F.CHANNEL_PROMPT
  }), {
    content: en,
    footer: ea
  } = (0, A.Z)({
    onBack: () => U(j.F.CHOOSE_TEMPLATE),
    onComplete: () => {
      S()
    },
    onConnect: S,
    isSlideReady: R === j.F.JOIN_GUILD
  }), eo = null;
  switch (P) {
    case j.F.CUSTOMIZE_GUILD:
      eo = $;
      break;
    case j.F.CHANNEL_PROMPT:
      eo = et;
      break;
    case j.F.JOIN_GUILD:
      eo = ea;
      break;
    case j.F.CREATION_INTENT:
      eo = X
  }
  let {
    ref: ei,
    width: es
  } = (0, d.ZP)();
  if (L) return (0, a.jsx)(c.Y0X, D(F({}, i), {
    "data-migration-pending": true,
    size: c.CgR.MEDIUM,
    className: s()(G.modal, G.completed),
    "aria-labelledby": t,
    parentComponent: "NUFModal",
    children: (0, a.jsx)(T.Z, {
      onComplete: S
    })
  }));
  let er = {
    impression_group: r.ImpressionGroups.GUILD_ADD_NUF
  };
  return (0, a.jsxs)(c.Y0X, D(F({}, i), {
    "data-migration-pending": true,
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
        className: s()(G.content, e),
        ref: ei,
        children: [(0, a.jsx)("div", {
          className: G.slidesContainer,
          children: (0, a.jsxs)(c.MyZ, {
            activeSlide: P,
            onSlideReady: e => B(e),
            centered: false,
            width: es,
            children: [(0, a.jsx)(c.Mi4, {
              id: j.F.AGE_GATE,
              children: (0, a.jsx)("div", {
                className: G.container,
                children: (0, a.jsx)(x.Z, {
                  onComplete: () => {
                    J ? S() : U(j.F.CHOOSE_TEMPLATE)
                  },
                  onClose: S
                })
              })
            }), (0, a.jsx)(c.Mi4, {
              id: j.F.CHOOSE_TEMPLATE,
              impressionName: r.ImpressionNames.GUILD_ADD_LANDING,
              impressionProperties: er,
              children: (0, a.jsx)("div", {
                className: s()(G.container, G.shortFooter),
                children: (0, a.jsx)(_.Z, {
                  className: G.templates,
                  onChooseTemplate: K,
                  isNewUser: true
                })
              })
            }), (0, a.jsx)(c.Mi4, {
              id: j.F.CREATION_INTENT,
              impressionName: r.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
              impressionProperties: er,
              children: (0, a.jsx)("div", {
                className: s()(G.container, G.standardFooter),
                children: q
              })
            }), (0, a.jsx)(c.Mi4, {
              id: j.F.CUSTOMIZE_GUILD,
              impressionName: r.ImpressionNames.GUILD_ADD_CUSTOMIZE,
              impressionProperties: er,
              children: (0, a.jsx)("div", {
                className: s()(G.container, G.standardFooter),
                children: Q
              })
            }), (0, a.jsx)(c.Mi4, {
              id: j.F.CHANNEL_PROMPT,
              impressionName: r.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
              impressionProperties: er,
              children: (0, a.jsx)("div", {
                className: s()(G.container, G.standardFooter),
                children: ee
              })
            }), (0, a.jsx)(c.Mi4, {
              id: j.F.JOIN_GUILD,
              impressionName: r.ImpressionNames.GUILD_ADD_JOIN,
              impressionProperties: er,
              children: (0, a.jsx)("div", {
                className: s()(G.container, G.standardFooter),
                children: en
              })
            })]
          })
        }), P !== j.F.AGE_GATE ? (0, a.jsx)(c.olH, {
          "data-migration-pending": true,
          onClick: S,
          className: G.closeButton
        }) : null, P === j.F.CHOOSE_TEMPLATE ? (0, a.jsx)(c.mzw, {
          "data-migration-pending": true,
          justify: u.Z.Justify.BETWEEN,
          className: s()(G.footer, G.join),
          children: (0, a.jsx)(c.eee, {
            className: G.joinCTA,
            onClick: () => {
              U(j.F.JOIN_GUILD)
            },
            children: (0, a.jsxs)(c.Text, {
              variant: "text-sm/medium",
              className: G.joinCTA,
              children: [I.intl.string(I.t["N+Mi/U"]), " ", I.intl.string(I.t.yRjK4p)]
            })
          })
        }) : null, null != eo ? (0, a.jsx)(c.mzw, {
          "data-migration-pending": true,
          justify: u.Z.Justify.BETWEEN,
          className: G.footer,
          children: eo
        }) : null]
      })
    })]
  }))
}