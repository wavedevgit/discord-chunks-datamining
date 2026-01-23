/** Chunk was on 82220 **/
/** chunk id: 889186, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk478437 = require("./478437.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk713654 = require("./713654.js"),
  Chunk687021 = require("./687021.jsx"),
  Chunk769765 = require("./769765.js"),
  Chunk711014 = require("./711014.js"),
  Chunk543465 = require("./543465.js"),
  Chunk422258 = require("./422258.js"),
  Chunk93055 = require("./93055.js"),
  Chunk231150 = require("./231150.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk233492 = require("./233492.js");

function m(e) {
  let {
    transitionState: n,
    onClose: t,
    parentId: l
  } = e, u = (0, d.bG)([h.Ay], () => h.Ay.getFlattenedGuildIds()[0]), [o, f] = a.useState(u), [v, A] = a.useState(false);
  return (0, i.jsx)(r.Modal, {
    title: x.intl.string(x.t["4wcdE/"]),
    actions: [],
    transitionState: n,
    onClose: t,
    input: (0, i.jsx)(c.v, {
      guildId: o,
      onChange: function(e) {
        null != e && f(e.id)
      }
    }),
    actionBarInput: (0, i.jsx)(s.dOG, {
      checked: v,
      onChange: e => A(e),
      label: x.intl.string(x.t.UwOLJO)
    }),
    children: (0, i.jsx)(C, {
      guildId: o,
      hideMutedChannels: v,
      parentId: l
    })
  })
}

function C(e) {
  let {
    guildId: n,
    hideMutedChannels: t,
    parentId: r
  } = e, s = (0, d.bG)([o.A], () => o.A.getCategories(n)), u = (0, p.A)(s), c = a.useRef(null);
  return a.useEffect(() => {
    var e;
    null == c || null == (e = c.current) || e.scroll({
      top: 0
    })
  }, [n]), (0, i.jsx)("div", {
    ref: c,
    children: u.map(e => e.type === l.r.GUILD_CATEGORY ? (0, i.jsx)(b, {
      name: e.name
    }, e.id) : (0, i.jsx)(j, {
      channel: e,
      hideMutedChannels: t,
      parentId: r
    }, e.id))
  })
}

function b(e) {
  let {
    name: n
  } = e;
  return (0, i.jsx)(s.Text, {
    className: g.Fv,
    variant: "eyebrow",
    color: "interactive-text-default",
    children: n
  })
}

function j(e) {
  let {
    channel: n,
    hideMutedChannels: t,
    parentId: a
  } = e, l = (0, A.Af)(n.id);
  if ((0, d.bG)([f.Ay], () => f.Ay.isChannelMuted(n.guild_id, n.id)) && t) return null;
  let r = (0, u.gU)(n);
  return (0, i.jsxs)("div", {
    className: g.WG,
    children: [(0, i.jsxs)("div", {
      className: g.HA,
      children: [null != r && (0, i.jsx)("div", {
        className: g.uM,
        children: (0, i.jsx)(r, {
          className: g.p,
          size: "custom",
          color: "currentColor",
          height: 20,
          width: 20
        })
      }), (0, i.jsx)(s.Text, {
        variant: "text-md/medium",
        color: "interactive-text-default",
        children: n.name
      })]
    }), null != l ? (0, i.jsx)(G, {
      channelId: n.id
    }) : (0, i.jsx)(_, {
      channelId: n.id,
      parentId: a
    })]
  }, n.id)
}

function _(e) {
  let {
    channelId: n,
    parentId: t
  } = e;
  return (0, i.jsx)(s.Button, {
    variant: "primary",
    size: "sm",
    text: x.intl.string(x.t.OYkgVk),
    onClick: function() {
      (0, v.Jz)(n, t)
    }
  })
}

function G(e) {
  let {
    channelId: n
  } = e;
  return (0, i.jsx)(s.Button, {
    variant: "secondary",
    size: "sm",
    text: x.intl.string(x.t.N86XcP),
    onClick: function() {
      (0, v.i_)(n)
    }
  })
}