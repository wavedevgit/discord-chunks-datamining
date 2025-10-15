/** Chunk was on 43889 **/
/** chunk id: 279875, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  GuildSubscriptionSelectionModal: () => p
}), require("./388685.js"), require("./290780.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk270144 = require("./270144.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk250117 = require("./250117.js");

function p(t) {
  let {
    transitionState: n,
    onClose: e,
    sku: p,
    onSelect: x,
    currentGuildId: h
  } = t, [g, f] = l.useState(), {
    guilds: j,
    isFetching: v
  } = (0, o.CR)(p.applicationId, p.id, true), m = l.useMemo(() => {
    if (!v && null != h) return j.findIndex(t => {
      let {
        id: n
      } = t;
      return n === h
    }) >= 0
  }, [h, j, v]);
  l.useLayoutEffect(() => {
    m && f(h)
  }, [h, m]);
  let b = l.useMemo(() => {
    let t = [];
    for (let n of j) {
      let e = {
        value: n.id,
        label: n.name
      };
      m && n.id === h ? t.unshift(e) : t.push(e)
    }
    return t
  }, [h, j, m]);
  return (0, i.jsx)(r.Modal, {
    title: d.intl.string(d.t["xgtI/P"]),
    subtitle: d.intl.string(d.t.rAXXxM),
    transitionState: n,
    onClose: e,
    actions: [{
      variant: "secondary",
      text: d.intl.string(d.t.cpT0Cg),
      onClick: e
    }, {
      variant: "primary",
      text: d.intl.string(d.t["cY+Ooa"]),
      disabled: null == g,
      onClick: function() {
        null != g && (x(g), e())
      }
    }],
    children: v ? (0, i.jsx)(s.$jN, {
      type: s.$jN.Type.PULSING_ELLIPSIS,
      className: c.spinner
    }) : b.length > 0 ? (0, i.jsx)(s.VcW, {
      "aria-label": d.intl.string(d.t["5qyruL"]),
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
            color: "header-secondary",
            children: d.intl.string(d.t.RjtuAA)
          })]
        })
      }
    }) : (0, i.jsx)(s.Wn, {
      messageType: s.QYI.WARNING,
      children: (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: d.intl.string(d.t.M2TbbG)
      })
    })
  })
}