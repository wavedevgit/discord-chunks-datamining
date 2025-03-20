/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => j
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(481060),
  A = n(603211),
  c = n(710344),
  d = n(637853),
  u = n(107862),
  g = n(259580),
  f = n(823379),
  m = n(889369),
  p = n(570961),
  h = n(208665),
  C = n(976983),
  b = n(290511),
  v = n(388032),
  x = n(101404);
let N = {
  optionErrors: []
};

function j(e) {
  var t;
  let {
    guild: n,
    prompt: s,
    disableAutofocus: c,
    promptIndex: C,
    dragIndex: j,
    includeCount: O,
    singleColumn: y,
    onPromptDragComplete: w,
    onPromptDragStart: P,
    onPromptDragReset: B
  } = e, {
    dropdownsAllowed: D
  } = (0, u.Ug)(n.id), T = (0, l.e7)([m.Z], () => m.Z.editedDefaultChannelIds), S = D ? b.qm : b.M$, {
    drag: L,
    dragSourcePosition: R,
    drop: Q,
    setIsDraggable: W
  } = (0, A.Z)({
    type: "ONBOARDING_PROMPT_CARD",
    index: j,
    optionId: s.id,
    onDragStart: P,
    onDragComplete: w,
    onDragReset: B
  }), Z = (0, l.cj)([h.Z], () => {
    var e;
    return null !== (e = h.Z.errors[C]) && void 0 !== e ? e : N
  }), [k, M] = i.useState(!1), [_, G] = i.useState(!1), F = null !== (t = Z.options) && void 0 !== t ? t : Z.optionErrors.filter(f.lm)[0], U = Z.config, H = D && s.options.length >= b.fY, z = (0, d.kl)(n.id, Array.from(T), [s]).length - T.size, X = i.useRef(null), Y = i.useRef(C);
  return (i.useEffect(() => {
    Y.current = C
  }), i.useLayoutEffect(() => {
    setTimeout(() => {
      if (0 === Y.current && !c) {
        var e;
        null === (e = X.current) || void 0 === e || e.focus()
      }
    }, 0)
  }, [c]), k) ? (0, r.jsx)(o.tEY, {
    children: (0, r.jsxs)("div", {
      tabIndex: 0,
      onFocus: () => G(!0),
      onBlur: () => G(!1),
      onMouseLeave: () => G(!1),
      className: a()(x.container, {
        [x.dropIndicatorBefore]: null != R && C < R,
        [x.dropIndicatorAfter]: null != R && C > R,
        [x.containerFocused]: _
      }),
      ref: e => L(Q(e)),
      children: [(0, r.jsx)("div", {
        className: x.dragContainer,
        onMouseEnter: () => W(!0),
        onMouseLeave: () => W(!1),
        children: (0, r.jsx)(o.Vni, {
          size: "xs",
          color: "currentColor",
          className: x.dragIcon
        })
      }), (0, r.jsx)(o.Text, {
        className: x.questionNumber,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: v.NW.format(v.t.yjS3zs, {
          index: C + 1
        })
      }), (0, r.jsx)(o.Text, {
        variant: "text-lg/semibold",
        color: "text-normal",
        children: s.title
      }), (0, r.jsx)(o.P3F, {
        className: x.collapseButton,
        onClick: () => M(!1),
        children: (0, r.jsx)(g.Z, {
          direction: g.Z.Directions.DOWN,
          height: 16,
          width: 16
        })
      }), (0, r.jsx)(o.DY3, {
        text: v.NW.string(v.t["Ku+86e"]),
        className: x.removeButton,
        children: (0, r.jsx)(o.P3F, {
          className: x.closeIcon,
          onClick: () => (0, p.fi)(n, s.id),
          children: (0, r.jsx)(o.XHJ, {
            size: "xs",
            color: "currentColor"
          })
        })
      })]
    })
  }) : (0, r.jsx)(o.tEY, {
    children: (0, r.jsxs)("div", {
      tabIndex: 0,
      onFocus: () => G(!0),
      onBlur: () => G(!1),
      className: a()(x.container, {
        [x.dropIndicatorBefore]: null != R && C < R,
        [x.dropIndicatorAfter]: null != R && C > R,
        [x.containerFocused]: _
      }),
      ref: e => L(Q(e)),
      children: [(0, r.jsx)("div", {
        className: x.dragContainer,
        onMouseEnter: () => W(!0),
        onMouseLeave: () => W(!1),
        children: (0, r.jsx)(o.Vni, {
          size: "xs",
          color: "currentColor",
          className: x.dragIcon
        })
      }), (0, r.jsx)(o.Text, {
        className: x.questionNumber,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: v.NW.format(v.t.yjS3zs, {
          index: C + 1
        })
      }), (0, r.jsx)(o.oil, {
        className: x.title,
        inputClassName: x.titleInput,
        inputRef: X,
        value: s.title,
        onChange: e => (0, p.Kk)(n, s.id, {
          title: e
        }),
        placeholder: v.NW.string(v.t.QMCuCg),
        maxLength: b.iU,
        error: Z.title
      }), (0, r.jsx)(E, {
        prompt: s,
        guild: n
      }), (0, r.jsx)(o.Text, {
        className: x.optionsHeader,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: H ? v.NW.formatToPlainString(v.t.AbvhZG, {
          count: s.options.length,
          total: S
        }) : v.NW.formatToPlainString(v.t.b7VxYW, {
          count: s.options.length,
          total: S
        })
      }), (0, r.jsx)(I, {
        guild: n,
        prompt: s,
        promptIndex: C,
        errors: Z,
        singleColumn: y
      }), null != F ? (0, r.jsx)(o.pdY, {
        error: F
      }) : null, (0, r.jsxs)("div", {
        className: x.buttons,
        children: [(0, r.jsxs)("div", {
          className: x.checkboxes,
          children: [(0, r.jsx)(o.XZJ, {
            size: 20,
            type: o.XZJ.Types.INVERTED,
            value: !s.singleSelect,
            onChange: (e, t) => (0, p.Kk)(n, s.id, {
              singleSelect: !t
            }),
            children: (0, r.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "interactive-normal",
              children: v.NW.string(v.t.uCebZW)
            })
          }), s.inOnboarding ? (0, r.jsx)(o.XZJ, {
            size: 20,
            type: o.XZJ.Types.INVERTED,
            value: s.inOnboarding && s.required,
            onChange: (e, t) => (0, p.Kk)(n, s.id, {
              required: t
            }),
            disabled: !s.inOnboarding,
            children: (0, r.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "interactive-normal",
              children: O ? v.NW.formatToPlainString(v.t["0re8T0"], {
                count: z
              }) : v.NW.string(v.t.Ur8Vrq)
            })
          }) : null]
        }), (0, r.jsx)(o.P3F, {
          className: x.collapseButton,
          onClick: () => M(!0),
          children: (0, r.jsx)(g.Z, {
            direction: g.Z.Directions.UP,
            height: 16,
            width: 16
          })
        }), (0, r.jsx)(o.DY3, {
          text: v.NW.string(v.t["Ku+86e"]),
          className: x.removeButton,
          children: (0, r.jsx)(o.P3F, {
            className: x.closeIcon,
            onClick: () => (0, p.fi)(n, s.id),
            children: (0, r.jsx)(o.XHJ, {
              size: "xs",
              color: "currentColor"
            })
          })
        })]
      }), null != U ? (0, r.jsx)(o.pdY, {
        error: U
      }) : null]
    })
  })
}

function E(e) {
  let {
    prompt: t,
    guild: n
  } = e, [s, a] = i.useState(!1);
  if (i.useEffect(() => {
      !s && t.title.length > 0 && a(!0)
    }, [s, t]), s) return null;

  function l(e) {
    return (0, r.jsx)(o.P3F, {
      className: x.example,
      onClick: () => (0, p.Kk)(n, t.id, {
        title: e
      }),
      children: (0, r.jsx)(o.Text, {
        variant: "text-xs/normal",
        children: e
      })
    })
  }
  return (0, r.jsxs)("div", {
    className: x.examplesSection,
    children: [(0, r.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: v.NW.string(v.t.ECnSLi)
    }), (0, r.jsxs)("div", {
      className: x.examples,
      children: [l(v.NW.string(v.t["7GZMJS"])), l(v.NW.string(v.t.nItydn)), l(v.NW.string(v.t.evuYbm)), l(v.NW.string(v.t.XWRuOj))]
    })]
  })
}

function I(e) {
  let {
    guild: t,
    prompt: n,
    promptIndex: i,
    singleColumn: s,
    errors: a
  } = e, {
    dropdownsAllowed: l
  } = (0, u.Ug)(t.id), o = l ? b.qm : b.M$, {
    handleDragStart: A,
    handleDragReset: d,
    handleDragComplete: g
  } = (0, c.Z)(n.options, e => (0, p.Kk)(t, n.id, {
    options: e
  }));
  return (0, r.jsxs)("div", {
    className: x.options,
    children: [n.options.map((e, l) => (0, r.jsx)(C.Z, {
      guild: t,
      prompt: n,
      promptIndex: i,
      singleColumn: s,
      option: e,
      onDragStart: A,
      onDragComplete: g,
      onDragReset: d,
      hasError: null != a.optionErrors[l]
    }, e.id)), n.options.length < o ? (0, r.jsx)(C.B, {
      guild: t,
      prompt: n,
      promptIndex: i,
      singleColumn: s
    }) : null]
  })
}