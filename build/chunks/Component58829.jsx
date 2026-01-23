/** Chunk was on 95198 **/
/** chunk id: 58829, original params: n,e,l (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk730134 = require("./730134.jsx"),
  Chunk289498 = require("./289498.jsx"),
  Chunk681819 = require("./681819.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk971705 = require("./971705.js");

function m(n) {
  let {
    onComplete: e,
    excludedPlatformTypes: l,
    includedPlatformTypes: i
  } = n, a = (0, d.gn)();
  return (0, t.jsx)("div", {
    className: u.lA,
    children: a.filter(n => !(null == l ? true : l.has(n.type)) && (null == i || i.has(n.type))).map(n => (0, t.jsx)(r.A, {
      type: n.type,
      className: u.W2,
      innerClassName: u.Uz,
      onConnect: () => e(n.type)
    }, n.type))
  })
}

function x(n) {
  let {
    integrations: e,
    onCompleteApplication: l
  } = n;
  if (null == e || null == l) return null;
  let i = e.filter(n => {
    var e;
    return (null == (e = n.application) ? true : e.roleConnectionsVerificationUrl) != null
  });
  return 0 === i.length ? null : (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "interactive-text-default",
      className: u.jS,
      children: p.intl.string(p.t.PHjkRE)
    }), (0, t.jsx)("div", {
      className: u.$v,
      children: i.map(n => {
        let e = n.application;
        a()(null != e, "application is null");
        let i = null == e ? true : e.bot;
        return a()(null != i, "bot is null"), (0, t.jsxs)(o.DUT, {
          onClick: () => l(e.id),
          className: u.pW,
          children: [(0, t.jsx)(c.A, {
            user: i,
            className: u.In
          }), (0, t.jsxs)("div", {
            className: u.RM,
            children: [(0, t.jsx)(o.Heading, {
              variant: "heading-sm/semibold",
              className: u.p4,
              children: e.name
            }), null != e.description && e.description.length > 0 ? (0, t.jsx)(o.Text, {
              variant: "text-xs/normal",
              color: "text-default",
              className: u.p4,
              children: e.description
            }) : null]
          })]
        }, n.id)
      })
    })]
  })
}

function _(n) {
  let {
    transitionState: e,
    onComplete: l,
    onClose: i,
    excludedPlatformTypes: a,
    includedPlatformTypes: o,
    integrations: c,
    onCompleteApplication: r
  } = n;
  return (0, t.jsxs)(s.Modal, {
    title: p.intl.string(p.t.syl6HS),
    transitionState: e,
    onClose: i,
    actions: [],
    children: [(0, t.jsx)(m, {
      onComplete: function(n) {
        l(n), i()
      },
      excludedPlatformTypes: a,
      includedPlatformTypes: o
    }), (0, t.jsx)(x, {
      integrations: c,
      onCompleteApplication: null != r ? function(n) {
        null == r || r(n), i()
      } : true
    })]
  })
}