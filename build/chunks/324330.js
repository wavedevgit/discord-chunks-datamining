/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  $: () => p,
  Z: () => h
});
var r = n(200651);
n(192379);
var i = n(392711),
  s = n(442837),
  a = n(481060),
  l = n(63568),
  o = n(241559),
  c = n(527379),
  A = n(313364),
  d = n(434404),
  u = n(999382),
  g = n(981631),
  f = n(388032),
  m = n(719361);

function p() {
  var e, t;
  let n = (0, s.e7)([u.Z], () => u.Z.getProps().guild, []),
    i = null !== (e = null == n ? void 0 : n.isCommunity()) && void 0 !== e && e,
    o = (0, l.K2)(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : g.lds, "GuildSettingsMembersRow") && (null == n ? void 0 : n.hasFeature(g.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)),
    A = i || o;
  return (0, r.jsxs)(a.P3F, {
    onClick: e => {
      null != n && (A ? (e.preventDefault(), d.Z.close(), (0, c._X)(n.id)) : d.Z.open(n.id, g.pNK.MEMBERS))
    },
    className: m.rowContainer,
    children: [(0, r.jsx)("div", {
      children: f.NW.string(f.t["9Oq93t"])
    }), A && (0, r.jsx)(a.rgF, {
      size: "custom",
      color: "currentColor",
      className: m.linkIcon,
      width: 16,
      height: 16
    })]
  })
}

function h() {
  var e;
  let {
    guild: t
  } = (0, s.e7)([u.Z], () => u.Z.getProps(), [], i.isEqual), n = null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : g.lds;
  return (0, o.n2)(n) ? (0, r.jsx)(A.Z, {
    guildId: n
  }) : null
}