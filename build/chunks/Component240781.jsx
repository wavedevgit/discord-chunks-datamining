/** Chunk was on 79589 **/
/** chunk id: 240781, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./314940.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
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
  Chunk314183 = require("./314183.js");
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
  O = e => {
    let {
      purchase: t
    } = e, n = (0, c.e7)([v.default], () => v.default.locale), i = (0, u.qS)(t), a = null != t.expiresAt ? (0, g.TD)(Date.now(), t.expiresAt) : null, l = (0, p.ag)(t), s = t.purchasedAt.toLocaleDateString(n, {
      month: "long",
      year: "numeric"
    });
    return (0, r.jsxs)("div", {
      className: P.purchaseInfo,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-sm/semibold",
        color: "text-strong",
        children: l
      }), null != a && (0, r.jsx)(d.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: j.intl.format(j.t.Io7ozn, {
          days: a.days.toString()
        })
      }), (0, r.jsxs)(d.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: [j.intl.format(j.t.gW9R4B, {
          date: s
        }), null != t.expiresAt && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("br", {}), j.intl.format(j.t.eZSTa5, {
            date: t.expiresAt.toLocaleDateString(n, {
              minute: "numeric",
              hour: "numeric",
              day: "numeric",
              month: "long",
              year: "numeric"
            })
          })]
        })]
      }), i && (0, r.jsx)(d.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: j.intl.string(j.t.nKdAlO)
      })]
    })
  },
  w = e => {
    let {
      user: t,
      guildId: n,
      avatarDecoration: a,
      className: v
    } = e, g = (0, c.e7)([x.Z], () => x.Z.getStatus(t.id)), {
      product: w,
      purchase: S
    } = (0, m.Z)(null == a ? true : a.skuId), C = f.ZP.canUseCollectibles(t), I = null != S ? (0, u.qS)(S) : (0, u.G1)(w), E = !C && (0, u.qS)(S), A = (0, h.M)(!I || C), T = (0, p.ag)(S), _ = (0, p.kd)(w), D = i.useMemo(() => E ? j.intl.string(j.t["7vkeu5"]) : (0, o.EQ)([I, C, A]).with([true, true, false], () => j.intl.string(j.t.hmyYK8)).with([true, false, true], () => j.intl.string(j.t.q0PlFn)).with([true, false, false], () => j.intl.string(j.t["0xs2sA"])).otherwise(() => j.intl.string(j.t.fEGjVQ)), [E, I, C, A]);
    return null == S || E ? (0, r.jsxs)("div", {
      className: l()(P.modalPreview, P.shopPreviewContainer, v),
      children: [(0, r.jsx)("div", {
        className: P.shopPreviewBanner,
        children: (0, r.jsx)(b.Z, {
          user: t,
          guildId: n,
          avatarDecorationOverride: a
        })
      }), (0, r.jsxs)("div", {
        className: P.shopPreviewTextContainer,
        children: [(0, r.jsx)(d.Text, {
          variant: "text-sm/semibold",
          children: (0, s.isEmpty)(T) ? _ : T
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: D
        })]
      })]
    }) : (0, r.jsxs)("div", {
      className: l()(P.modalPreview, v),
      children: [(0, r.jsxs)("div", {
        className: P.previewSections,
        children: [(0, r.jsx)("div", {
          className: P.decorationPreview,
          children: (0, r.jsx)(b.Z, {
            user: t,
            guildId: n,
            avatarDecorationOverride: a
          })
        }), (0, r.jsx)("div", {
          className: P.smallDecorationPreviewsContainer,
          children: y.map(e => {
            let {
              avatarSize: i,
              showStatus: l
            } = e;
            return (0, r.jsx)("div", {
              className: P.smallDecorationPreview,
              children: (0, r.jsx)(b.Z, {
                user: t,
                guildId: n,
                avatarSize: i,
                avatarDecorationOverride: a,
                status: l ? g : true,
                "aria-hidden": true
              })
            }, "".concat(i).concat(l))
          })
        })]
      }), null != S && (0, r.jsx)(O, {
        purchase: S
      })]
    })
  }