/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Y0: () => c.Y0,
  hz: () => c.hz,
  mz: () => c.mz,
  u_: () => u,
  xB: () => c.xB
}), n(47120);
var r = n(192379),
  i = n(97613),
  o = n.n(i),
  a = n(493773),
  s = n(952265),
  l = n(307616),
  c = n(466377);

function u(e) {
  let {
    renderModal: t,
    onCloseRequest: n,
    onCloseCallback: i
  } = e, [c] = r.useState(() => o()()), u = (0, l.v)();
  (0, a.Ng)(() => ((0, s.h7)(t, {
    modalKey: c,
    onCloseRequest: n,
    onCloseCallback: i
  }, u), () => {
    (0, s.Mr)(c, u)
  }));
  let d = r.useRef(!0),
    f = {
      contextKey: u,
      modalKey: c,
      onCloseCallback: i
    },
    p = r.useRef(f);
  return r.useEffect(() => {
    p.current = f
  }), r.useLayoutEffect(() => {
    let {
      contextKey: e,
      modalKey: r,
      onCloseCallback: i
    } = p.current;
    d.current || (0, s.o)(r, t, n, i, e), d.current = !1
  }, [t, n]), null
}