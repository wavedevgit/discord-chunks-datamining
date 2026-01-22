/** Chunk was on 15946 **/
/** chunk id: 326993, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk282956 = require("./282956.js"),
  Chunk181658 = require("./181658.js"),
  Chunk155718 = require("./155718.js"),
  Chunk392054 = require("./392054.js"),
  Chunk168186 = require("./168186.js"),
  Chunk587895 = require("./587895.js"),
  Chunk696451 = require("./696451.js"),
  Chunk486020 = require("./486020.js"),
  Chunk542580 = require("./542580.js"),
  Chunk200662 = require("./200662.js"),
  Chunk825453 = require("./825453.js"),
  Chunk2655 = require("./2655.jsx"),
  Chunk985018 = require("./985018.jsx");

function E(e) {
  var i;
  let {
    applicationIcon: t,
    applicationId: l,
    applicationName: v,
    command: E,
    guildId: C,
    onClose: P,
    transitionState: k
  } = e, [w, I] = r.useState(null), [N, R] = r.useState(false), {
    originalApplicationPermissions: B,
    originalCommandPermissions: M,
    editedTargetPermissions: S,
    hasChanges: T,
    selectedPermissionCount: _
  } = (0, j.A)(C, l, E.id), J = r.useCallback(async () => {
    var e, i, t, n, r;
    if (!T) return void P();
    let a = s().difference(Object.keys(null != (e = E.permissions) ? e : {}), Object.keys(S)),
      o = s().omit(function(e) {
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
      }({}, S), a),
      d = (0, b.Ap)(C),
      c = (0, h.Eu)(C, m.RA.ROLE),
      p = (0, h.Eu)(d, m.RA.CHANNEL),
      y = null == (i = null == (n = B[c]) ? true : n.permission) || i,
      g = null == (t = null == (r = B[p]) ? true : r.permission) || t,
      v = Object.values(o).map(e => ({
        id: e.id,
        permission: e.permission,
        type: e.type
      }));
    I(null), R(true);
    try {
      await f.Ni({
        defaultEveryoneValue: y,
        defaultEverywhereValue: g,
        applicationId: l,
        commandId: E.id,
        guildId: C,
        permissions: v
      }), R(false), P()
    } catch (e) {
      I(new u.A(e))
    }
    R(false)
  }, [l, B, E.id, E.permissions, C, T, P, S, I, R]);
  r.useEffect(() => () => {
    f.C8(E.id), c.A.stopEditingCommandPermissions(E.id)
  }, [E.id]);
  let z = (0, h.p6)(E.type, E.displayName),
    L = (0, o.bG)([y.A], () => y.A.getApplication(l)),
    D = null == L || null == (i = L.bot) ? true : i.id,
    F = (0, o.bG)([g.Ay], () => null != D ? g.Ay.getMember(C, D) : null);
  return (0, n.jsx)(a.Modal, {
    "aria-label": A.intl.string(A.t["N+InBa"]),
    transitionState: k,
    onClose: P,
    title: A.intl.string(A.t["N+InBa"]),
    preview: (0, n.jsxs)(d.BJc, {
      direction: "horizontal",
      gap: 16,
      children: [(0, n.jsx)(O, {
        icon: t,
        id: l,
        name: v,
        guildMember: F,
        bot: E.type !== p.kc.PRIMARY_ENTRY_POINT ? null == L ? true : L.bot : true
      }), (0, n.jsxs)(d.BJc, {
        direction: "vertical",
        gap: 4,
        children: [(0, n.jsx)(d.Text, {
          variant: "text-md/semibold",
          children: z
        }), (0, n.jsx)(d.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: E.displayDescription
        })]
      })]
    }),
    actions: [{
      text: A.intl.string(A.t["ETE/oC"]),
      onClick: P,
      variant: "secondary"
    }, {
      text: A.intl.string(A.t["R3BPH+"]),
      onClick: J,
      variant: "primary",
      disabled: !T,
      loading: N
    }],
    children: (0, n.jsxs)(d.BJc, {
      direction: "vertical",
      gap: 16,
      children: [null == w || w.hasFieldErrors() ? null : (0, n.jsx)(d.wx6, {
        type: "critical",
        children: w.getAnyErrorMessage()
      }), (0, n.jsx)(x.A, {
        applicationId: l,
        commandId: E.id,
        guildId: C,
        inModal: true,
        originalApplicationPermissions: B,
        originalCommandPermissions: M,
        editedTargetPermissions: S,
        selectedPermissionCount: _
      })]
    })
  })
}

function O(e) {
  let {
    icon: i,
    id: t,
    guildMember: r,
    bot: l
  } = e, s = v.Ay.getApplicationIconURL({
    id: t,
    guildMember: r,
    bot: l,
    icon: i,
    size: 40
  });
  return (0, n.jsx)(d.euF, {
    src: s,
    size: d._3J.SIZE_40,
    "aria-hidden": true
  })
}