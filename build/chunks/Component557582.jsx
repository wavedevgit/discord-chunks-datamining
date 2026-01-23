/** Chunk was on web.js **/
/** chunk id: 557582, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => A,
  Uq: () => O,
  sC: () => v
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk696451 = require("./696451.js"),
  Chunk427262 = require("./427262.js"),
  Chunk722260 = require("./722260.js"),
  Chunk563312 = require("./563312.js"),
  Chunk826383 = require("./826383.js"),
  Chunk794782 = require("./794782.js"),
  Chunk974930 = require("./974930.js"),
  Chunk847494 = require("./847494.jsx"),
  Chunk850183 = require("./850183.jsx"),
  Chunk103355 = require("./103355.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk680028 = require("./680028.js");

function O(e) {
  let {
    className: t,
    creator: n,
    guildId: i,
    isNew: m,
    guildEvent: g,
    eventPreview: O,
    recurrenceId: v
  } = e, A = (0, p.A)(i, g.id, v), I = null != g ? g : O, S = (0, s.bG)([c.Ay], () => c.Ay.getNick(i, null == n ? true : n.id), [i, n]);
  v = null == I || null != v ? v : (0, h.G3)(I);
  let {
    startTime: T
  } = (0, f.Ay)(null != g ? g : O, v), C = (0, d.A)(v, g.id), N = (null == I ? true : I.scheduled_start_time) != null ? (0, h.j)(C, T, new Date(I.scheduled_start_time)) : null;
  if (null == I) return null;
  let {
    entity_type: w,
    status: R,
    recurrence_rule: P
  } = I;
  return (0, r.jsxs)("div", {
    className: a()(b.II, t),
    children: [(0, r.jsx)(E.L, {
      startTime: T.toISOString(),
      status: null != N ? N : R,
      eventType: w,
      isNew: m,
      recurrenceRule: (0, _.Sn)(P),
      guildEventId: g.id,
      recurrenceId: v
    }), (0, r.jsx)("div", {
      className: b.jH
    }), null != n && (0, r.jsx)(o.m, {
      text: y.intl.formatToPlainString(y.t["+3iypQ"], {
        username: null != S ? S : u.Ay.getName(n)
      }),
      children: (0, r.jsx)(l.euF, {
        src: n.getAvatarURL(i, 20),
        size: l._3J.SIZE_20,
        "aria-label": null != S ? S : n.username,
        className: b.xL
      })
    }), (0, r.jsx)(o.m, {
      text: y.intl.formatToPlainString(y.t["+DLsD8"], {
        count: A
      }),
      children: (0, r.jsxs)("div", {
        className: b.T_,
        children: [(0, r.jsx)(l.nFg, {
          size: "xxs",
          color: "currentColor",
          className: b.pO
        }), (0, r.jsx)(l.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: A
        })]
      })
    })]
  })
}

function v(e) {
  let {
    headerVariant: t = "heading-lg/medium",
    descriptionClassName: n,
    name: i,
    description: s,
    truncate: o,
    guildId: c,
    imageSource: u
  } = e;
  return (0, r.jsxs)("div", {
    className: a()({
      [b.dT]: null != u
    }),
    children: [(0, r.jsxs)("div", {
      className: a()({
        [b.FD]: null != u
      }),
      children: [(0, r.jsx)(l.Heading, {
        variant: t,
        selectable: true,
        className: b.eq,
        children: i
      }), null != s && (0, r.jsx)(m.A, {
        description: s,
        className: a()(n, b.h_),
        truncate: o,
        guildId: c
      })]
    }), null != u && (0, r.jsx)("div", {
      className: b.iT,
      children: (0, r.jsx)(g.A, {
        source: u,
        className: b.xn
      })
    })]
  })
}

function A(e) {
  let {
    headerVariant: t,
    descriptionClassName: n,
    creator: i,
    name: a,
    description: s,
    imageSource: o,
    truncate: l,
    guildId: c,
    isNew: u,
    guildEvent: d,
    eventPreview: f,
    recurrenceId: p
  } = e;
  return (0, r.jsxs)("div", {
    className: b.kL,
    children: [null != o ? (0, r.jsx)("div", {
      className: b.iT,
      children: (0, r.jsx)(g.A, {
        source: o,
        className: b.xn
      })
    }) : null, (0, r.jsx)(O, {
      className: b.kj,
      creator: i,
      guildId: c,
      isNew: u,
      guildEvent: d,
      eventPreview: f,
      recurrenceId: p
    }), (0, r.jsx)(v, {
      name: a,
      description: s,
      headerVariant: t,
      descriptionClassName: n,
      truncate: l,
      guildId: c
    })]
  })
}