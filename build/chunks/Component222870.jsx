/** Chunk was on 7685 **/
/** chunk id: 222870, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => U
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

function j(e) {
  return Array.from(e).sort()
}
let w = (0, Chunk735438.throttle)(e => {
    (0, O.Y)(C.uss.FRIENDS, {
      locked: y.default.isInstanceLocked(),
      shownUserIds: e.shownUserIds,
      liveUserIds: [],
      contentInventoryIds: e.contentInventoryIds
    })
  }, 3e3, {
    leading: true,
    trailing: false
  }),
  P = {
    searchType: Chunk379078.n.REGEX,
    sortType: Chunk379078.r.JARO_WINKLER,
    searchStringGenerator: e => {
      var t, n, l;
      let {
        channel: r
      } = e, i = [(0, c.m1)(r, E.default, m.A), r.name, r.id];
      if (r.isDM()) {
        let e = r.getRecipientId(),
          t = E.default.getUser(e),
          n = m.A.getNickname(e);
        i.push(null == t ? true : t.username, null == t ? true : t.globalName, n)
      } else if (r.isMultiUserDM())
        for (let e of null != (l = r.recipients) ? l : []) {
          let t = E.default.getUser(e),
            n = m.A.getNickname(e);
          i.push(null == t ? true : t.username, null == t ? true : t.globalName, n)
        }
      let s = null != r.guild_id && null != (t = null == (n = I.A.getGuild(r.guild_id)) ? true : n.name) ? t : null;
      return null != s && i.push(s), i.filter(S.Vq)
    },
    throttleMs: 100
  };

function R(e) {
  let {
    title: t
  } = e;
  return (0, l.jsx)(d.A, {
    className: M.uW,
    children: t
  })
}

function U() {
  let e, {
      onPrimaryAction: t,
      onContextMenu: n
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
    [i, c] = r.useState(""),
    d = i.trim().toLowerCase(),
    h = (e = (0, f.Dz)(), (0, a.yK)([A.A, p.A], () => {
      let t = [];
      for (let e of A.A.getPrivateChannelIds()) {
        let n = p.A.getChannel(e);
        null != n && t.push({
          channel: n,
          voiceStates: []
        })
      }
      for (let n of e) t.push(n);
      return t
    }, [e])),
    [I, m] = r.useState([]);
  (0, g.RT)(i, h, m, P);
  let E = r.useRef(null),
    y = (0, u.A)("friends-widget-messages", E),
    [S, C] = (0, a.bG)([_.A], () => _.A.getFavoriteTargetIdsForTab(b.x.MESSAGES), [], v.D),
    [U, G] = (0, a.bG)([T.A], () => {
      let [e, t] = T.A.getRows(T.Y.ACTIVE_NOW), [n] = T.A.getRows(T.Y.DMS), [l] = T.A.getRows(T.Y.RECENT_TEXT), r = n.slice(0, 5), i = l.slice(0, 8);
      return [{
        activeNowRows: e.slice(0, 10),
        dmRows: r,
        recentTextRows: i
      }, t]
    }, [], v.D),
    L = r.useMemo(() => {
      let e = [];
      return 0 === G ? [] : ("" !== d ? e.push({
        kind: "SEARCH_RESULTS",
        key: "SEARCH_RESULTS",
        title: D.intl.string(x.default.HGimIS),
        channelIds: I.map(e => e.channel.id),
        length: I.length
      }) : (S.length > 0 && C > 0 && e.push({
        kind: "FAVORITES",
        key: "FAVORITES",
        title: D.intl.string(x.default.GKTlS6),
        channelIds: S,
        length: S.length
      }), U.dmRows.length > 0 && e.push({
        kind: "DMS",
        key: "DMS",
        title: D.intl.string(D.t.YUU0RF),
        channelIds: U.dmRows.map(e => e.channelId),
        length: U.dmRows.length
      }), U.activeNowRows.length > 0 && e.push({
        kind: "ACTIVE_NOW",
        key: "ACTIVE_NOW",
        title: D.intl.string(x.default.d3yO98),
        channelIds: U.activeNowRows.map(e => e.channelId),
        length: U.activeNowRows.length
      }), U.recentTextRows.length > 0 && e.push({
        kind: "TEXT_CHANNELS",
        key: "TEXT_CHANNELS",
        title: D.intl.string(x.default.uC6Lhg),
        channelIds: U.recentTextRows.map(e => e.channelId),
        length: U.recentTextRows.length
      })), e)
    }, [d, S, U.activeNowRows, U.dmRows, U.recentTextRows, C, I, G]),
    k = r.useMemo(() => L.map(e => e.length), [L]),
    F = (0, O.Dk)(() => {
      let e = new Set;
      for (let t of L)
        for (let n of t.channelIds) e.add(n);
      return e
    }, [L]),
    {
      shownUserIds: V,
      contentInventoryIds: H
    } = (0, a.bG)([], () => (function(e) {
      let t = new Set,
        n = new Set;
      for (let s of e) {
        var l, r, i;
        let e = p.A.getChannel(s);
        if (null != e) {
          if (e.isDM()) {
            let n = null != (l = null == (r = e.getRecipientId) ? true : r.call(e)) ? l : null;
            null != n && t.add(n);
            continue
          }
          if (e.isMultiUserDM()) {
            for (let n of null != (i = e.recipients) ? i : []) t.add(n);
            continue
          }
          n.add(s)
        }
      }
      return {
        shownUserIds: t,
        contentInventoryIds: n
      }
    })(F), [F]),
    Y = (0, O.Dk)(() => V, [V]),
    W = (0, O.Dk)(() => H, [H]);
  r.useEffect(() => {
    (0 !== Y.size || 0 !== W.size) && w({
      shownUserIds: j(Y),
      contentInventoryIds: j(W)
    })
  }, [Y, W]);
  let z = r.useCallback(e => L[e], [L]),
    B = r.useCallback(e => {
      let {
        section: t
      } = e, n = z(t);
      return null == n ? null : (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.AC4, {
          children: n.title
        }), (0, l.jsx)(R, {
          title: n.title
        })]
      })
    }, [z]),
    K = r.useCallback(e => {
      let r = z(e.section);
      if (null == r) return null;
      let i = "".concat(r.key, ":").concat(e.row);
      switch (r.kind) {
        case "SEARCH_RESULTS": {
          let r = I[e.row].channel;
          if (null == r) return null;
          return (0, l.jsx)(N.V, {
            channelId: r.id,
            listItemId: i,
            onPrimaryAction: t,
            onContextMenu: n
          }, i)
        }
        case "FAVORITES": {
          let s = r.channelIds[e.row];
          if (null == s) return null;
          return (0, l.jsx)(N.V, {
            channelId: s,
            listItemId: i,
            shouldHighlightIfRecentlyAdded: true,
            onPrimaryAction: t,
            onContextMenu: n
          }, i)
        }
        case "ACTIVE_NOW": {
          let s = r.channelIds[e.row];
          if (null == s) return null;
          return (0, l.jsx)(N.V, {
            channelId: s,
            listItemId: i,
            onPrimaryAction: t,
            onContextMenu: n
          }, i)
        }
        case "DMS":
          let s;
          return null == (s = r.channelIds[e.row]) ? null : (0, l.jsx)(N.V, {
            channelId: s,
            listItemId: i,
            onPrimaryAction: t,
            onContextMenu: n
          }, i);
        case "TEXT_CHANNELS": {
          let s = r.channelIds[e.row];
          if (null == s) return null;
          return (0, l.jsx)(N.V, {
            channelId: s,
            listItemId: i,
            onPrimaryAction: t,
            onContextMenu: n
          }, i)
        }
        default:
          return r.kind, null
      }
    }, [z, n, t, I]),
    X = r.useCallback(() => 40, []),
    Q = r.useCallback(() => 50, []),
    Z = r.useCallback(e => {
      var t;
      c(e), null == (t = E.current) || t.scrollToTop()
    }, []);
  return (0, l.jsxs)("div", {
    className: M.kL,
    children: [(0, l.jsx)("div", {
      className: M.MT,
      children: (0, l.jsx)(o.IWV, {
        query: i,
        onChange: Z,
        onClear: () => c(""),
        placeholder: D.intl.string(x.default["xB/0Z9"]),
        size: "md"
      })
    }), (0, l.jsx)(s.hD, {
      navigator: y,
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
              innerAriaLabel: D.intl.string(D.t.OIgYlQ),
              ref: e => {
                var n;
                E.current = e, t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null
              },
              className: M.p_,
              sectionHeight: X,
              rowHeight: Q,
              sidebarHeight: 0,
              renderSection: B,
              renderRow: K,
              sections: k,
              paddingBottom: 8
            }, r, e))
          })
        }
      })
    })]
  })
}