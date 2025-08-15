/** Chunk was on 96750 **/
/** chunk id: 910424, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
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
  Chunk915863 = require("./915863.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk603634 = require("./603634.js");

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  let {
    isCurrentUser: t,
    color: n,
    look: y,
    applicationStream: O,
    onAction: S
  } = e, {
    activeStream: I,
    watchingOtherStream: j
  } = (0, i.cj)([d.Z], () => ({
    activeStream: d.Z.getActiveStreamForApplicationStream(O),
    watchingOtherStream: null != O && d.Z.getAllActiveStreamsForChannel(O.channelId).filter(e => {
      let {
        ownerId: t
      } = e;
      return t !== O.ownerId
    }).length > 0
  })), x = (0, i.e7)([f.Z], () => f.Z.getChannel(null == O ? true : O.channelId)), [E, P] = (0, u.wq)(x), C = (0, c.Aq)(), T = null != I && null != O && I.state !== g.jm8.ENDED && I.ownerId === O.ownerId, N = e => {
    null != O && (null == S || S(), o.default.selectVoiceChannel(O.channelId), T || (0, s.iV)(O, {
      forceMultiple: e
    }), C.dispatch(g.CkL.POPOUT_CLOSE), p.S.dispatch(g.CkL.MODAL_CLOSE), a.Z.popAll())
  };
  if (null == O) return null;
  let A = (0, u.P9)(P);
  t ? A = h.intl.string(h.t.XvBdeX) : T && (A = h.intl.string(h.t.JH1SJy));
  let w = {
    color: n,
    look: y
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(m.Z, _(v({
      disabled: t || T || !E,
      onClick: () => N(false)
    }, w), {
      fullWidth: true,
      children: [(0, r.jsx)(l.hGI, {
        size: "md",
        color: "currentColor",
        className: b.streamIcon
      }), A]
    }), "play"), j && !T ? (0, r.jsx)(l.ua7, {
      text: h.intl.string(h.t.wCrzur),
      children: e => (0, r.jsx)(m.Z, _(v(_(v({}, e), {
        onClick: () => {
          var t;
          null == (t = e.onClick) || t.call(e), N(true)
        }
      }), w), {
        className: b.iconButton,
        size: b.iconButtonSize,
        children: (0, r.jsx)(l.OgY, {
          size: "xs",
          color: "currentColor",
          className: b.iconSize
        })
      }))
    }) : null]
  })
}