/** Chunk was on web.js **/
/** chunk id: 175248, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => g,
  QuestRewardModalUnverified: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk287809 = require("./287809.js"),
  Chunk710969 = require("./710969.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk603702 = require("./603702.js"),
  Chunk222872 = require("./222872.js");

function _(e, t, n) {
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
      _(e, t, n[t])
    })
  }
  return e
}

function m(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, _ = (0, o.bG)([c.default], () => {
    var e;
    return null == (e = c.default.getCurrentUser()) ? true : e.email
  }), [h, m] = i.useState({
    status: "unknown"
  });
  i.useEffect(() => {
    m({
      status: "loading"
    }), l.A.verifyResend().then(() => m({
      status: "success"
    }), e => {
      m({
        status: "error"
      }), (0, u.RF)(e, {
        tags: {
          location: "QuestsRewardModalUnverified"
        }
      })
    })
  }, []);
  let g = "error" === h.status ? d.intl.string(d.t.vjying) : "success" === h.status ? d.intl.format(d.t.qP5xYc, {
    emailAddress: _,
    emailAddressLink: "mailto:".concat(_)
  }) : true;
  return (0, r.jsxs)(a.ExpressiveModal, {
    transitionState: t,
    onClose: n,
    graphic: "loading" === h.status ? true : {
      type: "image",
      src: p
    },
    title: "loading" === h.status ? true : d.intl.string(d.t.c8eASM),
    subtitle: g,
    actions: "loading" === h.status ? true : [{
      variant: "secondary",
      text: d.intl.string(d.t.cpT0Cq),
      onClick: n
    }],
    children: ["loading" === h.status && (0, r.jsx)(s.y$y, {}), "success" === h.status && (0, r.jsxs)("div", {
      className: f.d,
      children: [(0, r.jsx)(s.mir, {
        size: "xs",
        color: "currentColor",
        className: f.q
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: d.intl.string(d.t.yb7itQ)
      })]
    })]
  })
}

function g() {
  (0, s.mMO)(async () => {
    let {
      QuestRewardModalUnverified: e
    } = await Promise.resolve().then(n.bind(n, 175248));
    return t => (0, r.jsx)(e, h({}, t))
  })
}