/** Chunk was on 8106 **/
/** chunk id: 959508, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk603211 = require("./603211.js"),
  Chunk710344 = require("./710344.js"),
  Chunk637853 = require("./637853.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk889369 = require("./889369.js"),
  Chunk570961 = require("./570961.js"),
  Chunk208665 = require("./208665.js"),
  Chunk976983 = require("./976983.jsx"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk814939 = require("./814939.js");
let y = {
  optionErrors: []
};

function C(e) {
  var t;
  let {
    guild: n,
    prompt: l,
    disableAutofocus: m,
    promptIndex: j,
    dragIndex: C,
    includeCount: I,
    singleColumn: S,
    onPromptDragComplete: T,
    onPromptDragStart: P,
    onPromptDragReset: w
  } = e, R = (0, a.e7)([h.Z], () => h.Z.editedDefaultChannelIds), {
    drag: Z,
    dragSourcePosition: D,
    drop: A,
    setIsDraggable: L
  } = (0, u.Z)({
    type: "ONBOARDING_PROMPT_CARD",
    index: C,
    optionId: l.id,
    onDragStart: P,
    onDragComplete: T,
    onDragReset: w
  }), k = (0, a.cj)([x.Z], () => {
    var e;
    return null != (e = x.Z.errors[j]) ? e : y
  }), [M, G] = i.useState(false), [U, B] = i.useState(false), F = null != (t = k.options) ? t : k.optionErrors.filter(f.lm)[0], H = k.config, z = l.options.length >= v.fY, V = (0, g.kl)(n.id, Array.from(R), [l]).length - R.size, W = i.useRef(null), K = i.useRef(j);
  return (i.useEffect(() => {
    K.current = j
  }), i.useLayoutEffect(() => {
    setTimeout(() => {
      if (0 === K.current && !m) {
        var e;
        null == (e = W.current) || e.focus()
      }
    }, 0)
  }, [m]), M) ? (0, r.jsx)(d.tEY, {
    children: (0, r.jsxs)("div", {
      tabIndex: 0,
      onFocus: () => B(true),
      onBlur: () => B(false),
      onMouseLeave: () => B(false),
      className: s()(O.container, {
        [O.dropIndicatorBefore]: null != D && j < D,
        [O.dropIndicatorAfter]: null != D && j > D,
        [O.containerFocused]: U
      }),
      ref: e => {
        Z(A(e))
      },
      children: [(0, r.jsx)("div", {
        className: O.dragContainer,
        onMouseEnter: () => L(true),
        onMouseLeave: () => L(false),
        children: (0, r.jsx)(d.Vni, {
          size: "xs",
          color: "currentColor",
          className: O.dragIcon
        })
      }), (0, r.jsx)(d.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: _.intl.format(_.t.yjS3zs, {
          index: j + 1
        })
      }), (0, r.jsx)(d.Text, {
        variant: "text-lg/semibold",
        color: "text-default",
        children: l.title
      }), (0, r.jsx)(d.P3F, {
        className: O.collapseButton,
        onClick: () => G(false),
        children: (0, r.jsx)(p.Z, {
          direction: p.Z.Directions.DOWN,
          height: 16,
          width: 16
        })
      }), (0, r.jsx)(o.u, {
        asContainer: true,
        text: _.intl.string(_.t["Ku+86e"]),
        children: (0, r.jsx)("div", {
          className: O.closeIcon,
          children: (0, r.jsx)(d.hU, {
            size: "sm",
            icon: d.XHJ,
            variant: "icon-only",
            onClick: () => (0, b.fi)(n, l.id),
            "aria-label": _.intl.string(_.t["Ku+86e"])
          })
        })
      })]
    })
  }) : (0, r.jsx)(d.tEY, {
    children: (0, r.jsxs)("div", {
      tabIndex: 0,
      onFocus: () => B(true),
      onBlur: () => B(false),
      className: s()(O.container, {
        [O.dropIndicatorBefore]: null != D && j < D,
        [O.dropIndicatorAfter]: null != D && j > D,
        [O.containerFocused]: U
      }),
      ref: e => {
        Z(A(e))
      },
      children: [(0, r.jsx)("div", {
        className: O.dragContainer,
        onMouseEnter: () => L(true),
        onMouseLeave: () => L(false),
        children: (0, r.jsx)(d.Vni, {
          size: "xs",
          color: "currentColor",
          className: O.dragIcon
        })
      }), (0, r.jsxs)(d.Kqy, {
        gap: 16,
        children: [(0, r.jsx)(d.oil, {
          label: _.intl.formatToPlainString(_.t.yjS3zs, {
            index: j + 1
          }),
          inputRef: W,
          value: l.title,
          onChange: e => (0, b.Kk)(n, l.id, {
            title: e
          }),
          placeholder: _.intl.string(_.t.QMCuCg),
          maxLength: v.iU,
          error: k.title
        }), (0, r.jsx)(N, {
          prompt: l,
          guild: n
        }), (0, r.jsxs)(d.xJW, {
          title: z ? _.intl.formatToPlainString(_.t.AbvhZG, {
            count: l.options.length,
            total: v.qm
          }) : _.intl.formatToPlainString(_.t.b7VxYW, {
            count: l.options.length,
            total: v.qm
          }),
          children: [(0, r.jsx)(E, {
            guild: n,
            prompt: l,
            promptIndex: j,
            errors: k,
            singleColumn: S
          }), null != F ? (0, r.jsx)(d.pdY, {
            error: F
          }) : null]
        })]
      }), (0, r.jsxs)("div", {
        className: O.buttons,
        children: [(0, r.jsxs)("div", {
          className: O.checkboxes,
          children: [(0, r.jsx)(c.$q, {
            size: 20,
            type: c.M0.INVERTED,
            value: !l.singleSelect,
            onChange: (e, t) => (0, b.Kk)(n, l.id, {
              singleSelect: !t
            }),
            children: (0, r.jsx)(d.Text, {
              variant: "text-sm/normal",
              color: "interactive-normal",
              children: _.intl.string(_.t.uCebZW)
            })
          }), l.inOnboarding ? (0, r.jsx)(c.$q, {
            size: 20,
            type: c.M0.INVERTED,
            value: l.inOnboarding && l.required,
            onChange: (e, t) => (0, b.Kk)(n, l.id, {
              required: t
            }),
            disabled: !l.inOnboarding,
            children: (0, r.jsx)(d.Text, {
              variant: "text-sm/normal",
              color: "interactive-normal",
              children: I ? _.intl.formatToPlainString(_.t["0re8T0"], {
                count: V
              }) : _.intl.string(_.t.Ur8Vrq)
            })
          }) : null]
        }), (0, r.jsx)(d.P3F, {
          className: O.collapseButton,
          onClick: () => G(true),
          children: (0, r.jsx)(p.Z, {
            direction: p.Z.Directions.UP,
            height: 16,
            width: 16
          })
        }), (0, r.jsx)(o.u, {
          asContainer: true,
          text: _.intl.string(_.t["Ku+86e"]),
          children: (0, r.jsx)("div", {
            className: O.closeIcon,
            children: (0, r.jsx)(d.hU, {
              size: "sm",
              icon: d.XHJ,
              variant: "icon-only",
              onClick: () => (0, b.fi)(n, l.id),
              "aria-label": _.intl.string(_.t["Ku+86e"])
            })
          })
        })]
      }), null != H ? (0, r.jsx)(d.pdY, {
        error: H
      }) : null]
    })
  })
}

function N(e) {
  let {
    prompt: t,
    guild: n
  } = e, [l, s] = i.useState(false);
  if (i.useEffect(() => {
      !l && t.title.length > 0 && s(true)
    }, [l, t]), l) return null;

  function a(e) {
    return (0, r.jsx)(d.P3F, {
      className: O.example,
      onClick: () => (0, b.Kk)(n, t.id, {
        title: e
      }),
      children: (0, r.jsx)(d.Text, {
        variant: "text-xs/normal",
        children: e
      })
    })
  }
  return (0, r.jsxs)("div", {
    className: O.examplesSection,
    children: [(0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: _.intl.string(_.t.ECnSLi)
    }), (0, r.jsxs)("div", {
      className: O.examples,
      children: [a(_.intl.string(_.t["7GZMJS"])), a(_.intl.string(_.t.nItydn)), a(_.intl.string(_.t.evuYbm)), a(_.intl.string(_.t.XWRuOj))]
    })]
  })
}

function E(e) {
  let {
    guild: t,
    prompt: n,
    promptIndex: i,
    singleColumn: l,
    errors: s
  } = e, {
    handleDragStart: a,
    handleDragReset: o,
    handleDragComplete: c
  } = (0, m.Z)(n.options, e => (0, b.Kk)(t, n.id, {
    options: e
  }));
  return (0, r.jsxs)("div", {
    className: O.options,
    children: [n.options.map((e, d) => (0, r.jsx)(j.Z, {
      guild: t,
      prompt: n,
      promptIndex: i,
      singleColumn: l,
      option: e,
      onDragStart: a,
      onDragComplete: c,
      onDragReset: o,
      hasError: null != s.optionErrors[d]
    }, e.id)), n.options.length < v.qm ? (0, r.jsx)(j.B, {
      guild: t,
      prompt: n,
      promptIndex: i,
      singleColumn: l
    }) : null]
  })
}