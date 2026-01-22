/** Chunk was on 81890 **/
/** chunk id: 218318, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => U
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk765671 = require("./765671.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk362311 = require("./362311.jsx"),
  Chunk230801 = require("./230801.jsx"),
  Chunk424912 = require("./424912.jsx"),
  Chunk468820 = require("./468820.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk426620 = require("./426620.js"),
  Chunk603738 = require("./603738.jsx"),
  Chunk701077 = require("./701077.jsx"),
  Chunk758384 = require("./758384.jsx"),
  Chunk239763 = require("./239763.jsx"),
  Chunk771016 = require("./771016.js"),
  Chunk994277 = require("./994277.js"),
  Chunk652215 = require("./652215.js"),
  Chunk570465 = require("./570465.js"),
  Chunk819638 = require("./819638.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk147732 = require("./147732.js");

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
      return Object.getOwnPropertyDescriptor(a, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = a[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      a.push.apply(a, n)
    }
    return a
  })(Object(t)).forEach(function(a) {
    Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
  }), e
}

function U(e) {
  let t = (0, f.GV)(),
    {
      onSlideChange: a
    } = e,
    i = function(e, t) {
      if (null == e) return {};
      var a, n, l, i = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, a = Reflect.ownKeys(e); l < a.length; l++) n = a[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }
      if (i = function(e, t) {
          if (null == e) return {};
          var a, n, l = {},
            i = Object.getOwnPropertyNames(e);
          for (n = 0; n < i.length; n++) a = i[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (l[a] = e[a]);
          return l
        }(e, t), Object.getOwnPropertySymbols)
        for (l = 0, a = Object.getOwnPropertySymbols(e); l < a.length; l++) n = a[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      return i
    }(e, ["onSlideChange"]),
    {
      onClose: U
    } = i,
    [L, k] = l.useState(false),
    w = (0, c.bG)([E.default], () => E.default.getCurrentUser()),
    R = null != w && null == w.nsfwAllowed,
    [M, P] = l.useState(R ? O.i.AGE_GATE : O.i.CHOOSE_TEMPLATE),
    [W, H] = l.useState(null);
  l.useEffect(() => {
    a(L ? O.i.COMPLETE : M)
  }, [a, M, L]);
  let [V, F] = l.useState(null), [q, J] = l.useState(null), [Y, z] = l.useState(false), B = (0, c.bG)([h.A], () => h.A.getType() === j.zY.INVITE_UNCLAIMED), Z = l.useCallback(e => {
    J(e), P(O.i.CREATION_INTENT), N.default.track(g.HAw.GUILD_TEMPLATE_SELECTED, {
      template_name: e.label,
      template_code: e.code
    })
  }, [J, P]), {
    content: K,
    footer: Q
  } = (0, _.u)({
    hasFooter: false,
    onBack: () => {
      J(null), P(O.i.CHOOSE_TEMPLATE)
    },
    onCreationIntentChosen: e => {
      z(e === D.IR.COMMUNITY), P(O.i.CUSTOMIZE_GUILD)
    }
  }), {
    content: $,
    footer: X
  } = (0, m.D)({
    guildTemplate: q,
    titleClassName: C.RH,
    hasFooter: false,
    onGuildCreated: e => {
      F(e), (null == q ? true : q.id) === v.v.CREATE ? P(O.i.CHANNEL_PROMPT) : k(true)
    },
    onBack: () => {
      P(O.i.CREATION_INTENT)
    },
    isSlideReady: W === O.i.CUSTOMIZE_GUILD,
    isCommunity: Y
  }), {
    content: ee,
    footer: et
  } = (0, b.m)({
    createdGuildId: V,
    hasFooter: false,
    onChannelPromptCompleted: () => {
      k(true)
    },
    isSlideReady: W === O.i.CHANNEL_PROMPT
  }), {
    content: ea,
    footer: en
  } = (0, T.A)({
    onBack: () => P(O.i.CHOOSE_TEMPLATE),
    onComplete: () => {
      U()
    },
    onConnect: U,
    isSlideReady: W === O.i.JOIN_GUILD
  }), el = null;
  switch (M) {
    case O.i.CUSTOMIZE_GUILD:
      el = X;
      break;
    case O.i.CHANNEL_PROMPT:
      el = et;
      break;
    case O.i.JOIN_GUILD:
      el = en;
      break;
    case O.i.CREATION_INTENT:
      el = Q
  }
  let {
    ref: ei,
    width: es
  } = (0, d.Ay)();
  if (L) return (0, n.jsx)(o.EOs, S(G({}, i), {
    "data-migration-pending": true,
    size: o.rIJ.MEDIUM,
    className: s()(C.yl, C.so),
    "aria-labelledby": t,
    parentComponent: "NUFModal",
    children: (0, n.jsx)(A.A, {
      onComplete: U
    })
  }));
  let er = {
    impression_group: r.ImpressionGroups.GUILD_ADD_NUF
  };
  return (0, n.jsxs)(o.EOs, S(G({}, i), {
    "data-migration-pending": true,
    size: o.rIJ.MEDIUM,
    className: C.yl,
    "aria-labelledby": t,
    parentComponent: "NUFModal",
    children: [(0, n.jsx)("div", {
      className: C.pz,
      children: (0, n.jsx)(y.A, {
        step: M
      })
    }), (0, n.jsx)(o.NPJ, {
      theme: g.NJ8.LIGHT,
      children: e => (0, n.jsxs)("div", {
        className: s()(C.Qs, e),
        ref: ei,
        children: [(0, n.jsx)("div", {
          className: C.WT,
          children: (0, n.jsxs)(o.tN_, {
            activeSlide: M,
            onSlideReady: e => H(e),
            centered: false,
            width: es,
            children: [(0, n.jsx)(o.q7S, {
              id: O.i.AGE_GATE,
              children: (0, n.jsx)("div", {
                className: C.kL,
                children: (0, n.jsx)(x.A, {
                  onComplete: () => {
                    B ? U() : P(O.i.CHOOSE_TEMPLATE)
                  },
                  onClose: U
                })
              })
            }), (0, n.jsx)(o.q7S, {
              id: O.i.CHOOSE_TEMPLATE,
              impressionName: r.ImpressionNames.GUILD_ADD_LANDING,
              impressionProperties: er,
              children: (0, n.jsx)("div", {
                className: s()(C.kL, C.yT),
                children: (0, n.jsx)(p.A, {
                  className: C.kT,
                  onChooseTemplate: Z,
                  isNewUser: true
                })
              })
            }), (0, n.jsx)(o.q7S, {
              id: O.i.CREATION_INTENT,
              impressionName: r.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
              impressionProperties: er,
              children: (0, n.jsx)("div", {
                className: s()(C.kL, C.tn),
                children: K
              })
            }), (0, n.jsx)(o.q7S, {
              id: O.i.CUSTOMIZE_GUILD,
              impressionName: r.ImpressionNames.GUILD_ADD_CUSTOMIZE,
              impressionProperties: er,
              children: (0, n.jsx)("div", {
                className: s()(C.kL, C.tn),
                children: $
              })
            }), (0, n.jsx)(o.q7S, {
              id: O.i.CHANNEL_PROMPT,
              impressionName: r.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
              impressionProperties: er,
              children: (0, n.jsx)("div", {
                className: s()(C.kL, C.tn),
                children: ee
              })
            }), (0, n.jsx)(o.q7S, {
              id: O.i.JOIN_GUILD,
              impressionName: r.ImpressionNames.GUILD_ADD_JOIN,
              impressionProperties: er,
              children: (0, n.jsx)("div", {
                className: s()(C.kL, C.tn),
                children: ea
              })
            })]
          })
        }), M !== O.i.AGE_GATE ? (0, n.jsx)(o.s_y, {
          "data-migration-pending": true,
          onClick: U,
          className: C.b
        }) : null, M === O.i.CHOOSE_TEMPLATE ? (0, n.jsx)(o.jlY, {
          "data-migration-pending": true,
          justify: u.A.Justify.BETWEEN,
          className: s()(C.qr, C.fj),
          children: (0, n.jsx)(o.MzZ, {
            className: C.D3,
            onClick: () => {
              P(O.i.JOIN_GUILD)
            },
            children: (0, n.jsxs)(o.Text, {
              variant: "text-sm/medium",
              className: C.D3,
              children: [I.intl.string(I.t["N+Mi/U"]), " ", I.intl.string(I.t.yRjK4p)]
            })
          })
        }) : null, null != el ? (0, n.jsx)(o.jlY, {
          "data-migration-pending": true,
          justify: u.A.Justify.BETWEEN,
          className: C.qr,
          children: el
        }) : null]
      })
    })]
  }))
}