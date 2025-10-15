/** Chunk was on 78786 **/
/** chunk id: 50474, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk139387 = require("./139387.js"),
  Chunk479531 = require("./479531.js"),
  Chunk895924 = require("./895924.js"),
  Chunk581364 = require("./581364.js"),
  Chunk768581 = require("./768581.js"),
  Chunk821864 = require("./821864.js"),
  Chunk399860 = require("./399860.js"),
  Chunk995390 = require("./995390.js"),
  Chunk665578 = require("./665578.jsx"),
  Chunk388032 = require("./388032.jsx");

function v(e) {
  let {
    applicationIcon: i,
    applicationId: t,
    applicationName: s,
    command: m,
    guildId: v,
    onClose: x,
    transitionState: E
  } = e, [w, O] = r.useState(null), [C, P] = r.useState(false), {
    originalApplicationPermissions: k,
    originalCommandPermissions: I,
    editedTargetPermissions: K,
    hasChanges: S,
    selectedPermissionCount: Z
  } = (0, b.Z)(v, t, m.id), N = r.useCallback(async () => {
    var e, i, n, r, s;
    if (!S) return void x();
    let l = a().difference(Object.keys(null != (n = m.permissions) ? n : {}), Object.keys(K)),
      o = a().omit(function(e) {
        for (var i = 1; i < arguments.length; i++) {
          var t = null != arguments[i] ? arguments[i] : {},
            n = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), n.forEach(function(i) {
            var n;
            n = t[i], i in e ? Object.defineProperty(e, i, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[i] = n
          })
        }
        return e
      }({}, K), l),
      c = (0, p.bD)(v),
      b = (0, g.rE)(v, u.Kw.ROLE),
      f = (0, g.rE)(c, u.Kw.CHANNEL),
      h = null == (r = null == (e = k[b]) ? true : e.permission) || r,
      j = null == (s = null == (i = k[f]) ? true : i.permission) || s,
      E = Object.values(o).map(e => ({
        id: e.id,
        permission: e.permission,
        type: e.type
      }));
    O(null), P(true);
    try {
      await y.U3({
        defaultEveryoneValue: h,
        defaultEverywhereValue: j,
        applicationId: t,
        commandId: m.id,
        guildId: v,
        permissions: E
      }), P(false), x()
    } catch (e) {
      O(new d.Z(e))
    }
    P(false)
  }, [t, k, m.id, m.permissions, v, S, x, K, O, P]);
  r.useEffect(() => () => {
    y.Ui(m.id), c.Z.stopEditingCommandPermissions(m.id)
  }, [m.id]);
  let q = (0, g.gw)(m.type, m.displayName);
  return (0, n.jsx)(l.Modal, {
    "aria-label": h.intl.string(h.t["N+InBa"]),
    transitionState: E,
    onClose: x,
    title: h.intl.string(h.t["N+InBa"]),
    preview: (0, n.jsxs)(o.Kqy, {
      direction: "horizontal",
      gap: 16,
      children: [(0, n.jsx)(j, {
        icon: i,
        id: t,
        name: s
      }), (0, n.jsxs)(o.Kqy, {
        direction: "vertical",
        gap: 4,
        children: [(0, n.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: q
        }), (0, n.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: m.displayDescription
        })]
      })]
    }),
    actions: [{
      text: h.intl.string(h.t["ETE/oC"]),
      onClick: x,
      variant: "secondary"
    }, {
      text: h.intl.string(h.t["R3BPH+"]),
      onClick: N,
      variant: "primary",
      disabled: !S,
      loading: C
    }],
    children: (0, n.jsxs)(o.Kqy, {
      direction: "vertical",
      gap: 16,
      children: [null == w || w.hasFieldErrors() ? null : (0, n.jsx)(o.M14, {
        type: "critical",
        children: w.getAnyErrorMessage()
      }), (0, n.jsx)(f.Z, {
        applicationId: t,
        commandId: m.id,
        guildId: v,
        inModal: true,
        originalApplicationPermissions: k,
        originalCommandPermissions: I,
        editedTargetPermissions: K,
        selectedPermissionCount: Z
      })]
    })
  })
}

function j(e) {
  let {
    icon: i,
    id: t
  } = e, r = m.ZP.getApplicationIconURL({
    id: t,
    icon: i,
    size: 40
  });
  return (0, n.jsx)(o.qEK, {
    src: r,
    size: o.EFr.SIZE_40,
    "aria-hidden": true
  })
}