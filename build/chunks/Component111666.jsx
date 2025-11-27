/** Chunk was on 1272 **/
/** chunk id: 111666, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk790519 = require("./790519.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk868781 = require("./868781.jsx"),
  Chunk122943 = require("./122943.jsx"),
  Chunk665149 = require("./665149.jsx"),
  Chunk456077 = require("./456077.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk482798 = require("./482798.js"),
  Chunk167762 = require("./167762.jsx"),
  Chunk151459 = require("./151459.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk10058 = require("./10058.js");

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

function C(e, t) {
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
  } = e, n = (0, a.e7)([g.Z], () => g.Z.getPendingCount() > 0), _ = (0, s.dQu)(s.TVs.modules.chat.INPUT_ICON_SIZE), S = function() {
    let [e, t] = i.useState(null), {
      showActivityTicker: n
    } = (0, E.Z)(), r = i.useRef({}), l = i.useRef(null);
    return i.useEffect(() => {
      if (!n) {
        t(null), null != l.current && (window.clearTimeout(l.current), l.current = null);
        return
      }
      let e = (e, t, n) => {
          null == r.current[e] && (r.current[e] = {}), null == n ? delete r.current[e][t] : r.current[e][t] = n, 0 === Object.keys(r.current[e]).length && delete r.current[e]
        },
        i = (n, i, a) => {
          var s, o, c, u, d, p, h, _, b;
          if (!g.Z.isFriend(n)) returnfalse;
          let E = m.default.getUser(n);
          if (null == E) returnfalse;
          let v = false,
            y = null;
          if (null != i) {
            let t = i.type;
            if (null != t && function(e) {
                let t = e.type;
                return t === O.IIU.PLAYING && null != e.application_id || t === O.IIU.LISTENING || t === O.IIU.WATCHING
              }(i)) {
              let l = t === O.IIU.WATCHING || t === O.IIU.LISTENING ? "".concat(t, "-").concat(null != (u = i.name) ? u : "", "-").concat(null != (d = i.state) ? d : "", "-").concat(null != (p = i.details) ? p : "") : "".concat(t, "-").concat(null != (h = i.name) ? h : "");
              (null == (c = r.current[n]) ? true : c.presence) !== l && (v = true, e(n, "presence", l), y = {
                user: E,
                activity: i
              })
            } else(null == (o = r.current[n]) ? true : o.presence) != null && (v = true, e(n, "presence", null))
          }
          if (null != a) {
            let t = f.Z.getChannel(a);
            if (null != t) {
              let i = "voice-".concat(t.id);
              (null == (_ = r.current[n]) ? true : _.voice) !== i && (v = true, e(n, "voice", i), y = {
                user: E,
                voiceChannel: t
              })
            }
          } else(null == (s = r.current[n]) ? true : s.voice) != null && (v = true, e(n, "voice", null));
          return v && null != y && (b = y, null != l.current && (window.clearTimeout(l.current), l.current = null), t(b), l.current = window.setTimeout(() => {
            t(null), l.current = null
          }, 1e4)), v
        },
        a = e => {
          for (let t of e.updates) {
            let e = t.user.id,
              n = h.Z.getPrimaryActivity(e);
            if (i(e, n)) break
          }
        },
        s = e => {
          for (let t of e.voiceStates)
            if (i(t.userId, true, t.channelId)) break
        };
      return o.Z.subscribe("PRESENCE_UPDATES", a), o.Z.subscribe("VOICE_STATE_UPDATES", s), () => {
        o.Z.unsubscribe("PRESENCE_UPDATES", a), o.Z.unsubscribe("VOICE_STATE_UPDATES", s), null != l.current && (window.clearTimeout(l.current), l.current = null)
      }
    }, [n]), e
  }(), T = i.useRef(null), N = (0, s.Yzy)(S, {
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
      className: y.container,
      children: N((e, t) => null == t ? null : (0, r.jsx)(p.Z, {
        targetElementRef: T,
        position: "bottom",
        align: "left",
        userId: t.user.id,
        children: n => {
          var i;
          return (0, r.jsxs)(l.animated.div, C(I({
            ref: T,
            className: y.activityWrapper,
            style: e
          }, n), {
            children: [(0, r.jsx)(s.Text, {
              variant: "text-xs/semibold",
              children: null != (i = t.user.globalName) ? i : t.user.username
            }), null != t.voiceChannel ? (0, r.jsx)(u.Z, {
              channel: t.voiceChannel,
              textVariant: "text-xs/medium",
              textClassName: y.statusText
            }) : (0, r.jsx)(c.Z, {
              activity: t.activity,
              textVariant: "text-xs/medium",
              textClassName: y.statusText
            })]
          }))
        }
      }))
    }), (0, r.jsx)(b.Or, {
      popoutPosition: "bottom",
      popoutAlign: "left",
      children: (e, i, l, a) => (0, r.jsx)(d.JO, C(I({}, l), {
        ref: a,
        className: t,
        onClick: e,
        icon: s.iFz,
        iconSize: _,
        "aria-label": v.intl.string(v.t.TdEu5X),
        tooltip: i ? null : v.intl.string(v.t.TdEu5X),
        selected: i,
        showBadge: n
      }))
    })]
  })
}

function T(e) {
  let {
    className: t
  } = e, {
    enableTopNavButton: n
  } = (0, _.Cq)({
    location: "friends-button"
  });
  return n ? (0, r.jsx)(S, {
    className: t
  }) : null
}