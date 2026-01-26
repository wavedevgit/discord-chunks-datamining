/** Chunk was on 39048 **/
/** chunk id: 79143, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  $: () => j,
  n: () => _
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk688807 = require("./688807.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk500345 = require("./500345.js"),
  Chunk11351 = require("./11351.js"),
  Chunk659612 = require("./659612.jsx"),
  Chunk898612 = require("./898612.jsx"),
  Chunk327325 = require("./327325.js"),
  Chunk935206 = require("./935206.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk221611 = require("./221611.js");

function x(e) {
  let {
    guildId: t,
    emojiId: n,
    emojiName: l,
    title: a,
    description: c,
    targetType: d,
    index: u,
    dndName: m,
    onEdit: p,
    onMove: x,
    disabled: j = false
  } = e, _ = i.useRef(null), O = i.useRef(null), {
    drag: v,
    dragPreview: y,
    drop: A,
    isDragging: E
  } = (0, f.A)(_, d, u, x);
  return v(O), y(A(_)), (0, r.jsxs)("div", {
    ref: _,
    className: s()(b.Nr, {
      [b.wy]: E,
      [b.r9]: j
    }),
    children: [(0, r.jsxs)("div", {
      className: b.kV,
      children: [(0, r.jsx)(g.A, {
        guildId: t,
        emojiId: n,
        emojiName: l,
        className: b.Zg
      }), !j && (0, r.jsx)("div", {
        ref: O,
        className: b.$p,
        "data-dnd-name": m,
        children: (0, r.jsx)(o.WP0, {
          size: "xs",
          color: "currentColor",
          className: b.co
        })
      })]
    }), (0, r.jsxs)("div", {
      className: b.O,
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
      className: b.eB,
      children: !j && (0, r.jsx)(o.DUT, {
        className: b.xQ,
        onClick: j ? true : p,
        "aria-label": h.intl.string(h.t.Eoo8h6),
        "aria-disabled": j,
        children: (0, r.jsx)(o.R2l, {
          size: "xs",
          color: "currentColor",
          className: b.a2
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
  } = e, g = (0, c.GV)(), {
    isDragging: f
  } = (0, a.V)(e => ({
    isDragging: e.getItemType() === g
  })), h = (0, u.gN)();
  return 0 === t.length ? null : (0, r.jsx)("div", {
    className: s()(b.kL, {
      [b.Id]: f
    }),
    children: t.map((e, t) => (0, r.jsxs)(i.Fragment, {
      children: [t > 0 ? (0, r.jsx)("div", {
        className: b.yF
      }) : null, (0, r.jsx)(x, {
        guildId: o,
        emojiId: e.emoji_id,
        emojiName: e.emoji_name,
        title: (0, m.A)(e),
        description: e.description,
        targetType: g,
        index: t,
        dndName: (0, p.A)(e),
        onEdit: () => n(t),
        onMove: l,
        disabled: h
      })]
    }, (0, d.nh)(e)))
  })
}

function _(e) {
  let {
    onClick: t,
    children: n,
    disabled: i = false
  } = e;
  return (0, r.jsx)(o.DUT, {
    className: b.kL,
    onClick: i ? true : t,
    "aria-disabled": i,
    children: (0, r.jsxs)("div", {
      className: s()(b.Nr, b.xB, {
        [b.r9]: i
      }),
      children: [(0, r.jsx)("div", {
        className: b.kV,
        children: (0, r.jsx)(o.U1e, {
          size: "xs",
          color: "currentColor",
          className: b.Ak
        })
      }), (0, r.jsx)("div", {
        className: b.O,
        children: (0, r.jsx)(o.Text, {
          color: "text-strong",
          variant: "text-md/normal",
          children: n
        })
      })]
    })
  })
}