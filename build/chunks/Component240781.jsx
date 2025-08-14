/** Chunk was on web.js **/
/** chunk id: 240781, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
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
  Chunk29121 = require("./29121.js"),
  Chunk222062 = require("./222062.js"),
  Chunk706454 = require("./706454.js"),
  Chunk158776 = require("./158776.js"),
  Chunk55935 = require("./55935.js"),
  Chunk74538 = require("./74538.js"),
  Chunk204418 = require("./204418.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk843347 = require("./843347.js");
let O = [{
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
  v = e => {
    let {
      purchase: t
    } = e, n = (0, l.e7)([p.default], () => p.default.locale), i = (0, u.qS)(t), o = null != t.expiresAt ? (0, m.TD)(Date.now(), t.expiresAt) : null, a = (0, f.ag)(t), s = t.purchasedAt.toLocaleDateString(n, {
      month: "long",
      year: "numeric"
    });
    return (0, r.jsxs)("div", {
      className: y.purchaseInfo,
      children: [(0, r.jsx)(c.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: a
      }), null != o && (0, r.jsx)(c.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: b.intl.format(b.t.Io7ozs, {
          days: o.days.toString()
        })
      }), (0, r.jsxs)(c.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: [i ? b.intl.format(b.t["req+eX"], {
          dateAcquired: s
        }) : b.intl.format(b.t.gW9R4O, {
          date: s
        }), null != t.expiresAt && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("br", {}), b.intl.format(b.t.eZSTa2, {
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
        children: b.intl.string(b.t.nKdAlJ)
      })]
    })
  },
  I = e => {
    let {
      user: t,
      guildId: n,
      avatarDecorationOverride: o,
      className: p
    } = e, m = (0, l.e7)([h.Z], () => h.Z.getStatus(t.id)), {
      product: I,
      purchase: T
    } = (0, d.Z)(null == o ? true : o.skuId), S = g.ZP.canUseCollectibles(t), A = (0, u.qS)(T), N = (0, u.G1)(I), C = !S && A, R = (0, _.M)(!N || S), P = (0, f.kd)(I), w = i.useMemo(() => C ? b.intl.string(b.t["7vkeu7"]) : (0, s.EQ)([N, S, R]).with([true, true, false], () => b.intl.string(b.t.hmyYKy)).with([true, false, true], () => b.intl.string(b.t.q0PlFh)).with([true, false, false], () => b.intl.string(b.t["0xs2sL"])).otherwise(() => b.intl.string(b.t.fEGjVV)), [C, N, S, R]);
    return null != I && (null == T || C) ? (0, r.jsxs)("div", {
      className: a()(y.modalPreview, y.shopPreviewContainer, p),
      children: [(0, r.jsx)("div", {
        className: y.shopPreviewBanner,
        children: (0, r.jsx)(E.Z, {
          user: t,
          guildId: n,
          avatarDecorationOverride: o
        })
      }), (0, r.jsxs)("div", {
        className: y.shopPreviewTextContainer,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          children: P
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: w
        })]
      })]
    }) : (0, r.jsxs)("div", {
      className: a()(y.modalPreview, p),
      children: [(0, r.jsxs)("div", {
        className: y.previewSections,
        children: [(0, r.jsx)("div", {
          className: y.decorationPreview,
          children: (0, r.jsx)(E.Z, {
            user: t,
            guildId: n,
            avatarDecorationOverride: o
          })
        }), (0, r.jsx)("div", {
          className: y.smallDecorationPreviewsContainer,
          children: O.map(e => {
            let {
              avatarSize: i,
              showStatus: a
            } = e;
            return (0, r.jsx)("div", {
              className: y.smallDecorationPreview,
              children: (0, r.jsx)(E.Z, {
                user: t,
                guildId: n,
                avatarSize: i,
                avatarDecorationOverride: o,
                status: a ? m : true,
                "aria-hidden": true
              })
            }, "".concat(i).concat(a))
          })
        })]
      }), null != T && (0, r.jsx)(v, {
        purchase: T
      })]
    })
  }