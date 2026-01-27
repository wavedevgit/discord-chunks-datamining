/** Chunk was on 82220 **/
/** chunk id: 889186, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => A
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

function A(e) {
  let {
    transitionState: n,
    onClose: t,
    parentId: l
  } = e, u = (0, d.bG)([f.Ay], () => f.Ay.getFlattenedGuildIds()[0]), [s, h] = i.useState(u), [v, m] = i.useState(false);
  return (0, r.jsx)(a.Modal, {
    title: p.intl.string(p.t["4wcdE/"]),
    actions: [],
    transitionState: n,
    onClose: t,
    input: (0, r.jsx)(o.v, {
      guildId: s,
      onChange: function(e) {
        null != e && h(e.id)
      }
    }),
    actionBarInput: (0, r.jsx)(c.dOG, {
      checked: v,
      onChange: e => m(e),
      label: p.intl.string(p.t.UwOLJO)
    }),
    children: (0, r.jsx)(_, {
      guildId: s,
      hideMutedChannels: v,
      parentId: l
    })
  })
}

function _(e) {
  let {
    guildId: n,
    hideMutedChannels: t,
    parentId: a
  } = e, c = (0, d.bG)([s.A], () => s.A.getCategories(n)), u = (0, g.A)(c), o = i.useRef(null);
  return i.useEffect(() => {
    var e;
    null == o || null == (e = o.current) || e.scroll({
      top: 0
    })
  }, [n]), (0, r.jsx)("div", {
    ref: o,
    children: u.map(e => e.type === l.r.GUILD_CATEGORY ? (0, r.jsx)(b, {
      name: e.name
    }, e.id) : (0, r.jsx)(j, {
      channel: e,
      hideMutedChannels: t,
      parentId: a
    }, e.id))
  })
}

function b(e) {
  let {
    name: n
  } = e;
  return (0, r.jsx)(c.Text, {
    className: x.Fv,
    variant: "eyebrow",
    color: "interactive-text-default",
    children: n
  })
}

function j(e) {
  let {
    channel: n,
    hideMutedChannels: t,
    parentId: i
  } = e, l = (0, m.Af)(n.id);
  if ((0, d.bG)([h.Ay], () => h.Ay.isChannelMuted(n.guild_id, n.id)) && t) return null;
  let a = (0, u.gU)(n);
  return (0, r.jsxs)("div", {
    className: x.WG,
    children: [(0, r.jsxs)("div", {
      className: x.HA,
      children: [null != a && (0, r.jsx)("div", {
        className: x.uM,
        children: (0, r.jsx)(a, {
          className: x.p,
          size: "custom",
          color: "currentColor",
          height: 20,
          width: 20
        })
      }), (0, r.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "interactive-text-default",
        children: n.name
      })]
    }), null != l ? (0, r.jsx)(k, {
      channelId: n.id
    }) : (0, r.jsx)(C, {
      channelId: n.id,
      parentId: i
    })]
  }, n.id)
}

function C(e) {
  let {
    channelId: n,
    parentId: t
  } = e;
  return (0, r.jsx)(c.Button, {
    variant: "primary",
    size: "sm",
    text: p.intl.string(p.t.OYkgVk),
    onClick: function() {
      (0, v.Jz)(n, t)
    }
  })
}

function k(e) {
  let {
    channelId: n
  } = e;
  return (0, r.jsx)(c.Button, {
    variant: "secondary",
    size: "sm",
    text: p.intl.string(p.t.N86XcP),
    onClick: function() {
      (0, v.i_)(n)
    }
  })
}