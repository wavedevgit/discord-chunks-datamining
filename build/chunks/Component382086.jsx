/** Chunk was on 42483 **/
/** chunk id: 382086, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => u,
  v: () => C
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk109983 = require("./109983.jsx"),
  Chunk675999 = require("./675999.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk548190 = require("./548190.js");
let g = .5 > Math.random();

function C(t) {
  let {
    onClose: n,
    onBack: e,
    onCreationIntentChosen: C,
    hasFooter: u = true
  } = t, _ = (0, i.jsx)(l.zx, {
    "data-migration-pending": true,
    className: p.backButton,
    look: l.zx.Looks.BLANK,
    size: l.zx.Sizes.MIN,
    onClick: e,
    children: m.intl.string(m.t["13/7kX"])
  });

  function L(t) {
    r.default.track(c.rMx.GUILD_CREATION_INTENT_SELECTED, {
      skipped: null == t,
      is_community: t === o.lr.COMMUNITY
    }), C(t)
  }
  return {
    content: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(a.xBx, {
        "data-migration-pending": true,
        direction: s.Z.Direction.VERTICAL,
        className: p.header,
        separator: false,
        children: [(0, i.jsx)(a.Heading, {
          className: p.title,
          variant: "heading-xl/semibold",
          children: m.intl.string(m.t.f3MvGS)
        }), (0, i.jsx)(a.Text, {
          className: p.subtitle,
          color: "text-default",
          variant: "text-md/normal",
          children: m.intl.string(m.t.nOzc7w)
        }), null != n && (0, i.jsx)(a.olH, {
          "data-migration-pending": true,
          className: p.closeButton,
          onClick: n
        })]
      }), (0, i.jsxs)(a.hzk, {
        "data-migration-pending": true,
        className: p.optionsList,
        children: [g ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(d.Z, {
            icon: a.Nye,
            message: m.intl.string(m.t.uE7zcu),
            onClick: () => L(o.lr.FRIENDS)
          }), (0, i.jsx)(d.Z, {
            icon: a.q3d,
            message: m.intl.string(m.t.h9Q1lG),
            onClick: () => L(o.lr.COMMUNITY)
          })]
        }) : (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(d.Z, {
            icon: a.q3d,
            message: m.intl.string(m.t.h9Q1lG),
            onClick: () => L(o.lr.COMMUNITY)
          }), (0, i.jsx)(d.Z, {
            icon: a.Nye,
            message: m.intl.string(m.t.uE7zcu),
            onClick: () => L(o.lr.FRIENDS)
          })]
        }), (0, i.jsx)(a.Text, {
          className: p.skip,
          color: "text-default",
          variant: "text-sm/normal",
          children: m.intl.format(m.t["SMc+Gz"], {
            onSkip: () => L(null)
          })
        })]
      }), u && (0, i.jsx)(a.mzw, {
        "data-migration-pending": true,
        justify: s.Z.Justify.BETWEEN,
        children: _
      })]
    }),
    footer: _
  }
}

function u(t) {
  let {
    content: n
  } = C(t);
  return n
}