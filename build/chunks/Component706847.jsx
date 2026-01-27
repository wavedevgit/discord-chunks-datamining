/** Chunk was on 77870 **/
/** chunk id: 706847, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => b,
  z: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk58149 = require("./58149.js"),
  Chunk954571 = require("./954571.js"),
  Chunk867455 = require("./867455.js"),
  Chunk406704 = require("./406704.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk783971 = require("./783971.js");

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  let {
    channel: t,
    narrow: n
  } = e, i = (0, d.lK)(t);
  return l.useEffect(() => {
    c.default.track(p.HAw.CHANNEL_BANNER_VIEWED, m(g({}, (0, o.H$)(t.getGuildId()), (0, o.dI)(t)), {
      banner_type: "thread"
    }))
  }, [t]), (0, r.jsxs)("div", {
    className: s()(f.JD, {
      [f.sc]: n
    }),
    children: [(0, r.jsx)(a.Text, {
      className: f.E5,
      variant: "text-sm/normal",
      color: "text-default",
      children: t.isForumPost() ? h.intl.string(h.t["833FDn"]) : h.intl.string(h.t.rEeodK)
    }), i ? (0, r.jsx)(a.Button, {
      variant: "secondary",
      text: h.intl.string(h.t["0dvvEi"]),
      onClick: () => {
        c.default.track(p.HAw.CHANNEL_BANNER_CTA_CLICKED, m(g({}, (0, o.H$)(t.getGuildId()), (0, o.dI)(t)), {
          banner_type: "thread",
          cta_type: "unarchive"
        })), u.A.unarchiveThread(t, false)
      },
      size: "sm"
    }) : null]
  })
}

function A(e) {
  let {
    channel: t,
    narrow: n
  } = e, i = (0, d.H_)(t);
  return l.useEffect(() => {
    c.default.track(p.HAw.CHANNEL_BANNER_VIEWED, m(g({}, (0, o.H$)(t.getGuildId()), (0, o.dI)(t)), {
      banner_type: "thread"
    }))
  }, [t]), (0, r.jsxs)("div", {
    className: s()(f.JD, {
      [f.sc]: n
    }),
    children: [(0, r.jsx)(a.Text, {
      className: f.E5,
      variant: "text-sm/normal",
      color: "text-default",
      children: t.isForumPost() ? h.intl.string(h.t.E7oO8u) : h.intl.string(h.t["V/JF2N"])
    }), i ? (0, r.jsx)(a.Button, {
      variant: "secondary",
      text: h.intl.string(h.t.zA9d1J),
      onClick: () => {
        c.default.track(p.HAw.CHANNEL_BANNER_CTA_CLICKED, m(g({}, (0, o.H$)(t.getGuildId()), (0, o.dI)(t)), {
          banner_type: "thread",
          cta_type: "unlock"
        })), u.A.unlockThread(t)
      },
      size: "sm"
    }) : null]
  })
}