/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  C: () => b,
  Z: () => O
});
var r = n(200651);
n(192379);
var i = n(442837),
  o = n(481060),
  a = n(230711),
  s = n(549879),
  l = n(394821),
  c = n(841784),
  u = n(833664),
  d = n(503438),
  f = n(579630),
  p = n(26033),
  _ = n(594174),
  h = n(324745),
  m = n(981631),
  g = n(388032);
let E = () => a.Z.open(m.oAB.CONNECTIONS, null);

function v(e) {
  let {
    activity: t,
    onOpenGameSettings: n
  } = e;
  return (0, f.Z)(t) || (0, d.Z)(t) || (0, l.Z)(t) ? E : (0, u.Z)(t) && !(0, c.Z)(t) ? n : null
}

function b(e) {
  let {
    entry: t,
    onOpenGameSettings: n
  } = e;
  return (0, p.aA)(t) || (0, p.y0)(t) || (0, p.dU)(t) ? E : (0, p.dX)(t) ? n : null
}

function y(e) {
  let {
    activity: t,
    entry: n,
    onOpenGameSettings: r
  } = e;
  return null != n ? b({
    entry: n,
    onOpenGameSettings: r
  }) : null != t ? v({
    activity: t,
    onOpenGameSettings: r
  }) : null
}

function O(e) {
  let {
    user: t,
    activity: n,
    entry: a,
    onAction: l,
    onClose: c,
    appContext: u
  } = e, d = (0, h.Z)({
    onClose: c
  });
  if (!(0, i.e7)([_.default], () => {
      var e;
      return (null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === t.id
    })) return null;
  let f = y({
    activity: n,
    entry: a,
    onOpenGameSettings: d
  });
  return null == f ? null : (0, r.jsx)(o.sNh, {
    id: "manage-privacy",
    label: g.NW.string(g.t.anfNPT),
    action: () => {
      null == l || l({
        action: "PRESS_MANAGE_PRIVACY_MENU_ITEM"
      }), f(), (0, s.i)(u), null == c || c()
    }
  })
}