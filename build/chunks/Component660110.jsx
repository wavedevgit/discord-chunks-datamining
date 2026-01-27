/** Chunk was on 86317 **/
/** chunk id: 660110, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b,
  V: () => j
});
var l, Chunk627968 = require("./627968.js");
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
  return (0, o.yM)() ? h.intl.format(h.t.iWGjcg, {
    hook: e => (0, r.jsx)(i.MzZ, {
      onClick: e => {
        e.preventDefault(), e.stopPropagation(), (0, a.A)(u.A.getArticleURL(g.MVz.TIGGER_PAWTECT_LEARN_MORE))
      },
      useDefaultUnderlineStyles: false,
      children: e.join("")
    })
  }) : h.intl.format(h.t.edpbxy, {
    hook: e => (0, r.jsx)(i.MzZ, {
      onClick: e => {
        e.preventDefault(), e.stopPropagation(), s.A.showAgeVerificationGetStartedModal({
          entryPoint: c.q1.START_STAGE_PROMPT
        })
      },
      useDefaultUnderlineStyles: false,
      children: e.join("")
    })
  })
}

function x(e) {
  let {
    className: t
  } = e, n = (0, o.yM)();
  return (0, r.jsx)("div", {
    className: t,
    children: (0, r.jsx)(i.wx6, {
      type: n ? "info" : "warning",
      children: (0, r.jsx)(f, {})
    })
  })
}

function m(e) {
  let {
    className: t
  } = e, n = (0, o.yM)();
  return (0, r.jsx)("div", {
    className: t,
    children: (0, r.jsxs)(i.BJc, {
      direction: "horizontal",
      gap: 4,
      align: "center",
      children: [n ? (0, r.jsx)(i.mir, {
        size: "refresh_sm",
        color: "var(--text-default)"
      }) : (0, r.jsx)(i.id, {
        size: "refresh_sm",
        color: "var(--text-default)"
      }), (0, r.jsx)(i.Text, {
        color: "text-default",
        variant: "text-sm/medium",
        children: (0, r.jsx)(f, {})
      })]
    })
  })
}
var j = ((l = {})[l.TOP = 0] = "TOP", l[l.BOTTOM = 1] = "BOTTOM", l);

function b(e) {
  let {
    className: t,
    noBackground: n,
    divider: l,
    channelId: a
  } = e;
  if (!(0, d.Vv)(null != a ? a : true)) return null;
  let s = Array.isArray(l) ? l : null != l ? [l] : [];
  return (0, r.jsxs)(r.Fragment, {
    children: [s.includes(0) && (0, r.jsx)(i.cGx, {
      gap: 16
    }), (0, r.jsx)("div", {
      className: t,
      children: n ? (0, r.jsx)(m, {}) : (0, r.jsx)(x, {})
    }), (null == s ? true : s.includes(1)) && (0, r.jsx)(i.cGx, {
      gap: 16
    })]
  })
}