/** Chunk was on 56710 **/
/** chunk id: 109446, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./642613.js"), require("./583741.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk359110 = require("./359110.js"),
  Chunk601070 = require("./601070.js"),
  Chunk91159 = require("./91159.js"),
  Chunk488131 = require("./488131.js"),
  Chunk496675 = require("./496675.js"),
  Chunk306680 = require("./306680.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk124368 = require("./124368.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk531198 = require("./531198.js");

function C(e) {
  let {
    channel: t
  } = e, l = (0, a.Wu)([d.Z, g.ZP, f.Z], () => {
    let e = d.Z.getActiveJoinedRelevantThreadsForParent(t.guild_id, t.id);
    return o()(d.Z.getActiveJoinedThreadsForParent(t.guild_id, t.id)).values().map(e => e.channel).concat(o().values(d.Z.getActiveUnjoinedThreadsForParent(t.guild_id, t.id))).filter(t => !(t.id in e) && f.Z.can(O.Plq.VIEW_CHANNEL, t)).sort((e, t) => {
      let n = g.ZP.lastMessageId(e.id),
        r = g.ZP.lastMessageId(t.id);
      return _.default.compare(n, r)
    }).reverse().value()
  }), c = t.isForumLikeChannel() ? 5 : 3;
  return i.useEffect(() => {
    (0, p.q)()
  }, []), (0, r.jsxs)("div", {
    className: j.popout,
    children: [(0, r.jsx)(s.Text, {
      className: j.title,
      variant: "text-xs/bold",
      color: "header-secondary",
      children: t.isForumLikeChannel() ? v.intl.string(v.t.ioVdO2) : v.intl.string(v.t.VNYs2v)
    }), l.slice(0, t.isForumLikeChannel() ? l.length : c).map(e => (0, r.jsx)(x, {
      thread: e
    }, e.id)).filter(e => i.isValidElement(e)).slice(0, c), (0, r.jsx)(s.P3F, {
      className: j.more,
      onClick: () => {
        t.isForumLikeChannel() ? (0, u.Kh)(t.id) : (0, s.ZDy)(async () => {
          let {
            default: e
          } = await n.e("36970").then(n.bind(n, 223901));
          return n => (0, r.jsx)(e, function(e) {
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
          }({
            channel: t
          }, n))
        })
      },
      children: (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "none",
        children: v.intl.string(v.t["4qdZ93"])
      })
    })]
  })
}

function x(e) {
  let {
    thread: t
  } = e, n = (0, a.e7)([m.default], () => m.default.getUser(t.ownerId)), i = (0, p.Ok)(t);
  return (0, r.jsxs)(s.P3F, {
    className: j.row,
    onClick: e => {
      (0, h.ok)(t, t.isForumPost() ? e.shiftKey : !e.shiftKey, y.on.POPOUT)
    },
    children: [null == n ? (0, r.jsx)("img", {
      className: j.avatar,
      src: b.ZP.getDefaultAvatarURL(true, true),
      alt: ""
    }) : (0, r.jsx)(c.Z, {
      className: j.avatar,
      user: n,
      size: s.EFr.SIZE_16
    }), (0, r.jsx)(s.Text, {
      className: j.name,
      variant: "text-sm/normal",
      color: "none",
      children: t.name
    }), (0, r.jsxs)(s.Text, {
      className: j.timestamp,
      variant: "text-sm/normal",
      color: "none",
      children: [(0, r.jsx)("span", {
        className: j.bullet,
        children: "•"
      }), (0, p.Ye)(i)]
    })]
  })
}