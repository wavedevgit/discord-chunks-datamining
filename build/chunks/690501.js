/** Chunk was on web.js **/
"use strict";
n.d(t, {
  N: () => d
}), n(47120), n(411104);
var r = n(200651),
  i = n(192379),
  o = n(835473),
  a = n(823379),
  s = n(254197),
  l = n(532028),
  c = n(388032);
let u = [];

function d(e) {
  let {
    gameFriends: t,
    hasIncomingPendingGameFriends: n,
    hasOutgoingPendingGameFriends: d
  } = e, [f, _] = i.useState(!1), p = i.useCallback(() => _(!0), []), h = i.useMemo(() => f ? t.map(e => {
    let {
      applicationId: t
    } = e;
    return t
  }) : u, [f, t]), g = (0, o.Z)(h, f), m = i.useMemo(() => g.filter(a.lm), [g]);
  return {
    onMouseEnter: p,
    ariaLabel: i.useMemo(() => t.length > 0 ? (0, l.A)(m) : void 0, [m, t.length]),
    tooltipText: i.useMemo(() => {
      if (t.length > 0) return (0, r.jsx)(s.k, {
        applications: m
      });
      if (n) return c.NW.string(c.t["0eWeam"]);
      if (d) return c.NW.string(c.t.MCgl9f);
      throw Error("[GameRelationshipButton] Tooltip text should not be undefined.")
    }, [m, t.length, n, d])
  }
}