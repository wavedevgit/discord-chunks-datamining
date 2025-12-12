/** Chunk was on 58121 **/
/** chunk id: 70297, original params: e,t,n (module,exports,require) **/
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
    guild: t
  } = e, n = (0, b.te)(t.id), r = (0, c.Nj)(i.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL), x = n && !r ? i.z.GUILD_HEADER_COMMUNITY_ONBOARDING_ADMIN_UPSELL : i.z.CHANNEL_BROWSER_NUX;
  (0, d.kk)(x);
  let C = n ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)(o.Heading, {
        className: m.heading,
        color: "always-white",
        variant: "heading-lg/semibold",
        children: h.intl.string(h.t.AalzkJ)
      }), (0, a.jsx)(o.Text, {
        className: m.description,
        variant: "text-md/normal",
        color: "always-white",
        children: h.intl.string(h.t.CXh95Z)
      }), (0, a.jsx)(o.Button, {
        variant: "overlay-primary",
        onClick: () => {
          s.Z.open(t.id, p.pNK.ONBOARDING), (0, c.Q3)(x, {
            dismissAction: f.L.PRIMARY
          })
        },
        text: h.intl.string(h.t["+OtO4e"])
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
      children: [(0, a.jsx)(o.Heading, {
        className: m.heading,
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: h.intl.string(h.t.utqWEC)
      }), (0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: h.intl.string(h.t["+9etcM"])
      }), (0, a.jsx)(o.Text, {
        className: m.tip,
        variant: "text-md/normal",
        color: "text-default",
        children: h.intl.format(h.t.Z0axjk, {})
      })]
    })]
  });
  return (0, a.jsxs)("div", {
    className: l()(m.container, {
      [m.adminUpsell]: n
    }),
    children: [(0, a.jsx)(o.P3F, {
      className: m.closeButton,
      onClick: () => {
        (0, c.Q3)(x, {
          dismissAction: f.L.DISMISS
        })
      },
      children: (0, a.jsx)(o.Dio, {
        size: "md",
        color: "currentColor"
      })
    }), C]
  })
}