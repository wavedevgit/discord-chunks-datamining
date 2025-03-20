/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  p: () => b,
  s: () => v
}), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(676062),
  o = n(481060),
  A = n(313201),
  c = n(817460),
  d = n(723047),
  u = n(528027),
  g = n(686807),
  f = n(157018),
  m = n(828656),
  p = n(388032),
  h = n(352375);

function C(e) {
  let {
    guildId: t,
    emojiId: n,
    emojiName: s,
    title: l,
    description: A,
    targetType: c,
    index: d,
    dndName: g,
    onEdit: f,
    onMove: C,
    disabled: b = !1
  } = e, v = i.useRef(null), x = i.useRef(null), {
    drag: N,
    dragPreview: j,
    drop: E,
    isDragging: I
  } = (0, m.Z)(v, c, d, C);
  return N(x), j(E(v)), (0, r.jsxs)("div", {
    ref: v,
    className: a()(h.card, {
      [h.cardDragging]: I,
      [h.disabled]: b
    }),
    children: [(0, r.jsxs)("div", {
      className: h.emojiWrapper,
      children: [(0, r.jsx)(u.Z, {
        guildId: t,
        emojiId: n,
        emojiName: s,
        className: h.emoji
      }), !b && (0, r.jsx)("div", {
        ref: x,
        className: h.dragIconWrapper,
        "data-dnd-name": g,
        children: (0, r.jsx)(o.Vni, {
          size: "xs",
          color: "currentColor",
          className: h.dragIcon
        })
      })]
    }), (0, r.jsxs)("div", {
      className: h.cardText,
      children: [(0, r.jsx)(o.Text, {
        color: "header-primary",
        variant: "text-md/semibold",
        children: l
      }), (0, r.jsx)(o.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: A
      })]
    }), (0, r.jsx)("div", {
      className: h.cardActions,
      children: !b && (0, r.jsx)(o.P3F, {
        className: h.cardActionButton,
        onClick: b ? void 0 : f,
        "aria-label": p.NW.string(p.t.Eoo8h4),
        "aria-disabled": b,
        children: (0, r.jsx)(o.vdY, {
          size: "xs",
          color: "currentColor",
          className: h.cardActionButtonIcon
        })
      })
    })]
  })
}

function b(e) {
  let {
    benefits: t,
    onEdit: n,
    onMove: s,
    guildId: o
  } = e, u = (0, A.Dt)(), {
    isDragging: m
  } = (0, l.f)(e => ({
    isDragging: e.getItemType() === u
  })), p = (0, d.mY)();
  return 0 === t.length ? null : (0, r.jsx)("div", {
    className: a()(h.container, {
      [h.isDragging]: m
    }),
    children: t.map((e, t) => (0, r.jsxs)(i.Fragment, {
      children: [t > 0 ? (0, r.jsx)("div", {
        className: h.divider
      }) : null, (0, r.jsx)(C, {
        guildId: o,
        emojiId: e.emoji_id,
        emojiName: e.emoji_name,
        title: (0, g.Z)(e),
        description: e.description,
        targetType: u,
        index: t,
        dndName: (0, f.Z)(e),
        onEdit: () => n(t),
        onMove: s,
        disabled: p
      })]
    }, (0, c.ab)(e)))
  })
}

function v(e) {
  let {
    onClick: t,
    children: n,
    disabled: i = !1
  } = e;
  return (0, r.jsx)(o.P3F, {
    className: h.container,
    onClick: i ? void 0 : t,
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
          color: "header-primary",
          variant: "text-md/normal",
          children: n
        })
      })]
    })
  })
}