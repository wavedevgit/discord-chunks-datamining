/** Chunk was on 64152 **/
/** chunk id: 690804, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  FortniteUpsellModal: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk213609 = require("./213609.js"),
  Chunk728345 = require("./728345.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk625771 = require("./625771.js");

function h(t) {
  let {
    onClose: n,
    transitionState: i
  } = t, {
    data: h
  } = (0, l.IX)("1402418703554842694"), {
    data: g
  } = (0, l.IX)("1417968406048673952"), j = null != h ? x.ZP.getApplicationIconURL({
    id: h.id,
    icon: h.icon
  }) : null, b = null != g ? x.ZP.getApplicationIconURL({
    id: g.id,
    icon: g.icon
  }) : null;
  return (0, c.Z)({
    name: s.ImpressionNames.FORTNITE_GET_GAME_MODAL,
    type: s.ImpressionTypes.MODAL
  }), (0, e.jsxs)(a.IX, {
    size: "lg",
    transitionState: i,
    onClose: n,
    children: [(0, e.jsx)(a.xBx, {
      graphic: true,
      gradientColor: "purple",
      title: p.intl.string(p.t.xREzoa),
      titleTextVariant: "heading-xl/semibold",
      subtitle: p.intl.string(p.t.va4ap6),
      alignCenter: true
    }), (0, e.jsx)(a.fef, {
      children: (0, e.jsxs)("div", {
        className: u.body,
        children: [(0, e.jsxs)("div", {
          className: u.container,
          children: [(0, e.jsxs)("div", {
            className: u.text,
            children: [(0, e.jsx)("div", {
              className: u.iconContainer,
              children: null != j && (0, e.jsx)("div", {
                className: u.icon,
                style: {
                  backgroundImage: "url(".concat(j, ")")
                }
              })
            }), (0, e.jsxs)("div", {
              children: [(0, e.jsx)(r.Text, {
                color: "text-primary",
                variant: "text-md/semibold",
                children: p.intl.string(p.t["9g594e"])
              }), (0, e.jsx)(r.Text, {
                color: "text-secondary",
                variant: "text-md/normal",
                children: p.intl.string(p.t.Vye3DQ)
              })]
            })]
          }), (0, e.jsx)(r.Button, {
            icon: () => (0, e.jsx)(r.Gr1, {}),
            iconPosition: "end",
            onClick: () => {
              d.default.track(m.rMx.FORTNITE_DOWNLOAD_CLICKED), (0, o.Z)("https://fn.gg/GetGame")
            },
            text: p.intl.string(p.t.ZDtJ19),
            variant: "secondary"
          })]
        }), (0, e.jsxs)("div", {
          className: u.container,
          children: [(0, e.jsxs)("div", {
            className: u.text,
            children: [(0, e.jsx)("div", {
              className: u.iconContainer,
              children: null != b && (0, e.jsx)("div", {
                className: u.icon,
                style: {
                  backgroundImage: "url(".concat(b, ")")
                }
              })
            }), (0, e.jsxs)("div", {
              children: [(0, e.jsx)(r.Text, {
                color: "text-primary",
                variant: "text-md/semibold",
                children: p.intl.string(p.t.kOjtOD)
              }), (0, e.jsx)(r.Text, {
                color: "text-secondary",
                variant: "text-md/normal",
                children: p.intl.string(p.t.X3zPLy)
              })]
            })]
          }), (0, e.jsx)(r.Button, {
            icon: () => (0, e.jsx)(r.Gr1, {}),
            iconPosition: "end",
            onClick: () => {
              d.default.track(m.rMx.FORTNITE_GFNJOIN_CLICKED), (0, o.Z)("https://www.nvidia.com/en-us/geforce-now/discord?ncid=partn-874834")
            },
            text: p.intl.string(p.t.ycbXPz),
            variant: "secondary"
          })]
        })]
      })
    })]
  })
}