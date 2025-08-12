/** Chunk was on web.js **/
/** chunk id: 987909, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk755721 = require("./755721.js"),
  Chunk904245 = require("./904245.js"),
  Chunk541716 = require("./541716.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk665906 = require("./665906.js"),
  Chunk223750 = require("./223750.js"),
  Chunk271383 = require("./271383.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk838440 = require("./838440.js"),
  Chunk981631 = require("./981631.js"),
  Chunk817803 = require("./817803.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e) {
  let {
    channel: t,
    message: n,
    currentUser: r
  } = e;
  return (0, o.e7)([p.Z, _.ZP], () => {
    var e;
    let i = t.guild_id;
    if (null == r || null == i) returnfalse;
    let o = (0, d.xl)(t),
      a = p.Z.can(b.Plq.SEND_MESSAGES, t),
      s = null == (e = _.ZP.getMember(i, r.id)) ? true : e.isPending,
      l = n.author.bot;
    return a && !o && !s && !l
  })
}

function A(e) {
  let {
    assets: t,
    currentUser: n,
    message: r
  } = e, i = (g.default.extractTimestamp(n.id) + g.default.extractTimestamp(r.id)) % t.length;
  return t[i]
}

function N(e) {
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
  l.Z.sendGreetMessage(t.id, r.id, l.Z.getSendMessageOptionsForReply(i))
}

function C(e) {
  let {
    sticker: t,
    event: n,
    eventProperties: r
  } = e;
  null != n && m.default.track(n, T(v({}, r), {
    sticker_id: t.id
  }))
}

function R(e) {
  let {
    currentUser: t,
    channel: n,
    message: o,
    buttonLabels: l,
    stickers: d,
    event: _,
    eventProperties: p
  } = e, h = (0, f.t)(), [m, g] = i.useState(false), b = i.useMemo(() => A({
    assets: d,
    currentUser: t,
    message: o
  }), [d, t, o]), O = i.useMemo(() => A({
    assets: l,
    currentUser: t,
    message: o
  }), [l, t, o]), v = i.useCallback(async () => {
    let {
      valid: e
    } = await (0, E.v)({
      type: c.Ie.FORM,
      content: "",
      channel: n
    });
    e && (N({
      channel: n,
      message: o,
      sticker: b
    }), C({
      sticker: b,
      event: _,
      eventProperties: p
    }))
  }, [n, o, b, _, p]);
  return h ? (0, r.jsx)(a.zx, {
    variant: "secondary",
    size: "md",
    onClick: v,
    text: O
  }) : (0, r.jsxs)(s.zx, {
    "data-migration-pending": true,
    className: y.CTAMessageButtonOuter,
    innerClassName: y.CTAMessageButton,
    color: s.Tt.PRIMARY,
    onMouseEnter: () => g(true),
    onMouseLeave: () => g(false),
    onClick: v,
    children: [(0, r.jsx)(u.Z, {
      className: y.CTAMessageSticker,
      isInteracting: m,
      sticker: b,
      size: 28
    }), O]
  })
}

function P(e) {
  let {
    channel: t,
    message: n,
    buttonLabels: i,
    stickers: o,
    event: a,
    eventProperties: s
  } = e, l = h.default.getCurrentUser(), c = S({
    channel: t,
    message: n,
    currentUser: l
  });
  return null != l && c ? (0, r.jsx)("div", {
    className: y.CTAMessage,
    children: (0, r.jsx)(R, {
      currentUser: l,
      channel: t,
      message: n,
      buttonLabels: i,
      stickers: o,
      event: a,
      eventProperties: s
    })
  }) : null
}