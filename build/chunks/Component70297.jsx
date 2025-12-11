/** Chunk was on 58121 **/
/** chunk id: 70297, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => C,
  q: () => x
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk408302 = require("./408302.js"),
  Chunk697611 = require("./697611.js");

function x(e) {
  return (0, b.te)(e) ? 250 : 152
}

function C(e) {
  let {
    guild: n
  } = e, t = (0, b.te)(n.id), r = (0, o.Nj)(i.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL), x = t && !r ? i.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : i.z.CHANNEL_BROWSER_NUX;
  (0, d.kk)(x);
  let C = t ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)(c.Heading, {
        className: m.heading,
        color: "always-white",
        variant: "heading-lg/semibold",
        children: f.intl.string(f.t.AalzkJ)
      }), (0, a.jsx)(c.Text, {
        className: m.description,
        variant: "text-md/normal",
        color: "always-white",
        children: f.intl.string(f.t.CXh95Z)
      }), (0, a.jsx)(c.Button, {
        variant: "overlay-primary",
        onClick: () => {
          s.Z.open(n.id, p.pNK.ONBOARDING), (0, o.Q3)(x, {
            dismissAction: h.L.PRIMARY
          })
        },
        text: f.intl.string(f.t["+OtO4e"])
      })]
    }), (0, a.jsx)(u.j, {
      isTooltip: true
    })]
  }) : (0, a.jsxs)("div", {
    className: m.nuxContent,
    children: [(0, a.jsx)("img", {
      width: 180,
      className: m.image,
      src: g,
      alt: "",
      "aria-hidden": true
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(c.Heading, {
        className: m.heading,
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: f.intl.string(f.t.utqWEC)
      }), (0, a.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: f.intl.string(f.t["+9etcM"])
      }), (0, a.jsx)(c.Text, {
        className: m.tip,
        variant: "text-md/normal",
        color: "text-default",
        children: f.intl.format(f.t.Z0axjk, {})
      })]
    })]
  });
  return (0, a.jsxs)("div", {
    className: l()(m.container, {
      [m.adminUpsell]: t
    }),
    children: [(0, a.jsx)(c.P3F, {
      className: m.closeButton,
      onClick: () => {
        (0, o.Q3)(x, {
          dismissAction: h.L.DISMISS
        })
      },
      children: (0, a.jsx)(c.Dio, {
        size: "md",
        color: "currentColor"
      })
    }), C]
  })
}