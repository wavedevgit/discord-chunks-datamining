/** Chunk was on 34740 **/
/** chunk id: 359565, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => y,
  s: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk626135 = require("./626135.js"),
  Chunk346479 = require("./346479.js"),
  Chunk665906 = require("./665906.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk856426 = require("./856426.js");

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
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
  } = e, l = (0, d.tc)(t);
  return r.useEffect(() => {
    c.default.track(p.rMx.CHANNEL_BANNER_VIEWED, g(m({}, (0, s.hH)(t.getGuildId()), (0, s.v_)(t)), {
      banner_type: "thread"
    }))
  }, [t]), (0, i.jsxs)("div", {
    className: a()(f.chatHeaderBar, {
      [f.narrow]: n
    }),
    children: [(0, i.jsx)(o.Text, {
      className: f.chatHeaderBarText,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: t.isForumPost() ? h.intl.string(h.t["833FDn"]) : h.intl.string(h.t.rEeodK)
    }), l ? (0, i.jsx)(o.Button, {
      variant: "secondary",
      text: h.intl.string(h.t["0dvvEi"]),
      onClick: () => {
        c.default.track(p.rMx.CHANNEL_BANNER_CTA_CLICKED, g(m({}, (0, s.hH)(t.getGuildId()), (0, s.v_)(t)), {
          banner_type: "thread",
          cta_type: "unarchive"
        })), u.Z.unarchiveThread(t, false)
      },
      size: "sm"
    }) : null]
  })
}

function y(e) {
  let {
    channel: t,
    narrow: n
  } = e, l = (0, d.Xb)(t);
  return r.useEffect(() => {
    c.default.track(p.rMx.CHANNEL_BANNER_VIEWED, g(m({}, (0, s.hH)(t.getGuildId()), (0, s.v_)(t)), {
      banner_type: "thread"
    }))
  }, [t]), (0, i.jsxs)("div", {
    className: a()(f.chatHeaderBar, {
      [f.narrow]: n
    }),
    children: [(0, i.jsx)(o.Text, {
      className: f.chatHeaderBarText,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: t.isForumPost() ? h.intl.string(h.t.E7oO8u) : h.intl.string(h.t["V/JF2N"])
    }), l ? (0, i.jsx)(o.Button, {
      variant: "secondary",
      text: h.intl.string(h.t.zA9d1J),
      onClick: () => {
        c.default.track(p.rMx.CHANNEL_BANNER_CTA_CLICKED, g(m({}, (0, s.hH)(t.getGuildId()), (0, s.v_)(t)), {
          banner_type: "thread",
          cta_type: "unlock"
        })), u.Z.unlockThread(t)
      },
      size: "sm"
    }) : null]
  })
}