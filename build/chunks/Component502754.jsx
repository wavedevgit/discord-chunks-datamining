/** Chunk was on 97492 **/
/** chunk id: 502754, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk837381 = require("./837381.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk559149 = require("./559149.js"),
  Chunk857069 = require("./857069.js"),
  Chunk694318 = require("./694318.js"),
  Chunk813516 = require("./813516.jsx"),
  Chunk906141 = require("./906141.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk961350 = require("./961350.js"),
  Chunk287809 = require("./287809.js"),
  Chunk405269 = require("./405269.js"),
  Chunk576456 = require("./576456.jsx"),
  Chunk712209 = require("./712209.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk359884 = require("./359884.js");
let x = {
    left: 4,
    right: false
  },
  E = [Chunk652215.lAJ.THREAD_CREATED];

function _(e) {
  var t, n, i;
  let {
    channel: a,
    message: c,
    compact: u,
    isGroupStart: d,
    treatSpam: f,
    gotoChannel: h
  } = e, b = (0, s.rm)(null != (t = c.id) ? t : ""), g = l.useCallback(e => {
    if ("ArrowLeft" === e.key) {
      var t;
      null == (t = document.querySelector('[data-recents-channel="'.concat(a.id, '"]'))) || t.focus()
    }
  }, [a.id]), m = E.includes(c.type);
  return (0, r.jsx)(o.vN3, {
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
      className: v.zC,
      onKeyDown: g
    }, b), i = i = {
      children: [!m && (0, r.jsx)(A.A, {
        className: v.nn,
        onJump: e => h(e, c.id)
      }), (0, r.jsx)(p.A, {
        id: c.id,
        message: c,
        channel: a,
        className: v.iU,
        compact: u,
        animateAvatar: false,
        isGroupStart: d,
        onKeyDown: g,
        treatSpam: f
      })]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(i)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
    }), n), c.id)
  })
}

function C(e) {
  var t, n;
  let {
    channel: l,
    channelRecord: i,
    gotoChannel: s
  } = e, {
    enabled: p
  } = c.A.useExperiment({
    location: "20e3b0_1"
  }, {
    autoTrackExposure: false
  }), A = h.hH.useSetting(), x = (0, d.iJ)(i), E = false, C = 0 === l.messages.length || a()(l.messages[0].timestamp).isSame(a()(), "day"), S = null != (t = null == (n = g.default.getUser(b.default.getId())) ? true : n.hasFlag(O.nhx.SPAMMER)) && t, I = [];
  if (!l.collapsed) {
    let e = null,
      t = null,
      n = l.messages.slice(0, y.sz);
    n.forEach(n => {
      if (!C && (null == e || !e.isSame(n.timestamp, "day"))) {
        let t = (0, m.i$)(n.timestamp, "LL");
        I.push((0, r.jsx)(f.A, {
          className: v.yF,
          children: t
        }, t)), e = a()(n.timestamp)
      }
      let l = null == t || (0, u.A)(i, t, n);
      t = n, E = E || (0, d.kf)(n), I.push((0, r.jsx)(_, {
        channel: i,
        message: n,
        compact: A,
        isGroupStart: l,
        treatSpam: !S && p && (0, d.kf)(n) && x,
        gotoChannel: s
      }, n.id))
    }), l.messages.length >= y.sz && I.push((0, r.jsx)("div", {
      className: v.Gr,
      children: (0, r.jsx)(o.QWc, {
        variant: "primary",
        text: "".concat(j.intl.string(j.t["9OB9hq"]), " ›"),
        onClick: e => s(e, n[n.length - 1].id)
      })
    }, "view-all")), 0 === I.length && (I = [(0, r.jsx)(o.y$y, {}, "spinner")])
  }
  return E && x && c.A.trackExposure({
    location: "20e3b0_2"
  }), (0, r.jsx)("div", {
    className: v.DZ,
    children: I
  })
}