/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  m: () => a
}), n(653041);
var r = n(200651);
n(192379);
var i = n(481060),
  o = n(185625);
async function a(e, t, a) {
  let {
    onSubmit: s,
    onClose: l,
    isEligibleForFeedback: c = !0,
    isAuthenticated: u = !0,
    emailToken: d,
    appContext: f
  } = a, p = (0, i.Gwq)();
  try {
    let a;
    let _ = u ? await (0, o.Nt)(e, t) : await (0, o.B0)(e, t),
      h = [],
      m = e => {
        h.push(e)
      },
      g = e => {
        a = e, null == s || s()
      };
    (0, i.ZDy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("25292"), n.e("95477"), n.e("11212"), n.e("55186"), n.e("28467"), n.e("92457")]).then(n.bind(n, 186023));
      return n => (0, r.jsx)(t, {
        menu: _,
        reportType: e,
        modalProps: n,
        onNavigate: m,
        onSubmit: g,
        isAuthenticated: u,
        emailToken: d
      })
    }, {
      onCloseCallback: () => {
        (0, o.k8)(e, h, a), null == l || l(), c && (0, o.X)(e, null != a ? a : null)
      },
      contextKey: null != f ? (0, i.VnL)(f) : p
    })
  } catch (e) {}
}