/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Z: () => _
});
var r = n(200651);
n(192379);
var i = n(442837),
  o = n(481060),
  a = n(230711),
  s = n(726542),
  l = n(394821),
  c = n(740605),
  u = n(180335),
  d = n(553795),
  f = n(981631),
  p = n(388032);

function _(e) {
  let {
    activity: t,
    entry: n,
    display: _,
    onAction: h,
    onClose: m
  } = e, g = (0, i.e7)([d.Z], () => null != d.Z.getAccount(null, f.ABu.CRUNCHYROLL));
  if (!(0, l.Z)(t) && !(0, u.gr)(n)) return null;
  if (!g) return (0, r.jsx)(o.sNh, {
    id: "connect-crunchyroll",
    label: p.NW.formatToPlainString(p.t.XWSHTU, {
      platform: s.Z.get(f.ABu.CRUNCHYROLL).name
    }),
    action: () => {
      null == h || h({
        action: "PRESS_CONNECT_CRUNCHYROLL_MENU_ITEM"
      }), a.Z.open(f.oAB.CONNECTIONS), null == m || m()
    }
  });
  if ("recent" !== _ || !(0, u.gr)(n)) return null;
  let E = n.extra.url;
  return null == E || "" === E ? null : (0, r.jsx)(o.sNh, {
    id: "watch-on-crunchyroll",
    label: p.NW.string(p.t.OpxQVF),
    action: () => {
      null == h || h({
        action: "PRESS_WATCH_ON_CRUNCHYROLL_MENU_ITEM"
      }), (0, c.Y)(E)
    }
  })
}