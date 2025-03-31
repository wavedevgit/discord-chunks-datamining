/** Chunk was on 95883 **/
l.d(n, {
  Z: () => x
});
var t = l(200651),
  r = l(192379),
  i = l(442837),
  a = l(481060),
  o = l(271383),
  s = l(430824),
  c = l(594174),
  u = l(5192),
  d = l(645896),
  m = l(979264),
  v = l(308083),
  f = l(388032),
  h = l(585010);
let x = r.memo(function(e) {
  var n, l, r, x, g, j;
  let {
    guildId: p,
    isTagAdopted: b,
    onChangeUseTag: N
  } = e, P = (0, d.Cc)(p), y = (0, i.e7)([s.Z], () => s.Z.getGuild(p)), C = null !== (x = null == P ? void 0 : null === (n = P.badge) || void 0 === n ? void 0 : n.imageHash) && void 0 !== x ? x : null == y ? void 0 : null === (l = y.profile) || void 0 === l ? void 0 : l.badge, w = null !== (g = null == P ? void 0 : P.tag) && void 0 !== g ? g : null == y ? void 0 : null === (r = y.profile) || void 0 === r ? void 0 : r.tag, _ = (0, i.e7)([c.default], () => c.default.getCurrentUser()), k = (0, i.e7)([o.ZP], () => null != _ ? o.ZP.getMember(p, _.id) : null);
  return null == y || null == _ || null == k || null == C ? null : (0, t.jsxs)("div", {
    className: h.previewSection,
    children: [(0, t.jsxs)("div", {
      className: h.chatPreview,
      children: [(0, t.jsx)(a.qEK, {
        src: _.getAvatarURL(p, 40),
        size: a.EFr.SIZE_40,
        "aria-hidden": !0
      }), (0, t.jsxs)("div", {
        className: h.previewText,
        children: [(0, t.jsxs)("div", {
          className: h.userName,
          children: [(0, t.jsx)(a.PUh, {
            className: h.userName,
            name: u.ZP.getName(p, null, _),
            color: null !== (j = k.colorString) && void 0 !== j ? j : void 0
          }), b && (0, t.jsx)(m.aG, {
            guildId: p,
            clanBadge: C,
            clanTag: w,
            badgeSize: v.NC.SIZE_12,
            textVariant: "text-xs/semibold"
          })]
        }), (0, t.jsx)("div", {
          className: h.fakeMessage,
          style: {
            width: "80%"
          }
        }), (0, t.jsx)("div", {
          className: h.fakeMessage,
          style: {
            width: "50%"
          }
        })]
      })]
    }), (0, t.jsx)("div", {
      className: h.divider
    }), (0, t.jsxs)("div", {
      className: h.settingSection,
      children: [(0, t.jsxs)("div", {
        children: [(0, t.jsx)(a.Text, {
          variant: "text-md/normal",
          color: "header-primary",
          children: f.NW.string(f.t.nwNzVV)
        }), (0, t.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: f.NW.string(f.t.Dpl68P)
        })]
      }), (0, t.jsx)(a.rsf, {
        onChange: N,
        checked: b
      })]
    })]
  })
})