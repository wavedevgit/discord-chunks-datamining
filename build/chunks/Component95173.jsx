/** Chunk was on 94503 **/
/** chunk id: 95173, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk576470 = require("./576470.jsx"),
  Chunk316031 = require("./316031.js"),
  Chunk157347 = require("./157347.js"),
  Chunk266047 = require("./266047.js"),
  Chunk829887 = require("./829887.jsx"),
  Chunk985018 = require("./985018.jsx");

function _(e) {
  let {
    member: t
  } = e, n = t.userId, _ = t.guildId, g = (0, a.bG)([c.A], () => c.A.getEnhancedMember(_, n), [n, _]), A = (null != g ? g : t).unusualDMActivityUntil, T = r.useCallback(e => {
    if (null == e) return null;
    let t = new Date(e).getTime();
    return (0, u.hL)(t, u.wN.JOINED_AT)
  }, []), h = r.useMemo(() => null == t ? null : T(A), [t, T, A]), I = r.useMemo(() => (0, o.n)(t.communicationDisabledUntil), [t.communicationDisabledUntil]), O = r.useMemo(() => null == t.communicationDisabledUntil ? new Date : new Date(t.communicationDisabledUntil), [t.communicationDisabledUntil]);
  return null != A || I ? (0, l.jsx)(i.D0$, {
    label: d.intl.string(d.t["7V3759"]),
    children: (0, l.jsxs)(E.SQ, {
      children: [null != A && (0, l.jsx)(E.RU, {
        icon: (0, l.jsx)(i.EF8, {
          size: "custom",
          color: "currentColor",
          width: E.mb,
          height: E.mb
        }),
        name: (0, l.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: d.intl.string(d.t.ZRnON3)
        }),
        description: (0, l.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: h
        })
      }), I && null != O && (0, l.jsx)(E.RU, {
        icon: (0, l.jsx)(i.gQi, {
          size: "custom",
          color: "currentColor",
          width: E.mb,
          height: E.mb
        }),
        name: (0, l.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: d.intl.string(d.t["TJ8/tE"])
        }),
        description: (0, l.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: (0, l.jsx)(s.A, {
            deadline: O,
            showUnits: true,
            stopAtOneSec: true
          })
        })
      })]
    })
  }) : null
}