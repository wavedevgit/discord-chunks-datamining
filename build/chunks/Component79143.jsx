/** Chunk was on 47841 **/
/** chunk id: 79143, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  $: () => j,
  n: () => O
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

function h(e) {
  let {
    guildId: t,
    emojiId: n,
    emojiName: l,
    title: a,
    description: o,
    targetType: d,
    index: u,
    dndName: g,
    onEdit: b,
    onMove: h,
    disabled: j = false
  } = e, O = i.useRef(null), y = i.useRef(null), {
    drag: v,
    dragPreview: A,
    drop: E,
    isDragging: N
  } = (0, m.A)(O, d, u, h);
  return v(y), A(E(O)), (0, r.jsxs)("div", {
    ref: O,
    className: s()(x.Nr, {
      [x.wy]: N,
      [x.r9]: j
    }),
    children: [(0, r.jsxs)("div", {
      className: x.kV,
      children: [(0, r.jsx)(f.A, {
        guildId: t,
        emojiId: n,
        emojiName: l,
        className: x.Zg
      }), !j && (0, r.jsx)("div", {
        ref: y,
        className: x.$p,
        "data-dnd-name": g,
        children: (0, r.jsx)(c.WP0, {
          size: "xs",
          color: "currentColor",
          className: x.co
        })
      })]
    }), (0, r.jsxs)("div", {
      className: x.O,
      children: [(0, r.jsx)(c.Text, {
        color: "text-strong",
        variant: "text-md/semibold",
        children: a
      }), (0, r.jsx)(c.Text, {
        color: "interactive-text-default",
        variant: "text-sm/normal",
        children: o
      })]
    }), (0, r.jsx)("div", {
      className: x.eB,
      children: !j && (0, r.jsx)(c.DUT, {
        className: x.xQ,
        onClick: j ? true : b,
        "aria-label": p.intl.string(p.t.Eoo8h6),
        "aria-disabled": j,
        children: (0, r.jsx)(c.R2l, {
          size: "xs",
          color: "currentColor",
          className: x.a2
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
    guildId: c
  } = e, f = (0, o.GV)(), {
    isDragging: m
  } = (0, a.V)(e => ({
    isDragging: e.getItemType() === f
  })), p = (0, u.gN)();
  return 0 === t.length ? null : (0, r.jsx)("div", {
    className: s()(x.kL, {
      [x.Id]: m
    }),
    children: t.map((e, t) => (0, r.jsxs)(i.Fragment, {
      children: [t > 0 ? (0, r.jsx)("div", {
        className: x.yF
      }) : null, (0, r.jsx)(h, {
        guildId: c,
        emojiId: e.emoji_id,
        emojiName: e.emoji_name,
        title: (0, g.A)(e),
        description: e.description,
        targetType: f,
        index: t,
        dndName: (0, b.A)(e),
        onEdit: () => n(t),
        onMove: l,
        disabled: p
      })]
    }, (0, d.nh)(e)))
  })
}

function O(e) {
  let {
    onClick: t,
    children: n,
    disabled: i = false
  } = e;
  return (0, r.jsx)(c.DUT, {
    className: x.kL,
    onClick: i ? true : t,
    "aria-disabled": i,
    children: (0, r.jsxs)("div", {
      className: s()(x.Nr, x.xB, {
        [x.r9]: i
      }),
      children: [(0, r.jsx)("div", {
        className: x.kV,
        children: (0, r.jsx)(c.U1e, {
          size: "xs",
          color: "currentColor",
          className: x.Ak
        })
      }), (0, r.jsx)("div", {
        className: x.O,
        children: (0, r.jsx)(c.Text, {
          color: "text-strong",
          variant: "text-md/normal",
          children: n
        })
      })]
    })
  })
}