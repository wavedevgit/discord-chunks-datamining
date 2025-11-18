/** Chunk was on web.js **/
/** chunk id: 669041, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => g,
  QuestsRewardModalUnverified: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk594174 = require("./594174.js"),
  Chunk509212 = require("./509212.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk301210 = require("./301210.js"),
  Chunk800010 = require("./800010.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, p = (0, o.e7)([c.default], () => {
    var e;
    return null == (e = c.default.getCurrentUser()) ? true : e.email
  }), [h, m] = i.useState({
    status: "unknown"
  });
  i.useEffect(() => {
    m({
      status: "loading"
    }), l.Z.verifyResend().then(() => m({
      status: "success"
    }), e => {
      m({
        status: "error"
      }), (0, u.ys)(e, {
        tags: {
          location: "QuestsRewardModalUnverified"
        }
      })
    })
  }, []);
  let g = "error" === h.status ? d.intl.string(d.t.vjying) : "success" === h.status ? d.intl.format(d.t.qP5xYc, {
    emailAddress: p,
    emailAddressLink: "mailto:".concat(p)
  }) : true;
  return (0, r.jsxs)(a.ExpressiveModal, {
    transitionState: t,
    onClose: n,
    graphic: "loading" === h.status ? true : {
      type: "image",
      src: _
    },
    title: "loading" === h.status ? true : d.intl.string(d.t.c8eASM),
    subtitle: g,
    actions: "loading" === h.status ? true : [{
      variant: "secondary",
      text: d.intl.string(d.t.cpT0Cq),
      onClick: n
    }],
    children: ["loading" === h.status && (0, r.jsx)(s.$jN, {}), "success" === h.status && (0, r.jsxs)("div", {
      className: f.helper,
      children: [(0, r.jsx)(s.d3s, {
        size: "xs",
        color: "currentColor",
        className: f.infoFilledIcon
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: d.intl.string(d.t.yb7itQ)
      })]
    })]
  })
}

function g() {
  (0, Chunk481060.ZDy)(async () => {
    let {
      QuestsRewardModalUnverified: e
    } = await Promise.resolve().then(require.bind(require, 669041));
    return t => (0, r.jsx)(e, h({}, t))
  })
}