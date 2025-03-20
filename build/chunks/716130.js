/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => N
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(399606),
  o = n(481060),
  A = n(668781),
  c = n(603211),
  d = n(710344),
  u = n(430824),
  g = n(570961),
  f = n(208665),
  m = n(959508),
  p = n(290511),
  h = n(388032),
  C = n(662607);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function v(e, t) {
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

function x(e) {
  let {
    guild: t,
    prejoinOnly: n,
    postjoinOnly: s
  } = e, A = (0, l.e7)([f.Z], () => f.Z.editedOnboardingPrompts), d = A.filter(e => e.inOnboarding), u = d.length, {
    drag: m,
    drop: b,
    dragSourcePosition: v,
    setIsDraggable: x
  } = (0, c.Z)({
    type: "ONBOARDING_PROMPT_CARD",
    index: u,
    optionId: "separator",
    onDragStart: () => {},
    onDragComplete: () => {},
    onDragReset: () => {}
  }), N = i.useRef(null);
  return i.useEffect(() => {
    x(!1)
  }, [x]), i.useEffect(() => {
    m(b(N))
  }, [m, b, N]), (0, r.jsxs)("div", {
    ref: N,
    className: a()(C.separatorSection, {
      [C.dropIndicatorBefore]: null != v && u < v,
      [C.dropIndicatorAfter]: null != v && u > v
    }),
    children: [!s && d.length < p.b3 ? (0, r.jsxs)(o.P3F, {
      className: C.addPrompt,
      onClick: () => (0, g.tS)(t, [...A, (0, p.yZ)(!0)], !1),
      children: [(0, r.jsx)(o.oFk, {
        size: "custom",
        color: "currentColor",
        className: C.plusIcon,
        width: 20,
        height: 20
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-brand",
        children: h.NW.string(h.t.ujFqu7)
      })]
    }) : null, n ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: C.divider
      }), (0, r.jsx)(o.X6q, {
        variant: "heading-md/bold",
        children: h.NW.string(h.t.tjrGcX)
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: C.subtitle,
        children: h.NW.string(h.t.XFa6Q0)
      })]
    })]
  })
}

function N(e) {
  let {
    guildId: t,
    prejoinOnly: n,
    postjoinOnly: i,
    includeCount: s,
    singleColumn: a
  } = e, c = (0, l.e7)([u.Z], () => u.Z.getGuild(t)), N = (0, l.e7)([f.Z], () => f.Z.editedOnboardingPrompts), j = N.filter(e => e.inOnboarding), E = N.filter(e => !0 !== e.inOnboarding), I = [...j.map(e => ({
    id: e.id,
    data: e
  })), {
    id: "separator",
    data: (0, p.ae)()
  }, ...E.map(e => ({
    id: e.id,
    data: e
  }))], {
    handleDragStart: O,
    handleDragReset: y,
    handleDragComplete: w
  } = (0, d.Z)(I, e => {
    let t = e.findIndex(e => "separator" === e.id),
      n = e.slice(0, t).map(e => v(b({}, e.data), {
        inOnboarding: !0
      })),
      r = e.slice(t + 1).map(e => v(b({}, e.data), {
        inOnboarding: !1,
        required: !1
      }));
    if (n.length > p.b3) {
      A.Z.show({
        title: h.NW.string(h.t["Cxtq5+"]),
        body: h.NW.formatToPlainString(h.t["pkbZ+f"], {
          numQuestions: p.b3
        })
      });
      return
    }(0, g.tS)(c, [...n, ...r])
  });
  return null == c ? null : (0, r.jsxs)(r.Fragment, {
    children: [i ? null : (0, r.jsxs)(r.Fragment, {
      children: [n ? null : (0, r.jsxs)("div", {
        children: [(0, r.jsx)(o.X6q, {
          variant: "heading-md/bold",
          children: h.NW.string(h.t["24Qm4O"])
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          className: C.subtitle,
          children: h.NW.string(h.t.QvCcYW)
        })]
      }), j.map((e, t) => (0, r.jsx)(m.Z, {
        guild: c,
        prompt: e,
        disableAutofocus: n,
        includeCount: s,
        singleColumn: a,
        promptIndex: t,
        dragIndex: t,
        onPromptDragStart: O,
        onPromptDragReset: y,
        onPromptDragComplete: w
      }, e.id))]
    }), (0, r.jsx)(x, {
      guild: c,
      prejoinOnly: n,
      postjoinOnly: i
    }), n ? null : (0, r.jsxs)(r.Fragment, {
      children: [E.map((e, t) => (0, r.jsx)(m.Z, {
        guild: c,
        prompt: e,
        promptIndex: t + j.length,
        dragIndex: t + j.length + 1,
        onPromptDragStart: O,
        onPromptDragReset: y,
        onPromptDragComplete: w
      }, e.id)), N.length < p.YW ? (0, r.jsxs)(o.P3F, {
        className: C.addPrompt,
        onClick: () => (0, g.tS)(c, [...N, (0, p.yZ)(!1)], !1),
        children: [(0, r.jsx)(o.oFk, {
          size: "custom",
          color: "currentColor",
          className: C.plusIcon,
          width: 20,
          height: 20
        }), (0, r.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "text-brand",
          children: h.NW.string(h.t.ujFqu7)
        })]
      }) : null]
    })]
  })
}