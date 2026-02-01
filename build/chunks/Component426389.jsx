/** Chunk was on 21738 **/
/** chunk id: 426389, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => U
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
  Chunk829219 = require("./829219.js"),
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk843490 = require("./843490.js"),
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
let D = 15 * Chunk927813.A.Millis.MINUTE,
  M = (0, Chunk282447.A)(function(e) {
    let {
      party: t,
      onUserContextMenu: n,
      onChannelContextMenu: l,
      quest: a
    } = e, s = i.useRef(null), c = (0, r.jsx)(N.A, {
      party: t,
      onUserContextMenu: n
    }), d = (0, r.jsx)(C.A, {
      party: t,
      onChannelContextMenu: l,
      quest: a
    }), {
      partiedMembers: p,
      applicationStreams: h,
      currentActivities: g,
      voiceChannels: m
    } = t, f = p.length, A = h.length, _ = g.length, b = m.length > 0, E = i.useCallback(() => {
      let e = g.filter(e => {
        var t, n;
        return (null == (t = e.game) ? true : t.name) != null && (0, I.isGameApplicationType)(null == (n = e.game) ? true : n.type)
      }).map(e => e.game.name);
      I.default.track(P.HAw.NOW_PLAYING_CARD_HOVERED, {
        num_users: f,
        num_streams: A,
        num_activities: _,
        in_voice_channel: b,
        games_detected: e
      })
    }, [f, A, _, b, g]), O = i.useMemo(() => o()(E, D), [E]);
    return null != c || null != d ? (0, r.jsx)(u.YNO, {
      targetElementRef: s,
      position: "left",
      renderPopout: e => {
        let {
          closePopout: n
        } = e;
        return (0, r.jsx)(j.A, {
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
        return (0, r.jsx)(T.A, (n = function(e) {
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
          onMouseEnter: O,
          "aria-haspopup": "menu",
          className: R.MP,
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
  k = a().throttle(() => b.u(), 3e5);

function U() {
  let {
    nowPlayingCards: e,
    loaded: t,
    needsRefresh: n,
    fetching: l,
    currentUser: a
  } = (0, c.cf)([y.A, E.A, O.default], () => ({
    nowPlayingCards: y.A.nowPlayingCards,
    loaded: y.A.loaded,
    needsRefresh: E.A.shouldFetch(),
    fetching: E.A.isFetching(),
    currentUser: O.default.getCurrentUser()
  })), s = (0, c.bG)([h.A], () => h.A.quests), o = (0, f.oH)(Array.from(s.values()));
  i.useEffect(() => (d.h.wait(() => S.O()), () => {
    d.h.wait(() => S.v())
  }), [null == a ? true : a.id]), i.useEffect(() => {
    n && !l && k()
  }, [n, l]);
  let {
    use_api_call: b
  } = m.M.getConfig({
    location: "NowPlaying"
  }), {
    questsByPartyId: I,
    questIdsByPartyId: v
  } = i.useMemo(() => {
    let t = new Map,
      n = new Map,
      r = new Set,
      i = (0, _.$e)(s, w.B3);
    for (let l of e) l.party.currentActivities.forEach(e => {
      let {
        activity: a
      } = e;
      if (null == a) return;
      let s = (0, A.nq)(i, a);
      null == s || r.has(s.id) || (t.set(l.party.id, s), r.add(s.id), n.set(l.party.id, s.id))
    });
    return {
      questsByPartyId: t,
      questIdsByPartyId: n
    }
  }, [e, s, o]), C = i.useMemo(() => new Set(Array.from(v.values())), [v]);
  i.useEffect(() => {
    b && C.size > 0 && (0, p.yO)(Array.from(C), g.uF.ACTIVITY_PANEL, "NowPlaying")
  }, [C, b]);
  let N = (0, c.bG)([h.A], () => h.A.earnedQuestForPlacement.get(g.uF.ACTIVITY_PANEL), []),
    T = i.useMemo(() => {
      if (!b) return I;
      if (null == N) return new Map;
      let e = new Map;
      for (let [t, n] of v.entries()) {
        let r = N.quests.get(n);
        null != r && e.set(t, r)
      }
      return e
    }, [b, N, I, v]),
    j = null;
  return t ? j = e.length > 0 ? e.map(e => {
    let {
      party: t
    } = e;
    return (0, r.jsx)(M, {
      party: t,
      quest: T.get(t.id)
    }, t.id)
  }) : (0, r.jsxs)("div", {
    className: R.aM,
    children: [(0, r.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      className: R.jU,
      children: L.intl.string(L.t["ngJ/5u"])
    }), (0, r.jsx)(u.Text, {
      color: "none",
      className: R.BI,
      variant: "text-sm/normal",
      children: L.intl.string(L.t["99ZWxQ"])
    })]
  }) : (0, r.jsx)("div", {
    className: R.aM,
    children: (0, r.jsx)(u.y$y, {})
  })
}