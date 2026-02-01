/** Chunk was on 71447 **/
/** chunk id: 180720, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => R
}), require("./638769.js"), require("./896048.js"), require("./733351.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk928039 = require("./928039.js"),
  Chunk485947 = require("./485947.jsx"),
  Chunk704554 = require("./704554.js"),
  Chunk21119 = require("./21119.js"),
  Chunk594831 = require("./594831.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk734057 = require("./734057.js"),
  Chunk197305 = require("./197305.js"),
  Chunk994500 = require("./994500.js"),
  Chunk309010 = require("./309010.js"),
  Chunk977997 = require("./977997.js"),
  Chunk256415 = require("./256415.js"),
  Chunk996439 = require("./996439.js"),
  Chunk810412 = require("./810412.js"),
  Chunk914853 = require("./914853.js"),
  Chunk294809 = require("./294809.jsx"),
  Chunk406595 = require("./406595.js"),
  Chunk652215 = require("./652215.js"),
  Chunk895867 = require("./895867.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk416001 = require("./416001.js");

function N(e) {
  return Array.from(e).sort()
}
let w = (0, Chunk735438.throttle)(e => {
  (0, O.Y)(I.uss.FRIENDS, {
    locked: b.default.isInstanceLocked(),
    shownUserIds: e.shownUserIds,
    liveUserIds: e.liveUserIds,
    contentInventoryIds: []
  })
}, 3e3, {
  leading: true,
  trailing: false
});

function P(e) {
  let t = 0x811c9dc5;
  for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 0x1000193);
  return t >>> 0
}

function D(e) {
  let {
    title: t
  } = e;
  return (0, i.jsx)(c.A, {
    className: C.uW,
    children: t
  })
}

function R() {
  let [e, t] = r.useState(""), n = e.trim().toLowerCase(), [l, c] = r.useState(() => new Set), b = (0, p.qZ)(), I = r.useMemo(() => {
    let e = new Map;
    for (let t of b) e.set(t.channel.id, t.voiceStates);
    return e
  }, [b]), R = r.useCallback(e => {
    c(t => {
      let n = new Set(t);
      return n.has(e) ? n.delete(e) : n.add(e), n
    })
  }, []), k = r.useMemo(() => new Set(b.map(e => e.channel.id)), [b]), [M, L] = r.useState([]);
  (0, d.RT)(e, b, L, p.MV);
  let U = r.useRef(null),
    G = (0, u.A)("friends-widget-voice", U),
    [V, z] = (0, s.bG)([S.A], () => S.A.getFavoriteTargetIdsForTab(x.x.VOICE), [], E.D),
    F = r.useMemo(() => V.filter(e => k.has(e)), [V, k]),
    {
      friendVoiceChannelIds: H,
      recentVoiceChannelIds: Y
    } = (0, p.S4)(),
    K = r.useMemo(() => H.filter(e => k.has(e)), [H, k]),
    W = r.useMemo(() => Y.filter(e => k.has(e)), [Y, k]),
    B = (0, s.bG)([A.A], () => A.A.getVoiceChannelId(), []),
    Z = (0, s.bG)([m.A], () => m.A.affinities.filter(e => {
      var t;
      return (null != (t = e.score) ? t : 0) > 0
    }).slice(0, 2).map(e => e.guildId), []),
    X = r.useMemo(() => {
      let e, t, n, i;
      return t = String((e = new Date).getDate()).padStart(2, "0"), n = String(e.getMonth() + 1).padStart(2, "0"), i = String(e.getFullYear() % 100).padStart(2, "0"), P("".concat(t).concat(n).concat(i))
    }, []),
    J = r.useMemo(() => new Set(V), [V]),
    Q = r.useMemo(() => K.filter(e => !J.has(e)), [K, J]),
    q = r.useMemo(() => W.filter(e => !J.has(e)), [W, J]),
    $ = r.useMemo(() => {
      var e, t;
      let n = [],
        i = new Set,
        r = e => {
          null == e || !k.has(e) || J.has(e) || i.has(e) || (i.add(e), n.push(e))
        };
      for (let i of (null != B && null != (e = null == (t = g.A.getChannel(B)) ? true : t.isVocal()) && e && r(B), q)) {
        if (n.length >= 8) break;
        r(i)
      }
      let l = new Set(Z),
        a = new Set([...J, ...Q]),
        s = b.filter(e => {
          var t, n, r, s;
          let o = e.channel;
          if (!(null != (t = null == o || null == (r = o.isVocal) ? true : r.call(o)) && t)) returnfalse;
          let u = null != (n = null == (s = o.getGuildId) ? true : s.call(o)) ? n : null;
          return !(null == u || !l.has(u) || a.has(o.id) || i.has(o.id))
        }).map(e => {
          var t, n, i;
          return {
            channelId: e.channel.id,
            voiceUserCount: null != (t = null == (n = e.voiceStates) ? true : n.length) ? t : 0,
            shuffle: (i = e.channel.id, P("".concat(X, ":").concat(i)))
          }
        }),
        o = s.filter(e => e.voiceUserCount > 0),
        u = s.filter(e => 0 === e.voiceUserCount);
      for (let e of (o.sort((e, t) => e.voiceUserCount !== t.voiceUserCount ? t.voiceUserCount - e.voiceUserCount : e.shuffle - t.shuffle), u.sort((e, t) => e.shuffle - t.shuffle), [...o, ...u])) {
        if (n.length >= 8) break;
        r(e.channelId)
      }
      return n
    }, [b, k, B, J, Q, q, X, Z]),
    ee = r.useMemo(() => {
      let e = [];
      return "" !== n ? e.push({
        kind: "SEARCH_RESULTS",
        key: "SEARCH_RESULTS",
        title: T.intl.string(j.default.DUIbKP),
        rows: M.map(e => ({
          channelId: e.channel.id,
          voiceStates: e.voiceStates
        })),
        length: M.length
      }) : (V.length > 0 && z > 0 && e.push({
        kind: "FAVORITES",
        key: "FAVORITES",
        title: T.intl.string(j.default.OskevP),
        rows: F.map(e => ({
          channelId: e,
          voiceStates: I.get(e)
        })),
        length: F.length
      }), Q.length > 0 && e.push({
        kind: "FRIENDS_IN_VOICE",
        key: "FRIENDS_IN_VOICE",
        title: T.intl.string(j.default["C+ojiQ"]),
        rows: Q.map(e => ({
          channelId: e,
          voiceStates: I.get(e)
        })),
        length: Q.length
      }), $.length > 0 && e.push({
        kind: "SUGGESTED_VOICE_CHANNELS",
        key: "SUGGESTED_VOICE_CHANNELS",
        title: T.intl.string(j.default["9ME4wE"]),
        rows: $.map(e => ({
          channelId: e,
          voiceStates: I.get(e)
        })),
        length: $.length
      })), e
    }, [n, F, V.length, z, Q, M, $, I]),
    et = r.useMemo(() => ee.map(e => e.length), [ee]),
    en = (0, O.Dk)(() => {
      let e = new Set;
      for (let t of ee)
        for (let n of t.rows) e.add(n.channelId);
      return e
    }, [ee]),
    {
      shownUserIds: ei,
      liveUserIds: er
    } = (0, s.cf)([g.A, f.A], () => {
      let e = new Map;
      for (let t of b) e.set(t.channel.id, t.voiceStates);
      let t = new Set,
        n = new Set;
      for (let a of en) {
        var i, r, l;
        let s = g.A.getChannel(a),
          o = null != (i = null != (r = null == s || null == (l = s.getGuildId) ? true : l.call(s)) ? r : null == s ? true : s.guild_id) ? i : null;
        for (let i of function(e, t) {
            let n = Array.from(new Set((null != t ? t : Object.values(v.A.getVoiceStatesForChannel(e))).map(e => e.userId)));
            return n.sort((e, t) => {
              var n, i, r, l;
              let a = y.A.isFriend(e),
                s = y.A.isFriend(t);
              return a && !s ? false : !a && s ? 1 : (null != (n = null == (r = h.A.getUserAffinity(t)) ? true : r.vcProbability) ? n : 0) - (null != (i = null == (l = h.A.getUserAffinity(e)) ? true : l.vcProbability) ? i : 0)
            }), n.slice(0, 4)
          }(a, e.get(a))) t.add(i), null != o && null != f.A.getStreamForUser(i, o) && n.add(i)
      }
      return {
        shownUserIds: t,
        liveUserIds: n
      }
    }, [en, b]),
    el = (0, O.Dk)(() => ei, [ei]),
    ea = (0, O.Dk)(() => er, [er]);
  r.useEffect(() => {
    (0 !== el.size || 0 !== ea.size) && w({
      shownUserIds: N(el),
      liveUserIds: N(ea)
    })
  }, [el, ea]);
  let es = r.useCallback(e => ee[e], [ee]),
    eo = r.useCallback(e => {
      let {
        section: t
      } = e, n = es(t);
      return null == n ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.AC4, {
          children: n.title
        }), (0, i.jsx)(D, {
          title: n.title
        })]
      })
    }, [es]),
    eu = r.useCallback(e => {
      let t = es(e.section);
      if (null == t) return null;
      let n = t.rows[e.row];
      if (null == n) return null;
      let r = "".concat(t.key, ":").concat(e.row),
        a = l.has(n.channelId);
      return (0, i.jsx)(_.C, {
        channelId: n.channelId,
        listItemId: r,
        voiceStates: n.voiceStates,
        isExpanded: a,
        onToggleExpanded: R,
        shouldHighlightIfRecentlyAdded: "FAVORITES" === t.kind
      }, r)
    }, [l, es, R]),
    ec = r.useCallback(() => 40, []),
    ed = r.useCallback((e, t) => {
      var n, i;
      let r = ee[e],
        a = null == r ? true : r.rows[t];
      if (null == a || !l.has(a.channelId)) return 50;
      let s = Math.min(null != (n = null == (i = a.voiceStates) ? true : i.length) ? n : 0, 25);
      return s <= 0 ? 50 : 64 + 30 * s
    }, [l, ee]),
    eh = r.useCallback(e => {
      var n;
      t(e), null == (n = U.current) || n.scrollToTop()
    }, []);
  return (0, i.jsxs)("div", {
    className: C.kL,
    children: [(0, i.jsx)("div", {
      className: C.MT,
      children: (0, i.jsx)(o.IWV, {
        query: e,
        onChange: eh,
        onClear: () => t(""),
        placeholder: T.intl.string(j.default.OV3KfO),
        size: "md"
      })
    }), (0, i.jsx)(a.hD, {
      navigator: G,
      children: (0, i.jsx)(a.PR, {
        children: e => {
          let {
            ref: t,
            role: n
          } = e, r = function(e, t) {
            if (null == e) return {};
            var n, i, r, l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
              for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
              return l
            }
            if (l = function(e, t) {
                if (null == e) return {};
                var n, i, r = {},
                  l = Object.getOwnPropertyNames(e);
                for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
              }(e, t), Object.getOwnPropertySymbols)
              for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
            return l
          }(e, ["ref", "role"]);
          return (0, i.jsx)(o.skg, {
            children: e => (0, i.jsx)(o.B8B, function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), i.forEach(function(t) {
                  var i;
                  i = n[t], t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = i
                })
              }
              return e
            }({
              innerRole: n,
              innerAriaLabel: T.intl.string(T.t.OGiMXJ),
              ref: e => {
                var n;
                U.current = e, t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null
              },
              className: C.p_,
              sectionHeight: ec,
              rowHeight: ed,
              sidebarHeight: 0,
              renderSection: eo,
              renderRow: eu,
              sections: et,
              paddingBottom: 8
            }, r, e))
          })
        }
      })
    })]
  })
}