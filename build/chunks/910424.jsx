/** Chunk was on web.js **/
/** chunk id: 910424, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk572691 = require("./572691.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk102172 = require("./102172.js"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk585483 = require("./585483.js"),
  Chunk915863 = require("./915863.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk128746 = require("./128746.js");

function E(e, t, n) {
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
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  let {
    isCurrentUser: t,
    color: n,
    look: E,
    applicationStream: y,
    onAction: v
  } = e, {
    activeStream: I,
    watchingOtherStream: T
  } = (0, i.cj)([d.Z], () => ({
    activeStream: d.Z.getActiveStreamForApplicationStream(y),
    watchingOtherStream: null != y && d.Z.getAllActiveStreamsForChannel(y.channelId).filter(e => {
      let {
        ownerId: t
      } = e;
      return t !== y.ownerId
    }).length > 0
  })), S = (0, i.e7)([f.Z], () => f.Z.getChannel(null == y ? true : y.channelId)), [A, N] = (0, u.wq)(S), C = (0, c.Aq)(), R = null != I && null != y && I.state !== h.jm8.ENDED && I.ownerId === y.ownerId, P = e => {
    null != y && (null == v || v(), s.default.selectVoiceChannel(y.channelId), R || (0, l.iV)(y, {
      forceMultiple: e
    }), C.dispatch(h.CkL.POPOUT_CLOSE), _.S.dispatch(h.CkL.MODAL_CLOSE), a.Z.popAll())
  };
  if (null == y) return null;
  let w = (0, u.P9)(N);
  t ? w = m.intl.string(m.t.XvBdeX) : R && (w = m.intl.string(m.t.JH1SJy));
  let D = {
    color: n,
    look: E
  };
  return <r.Fragment>{<p.Z{...O(b({
      disabled: t || R || !A,
      onClick: () => P(false)
    }, D), {
      fullWidth: true,
      children: [(0, r.jsx)(o.hGI, {
        size: "md",
        color: "currentColor",
        className: g.streamIcon
      }), w]
    })} />}{T && !R ? <o.ua7 text={m.intl.string(m.t.wCrzur)}>{e => (0, r.jsx)(p.Z, O(b(O(b({}, e), {
        onClick: () => {
          var t;
          null == (t = e.onClick) || t.call(e), P(true)
        }
      }), D), {
        className: g.iconButton,
        size: g.iconButtonSize,
        children: (0, r.jsx)(o.OgY, {
          size: "xs",
          color: "currentColor",
          className: g.iconSize
        })
      }))}</o.ua7> : null}</r.Fragment>
}