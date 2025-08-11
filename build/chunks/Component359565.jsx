/** Chunk was on web.js **/
/** chunk id: 359565, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => O,
  s: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk251027 = require("./251027.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  let {
    channel: t,
    narrow: n
  } = e, o = (0, f.tc)(t);
  i.useEffect(() => {
    u.default.track(_.rMx.CHANNEL_BANNER_VIEWED, b(g({}, (0, c.hH)(t.getGuildId()), (0, c.v_)(t)), {
      banner_type: "thread"
    }))
  }, [t]);
  let m = () => {
    u.default.track(_.rMx.CHANNEL_BANNER_CTA_CLICKED, b(g({}, (0, c.hH)(t.getGuildId()), (0, c.v_)(t)), {
      banner_type: "thread",
      cta_type: "unarchive"
    })), d.Z.unarchiveThread(t, false)
  };
  return (0, r.jsxs)("div", {
    className: a()(h.chatHeaderBar, {
      [h.narrow]: n
    }),
    children: [(0, r.jsx)(l.Text, {
      className: h.chatHeaderBarText,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: t.isForumPost() ? p.intl.string(p.t["833FDg"]) : p.intl.string(p.t.rEeodH)
    }), o ? (0, r.jsx)(s.zx, {
      size: n ? s.zx.Sizes.SMALL : s.zx.Sizes.TINY,
      className: h.chatHeaderBarButton,
      color: s.zx.Colors.PRIMARY,
      onClick: m,
      children: p.intl.string(p.t["0dvvEh"])
    }) : null]
  })
}

function O(e) {
  let {
    channel: t,
    narrow: n
  } = e, o = (0, f.Xb)(t);
  i.useEffect(() => {
    u.default.track(_.rMx.CHANNEL_BANNER_VIEWED, b(g({}, (0, c.hH)(t.getGuildId()), (0, c.v_)(t)), {
      banner_type: "thread"
    }))
  }, [t]);
  let m = () => {
    u.default.track(_.rMx.CHANNEL_BANNER_CTA_CLICKED, b(g({}, (0, c.hH)(t.getGuildId()), (0, c.v_)(t)), {
      banner_type: "thread",
      cta_type: "unlock"
    })), d.Z.unlockThread(t)
  };
  return (0, r.jsxs)("div", {
    className: a()(h.chatHeaderBar, {
      [h.narrow]: n
    }),
    children: [(0, r.jsx)(l.Text, {
      className: h.chatHeaderBarText,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: t.isForumPost() ? p.intl.string(p.t.E7oO8v) : p.intl.string(p.t["V/JF2N"])
    }), o ? (0, r.jsx)(s.zx, {
      size: n ? s.zx.Sizes.SMALL : s.zx.Sizes.TINY,
      className: h.chatHeaderBarButton,
      color: s.zx.Colors.PRIMARY,
      onClick: m,
      children: p.intl.string(p.t.zA9d1N)
    }) : null]
  })
}