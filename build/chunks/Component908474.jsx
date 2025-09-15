/** Chunk was on 10576 **/
/** chunk id: 908474, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk346486 = require("./346486.jsx"),
  Chunk69882 = require("./69882.js"),
  Chunk815790 = require("./815790.js"),
  Chunk893966 = require("./893966.js"),
  Chunk776767 = require("./776767.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk87819 = require("./87819.js");

function A(e) {
  let {
    member: t
  } = e, n = t.userId, A = t.guildId, m = (0, i.e7)([c.Z], () => c.Z.getEnhancedMember(A, n), [n, A]), T = (null != m ? m : t).unusualDMActivityUntil, I = l.useCallback(e => {
    if (null == e) return null;
    let t = new Date(e).getTime();
    return (0, u.fv)(t, u.jq.JOINED_AT)
  }, []), g = l.useMemo(() => null == t ? null : I(T), [t, I, T]), h = l.useMemo(() => (0, o.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), f = l.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
  return null != T || h ? (0, r.jsx)(a.xJW, {
    title: E.intl.string(E.t["7V375+"]),
    titleClassName: _.infoTitle,
    children: (0, r.jsxs)(d.WM, {
      children: [null != T && (0, r.jsx)(d._2, {
        icon: (0, r.jsx)(a.b6m, {
          size: "custom",
          color: "currentColor",
          width: d.Mn,
          height: d.Mn
        }),
        name: (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: E.intl.string(E.t.ZRnONz)
        }),
        description: (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: g
        })
      }), h && null != f && (0, r.jsx)(d._2, {
        icon: (0, r.jsx)(a.YlB, {
          size: "custom",
          color: "currentColor",
          width: d.Mn,
          height: d.Mn
        }),
        name: (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: E.intl.string(E.t["TJ8/tL"])
        }),
        description: (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: (0, r.jsx)(s.Z, {
            deadline: f,
            showUnits: true,
            stopAtOneSec: true
          })
        })
      })]
    })
  }) : null
}