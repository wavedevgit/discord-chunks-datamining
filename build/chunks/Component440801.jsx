/** Chunk was on 72756 **/
/** chunk id: 440801, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  N: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk268218 = require("./268218.js"),
  Chunk957565 = require("./957565.js"),
  Chunk206314 = require("./206314.js"),
  Chunk829681 = require("./829681.js");

function h(e) {
  let {
    text: n
  } = e, [t, c] = l.useState(false);
  return (0, r.jsx)(i.DUT, {
    onClick: () => {
      (0, o.C)(n, () => c(true), () => c(false))
    },
    children: t ? (0, r.jsx)(i.A9s, {
      size: "xs",
      color: "currentColor"
    }) : (0, r.jsx)(i.TdU, {
      size: "xs",
      color: "currentColor"
    })
  })
}

function m(e) {
  let {
    language: n,
    content: l
  } = e, c = () => (0, r.jsx)("code", {
    className: a()(d.kw, "hljs"),
    children: l
  });
  return (0, r.jsx)("pre", {
    children: (0, r.jsxs)("div", {
      className: u.Hy,
      children: [o.p5 ? (0, r.jsx)("div", {
        className: u.lB,
        children: (0, r.jsx)(h, {
          text: l
        })
      }) : null, (0, r.jsx)(s.c2, {
        createPromise: () => Promise.resolve().then(t.bind(t, 752238)),
        webpackId: 752238,
        renderFallback: c,
        render: e => {
          if (!(null != n && e.hasLanguage(n))) return c();
          {
            let t = e.highlight(n, l, true);
            return null == t ? c() : (0, r.jsx)("code", {
              className: a()(d.kw, "hljs", t.language),
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