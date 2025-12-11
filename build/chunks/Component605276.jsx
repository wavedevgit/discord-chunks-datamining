/** Chunk was on 12009 **/
/** chunk id: 605276, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk368844 = require("./368844.js"),
  Chunk65361 = require("./65361.js"),
  Chunk798476 = require("./798476.jsx"),
  Chunk6025 = require("./6025.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk768581 = require("./768581.js"),
  Chunk526120 = require("./526120.js"),
  Chunk825334 = require("./825334.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk358053 = require("./358053.js");
let v = Chunk473749.memo(function(e) {
    let {
      guild: n
    } = e, {
      guildProfile: t,
      fetchGuildProfile: r
    } = (0, d.u)(n.id);
    return (l.useEffect(() => {
      r()
    }, [r]), null == t) ? null : (0, a.jsx)(o.ZP, {
      profile: t,
      disableCTA: true,
      disableGuildNameClick: true
    })
  }),
  Z = e => {
    let {
      channelId: n,
      title: t,
      icon: d
    } = e, o = (0, r.e7)([m.Z], () => m.Z.getChannel(n)), x = (0, r.e7)([h.Z], () => h.Z.getMessages(n)), j = (0, r.e7)([f.Z], () => f.Z.can(p.Plq.VIEW_CHANNEL, o)), v = x.first(), Z = (0, s.zy)(v, false), I = (null == Z ? true : Z.length) > 0 ? Z[0] : null, N = null != o && null == v && !x.loadingMore && !x.ready && !x.hasFetched && j;
    return l.useEffect(() => {
      N && c.Z.fetchMessages({
        channelId: n,
        after: n,
        limit: 5
      })
    }, [n, N]), (0, a.jsx)(i.P3F, {
      className: C.resourceChannel,
      onClick: e => {
        null != o && (e.shiftKey ? (0, b.C3)(o.guild_id, o.id) : u.Z.openResourceChannelAsSidebar({
          guildId: o.guild_id,
          channelId: o.id
        }))
      },
      children: (0, a.jsxs)(a.Fragment, {
        children: [(() => {
          let e = g.ZP.getResourceChannelIconURL({
            channelId: n,
            icon: d
          });
          return null != d && null != e ? (0, a.jsx)("img", {
            src: e,
            className: C.resourceImage,
            alt: "",
            "aria-hidden": true
          }) : null != I ? (0, a.jsx)("img", {
            className: C.resourceImage,
            src: I.src,
            alt: I.alt
          }) : (0, a.jsx)("div", {
            className: C.placeholderImage,
            children: (0, a.jsx)(i.hH0, {
              size: "xs",
              color: "currentColor"
            })
          })
        })(), (0, a.jsx)(i.Text, {
          className: C.guildInfoText,
          variant: "text-sm/semibold",
          color: "none",
          children: t
        })]
      })
    }, n)
  },
  I = Chunk473749.memo(function(e) {
    let {
      guild: n
    } = e, t = (0, x.Z)(n.id);
    return 0 === t.length ? null : (0, a.jsx)(i.Zbd, {
      className: C.sidebarCardWrapper,
      children: (0, a.jsxs)("div", {
        className: C.sidebarCard,
        children: [(0, a.jsx)(i.Heading, {
          className: C.sidebarCardHeader,
          variant: "heading-md/bold",
          color: "text-strong",
          children: j.intl.string(j.t.xwY4La)
        }), (0, a.jsx)("div", {
          className: C.resourceChannelsList,
          children: t.map(e => (0, a.jsx)(Z, {
            channelId: e.channelId,
            title: e.title,
            icon: e.icon
          }, "widget-resource-".concat(e.channelId)))
        })]
      })
    })
  }),
  N = Chunk473749.memo(function(e) {
    let {
      guild: n,
      isNewMember: t
    } = e;
    return (0, a.jsxs)("aside", {
      className: C.sidebar,
      children: [(0, a.jsx)(v, {
        guild: n
      }), t && (0, a.jsx)(I, {
        guild: n
      })]
    })
  })