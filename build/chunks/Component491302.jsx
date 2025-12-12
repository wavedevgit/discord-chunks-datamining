/** Chunk was on 86736 **/
/** chunk id: 491302, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./35282.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk248514 = require("./248514.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk139387 = require("./139387.js"),
  Chunk308063 = require("./308063.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk486199 = require("./486199.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk941678 = require("./941678.js");

function x(e) {
  let {
    webhook: t,
    editedWebhook: n,
    channelOptions: x,
    isExpanded: j,
    errors: v,
    onToggleExpand: O
  } = e, y = r.useMemo(() => {
    var e;
    return null != (e = t.avatar) && /^data:/.test(e) ? e : (0, m.ov)({
      id: t.id,
      avatar: e,
      discriminator: g.fo$
    })
  }, [t]), _ = r.useCallback(() => {
    (0, o.Z)({
      title: f.intl.formatToPlainString(f.t.gBKqZ0, {
        name: t.name
      }),
      subtitle: f.intl.string(f.t.zO9jrD),
      confirmText: f.intl.string(f.t.CMy0Cj),
      onConfirm: () => {
        u.Z.delete(t.guild_id, t.id).catch(() => {
          c.Z.show({
            title: f.intl.string(f.t.LpbaFV),
            body: f.intl.string(f.t["/4TwKf"])
          })
        })
      }
    })
  }, [t.guild_id, t.id, t.name]), C = [];
  null != t.source_channel && null != t.source_guild && (C.push({
    icon: s.MqZ,
    text: t.source_channel.name
  }), C.push({
    text: (0, i.jsx)("span", {
      className: h.guildSource,
      children: f.intl.format(f.t["H/jJ6R"], {
        guildHook: () => (0, i.jsx)("span", {
          className: h.sourceName,
          children: t.source_guild.name
        }, t.id)
      })
    }, "guild-source")
  }));
  let N = null;
  return j && null != n && (N = (0, i.jsxs)("div", {
    className: h.body,
    children: [(0, i.jsx)(s.izJ, {
      className: h.topDivider
    }), (0, i.jsxs)(s.Kqy, {
      gap: 24,
      children: [(0, i.jsxs)(s.Kqy, {
        direction: "horizontal",
        gap: 16,
        children: [(0, i.jsx)(s.oil, {
          label: f.intl.string(f.t.I1o5gV),
          value: n.name,
          onChange: e => {
            d.Z.updateWebhook({
              name: e
            })
          },
          maxLength: 80,
          error: v.name
        }), (0, i.jsx)(a.y6, {
          label: f.intl.string(f.t["4TuWfc"]),
          value: n.channel_id,
          options: x,
          onChange: e => {
            d.Z.updateWebhook({
              channelId: e
            })
          }
        })]
      }), (0, i.jsx)(s.izJ, {
        className: h.bottomDivider
      }), (0, i.jsx)(l.Avr, {
        onClick: _,
        size: "sm",
        variant: "critical",
        text: f.intl.string(f.t.CMy0Cj)
      })]
    })]
  })), (0, i.jsx)(s.Zbd, {
    editable: true,
    className: h.card,
    children: (0, i.jsxs)(s.Kqy, {
      children: [(0, i.jsx)(s.P3F, {
        className: h.header,
        "aria-expanded": j,
        onClick: O,
        children: (0, i.jsxs)(s.Kqy, {
          direction: "horizontal",
          justify: "space-between",
          align: "center",
          children: [(0, i.jsx)(b.Z, {
            name: t.name,
            imageSrc: y,
            details: C
          }), (0, i.jsx)(p.Z, {
            className: h.expandIcon,
            expanded: j,
            "aria-hidden": true
          })]
        })
      }), N]
    })
  })
}