/** Chunk was on 384 **/
/** chunk id: 861345, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  p: () => j,
  s: () => _
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk85707 = require("./85707.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk817460 = require("./817460.js"),
  Chunk723047 = require("./723047.js"),
  Chunk528027 = require("./528027.jsx"),
  Chunk686807 = require("./686807.jsx"),
  Chunk157018 = require("./157018.js"),
  Chunk828656 = require("./828656.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk172931 = require("./172931.js");

function b(e) {
  let {
    guildId: t,
    emojiId: n,
    emojiName: l,
    title: a,
    description: c,
    targetType: u,
    index: d,
    dndName: m,
    onEdit: p,
    onMove: b,
    disabled: j = false
  } = e, _ = i.useRef(null), v = i.useRef(null), {
    drag: O,
    dragPreview: C,
    drop: y,
    isDragging: N
  } = (0, f.Z)(_, u, d, b);
  return O(v), C(y(_)), (0, r.jsxs)("div", {
    ref: _,
    className: s()(x.card, {
      [x.cardDragging]: N,
      [x.disabled]: j
    }),
    children: [(0, r.jsxs)("div", {
      className: x.emojiWrapper,
      children: [(0, r.jsx)(g.Z, {
        guildId: t,
        emojiId: n,
        emojiName: l,
        className: x.emoji
      }), !j && (0, r.jsx)("div", {
        ref: v,
        className: x.dragIconWrapper,
        "data-dnd-name": m,
        children: (0, r.jsx)(o.Vni, {
          size: "xs",
          color: "currentColor",
          className: x.dragIcon
        })
      })]
    }), (0, r.jsxs)("div", {
      className: x.cardText,
      children: [(0, r.jsx)(o.Text, {
        color: "text-strong",
        variant: "text-md/semibold",
        children: a
      }), (0, r.jsx)(o.Text, {
        color: "interactive-text-default",
        variant: "text-sm/normal",
        children: c
      })]
    }), (0, r.jsx)("div", {
      className: x.cardActions,
      children: !j && (0, r.jsx)(o.P3F, {
        className: x.cardActionButton,
        onClick: j ? true : p,
        "aria-label": h.intl.string(h.t.Eoo8h6),
        "aria-disabled": j,
        children: (0, r.jsx)(o.vdY, {
          size: "xs",
          color: "currentColor",
          className: x.cardActionButtonIcon
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
    isDragging: f
  } = (0, a.f)(e => ({
    isDragging: e.getItemType() === g
  })), h = (0, d.mY)();
  return 0 === t.length ? null : (0, r.jsx)("div", {
    className: s()(x.container, {
      [x.isDragging]: f
    }),
    children: t.map((e, t) => (0, r.jsxs)(i.Fragment, {
      children: [t > 0 ? (0, r.jsx)("div", {
        className: x.divider
      }) : null, (0, r.jsx)(b, {
        guildId: o,
        emojiId: e.emoji_id,
        emojiName: e.emoji_name,
        title: (0, m.Z)(e),
        description: e.description,
        targetType: g,
        index: t,
        dndName: (0, p.Z)(e),
        onEdit: () => n(t),
        onMove: l,
        disabled: h
      })]
    }, (0, u.ab)(e)))
  })
}

function _(e) {
  let {
    onClick: t,
    children: n,
    disabled: i = false
  } = e;
  return (0, r.jsx)(o.P3F, {
    className: x.container,
    onClick: i ? true : t,
    "aria-disabled": i,
    children: (0, r.jsxs)("div", {
      className: s()(x.card, x.addBenefit, {
        [x.disabled]: i
      }),
      children: [(0, r.jsx)("div", {
        className: x.emojiWrapper,
        children: (0, r.jsx)(o.oFk, {
          size: "xs",
          color: "currentColor",
          className: x.addBenefitIcon
        })
      }), (0, r.jsx)("div", {
        className: x.cardText,
        children: (0, r.jsx)(o.Text, {
          color: "text-strong",
          variant: "text-md/normal",
          children: n
        })
      })]
    })
  })
}