/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  q: () => c
}), n(47120), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(434404),
  l = n(981631),
  o = n(388032),
  A = n(797680);

function c(e) {
  let {
    isInventoryFeedEnabled: t,
    canManageGuild: n,
    features: c
  } = e, d = i.useCallback(e => {
    let t = new Set(c);
    e ? (t.add(l.oNc.ACTIVITY_FEED_ENABLED_BY_USER), t.delete(l.oNc.ACTIVITY_FEED_DISABLED_BY_USER)) : (t.add(l.oNc.ACTIVITY_FEED_DISABLED_BY_USER), t.delete(l.oNc.ACTIVITY_FEED_ENABLED_BY_USER)), a.Z.updateGuild({
      features: t
    })
  }, [c]);
  return (0, r.jsxs)(s.hjN, {
    title: o.NW.string(o.t["oQ/7BQ"]),
    children: [(0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      className: A.description,
      children: o.NW.string(o.t.fZ0qZW)
    }), (0, r.jsx)(s.j7V, {
      value: t,
      className: A.switch,
      hideBorder: !0,
      disabled: !n,
      onChange: d,
      children: o.NW.string(o.t.WompT0)
    })]
  })
}