/** Chunk was on web.js **/
/** chunk id: 265985, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => T,
  x: () => S
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk131388 = require("./131388.js"),
  Chunk409813 = require("./409813.js"),
  Chunk430824 = require("./430824.js"),
  Chunk73346 = require("./73346.js"),
  Chunk817460 = require("./817460.js"),
  Chunk584825 = require("./584825.js"),
  Chunk570533 = require("./570533.js"),
  Chunk629262 = require("./629262.js"),
  Chunk575460 = require("./575460.jsx"),
  Chunk293810 = require("./293810.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk673854 = require("./673854.js");
let O = 440,
  v = 80,
  I = 4,
  T = e => {
    let {
      onClose: t,
      listing: n,
      step: i,
      guildId: o
    } = e, l = (0, p.YB)(o), d = (0, c.Z)(E.Xy), _ = () => {
      if (i !== u.h8.CONFIRM) return null;
      let e = null == n.image_asset ? true : (0, f._W)(n.application_id, n.image_asset, v);
      return (0, r.jsx)("div", {
        className: y.tierImageContainer,
        children: (0, r.jsx)("img", {
          src: e,
          alt: "",
          className: y.tierImage
        })
      })
    }, h = (() => {
      var e;
      if (d) return null;
      let t = (null == l || null == (e = l.cover_image_asset) ? true : e.application_id) != null ? (0, f._W)(l.cover_image_asset.application_id, l.cover_image_asset, O) : true;
      return null == t && i !== u.h8.CONFIRM ? null : null == t ? (0, r.jsx)("div", {
        className: y.headerImageEmpty
      }) : (0, r.jsx)("img", {
        src: t,
        alt: "",
        className: y.headerImage
      })
    })();
    return (0, r.jsxs)("div", {
      className: a()(y.headerContainer, {
        [y.headerEmpty]: d || null == h
      }),
      children: [h, _(), (0, r.jsx)(s.P3F, {
        className: y.closeContainer,
        onClick: () => t(false),
        "aria-label": b.intl.string(b.t.cpT0Cg),
        children: (0, r.jsx)(s.Dio, {
          size: "md",
          color: "currentColor",
          className: y.closeIcon
        })
      })]
    })
  },
  S = e => {
    let {
      onClose: t,
      listing: n,
      guildId: i
    } = e, a = (0, o.e7)([d.Z], () => d.Z.getGuild(i), [i]), c = (0, h.Z)(i).filter(e => e.roles.includes(n.role_id)), u = n.role_benefits.benefits.filter(_.rC).slice(0, null === c.length ? I : I - 1), f = (0, m.Z)(u).slice(0, null === c.length ? I : I - 1), p = () => {
      var e;
      if (0 === c.length) return null;
      let t = c[0];
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "header-secondary",
          className: y.confirmationSectionLabel,
          children: b.intl.string(b.t["6Y1FLi"])
        }), (0, r.jsxs)("div", {
          className: y.emojiBenefitsRow,
          children: [(0, r.jsx)(l.Z, {
            emojiId: t.id,
            emojiName: t.name,
            animated: null != (e = t.animated) && e,
            className: y.emojiImage
          }), (0, r.jsxs)("div", {
            children: [(0, r.jsx)(s.Text, {
              variant: "text-md/medium",
              color: "header-primary",
              className: y.emojiName,
              children: b.intl.string(b.t.PrKk4u)
            }), (0, r.jsx)(s.Text, {
              color: "interactive-normal",
              variant: "text-sm/normal",
              children: b.intl.format(b.t["2ICUkJ"], {
                count: c.length
              })
            })]
          })]
        })]
      })
    };
    return (0, r.jsxs)("div", {
      className: y.confirmationContainer,
      children: [(0, r.jsx)(s.X6q, {
        className: y.confirmationHeader,
        variant: "heading-xl/semibold",
        color: "header-secondary",
        children: b.intl.format(b.t["1HIsTk"], {
          serverName: null == a ? true : a.name
        })
      }), (0, r.jsx)(s.Text, {
        className: y.confirmationSubtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: b.intl.format(b.t.oi3gio, {
          tier: n.name
        })
      }), f.length > 0 && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: y.confirmationSectionLabel,
          children: b.intl.string(b.t.w0CQ09)
        }), (0, r.jsx)("div", {
          className: y.confirmationBenefits,
          children: f.map(e => (0, r.jsx)(g.Z, {
            benefit: e,
            guildId: i,
            onClick: () => t(true)
          }, (0, _.ab)(e)))
        })]
      }), p(), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: y.confirmationButton,
        children: (0, r.jsx)(s.zxk, {
          variant: "primary",
          text: b.intl.string(b.t["Ph+ecH"]),
          onClick: () => t(true)
        })
      })]
    })
  }