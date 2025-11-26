/** Chunk was on 79589 **/
/** chunk id: 240781, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./314940.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
let y = [{
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
  P = e => {
    let {
      purchase: t
    } = e, r = (0, o.e7)([h.default], () => h.default.locale), i = (0, d.qS)(t), l = null != t.expiresAt ? (0, x.TD)(Date.now(), t.expiresAt) : null, a = (0, m.ag)(t), s = t.purchasedAt.toLocaleDateString(r, {
      month: "long",
      year: "numeric"
    });
    return (0, n.jsxs)("div", {
      className: _.purchaseInfo,
      children: [(0, n.jsx)(c.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: a
      }), null != l && (0, n.jsx)(c.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: j.intl.format(j.t.Io7ozn, {
          days: l.days.toString()
        })
      }), (0, n.jsxs)(c.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: [i ? j.intl.format(j.t["req+eY"], {
          dateAcquired: s
        }) : j.intl.format(j.t.gW9R4B, {
          date: s
        }), null != t.expiresAt && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)("br", {}), j.intl.format(j.t.eZSTa5, {
            date: t.expiresAt.toLocaleDateString(r, {
              minute: "numeric",
              hour: "numeric",
              day: "numeric",
              month: "long",
              year: "numeric"
            })
          })]
        })]
      }), i && (0, n.jsx)(c.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: j.intl.string(j.t.nKdAlO)
      })]
    })
  },
  O = e => {
    let {
      user: t,
      guildId: r,
      avatarDecoration: l,
      className: h
    } = e, x = (0, o.e7)([v.Z], () => v.Z.getStatus(t.id)), {
      product: O,
      purchase: w
    } = (0, u.Z)(null == l ? true : l.skuId), I = g.ZP.canUseCollectibles(t), C = (0, d.qS)(w), S = (0, d.G1)(O), b = !I && C, E = (0, p.M)(!S || I), T = (0, m.kd)(O), A = i.useMemo(() => b ? j.intl.string(j.t["7vkeu5"]) : (0, s.EQ)([S, I, E]).with([true, true, false], () => j.intl.string(j.t.hmyYK8)).with([true, false, true], () => j.intl.string(j.t.q0PlFn)).with([true, false, false], () => j.intl.string(j.t["0xs2sA"])).otherwise(() => j.intl.string(j.t.fEGjVQ)), [b, S, I, E]);
    return null != O && (null == w || b) ? (0, n.jsxs)("div", {
      className: a()(_.modalPreview, _.shopPreviewContainer, h),
      children: [(0, n.jsx)("div", {
        className: _.shopPreviewBanner,
        children: (0, n.jsx)(f.Z, {
          user: t,
          guildId: r,
          avatarDecorationOverride: l
        })
      }), (0, n.jsxs)("div", {
        className: _.shopPreviewTextContainer,
        children: [(0, n.jsx)(c.Text, {
          variant: "text-sm/semibold",
          children: T
        }), (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: A
        })]
      })]
    }) : (0, n.jsxs)("div", {
      className: a()(_.modalPreview, h),
      children: [(0, n.jsxs)("div", {
        className: _.previewSections,
        children: [(0, n.jsx)("div", {
          className: _.decorationPreview,
          children: (0, n.jsx)(f.Z, {
            user: t,
            guildId: r,
            avatarDecorationOverride: l
          })
        }), (0, n.jsx)("div", {
          className: _.smallDecorationPreviewsContainer,
          children: y.map(e => {
            let {
              avatarSize: i,
              showStatus: a
            } = e;
            return (0, n.jsx)("div", {
              className: _.smallDecorationPreview,
              children: (0, n.jsx)(f.Z, {
                user: t,
                guildId: r,
                avatarSize: i,
                avatarDecorationOverride: l,
                status: a ? x : true,
                "aria-hidden": true
              })
            }, "".concat(i).concat(a))
          })
        })]
      }), null != w && (0, n.jsx)(P, {
        purchase: w
      })]
    })
  }