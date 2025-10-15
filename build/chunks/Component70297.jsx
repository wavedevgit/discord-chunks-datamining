/** Chunk was on 58121 **/
/** chunk id: 70297, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => C,
  q: () => _
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk266454 = require("./266454.js"),
  Chunk605236 = require("./605236.js"),
  Chunk434404 = require("./434404.js"),
  Chunk707076 = require("./707076.jsx"),
  Chunk398758 = require("./398758.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk886461 = require("./886461.js"),
  Chunk697611 = require("./697611.js");

function _(e) {
  return (0, m.te)(e) ? 250 : 152
}

function C(e) {
  let {
    guild: n
  } = e, t = (0, m.te)(n.id), r = (0, s.Nj)(a.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL), _ = t && !r ? a.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : a.z.CHANNEL_BROWSER_NUX;
  (0, c.kk)(_);
  let C = t ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      children: [(0, l.jsx)(o.Heading, {
        className: g.heading,
        color: "always-white",
        variant: "heading-lg/semibold",
        children: f.intl.string(f.t.AalzkJ)
      }), (0, l.jsx)(o.Text, {
        className: g.description,
        variant: "text-md/normal",
        color: "always-white",
        children: f.intl.string(f.t.CXh95Z)
      }), (0, l.jsx)(o.Button, {
        variant: "overlay-primary",
        onClick: () => {
          d.Z.open(n.id, h.pNK.ONBOARDING), (0, s.Q3)(_, {
            dismissAction: p.L.PRIMARY
          })
        },
        text: f.intl.string(f.t["+OtO4e"])
      })]
    }), (0, l.jsx)(u.j, {
      isTooltip: true
    })]
  }) : (0, l.jsxs)("div", {
    className: g.nuxContent,
    children: [(0, l.jsx)("img", {
      width: 180,
      className: g.image,
      src: x,
      alt: "",
      "aria-hidden": true
    }), (0, l.jsxs)("div", {
      children: [(0, l.jsx)(o.Heading, {
        className: g.heading,
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: f.intl.string(f.t.utqWEC)
      }), (0, l.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: f.intl.string(f.t["+9etcM"])
      }), (0, l.jsx)(o.Text, {
        className: g.tip,
        variant: "text-md/normal",
        color: "header-secondary",
        children: f.intl.format(f.t.Z0axjk, {})
      })]
    })]
  });
  return (0, l.jsxs)("div", {
    className: i()(g.container, {
      [g.adminUpsell]: t
    }),
    children: [(0, l.jsx)(o.P3F, {
      className: g.closeButton,
      onClick: () => {
        (0, s.Q3)(_, {
          dismissAction: p.L.DISMISS
        })
      },
      children: (0, l.jsx)(o.Dio, {
        size: "md",
        color: "currentColor"
      })
    }), C]
  })
}