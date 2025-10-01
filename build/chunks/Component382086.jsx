/** Chunk was on 42483 **/
/** chunk id: 382086, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => _,
  v: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk109983 = require("./109983.jsx"),
  Chunk675999 = require("./675999.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk804283 = require("./804283.js");
let p = .5 > Math.random();

function u(t) {
  let {
    onClose: n,
    onBack: e,
    onCreationIntentChosen: u,
    hasFooter: _ = true
  } = t, L = (0, i.jsx)(l.zx, {
    className: C.backButton,
    look: l.zx.Looks.BLANK,
    size: l.zx.Sizes.MIN,
    onClick: e,
    children: m.intl.string(m.t["13/7kZ"])
  });

  function g(t) {
    r.default.track(o.rMx.GUILD_CREATION_INTENT_SELECTED, {
      skipped: null == t,
      is_community: t === c.lr.COMMUNITY
    }), u(t)
  }
  return {
    content: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(a.xBx, {
        direction: s.Z.Direction.VERTICAL,
        className: C.header,
        separator: false,
        children: [(0, i.jsx)(a.X6q, {
          className: C.title,
          variant: "heading-xl/semibold",
          children: m.intl.string(m.t.f3MvGR)
        }), (0, i.jsx)(a.Text, {
          className: C.subtitle,
          color: "header-secondary",
          variant: "text-md/normal",
          children: m.intl.string(m.t["nOzc7+"])
        }), null != n && (0, i.jsx)(a.olH, {
          className: C.closeButton,
          onClick: n
        })]
      }), (0, i.jsxs)(a.hzk, {
        className: C.optionsList,
        children: [p ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(d.Z, {
            icon: a.Nye,
            message: m.intl.string(m.t.uE7zcn),
            onClick: () => g(c.lr.FRIENDS)
          }), (0, i.jsx)(d.Z, {
            icon: a.q3d,
            message: m.intl.string(m.t.h9Q1lJ),
            onClick: () => g(c.lr.COMMUNITY)
          })]
        }) : (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(d.Z, {
            icon: a.q3d,
            message: m.intl.string(m.t.h9Q1lJ),
            onClick: () => g(c.lr.COMMUNITY)
          }), (0, i.jsx)(d.Z, {
            icon: a.Nye,
            message: m.intl.string(m.t.uE7zcn),
            onClick: () => g(c.lr.FRIENDS)
          })]
        }), (0, i.jsx)(a.Text, {
          className: C.skip,
          color: "header-secondary",
          variant: "text-sm/normal",
          children: m.intl.format(m.t["SMc+Gx"], {
            onSkip: () => g(null)
          })
        })]
      }), _ && (0, i.jsx)(a.mzw, {
        justify: s.Z.Justify.BETWEEN,
        children: L
      })]
    }),
    footer: L
  }
}

function _(t) {
  let {
    content: n
  } = u(t);
  return n
}