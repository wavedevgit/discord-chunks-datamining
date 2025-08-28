/** Chunk was on 56011 **/
/** chunk id: 359565, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => _,
  s: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk626135 = require("./626135.js"),
  Chunk346479 = require("./346479.js"),
  Chunk665906 = require("./665906.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk856426 = require("./856426.js");

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

function b(e, t) {
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

function y(e) {
  let {
    channel: t,
    narrow: n
  } = e, l = (0, p.tc)(t);
  return i.useEffect(() => {
    u.default.track(h.rMx.CHANNEL_BANNER_VIEWED, b(g({}, (0, c.hH)(t.getGuildId()), (0, c.v_)(t)), {
      banner_type: "thread"
    }))
  }, [t]), (0, r.jsxs)("div", {
    className: a()(m.chatHeaderBar, {
      [m.narrow]: n
    }),
    children: [(0, r.jsx)(s.Text, {
      className: m.chatHeaderBarText,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: t.isForumPost() ? f.intl.string(f.t["833FDg"]) : f.intl.string(f.t.rEeodH)
    }), l ? (0, r.jsx)(o.zx, {
      size: n ? o.zx.Sizes.SMALL : o.zx.Sizes.TINY,
      className: m.chatHeaderBarButton,
      color: o.zx.Colors.PRIMARY,
      onClick: () => {
        u.default.track(h.rMx.CHANNEL_BANNER_CTA_CLICKED, b(g({}, (0, c.hH)(t.getGuildId()), (0, c.v_)(t)), {
          banner_type: "thread",
          cta_type: "unarchive"
        })), d.Z.unarchiveThread(t, false)
      },
      children: f.intl.string(f.t["0dvvEh"])
    }) : null]
  })
}

function _(e) {
  let {
    channel: t,
    narrow: n
  } = e, l = (0, p.Xb)(t);
  return i.useEffect(() => {
    u.default.track(h.rMx.CHANNEL_BANNER_VIEWED, b(g({}, (0, c.hH)(t.getGuildId()), (0, c.v_)(t)), {
      banner_type: "thread"
    }))
  }, [t]), (0, r.jsxs)("div", {
    className: a()(m.chatHeaderBar, {
      [m.narrow]: n
    }),
    children: [(0, r.jsx)(s.Text, {
      className: m.chatHeaderBarText,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: t.isForumPost() ? f.intl.string(f.t.E7oO8v) : f.intl.string(f.t["V/JF2N"])
    }), l ? (0, r.jsx)(o.zx, {
      size: n ? o.zx.Sizes.SMALL : o.zx.Sizes.TINY,
      className: m.chatHeaderBarButton,
      color: o.zx.Colors.PRIMARY,
      onClick: () => {
        u.default.track(h.rMx.CHANNEL_BANNER_CTA_CLICKED, b(g({}, (0, c.hH)(t.getGuildId()), (0, c.v_)(t)), {
          banner_type: "thread",
          cta_type: "unlock"
        })), d.Z.unlockThread(t)
      },
      children: f.intl.string(f.t.zA9d1N)
    }) : null]
  })
}