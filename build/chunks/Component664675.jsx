/** Chunk was on 21968 **/
/** chunk id: 664675, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => P
}), require("./172879.js"), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk342494 = require("./342494.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk58149 = require("./58149.js"),
  Chunk392054 = require("./392054.js"),
  Chunk168186 = require("./168186.js"),
  Chunk320426 = require("./320426.js"),
  Chunk381616 = require("./381616.js"),
  Chunk961350 = require("./961350.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk562153 = require("./562153.js"),
  Chunk661191 = require("./661191.js"),
  Chunk53656 = require("./53656.js"),
  Chunk803378 = require("./803378.js"),
  Chunk200662 = require("./200662.js"),
  Chunk739174 = require("./739174.jsx"),
  Chunk738431 = require("./738431.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk809719 = require("./809719.js");

function P(e) {
  let {
    commandId: t,
    editPermissions: n,
    guildId: l,
    noneSelectedText: o,
    overwrites: c,
    hasAccessToMutatePermissions: p
  } = e, b = (0, s.bG)([j.A], () => j.A.getGuild(l));
  a()(null != b, "");
  let h = (0, s.bG)([x.A], () => x.A.getSortedRoles(l)),
    [y, T] = r.useState(new Set),
    C = r.useMemo(() => {
      let e = (0, g.Ap)(l),
        t = h.toReversed().reduce((e, t, n) => (e[t.id] = n, e), {});
      return Object.values(c).filter(e => e.canRead).sort((n, i) => {
        let r = n.type - i.type;
        if (0 !== r) return r;
        switch (n.type) {
          case m.RA.USER:
            return function(e, t, n) {
              let i = Number(e.canWrite) - Number(t.canWrite);
              if (0 !== i) return i;
              let r = O.default.getUser(e.id),
                l = O.default.getUser(t.id);
              if (null != r && null != l) {
                let e = A.Ay.getName(n, true, r),
                  t = A.Ay.getName(n, true, l);
                return null == e ? true : e.localeCompare(t)
              }
              return v.default.compare(e.id, t.id)
            }(n, i, l);
          case m.RA.ROLE:
            if (n.id === l) return false;
            if (i.id === l) return 1;
            return t[n.id] > t[i.id] ? false : 1;
          case m.RA.CHANNEL:
            if (n.id === e) return false;
            if (i.id === e) return 1;
            let a = Number(n.canWrite) - Number(i.canWrite);
            return 0 !== a ? a : v.default.compare(n.id, i.id)
        }
      })
    }, [l, c, h]),
    w = r.useCallback((e, t) => {
      n({}, [(0, E.Eu)(e, t)])
    }, [n]),
    S = r.useCallback((e, t, i) => {
      let r = (0, E.Eu)(e, t);
      null != c[r] && n({
        [r]: {
          id: e,
          permission: i,
          type: t
        }
      }, [])
    }, [n, c]);
  r.useEffect(() => {
    let e = Object.values(c).filter(e => e.type === m.RA.USER && !e.canRead && !y.has(e.id)).map(e => e.id);
    0 !== e.length && (u.A.requestMembersById(l, e, false), T(t => new Set([...t, ...e])))
  }, [l, c, y, T]);
  let P = (0, s.bG)([N.A], () => N.A.getApplicationId()),
    R = (0, s.bG)([_.default], () => null == P ? true : _.default.integrations.find(e => {
      var t;
      return (null == (t = e.application) ? true : t.id) === P
    })),
    L = (0, s.bG)([f.A], () => true !== R && f.A.canShowToggleTooltip(R.id));
  return C.length > 0 ? C.map(e => (0, i.jsx)(k, {
    guild: b,
    commandId: t,
    onChange: t => S(e.id, e.type, t),
    onRemove: () => w(e.id, e.type),
    overwrite: e,
    integration: R,
    canShowMigrationTooltip: L,
    hasAccessToMutatePermissions: p
  }, e.id)) : (0, i.jsx)("div", {
    className: I.dh,
    children: (0, i.jsx)(d.Text, {
      color: "text-muted",
      variant: "text-sm/normal",
      children: o
    })
  })
}

function k(e) {
  var t, n, l;
  let a, {
      guild: s,
      commandId: d,
      onChange: u,
      onRemove: f,
      overwrite: x,
      integration: j,
      canShowMigrationTooltip: O,
      hasAccessToMutatePermissions: A
    } = e,
    v = x.id === s.id || x.id === (0, g.Ap)(s.id),
    _ = null == j || null == (n = j.application) || null == (t = n.bot) ? true : t.username,
    N = !x.canWrite || !A,
    E = h.default.getId();
  A ? x.canWrite || (x.type === m.RA.USER ? a = x.id === E ? S.intl.string(S.t["1VF/0x"]) : S.intl.string(S.t.P1GnEd) : x.type === m.RA.ROLE && (a = S.intl.string(S.t.mcAijf))) : a = null != d ? S.intl.string(S.t.tybdas) : S.intl.string(S.t["z2hjk/"]);
  let P = O && null != j && x.id === s.id && true !== _ && !x.permission;
  r.useEffect(() => {
    if (P) {
      var e, t, n;
      y.default.track(w.HAw.COMMANDS_MIGRATION_TOOLTIP_VIEWED, (t = function(e) {
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
      }({}, (0, p.H$)(s.id)), n = n = {
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
  }, [s.id, null == j || null == (l = j.application) ? true : l.id, P]);
  let k = r.useRef(null),
    L = (0, i.jsx)(c.m, {
      text: a,
      shouldShow: N,
      position: "left",
      children: (0, i.jsx)("div", {
        ref: k,
        children: (0, i.jsx)(C.A, {
          isDisabled: N,
          currentValue: x.permission,
          onChange: P ? e => {
            b.A.dismissToggleTooltip(s.id, j), u(e)
          } : u
        })
      })
    }),
    D = (0, i.jsx)(o.AM, {
      targetElementRef: k,
      title: S.intl.string(S.t.ufFDiC),
      body: S.intl.format(S.t.pW4Crz, {
        botName: _,
        link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/"
      }),
      position: "bottom",
      caretConfig: {
        align: "center"
      },
      onRequestClose: () => {
        b.A.dismissToggleTooltip(s.id, j)
      }
    });
  return (0, i.jsxs)("div", {
    className: I.Wk,
    children: [(0, i.jsx)("div", {
      className: I.MB,
      children: (0, i.jsx)(T.A, {
        guild: s,
        id: x.id,
        type: x.type,
        isLocked: N,
        lockTooltipText: a
      })
    }), (0, i.jsxs)("div", {
      className: I.ev,
      children: [(0, i.jsx)(R, {
        commandId: d,
        isSentinel: v,
        isDisabled: !A,
        onRemove: f
      }), L, P && D]
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
    className: I.ys,
    children: (0, i.jsx)(d.DUT, {
      className: I.od,
      "aria-label": S.intl.string(S.t.mT0CQM),
      onClick: l,
      children: (0, i.jsx)(d.ucK, {
        size: "md",
        color: "currentColor",
        className: I.Yz
      })
    })
  })
}