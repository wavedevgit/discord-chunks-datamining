/** Chunk was on 21738 **/
/** chunk id: 871432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk353709 = require("./353709.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk835072 = require("./835072.jsx"),
  Chunk194187 = require("./194187.jsx"),
  Chunk58736 = require("./58736.jsx"),
  Chunk342296 = require("./342296.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk290863 = require("./290863.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk126904 = require("./126904.js"),
  Chunk726079 = require("./726079.jsx"),
  Chunk348417 = require("./348417.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk270430 = require("./270430.js");

function I(e) {
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

function v(e, t) {
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

function S(e) {
  let {
    className: t
  } = e, n = (0, a.bG)([f.A], () => f.A.getPendingCount() > 0), A = (0, s.rdh)(s.LU0.modules.chat.INPUT_ICON_SIZE), S = function() {
    let [e, t] = i.useState(null), {
      showActivityTicker: n
    } = (0, b.A)(), r = i.useRef({}), l = i.useRef(null);
    return i.useEffect(() => {
      if (!n) {
        t(null), null != l.current && (window.clearTimeout(l.current), l.current = null);
        return
      }
      let e = (e, t, n) => {
          null == r.current[e] && (r.current[e] = {}), null == n ? delete r.current[e][t] : r.current[e][t] = n, 0 === Object.keys(r.current[e]).length && delete r.current[e]
        },
        i = (n, i, a) => {
          var s, o, c, u, d, p, g, A, _, b;
          if (!f.A.isFriend(n)) returnfalse;
          let O = m.default.getUser(n);
          if (null == O) returnfalse;
          let y = false,
            I = null;
          if (null != i) {
            let t, l = i.type;
            if (null != l && ((t = (b = i).type) === E.$pd.PLAYING && null != b.application_id || t === E.$pd.LISTENING || t === E.$pd.WATCHING)) {
              let t = l === E.$pd.WATCHING || l === E.$pd.LISTENING ? "".concat(l, "-").concat(null != (c = i.name) ? c : "", "-").concat(null != (u = i.state) ? u : "", "-").concat(null != (d = i.details) ? d : "") : "".concat(l, "-").concat(null != (p = i.name) ? p : "");
              (null == (g = r.current[n]) ? true : g.presence) !== t && (y = true, e(n, "presence", t), I = {
                user: O,
                activity: i
              })
            } else(null == (o = r.current[n]) ? true : o.presence) != null && (y = true, e(n, "presence", null))
          }
          if (null != a) {
            let t = h.A.getChannel(a);
            if (null != t) {
              let i = "voice-".concat(t.id);
              (null == (A = r.current[n]) ? true : A.voice) !== i && (y = true, e(n, "voice", i), I = {
                user: O,
                voiceChannel: t
              })
            }
          } else(null == (s = r.current[n]) ? true : s.voice) != null && (y = true, e(n, "voice", null));
          return y && null != I && (_ = I, null != l.current && (window.clearTimeout(l.current), l.current = null), t(_), l.current = window.setTimeout(() => {
            t(null), l.current = null
          }, 1e4)), y
        },
        a = e => {
          for (let t of e.updates) {
            let e = t.user.id,
              n = g.A.getPrimaryActivity(e);
            if (i(e, n)) break
          }
        },
        s = e => {
          for (let t of e.voiceStates)
            if (i(t.userId, true, t.channelId)) break
        };
      return o.h.subscribe("PRESENCE_UPDATES", a), o.h.subscribe("VOICE_STATE_UPDATES", s), () => {
        o.h.unsubscribe("PRESENCE_UPDATES", a), o.h.unsubscribe("VOICE_STATE_UPDATES", s), null != l.current && (window.clearTimeout(l.current), l.current = null)
      }
    }, [n]), e
  }(), C = i.useRef(null), N = (0, s.pnh)(S, {
    keys: e => {
      var t, n, r;
      return null != e ? null != e.voiceChannel ? "".concat(e.user.id, "-voice-").concat(e.voiceChannel.id) : "".concat(e.user.id, "-").concat(null == (t = e.activity) ? true : t.state, ":").concat(null == (n = e.activity) ? true : n.details, ":").concat(null == (r = e.activity) ? true : r.name) : "none"
    },
    from: {
      opacity: 0,
      transform: "translateY(32px)"
    },
    enter: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    leave: {
      opacity: 0,
      transform: "translateY(-32px)"
    },
    config: {
      tension: 300,
      friction: 30
    }
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: y.kL,
      children: N((e, t) => null == t ? null : (0, r.jsx)(p.A, {
        targetElementRef: C,
        position: "bottom",
        align: "left",
        userId: t.user.id,
        children: n => {
          var i;
          return (0, r.jsxs)(l.animated.div, v(I({
            ref: C,
            className: y.HI,
            style: e
          }, n), {
            children: [(0, r.jsx)(s.Text, {
              variant: "text-xs/semibold",
              children: null != (i = t.user.globalName) ? i : t.user.username
            }), null != t.voiceChannel ? (0, r.jsx)(u.A, {
              channel: t.voiceChannel,
              textVariant: "text-xs/medium",
              textClassName: y.qS
            }) : (0, r.jsx)(c.A, {
              activity: t.activity,
              textVariant: "text-xs/medium",
              textClassName: y.qS
            })]
          }))
        }
      }))
    }), (0, r.jsx)(_.lD, {
      popoutPosition: "bottom",
      popoutAlign: "left",
      children: (e, i, l, a) => (0, r.jsx)(d.In, v(I({}, l), {
        ref: a,
        className: t,
        onClick: e,
        icon: s.$yI,
        iconSize: A,
        "aria-label": O.intl.string(O.t.TdEu5X),
        tooltip: i ? null : O.intl.string(O.t.TdEu5X),
        selected: i,
        showBadge: n
      }))
    })]
  })
}

function C(e) {
  let {
    className: t
  } = e, {
    enableTopNavButton: n
  } = (0, A.tR)({
    location: "friends-button"
  });
  return n ? (0, r.jsx)(S, {
    className: t
  }) : null
}