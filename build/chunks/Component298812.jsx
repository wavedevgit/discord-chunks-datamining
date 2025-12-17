/** Chunk was on 15076 **/
/** chunk id: 298812, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk986955 = require("./986955.js");
let M = Chunk473749.forwardRef(function(e, t) {
  let {
    guildId: n
  } = e, [l, r] = s.useState(null), o = (0, a.Wu)([j.Z, N.ZP], () => (0, O.OD)(N.ZP.getChannelOverrides(n), {
    ignoreMute: true,
    ignoreUnreadSetting: false,
    ignoreNotificationSetting: false
  }).map(e => j.Z.getChannel(e)).filter(S.lm)), d = (0, a.e7)([v.Z], () => v.Z.getCategories(n)), u = o.map((e, t) => (0, i.jsxs)("div", {
    className: P.channelRow,
    children: [(0, i.jsx)(T, {
      channel: e,
      categories: d,
      autoFocus: l === e.id
    }, e.id), t < o.length - 1 && (0, i.jsx)("div", {
      className: P.separator
    })]
  }, e.id));
  return (0, i.jsxs)("div", {
    ref: t,
    children: [(0, i.jsx)(_.Z, {
      guildId: n,
      onSelected: e => {
        if (null != o.find(t => t.id === e)) return;
        let t = j.Z.getChannel(e);
        null != t && (h.Z.updateChannelOverrideSettings(n, e, {
          muted: false,
          message_notifications: N.ZP.resolvedMessageNotifications(t),
          flags: (0, Z.pq)(N.ZP.getChannelIdFlags(t.guild_id, t.id), N.ZP.resolveUnreadSetting(t))
        }, E.ZB.OverrideCreated), r(e))
      }
    }), u.length > 0 && (0, i.jsxs)("div", {
      className: P.table,
      children: [(0, i.jsxs)("div", {
        className: P.row,
        children: [(0, i.jsx)(c.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: P.rowName,
          children: A.intl.string(A.t.uShwWv)
        }), (0, i.jsx)(c.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: P.rowOption,
          children: A.intl.string(A.t.hZrr6k)
        }), (0, i.jsx)(c.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: P.rowOption,
          children: A.intl.string(A.t.y59NJm)
        }), (0, i.jsx)(c.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: P.rowOption,
          children: A.intl.string(A.t["pGn/bJ"])
        }), (0, i.jsx)(c.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: P.rowOption,
          children: A.intl.string(A.t["32yow9"])
        })]
      }), u.length > 0 && (0, i.jsx)("div", {
        className: P.channels,
        children: u
      })]
    })]
  })
});

function T(e) {
  let {
    channel: t,
    categories: n,
    autoFocus: l
  } = e, h = (0, c.dQu)(o.Z.unsafe_rawColors.GREEN_360).hex(), v = (0, a.e7)([j.Z], () => j.Z.getChannel(null == t ? true : t.parent_id)), N = (0, C.ZA)(t), S = s.useRef(null), [E, O] = s.useState(false);
  if (s.useEffect(() => {
      if (l) {
        var e;
        null == (e = S.current) || e.scrollIntoView({
          behavior: "smooth"
        })
      }
    }, []), null == t) return null;
  let Z = A.intl.string(A.t.uIzfCE),
    _ = (0, p.KS)(t);
  t.type === y.d4z.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id ? Z = A.intl.formatToPlainString(A.t["2KzH89"], {
    num: null != n[t.id] ? n[t.id].length : 0
  }) : null != v && (Z = A.intl.formatToPlainString(A.t.L1zJgb, {
    categoryName: (0, m.F6)(v, b.default, f.Z)
  }));
  let M = E ? L.s8.CUSTOM : N.preset;
  return (0, i.jsx)("div", {
    ref: S,
    children: (0, i.jsxs)("div", {
      className: r()(P.row, P.channel),
      children: [(0, i.jsxs)("div", {
        className: r()(P.rowName, P.modColor),
        children: [null != _ ? (0, i.jsx)(_, {
          size: "custom",
          color: "currentColor",
          height: 20,
          width: 20,
          className: P.icon
        }) : null, (0, i.jsxs)("div", {
          children: [(0, i.jsx)(c.Text, {
            variant: "text-md/semibold",
            className: P.modColor,
            children: (0, m.F6)(t, b.default, f.Z)
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
            value: M === L.s8.ALL_MESSAGES,
            onChange: () => ((0, C._m)(t.guild_id, t.id, L.s8.ALL_MESSAGES), O(false))
          })
        })
      }), (0, i.jsx)("div", {
        className: P.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(d.$q, {
            color: h,
            shape: d.zV.ROUND,
            type: d.M0.INVERTED,
            value: M === L.s8.MENTIONS,
            onChange: () => ((0, C._m)(t.guild_id, t.id, L.s8.MENTIONS), O(false))
          })
        })
      }), (0, i.jsx)("div", {
        className: P.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(d.$q, {
            color: h,
            shape: d.zV.ROUND,
            type: d.M0.INVERTED,
            value: M === L.s8.NOTHING,
            onChange: () => ((0, C._m)(t.guild_id, t.id, L.s8.NOTHING), O(false))
          })
        })
      }), (0, i.jsx)("div", {
        className: P.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(d.$q, {
            onClick: e => {
              (0, u.vq)(e, () => (0, i.jsx)(c.v2r, {
                navId: "ChannelNotificationCustomSettingsItems",
                "aria-label": A.intl.string(A.t.kMdneQ),
                onClose: () => {},
                onSelect: () => {},
                children: (0, x.T5)(t, () => O(false))
              }))
            },
            color: h,
            shape: d.zV.ROUND,
            type: d.M0.INVERTED,
            value: M === L.s8.CUSTOM,
            onChange: () => O(true)
          })
        })
      }), (0, i.jsx)(g.Z, {
        onClick: () => (0, C.JK)(t.guild_id, t.id),
        className: P.removeButton
      })]
    })
  })
}