/** Chunk was on 15076 **/
/** chunk id: 298812, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
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
let M = Chunk647438.forwardRef(function(e, t) {
  let {
    guildId: n
  } = e, [l, r] = s.useState(null), o = (0, a.Wu)([p.Z, S.ZP], () => (0, E.OD)(S.ZP.getChannelOverrides(n), {
    ignoreMute: true,
    ignoreUnreadSetting: false,
    ignoreNotificationSetting: false
  }).map(e => p.Z.getChannel(e)).filter(b.lm)), d = (0, a.e7)([j.Z], () => j.Z.getCategories(n)), u = o.map((e, t) => (0, i.jsxs)("div", {
    className: P.channelRow,
    children: [(0, i.jsx)(w, {
      channel: e,
      categories: d,
      autoFocus: l === e.id
    }, e.id), t < o.length - 1 && (0, i.jsx)("div", {
      className: P.separator
    })]
  }, e.id));
  return (0, i.jsxs)("div", {
    ref: t,
    children: [(0, i.jsx)(L.Z, {
      guildId: n,
      onSelected: e => {
        if (null != o.find(t => t.id === e)) return;
        let t = p.Z.getChannel(e);
        null != t && (h.Z.updateChannelOverrideSettings(n, e, {
          muted: false,
          message_notifications: S.ZP.resolvedMessageNotifications(t),
          flags: (0, Z.pq)(S.ZP.getChannelIdFlags(t.guild_id, t.id), S.ZP.resolveUnreadSetting(t))
        }, O.ZB.OverrideCreated), r(e))
      }
    }), u.length > 0 && (0, i.jsxs)("div", {
      className: P.table,
      children: [(0, i.jsxs)("div", {
        className: P.row,
        children: [(0, i.jsx)(c.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: P.rowName,
          children: T.intl.string(T.t.uShwWl)
        }), (0, i.jsx)(c.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: P.rowOption,
          children: T.intl.string(T.t.hZrr6u)
        }), (0, i.jsx)(c.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: P.rowOption,
          children: T.intl.string(T.t.y59NJi)
        }), (0, i.jsx)(c.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: P.rowOption,
          children: T.intl.string(T.t["pGn/bG"])
        }), (0, i.jsx)(c.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: P.rowOption,
          children: T.intl.string(T.t["32yow8"])
        })]
      }), u.length > 0 && (0, i.jsx)("div", {
        className: P.channels,
        children: u
      })]
    })]
  })
});

function w(e) {
  let {
    channel: t,
    categories: n,
    autoFocus: l
  } = e, h = (0, c.dQu)(o.Z.unsafe_rawColors.GREEN_360).hex(), j = (0, a.e7)([p.Z], () => p.Z.getChannel(null == t ? true : t.parent_id)), S = (0, C.ZA)(t), b = s.useRef(null), [O, E] = s.useState(false);
  if (s.useEffect(() => {
      if (l) {
        var e;
        null == (e = b.current) || e.scrollIntoView({
          behavior: "smooth"
        })
      }
    }, []), null == t) return null;
  let Z = T.intl.string(T.t.uIzfCA),
    L = (0, v.KS)(t);
  t.type === y.d4z.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id ? Z = T.intl.formatToPlainString(T.t["2KzH8/"], {
    num: null != n[t.id] ? n[t.id].length : 0
  }) : null != j && (Z = T.intl.formatToPlainString(T.t.L1zJgY, {
    categoryName: (0, m.F6)(j, f.default, N.Z)
  }));
  let M = O ? _.s8.CUSTOM : S.preset;
  return (0, i.jsx)("div", {
    ref: b,
    children: (0, i.jsxs)("div", {
      className: r()(P.row, P.channel),
      children: [(0, i.jsxs)("div", {
        className: r()(P.rowName, P.modColor),
        children: [null != L ? (0, i.jsx)(L, {
          size: "custom",
          color: "currentColor",
          height: 20,
          width: 20,
          className: P.icon
        }) : null, (0, i.jsxs)("div", {
          children: [(0, i.jsx)(c.Text, {
            variant: "text-md/semibold",
            className: P.modColor,
            children: (0, m.F6)(t, f.default, N.Z)
          }), (0, i.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: P.modColor,
            children: Z
          })]
        })]
      }), (0, i.jsx)("div", {
        className: P.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(d.$q, {
            color: h,
            shape: d.zV.ROUND,
            type: d.M0.INVERTED,
            value: M === _.s8.ALL_MESSAGES,
            onChange: () => ((0, C._m)(t.guild_id, t.id, _.s8.ALL_MESSAGES), E(false))
          })
        })
      }), (0, i.jsx)("div", {
        className: P.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(d.$q, {
            color: h,
            shape: d.zV.ROUND,
            type: d.M0.INVERTED,
            value: M === _.s8.MENTIONS,
            onChange: () => ((0, C._m)(t.guild_id, t.id, _.s8.MENTIONS), E(false))
          })
        })
      }), (0, i.jsx)("div", {
        className: P.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(d.$q, {
            color: h,
            shape: d.zV.ROUND,
            type: d.M0.INVERTED,
            value: M === _.s8.NOTHING,
            onChange: () => ((0, C._m)(t.guild_id, t.id, _.s8.NOTHING), E(false))
          })
        })
      }), (0, i.jsx)("div", {
        className: P.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(d.$q, {
            onClick: e => {
              (0, u.vq)(e, () => (0, i.jsx)(c.v2r, {
                navId: "ChannelNotificationCustomSettingsItems",
                "aria-label": T.intl.string(T.t.kMdneX),
                onClose: () => {},
                onSelect: () => {},
                children: (0, x.T5)(t, () => E(false))
              }))
            },
            color: h,
            shape: d.zV.ROUND,
            type: d.M0.INVERTED,
            value: M === _.s8.CUSTOM,
            onChange: () => E(true)
          })
        })
      }), (0, i.jsx)(g.Z, {
        onClick: () => (0, C.JK)(t.guild_id, t.id),
        className: P.removeButton
      })]
    })
  })
}