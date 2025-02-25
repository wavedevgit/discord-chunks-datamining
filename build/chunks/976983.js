/** Chunk was on 71567 **/
"use strict";
n.d(t, {
  B: () => v,
  Z: () => N
}), n(266796), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(392711),
  l = n.n(a),
  o = n(481060),
  c = n(668781),
  d = n(603211),
  u = n(107862),
  m = n(307707),
  p = n(216701),
  g = n(570961),
  h = n(290511),
  f = n(388032),
  b = n(995265);

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function j(e, t) {
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

function N(e) {
  var t, i, a, c;
  let {
    guild: u,
    prompt: N,
    singleColumn: v,
    promptIndex: _,
    option: O,
    hasError: y,
    onDragStart: C,
    onDragComplete: I,
    onDragReset: E
  } = e, S = null, T = l().findIndex(N.options, e => e.id === O.id), {
    drag: P,
    dragSourcePosition: w,
    drop: R,
    setIsDraggable: D
  } = (0, d.Z)({
    type: "ONBOARDING_PROMPT_OPTION_CARD-".concat(N.id),
    index: T,
    optionId: O.id,
    onDragStart: C,
    onDragComplete: I,
    onDragReset: E
  }), {
    customEmoji: Z,
    unicodeEmoji: k
  } = (0, m.Z)(null === (t = O.emoji) || void 0 === t ? void 0 : t.id, null === (i = O.emoji) || void 0 === i ? void 0 : i.name);
  return (0, h.Oq)(O.emoji) || null != Z || null != k || (S = f.NW.string(f.t["61wfmp"])), (0, r.jsxs)(o.P3F, {
    className: s()(b.optionCard, {
      [b.hasError]: y || null != S,
      [b.dropIndicatorBefore]: null != w && T < w,
      [b.dropIndicatorAfter]: null != w && T > w,
      [b.singleColumn]: v
    }),
    onClick: () => (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("1862").then(n.bind(n, 801001));
      return t => (0, r.jsx)(e, j(x({}, t), {
        guild: u,
        prompt: N,
        option: O,
        index: _,
        onSave: e => {
          (0, g.Kk)(u, N.id, {
            options: N.options.map(t => t.id === O.id ? e : t)
          })
        },
        onDelete: () => {
          (0, g.Kk)(u, N.id, {
            options: N.options.filter(e => e.id !== O.id)
          })
        }
      }))
    }),
    onMouseEnter: () => D(!0),
    onMouseLeave: () => D(!1),
    innerRef: e => P(R(e)),
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
        children: (0, r.jsx)(p.Z, {
          emojiId: null === (a = O.emoji) || void 0 === a ? void 0 : a.id,
          emojiName: null === (c = O.emoji) || void 0 === c ? void 0 : c.name,
          defaultComponent: null
        })
      }), (0, r.jsxs)("div", {
        className: b.text,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          lineClamp: 1,
          children: O.title
        }), "" !== O.description && (0, r.jsx)(o.Text, {
          className: b.description,
          variant: "text-xs/normal",
          color: "header-secondary",
          children: O.description
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
    singleColumn: l
  } = e, {
    dropdownsAllowed: d
  } = (0, u.Ug)(t.id), m = () => {
    (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("1862").then(n.bind(n, 801001));
      return n => (0, r.jsx)(e, j(x({}, n), {
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
    className: s()(b.optionCard, b.addOptionCard, {
      [b.addFirstOptionCard]: 0 === i.options.length,
      [b.singleColumn]: l
    }),
    onClick: () => {
      d && i.options.length + 1 === h.fY ? c.Z.show({
        title: f.NW.string(f.t.TggC7u),
        body: f.NW.formatToPlainString(f.t.kPQKam, {
          thresholdCount: h.fY
        }),
        confirmText: f.NW.string(f.t.BddRzc),
        cancelText: f.NW.string(f.t["ETE/oK"]),
        onConfirm: m
      }) : m()
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
        children: f.NW.string(f.t.Ty3lgo)
      })]
    })
  })
}