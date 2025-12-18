/** Chunk was on 15076 **/
/** chunk id: 298812, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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
let A = Chunk473749.forwardRef(function(e, t) {
  let {
    guildId: n
  } = e, [l, r] = s.useState(null), d = (0, a.Wu)([x.Z, f.ZP], () => (0, S.OD)(f.ZP.getChannelOverrides(n), {
    ignoreMute: true,
    ignoreUnreadSetting: false,
    ignoreNotificationSetting: false
  }).map(e => x.Z.getChannel(e)).filter(b.lm)), u = (0, a.e7)([p.Z], () => p.Z.getCategories(n)), h = d.map((e, t) => (0, i.jsxs)("div", {
    className: y.channelRow,
    children: [(0, i.jsx)(P, {
      channel: e,
      categories: u,
      autoFocus: l === e.id
    }, e.id), t < d.length - 1 && (0, i.jsx)("div", {
      className: y.separator
    })]
  }, e.id));
  return (0, i.jsxs)("div", {
    ref: t,
    children: [(0, i.jsx)(Z.Z, {
      guildId: n,
      onSelected: e => {
        if (null != d.find(t => t.id === e)) return;
        let t = x.Z.getChannel(e);
        null != t && (c.Z.updateChannelOverrideSettings(n, e, {
          muted: false,
          message_notifications: f.ZP.resolvedMessageNotifications(t),
          flags: (0, C.pq)(f.ZP.getChannelIdFlags(t.guild_id, t.id), f.ZP.resolveUnreadSetting(t))
        }, N.ZB.OverrideCreated), r(e))
      }
    }), h.length > 0 && (0, i.jsxs)("div", {
      className: y.table,
      children: [(0, i.jsxs)("div", {
        className: y.row,
        children: [(0, i.jsx)(o.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: y.rowName,
          children: _.intl.string(_.t.uShwWv)
        }), (0, i.jsx)(o.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: y.rowOption,
          children: _.intl.string(_.t.hZrr6k)
        }), (0, i.jsx)(o.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: y.rowOption,
          children: _.intl.string(_.t.y59NJm)
        }), (0, i.jsx)(o.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: y.rowOption,
          children: _.intl.string(_.t["pGn/bJ"])
        }), (0, i.jsx)(o.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: y.rowOption,
          children: _.intl.string(_.t["32yow9"])
        })]
      }), h.length > 0 && (0, i.jsx)("div", {
        className: y.channels,
        children: h
      })]
    })]
  })
});

function P(e) {
  let {
    channel: t,
    categories: n,
    autoFocus: l
  } = e, c = (0, a.e7)([x.Z], () => x.Z.getChannel(null == t ? true : t.parent_id)), p = (0, E.ZA)(t), f = s.useRef(null), b = s.useRef(null), [N, S] = s.useState(false);
  if (s.useEffect(() => {
      if (l) {
        var e;
        null == (e = f.current) || e.scrollIntoView({
          behavior: "smooth"
        })
      }
    }, []), null == t) return null;
  let C = _.intl.string(_.t.uIzfCE),
    Z = (0, m.KS)(t);
  t.type === L.d4z.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id ? C = _.intl.formatToPlainString(_.t["2KzH89"], {
    num: null != n[t.id] ? n[t.id].length : 0
  }) : null != c && (C = _.intl.formatToPlainString(_.t.L1zJgb, {
    categoryName: (0, h.F6)(c, v.default, j.Z)
  }));
  let A = N ? O.s8.CUSTOM : p.preset;
  return (0, i.jsx)("div", {
    ref: f,
    children: (0, i.jsxs)("div", {
      className: r()(y.row, y.channel),
      children: [(0, i.jsxs)("div", {
        className: r()(y.rowName, y.modColor),
        children: [null != Z ? (0, i.jsx)(Z, {
          size: "custom",
          color: "currentColor",
          height: 20,
          width: 20,
          className: y.icon
        }) : null, (0, i.jsxs)("div", {
          children: [(0, i.jsx)(o.Text, {
            variant: "text-md/semibold",
            className: y.modColor,
            children: (0, h.F6)(t, v.default, j.Z)
          }), (0, i.jsx)(o.Text, {
            variant: "text-xs/medium",
            className: y.modColor,
            children: C
          })]
        })]
      }), (0, i.jsx)("div", {
        className: y.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(o.Checkbox, {
            checked: A === O.s8.ALL_MESSAGES,
            label: "",
            onChange: () => {
              (0, E._m)(t.guild_id, t.id, O.s8.ALL_MESSAGES), S(false)
            }
          })
        })
      }), (0, i.jsx)("div", {
        className: y.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(o.Checkbox, {
            checked: A === O.s8.MENTIONS,
            label: "",
            onChange: () => {
              (0, E._m)(t.guild_id, t.id, O.s8.MENTIONS), S(false)
            }
          })
        })
      }), (0, i.jsx)("div", {
        className: y.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(o.Checkbox, {
            checked: A === O.s8.NOTHING,
            label: "",
            onChange: () => {
              (0, E._m)(t.guild_id, t.id, O.s8.NOTHING), S(false)
            }
          })
        })
      }), (0, i.jsx)("div", {
        className: y.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)("span", {
            ref: b,
            style: {
              display: "inline-flex"
            },
            children: (0, i.jsx)(o.Checkbox, {
              checked: A === O.s8.CUSTOM,
              label: "",
              onChange: () => {
                S(true);
                let e = b.current;
                null != e && (0, d.vq)({
                  stopPropagation: () => {},
                  preventDefault: () => {},
                  currentTarget: e,
                  target: e
                }, () => (0, i.jsx)(o.v2r, {
                  navId: "ChannelNotificationCustomSettingsItems",
                  "aria-label": _.intl.string(_.t.kMdneQ),
                  onClose: () => {},
                  onSelect: () => {},
                  children: (0, g.T5)(t, () => S(false))
                }))
              }
            })
          })
        })
      }), (0, i.jsx)(u.Z, {
        onClick: () => (0, E.JK)(t.guild_id, t.id),
        className: y.removeButton
      })]
    })
  })
}