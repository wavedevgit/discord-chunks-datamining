/** Chunk was on 9536 **/
/** chunk id: 976983, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  B: () => v,
  Z: () => j
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk762524 = require("./762524.js");

function h(e) {
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
    singleColumn: O,
    promptIndex: C,
    option: y,
    hasError: N,
    onDragStart: E,
    onDragComplete: I,
    onDragReset: S
  } = e, _ = null, T = s().findIndex(v.options, e => e.id === y.id), {
    drag: P,
    dragSourcePosition: w,
    drop: Z,
    setIsDraggable: R
  } = (0, d.Z)({
    type: "ONBOARDING_PROMPT_OPTION_CARD-".concat(v.id),
    index: T,
    optionId: y.id,
    onDragStart: E,
    onDragComplete: I,
    onDragReset: S
  }), {
    customEmoji: D,
    unicodeEmoji: A
  } = (0, u.Z)(null == (t = y.emoji) ? true : t.id, null == (i = y.emoji) ? true : i.name);
  return (0, f.Oq)(y.emoji) || null != D || null != A || (_ = p.intl.string(p.t["61wfmh"])), (0, r.jsxs)(o.P3F, {
    className: l()(b.optionCard, {
      [b.hasError]: N || null != _,
      [b.dropIndicatorBefore]: null != w && T < w,
      [b.dropIndicatorAfter]: null != w && T > w,
      [b.singleColumn]: O
    }),
    onClick: () => (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("1862").then(n.bind(n, 801001));
      return t => (0, r.jsx)(e, x(h({}, t), {
        guild: j,
        prompt: v,
        option: y,
        index: C,
        onSave: e => {
          (0, m.Kk)(j, v.id, {
            options: v.options.map(t => t.id === y.id ? e : t)
          })
        },
        onDelete: () => {
          (0, m.Kk)(j, v.id, {
            options: v.options.filter(e => e.id !== y.id)
          })
        }
      }))
    }),
    onMouseEnter: () => R(true),
    onMouseLeave: () => R(false),
    innerRef: e => {
      P(Z(e))
    },
    children: [(0, r.jsx)("div", {
      className: b.dragContainer,
      children: (0, r.jsx)(o.Vni, {
        size: "xs",
        color: "currentColor",
        className: b.__invalid_dragIcon
      })
    }), (0, r.jsxs)("div", {
      className: b.optionCardRow,
      children: [(0, r.jsx)("div", {
        className: b.emoji,
        children: (0, r.jsx)(g.Z, {
          emojiId: null == (a = y.emoji) ? true : a.id,
          emojiName: null == (c = y.emoji) ? true : c.name,
          defaultComponent: null
        })
      }), (0, r.jsxs)("div", {
        className: b.text,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          lineClamp: 1,
          children: y.title
        }), "" !== y.description && (0, r.jsx)(o.Text, {
          className: b.description,
          variant: "text-xs/normal",
          color: "text-default",
          children: y.description
        })]
      })]
    }), null != _ && (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-feedback-critical",
      children: _
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
      return n => (0, r.jsx)(e, x(h({}, n), {
        guild: t,
        prompt: i,
        onSave: e => (0, m.Kk)(t, i.id, {
          options: [...i.options, e]
        }),
        onDelete: () => {},
        index: a
      }))
    })
  };
  return (0, r.jsx)(o.P3F, {
    className: l()(b.optionCard, b.addOptionCard, {
      [b.addFirstOptionCard]: 0 === i.options.length,
      [b.singleColumn]: s
    }),
    onClick: () => {
      i.options.length + 1 === f.fY ? c.Z.show({
        title: p.intl.string(p.t.TggC7k),
        body: p.intl.formatToPlainString(p.t.kPQKai, {
          thresholdCount: f.fY
        }),
        confirmText: p.intl.string(p.t.BddRzS),
        cancelText: p.intl.string(p.t["ETE/oC"]),
        onConfirm: d
      }) : d()
    },
    children: (0, r.jsxs)("div", {
      className: b.optionCardRow,
      children: [(0, r.jsx)(o.oFk, {
        size: "md",
        color: "currentColor",
        className: b.plusIcon
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: p.intl.string(p.t.Ty3lgp)
      })]
    })
  })
}