/** Chunk was on 79589 **/
/** chunk id: 240781, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./314940.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk405181 = require("./405181.js");
let f = [{
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
  S = e => {
    let {
      purchase: t
    } = e, r = (0, o.e7)([h.default], () => h.default.locale), i = (0, u.qS)(t), l = null != t.expiresAt ? (0, g.TD)(Date.now(), t.expiresAt) : null, s = (0, m.ag)(t), a = t.purchasedAt.toLocaleDateString(r, {
      month: "long",
      year: "numeric"
    });
    return (0, n.jsxs)("div", {
      className: O.purchaseInfo,
      children: [(0, n.jsx)(c.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: s
      }), null != l && (0, n.jsx)(c.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: y.intl.format(y.t.Io7ozn, {
          days: l.days.toString()
        })
      }), (0, n.jsxs)(c.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: [i ? y.intl.format(y.t["req+eY"], {
          dateAcquired: a
        }) : y.intl.format(y.t.gW9R4B, {
          date: a
        }), null != t.expiresAt && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)("br", {}), y.intl.format(y.t.eZSTa5, {
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
        children: y.intl.string(y.t.nKdAlO)
      })]
    })
  },
  P = e => {
    let {
      user: t,
      guildId: r,
      avatarDecoration: l,
      className: h
    } = e, g = (0, o.e7)([x.Z], () => x.Z.getStatus(t.id)), {
      product: P,
      purchase: b
    } = (0, d.Z)(null == l ? true : l.skuId), E = v.ZP.canUseCollectibles(t), I = (0, u.qS)(b), C = (0, u.G1)(P), A = !E && I, w = (0, p.M)(!C || E), T = (0, m.kd)(P), Z = i.useMemo(() => A ? y.intl.string(y.t["7vkeu5"]) : (0, a.EQ)([C, E, w]).with([true, true, false], () => y.intl.string(y.t.hmyYK8)).with([true, false, true], () => y.intl.string(y.t.q0PlFn)).with([true, false, false], () => y.intl.string(y.t["0xs2sA"])).otherwise(() => y.intl.string(y.t.fEGjVQ)), [A, C, E, w]);
    return null != P && (null == b || A) ? (0, n.jsxs)("div", {
      className: s()(O.modalPreview, O.shopPreviewContainer, h),
      children: [(0, n.jsx)("div", {
        className: O.shopPreviewBanner,
        children: (0, n.jsx)(j.Z, {
          user: t,
          guildId: r,
          avatarDecorationOverride: l
        })
      }), (0, n.jsxs)("div", {
        className: O.shopPreviewTextContainer,
        children: [(0, n.jsx)(c.Text, {
          variant: "text-sm/semibold",
          children: T
        }), (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: Z
        })]
      })]
    }) : (0, n.jsxs)("div", {
      className: s()(O.modalPreview, h),
      children: [(0, n.jsxs)("div", {
        className: O.previewSections,
        children: [(0, n.jsx)("div", {
          className: O.decorationPreview,
          children: (0, n.jsx)(j.Z, {
            user: t,
            guildId: r,
            avatarDecorationOverride: l
          })
        }), (0, n.jsx)("div", {
          className: O.smallDecorationPreviewsContainer,
          children: f.map(e => {
            let {
              avatarSize: i,
              showStatus: s
            } = e;
            return (0, n.jsx)("div", {
              className: O.smallDecorationPreview,
              children: (0, n.jsx)(j.Z, {
                user: t,
                guildId: r,
                avatarSize: i,
                avatarDecorationOverride: l,
                status: s ? g : true,
                "aria-hidden": true
              })
            }, "".concat(i).concat(s))
          })
        })]
      }), null != b && (0, n.jsx)(S, {
        purchase: b
      })]
    })
  }