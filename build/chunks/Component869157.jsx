/** Chunk was on 47463 **/
/** chunk id: 869157, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./975844.js"), require("./388685.js"), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk367907 = require("./367907.js"),
  Chunk895924 = require("./895924.js"),
  Chunk581364 = require("./581364.js"),
  Chunk929507 = require("./929507.js"),
  Chunk997787 = require("./997787.js"),
  Chunk970731 = require("./970731.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk5192 = require("./5192.js"),
  Chunk709054 = require("./709054.js"),
  Chunk360606 = require("./360606.js"),
  Chunk905753 = require("./905753.js"),
  Chunk399860 = require("./399860.js"),
  Chunk335049 = require("./335049.jsx"),
  Chunk617012 = require("./617012.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk547063 = require("./547063.js");

function P(e) {
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
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function k(e) {
  let {
    commandId: t,
    editPermissions: n,
    guildId: l,
    noneSelectedText: d,
    overwrites: m,
    hasAccessToMutatePermissions: g
  } = e, f = (0, o.e7)([x.Z], () => x.Z.getGuild(l));
  a()(null != f, "");
  let v = (0, o.e7)([h.Z], () => h.Z.getSortedRoles(l)),
    [Z, S] = r.useState(new Set),
    w = r.useMemo(() => {
      let e = (0, p.bD)(l),
        t = v.toReversed().reduce((e, t, n) => (e[t.id] = n, e), {});
      return Object.values(m).filter(e => e.canRead).sort((n, i) => {
        let r = n.type - i.type;
        if (0 !== r) return r;
        switch (n.type) {
          case u.Kw.USER:
            return function(e, t, n) {
              let i = Number(e.canWrite) - Number(t.canWrite);
              if (0 !== i) return i;
              let r = j.default.getUser(e.id),
                l = j.default.getUser(t.id);
              if (null != r && null != l) {
                let e = y.ZP.getName(n, true, r),
                  t = y.ZP.getName(n, true, l);
                return null == e ? true : e.localeCompare(t)
              }
              return O.default.compare(e.id, t.id)
            }(n, i, l);
          case u.Kw.ROLE:
            if (n.id === l) return false;
            if (i.id === l) return 1;
            return t[n.id] > t[i.id] ? false : 1;
          case u.Kw.CHANNEL:
            if (n.id === e) return false;
            if (i.id === e) return 1;
            let a = Number(n.canWrite) - Number(i.canWrite);
            return 0 !== a ? a : O.default.compare(n.id, i.id)
        }
      })
    }, [l, m, v]),
    T = r.useCallback((e, t) => {
      n({}, [(0, N.rE)(e, t)])
    }, [n]),
    P = r.useCallback((e, t, i) => {
      let r = (0, N.rE)(e, t);
      null != m[r] && n({
        [r]: {
          id: e,
          permission: i,
          type: t
        }
      }, [])
    }, [n, m]);
  r.useEffect(() => {
    let e = Object.values(m).filter(e => e.type === u.Kw.USER && !e.canRead && !Z.has(e.id)).map(e => e.id);
    0 !== e.length && (c.Z.requestMembersById(l, e, false), S(t => new Set([...t, ...e])))
  }, [l, m, Z, S]);
  let E = (0, o.e7)([C.Z], () => C.Z.getApplicationId()),
    k = (0, o.e7)([_.default], () => null == E ? true : _.default.integrations.find(e => {
      var t;
      return (null == (t = e.application) ? true : t.id) === E
    })),
    D = (0, o.e7)([b.Z], () => true !== k && b.Z.canShowToggleTooltip(k.id));
  return w.length > 0 ? w.map(e => (0, i.jsx)(A, {
    guild: f,
    commandId: t,
    onChange: t => P(e.id, e.type, t),
    onRemove: () => T(e.id, e.type),
    overwrite: e,
    integration: k,
    canShowMigrationTooltip: D,
    hasAccessToMutatePermissions: g
  }, e.id)) : (0, i.jsx)("div", {
    className: I.noItemsSelected,
    children: (0, i.jsx)(s.Text, {
      color: "text-muted",
      variant: "text-sm/normal",
      children: d
    })
  })
}

function A(e) {
  var t, n, l;
  let a, {
      guild: o,
      commandId: c,
      onChange: b,
      onRemove: h,
      overwrite: x,
      integration: j,
      canShowMigrationTooltip: y,
      hasAccessToMutatePermissions: O
    } = e,
    _ = x.id === o.id || x.id === (0, p.bD)(o.id),
    C = null == j || null == (n = j.application) || null == (t = n.bot) ? true : t.username,
    N = !x.canWrite || !O,
    k = f.default.getId();
  O ? x.canWrite || (x.type === u.Kw.USER ? a = x.id === k ? T.intl.string(T.t["1VF/09"]) : T.intl.string(T.t.P1GnER) : x.type === u.Kw.ROLE && (a = T.intl.string(T.t.mcAijY))) : a = null != c ? T.intl.string(T.t.tybdam) : T.intl.string(T.t.z2hjk5);
  let A = y && null != j && x.id === o.id && true !== C && !x.permission;
  r.useEffect(() => {
    if (A) {
      var e;
      v.default.track(w.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, E(P({}, (0, d.hH)(o.id)), {
        application_id: null == j || null == (e = j.application) ? true : e.id,
        location: "toggle"
      }))
    }
  }, [o.id, null == j || null == (l = j.application) ? true : l.id, A]);
  let R = r.useRef(null),
    L = (0, i.jsx)(s.ua7, {
      tooltipClassName: I.tooltip,
      text: a,
      shouldShow: N,
      position: "left",
      hideOnClick: false,
      children: e => (0, i.jsx)("div", E(P({}, e), {
        ref: R,
        children: (0, i.jsx)(S.Z, {
          isDisabled: N,
          currentValue: x.permission,
          onChange: A ? e => {
            m.Z.dismissToggleTooltip(o.id, j), b(e)
          } : b
        })
      }))
    }),
    M = (0, i.jsx)(s.yRy, {
      targetElementRef: R,
      renderPopout: () => (0, i.jsx)(s.P3F, {
        onClick: e => {
          e.stopPropagation(), m.Z.dismissToggleTooltip(o.id, j)
        },
        children: (0, i.jsx)(g.ZP, {
          className: I.tooltip,
          content: T.intl.format(T.t.pW4Cr6, {
            botName: C,
            link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/"
          }),
          onClick: () => {}
        })
      }),
      position: "bottom",
      align: "center",
      animation: s.yRy.Animation.TRANSLATE,
      onRequestClose: () => m.Z.dismissToggleTooltip(o.id, j),
      shouldShow: A,
      closeOnScroll: true,
      children: () => L
    });
  return (0, i.jsxs)("div", {
    className: I.entryItem,
    children: [(0, i.jsx)("div", {
      className: I.entryName,
      children: (0, i.jsx)(Z.Z, {
        guild: o,
        id: x.id,
        type: x.type,
        isLocked: N,
        lockTooltipText: a
      })
    }), (0, i.jsxs)("div", {
      className: I.entryActions,
      children: [(0, i.jsx)(D, {
        commandId: c,
        isSentinel: _,
        isDisabled: !O,
        onRemove: h
      }), M]
    })]
  }, x.id)
}

function D(e) {
  let {
    commandId: t,
    isSentinel: n,
    isDisabled: r,
    onRemove: l
  } = e;
  return r ? null : null == t && n ? null : (0, i.jsx)("div", {
    className: I.removeActions,
    children: (0, i.jsx)(s.P3F, {
      className: I.removeContainer,
      "aria-label": T.intl.string(T.t.mT0CQE),
      onClick: l,
      children: (0, i.jsx)(s.XHJ, {
        size: "md",
        color: "currentColor",
        className: I.removeIcon
      })
    })
  })
}