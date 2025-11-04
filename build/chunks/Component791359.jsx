/** Chunk was on 1272 **/
/** chunk id: 791359, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk954955 = require("./954955.js"),
  s = require.n(Chunk954955),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk365113 = require("./365113.js"),
  Chunk509212 = require("./509212.js"),
  Chunk569984 = require("./569984.js"),
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
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk559909 = require("./559909.js");
let A = 15 * Chunk70956.Z.Millis.MINUTE,
  Z = (0, Chunk525296.Z)(function(e) {
    let {
      party: t,
      onUserContextMenu: n,
      onChannelContextMenu: l,
      quest: a
    } = e, o = i.useRef(null), c = (0, r.jsx)(I.Z, {
      party: t,
      onUserContextMenu: n
    }), d = (0, r.jsx)(v.Z, {
      party: t,
      onChannelContextMenu: l,
      quest: a
    }), {
      partiedMembers: f,
      applicationStreams: h,
      currentActivities: g,
      voiceChannels: m
    } = t, _ = f.length, b = h.length, O = g.length, y = m.length > 0, T = p.o.useConfig({
      location: "itemcard"
    }).demureActivityCards, j = i.useCallback(() => {
      let e = g.filter(e => {
        var t, n;
        return (null == (t = e.game) ? true : t.name) != null && (0, E.isGameApplicationType)(null == (n = e.game) ? true : n.type)
      }).map(e => e.game.name);
      E.default.track(N.rMx.NOW_PLAYING_CARD_HOVERED, {
        num_users: _,
        num_streams: b,
        num_activities: O,
        in_voice_channel: y,
        games_detected: e
      })
    }, [_, b, O, y, g]), P = s()(j, A);
    return null != c || null != d ? (0, r.jsx)(u.yRy, {
      targetElementRef: o,
      position: "left",
      renderPopout: e => {
        let {
          closePopout: n
        } = e;
        return (0, r.jsx)(S.Z, {
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
        return (0, r.jsx)(C.Z, (n = function(e) {
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
          onMouseEnter: P,
          "aria-haspopup": "menu",
          className: x.itemCard,
          active: l,
          flat: T,
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
  w = a().throttle(() => Chunk93127._(), 3e5);

function L() {
  let {
    nowPlayingCards: e,
    loaded: t,
    needsRefresh: n,
    fetching: l,
    currentUser: a
  } = (0, Chunk442837.cj)([Chunk801077.Z, Chunk752048.Z, Chunk594174.default], () => ({
    nowPlayingCards: Chunk801077.Z.nowPlayingCards,
    loaded: Chunk801077.Z.loaded,
    needsRefresh: Chunk752048.Z.shouldFetch(),
    fetching: Chunk752048.Z.isFetching(),
    currentUser: Chunk594174.default.getCurrentUser()
  })), o = (0, Chunk442837.e7)([Chunk569984.Z], () => Chunk569984.Z.quests);
  Chunk647438.useEffect(() => (Chunk570140.Z.wait(() => Chunk225559.L()), () => Chunk570140.Z.wait(() => Chunk225559.v())), [null == a ? true : a.id]), Chunk647438.useEffect(() => {
    require && !Chunk392711 && w()
  }, [require, Chunk392711]);
  let s = Chunk647438.useMemo(() => {
      let t = new Map,
        n = new Set,
        r = (0, Chunk509212.NI)(Chunk954955, Chunk46140.l$);
      for (let i of module) Chunk647438.party.currentActivities.forEach(e => {
        let {
          activity: l
        } = e;
        if (null == l) return;
        let a = (0, f.ZZ)(r, l);
        null == a || n.has(a.id) || (t.set(i.party.id, a), n.add(a.id))
      });
      return exports
    }, [module, Chunk954955]),
    p = null;
  return exports ? p = module.length > 0 ? module.map(e => {
    let {
      party: t
    } = e;
    return (0, r.jsx)(Z, {
      party: t,
      quest: s.get(t.id)
    }, t.id)
  }) : (0, Chunk951288.jsxs)("div", {
    className: Chunk559909.emptyCard,
    children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
      variant: "heading-md/semibold",
      className: Chunk559909.emptyHeader,
      children: Chunk388032.intl.string(Chunk388032.t["ngJ/5u"])
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      color: "none",
      className: Chunk559909.emptyText,
      variant: "text-sm/normal",
      children: Chunk388032.intl.string(Chunk388032.t["99ZWxQ"])
    })]
  }) : (0, Chunk951288.jsx)("div", {
    className: Chunk559909.emptyCard,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
  })
}