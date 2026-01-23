/** Chunk was on 72165 **/
/** chunk id: 963878, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => I
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
  } = e, n = (0, b.A)(t);
  r.useEffect(() => {
    (0, h.Dr)(o.M.CHANNEL_BROWSER_NEW_BADGE_NUX, {
      dismissAction: O.i.DISMISS
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
  }), (0, l.jsxs)(p.A, {
    className: y.wx,
    innerClassname: y.MU,
    hideSearch: true,
    channelId: j.VV.CUSTOMIZE_COMMUNITY,
    guildId: t.id,
    children: [(0, l.jsx)(p.A.Icon, {
      icon: d.kiI,
      "aria-hidden": true
    }), (0, l.jsx)(p.A.Title, {
      children: a
    })]
  })
}

function I(e) {
  let {
    guildId: t,
    selectedSection: n
  } = e, i = (0, s.bG)([x.A], () => x.A.getGuild(t)), o = (0, b.A)(i), [u, h] = r.useState(null != n ? n : C.qC.CUSTOMIZE);
  r.useEffect(() => {
    null != n && h(n)
  }, [n]), r.useEffect(() => {
    o || u !== C.qC.CUSTOMIZE || h(C.qC.BROWSE)
  }, [o, u]);
  let p = (0, s.bG)([g.Ay], () => g.Ay.getCurrentSidebarChannelId(j.VV.CHANNEL_BROWSER)),
    O = null != p && u === C.qC.BROWSE,
    I = (0, s.bG)([m.A], () => m.A.getNewChannelIds(t).size > 0),
    S = (0, f.RD)(t);
  return null == i ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: a()(N.TE, {
        [N.js]: O
      }),
      children: [(0, l.jsx)(w, {
        guild: i
      }), (0, l.jsxs)("div", {
        className: a()(N.Qs, y.kL),
        children: [o && (0, l.jsxs)(d.VQ0, {
          className: y.$H,
          type: "top",
          look: "brand",
          selectedItem: u,
          onItemSelect: e => h(e),
          children: [(0, l.jsx)(d.VQ0.Item, {
            className: y.YU,
            id: C.qC.CUSTOMIZE,
            children: v.intl.string(v.t.H2cICW)
          }, C.qC.CUSTOMIZE), (0, l.jsxs)(d.VQ0.Item, {
            className: y.YU,
            id: C.qC.BROWSE,
            "aria-label": v.intl.string(v.t.et6wav),
            children: [v.intl.string(v.t.et6wav), (0, l.jsx)(d.LpS, {
              text: I ? v.intl.string(v.t.psHMa6) : S,
              color: I ? c.A.unsafe_rawColors.BRAND_260.css : c.A.colors.BACKGROUND_MOD_STRONG.css,
              className: a()({
                [y.Ad]: I
              })
            })]
          }, C.qC.BROWSE)]
        }), (() => {
          switch (u) {
            case C.qC.CUSTOMIZE:
              return (0, l.jsx)(A.A, {
                guildId: t,
                onBrowseChannels: () => h(C.qC.BROWSE)
              });
            case C.qC.BROWSE:
            default:
              return (0, l.jsx)(_.A, {
                guildId: t
              })
          }
        })()]
      })]
    }), O && (0, l.jsx)(_.W, {
      channelId: p
    })]
  })
}