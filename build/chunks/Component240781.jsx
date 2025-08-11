/** Chunk was on web.js **/
/** chunk id: 240781, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./314940.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk884697 = require("./884697.js"),
  Chunk449217 = require("./449217.js"),
  Chunk905357 = require("./905357.js"),
  Chunk95422 = require("./95422.js"),
  Chunk222062 = require("./222062.js"),
  Chunk706454 = require("./706454.js"),
  Chunk158776 = require("./158776.js"),
  Chunk55935 = require("./55935.js"),
  Chunk74538 = require("./74538.js"),
  Chunk204418 = require("./204418.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk520271 = require("./520271.js");
let v = [{
    avatarSize: Chunk481060.EFr.SIZE_40,
    showStatus: false
  }, {
    avatarSize: Chunk481060.EFr.SIZE_32,
    showStatus: false
  }, {
    avatarSize: Chunk481060.EFr.SIZE_40,
    showStatus: true
  }, {
    avatarSize: Chunk481060.EFr.SIZE_32,
    showStatus: true
  }],
  I = e => {
    let {
      purchase: t
    } = e, n = (0, l.e7)([h.default], () => h.default.locale), i = (0, u.qS)(t), o = null != t.expiresAt ? (0, g.TD)(Date.now(), t.expiresAt) : null, a = (0, _.a)(t), s = t.purchasedAt.toLocaleDateString(n, {
      month: "long",
      year: "numeric"
    });
    return (0, r.jsxs)("div", {
      className: O.purchaseInfo,
      children: [(0, r.jsx)(c.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: a
      }), null != o && (0, r.jsx)(c.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: y.intl.format(y.t.Io7ozs, {
          days: o.days.toString()
        })
      }), (0, r.jsxs)(c.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: [i ? y.intl.format(y.t["req+eX"], {
          dateAcquired: s
        }) : y.intl.format(y.t.gW9R4O, {
          date: s
        }), null != t.expiresAt && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("br", {}), y.intl.format(y.t.eZSTa2, {
            date: t.expiresAt.toLocaleDateString(n, {
              minute: "numeric",
              hour: "numeric",
              day: "numeric",
              month: "long",
              year: "numeric"
            })
          })]
        })]
      }), i && (0, r.jsx)(c.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: y.intl.string(y.t.nKdAlJ)
      })]
    })
  },
  T = e => {
    let {
      user: t,
      guildId: n,
      avatarDecorationOverride: o,
      className: _
    } = e, h = (0, l.e7)([m.Z], () => m.Z.getStatus(t.id)), {
      product: g,
      purchase: T
    } = (0, d.Z)(null == o ? true : o.skuId), S = E.ZP.canUseCollectibles(t), A = (0, u.qS)(T), N = (0, u.G1)(g), C = !S && A, R = (0, p.M)(!N || S), P = (0, f.k)(g), w = i.useMemo(() => C ? y.intl.string(y.t["7vkeu7"]) : (0, s.EQ)([N, S, R]).with([true, true, false], () => y.intl.string(y.t.hmyYKy)).with([true, false, true], () => y.intl.string(y.t.q0PlFh)).with([true, false, false], () => y.intl.string(y.t["0xs2sL"])).otherwise(() => y.intl.string(y.t.fEGjVV)), [C, N, S, R]);
    return null != g && (null == T || C) ? (0, r.jsxs)("div", {
      className: a()(O.modalPreview, O.shopPreviewContainer, _),
      children: [(0, r.jsx)("div", {
        className: O.shopPreviewBanner,
        children: (0, r.jsx)(b.Z, {
          user: t,
          guildId: n,
          avatarDecorationOverride: o
        })
      }), (0, r.jsxs)("div", {
        className: O.shopPreviewTextContainer,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          children: P
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: w
        })]
      })]
    }) : (0, r.jsxs)("div", {
      className: a()(O.modalPreview, _),
      children: [(0, r.jsxs)("div", {
        className: O.previewSections,
        children: [(0, r.jsx)("div", {
          className: O.decorationPreview,
          children: (0, r.jsx)(b.Z, {
            user: t,
            guildId: n,
            avatarDecorationOverride: o
          })
        }), (0, r.jsx)("div", {
          className: O.smallDecorationPreviewsContainer,
          children: v.map(e => {
            let {
              avatarSize: i,
              showStatus: a
            } = e;
            return (0, r.jsx)("div", {
              className: O.smallDecorationPreview,
              children: (0, r.jsx)(b.Z, {
                user: t,
                guildId: n,
                avatarSize: i,
                avatarDecorationOverride: o,
                status: a ? h : true,
                "aria-hidden": true
              })
            }, "".concat(i).concat(a))
          })
        })]
      }), null != T && (0, r.jsx)(I, {
        purchase: T
      })]
    })
  }