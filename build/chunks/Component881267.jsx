/** Chunk was on 67696 **/
/** chunk id: 881267, original params: l,e,n (module,exports,require) **/
require.d(exports, {
  PlaygroundEmbed: () => y
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk934551 = require("./934551.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk349288 = require("./349288.jsx"),
  Chunk571356 = require("./571356.js"),
  Chunk732955 = require("./732955.js"),
  Chunk398590 = require("./398590.js"),
  Chunk287809 = require("./287809.js"),
  Chunk944771 = require("./944771.jsx"),
  Chunk3258 = require("./3258.jsx"),
  Chunk836156 = require("./836156.js"),
  Chunk652215 = require("./652215.js"),
  Chunk565003 = require("./565003.js");
let v = {
    mana: {
      name: "Mana",
      icon: Chunk934551.PotionIcon,
      defaultSubtitle: "Explore the Mana Design System"
    },
    revenue: {
      name: "Revenue",
      icon: Chunk934551.BillIcon,
      defaultSubtitle: "Explore Revenue Components"
    },
    void: {
      name: "Void",
      icon: Chunk934551.PotionIcon,
      defaultSubtitle: "Explore the Void Design System"
    }
  },
  S = null;

function y(l) {
  var e, n;
  let y = (0, r.bG)([f.default], () => {
      let l = f.default.getCurrentUser();
      return (null == l ? true : l.isStaff()) || (null == l ? true : l.isStaffPersonal())
    }),
    C = o.useMemo(() => {
      let e;
      return null == (e = l.url.match(p.S)) || null == e[1] ? null : e[1].toLowerCase()
    }, [l.url]),
    P = null != C ? (function() {
      if (null == S)
        for (let l of (S = new Map, h.componentPlaygroundConfigs))
          for (let e of l.collections) S.set(e.id.toLowerCase(), e);
      return S
    })().get(C) : null,
    b = null != C ? v[C] : null,
    j = o.useMemo(() => {
      var e;
      let n;
      if (null == P) return;
      let t = null == (n = l.url.match(p.S)) ? null : null != (e = n[3]) ? e : null;
      if (null != t)
        for (let l of P.groups) {
          let e = l.stories.find(l => l.id === t);
          if (null != e) return e
        }
    }, [l.url, P]),
    w = null != (e = null == j ? true : j.name) ? e : null != P ? "".concat(P.name, " Playground") : "Playground",
    E = null != j && null != j.docs ? (0, t.jsx)(a.Anchor, {
      href: j.docs,
      children: "Documentation"
    }) : null != b ? b.defaultSubtitle : "Explore Components",
    z = o.useCallback(() => {
      null != P && (null != j ? m.PlaygroundStore.setState({
        selectedCollection: P.id,
        selectedStory: j.id
      }) : m.PlaygroundStore.setState({
        selectedCollection: P.id,
        selectedStory: null
      }), (0, c.id)(g.zgK.COMPONENT_PLAYGROUND))
    }, [j, P]);
  if (!y || null == P) return null;
  let _ = null != (n = null == b ? true : b.icon) ? n : u.PotionIcon;
  return (0, t.jsx)("div", {
    className: x.z,
    "data-has-story": null != j,
    children: (0, t.jsxs)(i.BJc, {
      direction: null == j ? "vertical" : "horizontal",
      align: null == j ? "start" : "center",
      gap: 12,
      justify: null == j ? "end" : "space-between",
      children: [(0, t.jsx)("div", {
        className: x.w,
        children: (0, t.jsxs)(i.BJc, {
          direction: "horizontal",
          align: "start",
          gap: 8,
          children: [(0, t.jsx)(_, {
            size: "lg"
          }), (0, t.jsxs)(i.BJc, {
            direction: "vertical",
            gap: 0,
            children: [(0, t.jsx)(s.E, {
              variant: "text-md/semibold",
              children: w
            }), (0, t.jsx)(s.E, {
              variant: "text-sm/normal",
              children: E
            })]
          })]
        })
      }), (0, t.jsx)(d.$nd, {
        size: "sm",
        onClick: z,
        text: "Open Playground",
        fullWidth: null == j
      })]
    })
  })
}