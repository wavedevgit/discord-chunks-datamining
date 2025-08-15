/** Chunk was on 78079 **/
/** chunk id: 908474, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk346486 = require("./346486.jsx"),
  Chunk69882 = require("./69882.js"),
  Chunk815790 = require("./815790.js"),
  Chunk893966 = require("./893966.js"),
  Chunk776767 = require("./776767.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk87819 = require("./87819.js");

function u(A) {
  let {
    member: e
  } = A, t = e.userId, u = e.guildId, h = (0, l.e7)([g.Z], () => g.Z.getEnhancedMember(u, t), [t, u]), d = (null != h ? h : e).unusualDMActivityUntil, E = r.useCallback(A => {
    if (null == A) return null;
    let e = new Date(A).getTime();
    return (0, o.fv)(e, o.jq.JOINED_AT)
  }, []), C = r.useMemo(() => null == e ? null : E(d), [e, E, d]), B = r.useMemo(() => (0, s.J)(e.communicationDisabledUntil), [e.communicationDisabledUntil]), w = r.useMemo(() => null == e.communicationDisabledUntil ? new Date : new Date(e.communicationDisabledUntil), [e.communicationDisabledUntil]);
  return null != d || B ? (0, n.jsx)(i.xJW, {
    title: f.intl.string(f.t["7V375+"]),
    titleClassName: v.infoTitle,
    children: (0, n.jsxs)(c.WM, {
      children: [null != d && (0, n.jsx)(c._2, {
        icon: (0, n.jsx)(i.b6m, {
          size: "custom",
          color: "currentColor",
          width: c.Mn,
          height: c.Mn
        }),
        name: (0, n.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: f.intl.string(f.t.ZRnONz)
        }),
        description: (0, n.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: C
        })
      }), B && null != w && (0, n.jsx)(c._2, {
        icon: (0, n.jsx)(i.YlB, {
          size: "custom",
          color: "currentColor",
          width: c.Mn,
          height: c.Mn
        }),
        name: (0, n.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: f.intl.string(f.t["TJ8/tL"])
        }),
        description: (0, n.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: (0, n.jsx)(a.Z, {
            deadline: w,
            showUnits: true,
            stopAtOneSec: true
          })
        })
      })]
    })
  }) : null
}