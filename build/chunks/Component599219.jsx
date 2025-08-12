/** Chunk was on 396 **/
/** chunk id: 599219, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk995554 = require("./995554.js");

function w(e) {
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

function F(e, t) {
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

function S(e) {
  let t = (0, f.Dt)(),
    {
      onSlideChange: n
    } = e,
    a = function(e, t) {
      if (null == e) return {};
      var n, r, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(e, ["onSlideChange"]),
    {
      onClose: S
    } = a,
    [L, P] = o.useState(false),
    D = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
    G = null != D && null == D.nsfwAllowed,
    [M, k] = o.useState(G ? T.F.AGE_GATE : T.F.CHOOSE_TEMPLATE),
    [B, U] = o.useState(null);
  o.useEffect(() => {
    n(L ? T.F.COMPLETE : M)
  }, [n, M, L]);
  let [R, z] = o.useState(null), [H, W] = o.useState(null), [J, Y] = o.useState(false), V = (0, l.e7)([N.Z], () => N.Z.getType() === C.M5.INVITE_UNCLAIMED), q = o.useCallback(e => {
    W(e), k(T.F.CREATION_INTENT), x.default.track(g.rMx.GUILD_TEMPLATE_SELECTED, {
      template_name: e.label,
      template_code: e.code
    })
  }, [W, k]), {
    content: X,
    footer: K
  } = (0, p.v)({
    hasFooter: false,
    onBack: () => {
      W(null), k(T.F.CHOOSE_TEMPLATE)
    },
    onCreationIntentChosen: e => {
      Y(e === I.lr.COMMUNITY), k(T.F.CUSTOMIZE_GUILD)
    }
  }), {
    content: $,
    footer: Q
  } = (0, b.G)({
    guildTemplate: H,
    titleClassName: Z.customizeGuildTitle,
    hasFooter: false,
    onGuildCreated: e => {
      z(e), (null == H ? true : H.id) === O.l.CREATE ? k(T.F.CHANNEL_PROMPT) : P(true)
    },
    onBack: () => {
      k(T.F.CREATION_INTENT)
    },
    isSlideReady: B === T.F.CUSTOMIZE_GUILD,
    isCommunity: J
  }), {
    content: ee,
    footer: et
  } = (0, _.F)({
    createdGuildId: R,
    hasFooter: false,
    onChannelPromptCompleted: () => {
      P(true)
    },
    isSlideReady: B === T.F.CHANNEL_PROMPT
  }), {
    content: en,
    footer: er
  } = (0, j.Z)({
    onBack: () => k(T.F.CHOOSE_TEMPLATE),
    onComplete: () => {
      S()
    },
    onConnect: S,
    isSlideReady: B === T.F.JOIN_GUILD
  }), eo = null;
  switch (M) {
    case T.F.CUSTOMIZE_GUILD:
      eo = Q;
      break;
    case T.F.CHANNEL_PROMPT:
      eo = et;
      break;
    case T.F.JOIN_GUILD:
      eo = er;
      break;
    case T.F.CREATION_INTENT:
      eo = K
  }
  let {
    ref: ea,
    width: es
  } = (0, u.ZP)();
  if (L) return (0, r.jsx)(c.Y0X, F(w({}, a), {
    size: c.CgR.MEDIUM,
    className: s()(Z.modal, Z.completed),
    "aria-labelledby": t,
    parentComponent: "NUFModal",
    children: (0, r.jsx)(v.Z, {
      onComplete: S
    })
  }));
  let ei = {
    impression_group: i.ImpressionGroups.GUILD_ADD_NUF
  };
  return (0, r.jsxs)(c.Y0X, F(w({}, a), {
    size: c.CgR.MEDIUM,
    className: Z.modal,
    "aria-labelledby": t,
    parentComponent: "NUFModal",
    children: [(0, r.jsx)("div", {
      className: Z.sidebar,
      children: (0, r.jsx)(E.Z, {
        step: M
      })
    }), (0, r.jsx)(c.f6W, {
      theme: g.BRd.LIGHT,
      children: e => (0, r.jsxs)("div", {
        className: s()(Z.content, e),
        ref: ea,
        children: [(0, r.jsx)("div", {
          className: Z.slidesContainer,
          children: (0, r.jsxs)(c.MyZ, {
            activeSlide: M,
            onSlideReady: e => U(e),
            centered: false,
            width: es,
            children: [(0, r.jsx)(c.Mi4, {
              id: T.F.AGE_GATE,
              children: (0, r.jsx)("div", {
                className: Z.container,
                children: (0, r.jsx)(y.Z, {
                  onComplete: () => {
                    V ? S() : k(T.F.CHOOSE_TEMPLATE)
                  },
                  onClose: S
                })
              })
            }), (0, r.jsx)(c.Mi4, {
              id: T.F.CHOOSE_TEMPLATE,
              impressionName: i.ImpressionNames.GUILD_ADD_LANDING,
              impressionProperties: ei,
              children: (0, r.jsx)("div", {
                className: s()(Z.container, Z.shortFooter),
                children: (0, r.jsx)(m.Z, {
                  className: Z.templates,
                  onChooseTemplate: q,
                  isNewUser: true
                })
              })
            }), (0, r.jsx)(c.Mi4, {
              id: T.F.CREATION_INTENT,
              impressionName: i.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
              impressionProperties: ei,
              children: (0, r.jsx)("div", {
                className: s()(Z.container, Z.standardFooter),
                children: X
              })
            }), (0, r.jsx)(c.Mi4, {
              id: T.F.CUSTOMIZE_GUILD,
              impressionName: i.ImpressionNames.GUILD_ADD_CUSTOMIZE,
              impressionProperties: ei,
              children: (0, r.jsx)("div", {
                className: s()(Z.container, Z.standardFooter),
                children: $
              })
            }), (0, r.jsx)(c.Mi4, {
              id: T.F.CHANNEL_PROMPT,
              impressionName: i.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
              impressionProperties: ei,
              children: (0, r.jsx)("div", {
                className: s()(Z.container, Z.standardFooter),
                children: ee
              })
            }), (0, r.jsx)(c.Mi4, {
              id: T.F.JOIN_GUILD,
              impressionName: i.ImpressionNames.GUILD_ADD_JOIN,
              impressionProperties: ei,
              children: (0, r.jsx)("div", {
                className: s()(Z.container, Z.standardFooter),
                children: en
              })
            })]
          })
        }), M !== T.F.AGE_GATE ? (0, r.jsx)(c.olH, {
          onClick: S,
          className: Z.closeButton
        }) : null, M === T.F.CHOOSE_TEMPLATE ? (0, r.jsx)(c.mzw, {
          justify: d.Z.Justify.BETWEEN,
          className: s()(Z.footer, Z.join),
          children: (0, r.jsx)(c.eee, {
            className: Z.joinCTA,
            onClick: () => {
              k(T.F.JOIN_GUILD)
            },
            children: (0, r.jsxs)(c.Text, {
              variant: "text-sm/medium",
              className: Z.joinCTA,
              children: [A.intl.string(A.t["N+Mi/f"]), " ", A.intl.string(A.t.yRjK4u)]
            })
          })
        }) : null, null != eo ? (0, r.jsx)(c.mzw, {
          justify: d.Z.Justify.BETWEEN,
          className: Z.footer,
          children: eo
        }) : null]
      })
    })]
  }))
}