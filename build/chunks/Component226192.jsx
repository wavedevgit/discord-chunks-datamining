/** Chunk was on web.js **/
/** chunk id: 226192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  UV: () => m,
  _s: () => p,
  kW: () => _,
  km: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk248514 = require("./248514.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk273504 = require("./273504.js"),
  Chunk388032 = require("./388032.jsx");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e) {
  let t = (e, t) => new Promise(e => {
      (0, o.ZDy)(async () => {
        let {
          default: i
        } = await n.e("94005").then(n.bind(n, 144462));
        return n => {
          var o;
          return (0, r.jsx)(i, d(c({
            initialCustomMessage: null != (o = t.metadata.customMessage) ? o : "",
            onSubmit: r => {
              t.metadata.customMessage = r, e(t), n.onClose()
            }
          }, n), {
            onClose: () => (e(null), n.onClose())
          }))
        }
      })
    }),
    i = (t, i) => new Promise(s => {
      (0, o.ZDy)(async () => {
        let {
          default: o
        } = await n.e("74543").then(n.bind(n, 643611)), l = t.actions.find(e => e.type === a.jj.FLAG_TO_CHANNEL);
        return n => (0, r.jsx)(o, d(c({
          action: i,
          isEdit: null != l,
          triggerType: t.triggerType,
          guildId: e,
          onEditChannel: e => {
            i.metadata.channelId = e, t.exemptChannels.add(e), s(i), n.onClose()
          }
        }, n), {
          onClose: () => (s(null), n.onClose())
        }))
      })
    }),
    s = (e, t) => new Promise(i => {
      (0, o.ZDy)(async () => {
        let {
          default: o
        } = await n.e("78273").then(n.bind(n, 41767)), s = e.actions.find(e => e.type === a.jj.USER_COMMUNICATION_DISABLED);
        return n => (0, r.jsx)(o, d(c({
          action: t,
          isEdit: null != s,
          triggerType: e.triggerType,
          onUpdateDuration: e => {
            null != e && (t.metadata.durationSeconds = e), i(t), n.onClose()
          }
        }, n), {
          onClose: () => (i(null), n.onClose())
        }))
      })
    });
  return {
    [a.jj.BLOCK_MESSAGE]: t,
    [a.jj.FLAG_TO_CHANNEL]: i,
    [a.jj.USER_COMMUNICATION_DISABLED]: s
  }
}

function p(e, t, i, a) {
  (0, o.ZDy)(async () => {
    let {
      default: o
    } = await n.e("37483").then(n.bind(n, 241046));
    return n => (0, r.jsx)(o, d(c({}, n), {
      automodDecision: {
        messageId: e,
        messageContent: t,
        decisionId: i,
        channel: a
      }
    }))
  })
}

function _(e, t) {
  (0, o.ZDy)(async () => {
    let {
      default: i
    } = await n.e("28382").then(n.bind(n, 537623));
    return n => (0, r.jsx)(i, d(c({}, n), {
      messageId: e,
      guildId: t
    }))
  })
}

function m(e) {
  (0, i.Z)({
    title: s.intl.string(s.t.wLGrjB),
    subtitle: s.intl.string(s.t.arYQ2X),
    confirmText: s.intl.string(s.t["cY+Oob"]),
    onConfirm: e
  })
}