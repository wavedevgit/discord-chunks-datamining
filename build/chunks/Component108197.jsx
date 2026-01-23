/** Chunk was on 97492 **/
/** chunk id: 108197, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => w
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk3026 = require("./3026.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk442433 = require("./442433.js"),
  Chunk152007 = require("./152007.js"),
  Chunk747926 = require("./747926.js"),
  Chunk734057 = require("./734057.js"),
  Chunk222823 = require("./222823.js"),
  Chunk977997 = require("./977997.js"),
  Chunk607567 = require("./607567.js"),
  Chunk892896 = require("./892896.js"),
  Chunk884415 = require("./884415.jsx"),
  Chunk775946 = require("./775946.jsx"),
  Chunk588224 = require("./588224.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk37411 = require("./37411.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk728444 = require("./728444.js"),
  Chunk811094 = require("./811094.js"),
  Chunk316945 = require("./316945.js");

function N(e) {
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

function T(e, t) {
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

function P(e) {
  let {
    style: t,
    withGuildIcon: n,
    inverted: l
  } = e, i = {
    className: s()(I.GI, {
      [I.a7]: n
    }, {
      [I.BJ]: l
    }),
    style: t
  }, {
    density: a
  } = (0, u.wRf)();
  switch (a) {
    case "cozy":
      return (0, r.jsxs)("svg", T(N({}, i), {
        width: "10",
        height: "20",
        viewBox: "0 0 10 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, r.jsx)("path", {
          d: "M0 15H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 4H2V15H0V4ZM2 4H0C0 3.4477.4477 3 1 3c.5523 0 1 .4477 1 1Z",
          fill: "currentColor"
        }), (0, r.jsx)("path", {
          d: "M6 20V18H9v2H6Zm3 0V18s1 0 1 1-1 1-.989 1.004ZM6 18v2H5V18H6Z",
          fill: "currentColor"
        })]
      }));
    case "compact":
      return (0, r.jsxs)("svg", T(N({}, i), {
        width: "10",
        height: "19",
        viewBox: "0 0 10 19",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, r.jsx)("path", {
          d: "M0 11H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 0H2V11H0V0ZM2 0H0C0-.5523.4477-1 1-1c.5523 0 1 .4477 1 1Z",
          fill: "currentColor"
        }), (0, r.jsx)("path", {
          d: "M6 16V14H9v2H6Zm3 0V14s1 0 1 1-1 1-.989 1.004ZM6 14v2H5V14H6Z",
          fill: "currentColor"
        })]
      }));
    default:
      return (0, r.jsxs)("svg", T(N({}, i), {
        width: "10",
        height: "19",
        viewBox: "0 0 10 19",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, r.jsx)("path", {
          d: "M0 13H2c0 1.6569 1.3432 3 3 3v2c-2.7614 0-5-2.2386-5-7ZM0 2H2V13H0V2ZM2 2H0C0 1.4477.4477 1 1 1c.5523 0 1 .4477 1 1Z",
          fill: "currentColor"
        }), (0, r.jsx)("path", {
          d: "M6 18V16H9v2H6Zm3 0V16s1 0 1 1-1 1-.989 1.004ZM6 16v2H5V16H6Z",
          fill: "currentColor"
        })]
      }))
  }
}
let w = Chunk64700.memo(function(e) {
  let {
    thread: t,
    isSelectedChannel: i,
    isSelectedVoice: I,
    isLast: w,
    withGuildIcon: R
  } = e, D = (0, o.bG)([A.Ay], () => A.Ay.getVoiceStatesForChannel(t), [t]), M = (0, o.bG)([b.A], () => b.A.hasVideo(t.id)), {
    unread: L,
    mentionCount: k,
    isMentionLowImportance: G
  } = (0, o.cf)([m.Ay], () => ({
    unread: m.Ay.hasUnread(t.id),
    mentionCount: m.Ay.getMentionCount(t.id),
    isMentionLowImportance: m.Ay.getIsMentionLowImportance(t.id)
  })), U = (0, o.bG)([h.A], () => h.A.isMuted(t.id)), B = l.useCallback(e => {
    (0, f.JA)(t, !e.shiftKey, x.H9.CHANNEL_LIST)
  }, [t]), V = l.useCallback(() => {
    d.A.preload(t.guild_id, t.id)
  }, [t.guild_id, t.id]), F = l.useCallback(e => {
    let l = g.A.getChannel(t.id);
    null != l && (0, p.L3)(e, async () => {
      let {
        default: e
      } = await n.e("33").then(n.bind(n, 44536));
      return t => (0, r.jsx)(e, T(N({}, t), {
        channel: l
      }))
    })
  }, [t.id]), H = null == D ? 0 : D.length, K = (0, a.rm)(t.id), {
    role: W
  } = K, z = function(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(K, ["role"]), Y = l.useRef(null), q = k > 0 ? E.intl.formatToPlainString(E.t["ZL7+I6"], {
    channelName: t.name,
    mentionCount: k
  }) : L ? E.intl.formatToPlainString(E.t.YlVvmc, {
    channelName: t.name
  }) : E.intl.formatToPlainString(E.t["0nZpiF"], {
    channelName: t.name
  });
  return (0, r.jsxs)("li", {
    role: W,
    className: s()(C.fx, {
      [C.wH]: i
    }),
    children: [(0, r.jsx)(P, {
      withGuildIcon: R
    }), w ? null : (0, r.jsx)(P, {
      withGuildIcon: R,
      inverted: true,
      style: {
        transform: "rotateX(180deg) translateY(-9px)"
      }
    }), (0, r.jsx)(u.vN3, {
      focusTarget: Y,
      ringTarget: Y,
      offset: {
        top: 2,
        bottom: 2,
        right: 4
      },
      children: (0, r.jsxs)("div", {
        className: s()(C.Ki, S.iE, S.ZS, {
          [S.J1]: i,
          [S.F4]: !i && U,
          [S.V2]: !U && !i && L,
          [S.lY]: R
        }),
        onMouseDown: V,
        onContextMenu: F,
        children: [!L || U || i ? null : (0, r.jsx)("div", {
          className: s()(S.gy, S.WS)
        }), (0, r.jsx)(u.DUT, T(N({}, z), {
          innerRef: Y,
          className: S.nf,
          onClick: B,
          "aria-label": q,
          focusProps: {
            enabled: false
          },
          children: (0, r.jsxs)("div", {
            className: s()(S.Y5, S.__invalid_threadMainContent),
            children: [(0, r.jsx)(c.A, {
              className: S.UU,
              "aria-hidden": true,
              children: t.name
            }), (0, r.jsxs)("div", {
              className: S.Y_,
              children: [H > 0 && t.userLimit > 0 ? (0, r.jsx)(_.A, {
                userCount: H,
                video: M,
                channel: t
              }) : null, (0, y.A)(k) ? (0, r.jsx)(O.A, {
                mentionsCount: k,
                isMentionLowImportance: G
              }) : null]
            })]
          })
        }))]
      })
    }), (0, r.jsx)(j.A, {
      channel: t,
      collapsed: !I && 1 !== D.length,
      collapsedMax: 6,
      voiceStates: D,
      location: v.ThZ.GUILD_CHANNEL_LIST,
      isThread: true
    })]
  })
})