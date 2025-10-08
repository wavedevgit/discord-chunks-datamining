/** Chunk was on 66201 **/
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
  Chunk152540 = require("./152540.js");

function A(e) {
  let {
    member: t
  } = e, n = t.userId, A = t.guildId, T = (0, i.e7)([c.Z], () => c.Z.getEnhancedMember(A, n), [n, A]), I = (null != T ? T : t).unusualDMActivityUntil, m = l.useCallback(e => {
    if (null == e) return null;
    let t = new Date(e).getTime();
    return (0, u.fv)(t, u.jq.JOINED_AT)
  }, []), g = l.useMemo(() => null == t ? null : m(I), [t, m, I]), N = l.useMemo(() => (0, o.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), h = l.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
  return null != I || N ? (0, r.jsx)(s.xJW, {
    title: d.intl.string(d.t["7V375+"]),
    titleClassName: _.infoTitle,
    children: (0, r.jsxs)(E.WM, {
      children: [null != I && (0, r.jsx)(E._2, {
        icon: (0, r.jsx)(s.b6m, {
          size: "custom",
          color: "currentColor",
          width: E.Mn,
          height: E.Mn
        }),
        name: (0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: d.intl.string(d.t.ZRnONz)
        }),
        description: (0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: g
        })
      }), N && null != h && (0, r.jsx)(E._2, {
        icon: (0, r.jsx)(s.YlB, {
          size: "custom",
          color: "currentColor",
          width: E.Mn,
          height: E.Mn
        }),
        name: (0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: d.intl.string(d.t["TJ8/tL"])
        }),
        description: (0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: (0, r.jsx)(a.Z, {
            deadline: h,
            showUnits: true,
            stopAtOneSec: true
          })
        })
      })]
    })
  }) : null
}