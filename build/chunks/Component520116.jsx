/** Chunk was on 82124 **/
/** chunk id: 520116, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
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
  Chunk28034 = require("./28034.js");
let C = {
    left: 4,
    right: false
  },
  E = [Chunk981631.uaV.THREAD_CREATED];

function S(e) {
  var t, n, l;
  let {
    channel: a,
    message: c,
    compact: u,
    isGroupStart: d,
    treatSpam: p,
    gotoChannel: h
  } = e, g = (0, o.JA)(null != (t = c.id) ? t : ""), m = i.useCallback(e => {
    if ("ArrowLeft" === e.key) {
      var t;
      null == (t = document.querySelector('[data-recents-channel="'.concat(a.id, '"]'))) || t.focus()
    }
  }, [a.id]), b = E.includes(c.type);
  return (0, r.jsx)(s.tEY, {
    offset: C,
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
      className: x.messageContainer,
      onKeyDown: m
    }, g), l = l = {
      children: [!b && (0, r.jsx)(y.Z, {
        className: x.jumpButton,
        onJump: e => h(e, c.id)
      }), (0, r.jsx)(f.Z, {
        id: c.id,
        message: c,
        channel: a,
        className: x.message,
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
    }), n), c.id)
  })
}

function _(e) {
  var t, n;
  let {
    channel: i,
    channelRecord: l,
    gotoChannel: o
  } = e, {
    enabled: f
  } = c.Z.useExperiment({
    location: "20e3b0_1"
  }, {
    autoTrackExposure: false
  }), y = h.jU.useSetting(), C = (0, d.P1)(l), E = false, _ = 0 === i.messages.length || a()(i.messages[0].timestamp).isSame(a()(), "day"), I = null != (n = null == (t = m.default.getUser(g.default.getId())) ? true : t.hasFlag(O.xW$.SPAMMER)) && n, P = [];
  if (!i.collapsed) {
    let e = null,
      t = null,
      n = i.messages.slice(0, v.hC);
    n.forEach(n => {
      if (!_ && (null == e || !e.isSame(n.timestamp, "day"))) {
        let t = (0, b.vc)(n.timestamp, "LL");
        P.push((0, r.jsx)(p.Z, {
          className: x.divider,
          children: t
        }, t)), e = a()(n.timestamp)
      }
      let i = null == t || (0, u.Z)(l, t, n);
      t = n, E = E || (0, d.DQ)(n), P.push((0, r.jsx)(S, {
        channel: l,
        message: n,
        compact: y,
        isGroupStart: i,
        treatSpam: !I && f && (0, d.DQ)(n) && C,
        gotoChannel: o
      }, n.id))
    }), i.messages.length >= v.hC && P.push((0, r.jsx)("div", {
      className: x.showAllButtonContainer,
      children: (0, r.jsx)(s.Avr, {
        variant: "primary",
        text: "".concat(j.intl.string(j.t["9OB9hq"]), " ›"),
        onClick: e => o(e, n[n.length - 1].id)
      })
    }, "view-all")), 0 === P.length && (P = [(0, r.jsx)(s.$jN, {}, "spinner")])
  }
  return E && C && c.Z.trackExposure({
    location: "20e3b0_2"
  }), (0, r.jsx)("div", {
    className: x.messages,
    children: P
  })
}