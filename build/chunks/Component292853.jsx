/** Chunk was on web.js **/
/** chunk id: 292853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk626135 = require("./626135.js"),
  Chunk152376 = require("./152376.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk648200 = require("./648200.js");

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

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  let {
    channel: t,
    narrow: n
  } = e;
  i.useEffect(() => {
    c.default.track(d.rMx.CHANNEL_BANNER_VIEWED, g(h({}, (0, l.hH)(t.getGuildId()), (0, l.v_)(t)), {
      banner_type: "channel_opt_in"
    }))
  }, [t]);
  let o = () => {
    c.default.track(d.rMx.CHANNEL_BANNER_CTA_CLICKED, g(h({}, (0, l.hH)(t.getGuildId()), (0, l.v_)(t)), {
      banner_type: "channel_opt_in",
      cta_type: "add channel"
    })), (0, u.XQ)(t.guild_id, t.id, true, {
      section: d.jXE.CHANNEL
    })
  };
  return (0, r.jsxs)("div", {
    className: a()(_.chatHeaderBar, {
      [_.narrow]: n
    }),
    children: [(0, r.jsx)(s.Text, {
      className: _.chatHeaderBarText,
      variant: "text-sm/normal",
      color: "text-default",
      children: f.intl.string(f.t.iOWmmJ)
    }), (0, r.jsx)(s.zxk, {
      size: "sm",
      variant: "primary",
      onClick: o,
      text: f.intl.string(f.t.ZtIlQk),
      icon: s.qJs
    })]
  })
}