/** Chunk was on 42402 **/
/** chunk id: 502754, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
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
let _ = {
    left: 4,
    right: false
  },
  v = [Chunk652215.lAJ.THREAD_CREATED];

function E(e) {
  var t, n, i;
  let {
    channel: s,
    message: c,
    compact: u,
    isGroupStart: d,
    treatSpam: p,
    gotoChannel: g
  } = e, f = (0, a.rm)(null != (t = c.id) ? t : ""), m = l.useCallback(e => {
    if ("ArrowLeft" === e.key) {
      var t;
      null == (t = document.querySelector('[data-recents-channel="'.concat(s.id, '"]'))) || t.focus()
    }
  }, [s.id]), b = v.includes(c.type);
  return (0, r.jsx)(o.vN3, {
    offset: _,
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
      className: x.zC,
      onKeyDown: m
    }, f), i = i = {
      children: [!b && (0, r.jsx)(A.A, {
        className: x.nn,
        onJump: e => g(e, c.id)
      }), (0, r.jsx)(h.A, {
        id: c.id,
        message: c,
        channel: s,
        className: x.iU,
        compact: u,
        animateAvatar: false,
        isGroupStart: d,
        onKeyDown: m,
        treatSpam: p
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
    gotoChannel: a
  } = e, {
    enabled: h
  } = c.A.useExperiment({
    location: "20e3b0_1"
  }, {
    autoTrackExposure: false
  }), A = g.hH.useSetting(), _ = (0, d.iJ)(i), v = false, C = 0 === l.messages.length || s()(l.messages[0].timestamp).isSame(s()(), "day"), S = null != (t = null == (n = m.default.getUser(f.default.getId())) ? true : n.hasFlag(O.nhx.SPAMMER)) && t, I = [];
  if (!l.collapsed) {
    let e = null,
      t = null,
      n = l.messages.slice(0, y.sz);
    n.forEach(n => {
      if (!C && (null == e || !e.isSame(n.timestamp, "day"))) {
        let t = (0, b.i$)(n.timestamp, "LL");
        I.push((0, r.jsx)(p.A, {
          className: x.yF,
          children: t
        }, t)), e = s()(n.timestamp)
      }
      let l = null == t || (0, u.A)(i, t, n);
      t = n, v = v || (0, d.kf)(n), I.push((0, r.jsx)(E, {
        channel: i,
        message: n,
        compact: A,
        isGroupStart: l,
        treatSpam: !S && h && (0, d.kf)(n) && _,
        gotoChannel: a
      }, n.id))
    }), l.messages.length >= y.sz && I.push((0, r.jsx)("div", {
      className: x.Gr,
      children: (0, r.jsx)(o.QWc, {
        variant: "primary",
        text: "".concat(j.intl.string(j.t["9OB9hq"]), " ›"),
        onClick: e => a(e, n[n.length - 1].id)
      })
    }, "view-all")), 0 === I.length && (I = [(0, r.jsx)(o.y$y, {}, "spinner")])
  }
  return v && _ && c.A.trackExposure({
    location: "20e3b0_2"
  }), (0, r.jsx)("div", {
    className: x.DZ,
    children: I
  })
}