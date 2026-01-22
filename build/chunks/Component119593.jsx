/** Chunk was on 33957 **/
/** chunk id: 119593, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  A: () => O
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
let v = Chunk64700.memo(function(e) {
    let {
      guild: n
    } = e, {
      guildProfile: l,
      fetchGuildProfile: r
    } = (0, d.u)(n.id);
    return (a.useEffect(() => {
      r()
    }, [r]), null == l) ? null : (0, t.jsx)(o.Ay, {
      profile: l,
      disableCTA: true,
      disableGuildNameClick: true
    })
  }),
  y = e => {
    let n, {
        channelId: l,
        title: d,
        icon: o
      } = e,
      g = (0, r.bG)([f.A], () => f.A.getChannel(l)),
      A = (0, r.bG)([h.A], () => h.A.getMessages(l)),
      v = (0, r.bG)([b.A], () => b.A.can(j.xBc.VIEW_CHANNEL, g)),
      y = A.first(),
      N = (0, c.yC)(y, false),
      O = (null == N ? true : N.length) > 0 ? N[0] : null,
      I = null != g && null == y && !A.loadingMore && !A.ready && !A.hasFetched && v;
    return a.useEffect(() => {
      I && s.A.fetchMessages({
        channelId: l,
        after: l,
        limit: 5
      })
    }, [l, I]), (0, t.jsx)(i.DUT, {
      className: p.Km,
      onClick: e => {
        null != g && (e.shiftKey ? (0, x.bN)(g.guild_id, g.id) : u.A.openResourceChannelAsSidebar({
          guildId: g.guild_id,
          channelId: g.id
        }))
      },
      children: (0, t.jsxs)(t.Fragment, {
        children: [(n = m.Ay.getResourceChannelIconURL({
          channelId: l,
          icon: o
        }), null != o && null != n ? (0, t.jsx)("img", {
          src: n,
          className: p.Oz,
          alt: "",
          "aria-hidden": true
        }) : null != O ? (0, t.jsx)("img", {
          className: p.Oz,
          src: O.src,
          alt: O.alt
        }) : (0, t.jsx)("div", {
          className: p.jM,
          children: (0, t.jsx)(i.ueQ, {
            size: "xs",
            color: "currentColor"
          })
        })), (0, t.jsx)(i.Text, {
          className: p.T2,
          variant: "text-sm/semibold",
          color: "none",
          children: d
        })]
      })
    }, l)
  },
  N = Chunk64700.memo(function(e) {
    let {
      guild: n
    } = e, l = (0, g.A)(n.id);
    return 0 === l.length ? null : (0, t.jsx)(i.ZpM, {
      className: p.u2,
      children: (0, t.jsxs)("div", {
        className: p.Ln,
        children: [(0, t.jsx)(i.Heading, {
          className: p.cx,
          variant: "heading-md/bold",
          color: "text-strong",
          children: A.intl.string(A.t.xwY4La)
        }), (0, t.jsx)("div", {
          className: p.Tb,
          children: l.map(e => (0, t.jsx)(y, {
            channelId: e.channelId,
            title: e.title,
            icon: e.icon
          }, "widget-resource-".concat(e.channelId)))
        })]
      })
    })
  }),
  O = Chunk64700.memo(function(e) {
    let {
      guild: n,
      isNewMember: l
    } = e;
    return (0, t.jsxs)("aside", {
      className: p.pz,
      children: [(0, t.jsx)(v, {
        guild: n
      }), l && (0, t.jsx)(N, {
        guild: n
      })]
    })
  })