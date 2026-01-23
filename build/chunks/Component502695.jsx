/** Chunk was on web.js **/
/** chunk id: 502695, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk956793 = require("./956793.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk806246 = require("./806246.js"),
  Chunk378570 = require("./378570.js"),
  Chunk734057 = require("./734057.js"),
  Chunk383501 = require("./383501.js"),
  Chunk977997 = require("./977997.js"),
  Chunk954571 = require("./954571.js"),
  Chunk993401 = require("./993401.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  let {
    user: t,
    activity: n,
    onAction: m,
    onClose: E
  } = e, {
    newestAnalyticsLocation: b
  } = (0, s.Ay)(), O = (0, i.bG)([d.A, c.A], () => {
    var e;
    return c.A.getChannel(null == (e = d.A.getVoiceStateForUser(t.id)) ? true : e.channelId)
  }), v = (0, i.bG)([u.A], () => u.A.getChannelId() === (null == O ? true : O.id));
  return (null == n ? true : n.type) !== _.$pd.HANG_STATUS || null == O ? null : (0, r.jsx)(p.FD, {
    text: v ? h.intl.string(h.t.BXxdl7) : h.intl.string(h.t["9C444m"]),
    fullWidth: true,
    onClick: e => {
      e.stopPropagation(), null == m || m({
        action: "PRESS_HANG_STATUS_BUTTON"
      }), a.default.selectVoiceChannel(O.id), (0, l.iN)(O.id), f.default.track(_.HAw.HANG_STATUS_CTA_CLICKED, y(g({}, (0, o.A)(O.id)), {
        source: b,
        other_user_id: t.id,
        cta_type: v ? "open" : "join"
      })), null == E || E()
    }
  })
}