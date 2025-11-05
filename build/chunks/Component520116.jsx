/** Chunk was on 27 **/
/** chunk id: 520116, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk91192 = require("./91192.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk135938 = require("./135938.js"),
  Chunk554838 = require("./554838.js"),
  Chunk493892 = require("./493892.js"),
  Chunk661824 = require("./661824.jsx"),
  Chunk37772 = require("./37772.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk314897 = require("./314897.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55935 = require("./55935.js"),
  Chunk655354 = require("./655354.jsx"),
  Chunk809780 = require("./809780.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk557047 = require("./557047.js");
let E = {
  left: 4,
  right: false
};

function x(e) {
  var t, n, l;
  let {
    channel: o,
    message: s,
    compact: u,
    isGroupStart: d,
    treatSpam: p,
    gotoChannel: h
  } = e, g = (0, a.JA)(null != (t = s.id) ? t : ""), m = i.useCallback(e => {
    if ("ArrowLeft" === e.key) {
      var t;
      null == (t = document.querySelector('[data-recents-channel="'.concat(o.id, '"]'))) || t.focus()
    }
  }, [o.id]);
  return (0, r.jsx)(c.tEY, {
    offset: E,
    children: (0, r.jsxs)("div", (n = function(e) {
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
    }({
      className: C.messageContainer,
      onKeyDown: m
    }, g), l = l = {
      children: [(0, r.jsx)(y.Z, {
        className: C.jumpButton,
        onJump: e => h(e, s.id)
      }), (0, r.jsx)(f.Z, {
        id: s.id,
        message: s,
        channel: o,
        className: C.message,
        compact: u,
        animateAvatar: false,
        isGroupStart: d,
        onKeyDown: m,
        treatSpam: p
      })]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(l)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
    }), n), s.id)
  })
}

function S(e) {
  var t, n;
  let {
    channel: i,
    channelRecord: l,
    gotoChannel: a
  } = e, {
    enabled: f
  } = u.Z.useExperiment({
    location: "20e3b0_1"
  }, {
    autoTrackExposure: false
  }), y = g.jU.useSetting(), E = (0, p.P1)(l), S = false, I = 0 === i.messages.length || o()(i.messages[0].timestamp).isSame(o()(), "day"), P = null != (n = null == (t = b.default.getUser(m.default.getId())) ? true : t.hasFlag(v.xW$.SPAMMER)) && n, N = [];
  if (!i.collapsed) {
    let e = null,
      t = null,
      n = i.messages.slice(0, O.hC);
    n.forEach(n => {
      if (!I && (null == e || !e.isSame(n.timestamp, "day"))) {
        let t = (0, _.vc)(n.timestamp, "LL");
        N.push((0, r.jsx)(h.Z, {
          className: C.divider,
          children: t
        }, t)), e = o()(n.timestamp)
      }
      let i = null == t || (0, d.Z)(l, t, n);
      t = n, S = S || (0, p.DQ)(n), N.push((0, r.jsx)(x, {
        channel: l,
        message: n,
        compact: y,
        isGroupStart: i,
        treatSpam: !P && f && (0, p.DQ)(n) && E,
        gotoChannel: a
      }, n.id))
    }), i.messages.length >= O.hC && N.push((0, r.jsxs)(s.zx, {
      color: s.zx.Colors.LINK,
      look: s.zx.Looks.LINK,
      onClick: e => a(e, n[n.length - 1].id),
      children: [j.intl.string(j.t["9OB9hq"]), " ›"]
    }, "view-all")), 0 === N.length && (N = [(0, r.jsx)(c.$jN, {}, "spinner")])
  }
  return S && E && u.Z.trackExposure({
    location: "20e3b0_2"
  }), (0, r.jsx)("div", {
    className: C.messages,
    children: N
  })
}