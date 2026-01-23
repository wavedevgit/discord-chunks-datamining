/** Chunk was on 33957 **/
/** chunk id: 119593, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  A: () => I
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk256265 = require("./256265.js"),
  Chunk90084 = require("./90084.js"),
  Chunk42780 = require("./42780.jsx"),
  Chunk138298 = require("./138298.js"),
  Chunk734057 = require("./734057.js"),
  Chunk320501 = require("./320501.js"),
  Chunk576705 = require("./576705.js"),
  Chunk486020 = require("./486020.js"),
  Chunk225142 = require("./225142.js"),
  Chunk639245 = require("./639245.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk159453 = require("./159453.js");
let _ = Chunk64700.memo(function(e) {
    let {
      guild: n
    } = e, {
      guildProfile: l,
      fetchGuildProfile: a
    } = (0, o.u)(n.id);
    return (r.useEffect(() => {
      a()
    }, [a]), null == l) ? null : (0, t.jsx)(d.Ay, {
      profile: l,
      disableCTA: true,
      disableGuildNameClick: true
    })
  }),
  v = e => {
    let n, {
        channelId: l,
        title: o,
        icon: d
      } = e,
      b = (0, a.bG)([m.A], () => m.A.getChannel(l)),
      p = (0, a.bG)([h.A], () => h.A.getMessages(l)),
      _ = (0, a.bG)([f.A], () => f.A.can(j.xBc.VIEW_CHANNEL, b)),
      v = p.first(),
      y = (0, c.yC)(v, false),
      I = (null == y ? true : y.length) > 0 ? y[0] : null,
      N = null != b && null == v && !p.loadingMore && !p.ready && !p.hasFetched && _;
    return r.useEffect(() => {
      N && s.A.fetchMessages({
        channelId: l,
        after: l,
        limit: 5
      })
    }, [l, N]), (0, t.jsx)(i.DUT, {
      className: A.Km,
      onClick: e => {
        null != b && (e.shiftKey ? (0, x.bN)(b.guild_id, b.id) : u.A.openResourceChannelAsSidebar({
          guildId: b.guild_id,
          channelId: b.id
        }))
      },
      children: (0, t.jsxs)(t.Fragment, {
        children: [(n = g.Ay.getResourceChannelIconURL({
          channelId: l,
          icon: d
        }), null != d && null != n ? (0, t.jsx)("img", {
          src: n,
          className: A.Oz,
          alt: "",
          "aria-hidden": true
        }) : null != I ? (0, t.jsx)("img", {
          className: A.Oz,
          src: I.src,
          alt: I.alt
        }) : (0, t.jsx)("div", {
          className: A.jM,
          children: (0, t.jsx)(i.ueQ, {
            size: "xs",
            color: "currentColor"
          })
        })), (0, t.jsx)(i.Text, {
          className: A.T2,
          variant: "text-sm/semibold",
          color: "none",
          children: o
        })]
      })
    }, l)
  },
  y = Chunk64700.memo(function(e) {
    let {
      guild: n
    } = e, l = (0, b.A)(n.id);
    return 0 === l.length ? null : (0, t.jsx)(i.ZpM, {
      className: A.u2,
      children: (0, t.jsxs)("div", {
        className: A.Ln,
        children: [(0, t.jsx)(i.Heading, {
          className: A.cx,
          variant: "heading-md/bold",
          color: "text-strong",
          children: p.intl.string(p.t.xwY4La)
        }), (0, t.jsx)("div", {
          className: A.Tb,
          children: l.map(e => (0, t.jsx)(v, {
            channelId: e.channelId,
            title: e.title,
            icon: e.icon
          }, "widget-resource-".concat(e.channelId)))
        })]
      })
    })
  }),
  I = Chunk64700.memo(function(e) {
    let {
      guild: n,
      isNewMember: l
    } = e;
    return (0, t.jsxs)("aside", {
      className: A.pz,
      children: [(0, t.jsx)(_, {
        guild: n
      }), l && (0, t.jsx)(y, {
        guild: n
      })]
    })
  })