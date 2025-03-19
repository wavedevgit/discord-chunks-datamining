/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => N
});
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(704215),
  l = n(481060),
  o = n(605236),
  c = n(874993),
  A = n(768762),
  d = n(430824),
  u = n(999382),
  g = n(84613),
  f = n(392885),
  m = n(740903),
  p = n(464610),
  h = n(733629),
  C = n(598622),
  b = n(921944),
  v = n(388032),
  x = n(713401);

function N() {
  let e;
  let t = (0, s.e7)([u.Z], () => u.Z.getGuildId()),
    n = (0, s.e7)([d.Z], () => d.Z.getGuild(t)),
    N = (0, s.e7)([f.Z], () => f.Z.getCurrentPage());
  if (i.useEffect(() => {
      (0, o.EW)(a.z.COMMUNITY_GUILD_SETTINGS_SAFETY, {
        dismissAction: b.L.AUTO
      })
    }, []), null == n) return null;
  let j = (0, C.Q)(n);
  switch (N) {
    case m.u.OVERVIEW:
      e = (0, r.jsx)(p.Z, {
        guild: n
      });
      break;
    case m.u.CAPTCHA_AND_RAID_PROTECTION:
      e = (0, r.jsx)(h.Z, {
        title: v.NW.string(v.t["53eF5u"]),
        settings: j[m.u.CAPTCHA_AND_RAID_PROTECTION]
      });
      break;
    case m.u.DM_AND_SPAM_PROTECTION:
      e = (0, r.jsx)(h.Z, {
        title: v.NW.string(v.t.O0SfFx),
        settings: j[m.u.DM_AND_SPAM_PROTECTION]
      });
      break;
    case m.u.AUTOMOD:
      e = (0, r.jsx)(c.Z, {
        guildId: n.id
      });
      break;
    case m.u.PERMISSIONS:
      e = (0, r.jsx)(h.Z, {
        title: v.NW.string(v.t.BXoNiY),
        settings: j[m.u.PERMISSIONS]
      })
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [N !== m.u.OVERVIEW && (0, r.jsxs)(l.zxk, {
      className: x.back,
      innerClassName: x.backButton,
      look: l.zxk.Looks.BLANK,
      size: l.zxk.Sizes.MIN,
      onClick: () => {
        (0, g.K)(m.u.OVERVIEW)
      },
      children: [(0, r.jsx)(A.Z, {
        className: x.__invalid_arrow,
        direction: A.Z.Directions.LEFT
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/semibold",
        color: "interactive-normal",
        children: v.NW.string(v.t["13/7kZ"])
      })]
    }), e]
  })
}