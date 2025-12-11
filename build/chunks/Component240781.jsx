/** Chunk was on 79589 **/
/** chunk id: 240781, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./314940.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
let P = [{
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
  y = e => {
    let {
      purchase: t
    } = e, n = (0, o.e7)([h.default], () => h.default.locale), i = (0, d.qS)(t), a = null != t.expiresAt ? (0, v.TD)(Date.now(), t.expiresAt) : null, l = (0, m.ag)(t), s = t.purchasedAt.toLocaleDateString(n, {
      month: "long",
      year: "numeric"
    });
    return (0, r.jsxs)("div", {
      className: j.purchaseInfo,
      children: [(0, r.jsx)(c.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: l
      }), null != a && (0, r.jsx)(c.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: b.intl.format(b.t.Io7ozn, {
          days: a.days.toString()
        })
      }), (0, r.jsxs)(c.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: [i ? b.intl.format(b.t["req+eY"], {
          dateAcquired: s
        }) : b.intl.format(b.t.gW9R4B, {
          date: s
        }), null != t.expiresAt && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("br", {}), b.intl.format(b.t.eZSTa5, {
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
        children: b.intl.string(b.t.nKdAlO)
      })]
    })
  },
  O = e => {
    let {
      user: t,
      guildId: n,
      avatarDecoration: a,
      className: h
    } = e, v = (0, o.e7)([f.Z], () => f.Z.getStatus(t.id)), {
      product: O,
      purchase: w
    } = (0, u.Z)(null == a ? true : a.skuId), C = x.ZP.canUseCollectibles(t), S = (0, d.qS)(w), I = (0, d.G1)(O), E = !C && S, A = (0, p.M)(!I || C), T = (0, m.kd)(O), _ = i.useMemo(() => E ? b.intl.string(b.t["7vkeu5"]) : (0, s.EQ)([I, C, A]).with([true, true, false], () => b.intl.string(b.t.hmyYK8)).with([true, false, true], () => b.intl.string(b.t.q0PlFn)).with([true, false, false], () => b.intl.string(b.t["0xs2sA"])).otherwise(() => b.intl.string(b.t.fEGjVQ)), [E, I, C, A]);
    return null != O && (null == w || E) ? (0, r.jsxs)("div", {
      className: l()(j.modalPreview, j.shopPreviewContainer, h),
      children: [(0, r.jsx)("div", {
        className: j.shopPreviewBanner,
        children: (0, r.jsx)(g.Z, {
          user: t,
          guildId: n,
          avatarDecorationOverride: a
        })
      }), (0, r.jsxs)("div", {
        className: j.shopPreviewTextContainer,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          children: T
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: _
        })]
      })]
    }) : (0, r.jsxs)("div", {
      className: l()(j.modalPreview, h),
      children: [(0, r.jsxs)("div", {
        className: j.previewSections,
        children: [(0, r.jsx)("div", {
          className: j.decorationPreview,
          children: (0, r.jsx)(g.Z, {
            user: t,
            guildId: n,
            avatarDecorationOverride: a
          })
        }), (0, r.jsx)("div", {
          className: j.smallDecorationPreviewsContainer,
          children: P.map(e => {
            let {
              avatarSize: i,
              showStatus: l
            } = e;
            return (0, r.jsx)("div", {
              className: j.smallDecorationPreview,
              children: (0, r.jsx)(g.Z, {
                user: t,
                guildId: n,
                avatarSize: i,
                avatarDecorationOverride: a,
                status: l ? v : true,
                "aria-hidden": true
              })
            }, "".concat(i).concat(l))
          })
        })]
      }), null != w && (0, r.jsx)(y, {
        purchase: w
      })]
    })
  }