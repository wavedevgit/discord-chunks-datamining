/** Chunk was on 46906 **/
"use strict";
n.d(t, {
  Z: () => c
});
var r = n(200651);
n(192379);
var l = n(710845),
  i = n(620662),
  a = n(915863),
  o = n(981631),
  s = n(388032);

function c(e) {
  let {
    activity: t,
    user: n,
    look: c,
    color: u,
    onAction: d
  } = e;
  return (0, i.Z)(t, o.xjy.INSTANCE) ? (0, r.jsx)(a.Z, {
    look: c,
    color: u,
    onClick: () => {
      null == d || d(), new l.Z("UserActivityActions").log("notify", n.id, t)
    },
    fullWidth: !0,
    children: s.NW.string(s.t.vwl1PD)
  }, "notify") : null
}