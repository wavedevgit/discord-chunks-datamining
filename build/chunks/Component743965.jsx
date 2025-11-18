/** Chunk was on 85831 **/
/** chunk id: 743965, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  d: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk663993 = require("./663993.js"),
  Chunk572004 = require("./572004.js"),
  Chunk602009 = require("./602009.js"),
  Chunk525685 = require("./525685.js");

function h(e) {
  let {
    text: n
  } = e, [t, c] = l.useState(false);
  return (0, r.jsx)(i.P3F, {
    onClick: () => {
      (0, s.JG)(n, () => c(true), () => c(false))
    },
    children: t ? (0, r.jsx)(i.dz2, {
      size: "xs",
      color: "currentColor"
    }) : (0, r.jsx)(i.TIy, {
      size: "xs",
      color: "currentColor"
    })
  })
}

function j(e) {
  let {
    language: n,
    content: l
  } = e, c = () => (0, r.jsx)("code", {
    className: a()(d.scrollbarGhostHairline, "hljs"),
    children: l
  });
  return (0, r.jsx)("pre", {
    children: (0, r.jsxs)("div", {
      className: u.codeContainer,
      children: [s.wS ? (0, r.jsx)("div", {
        className: u.codeActions,
        children: (0, r.jsx)(h, {
          text: l
        })
      }) : null, (0, r.jsx)(o.GI, {
        createPromise: () => Promise.resolve().then(t.bind(t, 364964)),
        webpackId: 364964,
        renderFallback: c,
        render: e => {
          if (!(null != n && e.hasLanguage(n))) return c();
          {
            let t = e.highlight(n, l, true);
            return null == t ? c() : (0, r.jsx)("code", {
              className: a()(d.scrollbarGhostHairline, "hljs", t.language),
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