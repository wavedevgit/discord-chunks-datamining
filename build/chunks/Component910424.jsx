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

function b(e) {
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

function h(e, t) {
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
    onAction: j
  } = e, {
    activeStream: S,
    watchingOtherStream: x
  } = (0, i.cj)([d.Z], () => ({
    activeStream: d.Z.getActiveStreamForApplicationStream(O),
    watchingOtherStream: null != O && d.Z.getAllActiveStreamsForChannel(O.channelId).filter(e => {
      let {
        ownerId: t
      } = e;
      return t !== O.ownerId
    }).length > 0
  })), I = (0, i.e7)([p.Z], () => p.Z.getChannel(null == O ? true : O.channelId)), [P, C] = (0, u.wq)(I), E = (0, c.Aq)(), w = null != S && null != O && S.state !== g.jm8.ENDED && S.ownerId === O.ownerId, T = e => {
    null != O && (null == j || j(), o.default.selectVoiceChannel(O.channelId), w || (0, s.iV)(O, {
      forceMultiple: e
    }), E.dispatch(g.CkL.POPOUT_CLOSE), f.S.dispatch(g.CkL.MODAL_CLOSE), a.Z.popAll())
  };
  if (null == O) return null;
  let N = (0, u.P9)(C);
  t ? N = v.intl.string(v.t.XvBdeX) : w && (N = v.intl.string(v.t.JH1SJy));
  let Z = {
    color: n,
    look: y
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(m.Z, h(b({
      disabled: t || w || !P,
      onClick: () => T(false)
    }, Z), {
      fullWidth: true,
      children: [(0, r.jsx)(l.hGI, {
        size: "md",
        color: "currentColor",
        className: _.streamIcon
      }), N]
    }), "play"), x && !w ? (0, r.jsx)(l.ua7, {
      text: v.intl.string(v.t.wCrzur),
      children: e => (0, r.jsx)(m.Z, h(b(h(b({}, e), {
        onClick: () => {
          var t;
          null == (t = e.onClick) || t.call(e), T(true)
        }
      }), Z), {
        className: _.iconButton,
        size: _.iconButtonSize,
        children: (0, r.jsx)(l.OgY, {
          size: "xs",
          color: "currentColor",
          className: _.iconSize
        })
      }))
    }) : null]
  })
}