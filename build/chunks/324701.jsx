/** Chunk was on web.js **/
/** chunk id: 324701, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => b,
  z: () => E
});
var Chunk255367 = require("./255367.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk100527 = require("./100527.js"),
  Chunk585483 = require("./585483.js"),
  Chunk192720 = require("./192720.js"),
  Chunk768943 = require("./768943.js"),
  Chunk175006 = require("./175006.js"),
  Chunk981631 = require("./981631.js"),
  Chunk989925 = require("./989925.js"),
  Chunk388032 = require("./388032.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
async function E(e) {
  var {
    displayToast: t = false
  } = e, p = m(e, ["displayToast"]);
  if (null == c.Z.getSavedMessage(p.channelId, p.messageId) && !(0, u.Z)()) return void(0, i.ZDy)(async () => {
    let {
      default: e
    } = await n.e("34906").then(n.bind(n, 639565));
    return t => <e{...h({
      source: a.Z.FOR_LATER_HELPERS
    }, t)} />
  });
  if (null != await (0, l.XA)(p).catch(e => {
      var t, n, r;
      return (null == e || null == (t = e.body) ? true : t.code) === d.evJ.TOO_MANY_SAVED_MESSAGES ? o.Z.show({
        title: _.intl.string(_.t.mlbiZW),
        body: _.intl.formatToPlainString(_.t["1zVbEB"], {
          max: f.D
        }),
        cancelText: _.intl.string(_.t.BddRzc),
        confirmText: _.intl.string(_.t.ZGbTc3),
        onConfirm: () => s.S.dispatch(d.CkL.TOGGLE_FOR_LATER)
      }) : (0, i.showToast)((0, i.createToast)(null != (r = null == e || null == (n = e.body) ? true : n.message) ? r : _.intl.string(_.t.R0RpRU), i.ToastType.FAILURE)), null
    }) && t) {
    let e = null != p.dueAt ? _.intl.string(_.t.i1IsOz) : _.intl.string(_.t["WQdL//"]),
      t = null != p.dueAt ? i.ToastType.CLOCK : i.ToastType.BOOKMARK;
    (0, i.showToast)((0, i.createToast)(e, t))
  }
}
async function b(e) {
  var {
    displayToast: t = false
  } = e, n = m(e, ["displayToast"]);
  if (null != await (0, l.ep)(n).catch(e => {
      var t, n;
      return (0, i.showToast)((0, i.createToast)(null != (n = null == e || null == (t = e.body) ? true : t.message) ? n : _.intl.string(_.t.R0RpRU), i.ToastType.FAILURE)), null
    }) && t) {
    let e = null != n.dueAt ? _.intl.string(_.t.D0tS09) : _.intl.string(_.t["5KOMiY"]),
      t = null != n.dueAt ? i.ToastType.CLOCK : i.ToastType.BOOKMARK;
    (0, i.showToast)((0, i.createToast)(e, t))
  }
}