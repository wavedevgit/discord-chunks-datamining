/** Chunk was on 9414 **/
/** chunk id: 869157, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./975844.js"), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk907862 = require("./907862.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk367907 = require("./367907.js"),
  Chunk895924 = require("./895924.js"),
  Chunk581364 = require("./581364.js"),
  Chunk929507 = require("./929507.js"),
  Chunk997787 = require("./997787.js"),
  Chunk314897 = require("./314897.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk5192 = require("./5192.js"),
  Chunk709054 = require("./709054.js"),
  Chunk145260 = require("./145260.js"),
  Chunk905753 = require("./905753.js"),
  Chunk399860 = require("./399860.js"),
  Chunk335049 = require("./335049.jsx"),
  Chunk617012 = require("./617012.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk759830 = require("./759830.js");

function _(e) {
  let {
    commandId: t,
    editPermissions: n,
    guildId: l,
    noneSelectedText: s,
    overwrites: c,
    hasAccessToMutatePermissions: b
  } = e, f = (0, o.e7)([j.Z], () => j.Z.getGuild(l));
  a()(null != f, "");
  let h = (0, o.e7)([x.Z], () => x.Z.getSortedRoles(l)),
    [O, w] = r.useState(new Set),
    E = r.useMemo(() => {
      let e = (0, m.bD)(l),
        t = h.toReversed().reduce((e, t, n) => (e[t.id] = n, e), {});
      return Object.values(c).filter(e => e.canRead).sort((n, i) => {
        let r = n.type - i.type;
        if (0 !== r) return r;
        switch (n.type) {
          case p.Kw.USER:
            return function(e, t, n) {
              let i = Number(e.canWrite) - Number(t.canWrite);
              if (0 !== i) return i;
              let r = v.default.getUser(e.id),
                l = v.default.getUser(t.id);
              if (null != r && null != l) {
                let e = y.ZP.getName(n, true, r),
                  t = y.ZP.getName(n, true, l);
                return null == e ? true : e.localeCompare(t)
              }
              return C.default.compare(e.id, t.id)
            }(n, i, l);
          case p.Kw.ROLE:
            if (n.id === l) return false;
            if (i.id === l) return 1;
            return t[n.id] > t[i.id] ? false : 1;
          case p.Kw.CHANNEL:
            if (n.id === e) return false;
            if (i.id === e) return 1;
            let a = Number(n.canWrite) - Number(i.canWrite);
            return 0 !== a ? a : C.default.compare(n.id, i.id)
        }
      })
    }, [l, c, h]),
    P = r.useCallback((e, t) => {
      n({}, [(0, I.rE)(e, t)])
    }, [n]),
    T = r.useCallback((e, t, i) => {
      let r = (0, I.rE)(e, t);
      null != c[r] && n({
        [r]: {
          id: e,
          permission: i,
          type: t
        }
      }, [])
    }, [n, c]);
  r.useEffect(() => {
    let e = Object.values(c).filter(e => e.type === p.Kw.USER && !e.canRead && !O.has(e.id)).map(e => e.id);
    0 !== e.length && (u.Z.requestMembersById(l, e, false), w(t => new Set([...t, ...e])))
  }, [l, c, O, w]);
  let _ = (0, o.e7)([S.Z], () => S.Z.getApplicationId()),
    A = (0, o.e7)([N.default], () => null == _ ? true : N.default.integrations.find(e => {
      var t;
      return (null == (t = e.application) ? true : t.id) === _
    })),
    D = (0, o.e7)([g.Z], () => true !== A && g.Z.canShowToggleTooltip(A.id));
  return E.length > 0 ? E.map(e => (0, i.jsx)(k, {
    guild: f,
    commandId: t,
    onChange: t => T(e.id, e.type, t),
    onRemove: () => P(e.id, e.type),
    overwrite: e,
    integration: A,
    canShowMigrationTooltip: D,
    hasAccessToMutatePermissions: b
  }, e.id)) : (0, i.jsx)("div", {
    className: Z.noItemsSelected,
    children: (0, i.jsx)(d.Text, {
      color: "text-muted",
      variant: "text-sm/normal",
      children: s
    })
  })
}

function k(e) {
  var t, n, l;
  let a, {
      guild: o,
      commandId: d,
      onChange: u,
      onRemove: g,
      overwrite: x,
      integration: j,
      canShowMigrationTooltip: v,
      hasAccessToMutatePermissions: y
    } = e,
    C = x.id === o.id || x.id === (0, m.bD)(o.id),
    N = null == j || null == (n = j.application) || null == (t = n.bot) ? true : t.username,
    S = !x.canWrite || !y,
    I = h.default.getId();
  y ? x.canWrite || (x.type === p.Kw.USER ? a = x.id === I ? T.intl.string(T.t["1VF/0x"]) : T.intl.string(T.t.P1GnEd) : x.type === p.Kw.ROLE && (a = T.intl.string(T.t.mcAijf))) : a = null != d ? T.intl.string(T.t.tybdas) : T.intl.string(T.t["z2hjk/"]);
  let _ = v && null != j && x.id === o.id && true !== N && !x.permission;
  r.useEffect(() => {
    if (_) {
      var e, t, n;
      O.default.track(P.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, (t = function(e) {
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
      }({}, (0, b.hH)(o.id)), n = n = {
        application_id: null == j || null == (e = j.application) ? true : e.id,
        location: "toggle"
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }
  }, [o.id, null == j || null == (l = j.application) ? true : l.id, _]);
  let k = r.useRef(null),
    D = (0, i.jsx)(c.u, {
      text: a,
      shouldShow: S,
      position: "left",
      children: (0, i.jsx)("div", {
        ref: k,
        children: (0, i.jsx)(E.Z, {
          isDisabled: S,
          currentValue: x.permission,
          onChange: _ ? e => {
            f.Z.dismissToggleTooltip(o.id, j), u(e)
          } : u
        })
      })
    }),
    R = (0, i.jsx)(s.J2, {
      targetElementRef: k,
      title: T.intl.string(T.t.ufFDiC),
      body: T.intl.format(T.t.pW4Crz, {
        botName: N,
        link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/"
      }),
      position: "bottom",
      caretConfig: {
        align: "center"
      },
      onRequestClose: () => {
        f.Z.dismissToggleTooltip(o.id, j)
      }
    });
  return (0, i.jsxs)("div", {
    className: Z.entryItem,
    children: [(0, i.jsx)("div", {
      className: Z.entryName,
      children: (0, i.jsx)(w.Z, {
        guild: o,
        id: x.id,
        type: x.type,
        isLocked: S,
        lockTooltipText: a
      })
    }), (0, i.jsxs)("div", {
      className: Z.entryActions,
      children: [(0, i.jsx)(A, {
        commandId: d,
        isSentinel: C,
        isDisabled: !y,
        onRemove: g
      }), D, _ && R]
    })]
  }, x.id)
}

function A(e) {
  let {
    commandId: t,
    isSentinel: n,
    isDisabled: r,
    onRemove: l
  } = e;
  return r ? null : null == t && n ? null : (0, i.jsx)("div", {
    className: Z.removeActions,
    children: (0, i.jsx)(d.P3F, {
      className: Z.removeContainer,
      "aria-label": T.intl.string(T.t.mT0CQM),
      onClick: l,
      children: (0, i.jsx)(d.XHJ, {
        size: "md",
        color: "currentColor",
        className: Z.removeIcon
      })
    })
  })
}