/** Chunk was on web.js **/
/** chunk id: 265985, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => T,
  x: () => C
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
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
  Chunk627153 = require("./627153.js");
let v = 440,
  S = 80,
  I = 4,
  T = e => {
    let {
      onClose: t,
      listing: n,
      step: i,
      guildId: o
    } = e, s = (0, m.YB)(o), c = (0, u.Z)(b.Xy), f = () => {
      if (i !== d.h8.CONFIRM) return null;
      let e = null == n.image_asset ? true : (0, p._W)(n.application_id, n.image_asset, S);
      return (0, r.jsx)("div", {
        className: O.tierImageContainer,
        children: (0, r.jsx)("img", {
          src: e,
          alt: "",
          className: O.tierImage
        })
      })
    }, _ = (() => {
      var e;
      if (c) return null;
      let t = (null == s || null == (e = s.cover_image_asset) ? true : e.application_id) != null ? (0, p._W)(s.cover_image_asset.application_id, s.cover_image_asset, v) : true;
      return null == t && i !== d.h8.CONFIRM ? null : null == t ? (0, r.jsx)("div", {
        className: O.headerImageEmpty
      }) : (0, r.jsx)("img", {
        src: t,
        alt: "",
        className: O.headerImage
      })
    })();
    return (0, r.jsxs)("div", {
      className: a()(O.headerContainer, {
        [O.headerEmpty]: c || null == _
      }),
      children: [_, f(), (0, r.jsx)(l.P3F, {
        className: O.closeContainer,
        onClick: () => t(false),
        "aria-label": y.intl.string(y.t.cpT0Cq),
        children: (0, r.jsx)(l.Dio, {
          size: "md",
          color: "currentColor",
          className: O.closeIcon
        })
      })]
    })
  },
  C = e => {
    let {
      onClose: t,
      listing: n,
      guildId: i
    } = e, a = (0, o.e7)([f.Z], () => f.Z.getGuild(i), [i]), u = (0, h.Z)(i).filter(e => e.roles.includes(n.role_id)), d = n.role_benefits.benefits.filter(_.rC).slice(0, null === u.length ? I : I - 1), p = (0, g.Z)(d).slice(0, null === u.length ? I : I - 1), m = () => {
      var e;
      if (0 === u.length) return null;
      let t = u[0];
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          className: O.confirmationSectionLabel,
          children: y.intl.string(y.t["6Y1FLi"])
        }), (0, r.jsxs)("div", {
          className: O.emojiBenefitsRow,
          children: [(0, r.jsx)(c.Z, {
            emojiId: t.id,
            emojiName: t.name,
            animated: null != (e = t.animated) && e,
            className: O.emojiImage
          }), (0, r.jsxs)("div", {
            children: [(0, r.jsx)(l.Text, {
              variant: "text-md/medium",
              color: "header-primary",
              className: O.emojiName,
              children: y.intl.string(y.t.PrKk4n)
            }), (0, r.jsx)(l.Text, {
              color: "interactive-text-default",
              variant: "text-sm/normal",
              children: y.intl.format(y.t["2ICUkG"], {
                count: u.length
              })
            })]
          })]
        })]
      })
    };
    return (0, r.jsxs)("div", {
      className: O.confirmationContainer,
      children: [(0, r.jsx)(l.Heading, {
        className: O.confirmationHeader,
        variant: "heading-xl/semibold",
        color: "text-default",
        children: y.intl.format(y.t["1HIsTk"], {
          serverName: null == a ? true : a.name
        })
      }), (0, r.jsx)(l.Text, {
        className: O.confirmationSubtitle,
        variant: "text-md/normal",
        color: "text-default",
        children: y.intl.format(y.t.oi3gip, {
          tier: n.name
        })
      }), p.length > 0 && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          className: O.confirmationSectionLabel,
          children: y.intl.string(y.t.w0CQ01)
        }), (0, r.jsx)("div", {
          className: O.confirmationBenefits,
          children: p.map(e => (0, r.jsx)(E.Z, {
            benefit: e,
            guildId: i,
            onClick: () => t(true)
          }, (0, _.ab)(e)))
        })]
      }), m(), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: O.confirmationButton,
        children: (0, r.jsx)(s.zxk, {
          variant: "primary",
          text: y.intl.string(y.t["Ph+ecI"]),
          onClick: () => t(true)
        })
      })]
    })
  }