/** Chunk was on 1272 **/
/** chunk id: 791359, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk954955 = require("./954955.js"),
  s = require.n(Chunk954955),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk616022 = require("./616022.js"),
  Chunk968843 = require("./968843.js"),
  Chunk759479 = require("./759479.js"),
  Chunk283689 = require("./283689.js"),
  Chunk93127 = require("./93127.js"),
  Chunk752048 = require("./752048.js"),
  Chunk594174 = require("./594174.js"),
  Chunk801077 = require("./801077.js"),
  Chunk626135 = require("./626135.js"),
  Chunk70956 = require("./70956.js"),
  Chunk225559 = require("./225559.js"),
  Chunk910436 = require("./910436.jsx"),
  Chunk203028 = require("./203028.jsx"),
  Chunk358924 = require("./358924.jsx"),
  Chunk292140 = require("./292140.jsx"),
  Chunk525296 = require("./525296.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk121748 = require("./121748.js");
let Z = 15 * Chunk70956.Z.Millis.MINUTE,
  w = (0, Chunk525296.Z)(function(e) {
    let {
      party: t,
      onUserContextMenu: n,
      onChannelContextMenu: l,
      quest: a
    } = e, o = i.useRef(null), c = (0, r.jsx)(C.Z, {
      party: t,
      onUserContextMenu: n
    }), d = (0, r.jsx)(y.Z, {
      party: t,
      onChannelContextMenu: l,
      quest: a
    }), {
      partiedMembers: p,
      applicationStreams: f,
      currentActivities: g,
      voiceChannels: h
    } = t, m = p.length, b = f.length, E = g.length, _ = h.length > 0, v = i.useCallback(() => {
      let e = g.filter(e => {
        var t, n;
        return (null == (t = e.game) ? true : t.name) != null && (0, O.isGameApplicationType)(null == (n = e.game) ? true : n.type)
      }).map(e => e.game.name);
      O.default.track(j.rMx.NOW_PLAYING_CARD_HOVERED, {
        num_users: m,
        num_streams: b,
        num_activities: E,
        in_voice_channel: _,
        games_detected: e
      })
    }, [m, b, E, _, g]), I = i.useMemo(() => s()(v, Z), [v]);
    return null != c || null != d ? (0, r.jsx)(u.yRy, {
      targetElementRef: o,
      position: "left",
      renderPopout: e => {
        let {
          closePopout: n
        } = e;
        return (0, r.jsx)(T.Z, {
          party: t,
          close: n
        })
      },
      spacing: 8,
      children: (e, t) => {
        var n, i;
        let {
          isShown: l
        } = t;
        return (0, r.jsx)(S.Z, (n = function(e) {
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
        }({}, e), i = i = {
          ref: o,
          onMouseEnter: I,
          "aria-haspopup": "menu",
          className: A.itemCard,
          active: l,
          children: (0, r.jsxs)("div", {
            children: [c, d]
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n))
      }
    }) : null
  }),
  L = a().throttle(() => m._(), 3e5);

function R() {
  let {
    nowPlayingCards: e,
    loaded: t,
    needsRefresh: n,
    fetching: l,
    currentUser: a
  } = (0, c.cj)([_.Z, b.Z, E.default], () => ({
    nowPlayingCards: _.Z.nowPlayingCards,
    loaded: _.Z.loaded,
    needsRefresh: b.Z.shouldFetch(),
    fetching: b.Z.isFetching(),
    currentUser: E.default.getCurrentUser()
  })), o = (0, c.e7)([p.Z], () => p.Z.quests), s = (0, f.Fy)(Array.from(o.values()));
  i.useEffect(() => (d.Z.wait(() => I.L()), () => d.Z.wait(() => I.v())), [null == a ? true : a.id]), i.useEffect(() => {
    n && !l && L()
  }, [n, l]);
  let m = i.useMemo(() => {
      let t = new Map,
        n = new Set,
        r = (0, h.NI)(o, x.l$);
      for (let i of e) i.party.currentActivities.forEach(e => {
        let {
          activity: l
        } = e;
        if (null == l) return;
        let a = (0, g.ZZ)(r, l);
        null == a || n.has(a.id) || (t.set(i.party.id, a), n.add(a.id))
      });
      return t
    }, [e, o, s]),
    O = null;
  return t ? O = e.length > 0 ? e.map(e => {
    let {
      party: t
    } = e;
    return (0, r.jsx)(w, {
      party: t,
      quest: m.get(t.id)
    }, t.id)
  }) : (0, r.jsxs)("div", {
    className: A.emptyCard,
    children: [(0, r.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      className: A.emptyHeader,
      children: P.intl.string(P.t["ngJ/5u"])
    }), (0, r.jsx)(u.Text, {
      color: "none",
      className: A.emptyText,
      variant: "text-sm/normal",
      children: P.intl.string(P.t["99ZWxQ"])
    })]
  }) : (0, r.jsx)("div", {
    className: A.emptyCard,
    children: (0, r.jsx)(u.$jN, {})
  })
}