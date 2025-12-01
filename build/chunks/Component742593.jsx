/** Chunk was on web.js **/
/** chunk id: 742593, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HZ: () => O,
  Rf: () => v,
  ZP: () => S
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk271383 = require("./271383.js"),
  Chunk51144 = require("./51144.js"),
  Chunk894017 = require("./894017.js"),
  Chunk79874 = require("./79874.js"),
  Chunk376108 = require("./376108.js"),
  Chunk236373 = require("./236373.js"),
  Chunk854698 = require("./854698.js"),
  Chunk391174 = require("./391174.jsx"),
  Chunk95291 = require("./95291.jsx"),
  Chunk390966 = require("./390966.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk396934 = require("./396934.js");

function O(e) {
  let {
    className: t,
    creator: n,
    guildId: i,
    isNew: h,
    guildEvent: g,
    eventPreview: O,
    recurrenceId: v
  } = e, S = (0, p.Z)(i, g.id, v), I = null != g ? g : O, T = (0, o.e7)([c.ZP], () => c.ZP.getNick(i, null == n ? true : n.id), [i, n]);
  v = null == I || null != v ? v : (0, m.DK)(I);
  let {
    startTime: A
  } = (0, f.ZP)(null != g ? g : O, v), C = (0, d.Z)(v, g.id), N = (null == I ? true : I.scheduled_start_time) != null ? (0, m.lh)(C, A, new Date(I.scheduled_start_time)) : null;
  if (null == I) return null;
  let {
    entity_type: P,
    status: R,
    recurrence_rule: w
  } = I;
  return (0, r.jsxs)("div", {
    className: a()(y.statusContainer, t),
    children: [(0, r.jsx)(E.z, {
      startTime: A.toISOString(),
      status: null != N ? N : R,
      eventType: P,
      isNew: h,
      recurrenceRule: (0, _.KV)(w),
      guildEventId: g.id,
      recurrenceId: v
    }), (0, r.jsx)("div", {
      className: y.spacer
    }), null != n && (0, r.jsx)(s.u, {
      text: b.intl.formatToPlainString(b.t["+3iypQ"], {
        username: null != T ? T : u.ZP.getName(n)
      }),
      children: (0, r.jsx)(l.qEK, {
        src: n.getAvatarURL(i, 20),
        size: l.EFr.SIZE_20,
        "aria-label": null != T ? T : n.username,
        className: y.creator
      })
    }), (0, r.jsx)(s.u, {
      text: b.intl.formatToPlainString(b.t["+DLsD8"], {
        count: S
      }),
      children: (0, r.jsxs)("div", {
        className: y.rsvpCount,
        children: [(0, r.jsx)(l.BFJ, {
          size: "xxs",
          color: "currentColor",
          className: y.rsvpIcon
        }), (0, r.jsx)(l.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: S
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
    description: o,
    truncate: s,
    guildId: c,
    imageSource: u
  } = e;
  return (0, r.jsxs)("div", {
    className: a()({
      [y.withThumbnail]: null != u
    }),
    children: [(0, r.jsxs)("div", {
      className: a()({
        [y.descriptionWithThumbnail]: null != u
      }),
      children: [(0, r.jsx)(l.Heading, {
        variant: t,
        selectable: true,
        className: y.eventName,
        children: i
      }), null != o && (0, r.jsx)(h.Z, {
        description: o,
        className: a()(n, y.description),
        truncate: s,
        guildId: c
      })]
    }), null != u && (0, r.jsx)("div", {
      className: y.thumbnailContainer,
      children: (0, r.jsx)(g.Z, {
        source: u,
        className: y.thumbnail
      })
    })]
  })
}

function S(e) {
  let {
    headerVariant: t,
    descriptionClassName: n,
    creator: i,
    name: a,
    description: o,
    imageSource: s,
    truncate: l,
    guildId: c,
    isNew: u,
    guildEvent: d,
    eventPreview: f,
    recurrenceId: p
  } = e;
  return (0, r.jsxs)("div", {
    className: y.container,
    children: [null != s ? (0, r.jsx)("div", {
      className: y.thumbnailContainer,
      children: (0, r.jsx)(g.Z, {
        source: s,
        className: y.thumbnail
      })
    }) : null, (0, r.jsx)(O, {
      className: y.eventInfoStatusContainer,
      creator: i,
      guildId: c,
      isNew: u,
      guildEvent: d,
      eventPreview: f,
      recurrenceId: p
    }), (0, r.jsx)(v, {
      name: a,
      description: o,
      headerVariant: t,
      descriptionClassName: n,
      truncate: l,
      guildId: c
    })]
  })
}