/** Chunk was on 9414 **/
/** chunk id: 491302, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./35282.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
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
  Chunk546151 = require("./546151.js");

function h(e) {
  let {
    webhook: t,
    editedWebhook: n,
    channelOptions: h,
    isExpanded: x,
    errors: j,
    onToggleExpand: v
  } = e, O = r.useMemo(() => {
    var e;
    return null != (e = t.avatar) && /^data:/.test(e) ? e : (0, m.ov)({
      id: t.id,
      avatar: e,
      discriminator: p.fo$
    })
  }, [t]), y = r.useCallback(() => {
    (0, a.Z)({
      title: g.intl.formatToPlainString(g.t.gBKqZ0, {
        name: t.name
      }),
      subtitle: g.intl.string(g.t.zO9jrD),
      confirmText: g.intl.string(g.t.CMy0Cj),
      onConfirm: () => {
        d.Z.delete(t.guild_id, t.id).catch(() => {
          s.Z.show({
            title: g.intl.string(g.t.LpbaFV),
            body: g.intl.string(g.t["/4TwKf"])
          })
        })
      }
    })
  }, [t.guild_id, t.id, t.name]), C = [];
  null != t.source_channel && null != t.source_guild && (C.push({
    icon: o.MqZ,
    text: t.source_channel.name
  }), C.push({
    text: (0, i.jsx)("span", {
      className: f.guildSource,
      children: g.intl.format(g.t["H/jJ6R"], {
        guildHook: () => (0, i.jsx)("span", {
          className: f.sourceName,
          children: t.source_guild.name
        }, t.id)
      })
    }, "guild-source")
  }));
  let N = null;
  return x && null != n && (N = (0, i.jsxs)("div", {
    className: f.body,
    children: [(0, i.jsx)(o.izJ, {
      className: f.topDivider
    }), (0, i.jsxs)(o.Kqy, {
      gap: 24,
      children: [(0, i.jsxs)(o.Kqy, {
        direction: "horizontal",
        gap: 16,
        children: [(0, i.jsx)(o.oil, {
          label: g.intl.string(g.t.I1o5gV),
          value: n.name,
          onChange: e => {
            c.Z.updateWebhook({
              name: e
            })
          },
          maxLength: 80,
          error: j.name
        }), (0, i.jsx)(o.PhF, {
          label: g.intl.string(g.t["4TuWfc"]),
          value: n.channel_id,
          options: h,
          onSelectionChange: e => {
            c.Z.updateWebhook({
              channelId: e
            })
          },
          selectionMode: "single",
          fullWidth: true
        })]
      }), (0, i.jsx)(o.izJ, {
        className: f.bottomDivider
      }), (0, i.jsx)(l.Avr, {
        onClick: y,
        size: "sm",
        variant: "critical",
        text: g.intl.string(g.t.CMy0Cj)
      })]
    })]
  })), (0, i.jsx)(o.Zbd, {
    editable: true,
    className: f.card,
    children: (0, i.jsxs)(o.Kqy, {
      children: [(0, i.jsx)(o.P3F, {
        className: f.header,
        "aria-expanded": x,
        onClick: v,
        children: (0, i.jsxs)(o.Kqy, {
          direction: "horizontal",
          justify: "space-between",
          align: "center",
          children: [(0, i.jsx)(b.Z, {
            name: t.name,
            imageSrc: O,
            details: C
          }), (0, i.jsx)(u.Z, {
            className: f.expandIcon,
            expanded: x,
            "aria-hidden": true
          })]
        })
      }), N]
    })
  })
}