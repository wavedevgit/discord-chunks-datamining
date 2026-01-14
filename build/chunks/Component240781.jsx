/** Chunk was on 79589 **/
/** chunk id: 240781, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
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
    } = e, n = (0, o.e7)([f.default], () => f.default.locale), i = (0, d.qS)(t), l = null != t.expiresAt ? (0, x.TD)(Date.now(), t.expiresAt) : null, a = (0, m.ag)(t), s = t.purchasedAt.toLocaleDateString(n, {
      month: "long",
      year: "numeric"
    });
    return (0, r.jsxs)("div", {
      className: j.purchaseInfo,
      children: [(0, r.jsx)(c.Text, {
        variant: "text-sm/semibold",
        color: "text-strong",
        children: a
      }), null != l && (0, r.jsx)(c.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: b.intl.format(b.t.Io7ozn, {
          days: l.days.toString()
        })
      }), (0, r.jsxs)(c.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: [b.intl.format(b.t.gW9R4B, {
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
      avatarDecoration: l,
      className: f
    } = e, x = (0, o.e7)([v.Z], () => v.Z.getStatus(t.id)), {
      product: O,
      purchase: S
    } = (0, u.Z)(null == l ? true : l.skuId), C = g.ZP.canUseCollectibles(t), w = null != S ? (0, d.qS)(S) : (0, d.G1)(O), I = !C && (0, d.qS)(S), E = (0, p.M)(!w || C), A = (0, m.ag)(S), T = (0, m.kd)(O), _ = i.useMemo(() => I ? b.intl.string(b.t["7vkeu5"]) : w && C && !E ? b.intl.string(b.t.hmyYK8) : w && !C && E ? b.intl.string(b.t.q0PlFn) : !w || C || E ? b.intl.string(b.t.fEGjVQ) : b.intl.string(b.t["0xs2sA"]), [I, w, C, E]);
    return null != l && (null == S || I) ? (0, r.jsxs)("div", {
      className: a()(j.modalPreview, j.shopPreviewContainer, f),
      children: [(0, r.jsx)("div", {
        className: j.shopPreviewBanner,
        children: (0, r.jsx)(h.Z, {
          user: t,
          guildId: n,
          avatarDecorationOverride: l
        })
      }), (0, r.jsxs)("div", {
        className: j.shopPreviewTextContainer,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          children: (0, s.isEmpty)(A) ? T : A
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: _
        })]
      })]
    }) : (0, r.jsxs)("div", {
      className: a()(j.modalPreview, f),
      children: [(0, r.jsxs)("div", {
        className: j.previewSections,
        children: [(0, r.jsx)("div", {
          className: j.decorationPreview,
          children: (0, r.jsx)(h.Z, {
            user: t,
            guildId: n,
            avatarDecorationOverride: l
          })
        }), (0, r.jsx)("div", {
          className: j.smallDecorationPreviewsContainer,
          children: P.map(e => {
            let {
              avatarSize: i,
              showStatus: a
            } = e;
            return (0, r.jsx)("div", {
              className: j.smallDecorationPreview,
              children: (0, r.jsx)(h.Z, {
                user: t,
                guildId: n,
                avatarSize: i,
                avatarDecorationOverride: l,
                status: a ? x : true,
                "aria-hidden": true
              })
            }, "".concat(i).concat(a))
          })
        })]
      }), null != S && (0, r.jsx)(y, {
        purchase: S
      })]
    })
  }