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
let P = Chunk647438.forwardRef(function(e, t) {
  let {
    guildId: n
  } = e, [l, r] = s.useState(null), o = (0, a.Wu)([v.Z, N.ZP], () => (0, O.OD)(N.ZP.getChannelOverrides(n), {
    ignoreMute: true,
    ignoreUnreadSetting: false,
    ignoreNotificationSetting: false
  }).map(e => v.Z.getChannel(e)).filter(S.lm)), d = (0, a.e7)([j.Z], () => j.Z.getCategories(n)), u = o.map((e, t) => (0, i.jsxs)("div", {
    className: A.channelRow,
    children: [(0, i.jsx)(w, {
      channel: e,
      categories: d,
      autoFocus: l === e.id
    }, e.id), t < o.length - 1 && (0, i.jsx)("div", {
      className: A.separator
    })]
  }, e.id));
  return (0, i.jsxs)("div", {
    ref: t,
    children: [(0, i.jsx)(_.Z, {
      guildId: n,
      onSelected: e => {
        if (null != o.find(t => t.id === e)) return;
        let t = v.Z.getChannel(e);
        null != t && (h.Z.updateChannelOverrideSettings(n, e, {
          muted: false,
          message_notifications: N.ZP.resolvedMessageNotifications(t),
          flags: (0, C.pq)(N.ZP.getChannelIdFlags(t.guild_id, t.id), N.ZP.resolveUnreadSetting(t))
        }, E.ZB.OverrideCreated), r(e))
      }
    }), u.length > 0 && (0, i.jsxs)("div", {
      className: A.table,
      children: [(0, i.jsxs)("div", {
        className: A.row,
        children: [(0, i.jsx)(c.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: A.rowName,
          children: M.intl.string(M.t.uShwWv)
        }), (0, i.jsx)(c.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: A.rowOption,
          children: M.intl.string(M.t.hZrr6k)
        }), (0, i.jsx)(c.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: A.rowOption,
          children: M.intl.string(M.t.y59NJm)
        }), (0, i.jsx)(c.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: A.rowOption,
          children: M.intl.string(M.t["pGn/bJ"])
        }), (0, i.jsx)(c.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: A.rowOption,
          children: M.intl.string(M.t["32yow9"])
        })]
      }), u.length > 0 && (0, i.jsx)("div", {
        className: A.channels,
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
  } = e, h = (0, c.dQu)(o.Z.unsafe_rawColors.GREEN_360).hex(), j = (0, a.e7)([v.Z], () => v.Z.getChannel(null == t ? true : t.parent_id)), N = (0, Z.ZA)(t), S = s.useRef(null), [E, O] = s.useState(false);
  if (s.useEffect(() => {
      if (l) {
        var e;
        null == (e = S.current) || e.scrollIntoView({
          behavior: "smooth"
        })
      }
    }, []), null == t) return null;
  let C = M.intl.string(M.t.uIzfCE),
    _ = (0, p.KS)(t);
  t.type === y.d4z.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id ? C = M.intl.formatToPlainString(M.t["2KzH89"], {
    num: null != n[t.id] ? n[t.id].length : 0
  }) : null != j && (C = M.intl.formatToPlainString(M.t.L1zJgb, {
    categoryName: (0, m.F6)(j, b.default, f.Z)
  }));
  let P = E ? L.s8.CUSTOM : N.preset;
  return (0, i.jsx)("div", {
    ref: S,
    children: (0, i.jsxs)("div", {
      className: r()(A.row, A.channel),
      children: [(0, i.jsxs)("div", {
        className: r()(A.rowName, A.modColor),
        children: [null != _ ? (0, i.jsx)(_, {
          size: "custom",
          color: "currentColor",
          height: 20,
          width: 20,
          className: A.icon
        }) : null, (0, i.jsxs)("div", {
          children: [(0, i.jsx)(c.Text, {
            variant: "text-md/semibold",
            className: A.modColor,
            children: (0, m.F6)(t, b.default, f.Z)
          }), (0, i.jsx)(c.Text, {
            variant: "text-xs/medium",
            className: A.modColor,
            children: C
          })]
        })]
      }), (0, i.jsx)("div", {
        className: A.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(d.$q, {
            color: h,
            shape: d.zV.ROUND,
            type: d.M0.INVERTED,
            value: P === L.s8.ALL_MESSAGES,
            onChange: () => ((0, Z._m)(t.guild_id, t.id, L.s8.ALL_MESSAGES), O(false))
          })
        })
      }), (0, i.jsx)("div", {
        className: A.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(d.$q, {
            color: h,
            shape: d.zV.ROUND,
            type: d.M0.INVERTED,
            value: P === L.s8.MENTIONS,
            onChange: () => ((0, Z._m)(t.guild_id, t.id, L.s8.MENTIONS), O(false))
          })
        })
      }), (0, i.jsx)("div", {
        className: A.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(d.$q, {
            color: h,
            shape: d.zV.ROUND,
            type: d.M0.INVERTED,
            value: P === L.s8.NOTHING,
            onChange: () => ((0, Z._m)(t.guild_id, t.id, L.s8.NOTHING), O(false))
          })
        })
      }), (0, i.jsx)("div", {
        className: A.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(d.$q, {
            onClick: e => {
              (0, u.vq)(e, () => (0, i.jsx)(c.v2r, {
                navId: "ChannelNotificationCustomSettingsItems",
                "aria-label": M.intl.string(M.t.kMdneQ),
                onClose: () => {},
                onSelect: () => {},
                children: (0, x.T5)(t, () => O(false))
              }))
            },
            color: h,
            shape: d.zV.ROUND,
            type: d.M0.INVERTED,
            value: P === L.s8.CUSTOM,
            onChange: () => O(true)
          })
        })
      }), (0, i.jsx)(g.Z, {
        onClick: () => (0, Z.JK)(t.guild_id, t.id),
        className: A.removeButton
      })]
    })
  })
}