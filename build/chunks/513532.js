/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => g
}), n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
  s = n(481060),
  a = n(863249),
  l = n(122051),
  o = n(430824),
  c = n(389134),
  A = n(650461),
  d = n(388032),
  u = n(154662);
let g = e => {
  let {
    guildId: t,
    error: n,
    inSettings: g = !1
  } = e, f = (0, i.e7)([o.Z], () => o.Z.getGuild(t)), m = (0, i.e7)([c.Z, A.ZP], () => {
    var e, n;
    return g ? c.Z.getState().settings.verificationForm : null === (n = A.ZP.getStateForGuild(t)) || void 0 === n ? void 0 : null === (e = n.progress) || void 0 === e ? void 0 : e.verificationForm
  });
  return null == f ? null : (0, r.jsxs)("div", {
    className: u.slideContent,
    children: [(0, r.jsx)(s.X6q, {
      variant: "heading-xxl/medium",
      className: u.title,
      children: g ? d.NW.string(d.t.aOQWKi) : d.NW.string(d.t.qxqOzM)
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: u.subtitle,
      children: d.NW.string(d.t["tnz5//"])
    }), (0, r.jsxs)("div", {
      className: u.maxWidthContainer,
      children: [null != n && (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "status-danger",
        className: u.errorText,
        children: n
      }), (0, r.jsx)(l.Z, {
        guild: f,
        isClanContext: !0,
        onFieldsSave: (e, t) => (a.ZP.updateVerificationFormFieldsLocal(e, [...t]), Promise.resolve()),
        verificationForm: m
      })]
    })]
  })
}