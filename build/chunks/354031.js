/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  P: () => d
}), n(47120), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(63063),
  l = n(434404),
  o = n(981631),
  A = n(388032),
  c = n(450165);

function d(e) {
  let {
    features: t,
    canManageGuild: n
  } = e, d = i.useCallback(e => {
    let n = new Set(t);
    e ? n.add(o.oNc.SUMMARIES_ENABLED_BY_USER) : n.delete(o.oNc.SUMMARIES_ENABLED_BY_USER), l.Z.updateGuild({
      features: n
    })
  }, [t]);
  return (0, r.jsxs)(s.hjN, {
    children: [(0, r.jsxs)(s.vwX, {
      className: c.subtitle,
      children: [A.NW.string(A.t.FOYxgo), (0, r.jsx)(s.IGR, {
        text: A.NW.string(A.t.oW0eUV),
        color: s.TVs.unsafe_rawColors.BRAND_500.css
      })]
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      className: c.description,
      children: A.NW.format(A.t["c6Cy/v"], {
        helpdeskArticle: a.Z.getArticleURL(o.BhN.CONVERSATION_SUMMARIES)
      })
    }), (0, r.jsx)(s.j7V, {
      className: c.switch,
      onChange: d,
      value: t.has(o.oNc.SUMMARIES_ENABLED_BY_USER),
      hideBorder: !0,
      disabled: !n,
      children: A.NW.string(A.t.vmEDQk)
    })]
  })
}