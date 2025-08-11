/** Chunk was on 1272 **/
/** chunk id: 111666, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk126663 = require("./126663.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk868781 = require("./868781.jsx"),
  Chunk122943 = require("./122943.jsx"),
  Chunk665149 = require("./665149.jsx"),
  Chunk670188 = require("./670188.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk482798 = require("./482798.js"),
  Chunk167762 = require("./167762.jsx"),
  Chunk151459 = require("./151459.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk398435 = require("./398435.js");

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
  } = e, n = (0, a.e7)([g.Z], () => g.Z.getPendingCount() > 0), b = (0, o.dQu)(o.TVs.modules.chat.INPUT_ICON_SIZE), S = function() {
    let [e, t] = i.useState(null), {
      showActivityTicker: n
    } = (0, O.Z)(), r = i.useRef({}), l = i.useRef(null);
    return i.useEffect(() => {
      if (!n) {
        t(null), null != l.current && (window.clearTimeout(l.current), l.current = null);
        return
      }
      let e = (e, t, n) => {
          null == r.current[e] && (r.current[e] = {}), null == n ? delete r.current[e][t] : r.current[e][t] = n, 0 === Object.keys(r.current[e]).length && delete r.current[e]
        },
        i = e => {
          null != l.current && (window.clearTimeout(l.current), l.current = null), t(e), l.current = window.setTimeout(() => {
            t(null), l.current = null
          }, 1e4)
        },
        a = (t, n, l) => {
          var a, o, s, c, u, d, p, h;
          if (!g.Z.isFriend(t)) returnfalse;
          let b = m.default.getUser(t);
          if (null == b) returnfalse;
          let _ = false,
            O = null;
          if (null != n) {
            let i = n.type;
            if (null != i && function(e) {
                let t = e.type;
                return t === E.IIU.PLAYING && null != e.application_id || t === E.IIU.LISTENING || t === E.IIU.WATCHING
              }(n)) {
              let l = i === E.IIU.WATCHING || i === E.IIU.LISTENING ? "".concat(i, "-").concat(null != (c = n.name) ? c : "", "-").concat(null != (u = n.state) ? u : "", "-").concat(null != (d = n.details) ? d : "") : "".concat(i, "-").concat(null != (p = n.name) ? p : "");
              (null == (s = r.current[t]) ? true : s.presence) !== l && (_ = true, e(t, "presence", l), O = {
                user: b,
                activity: n
              })
            } else(null == (o = r.current[t]) ? true : o.presence) != null && (_ = true, e(t, "presence", null))
          }
          if (null != l) {
            let n = f.Z.getChannel(l);
            if (null != n) {
              let i = "voice-".concat(n.id);
              (null == (h = r.current[t]) ? true : h.voice) !== i && (_ = true, e(t, "voice", i), O = {
                user: b,
                voiceChannel: n
              })
            }
          } else(null == (a = r.current[t]) ? true : a.voice) != null && (_ = true, e(t, "voice", null));
          return _ && null != O && i(O), _
        },
        o = e => {
          for (let t of e.updates) {
            let e = t.user.id,
              n = h.Z.getPrimaryActivity(e);
            if (a(e, n)) break
          }
        },
        c = e => {
          for (let t of e.voiceStates)
            if (a(t.userId, true, t.channelId)) break
        };
      return s.Z.subscribe("PRESENCE_UPDATES", o), s.Z.subscribe("VOICE_STATE_UPDATES", c), () => {
        s.Z.unsubscribe("PRESENCE_UPDATES", o), s.Z.unsubscribe("VOICE_STATE_UPDATES", c), null != l.current && (window.clearTimeout(l.current), l.current = null)
      }
    }, [n]), e
  }(), N = i.useRef(null), T = (0, o.Yzy)(S, {
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
      className: v.container,
      children: T((e, t) => null == t ? null : (0, r.jsx)(p.Z, {
        targetElementRef: N,
        position: "bottom",
        align: "left",
        userId: t.user.id,
        children: n => {
          var i;
          return (0, r.jsxs)(l.animated.div, C(I({
            ref: N,
            className: v.activityWrapper,
            style: e
          }, n), {
            children: [(0, r.jsx)(o.Text, {
              variant: "text-xs/semibold",
              children: null != (i = t.user.globalName) ? i : t.user.username
            }), null != t.voiceChannel ? (0, r.jsx)(u.Z, {
              channel: t.voiceChannel,
              textVariant: "text-xs/medium",
              textClassName: v.statusText
            }) : (0, r.jsx)(c.Z, {
              activity: t.activity,
              textVariant: "text-xs/medium",
              textClassName: v.statusText
            })]
          }))
        }
      }))
    }), (0, r.jsx)(_.Or, {
      popoutPosition: "bottom",
      popoutAlign: "left",
      children: (e, i, l, a) => (0, r.jsx)(d.JO, C(I({}, l), {
        ref: a,
        className: t,
        onClick: e,
        icon: o.iFz,
        iconSize: b,
        "aria-label": y.intl.string(y.t.TdEu5e),
        tooltip: i ? null : y.intl.string(y.t.TdEu5e),
        selected: i,
        showBadge: n
      }))
    })]
  })
}

function N(e) {
  let {
    className: t
  } = e, {
    enableTopNavButton: n
  } = (0, b.Cq)({
    location: "friends-button"
  });
  return n ? (0, r.jsx)(S, {
    className: t
  }) : null
}