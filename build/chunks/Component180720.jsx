/** Chunk was on 7685 **/
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
  Chunk607567 = require("./607567.js"),
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

function M(e) {
  return Array.from(e).sort()
}
let j = (0, Chunk735438.throttle)(e => {
  (0, O.Y)(_.uss.FRIENDS, {
    locked: S.default.isInstanceLocked(),
    shownUserIds: e.shownUserIds,
    liveUserIds: e.liveUserIds,
    contentInventoryIds: []
  })
}, 3e3, {
  leading: true,
  trailing: false
});

function w(e) {
  let t = 0x811c9dc5;
  for (let n = 0; n < e.length; n += 1) t ^= e.charCodeAt(n), t = Math.imul(t, 0x1000193);
  return t >>> 0
}

function P(e) {
  let {
    title: t
  } = e;
  return (0, l.jsx)(c.A, {
    className: D.uW,
    children: t
  })
}

function R() {
  let {
    onPrimaryAction: e,
    onContextMenu: t
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, [n, i] = r.useState(""), c = n.trim().toLowerCase(), [S, _] = r.useState(() => new Set), R = (0, g.qZ)(), U = r.useMemo(() => {
    let e = new Map;
    for (let t of R) e.set(t.channel.id, t.voiceStates);
    return e
  }, [R]), G = r.useCallback(e => {
    _(t => {
      let n = new Set(t);
      return n.has(e) ? n.delete(e) : n.add(e), n
    })
  }, []), L = r.useMemo(() => new Set(R.map(e => e.channel.id)), [R]), [k, F] = r.useState([]);
  (0, d.RT)(n, R, F, g.MV);
  let V = r.useRef(null),
    H = (0, u.A)("friends-widget-voice", V),
    [Y, W] = (0, a.bG)([T.A], () => T.A.getFavoriteTargetIdsForTab(b.x.VOICE), [], v.D),
    z = r.useMemo(() => Y.filter(e => L.has(e)), [Y, L]),
    {
      friendVoiceChannelIds: B,
      recentVoiceChannelIds: K
    } = (0, g.S4)(),
    X = r.useMemo(() => B.filter(e => L.has(e)), [B, L]),
    Q = r.useMemo(() => K.filter(e => L.has(e)), [K, L]),
    Z = (0, a.bG)([E.A], () => E.A.getVoiceChannelId(), []),
    q = (0, a.bG)([I.A], () => I.A.affinities.filter(e => {
      var t;
      return (null != (t = e.score) ? t : 0) > 0
    }).slice(0, 2).map(e => e.guildId), []),
    J = r.useMemo(() => {
      let e, t, n, l;
      return t = String((e = new Date).getDate()).padStart(2, "0"), n = String(e.getMonth() + 1).padStart(2, "0"), l = String(e.getFullYear() % 100).padStart(2, "0"), w("".concat(t).concat(n).concat(l))
    }, []),
    $ = r.useMemo(() => new Set(Y), [Y]),
    ee = r.useMemo(() => X.filter(e => !$.has(e)), [X, $]),
    et = r.useMemo(() => Q.filter(e => !$.has(e)), [Q, $]),
    en = r.useMemo(() => {
      var e, t;
      let n = [],
        l = new Set,
        r = e => {
          null == e || !L.has(e) || $.has(e) || l.has(e) || (l.add(e), n.push(e))
        };
      for (let l of (null != Z && null != (e = null == (t = p.A.getChannel(Z)) ? true : t.isVocal()) && e && r(Z), et)) {
        if (n.length >= 8) break;
        r(l)
      }
      let i = new Set(q),
        s = new Set([...$, ...ee]),
        a = R.filter(e => {
          var t, n, r, a;
          let o = e.channel;
          if (!(null != (t = null == o || null == (r = o.isVocal) ? true : r.call(o)) && t)) returnfalse;
          let u = null != (n = null == (a = o.getGuildId) ? true : a.call(o)) ? n : null;
          return !(null == u || !i.has(u) || s.has(o.id) || l.has(o.id))
        }).map(e => {
          var t, n, l;
          return {
            channelId: e.channel.id,
            voiceUserCount: null != (t = null == (n = e.voiceStates) ? true : n.length) ? t : 0,
            shuffle: (l = e.channel.id, w("".concat(J, ":").concat(l)))
          }
        }),
        o = a.filter(e => e.voiceUserCount > 0),
        u = a.filter(e => 0 === e.voiceUserCount);
      for (let e of (o.sort((e, t) => e.voiceUserCount !== t.voiceUserCount ? t.voiceUserCount - e.voiceUserCount : e.shuffle - t.shuffle), u.sort((e, t) => e.shuffle - t.shuffle), [...o, ...u])) {
        if (n.length >= 8) break;
        r(e.channelId)
      }
      return n
    }, [R, L, Z, $, ee, et, J, q]),
    el = r.useMemo(() => {
      let e = [];
      return "" !== c ? e.push({
        kind: "SEARCH_RESULTS",
        key: "SEARCH_RESULTS",
        title: x.intl.string(C.default.DUIbKP),
        rows: k.map(e => ({
          channelId: e.channel.id,
          voiceStates: e.voiceStates
        })),
        length: k.length
      }) : (Y.length > 0 && W > 0 && e.push({
        kind: "FAVORITES",
        key: "FAVORITES",
        title: x.intl.string(C.default.OskevP),
        rows: z.map(e => ({
          channelId: e,
          voiceStates: U.get(e)
        })),
        length: z.length
      }), ee.length > 0 && e.push({
        kind: "FRIENDS_IN_VOICE",
        key: "FRIENDS_IN_VOICE",
        title: x.intl.string(C.default["C+ojiQ"]),
        rows: ee.map(e => ({
          channelId: e,
          voiceStates: U.get(e)
        })),
        length: ee.length
      }), en.length > 0 && e.push({
        kind: "SUGGESTED_VOICE_CHANNELS",
        key: "SUGGESTED_VOICE_CHANNELS",
        title: x.intl.string(C.default["9ME4wE"]),
        rows: en.map(e => ({
          channelId: e,
          voiceStates: U.get(e)
        })),
        length: en.length
      })), e
    }, [c, z, Y.length, W, ee, k, en, U]),
    er = r.useMemo(() => el.map(e => e.length), [el]),
    ei = (0, O.Dk)(() => {
      let e = new Set;
      for (let t of el)
        for (let n of t.rows) e.add(n.channelId);
      return e
    }, [el]),
    {
      shownUserIds: es,
      liveUserIds: ea
    } = (0, a.cf)([p.A, f.A], () => {
      let e = new Map;
      for (let t of R) e.set(t.channel.id, t.voiceStates);
      let t = new Set,
        n = new Set;
      for (let s of ei) {
        var l, r, i;
        let a = p.A.getChannel(s),
          o = null != (l = null != (r = null == a || null == (i = a.getGuildId) ? true : i.call(a)) ? r : null == a ? true : a.guild_id) ? l : null;
        for (let l of function(e, t) {
            let n = Array.from(new Set((null != t ? t : Object.values(A.A.getVoiceStatesForChannel(e))).map(e => e.userId)));
            return n.sort((e, t) => {
              var n, l, r, i;
              let s = m.A.isFriend(e),
                a = m.A.isFriend(t);
              return s && !a ? false : !s && a ? 1 : (null != (n = null == (r = h.A.getUserAffinity(t)) ? true : r.vcProbability) ? n : 0) - (null != (l = null == (i = h.A.getUserAffinity(e)) ? true : i.vcProbability) ? l : 0)
            }), n.slice(0, 4)
          }(s, e.get(s))) t.add(l), null != o && null != f.A.getStreamForUser(l, o) && n.add(l)
      }
      return {
        shownUserIds: t,
        liveUserIds: n
      }
    }, [ei, R]),
    eo = (0, O.Dk)(() => es, [es]),
    eu = (0, O.Dk)(() => ea, [ea]);
  r.useEffect(() => {
    (0 !== eo.size || 0 !== eu.size) && j({
      shownUserIds: M(eo),
      liveUserIds: M(eu)
    })
  }, [eo, eu]);
  let ec = r.useCallback(e => el[e], [el]),
    ed = r.useCallback(e => {
      let {
        section: t
      } = e, n = ec(t);
      return null == n ? null : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.AC4, {
          children: n.title
        }), (0, l.jsx)(P, {
          title: n.title
        })]
      })
    }, [ec]),
    eh = r.useCallback(n => {
      let r = ec(n.section);
      if (null == r) return null;
      let i = r.rows[n.row];
      if (null == i) return null;
      let s = "".concat(r.key, ":").concat(i.channelId),
        a = S.has(i.channelId);
      return (0, l.jsx)(N.C, {
        channelId: i.channelId,
        listItemId: s,
        voiceStates: i.voiceStates,
        isExpanded: a,
        onToggleExpanded: G,
        shouldHighlightIfRecentlyAdded: "FAVORITES" === r.kind,
        onPrimaryAction: e,
        onContextMenu: t
      }, s)
    }, [S, ec, t, e, G]),
    eg = r.useCallback(() => 40, []),
    ef = r.useCallback((e, t) => {
      let n = ec(e),
        l = null == n ? true : n.rows[t];
      if (null == l || !S.has(l.channelId)) return 50;
      let r = p.A.getChannel(l.channelId),
        i = Math.min((null != r ? y.Ay.getVoiceStatesForChannel(r) : []).length, 25);
      return i <= 0 ? 50 : 50 + (32 * i + (i - 1) * 2 + 8)
    }, [S, ec]),
    ep = r.useCallback(e => {
      var t;
      i(e), null == (t = V.current) || t.scrollToTop()
    }, []);
  return (0, l.jsxs)("div", {
    className: D.kL,
    children: [(0, l.jsx)("div", {
      className: D.MT,
      children: (0, l.jsx)(o.IWV, {
        query: n,
        onChange: ep,
        onClear: () => i(""),
        placeholder: x.intl.string(C.default.OV3KfO),
        size: "md"
      })
    }), (0, l.jsx)(s.hD, {
      navigator: H,
      children: (0, l.jsx)(s.PR, {
        children: e => {
          let {
            ref: t,
            role: n
          } = e, r = function(e, t) {
            if (null == e) return {};
            var n, l, r, i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
              for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
              return i
            }
            if (i = function(e, t) {
                if (null == e) return {};
                var n, l, r = {},
                  i = Object.getOwnPropertyNames(e);
                for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
              }(e, t), Object.getOwnPropertySymbols)
              for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
            return i
          }(e, ["ref", "role"]);
          return (0, l.jsx)(o.skg, {
            children: e => (0, l.jsx)(o.B8B, function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  l = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), l.forEach(function(t) {
                  var l;
                  l = n[t], t in e ? Object.defineProperty(e, t, {
                    value: l,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = l
                })
              }
              return e
            }({
              innerRole: n,
              innerAriaLabel: x.intl.string(x.t.OGiMXJ),
              ref: e => {
                var n;
                V.current = e, t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null
              },
              className: D.p_,
              sectionHeight: eg,
              rowHeight: ef,
              sidebarHeight: 0,
              renderSection: ed,
              renderRow: eh,
              sections: er,
              paddingBottom: 8
            }, r, e))
          })
        }
      })
    })]
  })
}