/** Chunk was on 12009 **/
/** chunk id: 605276, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => I
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
  Chunk31499 = require("./31499.js");
let v = Chunk473749.memo(function(e) {
    let {
      guild: n
    } = e, {
      guildProfile: t,
      fetchGuildProfile: a
    } = (0, o.u)(n.id);
    return (r.useEffect(() => {
      a()
    }, [a]), null == t) ? null : (0, l.jsx)(d.ZP, {
      profile: t,
      disableCTA: true,
      disableGuildNameClick: true
    })
  }),
  _ = e => {
    let {
      channelId: n,
      title: t,
      icon: o
    } = e, d = (0, a.e7)([m.Z], () => m.Z.getChannel(n)), p = (0, a.e7)([h.Z], () => h.Z.getMessages(n)), j = (0, a.e7)([g.Z], () => g.Z.can(b.Plq.VIEW_CHANNEL, d)), v = p.first(), _ = (0, c.zy)(v, false), Z = (null == _ ? true : _.length) > 0 ? _[0] : null, I = null != d && null == v && !p.loadingMore && !p.ready && !p.hasFetched && j;
    return r.useEffect(() => {
      I && s.Z.fetchMessages({
        channelId: n,
        after: n,
        limit: 5
      })
    }, [n, I]), (0, l.jsx)(i.P3F, {
      className: C.resourceChannel,
      onClick: e => {
        null != d && (e.shiftKey ? (0, x.C3)(d.guild_id, d.id) : u.Z.openResourceChannelAsSidebar({
          guildId: d.guild_id,
          channelId: d.id
        }))
      },
      children: (0, l.jsxs)(l.Fragment, {
        children: [(() => {
          let e = f.ZP.getResourceChannelIconURL({
            channelId: n,
            icon: o
          });
          return null != o && null != e ? (0, l.jsx)("img", {
            src: e,
            className: C.resourceImage,
            alt: "",
            "aria-hidden": true
          }) : null != Z ? (0, l.jsx)("img", {
            className: C.resourceImage,
            src: Z.src,
            alt: Z.alt
          }) : (0, l.jsx)("div", {
            className: C.placeholderImage,
            children: (0, l.jsx)(i.hH0, {
              size: "xs",
              color: "currentColor"
            })
          })
        })(), (0, l.jsx)(i.Text, {
          className: C.guildInfoText,
          variant: "text-sm/semibold",
          color: "none",
          children: t
        })]
      })
    }, n)
  },
  Z = Chunk473749.memo(function(e) {
    let {
      guild: n
    } = e, t = (0, p.Z)(n.id);
    return 0 === t.length ? null : (0, l.jsx)(i.Zbd, {
      className: C.sidebarCardWrapper,
      children: (0, l.jsxs)("div", {
        className: C.sidebarCard,
        children: [(0, l.jsx)(i.Heading, {
          className: C.sidebarCardHeader,
          variant: "heading-md/bold",
          color: "text-strong",
          children: j.intl.string(j.t.xwY4La)
        }), (0, l.jsx)("div", {
          className: C.resourceChannelsList,
          children: t.map(e => (0, l.jsx)(_, {
            channelId: e.channelId,
            title: e.title,
            icon: e.icon
          }, "widget-resource-".concat(e.channelId)))
        })]
      })
    })
  }),
  I = Chunk473749.memo(function(e) {
    let {
      guild: n,
      isNewMember: t
    } = e;
    return (0, l.jsxs)("aside", {
      className: C.sidebar,
      children: [(0, l.jsx)(v, {
        guild: n
      }), t && (0, l.jsx)(Z, {
        guild: n
      })]
    })
  })