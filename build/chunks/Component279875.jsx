/** Chunk was on 43889 **/
/** chunk id: 279875, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  GuildSubscriptionSelectionModal: () => x
}), require("./388685.js"), require("./290780.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk270144 = require("./270144.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk250117 = require("./250117.js");

function x(t) {
  let {
    transitionState: n,
    onClose: e,
    sku: x,
    onSelect: p,
    currentGuildId: h
  } = t, [g, f] = l.useState(), {
    guilds: j,
    isFetching: v
  } = (0, o.CR)(x.applicationId, x.id, true), I = l.useMemo(() => {
    if (!v && null != h) return j.findIndex(t => {
      let {
        id: n
      } = t;
      return n === h
    }) >= 0
  }, [h, j, v]);
  l.useLayoutEffect(() => {
    I && f(h)
  }, [h, I]);
  let b = l.useMemo(() => {
    let t = [];
    for (let n of j) {
      let e = {
        value: n.id,
        label: n.name
      };
      I && n.id === h ? t.unshift(e) : t.push(e)
    }
    return t
  }, [h, j, I]);
  return (0, i.jsx)(r.Modal, {
    title: d.intl.string(d.t["xgtI/K"]),
    subtitle: d.intl.string(d.t.rAXXxN),
    transitionState: n,
    onClose: e,
    actions: [{
      variant: "secondary",
      text: d.intl.string(d.t.cpT0Cq),
      onClick: e
    }, {
      variant: "primary",
      text: d.intl.string(d.t["cY+Oob"]),
      disabled: null == g,
      onClick: function() {
        null != g && (p(g), e())
      }
    }],
    children: v ? (0, i.jsx)(s.$jN, {
      type: s.$jN.Type.PULSING_ELLIPSIS,
      className: c.spinner
    }) : b.length > 0 ? (0, i.jsx)(s.VcW, {
      "aria-label": d.intl.string(d.t["5qyruI"]),
      options: b,
      value: g,
      onChange: f,
      renderOptionPrefix: t => {
        let n = null == t ? true : t.value,
          e = null != n ? u.Z.getGuild(n) : null;
        return null == e ? null : (0, i.jsx)(a.Z, {
          guild: e,
          size: a.Z.Sizes.MINI
        })
      },
      renderOptionLabel: t => {
        let {
          label: n,
          value: e
        } = t;
        return (0, i.jsxs)("div", {
          children: [(0, i.jsx)(s.Text, {
            variant: "text-md/normal",
            children: n
          }), e === h && (0, i.jsx)(s.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            children: d.intl.string(d.t.RjtuAI)
          })]
        })
      }
    }) : (0, i.jsx)(s.Wn, {
      messageType: s.QYI.WARNING,
      children: (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: d.intl.string(d.t.M2TbbK)
      })
    })
  })
}