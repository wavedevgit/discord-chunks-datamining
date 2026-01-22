/** Chunk was on 86746 **/
/** chunk id: 230801, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => _,
  u: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk878314 = require("./878314.jsx"),
  Chunk819638 = require("./819638.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk308349 = require("./308349.js");
let C = .5 > Math.random();

function g(t) {
  let {
    onClose: e,
    onBack: n,
    onCreationIntentChosen: g,
    hasFooter: _ = true
  } = t, L = (0, i.jsx)(a.$n, {
    "data-migration-pending": true,
    className: p.Gv,
    look: a.$n.Looks.BLANK,
    size: a.$n.Sizes.MIN,
    onClick: n,
    children: m.intl.string(m.t["13/7kX"])
  });

  function u(t) {
    s.default.track(o.HAw.GUILD_CREATION_INTENT_SELECTED, {
      skipped: null == t,
      is_community: t === c.IR.COMMUNITY
    }), g(t)
  }
  return {
    content: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(l.rQ0, {
        "data-migration-pending": true,
        direction: r.A.Direction.VERTICAL,
        className: p.wx,
        separator: false,
        children: [(0, i.jsx)(l.Heading, {
          className: p.DD,
          variant: "heading-xl/semibold",
          children: m.intl.string(m.t.f3MvGS)
        }), (0, i.jsx)(l.Text, {
          className: p.VA,
          color: "text-default",
          variant: "text-md/normal",
          children: m.intl.string(m.t.nOzc7w)
        }), null != e && (0, i.jsx)(l.s_y, {
          "data-migration-pending": true,
          className: p.b,
          onClick: e
        })]
      }), (0, i.jsxs)(l.$mQ, {
        "data-migration-pending": true,
        className: p.f9,
        children: [C ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(d.A, {
            icon: l.i5z,
            message: m.intl.string(m.t.uE7zcu),
            onClick: () => u(c.IR.FRIENDS)
          }), (0, i.jsx)(d.A, {
            icon: l.EU0,
            message: m.intl.string(m.t.h9Q1lG),
            onClick: () => u(c.IR.COMMUNITY)
          })]
        }) : (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(d.A, {
            icon: l.EU0,
            message: m.intl.string(m.t.h9Q1lG),
            onClick: () => u(c.IR.COMMUNITY)
          }), (0, i.jsx)(d.A, {
            icon: l.i5z,
            message: m.intl.string(m.t.uE7zcu),
            onClick: () => u(c.IR.FRIENDS)
          })]
        }), (0, i.jsx)(l.Text, {
          className: p.iv,
          color: "text-default",
          variant: "text-sm/normal",
          children: m.intl.format(m.t["SMc+Gz"], {
            onSkip: () => u(null)
          })
        })]
      }), _ && (0, i.jsx)(l.jlY, {
        "data-migration-pending": true,
        justify: r.A.Justify.BETWEEN,
        children: L
      })]
    }),
    footer: L
  }
}

function _(t) {
  let {
    content: e
  } = g(t);
  return e
}