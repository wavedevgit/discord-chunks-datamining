/** Chunk was on 78786 **/
/** chunk id: 50474, original params: e,i,n (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk82659 = require("./82659.js"),
  Chunk481060 = require("./481060.js"),
  Chunk139387 = require("./139387.js"),
  Chunk479531 = require("./479531.js"),
  Chunk895924 = require("./895924.js"),
  Chunk581364 = require("./581364.js"),
  Chunk768581 = require("./768581.js"),
  Chunk821864 = require("./821864.js"),
  Chunk399860 = require("./399860.js"),
  Chunk995390 = require("./995390.js"),
  Chunk665578 = require("./665578.js"),
  Chunk388032 = require("./388032.js");

function v(e) {
  let {
    applicationIcon: i,
    applicationId: n,
    applicationName: s,
    command: m,
    guildId: v,
    onClose: x,
    transitionState: E
  } = e, [w, O] = r.useState(null), [k, P] = r.useState(false), {
    originalApplicationPermissions: C,
    originalCommandPermissions: I,
    editedTargetPermissions: K,
    hasChanges: N,
    selectedPermissionCount: S
  } = (0, b.Z)(v, n, m.id), Z = r.useCallback(async () => {
    var e, i, t, r, s;
    if (!N) return void x();
    let a = l().difference(Object.keys(null != (t = m.permissions) ? t : {}), Object.keys(K)),
      o = l().omit(function(e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = null != arguments[i] ? arguments[i] : {},
            t = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), t.forEach(function(i) {
            var t;
            t = n[i], i in e ? Object.defineProperty(e, i, {
              value: t,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[i] = t
          })
        }
        return e
      }({}, K), a),
      d = (0, p.bD)(v),
      b = (0, g.rE)(v, u.Kw.ROLE),
      f = (0, g.rE)(d, u.Kw.CHANNEL),
      h = null == (r = null == (e = C[b]) ? true : e.permission) || r,
      j = null == (s = null == (i = C[f]) ? true : i.permission) || s,
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
        applicationId: n,
        commandId: m.id,
        guildId: v,
        permissions: E
      }), P(false), x()
    } catch (e) {
      O(new c.Z(e))
    }
    P(false)
  }, [n, C, m.id, m.permissions, v, N, x, K, O, P]);
  r.useEffect(() => () => {
    y.Ui(m.id), d.Z.stopEditingCommandPermissions(m.id)
  }, [m.id]);
  let q = (0, g.gw)(m.type, m.displayName);
  return <a.Modal aria-label={h.intl.string(h.t["N+InBQ"])} transitionState={E} onClose={x} title={h.intl.string(h.t["N+InBQ"])} preview={(0, t.jsxs)(o.Kqy, {
      direction: "horizontal",
      gap: 16,
      children: [(0, t.jsx)(j, {
        icon: i,
        id: n,
        name: s
      }), (0, t.jsxs)(o.Kqy, {
        direction: "vertical",
        gap: 4,
        children: [(0, t.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: q
        }), (0, t.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: m.displayDescription
        })]
      })]
    })} actions={[{
      text: h.intl.string(h.t["ETE/oK"]),
      onClick: x,
      variant: "secondary"
    }, {
      text: h.intl.string(h.t.R3BPHx),
      onClick: Z,
      variant: "primary",
      disabled: !N,
      loading: k
    }]}><o.Kqy direction={"vertical"} gap={16}>{null == w || w.hasFieldErrors() ? null : <o.kzN>{w.getAnyErrorMessage()}</o.kzN>}{<f.Z applicationId={n} commandId={m.id} guildId={v} inModal={true} originalApplicationPermissions={C} originalCommandPermissions={I} editedTargetPermissions={K} selectedPermissionCount={S} />}</o.Kqy></a.Modal>
}

function j(e) {
  let {
    icon: i,
    id: n
  } = e, r = m.ZP.getApplicationIconURL({
    id: n,
    icon: i,
    size: 40
  });
  return <o.qEK src={r} size={o.EFr.SIZE_40} aria-hidden={true} />
}