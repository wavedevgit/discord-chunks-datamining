/** Chunk was on 1272 **/
/** chunk id: 920644, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk703656 = require("./703656.js"),
  Chunk63063 = require("./63063.js"),
  Chunk758119 = require("./758119.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk754912 = require("./754912.js");

function f() {
  (0, Chunk758119.qV)(), (0, Chunk703656.uL)(Chunk981631.Z5c.LOGIN, {
    source: "existing_user_age_gate_underage"
  })
}

function h(e) {
  let {
    underageMessage: t,
    transitionState: o
  } = e, c = (0, a.Dt)();
  return (0, r.jsxs)(l.Y0X, {
    transitionState: o,
    size: l.CgR.SMALL,
    "aria-labelledby": c,
    impression: {
      impressionName: i.ImpressionNames.USER_AGE_GATE_UNDERAGE,
      impressionProperties: {
        existing_user: true
      }
    },
    parentComponent: "ExistingUserAgeGateUnderage",
    children: [(0, r.jsx)(l.hzk, {
      children: (0, r.jsxs)("div", {
        className: p.container,
        children: [(0, r.jsx)("img", {
          alt: "",
          src: n(231443),
          className: p.img
        }), (0, r.jsx)(l.X6q, {
          variant: "heading-xl/semibold",
          className: p.title,
          id: c,
          children: d.intl.string(d.t["NR/zrK"])
        }), (0, r.jsx)(l.Text, {
          color: "header-secondary",
          className: p.subtitle,
          variant: "text-sm/normal",
          children: d.intl.format(d.t.b0QzXV, {
            underageMessage: null != t ? t : d.intl.string(d.t.WqEH4O),
            helpURL: s.Z.getArticleURL(u.BhN.AGE_GATE)
          })
        }), (0, r.jsx)(l.Text, {
          color: "header-secondary",
          className: p.subtitle,
          variant: "text-sm/normal",
          children: d.intl.format(d.t["3axQdH"], {
            days: 30
          })
        })]
      })
    }), (0, r.jsx)(l.mzw, {
      children: (0, r.jsx)(l.zxk, {
        variant: "primary",
        size: "sm",
        text: d.intl.string(d.t.szzQ6O),
        fullWidth: true,
        onClick: f
      })
    })]
  })
}