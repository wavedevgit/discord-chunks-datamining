/** Chunk was on 21738 **/
/** chunk id: 426389, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => D
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk111956 = require("./111956.js"),
  o = require.n(Chunk111956),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk859703 = require("./859703.js"),
  Chunk890687 = require("./890687.js"),
  Chunk639214 = require("./639214.js"),
  Chunk814793 = require("./814793.js"),
  Chunk219271 = require("./219271.js"),
  Chunk21119 = require("./21119.js"),
  Chunk287809 = require("./287809.js"),
  Chunk943577 = require("./943577.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927813 = require("./927813.js"),
  Chunk279877 = require("./279877.js"),
  Chunk112273 = require("./112273.jsx"),
  Chunk666290 = require("./666290.jsx"),
  Chunk928636 = require("./928636.jsx"),
  Chunk502696 = require("./502696.jsx"),
  Chunk282447 = require("./282447.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk654487 = require("./654487.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk23729 = require("./23729.js");
let w = 15 * Chunk927813.A.Millis.MINUTE,
  L = (0, Chunk282447.A)(function(e) {
    let {
      party: t,
      onUserContextMenu: n,
      onChannelContextMenu: l,
      quest: a
    } = e, s = i.useRef(null), c = (0, r.jsx)(v.A, {
      party: t,
      onUserContextMenu: n
    }), d = (0, r.jsx)(I.A, {
      party: t,
      onChannelContextMenu: l,
      quest: a
    }), {
      partiedMembers: p,
      applicationStreams: f,
      currentActivities: h,
      voiceChannels: A
    } = t, g = p.length, m = f.length, b = h.length, _ = A.length > 0, O = i.useCallback(() => {
      let e = h.filter(e => {
        var t, n;
        return (null == (t = e.game) ? true : t.name) != null && (0, E.isGameApplicationType)(null == (n = e.game) ? true : n.type)
      }).map(e => e.game.name);
      E.default.track(T.HAw.NOW_PLAYING_CARD_HOVERED, {
        num_users: g,
        num_streams: m,
        num_activities: b,
        in_voice_channel: _,
        games_detected: e
      })
    }, [g, m, b, _, h]), y = i.useMemo(() => o()(O, w), [O]);
    return null != c || null != d ? (0, r.jsx)(u.YNO, {
      targetElementRef: s,
      position: "left",
      renderPopout: e => {
        let {
          closePopout: n
        } = e;
        return (0, r.jsx)(C.A, {
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
        return (0, r.jsx)(S.A, (n = function(e) {
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
          ref: s,
          onMouseEnter: y,
          "aria-haspopup": "menu",
          className: P.MP,
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
  R = a().throttle(() => g.u(), 3e5);

function D() {
  let {
    nowPlayingCards: e,
    loaded: t,
    needsRefresh: n,
    fetching: l,
    currentUser: a
  } = (0, c.cf)([_.A, m.A, b.default], () => ({
    nowPlayingCards: _.A.nowPlayingCards,
    loaded: _.A.loaded,
    needsRefresh: m.A.shouldFetch(),
    fetching: m.A.isFetching(),
    currentUser: b.default.getCurrentUser()
  })), s = (0, c.bG)([p.A], () => p.A.quests), o = (0, f.oH)(Array.from(s.values()));
  i.useEffect(() => (d.h.wait(() => y.O()), () => d.h.wait(() => y.v())), [null == a ? true : a.id]), i.useEffect(() => {
    n && !l && R()
  }, [n, l]);
  let g = i.useMemo(() => {
      let t = new Map,
        n = new Set,
        r = (0, A.$e)(s, j.B3);
      for (let i of e) i.party.currentActivities.forEach(e => {
        let {
          activity: l
        } = e;
        if (null == l) return;
        let a = (0, h.nq)(r, l);
        null == a || n.has(a.id) || (t.set(i.party.id, a), n.add(a.id))
      });
      return t
    }, [e, s, o]),
    E = null;
  return t ? E = e.length > 0 ? e.map(e => {
    let {
      party: t
    } = e;
    return (0, r.jsx)(L, {
      party: t,
      quest: g.get(t.id)
    }, t.id)
  }) : (0, r.jsxs)("div", {
    className: P.aM,
    children: [(0, r.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      className: P.jU,
      children: x.intl.string(x.t["ngJ/5u"])
    }), (0, r.jsx)(u.Text, {
      color: "none",
      className: P.BI,
      variant: "text-sm/normal",
      children: x.intl.string(x.t["99ZWxQ"])
    })]
  }) : (0, r.jsx)("div", {
    className: P.aM,
    children: (0, r.jsx)(u.y$y, {})
  })
}