/** Chunk was on 72165 **/
/** chunk id: 963878, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk726249 = require("./726249.js"),
  Chunk826673 = require("./826673.js"),
  Chunk742589 = require("./742589.jsx"),
  Chunk637248 = require("./637248.js"),
  Chunk760207 = require("./760207.jsx"),
  Chunk454058 = require("./454058.js"),
  Chunk761640 = require("./761640.js"),
  Chunk71393 = require("./71393.js"),
  Chunk202776 = require("./202776.js"),
  Chunk659069 = require("./659069.jsx"),
  Chunk539916 = require("./539916.js"),
  Chunk746080 = require("./746080.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk682628 = require("./682628.js"),
  Chunk638990 = require("./638990.js");

function w(e) {
  let {
    guild: t
  } = e, n = (0, A.A)(t);
  r.useEffect(() => {
    (0, f.Dr)(c.M.CHANNEL_BROWSER_NEW_BADGE_NUX, {
      dismissAction: y.i.DISMISS
    })
  });
  let i = n ? v.intl.formatToPlainString(v.t.uqZgYe, {
      guildName: t.name
    }) : v.intl.formatToPlainString(v.t.velJea, {
      guildName: t.name
    }),
    a = n ? v.intl.string(v.t.h9mGOP) : v.intl.string(v.t.et6wav);
  return (0, u.HU)({
    location: i
  }), (0, l.jsxs)(b.A, {
    className: _.wx,
    innerClassname: _.MU,
    hideSearch: true,
    channelId: C.VV.CUSTOMIZE_COMMUNITY,
    guildId: t.id,
    children: [(0, l.jsx)(b.A.Icon, {
      icon: o.kiI,
      "aria-hidden": true
    }), (0, l.jsx)(b.A.Title, {
      children: a
    })]
  })
}

function E(e) {
  let {
    guildId: t,
    selectedSection: n
  } = e, i = (0, s.bG)([x.A], () => x.A.getGuild(t)), c = (0, A.A)(i), [u, f] = r.useState(null != n ? n : O.qC.CUSTOMIZE);
  r.useEffect(() => {
    null != n && f(n)
  }, [n]), r.useEffect(() => {
    c || u !== O.qC.CUSTOMIZE || f(O.qC.BROWSE)
  }, [c, u]);
  let b = (0, s.bG)([m.Ay], () => m.Ay.getCurrentSidebarChannelId(C.VV.CHANNEL_BROWSER)),
    y = null != b && u === O.qC.BROWSE,
    E = (0, s.bG)([g.A], () => g.A.getNewChannelIds(t).size > 0),
    S = (0, h.RD)(t);
  return null == i ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: a()(N.TE, {
        [N.js]: y
      }),
      children: [(0, l.jsx)(w, {
        guild: i
      }), (0, l.jsxs)("div", {
        className: a()(N.Qs, _.kL),
        children: [c && (0, l.jsxs)(o.VQ0, {
          className: _.$H,
          type: "top",
          look: "brand",
          selectedItem: u,
          onItemSelect: e => f(e),
          children: [(0, l.jsx)(o.VQ0.Item, {
            className: _.YU,
            id: O.qC.CUSTOMIZE,
            children: v.intl.string(v.t.H2cICW)
          }, O.qC.CUSTOMIZE), (0, l.jsxs)(o.VQ0.Item, {
            className: _.YU,
            id: O.qC.BROWSE,
            "aria-label": v.intl.string(v.t.et6wav),
            children: [v.intl.string(v.t.et6wav), (0, l.jsx)(o.LpS, {
              text: E ? v.intl.string(v.t.psHMa6) : S,
              color: E ? d.A.unsafe_rawColors.BRAND_260.css : d.A.colors.BACKGROUND_MOD_STRONG.css,
              className: a()({
                [_.Ad]: E
              })
            })]
          }, O.qC.BROWSE)]
        }), (() => {
          switch (u) {
            case O.qC.CUSTOMIZE:
              return (0, l.jsx)(j.A, {
                guildId: t,
                onBrowseChannels: () => f(O.qC.BROWSE)
              });
            case O.qC.BROWSE:
            default:
              return (0, l.jsx)(p.A, {
                guildId: t
              })
          }
        })()]
      })]
    }), y && (0, l.jsx)(p.W, {
      channelId: b
    })]
  })
}