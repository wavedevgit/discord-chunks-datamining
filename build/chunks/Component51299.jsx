/** Chunk was on 28538 **/
/** chunk id: 51299, original params: n,e,a (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk23551 = require("./23551.jsx"),
  Chunk122021 = require("./122021.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk564433 = require("./564433.js");

function m(n) {
  let {
    onComplete: e,
    excludedPlatformTypes: a,
    includedPlatformTypes: i
  } = n, l = (0, r.fq)();
  return (0, t.jsx)("div", {
    className: u.connectionsContainer,
    children: l.filter(n => !(null == a ? true : a.has(n.type)) && (null == i || i.has(n.type))).map(n => (0, t.jsx)(p.Z, {
      type: n.type,
      className: u.accountBtn,
      innerClassName: u.accountBtnInner,
      onConnect: () => e(n.type)
    }, n.type))
  })
}

function x(n) {
  let {
    integrations: e,
    onCompleteApplication: a
  } = n;
  if (null == e || null == a) return null;
  let i = e.filter(n => {
    var e;
    return (null == (e = n.application) ? true : e.roleConnectionsVerificationUrl) != null
  });
  return 0 === i.length ? null : (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "interactive-text-default",
      className: u.applicationsHeader,
      children: d.intl.string(d.t.PHjkRE)
    }), (0, t.jsx)("div", {
      className: u.applicationsContainer,
      children: i.map(n => {
        let e = n.application;
        l()(null != e, "application is null");
        let i = null == e ? true : e.bot;
        return l()(null != i, "bot is null"), (0, t.jsxs)(c.P3F, {
          onClick: () => a(e.id),
          className: u.application,
          children: [(0, t.jsx)(s.Z, {
            user: i,
            className: u.applicationIcon
          }), (0, t.jsxs)("div", {
            className: u.applicationNameContainer,
            children: [(0, t.jsx)(c.Heading, {
              variant: "heading-sm/semibold",
              className: u.applicationNameText,
              children: e.name
            }), null != e.description && e.description.length > 0 ? (0, t.jsx)(c.Text, {
              variant: "text-xs/normal",
              color: "text-default",
              className: u.applicationNameText,
              children: e.description
            }) : null]
          })]
        }, n.id)
      })
    })]
  })
}

function h(n) {
  let {
    transitionState: e,
    onComplete: a,
    onClose: i,
    excludedPlatformTypes: l,
    includedPlatformTypes: c,
    integrations: s,
    onCompleteApplication: p
  } = n;
  return (0, t.jsxs)(o.Modal, {
    title: d.intl.string(d.t.syl6HS),
    transitionState: e,
    onClose: i,
    actions: [],
    children: [(0, t.jsx)(m, {
      onComplete: function(n) {
        a(n), i()
      },
      excludedPlatformTypes: l,
      includedPlatformTypes: c
    }), (0, t.jsx)(x, {
      integrations: s,
      onCompleteApplication: null != p ? function(n) {
        null == p || p(n), i()
      } : true
    })]
  })
}