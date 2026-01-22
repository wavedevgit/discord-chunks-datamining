/** Chunk was on 72165 **/
/** chunk id: 915644, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A,
  C: () => x
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk826673 = require("./826673.js"),
  Chunk367727 = require("./367727.js"),
  Chunk997509 = require("./997509.js"),
  Chunk307879 = require("./307879.jsx"),
  Chunk395504 = require("./395504.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk932726 = require("./932726.js"),
  Chunk529732 = require("./529732.js");

function x(e) {
  return (0, f.Xn)(e) ? 250 : 152
}

function A(e) {
  let {
    guild: t
  } = e, n = (0, f.Xn)(t.id), r = (0, c.JZ)(a.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL), x = n && !r ? a.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : a.M.CHANNEL_BROWSER_NUX;
  (0, d.Vh)(x);
  let A = n ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      children: [(0, l.jsx)(s.Heading, {
        className: g.R_,
        color: "always-white",
        variant: "heading-lg/semibold",
        children: p.intl.string(p.t.AalzkJ)
      }), (0, l.jsx)(s.Text, {
        className: g.h_,
        variant: "text-md/normal",
        color: "always-white",
        children: p.intl.string(p.t.CXh95Z)
      }), (0, l.jsx)(s.Button, {
        variant: "overlay-primary",
        onClick: () => {
          o.A.open(t.id, b.BEX.ONBOARDING), (0, c.Dr)(x, {
            dismissAction: h.i.PRIMARY
          })
        },
        text: p.intl.string(p.t["+OtO4e"])
      })]
    }), (0, l.jsx)(u.M, {
      isTooltip: true
    })]
  }) : (0, l.jsxs)("div", {
    className: g.FQ,
    children: [(0, l.jsx)("img", {
      width: 180,
      className: g.Sl,
      src: m,
      alt: "",
      "aria-hidden": true
    }), (0, l.jsxs)("div", {
      children: [(0, l.jsx)(s.Heading, {
        className: g.R_,
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: p.intl.string(p.t.utqWEC)
      }), (0, l.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: p.intl.string(p.t["+9etcM"])
      }), (0, l.jsx)(s.Text, {
        className: g.uN,
        variant: "text-md/normal",
        color: "text-default",
        children: p.intl.format(p.t.Z0axjk, {})
      })]
    })]
  });
  return (0, l.jsxs)("div", {
    className: i()(g.kL, {
      [g.xY]: n
    }),
    children: [(0, l.jsx)(s.DUT, {
      className: g.b,
      onClick: () => {
        (0, c.Dr)(x, {
          dismissAction: h.i.DISMISS
        })
      },
      children: (0, l.jsx)(s.PGe, {
        size: "md",
        color: "currentColor"
      })
    }), A]
  })
}