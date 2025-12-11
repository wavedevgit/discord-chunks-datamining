/** Chunk was on 42483 **/
/** chunk id: 382086, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => u,
  v: () => g
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
let C = .5 > Math.random();

function g(t) {
  let {
    onClose: n,
    onBack: e,
    onCreationIntentChosen: g,
    hasFooter: u = true
  } = t, _ = (0, i.jsx)(a.zx, {
    "data-migration-pending": true,
    className: p.backButton,
    look: a.zx.Looks.BLANK,
    size: a.zx.Sizes.MIN,
    onClick: e,
    children: m.intl.string(m.t["13/7kX"])
  });

  function L(t) {
    r.default.track(c.rMx.GUILD_CREATION_INTENT_SELECTED, {
      skipped: null == t,
      is_community: t === o.lr.COMMUNITY
    }), g(t)
  }
  return {
    content: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(l.xBx, {
        "data-migration-pending": true,
        direction: s.Z.Direction.VERTICAL,
        className: p.header,
        separator: false,
        children: [(0, i.jsx)(l.Heading, {
          className: p.title,
          variant: "heading-xl/semibold",
          children: m.intl.string(m.t.f3MvGS)
        }), (0, i.jsx)(l.Text, {
          className: p.subtitle,
          color: "text-default",
          variant: "text-md/normal",
          children: m.intl.string(m.t.nOzc7w)
        }), null != n && (0, i.jsx)(l.olH, {
          "data-migration-pending": true,
          className: p.closeButton,
          onClick: n
        })]
      }), (0, i.jsxs)(l.hzk, {
        "data-migration-pending": true,
        className: p.optionsList,
        children: [C ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(d.Z, {
            icon: l.Nye,
            message: m.intl.string(m.t.uE7zcu),
            onClick: () => L(o.lr.FRIENDS)
          }), (0, i.jsx)(d.Z, {
            icon: l.q3d,
            message: m.intl.string(m.t.h9Q1lG),
            onClick: () => L(o.lr.COMMUNITY)
          })]
        }) : (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(d.Z, {
            icon: l.q3d,
            message: m.intl.string(m.t.h9Q1lG),
            onClick: () => L(o.lr.COMMUNITY)
          }), (0, i.jsx)(d.Z, {
            icon: l.Nye,
            message: m.intl.string(m.t.uE7zcu),
            onClick: () => L(o.lr.FRIENDS)
          })]
        }), (0, i.jsx)(l.Text, {
          className: p.skip,
          color: "text-default",
          variant: "text-sm/normal",
          children: m.intl.format(m.t["SMc+Gz"], {
            onSkip: () => L(null)
          })
        })]
      }), u && (0, i.jsx)(l.mzw, {
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
  } = g(t);
  return n
}