/** Chunk was on 8725 **/
/** chunk id: 869157, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./975844.js"), require("./388685.js"), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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
  Chunk888515 = require("./888515.js");

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

function T(e, t) {
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
  } = e, f = (0, a.e7)([x.Z], () => x.Z.getGuild(l));
  o()(null != f, "");
  let v = (0, a.e7)([h.Z], () => h.Z.getSortedRoles(l)),
    [S, I] = r.useState(new Set),
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
                let e = O.ZP.getName(n, true, r),
                  t = O.ZP.getName(n, true, l);
                return null == e ? true : e.localeCompare(t)
              }
              return y.default.compare(e.id, t.id)
            }(n, i, l);
          case u.Kw.ROLE:
            if (n.id === l) return false;
            if (i.id === l) return 1;
            return t[n.id] > t[i.id] ? false : 1;
          case u.Kw.CHANNEL:
            if (n.id === e) return false;
            if (i.id === e) return 1;
            let o = Number(n.canWrite) - Number(i.canWrite);
            return 0 !== o ? o : y.default.compare(n.id, i.id)
        }
      })
    }, [l, m, v]),
    Z = r.useCallback((e, t) => {
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
    let e = Object.values(m).filter(e => e.type === u.Kw.USER && !e.canRead && !S.has(e.id)).map(e => e.id);
    0 !== e.length && (c.Z.requestMembersById(l, e, false), I(t => new Set([...t, ...e])))
  }, [l, m, S, I]);
  let T = (0, a.e7)([C.Z], () => C.Z.getApplicationId()),
    k = (0, a.e7)([_.default], () => null == T ? true : _.default.integrations.find(e => {
      var t;
      return (null == (t = e.application) ? true : t.id) === T
    })),
    R = (0, a.e7)([b.Z], () => true !== k && b.Z.canShowToggleTooltip(k.id));
  return w.length > 0 ? w.map(e => (0, i.jsx)(A, {
    guild: f,
    commandId: t,
    onChange: t => P(e.id, e.type, t),
    onRemove: () => Z(e.id, e.type),
    overwrite: e,
    integration: k,
    canShowMigrationTooltip: R,
    hasAccessToMutatePermissions: g
  }, e.id)) : (0, i.jsx)("div", {
    className: E.noItemsSelected,
    children: (0, i.jsx)(s.Text, {
      color: "text-muted",
      variant: "text-sm/normal",
      children: d
    })
  })
}

function A(e) {
  var t, n, l;
  let o, {
      guild: a,
      commandId: c,
      onChange: b,
      onRemove: h,
      overwrite: x,
      integration: j,
      canShowMigrationTooltip: O,
      hasAccessToMutatePermissions: y
    } = e,
    _ = x.id === a.id || x.id === (0, p.bD)(a.id),
    C = null == j || null == (n = j.application) || null == (t = n.bot) ? true : t.username,
    N = !x.canWrite || !y,
    k = f.default.getId();
  y ? x.canWrite || (x.type === u.Kw.USER ? o = x.id === k ? Z.intl.string(Z.t["1VF/09"]) : Z.intl.string(Z.t.P1GnER) : x.type === u.Kw.ROLE && (o = Z.intl.string(Z.t.mcAijY))) : o = null != c ? Z.intl.string(Z.t.tybdam) : Z.intl.string(Z.t.z2hjk5);
  let A = O && null != j && x.id === a.id && true !== C && !x.permission;
  r.useEffect(() => {
    if (A) {
      var e;
      v.default.track(w.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, T(P({}, (0, d.hH)(a.id)), {
        application_id: null == j || null == (e = j.application) ? true : e.id,
        location: "toggle"
      }))
    }
  }, [a.id, null == j || null == (l = j.application) ? true : l.id, A]);
  let D = r.useRef(null),
    L = (0, i.jsx)(s.ua7, {
      tooltipClassName: E.tooltip,
      text: o,
      shouldShow: N,
      position: "left",
      hideOnClick: false,
      children: e => (0, i.jsx)("div", T(P({}, e), {
        ref: D,
        children: (0, i.jsx)(I.Z, {
          isDisabled: N,
          currentValue: x.permission,
          onChange: A ? e => {
            m.Z.dismissToggleTooltip(a.id, j), b(e)
          } : b
        })
      }))
    }),
    M = (0, i.jsx)(s.yRy, {
      targetElementRef: D,
      renderPopout: () => (0, i.jsx)(s.P3F, {
        onClick: e => {
          e.stopPropagation(), m.Z.dismissToggleTooltip(a.id, j)
        },
        children: (0, i.jsx)(g.ZP, {
          className: E.tooltip,
          content: Z.intl.format(Z.t.pW4Cr6, {
            botName: C,
            link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/"
          }),
          onClick: () => {}
        })
      }),
      position: "bottom",
      align: "center",
      animation: s.yRy.Animation.TRANSLATE,
      onRequestClose: () => m.Z.dismissToggleTooltip(a.id, j),
      shouldShow: A,
      closeOnScroll: true,
      children: () => L
    });
  return (0, i.jsxs)("div", {
    className: E.entryItem,
    children: [(0, i.jsx)("div", {
      className: E.entryName,
      children: (0, i.jsx)(S.Z, {
        guild: a,
        id: x.id,
        type: x.type,
        isLocked: N,
        lockTooltipText: o
      })
    }), (0, i.jsxs)("div", {
      className: E.entryActions,
      children: [(0, i.jsx)(R, {
        commandId: c,
        isSentinel: _,
        isDisabled: !y,
        onRemove: h
      }), M]
    })]
  }, x.id)
}

function R(e) {
  let {
    commandId: t,
    isSentinel: n,
    isDisabled: r,
    onRemove: l
  } = e;
  return r ? null : null == t && n ? null : (0, i.jsx)("div", {
    className: E.removeActions,
    children: (0, i.jsx)(s.P3F, {
      className: E.removeContainer,
      "aria-label": Z.intl.string(Z.t.mT0CQE),
      onClick: l,
      children: (0, i.jsx)(s.XHJ, {
        size: "md",
        color: "currentColor",
        className: E.removeIcon
      })
    })
  })
}