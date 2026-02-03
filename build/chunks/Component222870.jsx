/** Chunk was on 71447 **/
/** chunk id: 222870, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => L
}), require("./638769.js"), require("./896048.js"), require("./321073.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk928039 = require("./928039.js"),
  Chunk47167 = require("./47167.js"),
  Chunk485947 = require("./485947.jsx"),
  Chunk379078 = require("./379078.js"),
  Chunk704554 = require("./704554.js"),
  Chunk594831 = require("./594831.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk645959 = require("./645959.js"),
  Chunk256415 = require("./256415.js"),
  Chunk403362 = require("./403362.js"),
  Chunk996439 = require("./996439.js"),
  Chunk810412 = require("./810412.js"),
  Chunk914853 = require("./914853.js"),
  Chunk437331 = require("./437331.jsx"),
  Chunk91868 = require("./91868.js"),
  Chunk406595 = require("./406595.js"),
  Chunk652215 = require("./652215.js"),
  Chunk895867 = require("./895867.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk416001 = require("./416001.js");

function P(e) {
  return Array.from(e).sort()
}
let D = (0, Chunk735438.throttle)(e => {
    (0, x.Y)(T.uss.FRIENDS, {
      locked: b.default.isInstanceLocked(),
      shownUserIds: e.shownUserIds,
      liveUserIds: [],
      contentInventoryIds: e.contentInventoryIds
    })
  }, 3e3, {
    leading: true,
    trailing: false
  }),
  R = {
    searchType: Chunk379078.n.REGEX,
    sortType: Chunk379078.r.JARO_WINKLER,
    searchStringGenerator: e => {
      var t, n, i;
      let {
        channel: r
      } = e, l = [(0, c.m1)(r, A.default, y.A), r.name, r.id];
      if (r.isDM()) {
        let e = r.getRecipientId(),
          t = A.default.getUser(e),
          n = y.A.getNickname(e);
        l.push(null == t ? true : t.username, null == t ? true : t.globalName, n)
      } else if (r.isMultiUserDM())
        for (let e of null != (i = r.recipients) ? i : []) {
          let t = A.default.getUser(e),
            n = y.A.getNickname(e);
          l.push(null == t ? true : t.username, null == t ? true : t.globalName, n)
        }
      let a = null != r.guild_id && null != (t = null == (n = m.A.getGuild(r.guild_id)) ? true : n.name) ? t : null;
      return null != a && l.push(a), l.filter(E.Vq)
    },
    throttleMs: 100
  };

function k(e) {
  let {
    title: t
  } = e;
  return (0, i.jsx)(d.A, {
    className: w.uW,
    children: t
  })
}

function M(e) {
  let {
    channelId: t,
    listItemId: n
  } = e;
  return (0, i.jsx)(S.V, {
    channelId: t,
    listItemId: n
  })
}

function L() {
  let e, [t, n] = r.useState(""),
    l = t.trim().toLowerCase(),
    c = (e = (0, f.Dz)(), (0, s.yK)([v.A, g.A], () => {
      let t = [];
      for (let e of v.A.getPrivateChannelIds()) {
        let n = g.A.getChannel(e);
        null != n && t.push({
          channel: n,
          voiceStates: []
        })
      }
      for (let n of e) t.push(n);
      return t
    }, [e])),
    [d, h] = r.useState([]);
  (0, p.RT)(t, c, h, R);
  let m = r.useRef(null),
    y = (0, u.A)("friends-widget-messages", m),
    [A, b] = (0, s.bG)([j.A], () => j.A.getFavoriteTargetIdsForTab(_.x.MESSAGES), [], O.D),
    [E, T] = (0, s.bG)([I.A], () => {
      let [e, t] = I.A.getRows(I.Y.ACTIVE_NOW), [n] = I.A.getRows(I.Y.DMS), [i] = I.A.getRows(I.Y.RECENT_TEXT), r = n.slice(0, 5), l = i.slice(0, 8);
      return [{
        activeNowRows: e.slice(0, 10),
        dmRows: r,
        recentTextRows: l
      }, t]
    }, [], O.D),
    L = r.useMemo(() => {
      let e = [];
      return 0 === T ? [] : ("" !== l ? e.push({
        kind: "SEARCH_RESULTS",
        key: "SEARCH_RESULTS",
        title: N.intl.string(C.default.HGimIS),
        channelIds: d.map(e => e.channel.id),
        length: d.length
      }) : (A.length > 0 && b > 0 && e.push({
        kind: "FAVORITES",
        key: "FAVORITES",
        title: N.intl.string(C.default.GKTlS6),
        channelIds: A,
        length: A.length
      }), E.dmRows.length > 0 && e.push({
        kind: "DMS",
        key: "DMS",
        title: N.intl.string(N.t.YUU0RF),
        channelIds: E.dmRows.map(e => e.channelId),
        length: E.dmRows.length
      }), E.activeNowRows.length > 0 && e.push({
        kind: "ACTIVE_NOW",
        key: "ACTIVE_NOW",
        title: N.intl.string(C.default.d3yO98),
        channelIds: E.activeNowRows.map(e => e.channelId),
        length: E.activeNowRows.length
      }), E.recentTextRows.length > 0 && e.push({
        kind: "TEXT_CHANNELS",
        key: "TEXT_CHANNELS",
        title: N.intl.string(C.default.uC6Lhg),
        channelIds: E.recentTextRows.map(e => e.channelId),
        length: E.recentTextRows.length
      })), e)
    }, [l, A, E.activeNowRows, E.dmRows, E.recentTextRows, b, d, T]),
    U = r.useMemo(() => L.map(e => e.length), [L]),
    G = (0, x.Dk)(() => {
      let e = new Set;
      for (let t of L)
        for (let n of t.channelIds) e.add(n);
      return e
    }, [L]),
    {
      shownUserIds: V,
      contentInventoryIds: z
    } = (0, s.bG)([], () => (function(e) {
      let t = new Set,
        n = new Set;
      for (let a of e) {
        var i, r, l;
        let e = g.A.getChannel(a);
        if (null != e) {
          if (e.isDM()) {
            let n = null != (i = null == (r = e.getRecipientId) ? true : r.call(e)) ? i : null;
            null != n && t.add(n);
            continue
          }
          if (e.isMultiUserDM()) {
            for (let n of null != (l = e.recipients) ? l : []) t.add(n);
            continue
          }
          n.add(a)
        }
      }
      return {
        shownUserIds: t,
        contentInventoryIds: n
      }
    })(G), [G]),
    F = (0, x.Dk)(() => V, [V]),
    H = (0, x.Dk)(() => z, [z]);
  r.useEffect(() => {
    (0 !== F.size || 0 !== H.size) && D({
      shownUserIds: P(F),
      contentInventoryIds: P(H)
    })
  }, [F, H]);
  let Y = r.useCallback(e => L[e], [L]),
    W = r.useCallback(e => {
      let {
        section: t
      } = e, n = Y(t);
      return null == n ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.AC4, {
          children: n.title
        }), (0, i.jsx)(k, {
          title: n.title
        })]
      })
    }, [Y]),
    K = r.useCallback(e => {
      let t = Y(e.section);
      if (null == t) return null;
      let n = "".concat(t.key, ":").concat(e.row);
      switch (t.kind) {
        case "SEARCH_RESULTS": {
          let t = d[e.row].channel;
          if (null == t) return null;
          return (0, i.jsx)(S.V, {
            channelId: t.id,
            listItemId: n
          }, n)
        }
        case "FAVORITES": {
          let r = t.channelIds[e.row];
          if (null == r) return null;
          return (0, i.jsx)(S.V, {
            channelId: r,
            listItemId: n,
            shouldHighlightIfRecentlyAdded: true
          }, n)
        }
        case "ACTIVE_NOW": {
          let r = t.channelIds[e.row];
          if (null == r) return null;
          return (0, i.jsx)(M, {
            channelId: r,
            listItemId: n
          }, n)
        }
        case "DMS":
          let r;
          return null == (r = t.channelIds[e.row]) ? null : (0, i.jsx)(S.V, {
            channelId: r,
            listItemId: n
          }, n);
        case "TEXT_CHANNELS": {
          let r = t.channelIds[e.row];
          if (null == r) return null;
          return (0, i.jsx)(S.V, {
            channelId: r,
            listItemId: n
          }, n)
        }
        default:
          return t.kind, null
      }
    }, [Y, d]),
    B = r.useCallback(() => 40, []),
    Z = r.useCallback(() => 50, []),
    X = r.useCallback(e => {
      var t;
      n(e), null == (t = m.current) || t.scrollToTop()
    }, []);
  return (0, i.jsxs)("div", {
    className: w.kL,
    children: [(0, i.jsx)("div", {
      className: w.MT,
      children: (0, i.jsx)(o.IWV, {
        query: t,
        onChange: X,
        onClear: () => n(""),
        placeholder: N.intl.string(C.default["xB/0Z9"]),
        size: "md"
      })
    }), (0, i.jsx)(a.hD, {
      navigator: y,
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
              innerAriaLabel: N.intl.string(N.t.OIgYlQ),
              ref: e => {
                var n;
                m.current = e, t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null
              },
              className: w.p_,
              sectionHeight: B,
              rowHeight: Z,
              sidebarHeight: 0,
              renderSection: W,
              renderRow: K,
              sections: U,
              paddingBottom: 8
            }, r, e))
          })
        }
      })
    })]
  })
}