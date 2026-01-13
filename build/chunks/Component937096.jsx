/** Chunk was on 84722 **/
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
  Chunk388032 = require("./388032.jsx");

function v() {
  return (0, c.Jm)() ? h.intl.format(h.t.iWGjcg, {
    hook: e => (0, i.jsx)(l.eee, {
      onClick: e => {
        e.preventDefault(), e.stopPropagation(), (0, a.Z)(o.Z.getArticleURL(d.BhN.TIGGER_PAWTECT_LEARN_MORE))
      },
      useDefaultUnderlineStyles: false,
      children: e.join("")
    })
  }) : h.intl.format(h.t.edpbxy, {
    hook: e => (0, i.jsx)(l.eee, {
      onClick: e => {
        e.preventDefault(), e.stopPropagation(), r.Z.showAgeVerificationGetStartedModal({
          entryPoint: s.cU.START_STAGE_PROMPT
        })
      },
      useDefaultUnderlineStyles: false,
      children: e.join("")
    })
  })
}

function x(e) {
  let {
    className: n
  } = e, t = (0, c.Jm)();
  return (0, i.jsx)("div", {
    className: n,
    children: (0, i.jsx)(l.M14, {
      type: t ? "info" : "warning",
      children: (0, i.jsx)(v, {})
    })
  })
}

function m(e) {
  let {
    className: n
  } = e, t = (0, c.Jm)();
  return (0, i.jsx)("div", {
    className: n,
    children: (0, i.jsxs)(l.Kqy, {
      direction: "horizontal",
      gap: 4,
      align: "center",
      children: [t ? (0, i.jsx)(l.d3s, {
        size: "refresh_sm",
        color: "var(--icon-feedback-info)"
      }) : (0, i.jsx)(l.aNP, {
        size: "refresh_sm",
        color: "var(--icon-feedback-warning)"
      }), (0, i.jsx)(l.Text, {
        color: "text-default",
        variant: "text-sm/medium",
        children: (0, i.jsx)(v, {})
      })]
    })
  })
}

function g(e) {
  let {
    className: n,
    noBackground: t,
    divider: a
  } = e;
  return (0, u.to)() ? (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: n,
      children: t ? (0, i.jsx)(m, {}) : (0, i.jsx)(x, {})
    }), a && (0, i.jsx)(l.izJ, {
      gap: 16
    })]
  }) : null
}