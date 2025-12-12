/** Chunk was on 1272 **/
/** chunk id: 782959, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");

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

function g(e) {
  let {
    guildId: t,
    markAsDismissed: g,
    renderTargetElement: h
  } = e, m = {
    text: p.intl.string(p.t.JzJpg4),
    onClick: () => {
      o.default.track(u.rMx.MEDIA_CHANNEL_UPSELL_CLICKED, f({}, (0, s.hH)(t))), g(d.L.PRIMARY), (0, a.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("29497"), n.e("53781")]).then(n.bind(n, 241865));
        return n => {
          var i, l;
          return (0, r.jsx)(e, (i = f({}, n), l = l = {
            channelType: u.d4z.GUILD_MEDIA,
            guildId: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
          }), i))
        }
      })
    },
    variant: "primary"
  }, _ = i.useRef(null);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      ref: _,
      children: h()
    }), (0, r.jsx)(l.Mb, {
      title: p.intl.string(p.t.fW7UqM),
      body: p.intl.string(p.t["yQ0X+T"]),
      position: "bottom",
      caretConfig: {
        align: "center"
      },
      assetUrl: "https://cdn.discordapp.com/assets/media_channel/media_channel_upsell_demo.mp4",
      action: m,
      textLink: {
        link: c.Z.getCreatorSupportArticleURL(u.BhN.MEDIA_CHANNEL),
        text: p.intl.string(p.t.w4DutA)
      },
      targetElementRef: _,
      onRequestClose: () => g(d.L.DISMISS)
    })]
  })
}