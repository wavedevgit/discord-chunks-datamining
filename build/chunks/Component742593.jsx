/** Chunk was on web.js **/
/** chunk id: 742593, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HZ: () => T,
  Rf: () => S,
  ZP: () => A
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e) {
  let {
    className: t,
    creator: n,
    guildId: i,
    isNew: h,
    isHub: m = false,
    guildEvent: y,
    eventPreview: v,
    recurrenceId: T
  } = e, S = (0, f.Z)(i, y.id, T), A = null != y ? y : v, N = (0, a.e7)([l.ZP], () => l.ZP.getNick(i, null == n ? true : n.id), [i, n]);
  T = null == A || null != T ? T : (0, p.DK)(A);
  let {
    startTime: C
  } = (0, d.ZP)(null != y ? y : v, T), R = (0, u.Z)(T, y.id), P = (null == A ? true : A.scheduled_start_time) != null ? (0, p.lh)(R, C, new Date(A.scheduled_start_time)) : null;
  if (null == A) return null;
  let {
    entity_type: w,
    status: D,
    recurrence_rule: L
  } = A;
  return (0, r.jsxs)("div", {
    className: o()(b.statusContainer, t),
    children: [(0, r.jsx)(g.z, {
      startTime: C.toISOString(),
      status: null != P ? P : D,
      eventType: w,
      isNew: h,
      recurrenceRule: (0, _.KV)(L),
      guildEventId: y.id,
      recurrenceId: T
    }), (0, r.jsx)("div", {
      className: b.spacer
    }), !m && null != n && (0, r.jsx)(s.ua7, {
      text: E.intl.formatToPlainString(E.t["+3iypa"], {
        username: null != N ? N : c.ZP.getName(n)
      }),
      children: e => (0, r.jsx)(s.qEK, I(O({}, e), {
        src: n.getAvatarURL(i, 20),
        size: s.EFr.SIZE_20,
        "aria-label": null != N ? N : n.username,
        className: b.creator
      }))
    }), (0, r.jsx)(s.ua7, {
      text: E.intl.formatToPlainString(E.t["+DLsDw"], {
        count: S
      }),
      children: e => (0, r.jsxs)("div", I(O({
        className: b.rsvpCount
      }, e), {
        children: [(0, r.jsx)(s.BFJ, {
          size: "xxs",
          color: "currentColor",
          className: b.rsvpIcon
        }), (0, r.jsx)(s.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: S
        })]
      }))
    })]
  })
}

function S(e) {
  let {
    headerVariant: t = "heading-lg/medium",
    descriptionClassName: n,
    name: i,
    description: a,
    truncate: l,
    guildId: c,
    imageSource: u
  } = e;
  return (0, r.jsxs)("div", {
    className: o()({
      [b.withThumbnail]: null != u
    }),
    children: [(0, r.jsxs)("div", {
      className: o()({
        [b.descriptionWithThumbnail]: null != u
      }),
      children: [(0, r.jsx)(s.X6q, {
        variant: t,
        selectable: true,
        className: b.eventName,
        children: i
      }), null != a && (0, r.jsx)(h.Z, {
        description: a,
        className: o()(n, b.description),
        truncate: l,
        guildId: c
      })]
    }), null != u && (0, r.jsx)("div", {
      className: b.thumbnailContainer,
      children: (0, r.jsx)(m.Z, {
        source: u,
        className: b.thumbnail
      })
    })]
  })
}

function A(e) {
  let {
    headerVariant: t,
    descriptionClassName: n,
    creator: i,
    name: o,
    description: a,
    imageSource: s,
    isHub: l = false,
    truncate: c,
    guildId: u,
    isNew: d,
    guildEvent: f,
    eventPreview: _,
    recurrenceId: p
  } = e;
  return (0, r.jsxs)("div", {
    className: b.container,
    children: [null != s ? (0, r.jsx)("div", {
      className: b.thumbnailContainer,
      children: (0, r.jsx)(m.Z, {
        source: s,
        className: b.thumbnail
      })
    }) : null, (0, r.jsx)(T, {
      className: b.eventInfoStatusContainer,
      creator: i,
      guildId: u,
      isHub: l,
      isNew: d,
      guildEvent: f,
      eventPreview: _,
      recurrenceId: p
    }), (0, r.jsx)(S, {
      name: o,
      description: a,
      headerVariant: t,
      descriptionClassName: n,
      truncate: c,
      guildId: u
    })]
  })
}