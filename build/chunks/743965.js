/** Chunk was on 85831 **/
t.d(n, {
  d: () => h
}), t(388685);
var r = t(255367),
  l = t(73800),
  o = t(120356),
  i = t.n(o),
  c = t(481060),
  a = t(663993),
  u = t(572004),
  s = t(73433),
  d = t(283574);

function f(e) {
  let {
    text: n
  } = e, [t, o] = l.useState(!1);
  return (0, r.jsx)(c.P3F, {
    onClick: () => {
      (0, u.JG)(n, () => o(!0), () => o(!1))
    },
    children: t ? (0, r.jsx)(c.dz2, {
      size: "xs",
      color: "currentColor"
    }) : (0, r.jsx)(c.TIy, {
      size: "xs",
      color: "currentColor"
    })
  })
}

function h(e) {
  let {
    language: n,
    content: l
  } = e, o = () => (0, r.jsx)("code", {
    className: i()(d.scrollbarGhostHairline, "hljs"),
    children: l
  });
  return (0, r.jsx)("pre", {
    children: (0, r.jsxs)("div", {
      className: s.codeContainer,
      children: [u.wS ? (0, r.jsx)("div", {
        className: s.codeActions,
        children: (0, r.jsx)(f, {
          text: l
        })
      }) : null, (0, r.jsx)(a.GI, {
        createPromise: () => Promise.resolve().then(t.bind(t, 364964)),
        webpackId: 364964,
        renderFallback: o,
        render: e => {
          if (!(null != n && e.hasLanguage(n))) return o();
          {
            let t = e.highlight(n, l, !0);
            return null == t ? o() : (0, r.jsx)("code", {
              className: i()(d.scrollbarGhostHairline, "hljs", t.language),
              dangerouslySetInnerHTML: {
                __html: t.value
              }
            })
          }
        }
      })]
    })
  })
}