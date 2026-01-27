/** Chunk was on 48330 **/
/** chunk id: 557582, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => b,
  Uq: () => y,
  sC: () => E
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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

function y(e) {
  let {
    className: t,
    creator: n,
    guildId: r,
    isNew: g,
    guildEvent: j,
    eventPreview: y,
    recurrenceId: E
  } = e, b = (0, v.A)(r, j.id, E), I = null != j ? j : y, A = (0, s.bG)([o.Ay], () => o.Ay.getNick(r, null == n ? true : n.id), [r, n]);
  E = null == I || null != E ? E : (0, x.G3)(I);
  let {
    startTime: C
  } = (0, m.Ay)(null != j ? j : y, E), O = (0, d.A)(E, j.id), T = (null == I ? true : I.scheduled_start_time) != null ? (0, x.j)(O, C, new Date(I.scheduled_start_time)) : null;
  if (null == I) return null;
  let {
    entity_type: S,
    status: P,
    recurrence_rule: w
  } = I;
  return (0, l.jsxs)("div", {
    className: i()(f.II, t),
    children: [(0, l.jsx)(h.L, {
      startTime: C.toISOString(),
      status: null != T ? T : P,
      eventType: S,
      isNew: g,
      recurrenceRule: (0, p.Sn)(w),
      guildEventId: j.id,
      recurrenceId: E
    }), (0, l.jsx)("div", {
      className: f.jH
    }), null != n && (0, l.jsx)(a.m, {
      text: N.intl.formatToPlainString(N.t["+3iypQ"], {
        username: null != A ? A : u.Ay.getName(n)
      }),
      children: (0, l.jsx)(c.euF, {
        src: n.getAvatarURL(r, 20),
        size: c._3J.SIZE_20,
        "aria-label": null != A ? A : n.username,
        className: f.xL
      })
    }), (0, l.jsx)(a.m, {
      text: N.intl.formatToPlainString(N.t["+DLsD8"], {
        count: b
      }),
      children: (0, l.jsxs)("div", {
        className: f.T_,
        children: [(0, l.jsx)(c.nFg, {
          size: "xxs",
          color: "currentColor",
          className: f.pO
        }), (0, l.jsx)(c.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: b
        })]
      })
    })]
  })
}

function E(e) {
  let {
    headerVariant: t = "heading-lg/medium",
    descriptionClassName: n,
    name: r,
    description: s,
    truncate: a,
    guildId: o,
    imageSource: u
  } = e;
  return (0, l.jsxs)("div", {
    className: i()({
      [f.dT]: null != u
    }),
    children: [(0, l.jsxs)("div", {
      className: i()({
        [f.FD]: null != u
      }),
      children: [(0, l.jsx)(c.Heading, {
        variant: t,
        selectable: true,
        className: f.eq,
        children: r
      }), null != s && (0, l.jsx)(g.A, {
        description: s,
        className: i()(n, f.h_),
        truncate: a,
        guildId: o
      })]
    }), null != u && (0, l.jsx)("div", {
      className: f.iT,
      children: (0, l.jsx)(j.A, {
        source: u,
        className: f.xn
      })
    })]
  })
}

function b(e) {
  let {
    headerVariant: t,
    descriptionClassName: n,
    creator: r,
    name: i,
    description: s,
    imageSource: a,
    truncate: c,
    guildId: o,
    isNew: u,
    guildEvent: d,
    eventPreview: m,
    recurrenceId: v
  } = e;
  return (0, l.jsxs)("div", {
    className: f.kL,
    children: [null != a ? (0, l.jsx)("div", {
      className: f.iT,
      children: (0, l.jsx)(j.A, {
        source: a,
        className: f.xn
      })
    }) : null, (0, l.jsx)(y, {
      className: f.kj,
      creator: r,
      guildId: o,
      isNew: u,
      guildEvent: d,
      eventPreview: m,
      recurrenceId: v
    }), (0, l.jsx)(E, {
      name: i,
      description: s,
      headerVariant: t,
      descriptionClassName: n,
      truncate: c,
      guildId: o
    })]
  })
}