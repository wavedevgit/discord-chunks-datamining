/** Chunk was on 97476 **/
/** chunk id: 937096, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk81643 = require("./81643.js"),
  Chunk63063 = require("./63063.js"),
  Chunk430104 = require("./430104.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk372881 = require("./372881.js");

function h() {
  return (0, Chunk81643.Jm)() ? Chunk388032.intl.format(Chunk388032.t.iWGjcg, {
    hook: e => (0, a.jsx)(i.eee, {
      className: f.anchor,
      onClick: e => {
        e.preventDefault(), e.stopPropagation(), (0, r.Z)(d.Z.getArticleURL(u.BhN.TIGGER_PAWTECT_LEARN_MORE))
      },
      useDefaultUnderlineStyles: false,
      children: e.join("")
    })
  }) : Chunk388032.intl.format(Chunk388032.t.edpbxy, {
    hook: e => (0, a.jsx)(i.eee, {
      className: f.anchor,
      onClick: e => {
        e.preventDefault(), e.stopPropagation(), l.Z.showAgeVerificationGetStartedModal({
          entryPoint: o.cU.START_STAGE_PROMPT
        })
      },
      useDefaultUnderlineStyles: false,
      style: {
        textDecoration: "underline"
      },
      children: e.join("")
    })
  })
}

function p(e) {
  let {
    className: n
  } = e, t = (0, c.Jm)();
  return (0, a.jsx)("div", {
    className: n,
    children: (0, a.jsx)(i.M14, {
      type: t ? "info" : "warning",
      children: (0, a.jsx)(h, {})
    })
  })
}

function m(e) {
  let {
    className: n
  } = e, t = (0, c.Jm)();
  return (0, a.jsx)("div", {
    className: n,
    children: (0, a.jsxs)(i.Kqy, {
      direction: "horizontal",
      gap: 8,
      align: "center",
      children: [t ? (0, a.jsx)(i.d3s, {
        color: "var(--icon-feedback-info)"
      }) : (0, a.jsx)(i.aNP, {
        color: "var(--icon-feedback-warning)"
      }), (0, a.jsx)(i.Text, {
        color: "text-default",
        variant: "text-sm/medium",
        children: (0, a.jsx)(h, {})
      })]
    })
  })
}

function g(e) {
  let {
    className: n,
    noBackground: t
  } = e;
  return (0, s.to)() ? (0, a.jsx)("div", {
    className: n,
    children: t ? (0, a.jsx)(m, {}) : (0, a.jsx)(p, {})
  }) : null
}