/** Chunk was on 384 **/
/** chunk id: 959508, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
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
let O = {
  optionErrors: []
};

function C(e) {
  var t;
  let {
    guild: n,
    prompt: l,
    disableAutofocus: d,
    promptIndex: x,
    dragIndex: C,
    includeCount: E,
    singleColumn: I,
    onPromptDragComplete: S,
    onPromptDragStart: T,
    onPromptDragReset: P
  } = e, w = (0, s.e7)([f.Z], () => f.Z.editedDefaultChannelIds), {
    drag: Z,
    dragSourcePosition: R,
    drop: D,
    setIsDraggable: A
  } = (0, u.Z)({
    type: "ONBOARDING_PROMPT_CARD",
    index: C,
    optionId: l.id,
    onDragStart: T,
    onDragComplete: S,
    onDragReset: P
  }), L = (0, s.cj)([b.Z], () => {
    var e;
    return null != (e = b.Z.errors[x]) ? e : O
  }), [k, G] = i.useState(false), [M, U] = i.useState(false), B = null != (t = L.options) ? t : L.optionErrors.filter(p.lm)[0], F = L.config, H = l.options.length >= j.fY, W = (0, g.kl)(n.id, Array.from(w), [l]).length - w.size, z = i.useRef(null), V = i.useRef(x);
  return (i.useEffect(() => {
    V.current = x
  }), i.useLayoutEffect(() => {
    setTimeout(() => {
      if (0 === V.current && !d) {
        var e;
        null == (e = z.current) || e.focus()
      }
    }, 0)
  }, [d]), k) ? (0, r.jsx)(c.tEY, {
    children: (0, r.jsxs)("div", {
      tabIndex: 0,
      onFocus: () => U(true),
      onBlur: () => U(false),
      onMouseLeave: () => U(false),
      className: a()(v.container, {
        [v.dropIndicatorBefore]: null != R && x < R,
        [v.dropIndicatorAfter]: null != R && x > R,
        [v.containerFocused]: M
      }),
      ref: e => {
        Z(D(e))
      },
      children: [(0, r.jsx)("div", {
        className: v.dragContainer,
        onMouseEnter: () => A(true),
        onMouseLeave: () => A(false),
        children: (0, r.jsx)(c.Vni, {
          size: "xs",
          color: "currentColor",
          className: v.dragIcon
        })
      }), (0, r.jsx)(c.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: _.intl.format(_.t.yjS3zs, {
          index: x + 1
        })
      }), (0, r.jsx)(c.Text, {
        variant: "text-lg/semibold",
        color: "text-default",
        children: l.title
      }), (0, r.jsx)(c.P3F, {
        className: v.collapseButton,
        onClick: () => G(false),
        children: (0, r.jsx)(m.Z, {
          direction: m.Z.Directions.DOWN,
          height: 16,
          width: 16
        })
      }), (0, r.jsx)(o.u, {
        asContainer: true,
        text: _.intl.string(_.t["Ku+86R"]),
        children: (0, r.jsx)("div", {
          className: v.closeIcon,
          children: (0, r.jsx)(c.hU, {
            size: "sm",
            icon: c.XHJ,
            variant: "icon-only",
            onClick: () => (0, h.fi)(n, l.id),
            "aria-label": _.intl.string(_.t["Ku+86R"])
          })
        })
      })]
    })
  }) : (0, r.jsx)(c.tEY, {
    children: (0, r.jsxs)("div", {
      tabIndex: 0,
      onFocus: () => U(true),
      onBlur: () => U(false),
      className: a()(v.container, {
        [v.dropIndicatorBefore]: null != R && x < R,
        [v.dropIndicatorAfter]: null != R && x > R,
        [v.containerFocused]: M
      }),
      ref: e => {
        Z(D(e))
      },
      children: [(0, r.jsx)("div", {
        className: v.dragContainer,
        onMouseEnter: () => A(true),
        onMouseLeave: () => A(false),
        children: (0, r.jsx)(c.Vni, {
          size: "xs",
          color: "currentColor",
          className: v.dragIcon
        })
      }), (0, r.jsxs)(c.Kqy, {
        gap: 16,
        children: [(0, r.jsx)(c.oil, {
          label: _.intl.formatToPlainString(_.t.yjS3zs, {
            index: x + 1
          }),
          inputRef: z,
          value: l.title,
          onChange: e => (0, h.Kk)(n, l.id, {
            title: e
          }),
          placeholder: _.intl.string(_.t.QMCuCo),
          maxLength: j.iU,
          error: L.title
        }), (0, r.jsx)(y, {
          prompt: l,
          guild: n
        }), (0, r.jsx)(c.gNt, {
          errorMessage: B,
          label: H ? _.intl.formatToPlainString(_.t.AbvhZD, {
            count: l.options.length,
            total: j.qm
          }) : _.intl.formatToPlainString(_.t.b7VxYX, {
            count: l.options.length,
            total: j.qm
          }),
          children: (0, r.jsx)(N, {
            guild: n,
            prompt: l,
            promptIndex: x,
            errors: L,
            singleColumn: I
          })
        })]
      }), (0, r.jsxs)("div", {
        className: v.buttons,
        children: [(0, r.jsxs)("div", {
          className: v.checkboxes,
          children: [(0, r.jsx)(c.Checkbox, {
            checked: !l.singleSelect,
            onChange: e => (0, h.Kk)(n, l.id, {
              singleSelect: !e
            }),
            label: _.intl.string(_.t.uCebZa)
          }), l.inOnboarding ? (0, r.jsx)(c.Checkbox, {
            checked: !!(l.inOnboarding && l.required),
            onChange: e => (0, h.Kk)(n, l.id, {
              required: e
            }),
            disabled: !l.inOnboarding,
            label: E ? _.intl.formatToPlainString(_.t["0re8T6"], {
              count: W
            }) : _.intl.string(_.t.Ur8Vrt)
          }) : null]
        }), (0, r.jsx)(c.P3F, {
          className: v.collapseButton,
          onClick: () => G(true),
          children: (0, r.jsx)(m.Z, {
            direction: m.Z.Directions.UP,
            height: 16,
            width: 16
          })
        }), (0, r.jsx)(o.u, {
          asContainer: true,
          text: _.intl.string(_.t["Ku+86R"]),
          children: (0, r.jsx)("div", {
            className: v.closeIcon,
            children: (0, r.jsx)(c.hU, {
              size: "sm",
              icon: c.XHJ,
              variant: "icon-only",
              onClick: () => (0, h.fi)(n, l.id),
              "aria-label": _.intl.string(_.t["Ku+86R"])
            })
          })
        })]
      }), null != F ? (0, r.jsx)(c.pdY, {
        error: F
      }) : null]
    })
  })
}

function y(e) {
  let {
    prompt: t,
    guild: n
  } = e, [l, a] = i.useState(false);
  if (i.useEffect(() => {
      !l && t.title.length > 0 && a(true)
    }, [l, t]), l) return null;

  function s(e) {
    return (0, r.jsx)(c.P3F, {
      className: v.example,
      onClick: () => (0, h.Kk)(n, t.id, {
        title: e
      }),
      children: (0, r.jsx)(c.Text, {
        variant: "text-xs/normal",
        children: e
      })
    })
  }
  return (0, r.jsxs)("div", {
    className: v.examplesSection,
    children: [(0, r.jsx)(c.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: _.intl.string(_.t.ECnSLl)
    }), (0, r.jsxs)("div", {
      className: v.examples,
      children: [s(_.intl.string(_.t["7GZMJa"])), s(_.intl.string(_.t.nItydm)), s(_.intl.string(_.t.evuYbq)), s(_.intl.string(_.t.XWRuOp))]
    })]
  })
}

function N(e) {
  let {
    guild: t,
    prompt: n,
    promptIndex: i,
    singleColumn: l,
    errors: a
  } = e, {
    handleDragStart: s,
    handleDragReset: o,
    handleDragComplete: c
  } = (0, d.Z)(n.options, e => (0, h.Kk)(t, n.id, {
    options: e
  }));
  return (0, r.jsxs)("div", {
    className: v.options,
    children: [n.options.map((e, u) => (0, r.jsx)(x.Z, {
      guild: t,
      prompt: n,
      promptIndex: i,
      singleColumn: l,
      option: e,
      onDragStart: s,
      onDragComplete: c,
      onDragReset: o,
      hasError: null != a.optionErrors[u]
    }, e.id)), n.options.length < j.qm ? (0, r.jsx)(x.B, {
      guild: t,
      prompt: n,
      promptIndex: i,
      singleColumn: l
    }) : null]
  })
}