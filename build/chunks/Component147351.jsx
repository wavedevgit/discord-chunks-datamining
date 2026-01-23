/** Chunk was on web.js **/
/** chunk id: 147351, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk843472 = require("./843472.js"),
  Chunk355622 = require("./355622.js"),
  Chunk148355 = require("./148355.jsx"),
  Chunk406704 = require("./406704.js"),
  Chunk696451 = require("./696451.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk661191 = require("./661191.js"),
  Chunk460350 = require("./460350.js"),
  Chunk652215 = require("./652215.js"),
  Chunk48447 = require("./48447.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
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

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e) {
  let {
    channel: t,
    message: n,
    currentUser: r
  } = e;
  return (0, a.bG)([f.A, d.Ay], () => {
    var e;
    let i = t.guild_id;
    if (null == r || null == i) returnfalse;
    let a = (0, u.UJ)(t),
      s = f.A.can(g.xBc.SEND_MESSAGES, t),
      o = null == (e = d.Ay.getMember(i, r.id)) ? true : e.isPending,
      l = n.author.bot;
    return s && !a && !o && !l
  })
}

function I(e) {
  let {
    assets: t,
    currentUser: n,
    message: r
  } = e, i = (h.default.extractTimestamp(n.id) + h.default.extractTimestamp(r.id)) % t.length;
  return t[i]
}

function S(e) {
  let {
    channel: t,
    message: n,
    sticker: r
  } = e, i = {
    channel: t,
    message: n,
    shouldMention: true,
    showMentionToggle: true
  };
  o.A.sendGreetMessage(t.id, r.id, o.A.getSendMessageOptionsForReply(i))
}

function T(e) {
  let {
    sticker: t,
    event: n,
    eventProperties: r
  } = e;
  null != n && _.default.track(n, v(b({}, r), {
    sticker_id: t.id
  }))
}

function C(e) {
  let {
    currentUser: t,
    channel: n,
    message: a,
    buttonLabels: o,
    stickers: u,
    event: d,
    eventProperties: f
  } = e, p = i.useMemo(() => I({
    assets: u,
    currentUser: t,
    message: a
  }), [u, t, a]), _ = i.useMemo(() => I({
    assets: o,
    currentUser: t,
    message: a
  }), [o, t, a]), h = i.useCallback(async () => {
    let {
      valid: e
    } = await (0, m.i)({
      type: l.oU.FORM,
      content: "",
      channel: n
    });
    e && (S({
      channel: n,
      message: a,
      sticker: p
    }), T({
      sticker: p,
      event: d,
      eventProperties: f
    }))
  }, [n, a, p, d, f]);
  return (0, r.jsx)(s.$nd, {
    icon: {
      type: "sticker",
      asset: p,
      component: c.A
    },
    text: _,
    onClick: h,
    variant: "secondary"
  })
}

function N(e) {
  let {
    channel: t,
    message: n,
    buttonLabels: i,
    stickers: a,
    event: s,
    eventProperties: o
  } = e, l = p.default.getCurrentUser(), c = A({
    channel: t,
    message: n,
    currentUser: l
  });
  return null != l && c ? (0, r.jsx)("div", {
    className: E.S,
    children: (0, r.jsx)(C, {
      currentUser: l,
      channel: t,
      message: n,
      buttonLabels: i,
      stickers: a,
      event: s,
      eventProperties: o
    })
  }) : null
}