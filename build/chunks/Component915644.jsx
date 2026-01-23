/** Chunk was on 72165 **/
/** chunk id: 915644, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b,
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
  return (0, h.Xn)(e) ? 250 : 152
}

function b(e) {
  let {
    guild: t
  } = e, n = (0, h.Xn)(t.id), r = (0, o.JZ)(a.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL), x = n && !r ? a.M.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : a.M.CHANNEL_BROWSER_NUX;
  (0, c.Vh)(x);
  let b = n ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      children: [(0, l.jsx)(s.Heading, {
        className: m.R_,
        color: "always-white",
        variant: "heading-lg/semibold",
        children: _.intl.string(_.t.AalzkJ)
      }), (0, l.jsx)(s.Text, {
        className: m.h_,
        variant: "text-md/normal",
        color: "always-white",
        children: _.intl.string(_.t.CXh95Z)
      }), (0, l.jsx)(s.Button, {
        variant: "overlay-primary",
        onClick: () => {
          d.A.open(t.id, p.BEX.ONBOARDING), (0, o.Dr)(x, {
            dismissAction: f.i.PRIMARY
          })
        },
        text: _.intl.string(_.t["+OtO4e"])
      })]
    }), (0, l.jsx)(u.M, {
      isTooltip: true
    })]
  }) : (0, l.jsxs)("div", {
    className: m.FQ,
    children: [(0, l.jsx)("img", {
      width: 180,
      className: m.Sl,
      src: g,
      alt: "",
      "aria-hidden": true
    }), (0, l.jsxs)("div", {
      children: [(0, l.jsx)(s.Heading, {
        className: m.R_,
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: _.intl.string(_.t.utqWEC)
      }), (0, l.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: _.intl.string(_.t["+9etcM"])
      }), (0, l.jsx)(s.Text, {
        className: m.uN,
        variant: "text-md/normal",
        color: "text-default",
        children: _.intl.format(_.t.Z0axjk, {})
      })]
    })]
  });
  return (0, l.jsxs)("div", {
    className: i()(m.kL, {
      [m.xY]: n
    }),
    children: [(0, l.jsx)(s.DUT, {
      className: m.b,
      onClick: () => {
        (0, o.Dr)(x, {
          dismissAction: f.i.DISMISS
        })
      },
      children: (0, l.jsx)(s.PGe, {
        size: "md",
        color: "currentColor"
      })
    }), b]
  })
}