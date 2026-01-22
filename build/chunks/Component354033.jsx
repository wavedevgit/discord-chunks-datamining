/** Chunk was on web.js **/
/** chunk id: 354033, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => T,
  Y: () => I
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk241524 = require("./241524.js"),
  Chunk166532 = require("./166532.js"),
  Chunk71393 = require("./71393.js"),
  Chunk371794 = require("./371794.js"),
  Chunk500345 = require("./500345.js"),
  Chunk599941 = require("./599941.js"),
  Chunk320137 = require("./320137.js"),
  Chunk417360 = require("./417360.js"),
  Chunk759625 = require("./759625.jsx"),
  Chunk2242 = require("./2242.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk906489 = require("./906489.js");
let A = 440,
  v = 80,
  S = 4,
  I = e => {
    let {
      onClose: t,
      listing: n,
      step: i,
      guildId: s
    } = e, o = (0, h.Tq)(s), c = (0, u.A)(b.TQ), f = () => {
      if (i !== d.pn.CONFIRM) return null;
      let e = null == n.image_asset ? true : (0, p.YE)(n.application_id, n.image_asset, v);
      return (0, r.jsx)("div", {
        className: O.z9,
        children: (0, r.jsx)("img", {
          src: e,
          alt: "",
          className: O.ah
        })
      })
    }, _ = (() => {
      var e;
      if (c) return null;
      let t = (null == o || null == (e = o.cover_image_asset) ? true : e.application_id) != null ? (0, p.YE)(o.cover_image_asset.application_id, o.cover_image_asset, A) : true;
      return null == t && i !== d.pn.CONFIRM ? null : null == t ? (0, r.jsx)("div", {
        className: O.gI
      }) : (0, r.jsx)("img", {
        src: t,
        alt: "",
        className: O.F0
      })
    })();
    return (0, r.jsxs)("div", {
      className: a()(O.N1, {
        [O.TP]: c || null == _
      }),
      children: [_, f(), (0, r.jsx)(l.DUT, {
        className: O.G3,
        onClick: () => t(false),
        "aria-label": y.intl.string(y.t.cpT0Cq),
        children: (0, r.jsx)(l.PGe, {
          size: "md",
          color: "currentColor",
          className: O.ut
        })
      })]
    })
  },
  T = e => {
    let {
      onClose: t,
      listing: n,
      guildId: i
    } = e, a = (0, s.bG)([f.A], () => f.A.getGuild(i), [i]), u = (0, m.A)(i).filter(e => e.roles.includes(n.role_id)), d = n.role_benefits.benefits.filter(_.B1).slice(0, null === u.length ? S : S - 1), p = (0, g.A)(d).slice(0, null === u.length ? S : S - 1), h = () => {
      var e;
      if (0 === u.length) return null;
      let t = u[0];
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          className: O.n2,
          children: y.intl.string(y.t["6Y1FLi"])
        }), (0, r.jsxs)("div", {
          className: O.DI,
          children: [(0, r.jsx)(c.A, {
            emojiId: t.id,
            emojiName: t.name,
            animated: null != (e = t.animated) && e,
            className: O.mp
          }), (0, r.jsxs)("div", {
            children: [(0, r.jsx)(l.Text, {
              variant: "text-md/medium",
              color: "text-strong",
              className: O.cC,
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
      className: O.RP,
      children: [(0, r.jsx)(l.Heading, {
        className: O.RS,
        variant: "heading-xl/semibold",
        color: "text-default",
        children: y.intl.format(y.t["1HIsTk"], {
          serverName: null == a ? true : a.name
        })
      }), (0, r.jsx)(l.Text, {
        className: O.sT,
        variant: "text-md/normal",
        color: "text-default",
        children: y.intl.format(y.t.oi3gip, {
          tier: n.name
        })
      }), p.length > 0 && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          className: O.n2,
          children: y.intl.string(y.t.w0CQ01)
        }), (0, r.jsx)("div", {
          className: O.M3,
          children: p.map(e => (0, r.jsx)(E.A, {
            benefit: e,
            guildId: i,
            onClick: () => t(true)
          }, (0, _.nh)(e)))
        })]
      }), h(), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: O.EJ,
        children: (0, r.jsx)(o.$nd, {
          variant: "primary",
          text: y.intl.string(y.t["Ph+ecI"]),
          onClick: () => t(true)
        })
      })]
    })
  }