/** Chunk was on web.js **/
/** chunk id: 792105, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk201275 = require("./201275.js"),
  Chunk141468 = require("./141468.js"),
  Chunk963852 = require("./963852.js"),
  Chunk20851 = require("./20851.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk147297 = require("./147297.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  let {
    guildId: t,
    role: n,
    theme: a,
    content: E = m.intl.string(m.t["6OSasb"]),
    className: b
  } = e, v = (0, o.bG)([p.default], () => p.default.getCurrentUser()), A = _.Ay.useName(t, null, v), I = (0, c.ox)(n), S = i.useMemo(() => (0, u.rh)(O(y({}, (0, d.Ay)({
    channelId: "0",
    content: E,
    tts: true,
    type: true,
    messageReference: true,
    allowedMentions: true,
    author: v
  })), {
    state: h.cmJ.SENT,
    id: "0"
  })), [v, E]), T = {
    nick: A,
    colorString: n.colorString,
    colorStrings: n.colorStrings
  };
  return (0, r.jsx)(l.NPJ, {
    theme: a,
    children: e => (0, r.jsx)("div", {
      className: s()(e, g.k, b),
      children: (0, r.jsx)(f.A, {
        hideTimestamp: true,
        author: T,
        roleIcon: I,
        message: S,
        isGroupStart: true,
        disableInteraction: true
      })
    })
  })
}