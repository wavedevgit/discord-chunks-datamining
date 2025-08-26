/** Chunk was on 88479 **/
/** chunk id: 976983, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => v,
  Z: () => j
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk603211 = require("./603211.js"),
  Chunk307707 = require("./307707.js"),
  Chunk216701 = require("./216701.jsx"),
  Chunk570961 = require("./570961.js"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk900492 = require("./900492.js");

function b(e) {
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

function x(e, t) {
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

function j(e) {
  var t, i, a, c;
  let {
    guild: j,
    prompt: v,
    singleColumn: _,
    promptIndex: O,
    option: y,
    hasError: C,
    onDragStart: N,
    onDragComplete: E,
    onDragReset: I
  } = e, S = null, T = s().findIndex(v.options, e => e.id === y.id), {
    drag: P,
    dragSourcePosition: w,
    drop: R,
    setIsDraggable: Z
  } = (0, d.Z)({
    type: "ONBOARDING_PROMPT_OPTION_CARD-".concat(v.id),
    index: T,
    optionId: y.id,
    onDragStart: N,
    onDragComplete: E,
    onDragReset: I
  }), {
    customEmoji: D,
    unicodeEmoji: A
  } = (0, u.Z)(null == (t = y.emoji) ? true : t.id, null == (i = y.emoji) ? true : i.name);
  return (0, p.Oq)(y.emoji) || null != D || null != A || (S = h.intl.string(h.t["61wfmp"])), (0, r.jsxs)(o.P3F, {
    className: l()(f.optionCard, {
      [f.hasError]: C || null != S,
      [f.dropIndicatorBefore]: null != w && T < w,
      [f.dropIndicatorAfter]: null != w && T > w,
      [f.singleColumn]: _
    }),
    onClick: () => (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("1862").then(n.bind(n, 801001));
      return t => (0, r.jsx)(e, x(b({}, t), {
        guild: j,
        prompt: v,
        option: y,
        index: O,
        onSave: e => {
          (0, g.Kk)(j, v.id, {
            options: v.options.map(t => t.id === y.id ? e : t)
          })
        },
        onDelete: () => {
          (0, g.Kk)(j, v.id, {
            options: v.options.filter(e => e.id !== y.id)
          })
        }
      }))
    }),
    onMouseEnter: () => Z(true),
    onMouseLeave: () => Z(false),
    innerRef: e => {
      P(R(e))
    },
    children: [(0, r.jsx)("div", {
      className: f.dragContainer,
      children: (0, r.jsx)(o.Vni, {
        size: "xs",
        color: "currentColor",
        className: f.__invalid_dragIcon
      })
    }), (0, r.jsxs)("div", {
      className: f.optionCardRow,
      children: [(0, r.jsx)("div", {
        className: f.emoji,
        children: (0, r.jsx)(m.Z, {
          emojiId: null == (a = y.emoji) ? true : a.id,
          emojiName: null == (c = y.emoji) ? true : c.name,
          defaultComponent: null
        })
      }), (0, r.jsxs)("div", {
        className: f.text,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          lineClamp: 1,
          children: y.title
        }), "" !== y.description && (0, r.jsx)(o.Text, {
          className: f.description,
          variant: "text-xs/normal",
          color: "header-secondary",
          children: y.description
        })]
      })]
    }), null != S && (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: S
    })]
  })
}

function v(e) {
  let {
    guild: t,
    prompt: i,
    promptIndex: a,
    singleColumn: s
  } = e, d = () => {
    (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("1862").then(n.bind(n, 801001));
      return n => (0, r.jsx)(e, x(b({}, n), {
        guild: t,
        prompt: i,
        onSave: e => (0, g.Kk)(t, i.id, {
          options: [...i.options, e]
        }),
        onDelete: () => {},
        index: a
      }))
    })
  };
  return (0, r.jsx)(o.P3F, {
    className: l()(f.optionCard, f.addOptionCard, {
      [f.addFirstOptionCard]: 0 === i.options.length,
      [f.singleColumn]: s
    }),
    onClick: () => {
      i.options.length + 1 === p.fY ? c.Z.show({
        title: h.intl.string(h.t.TggC7u),
        body: h.intl.formatToPlainString(h.t.kPQKam, {
          thresholdCount: p.fY
        }),
        confirmText: h.intl.string(h.t.BddRzc),
        cancelText: h.intl.string(h.t["ETE/oK"]),
        onConfirm: d
      }) : d()
    },
    children: (0, r.jsxs)("div", {
      className: f.optionCardRow,
      children: [(0, r.jsx)(o.oFk, {
        size: "md",
        color: "currentColor",
        className: f.plusIcon
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: h.intl.string(h.t.Ty3lgo)
      })]
    })
  })
}