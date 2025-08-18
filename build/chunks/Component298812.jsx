/** Chunk was on 15076 **/
/** chunk id: 298812, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk87051 = require("./87051.js"),
  Chunk225433 = require("./225433.jsx"),
  Chunk933557 = require("./933557.js"),
  Chunk775666 = require("./775666.jsx"),
  Chunk471445 = require("./471445.js"),
  Chunk592125 = require("./592125.js"),
  Chunk324067 = require("./324067.js"),
  Chunk699516 = require("./699516.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk621600 = require("./621600.js"),
  Chunk423589 = require("./423589.js"),
  Chunk221259 = require("./221259.js"),
  Chunk113449 = require("./113449.js"),
  Chunk686660 = require("./686660.js"),
  Chunk569658 = require("./569658.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk960359 = require("./960359.js");
let P = Chunk647438.forwardRef(function(e, t) {
  let {
    guildId: n
  } = e, [l, r] = s.useState(null), o = (0, a.Wu)([p.Z, N.ZP], () => (0, O.OD)(N.ZP.getChannelOverrides(n), {
    ignoreMute: true,
    ignoreUnreadSetting: false,
    ignoreNotificationSetting: false
  }).map(e => p.Z.getChannel(e)).filter(f.lm)), c = (0, a.e7)([v.Z], () => v.Z.getCategories(n)), h = o.map((e, t) => (0, i.jsxs)("div", {
    className: T.channelRow,
    children: [(0, i.jsx)(M, {
      channel: e,
      categories: c,
      autoFocus: l === e.id
    }, e.id), t < o.length - 1 && (0, i.jsx)("div", {
      className: T.separator
    })]
  }, e.id));
  return (0, i.jsxs)("div", {
    ref: t,
    children: [(0, i.jsx)(_.Z, {
      guildId: n,
      onSelected: e => {
        if (null != o.find(t => t.id === e)) return;
        let t = p.Z.getChannel(e);
        null != t && (u.Z.updateChannelOverrideSettings(n, e, {
          muted: false,
          message_notifications: N.ZP.resolvedMessageNotifications(t),
          flags: (0, C.pq)(N.ZP.getChannelIdFlags(t.guild_id, t.id), N.ZP.resolveUnreadSetting(t))
        }, b.ZB.OverrideCreated), r(e))
      }
    }), h.length > 0 && (0, i.jsxs)("div", {
      className: T.table,
      children: [(0, i.jsxs)("div", {
        className: T.row,
        children: [(0, i.jsx)(d.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: T.rowName,
          children: L.intl.string(L.t.uShwWl)
        }), (0, i.jsx)(d.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: T.rowOption,
          children: L.intl.string(L.t.hZrr6u)
        }), (0, i.jsx)(d.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: T.rowOption,
          children: L.intl.string(L.t.y59NJi)
        }), (0, i.jsx)(d.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: T.rowOption,
          children: L.intl.string(L.t["pGn/bG"])
        }), (0, i.jsx)(d.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: T.rowOption,
          children: L.intl.string(L.t["32yow8"])
        })]
      }), h.length > 0 && (0, i.jsx)("div", {
        className: T.channels,
        children: h
      })]
    })]
  })
});

function M(e) {
  let {
    channel: t,
    categories: n,
    autoFocus: l
  } = e, u = (0, d.dQu)(o.Z.unsafe_rawColors.GREEN_360).hex(), v = (0, a.e7)([p.Z], () => p.Z.getChannel(null == t ? true : t.parent_id)), N = (0, E.ZA)(t), f = s.useRef(null), [b, O] = s.useState(false);
  if (s.useEffect(() => {
      if (l) {
        var e;
        null == (e = f.current) || e.scrollIntoView({
          behavior: "smooth"
        })
      }
    }, []), null == t) return null;
  let C = L.intl.string(L.t.uIzfCA),
    _ = (0, x.KS)(t);
  t.type === y.d4z.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id ? C = L.intl.formatToPlainString(L.t["2KzH8/"], {
    num: null != n[t.id] ? n[t.id].length : 0
  }) : null != v && (C = L.intl.formatToPlainString(L.t.L1zJgY, {
    categoryName: (0, g.F6)(v, S.default, j.Z)
  }));
  let P = b ? Z.s8.CUSTOM : N.preset;
  return (0, i.jsx)("div", {
    ref: f,
    children: (0, i.jsxs)("div", {
      className: r()(T.row, T.channel),
      children: [(0, i.jsxs)("div", {
        className: r()(T.rowName, T.modColor),
        children: [null != _ ? (0, i.jsx)(_, {
          size: "custom",
          color: "currentColor",
          height: 20,
          width: 20,
          className: T.icon
        }) : null, (0, i.jsxs)("div", {
          children: [(0, i.jsx)(d.Text, {
            variant: "text-md/semibold",
            className: T.modColor,
            children: (0, g.F6)(t, S.default, j.Z)
          }), (0, i.jsx)(d.Text, {
            variant: "text-xs/medium",
            className: T.modColor,
            children: C
          })]
        })]
      }), (0, i.jsx)("div", {
        className: T.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(d.XZJ, {
            color: u,
            shape: d.XZJ.Shapes.ROUND,
            type: d.XZJ.Types.INVERTED,
            value: P === Z.s8.ALL_MESSAGES,
            onChange: () => ((0, E._m)(t.guild_id, t.id, Z.s8.ALL_MESSAGES), O(false))
          })
        })
      }), (0, i.jsx)("div", {
        className: T.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(d.XZJ, {
            color: u,
            shape: d.XZJ.Shapes.ROUND,
            type: d.XZJ.Types.INVERTED,
            value: P === Z.s8.MENTIONS,
            onChange: () => ((0, E._m)(t.guild_id, t.id, Z.s8.MENTIONS), O(false))
          })
        })
      }), (0, i.jsx)("div", {
        className: T.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(d.XZJ, {
            color: u,
            shape: d.XZJ.Shapes.ROUND,
            type: d.XZJ.Types.INVERTED,
            value: P === Z.s8.NOTHING,
            onChange: () => ((0, E._m)(t.guild_id, t.id, Z.s8.NOTHING), O(false))
          })
        })
      }), (0, i.jsx)("div", {
        className: T.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(d.XZJ, {
            onClick: e => {
              (0, c.vq)(e, () => (0, i.jsx)(d.v2r, {
                navId: "ChannelNotificationCustomSettingsItems",
                "aria-label": L.intl.string(L.t.kMdneX),
                onClose: () => {},
                onSelect: () => {},
                children: (0, m.T5)(t, () => O(false))
              }))
            },
            color: u,
            shape: d.XZJ.Shapes.ROUND,
            type: d.XZJ.Types.INVERTED,
            value: P === Z.s8.CUSTOM,
            onChange: () => O(true)
          })
        })
      }), (0, i.jsx)(h.Z, {
        onClick: () => (0, E.JK)(t.guild_id, t.id),
        className: T.removeButton
      })]
    })
  })
}