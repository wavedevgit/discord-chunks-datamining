/** Chunk was on 61344 **/
/** chunk id: 706847, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => A,
  z: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk58149 = require("./58149.js"),
  Chunk954571 = require("./954571.js"),
  Chunk867455 = require("./867455.js"),
  Chunk406704 = require("./406704.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk783971 = require("./783971.js");

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e) {
  let {
    channel: t,
    narrow: n
  } = e, i = (0, d.lK)(t);
  return r.useEffect(() => {
    c.default.track(h.HAw.CHANNEL_BANNER_VIEWED, g(m({}, (0, o.H$)(t.getGuildId()), (0, o.dI)(t)), {
      banner_type: "thread"
    }))
  }, [t]), (0, l.jsxs)("div", {
    className: a()(f.JD, {
      [f.sc]: n
    }),
    children: [(0, l.jsx)(s.Text, {
      className: f.E5,
      variant: "text-sm/normal",
      color: "text-default",
      children: t.isForumPost() ? p.intl.string(p.t["833FDn"]) : p.intl.string(p.t.rEeodK)
    }), i ? (0, l.jsx)(s.Button, {
      variant: "secondary",
      text: p.intl.string(p.t["0dvvEi"]),
      onClick: () => {
        c.default.track(h.HAw.CHANNEL_BANNER_CTA_CLICKED, g(m({}, (0, o.H$)(t.getGuildId()), (0, o.dI)(t)), {
          banner_type: "thread",
          cta_type: "unarchive"
        })), u.A.unarchiveThread(t, false)
      },
      size: "sm"
    }) : null]
  })
}

function b(e) {
  let {
    channel: t,
    narrow: n
  } = e, i = (0, d.H_)(t);
  return r.useEffect(() => {
    c.default.track(h.HAw.CHANNEL_BANNER_VIEWED, g(m({}, (0, o.H$)(t.getGuildId()), (0, o.dI)(t)), {
      banner_type: "thread"
    }))
  }, [t]), (0, l.jsxs)("div", {
    className: a()(f.JD, {
      [f.sc]: n
    }),
    children: [(0, l.jsx)(s.Text, {
      className: f.E5,
      variant: "text-sm/normal",
      color: "text-default",
      children: t.isForumPost() ? p.intl.string(p.t.E7oO8u) : p.intl.string(p.t["V/JF2N"])
    }), i ? (0, l.jsx)(s.Button, {
      variant: "secondary",
      text: p.intl.string(p.t.zA9d1J),
      onClick: () => {
        c.default.track(h.HAw.CHANNEL_BANNER_CTA_CLICKED, g(m({}, (0, o.H$)(t.getGuildId()), (0, o.dI)(t)), {
          banner_type: "thread",
          cta_type: "unlock"
        })), u.A.unlockThread(t)
      },
      size: "sm"
    }) : null]
  })
}