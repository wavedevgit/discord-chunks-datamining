/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  B: () => x,
  Z: () => v
}), n(266796), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(392711),
  l = n.n(a),
  o = n(481060),
  A = n(668781),
  c = n(603211),
  d = n(107862),
  u = n(307707),
  g = n(216701),
  f = n(570961),
  m = n(290511),
  p = n(388032),
  h = n(597435);

function C(e) {
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

function b(e, t) {
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

function v(e) {
  var t, i, a, A;
  let {
    guild: d,
    prompt: v,
    singleColumn: x,
    promptIndex: N,
    option: j,
    hasError: E,
    onDragStart: I,
    onDragComplete: O,
    onDragReset: y
  } = e, w = null, P = l().findIndex(v.options, e => e.id === j.id), {
    drag: B,
    dragSourcePosition: D,
    drop: T,
    setIsDraggable: S
  } = (0, c.Z)({
    type: "ONBOARDING_PROMPT_OPTION_CARD-".concat(v.id),
    index: P,
    optionId: j.id,
    onDragStart: I,
    onDragComplete: O,
    onDragReset: y
  }), {
    customEmoji: L,
    unicodeEmoji: R
  } = (0, u.Z)(null === (t = j.emoji) || void 0 === t ? void 0 : t.id, null === (i = j.emoji) || void 0 === i ? void 0 : i.name);
  return (0, m.Oq)(j.emoji) || null != L || null != R || (w = p.NW.string(p.t["61wfmp"])), (0, r.jsxs)(o.P3F, {
    className: s()(h.optionCard, {
      [h.hasError]: E || null != w,
      [h.dropIndicatorBefore]: null != D && P < D,
      [h.dropIndicatorAfter]: null != D && P > D,
      [h.singleColumn]: x
    }),
    onClick: () => (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("1862").then(n.bind(n, 801001));
      return t => (0, r.jsx)(e, b(C({}, t), {
        guild: d,
        prompt: v,
        option: j,
        index: N,
        onSave: e => {
          (0, f.Kk)(d, v.id, {
            options: v.options.map(t => t.id === j.id ? e : t)
          })
        },
        onDelete: () => {
          (0, f.Kk)(d, v.id, {
            options: v.options.filter(e => e.id !== j.id)
          })
        }
      }))
    }),
    onMouseEnter: () => S(!0),
    onMouseLeave: () => S(!1),
    innerRef: e => B(T(e)),
    children: [(0, r.jsx)("div", {
      className: h.dragContainer,
      children: (0, r.jsx)(o.Vni, {
        size: "xs",
        color: "currentColor",
        className: h.__invalid_dragIcon
      })
    }), (0, r.jsxs)("div", {
      className: h.optionCardRow,
      children: [(0, r.jsx)("div", {
        className: h.emoji,
        children: (0, r.jsx)(g.Z, {
          emojiId: null === (a = j.emoji) || void 0 === a ? void 0 : a.id,
          emojiName: null === (A = j.emoji) || void 0 === A ? void 0 : A.name,
          defaultComponent: null
        })
      }), (0, r.jsxs)("div", {
        className: h.text,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          lineClamp: 1,
          children: j.title
        }), "" !== j.description && (0, r.jsx)(o.Text, {
          className: h.description,
          variant: "text-xs/normal",
          color: "header-secondary",
          children: j.description
        })]
      })]
    }), null != w && (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: w
    })]
  })
}

function x(e) {
  let {
    guild: t,
    prompt: i,
    promptIndex: a,
    singleColumn: l
  } = e, {
    dropdownsAllowed: c
  } = (0, d.Ug)(t.id), u = () => {
    (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("1862").then(n.bind(n, 801001));
      return n => (0, r.jsx)(e, b(C({}, n), {
        guild: t,
        prompt: i,
        onSave: e => (0, f.Kk)(t, i.id, {
          options: [...i.options, e]
        }),
        onDelete: () => {},
        index: a
      }))
    })
  };
  return (0, r.jsx)(o.P3F, {
    className: s()(h.optionCard, h.addOptionCard, {
      [h.addFirstOptionCard]: 0 === i.options.length,
      [h.singleColumn]: l
    }),
    onClick: () => {
      c && i.options.length + 1 === m.fY ? A.Z.show({
        title: p.NW.string(p.t.TggC7u),
        body: p.NW.formatToPlainString(p.t.kPQKam, {
          thresholdCount: m.fY
        }),
        confirmText: p.NW.string(p.t.BddRzc),
        cancelText: p.NW.string(p.t["ETE/oK"]),
        onConfirm: u
      }) : u()
    },
    children: (0, r.jsxs)("div", {
      className: h.optionCardRow,
      children: [(0, r.jsx)(o.oFk, {
        size: "md",
        color: "currentColor",
        className: h.plusIcon
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: p.NW.string(p.t.Ty3lgo)
      })]
    })
  })
}