/** Chunk was on 41727 **/
/** chunk id: 157259, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk58149 = require("./58149.js"),
  Chunk954571 = require("./954571.js"),
  Chunk816662 = require("./816662.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk930399 = require("./930399.js");

function f(e) {
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
  return l.useEffect(() => {
    c.default.track(d.HAw.CHANNEL_BANNER_VIEWED, g(f({}, (0, o.H$)(t.getGuildId()), (0, o.dI)(t)), {
      banner_type: "channel_opt_in"
    }))
  }, [t]), (0, r.jsxs)("div", {
    className: s()(h.JD, {
      [h.sc]: n
    }),
    children: [(0, r.jsx)(a.Text, {
      className: h.E5,
      variant: "text-sm/normal",
      color: "text-default",
      children: p.intl.string(p.t.iOWmmB)
    }), (0, r.jsx)(a.Button, {
      size: "sm",
      variant: "primary",
      onClick: () => {
        c.default.track(d.HAw.CHANNEL_BANNER_CTA_CLICKED, g(f({}, (0, o.H$)(t.getGuildId()), (0, o.dI)(t)), {
          banner_type: "channel_opt_in",
          cta_type: "add channel"
        })), (0, u.AC)(t.guild_id, t.id, true, {
          section: d.JJy.CHANNEL
        })
      },
      text: p.intl.string(p.t.ZtIlQo),
      icon: a.j96
    })]
  })
}