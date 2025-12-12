/** Chunk was on web.js **/
/** chunk id: 300917, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => g,
  QuestRewardModalUnverified: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk594174 = require("./594174.js"),
  Chunk862657 = require("./862657.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk186469 = require("./186469.js"),
  Chunk800010 = require("./800010.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, _ = (0, o.e7)([c.default], () => {
    var e;
    return null == (e = c.default.getCurrentUser()) ? true : e.email
  }), [m, h] = i.useState({
    status: "unknown"
  });
  i.useEffect(() => {
    h({
      status: "loading"
    }), l.Z.verifyResend().then(() => h({
      status: "success"
    }), e => {
      h({
        status: "error"
      }), (0, u.ys)(e, {
        tags: {
          location: "QuestsRewardModalUnverified"
        }
      })
    })
  }, []);
  let g = "error" === m.status ? d.intl.string(d.t.vjying) : "success" === m.status ? d.intl.format(d.t.qP5xYc, {
    emailAddress: _,
    emailAddressLink: "mailto:".concat(_)
  }) : true;
  return (0, r.jsxs)(a.ExpressiveModal, {
    transitionState: t,
    onClose: n,
    graphic: "loading" === m.status ? true : {
      type: "image",
      src: p
    },
    title: "loading" === m.status ? true : d.intl.string(d.t.c8eASM),
    subtitle: g,
    actions: "loading" === m.status ? true : [{
      variant: "secondary",
      text: d.intl.string(d.t.cpT0Cq),
      onClick: n
    }],
    children: ["loading" === m.status && (0, r.jsx)(s.$jN, {}), "success" === m.status && (0, r.jsxs)("div", {
      className: f.helper,
      children: [(0, r.jsx)(s.d3s, {
        size: "xs",
        color: "currentColor",
        className: f.infoFilledIcon
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: d.intl.string(d.t.yb7itQ)
      })]
    })]
  })
}

function g() {
  (0, Chunk481060.ZDy)(async () => {
    let {
      QuestRewardModalUnverified: e
    } = await Promise.resolve().then(require.bind(require, 300917));
    return t => (0, r.jsx)(e, m({}, t))
  })
}