/** Chunk was on web.js **/
/** chunk id: 742593, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HZ: () => T,
  Rf: () => S,
  ZP: () => A
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk271383 = require("./271383.js"),
  Chunk51144 = require("./51144.js"),
  Chunk894017 = require("./894017.js"),
  Chunk79874 = require("./79874.js"),
  Chunk376108 = require("./376108.js"),
  Chunk236373 = require("./236373.js"),
  Chunk954313 = require("./954313.js"),
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
    guildEvent: m,
    eventPreview: y,
    recurrenceId: v
  } = e, T = (0, f.Z)(i, m.id, v), S = null != m ? m : y, A = (0, o.e7)([l.ZP], () => l.ZP.getNick(i, null == n ? true : n.id), [i, n]);
  v = null == S || null != v ? v : (0, p.DK)(S);
  let {
    startTime: C
  } = (0, d.ZP)(null != m ? m : y, v), N = (0, u.Z)(v, m.id), R = (null == S ? true : S.scheduled_start_time) != null ? (0, p.lh)(N, C, new Date(S.scheduled_start_time)) : null;
  if (null == S) return null;
  let {
    entity_type: P,
    status: w,
    recurrence_rule: D
  } = S;
  return (0, r.jsxs)("div", {
    className: a()(b.statusContainer, t),
    children: [(0, r.jsx)(g.z, {
      startTime: C.toISOString(),
      status: null != R ? R : w,
      eventType: P,
      isNew: h,
      recurrenceRule: (0, _.KV)(D),
      guildEventId: m.id,
      recurrenceId: v
    }), (0, r.jsx)("div", {
      className: b.spacer
    }), null != n && (0, r.jsx)(s.ua7, {
      text: E.intl.formatToPlainString(E.t["+3iypa"], {
        username: null != A ? A : c.ZP.getName(n)
      }),
      children: e => (0, r.jsx)(s.qEK, I(O({}, e), {
        src: n.getAvatarURL(i, 20),
        size: s.EFr.SIZE_20,
        "aria-label": null != A ? A : n.username,
        className: b.creator
      }))
    }), (0, r.jsx)(s.ua7, {
      text: E.intl.formatToPlainString(E.t["+DLsDw"], {
        count: T
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
          children: T
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
    description: o,
    truncate: l,
    guildId: c,
    imageSource: u
  } = e;
  return (0, r.jsxs)("div", {
    className: a()({
      [b.withThumbnail]: null != u
    }),
    children: [(0, r.jsxs)("div", {
      className: a()({
        [b.descriptionWithThumbnail]: null != u
      }),
      children: [(0, r.jsx)(s.X6q, {
        variant: t,
        selectable: true,
        className: b.eventName,
        children: i
      }), null != o && (0, r.jsx)(h.Z, {
        description: o,
        className: a()(n, b.description),
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
    name: a,
    description: o,
    imageSource: s,
    truncate: l,
    guildId: c,
    isNew: u,
    guildEvent: d,
    eventPreview: f,
    recurrenceId: _
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
      guildId: c,
      isNew: u,
      guildEvent: d,
      eventPreview: f,
      recurrenceId: _
    }), (0, r.jsx)(S, {
      name: a,
      description: o,
      headerVariant: t,
      descriptionClassName: n,
      truncate: l,
      guildId: c
    })]
  })
}