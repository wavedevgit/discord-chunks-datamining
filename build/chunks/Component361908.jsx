/** Chunk was on 21738 **/
/** chunk id: 361908, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk342494 = require("./342494.js"),
  Chunk397927 = require("./397927.js"),
  Chunk58149 = require("./58149.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx");

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

function f(e) {
  let {
    guildId: t,
    markAsDismissed: f,
    renderTargetElement: g
  } = e, m = {
    text: p.intl.string(p.t.JzJpg4),
    onClick: () => {
      o.default.track(u.HAw.MEDIA_CHANNEL_UPSELL_CLICKED, h({}, (0, s.H$)(t))), f(d.i.PRIMARY), (0, a.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("64233"), n.e("9743")]).then(n.bind(n, 409200));
        return n => {
          var i, l;
          return (0, r.jsx)(e, (i = h({}, n), l = l = {
            channelType: u.rbe.GUILD_MEDIA,
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
  }, A = i.useRef(null);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      ref: A,
      children: g()
    }), (0, r.jsx)(l.HZ, {
      title: p.intl.string(p.t.fW7UqM),
      body: p.intl.string(p.t["yQ0X+T"]),
      position: "bottom",
      caretConfig: {
        align: "center"
      },
      assetUrl: "https://cdn.discordapp.com/assets/media_channel/media_channel_upsell_demo.mp4",
      action: m,
      textLink: {
        link: c.A.getCreatorSupportArticleURL(u.MVz.MEDIA_CHANNEL),
        text: p.intl.string(p.t.w4DutA)
      },
      targetElementRef: A,
      onRequestClose: () => f(d.i.DISMISS)
    })]
  })
}