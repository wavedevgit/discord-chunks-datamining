/** Chunk was on 46467 **/
/** chunk id: 520116, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk91192 = require("./91192.jsx"),
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
let x = {
    left: 4,
    right: false
  },
  C = [Chunk981631.uaV.THREAD_CREATED];

function E(e) {
  var t, n, l;
  let {
    channel: o,
    message: c,
    compact: u,
    isGroupStart: d,
    treatSpam: f,
    gotoChannel: p
  } = e, g = (0, a.JA)(null != (t = c.id) ? t : ""), m = i.useCallback(e => {
    if ("ArrowLeft" === e.key) {
      var t;
      null == (t = document.querySelector('[data-recents-channel="'.concat(o.id, '"]'))) || t.focus()
    }
  }, [o.id]), b = C.includes(c.type);
  return (0, r.jsx)(s.tEY, {
    offset: x,
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
      className: j.messageContainer,
      onKeyDown: m
    }, g), l = l = {
      children: [!b && (0, r.jsx)(_.Z, {
        className: j.jumpButton,
        onJump: e => p(e, c.id)
      }), (0, r.jsx)(h.Z, {
        id: c.id,
        message: c,
        channel: o,
        className: j.message,
        compact: u,
        animateAvatar: false,
        isGroupStart: d,
        onKeyDown: m,
        treatSpam: f
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
    }), n), c.id)
  })
}

function S(e) {
  var t, n;
  let {
    channel: i,
    channelRecord: l,
    gotoChannel: a
  } = e, {
    enabled: h
  } = c.Z.useExperiment({
    location: "20e3b0_1"
  }, {
    autoTrackExposure: false
  }), _ = p.jU.useSetting(), x = (0, d.P1)(l), C = false, S = 0 === i.messages.length || o()(i.messages[0].timestamp).isSame(o()(), "day"), I = null != (n = null == (t = m.default.getUser(g.default.getId())) ? true : t.hasFlag(O.xW$.SPAMMER)) && n, P = [];
  if (!i.collapsed) {
    let e = null,
      t = null,
      n = i.messages.slice(0, y.hC);
    n.forEach(n => {
      if (!S && (null == e || !e.isSame(n.timestamp, "day"))) {
        let t = (0, b.vc)(n.timestamp, "LL");
        P.push((0, r.jsx)(f.Z, {
          className: j.divider,
          children: t
        }, t)), e = o()(n.timestamp)
      }
      let i = null == t || (0, u.Z)(l, t, n);
      t = n, C = C || (0, d.DQ)(n), P.push((0, r.jsx)(E, {
        channel: l,
        message: n,
        compact: _,
        isGroupStart: i,
        treatSpam: !I && h && (0, d.DQ)(n) && x,
        gotoChannel: a
      }, n.id))
    }), i.messages.length >= y.hC && P.push((0, r.jsx)("div", {
      className: j.showAllButtonContainer,
      children: (0, r.jsx)(s.Avr, {
        variant: "primary",
        text: "".concat(v.intl.string(v.t["9OB9hq"]), " ›"),
        onClick: e => a(e, n[n.length - 1].id)
      })
    }, "view-all")), 0 === P.length && (P = [(0, r.jsx)(s.$jN, {}, "spinner")])
  }
  return C && x && c.Z.trackExposure({
    location: "20e3b0_2"
  }), (0, r.jsx)("div", {
    className: j.messages,
    children: P
  })
}