/** Chunk was on 64152 **/
/** chunk id: 690804, original params: n,t,i (module,exports,require) **/
require.d(exports, {
  FortniteUpsellModal: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk257465 = require("./257465.jsx"),
  Chunk103866 = require("./103866.jsx"),
  Chunk37148 = require("./37148.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk728345 = require("./728345.js"),
  Chunk768581 = require("./768581.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk625771 = require("./625771.js");

function h(n) {
  let {
    onClose: t,
    transitionState: i
  } = n, {
    data: h
  } = (0, r.IX)("1402418703554842694"), {
    data: m
  } = (0, r.IX)("1417968406048673952"), j = null != h ? l.ZP.getApplicationIconURL({
    id: h.id,
    icon: h.icon
  }) : null, b = null != m ? l.ZP.getApplicationIconURL({
    id: m.id,
    icon: m.icon
  }) : null;
  return (0, e.jsxs)(o.IX, {
    size: "lg",
    transitionState: i,
    onClose: t,
    children: [(0, e.jsx)(a.x, {
      graphic: true,
      gradientColor: "purple",
      title: d.intl.string(d.t.xREzoa),
      titleTextVariant: "heading-xl/semibold",
      subtitle: d.intl.string(d.t.va4ap6),
      alignCenter: true
    }), (0, e.jsx)(s.f, {
      children: (0, e.jsxs)("div", {
        className: x.body,
        children: [(0, e.jsxs)("div", {
          className: x.container,
          children: [(0, e.jsxs)("div", {
            className: x.text,
            children: [(0, e.jsx)("div", {
              className: x.iconContainer,
              children: null != j && (0, e.jsx)("div", {
                className: x.icon,
                style: {
                  backgroundImage: "url(".concat(j, ")")
                }
              })
            }), (0, e.jsxs)("div", {
              children: [(0, e.jsx)(c.Text, {
                color: "text-primary",
                variant: "text-md/semibold",
                children: d.intl.string(d.t["9g594e"])
              }), (0, e.jsx)(c.Text, {
                color: "text-secondary",
                variant: "text-md/normal",
                children: d.intl.string(d.t.Vye3DQ)
              })]
            })]
          }), (0, e.jsx)(c.zxk, {
            icon: () => (0, e.jsx)(c.Gr1, {}),
            iconPosition: "end",
            onClick: () => location.href = "https://www.fortnite.com/download",
            text: d.intl.string(d.t.ZDtJ19),
            variant: "secondary"
          })]
        }), (0, e.jsxs)("div", {
          className: x.container,
          children: [(0, e.jsxs)("div", {
            className: x.text,
            children: [(0, e.jsx)("div", {
              className: x.iconContainer,
              children: null != b && (0, e.jsx)("div", {
                className: x.icon,
                style: {
                  backgroundImage: "url(".concat(b, ")")
                }
              })
            }), (0, e.jsxs)("div", {
              children: [(0, e.jsx)(c.Text, {
                color: "text-primary",
                variant: "text-md/semibold",
                children: d.intl.string(d.t.kOjtOD)
              }), (0, e.jsx)(c.Text, {
                color: "text-secondary",
                variant: "text-md/normal",
                children: d.intl.string(d.t.X3zPLy)
              })]
            })]
          }), (0, e.jsx)(c.zxk, {
            icon: () => (0, e.jsx)(c.Gr1, {}),
            iconPosition: "end",
            onClick: () => location.href = "https://www.nvidia.com/en-us/geforce-now/#product-matrix",
            text: d.intl.string(d.t.ycbXPz),
            variant: "secondary"
          })]
        })]
      })
    })]
  })
}