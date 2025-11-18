/** Chunk was on 42483 **/
/** chunk id: 382086, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => g,
  v: () => u
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
  Chunk804283 = require("./804283.js");
let p = .5 > Math.random();

function u(t) {
  let {
    onClose: n,
    onBack: e,
    onCreationIntentChosen: u,
    hasFooter: g = true
  } = t, _ = (0, i.jsx)(l.zx, {
    className: m.backButton,
    look: l.zx.Looks.BLANK,
    size: l.zx.Sizes.MIN,
    onClick: e,
    children: C.intl.string(C.t["13/7kX"])
  });

  function L(t) {
    r.default.track(o.rMx.GUILD_CREATION_INTENT_SELECTED, {
      skipped: null == t,
      is_community: t === c.lr.COMMUNITY
    }), u(t)
  }
  return {
    content: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(a.xBx, {
        direction: s.Z.Direction.VERTICAL,
        className: m.header,
        separator: false,
        children: [(0, i.jsx)(a.Heading, {
          className: m.title,
          variant: "heading-xl/semibold",
          children: C.intl.string(C.t.f3MvGS)
        }), (0, i.jsx)(a.Text, {
          className: m.subtitle,
          color: "header-secondary",
          variant: "text-md/normal",
          children: C.intl.string(C.t.nOzc7w)
        }), null != n && (0, i.jsx)(a.olH, {
          className: m.closeButton,
          onClick: n
        })]
      }), (0, i.jsxs)(a.hzk, {
        className: m.optionsList,
        children: [p ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(d.Z, {
            icon: a.Nye,
            message: C.intl.string(C.t.uE7zcu),
            onClick: () => L(c.lr.FRIENDS)
          }), (0, i.jsx)(d.Z, {
            icon: a.q3d,
            message: C.intl.string(C.t.h9Q1lG),
            onClick: () => L(c.lr.COMMUNITY)
          })]
        }) : (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(d.Z, {
            icon: a.q3d,
            message: C.intl.string(C.t.h9Q1lG),
            onClick: () => L(c.lr.COMMUNITY)
          }), (0, i.jsx)(d.Z, {
            icon: a.Nye,
            message: C.intl.string(C.t.uE7zcu),
            onClick: () => L(c.lr.FRIENDS)
          })]
        }), (0, i.jsx)(a.Text, {
          className: m.skip,
          color: "header-secondary",
          variant: "text-sm/normal",
          children: C.intl.format(C.t["SMc+Gz"], {
            onSkip: () => L(null)
          })
        })]
      }), g && (0, i.jsx)(a.mzw, {
        justify: s.Z.Justify.BETWEEN,
        children: _
      })]
    }),
    footer: _
  }
}

function g(t) {
  let {
    content: n
  } = u(t);
  return n
}