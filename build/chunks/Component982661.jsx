/** Chunk was on 61061 **/
/** chunk id: 982661, original params: l,e,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  PlaygroundEmbed: () => S
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk756715 = require("./756715.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk159691 = require("./159691.js"),
  Chunk37234 = require("./37234.js"),
  Chunk594174 = require("./594174.js"),
  Chunk653592 = require("./653592.jsx"),
  Chunk156142 = require("./156142.jsx"),
  Chunk811364 = require("./811364.js"),
  Chunk981631 = require("./981631.js"),
  Chunk828338 = require("./828338.js");
let v = {
    mana: {
      name: "Mana",
      icon: Chunk657707.PotionIcon,
      defaultSubtitle: "Explore the Mana Design System"
    },
    revenue: {
      name: "Revenue",
      icon: Chunk657707.BillIcon,
      defaultSubtitle: "Explore Revenue Components"
    },
    void: {
      name: "Void",
      icon: Chunk657707.PotionIcon,
      defaultSubtitle: "Explore the Void Design System"
    }
  },
  y = null;

function S(l) {
  var e, n;
  let S = (0, i.e7)([f.default], () => {
      let l = f.default.getCurrentUser();
      return (null == l ? true : l.isStaff()) || (null == l ? true : l.isStaffPersonal())
    }),
    C = o.useMemo(() => (function(l) {
      let e = l.match(p.u);
      return null == e || null == e[1] ? null : e[1].toLowerCase()
    })(l.url), [l.url]),
    P = null != C ? (function() {
      if (null == y)
        for (let l of (y = new Map, h.componentPlaygroundConfigs))
          for (let e of l.collections) y.set(e.id.toLowerCase(), e);
      return y
    })().get(C) : null,
    b = null != C ? v[C] : null,
    j = o.useMemo(() => {
      if (null == P) return;
      let e = function(l) {
        var e;
        let n = l.match(p.u);
        return null == n ? null : null != (e = n[3]) ? e : null
      }(l.url);
      if (null != e)
        for (let l of P.groups) {
          let n = l.stories.find(l => l.id === e);
          if (null != n) return n
        }
    }, [l.url, P]),
    k = null != (e = null == j ? true : j.name) ? e : null != P ? "".concat(P.name, " Playground") : "Playground",
    w = null != j && null != j.docs ? (0, t.jsx)(a.Anchor, {
      href: j.docs,
      children: "Documentation"
    }) : null != b ? b.defaultSubtitle : "Explore Components",
    E = o.useCallback(() => {
      null != P && (null != j ? m.PlaygroundStore.setState({
        selectedCollection: P.id,
        selectedStory: j.id
      }) : m.PlaygroundStore.setState({
        selectedCollection: P.id,
        selectedStory: null
      }), (0, c.jN)(x.S9g.COMPONENT_PLAYGROUND))
    }, [j, P]);
  if (!S || null == P) return null;
  let M = null != (n = null == b ? true : b.icon) ? n : u.PotionIcon;
  return (0, t.jsx)("div", {
    className: g.root,
    "data-has-story": null != j,
    children: (0, t.jsxs)(r.Kqy, {
      direction: null == j ? "vertical" : "horizontal",
      align: null == j ? "start" : "center",
      gap: 12,
      justify: null == j ? "end" : "space-between",
      children: [(0, t.jsx)("div", {
        className: g.header,
        children: (0, t.jsxs)(r.Kqy, {
          direction: "horizontal",
          align: "start",
          gap: 8,
          children: [(0, t.jsx)(M, {
            size: "lg"
          }), (0, t.jsxs)(r.Kqy, {
            direction: "vertical",
            gap: 0,
            children: [(0, t.jsx)(s.x, {
              variant: "text-md/semibold",
              children: k
            }), (0, t.jsx)(s.x, {
              variant: "text-sm/normal",
              children: w
            })]
          })]
        })
      }), (0, t.jsx)(d.zxk, {
        size: "sm",
        onClick: E,
        text: "Open Playground",
        fullWidth: null == j
      })]
    })
  })
}