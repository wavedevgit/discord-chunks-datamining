/** Chunk was on 82124 **/
/** chunk id: 292853, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk626135 = require("./626135.js"),
  Chunk152376 = require("./152376.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk550567 = require("./550567.js");

function h(e) {
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

function g(e, t) {
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

function m(e) {
  let {
    channel: t,
    narrow: n
  } = e;
  return i.useEffect(() => {
    c.default.track(d.rMx.CHANNEL_BANNER_VIEWED, g(h({}, (0, s.hH)(t.getGuildId()), (0, s.v_)(t)), {
      banner_type: "channel_opt_in"
    }))
  }, [t]), (0, r.jsxs)("div", {
    className: a()(f.chatHeaderBar, {
      [f.narrow]: n
    }),
    children: [(0, r.jsx)(o.Text, {
      className: f.chatHeaderBarText,
      variant: "text-sm/normal",
      color: "text-default",
      children: p.intl.string(p.t.iOWmmB)
    }), (0, r.jsx)(o.Button, {
      size: "sm",
      variant: "primary",
      onClick: () => {
        c.default.track(d.rMx.CHANNEL_BANNER_CTA_CLICKED, g(h({}, (0, s.hH)(t.getGuildId()), (0, s.v_)(t)), {
          banner_type: "channel_opt_in",
          cta_type: "add channel"
        })), (0, u.XQ)(t.guild_id, t.id, true, {
          section: d.jXE.CHANNEL
        })
      },
      text: p.intl.string(p.t.ZtIlQo),
      icon: o.qJs
    })]
  })
}