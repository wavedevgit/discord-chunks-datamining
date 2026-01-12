/** Chunk was on 9536 **/
/** chunk id: 861345, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  p: () => j,
  s: () => v
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk505805 = require("./505805.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk817460 = require("./817460.js"),
  Chunk723047 = require("./723047.js"),
  Chunk528027 = require("./528027.jsx"),
  Chunk686807 = require("./686807.jsx"),
  Chunk157018 = require("./157018.js"),
  Chunk828656 = require("./828656.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk851132 = require("./851132.js");

function x(e) {
  let {
    guildId: t,
    emojiId: n,
    emojiName: l,
    title: s,
    description: c,
    targetType: d,
    index: u,
    dndName: m,
    onEdit: f,
    onMove: x,
    disabled: j = false
  } = e, v = i.useRef(null), O = i.useRef(null), {
    drag: y,
    dragPreview: C,
    drop: N,
    isDragging: E
  } = (0, b.Z)(v, d, u, x);
  return y(O), C(N(v)), (0, r.jsxs)("div", {
    ref: v,
    className: a()(h.card, {
      [h.cardDragging]: E,
      [h.disabled]: j
    }),
    children: [(0, r.jsxs)("div", {
      className: h.emojiWrapper,
      children: [(0, r.jsx)(g.Z, {
        guildId: t,
        emojiId: n,
        emojiName: l,
        className: h.emoji
      }), !j && (0, r.jsx)("div", {
        ref: O,
        className: h.dragIconWrapper,
        "data-dnd-name": m,
        children: (0, r.jsx)(o.Vni, {
          size: "xs",
          color: "currentColor",
          className: h.dragIcon
        })
      })]
    }), (0, r.jsxs)("div", {
      className: h.cardText,
      children: [(0, r.jsx)(o.Text, {
        color: "text-strong",
        variant: "text-md/semibold",
        children: s
      }), (0, r.jsx)(o.Text, {
        color: "interactive-text-default",
        variant: "text-sm/normal",
        children: c
      })]
    }), (0, r.jsx)("div", {
      className: h.cardActions,
      children: !j && (0, r.jsx)(o.P3F, {
        className: h.cardActionButton,
        onClick: j ? true : f,
        "aria-label": p.intl.string(p.t.Eoo8h6),
        "aria-disabled": j,
        children: (0, r.jsx)(o.vdY, {
          size: "xs",
          color: "currentColor",
          className: h.cardActionButtonIcon
        })
      })
    })]
  })
}

function j(e) {
  let {
    benefits: t,
    onEdit: n,
    onMove: l,
    guildId: o
  } = e, g = (0, c.Dt)(), {
    isDragging: b
  } = (0, s.f)(e => ({
    isDragging: e.getItemType() === g
  })), p = (0, u.mY)();
  return 0 === t.length ? null : (0, r.jsx)("div", {
    className: a()(h.container, {
      [h.isDragging]: b
    }),
    children: t.map((e, t) => (0, r.jsxs)(i.Fragment, {
      children: [t > 0 ? (0, r.jsx)("div", {
        className: h.divider
      }) : null, (0, r.jsx)(x, {
        guildId: o,
        emojiId: e.emoji_id,
        emojiName: e.emoji_name,
        title: (0, m.Z)(e),
        description: e.description,
        targetType: g,
        index: t,
        dndName: (0, f.Z)(e),
        onEdit: () => n(t),
        onMove: l,
        disabled: p
      })]
    }, (0, d.ab)(e)))
  })
}

function v(e) {
  let {
    onClick: t,
    children: n,
    disabled: i = false
  } = e;
  return (0, r.jsx)(o.P3F, {
    className: h.container,
    onClick: i ? true : t,
    "aria-disabled": i,
    children: (0, r.jsxs)("div", {
      className: a()(h.card, h.addBenefit, {
        [h.disabled]: i
      }),
      children: [(0, r.jsx)("div", {
        className: h.emojiWrapper,
        children: (0, r.jsx)(o.oFk, {
          size: "xs",
          color: "currentColor",
          className: h.addBenefitIcon
        })
      }), (0, r.jsx)("div", {
        className: h.cardText,
        children: (0, r.jsx)(o.Text, {
          color: "text-strong",
          variant: "text-md/normal",
          children: n
        })
      })]
    })
  })
}