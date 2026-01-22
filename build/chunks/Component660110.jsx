/** Chunk was on 86317 **/
/** chunk id: 660110, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk975807 = require("./975807.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk36149 = require("./36149.js"),
  Chunk975571 = require("./975571.js"),
  Chunk418208 = require("./418208.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function f() {
  return (0, c.yM)() ? x.intl.format(x.t.iWGjcg, {
    hook: e => (0, l.jsx)(r.MzZ, {
      onClick: e => {
        e.preventDefault(), e.stopPropagation(), (0, i.A)(o.A.getArticleURL(d.MVz.TIGGER_PAWTECT_LEARN_MORE))
      },
      useDefaultUnderlineStyles: false,
      children: e.join("")
    })
  }) : x.intl.format(x.t.edpbxy, {
    hook: e => (0, l.jsx)(r.MzZ, {
      onClick: e => {
        e.preventDefault(), e.stopPropagation(), a.A.showAgeVerificationGetStartedModal({
          entryPoint: s.q1.START_STAGE_PROMPT
        })
      },
      useDefaultUnderlineStyles: false,
      children: e.join("")
    })
  })
}

function j(e) {
  let {
    className: t
  } = e, n = (0, c.yM)();
  return (0, l.jsx)("div", {
    className: t,
    children: (0, l.jsx)(r.wx6, {
      type: n ? "info" : "warning",
      children: (0, l.jsx)(f, {})
    })
  })
}

function g(e) {
  let {
    className: t
  } = e, n = (0, c.yM)();
  return (0, l.jsx)("div", {
    className: t,
    children: (0, l.jsxs)(r.BJc, {
      direction: "horizontal",
      gap: 4,
      align: "center",
      children: [n ? (0, l.jsx)(r.mir, {
        size: "refresh_sm",
        color: "var(--text-default)"
      }) : (0, l.jsx)(r.id, {
        size: "refresh_sm",
        color: "var(--text-default)"
      }), (0, l.jsx)(r.Text, {
        color: "text-default",
        variant: "text-sm/medium",
        children: (0, l.jsx)(f, {})
      })]
    })
  })
}

function h(e) {
  let {
    className: t,
    noBackground: n,
    divider: i
  } = e;
  return (0, u.Vv)() ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: t,
      children: n ? (0, l.jsx)(g, {}) : (0, l.jsx)(j, {})
    }), i && (0, l.jsx)(r.cGx, {
      gap: 16
    })]
  }) : null
}