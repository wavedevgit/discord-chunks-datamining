/** Chunk was on 30476 **/
/** chunk id: 399143, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  GuildSubscriptionSelectionModal: () => x
}), require("./896048.js"), require("./667532.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk444550 = require("./444550.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk915043 = require("./915043.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk281819 = require("./281819.js");

function x(t) {
  let {
    transitionState: e,
    onClose: n,
    sku: x,
    onSelect: g,
    currentGuildId: h
  } = t, [m, v] = l.useState(), {
    guilds: b,
    isFetching: f
  } = (0, d.sD)(x.applicationId, x.id, true), y = l.useMemo(() => {
    if (!f && null != h) return b.findIndex(t => {
      let {
        id: e
      } = t;
      return e === h
    }) >= 0
  }, [h, b, f]);
  l.useLayoutEffect(() => {
    y && v(h)
  }, [h, y]);
  let I = l.useMemo(() => {
    let t = [];
    for (let e of b) {
      let n = {
        value: e.id,
        label: e.name
      };
      y && e.id === h ? t.unshift(n) : t.push(n)
    }
    return t
  }, [h, b, y]);
  return (0, i.jsx)(r.Modal, {
    title: c.intl.string(c.t["xgtI/K"]),
    subtitle: c.intl.string(c.t.rAXXxN),
    transitionState: e,
    onClose: n,
    actions: [{
      variant: "secondary",
      text: c.intl.string(c.t.cpT0Cq),
      onClick: n
    }, {
      variant: "primary",
      text: c.intl.string(c.t["cY+Oob"]),
      disabled: null == m,
      onClick: function() {
        null != m && (g(m), n())
      }
    }],
    children: f ? (0, i.jsx)(a.y$y, {
      type: a.y$y.Type.PULSING_ELLIPSIS,
      className: p.u
    }) : I.length > 0 ? (0, i.jsx)(s.p, {
      "aria-label": c.intl.string(c.t["5qyruI"]),
      options: I,
      value: m,
      onChange: v,
      renderOptionPrefix: t => {
        let e = null == t ? true : t.value,
          n = null != e ? o.A.getGuild(e) : null;
        return null == n ? null : (0, i.jsx)(u.A, {
          guild: n,
          size: u.A.Sizes.MINI
        })
      },
      renderOptionLabel: t => {
        let {
          label: e,
          value: n
        } = t;
        return (0, i.jsxs)("div", {
          children: [(0, i.jsx)(a.Text, {
            variant: "text-md/normal",
            children: e
          }), n === h && (0, i.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "text-default",
            children: c.intl.string(c.t.RjtuAI)
          })]
        })
      },
      "data-migration-pending": true
    }) : (0, i.jsx)(a.po8, {
      messageType: a.YCn.WARNING,
      children: (0, i.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: c.intl.string(c.t.M2TbbK)
      })
    })
  })
}