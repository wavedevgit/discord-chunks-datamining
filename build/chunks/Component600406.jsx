/** Chunk was on 36182 **/
/** chunk id: 600406, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  PlaygroundEmbed: () => v
}), require("./35282.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk756715 = require("./756715.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk51251 = require("./51251.js"),
  Chunk159691 = require("./159691.js"),
  Chunk37234 = require("./37234.js"),
  Chunk456116 = require("./456116.js"),
  Chunk594174 = require("./594174.js"),
  Chunk997612 = require("./997612.jsx"),
  Chunk316686 = require("./316686.js"),
  Chunk981631 = require("./981631.js"),
  Chunk567 = require("./567.js");
let j = {
  mana: {
    name: "Mana",
    icon: Chunk657707.hh5,
    config: Chunk51251.g,
    layer: Chunk981631.S9g.MANA_PLAYGROUND,
    defaultSubtitle: "Explore the Mana Design System"
  },
  revenue: {
    name: "Revenue",
    icon: Chunk657707.uMN,
    config: Chunk456116.$L,
    layer: Chunk981631.S9g.REVENUE_PLAYGROUND,
    defaultSubtitle: "Explore Revenue Components"
  }
};

function v(e) {
  var t;
  let n = (0, i.e7)([p.default], () => {
      let e = p.default.getCurrentUser();
      return (null == e ? true : e.isStaff()) || (null == e ? true : e.isStaffPersonal())
    }),
    o = l.useMemo(() => (function(e) {
      let t = e.match(y.u);
      return null == t || null == t[1] ? null : t[1].toLowerCase()
    })(e.url), [e.url]),
    s = null != o ? j[o] : null,
    b = l.useMemo(() => {
      if (null == s) return;
      let t = function(e) {
        var t;
        let n = e.match(y.u);
        return null == n ? null : null != (t = n[3]) ? t : null
      }(e.url);
      for (let e of s.config.collections) {
        let n = e.groups.find(e => e.stories.some(e => e.id === t));
        if (null != n) return n.stories.find(e => e.id === t)
      }
    }, [e.url, s]),
    m = null != (t = null == b ? true : b.name) ? t : null != s ? "".concat(s.name, " Playground") : "Playground",
    v = null != b && null != b.docs ? (0, r.jsx)(c.Anchor, {
      href: b.docs,
      children: "Documentation"
    }) : null != s ? s.defaultSubtitle : "Explore Components",
    O = l.useCallback(() => {
      if (null == s) return;
      let e = s.config;
      if (null != b) {
        for (let t of e.collections)
          if (t.groups.some(e => e.stories.some(e => e.id === b.id))) {
            g.$.setState({
              selectedCollection: t.id,
              selectedStory: b.id
            });
            break
          }
      } else g.$.setState({
        selectedCollection: null,
        selectedStory: null
      });
      (0, f.jN)(s.layer)
    }, [b, s]);
  if (!n || null == s) return null;
  let _ = s.icon;
  return (0, r.jsx)("div", {
    className: h.root,
    "data-has-story": null != b,
    children: (0, r.jsxs)(a.Kqy, {
      direction: null == b ? "vertical" : "horizontal",
      align: null == b ? "start" : "center",
      gap: 12,
      justify: null == b ? "end" : "space-between",
      children: [(0, r.jsx)("div", {
        className: h.header,
        children: (0, r.jsxs)(a.Kqy, {
          direction: "horizontal",
          align: "start",
          gap: 8,
          children: [(0, r.jsx)(_, {
            size: "lg"
          }), (0, r.jsxs)(a.Kqy, {
            direction: "vertical",
            gap: 0,
            children: [(0, r.jsx)(u.x, {
              variant: "text-md/semibold",
              children: m
            }), (0, r.jsx)(u.x, {
              variant: "text-sm/normal",
              children: v
            })]
          })]
        })
      }), (0, r.jsx)(d.zxk, {
        size: "sm",
        onClick: O,
        text: "Open Playground",
        fullWidth: null == b
      })]
    })
  })
}