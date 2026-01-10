/** Chunk was on 69937 **/
/** chunk id: 908474, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk346486 = require("./346486.jsx"),
  Chunk69882 = require("./69882.js"),
  Chunk815790 = require("./815790.js"),
  Chunk893966 = require("./893966.js"),
  Chunk776767 = require("./776767.jsx"),
  Chunk388032 = require("./388032.jsx");

function _(e) {
  let {
    member: t
  } = e, n = t.userId, _ = t.guildId, A = (0, i.e7)([u.Z], () => u.Z.getEnhancedMember(_, n), [n, _]), f = (null != A ? A : t).unusualDMActivityUntil, T = l.useCallback(e => {
    if (null == e) return null;
    let t = new Date(e).getTime();
    return (0, c.fv)(t, c.jq.JOINED_AT)
  }, []), g = l.useMemo(() => null == t ? null : T(f), [t, T, f]), I = l.useMemo(() => (0, o.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), m = l.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
  return null != f || I ? (0, r.jsx)(a.gNt, {
    label: E.intl.string(E.t["7V3759"]),
    children: (0, r.jsxs)(d.WM, {
      children: [null != f && (0, r.jsx)(d._2, {
        icon: (0, r.jsx)(a.b6m, {
          size: "custom",
          color: "currentColor",
          width: d.Mn,
          height: d.Mn
        }),
        name: (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: E.intl.string(E.t.ZRnON3)
        }),
        description: (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: g
        })
      }), I && null != m && (0, r.jsx)(d._2, {
        icon: (0, r.jsx)(a.YlB, {
          size: "custom",
          color: "currentColor",
          width: d.Mn,
          height: d.Mn
        }),
        name: (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: E.intl.string(E.t["TJ8/tE"])
        }),
        description: (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: (0, r.jsx)(s.Z, {
            deadline: m,
            showUnits: true,
            stopAtOneSec: true
          })
        })
      })]
    })
  }) : null
}