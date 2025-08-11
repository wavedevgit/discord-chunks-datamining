/** Chunk was on 12097 **/
/** chunk id: 908474, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
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
  Chunk12740 = require("./12740.js");

function A(e) {
  let {
    member: t
  } = e, n = t.userId, A = t.guildId, T = (0, s.e7)([c.Z], () => c.Z.getEnhancedMember(A, n), [n, A]), m = (null != T ? T : t).unusualDMActivityUntil, I = l.useCallback(e => {
    if (null == e) return null;
    let t = new Date(e).getTime();
    return (0, u.fv)(t, u.jq.JOINED_AT)
  }, []), g = l.useMemo(() => null == t ? null : I(m), [t, I, m]), f = l.useMemo(() => (0, o.J)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), N = l.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
  return null != m || f ? <i.xJW title={d.intl.string(d.t["7V375+"])} titleClassName={_.infoTitle}><E.WM>{null != m && <E._2 icon={(0, r.jsx)(i.b6m, {
          size: "custom",
          color: "currentColor",
          width: E.Mn,
          height: E.Mn
        })} name={(0, r.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: d.intl.string(d.t.ZRnONz)
        })} description={(0, r.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: g
        })} />}{f && null != N && <E._2 icon={(0, r.jsx)(i.YlB, {
          size: "custom",
          color: "currentColor",
          width: E.Mn,
          height: E.Mn
        })} name={(0, r.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: d.intl.string(d.t["TJ8/tL"])
        })} description={(0, r.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: (0, r.jsx)(a.Z, {
            deadline: N,
            showUnits: true,
            stopAtOneSec: true
          })
        })} />}</E.WM></i.xJW> : null
}