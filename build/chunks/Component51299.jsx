/** Chunk was on 28538 **/
/** chunk id: 51299, original params: n,a,i (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk23551 = require("./23551.jsx"),
  Chunk122021 = require("./122021.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk122048 = require("./122048.js");

function m(n) {
  let {
    onComplete: a,
    excludedPlatformTypes: i,
    includedPlatformTypes: e
  } = n, l = (0, p.fq)();
  return (0, t.jsx)("div", {
    className: u.connectionsContainer,
    children: l.filter(n => !(null == i ? true : i.has(n.type)) && (null == e || e.has(n.type))).map(n => (0, t.jsx)(r.Z, {
      type: n.type,
      className: u.accountBtn,
      innerClassName: u.accountBtnInner,
      onConnect: () => a(n.type)
    }, n.type))
  })
}

function x(n) {
  let {
    integrations: a,
    onCompleteApplication: i
  } = n;
  if (null == a || null == i) return null;
  let e = a.filter(n => {
    var a;
    return (null == (a = n.application) ? true : a.roleConnectionsVerificationUrl) != null
  });
  return 0 === e.length ? null : (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "interactive-normal",
      className: u.applicationsHeader,
      children: d.intl.string(d.t.PHjkRE)
    }), (0, t.jsx)("div", {
      className: u.applicationsContainer,
      children: e.map(n => {
        let a = n.application;
        l()(null != a, "application is null");
        let e = null == a ? true : a.bot;
        return l()(null != e, "bot is null"), (0, t.jsxs)(c.P3F, {
          onClick: () => i(a.id),
          className: u.application,
          children: [(0, t.jsx)(s.Z, {
            user: e,
            className: u.applicationIcon
          }), (0, t.jsxs)("div", {
            className: u.applicationNameContainer,
            children: [(0, t.jsx)(c.Heading, {
              variant: "heading-sm/semibold",
              className: u.applicationNameText,
              children: a.name
            }), null != a.description && a.description.length > 0 ? (0, t.jsx)(c.Text, {
              variant: "text-xs/normal",
              color: "header-secondary",
              className: u.applicationNameText,
              children: a.description
            }) : null]
          })]
        }, n.id)
      })
    })]
  })
}

function h(n) {
  let {
    transitionState: a,
    onComplete: i,
    onClose: e,
    excludedPlatformTypes: l,
    includedPlatformTypes: c,
    integrations: s,
    onCompleteApplication: r
  } = n;
  return (0, t.jsxs)(o.Modal, {
    title: d.intl.string(d.t.syl6HS),
    transitionState: a,
    onClose: e,
    actions: [],
    children: [(0, t.jsx)(m, {
      onComplete: function(n) {
        i(n), e()
      },
      excludedPlatformTypes: l,
      includedPlatformTypes: c
    }), (0, t.jsx)(x, {
      integrations: s,
      onCompleteApplication: null != r ? function(n) {
        null == r || r(n), e()
      } : true
    })]
  })
}