/** Chunk was on 66201 **/
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
  } = e, n = t.userId, _ = t.guildId, A = (0, i.e7)([c.Z], () => c.Z.getEnhancedMember(_, n), [n, _]), T = (null != A ? A : t).unusualDMActivityUntil, I = l.useCallback(e => {
    if (null == e) return null;
    let t = new Date(e).getTime();
    return (0, u.fv)(t, u.jq.JOINED_AT)
  }, []), m = l.useMemo(() => null == t ? null : I(T), [t, I, T]), g = l.useMemo(() => (0, o.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), N = l.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
  return null != T || g ? (0, r.jsx)(s.gNt, {
    label: d.intl.string(d.t["7V3759"]),
    children: (0, r.jsxs)(E.WM, {
      children: [null != T && (0, r.jsx)(E._2, {
        icon: (0, r.jsx)(s.b6m, {
          size: "custom",
          color: "currentColor",
          width: E.Mn,
          height: E.Mn
        }),
        name: (0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: d.intl.string(d.t.ZRnON3)
        }),
        description: (0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: m
        })
      }), g && null != N && (0, r.jsx)(E._2, {
        icon: (0, r.jsx)(s.YlB, {
          size: "custom",
          color: "currentColor",
          width: E.Mn,
          height: E.Mn
        }),
        name: (0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: d.intl.string(d.t["TJ8/tE"])
        }),
        description: (0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: (0, r.jsx)(a.Z, {
            deadline: N,
            showUnits: true,
            stopAtOneSec: true
          })
        })
      })]
    })
  }) : null
}