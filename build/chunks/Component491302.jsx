/** Chunk was on 47463 **/
/** chunk id: 491302, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./35282.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk139387 = require("./139387.js"),
  Chunk308063 = require("./308063.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk259580 = require("./259580.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk486199 = require("./486199.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk941678 = require("./941678.js");

function h(e) {
  let {
    webhook: t,
    editedWebhook: n,
    channelOptions: h,
    isExpanded: x,
    errors: j,
    onToggleExpand: v
  } = e, y = r.useMemo(() => {
    var e;
    return null != (e = t.avatar) && /^data:/.test(e) ? e : (0, p.ov)({
      id: t.id,
      avatar: e,
      discriminator: b.fo$
    })
  }, [t]), O = r.useCallback(() => {
    (0, a.h7j)(e => {
      var n, r;
      return (0, i.jsx)(a.ConfirmModal, (n = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, e), r = r = {
        header: g.intl.formatToPlainString(g.t.gBKqZ2, {
          name: t.name
        }),
        confirmText: g.intl.string(g.t.CMy0Cg),
        cancelText: g.intl.string(g.t["ETE/oK"]),
        onConfirm: () => {
          c.Z.delete(t.guild_id, t.id).catch(() => {
            o.Z.show({
              title: g.intl.string(g.t.LpbaFR),
              body: g.intl.string(g.t["/4TwKS"])
            })
          })
        },
        children: (0, i.jsx)(a.Text, {
          variant: "text-md/normal",
          children: g.intl.string(g.t.zO9jrK)
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n))
    })
  }, [t.guild_id, t.id, t.name]), _ = [];
  null != t.source_channel && null != t.source_guild && (_.push({
    icon: a.MqZ,
    text: t.source_channel.name
  }), _.push({
    text: (0, i.jsx)("span", {
      className: f.guildSource,
      children: g.intl.format(g.t["H/jJ6e"], {
        guildHook: () => (0, i.jsx)("span", {
          className: f.sourceName,
          children: t.source_guild.name
        }, t.id)
      })
    }, "guild-source")
  }));
  let C = null;
  return x && null != n && (C = (0, i.jsxs)("div", {
    className: f.body,
    children: [(0, i.jsx)(a.$i$, {
      className: f.topDivider
    }), (0, i.jsx)(d.Z, {
      children: (0, i.jsxs)(d.Z, {
        direction: d.Z.Direction.VERTICAL,
        children: [(0, i.jsxs)(d.Z, {
          children: [(0, i.jsx)(d.Z.Child, {
            basis: "50%",
            children: (0, i.jsx)(a.xJW, {
              title: g.intl.string(g.t.I1o5gY),
              children: (0, i.jsx)(a.oil, {
                value: n.name,
                onChange: e => {
                  s.Z.updateWebhook({
                    name: e
                  })
                },
                maxLength: 80,
                error: j.name
              })
            })
          }), (0, i.jsx)(d.Z.Child, {
            basis: "50%",
            children: (0, i.jsx)(a.xJW, {
              title: g.intl.string(g.t["4TuWfX"]),
              children: (0, i.jsx)(a.q4e, {
                value: n.channel_id,
                options: h,
                onChange: e => {
                  s.Z.updateWebhook({
                    channelId: e
                  })
                }
              })
            })
          })]
        }), (0, i.jsx)(a.$i$, {
          className: f.bottomDivider
        }), (0, i.jsx)(d.Z, {
          children: (0, i.jsx)(l.zx, {
            onClick: O,
            size: l.zx.Sizes.SMALL,
            color: l.zx.Colors.RED,
            look: l.zx.Looks.LINK,
            className: f.removeButton,
            children: g.intl.string(g.t.CMy0Cg)
          })
        })]
      })
    })]
  })), (0, i.jsx)(a.Zbd, {
    editable: true,
    className: f.card,
    children: (0, i.jsxs)(d.Z, {
      direction: d.Z.Direction.VERTICAL,
      children: [(0, i.jsx)(a.P3F, {
        className: f.header,
        "aria-expanded": x,
        onClick: v,
        children: (0, i.jsxs)(d.Z, {
          align: d.Z.Align.CENTER,
          children: [(0, i.jsx)(m.Z, {
            name: t.name,
            imageSrc: y,
            detailsClassName: f.__invalid_description,
            details: _
          }), (0, i.jsx)(u.Z, {
            className: f.expandIcon,
            expanded: x,
            "aria-hidden": true
          })]
        })
      }), C]
    })
  })
}