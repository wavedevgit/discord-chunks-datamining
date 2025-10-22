/** Chunk was on 29679 **/
/** chunk id: 861345, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  p: () => j,
  s: () => v
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk79116 = require("./79116.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk817460 = require("./817460.js"),
  Chunk723047 = require("./723047.js"),
  Chunk528027 = require("./528027.jsx"),
  Chunk686807 = require("./686807.jsx"),
  Chunk157018 = require("./157018.js"),
  Chunk828656 = require("./828656.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk28742 = require("./28742.js");

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
    onEdit: p,
    onMove: x,
    disabled: j = false
  } = e, v = i.useRef(null), _ = i.useRef(null), {
    drag: C,
    dragPreview: O,
    drop: y,
    isDragging: E
  } = (0, f.Z)(v, d, u, x);
  return C(_), O(y(v)), (0, r.jsxs)("div", {
    ref: v,
    className: a()(b.card, {
      [b.cardDragging]: E,
      [b.disabled]: j
    }),
    children: [(0, r.jsxs)("div", {
      className: b.emojiWrapper,
      children: [(0, r.jsx)(g.Z, {
        guildId: t,
        emojiId: n,
        emojiName: l,
        className: b.emoji
      }), !j && (0, r.jsx)("div", {
        ref: _,
        className: b.dragIconWrapper,
        "data-dnd-name": m,
        children: (0, r.jsx)(o.Vni, {
          size: "xs",
          color: "currentColor",
          className: b.dragIcon
        })
      })]
    }), (0, r.jsxs)("div", {
      className: b.cardText,
      children: [(0, r.jsx)(o.Text, {
        color: "header-primary",
        variant: "text-md/semibold",
        children: s
      }), (0, r.jsx)(o.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: c
      })]
    }), (0, r.jsx)("div", {
      className: b.cardActions,
      children: !j && (0, r.jsx)(o.P3F, {
        className: b.cardActionButton,
        onClick: j ? true : p,
        "aria-label": h.intl.string(h.t.Eoo8h6),
        "aria-disabled": j,
        children: (0, r.jsx)(o.vdY, {
          size: "xs",
          color: "currentColor",
          className: b.cardActionButtonIcon
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
  } = (0, s.f)(e => ({
    isDragging: e.getItemType() === g
  })), h = (0, u.mY)();
  return 0 === t.length ? null : (0, r.jsx)("div", {
    className: a()(b.container, {
      [b.isDragging]: f
    }),
    children: t.map((e, t) => (0, r.jsxs)(i.Fragment, {
      children: [t > 0 ? (0, r.jsx)("div", {
        className: b.divider
      }) : null, (0, r.jsx)(x, {
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
    className: b.container,
    onClick: i ? true : t,
    "aria-disabled": i,
    children: (0, r.jsxs)("div", {
      className: a()(b.card, b.addBenefit, {
        [b.disabled]: i
      }),
      children: [(0, r.jsx)("div", {
        className: b.emojiWrapper,
        children: (0, r.jsx)(o.oFk, {
          size: "xs",
          color: "currentColor",
          className: b.addBenefitIcon
        })
      }), (0, r.jsx)("div", {
        className: b.cardText,
        children: (0, r.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/normal",
          children: n
        })
      })]
    })
  })
}