/** Chunk was on 28538 **/
/** chunk id: 51299, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  default: () => _
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
  Chunk122048 = require("./122048.js");

function m(n) {
  let {
    onComplete: t,
    excludedPlatformTypes: e,
    includedPlatformTypes: a
  } = n, l = (0, r.fq)();
  return (0, i.jsx)("div", {
    className: u.connectionsContainer,
    children: l.filter(n => !(null == e ? true : e.has(n.type)) && (null == a || a.has(n.type))).map(n => (0, i.jsx)(p.Z, {
      type: n.type,
      className: u.accountBtn,
      innerClassName: u.accountBtnInner,
      onConnect: () => t(n.type)
    }, n.type))
  })
}

function x(n) {
  let {
    integrations: t,
    onCompleteApplication: e
  } = n;
  if (null == t || null == e) return null;
  let a = t.filter(n => {
    var t;
    return (null == (t = n.application) ? true : t.roleConnectionsVerificationUrl) != null
  });
  return 0 === a.length ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "interactive-text-default",
      className: u.applicationsHeader,
      children: d.intl.string(d.t.PHjkRE)
    }), (0, i.jsx)("div", {
      className: u.applicationsContainer,
      children: a.map(n => {
        let t = n.application;
        l()(null != t, "application is null");
        let a = null == t ? true : t.bot;
        return l()(null != a, "bot is null"), (0, i.jsxs)(c.P3F, {
          onClick: () => e(t.id),
          className: u.application,
          children: [(0, i.jsx)(s.Z, {
            user: a,
            className: u.applicationIcon
          }), (0, i.jsxs)("div", {
            className: u.applicationNameContainer,
            children: [(0, i.jsx)(c.Heading, {
              variant: "heading-sm/semibold",
              className: u.applicationNameText,
              children: t.name
            }), null != t.description && t.description.length > 0 ? (0, i.jsx)(c.Text, {
              variant: "text-xs/normal",
              color: "text-default",
              className: u.applicationNameText,
              children: t.description
            }) : null]
          })]
        }, n.id)
      })
    })]
  })
}

function _(n) {
  let {
    transitionState: t,
    onComplete: e,
    onClose: a,
    excludedPlatformTypes: l,
    includedPlatformTypes: c,
    integrations: s,
    onCompleteApplication: p
  } = n;
  return (0, i.jsxs)(o.Modal, {
    title: d.intl.string(d.t.syl6HS),
    transitionState: t,
    onClose: a,
    actions: [],
    children: [(0, i.jsx)(m, {
      onComplete: function(n) {
        e(n), a()
      },
      excludedPlatformTypes: l,
      includedPlatformTypes: c
    }), (0, i.jsx)(x, {
      integrations: s,
      onCompleteApplication: null != p ? function(n) {
        null == p || p(n), a()
      } : true
    })]
  })
}