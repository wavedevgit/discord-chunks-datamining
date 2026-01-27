/** Chunk was on 68406 **/
/** chunk id: 942225, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk993408 = require("./993408.js"),
  Chunk821701 = require("./821701.js"),
  Chunk645178 = require("./645178.js"),
  Chunk702211 = require("./702211.js"),
  Chunk773669 = require("./773669.js"),
  Chunk290863 = require("./290863.js"),
  Chunk405269 = require("./405269.js"),
  Chunk927578 = require("./927578.js"),
  Chunk291661 = require("./291661.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk455509 = require("./455509.js");
let _ = [{
    avatarSize: Chunk397927._3J.SIZE_40,
    showStatus: false
  }, {
    avatarSize: Chunk397927._3J.SIZE_32,
    showStatus: false
  }, {
    avatarSize: Chunk397927._3J.SIZE_40,
    showStatus: true
  }, {
    avatarSize: Chunk397927._3J.SIZE_32,
    showStatus: true
  }],
  j = e => {
    let {
      purchase: t
    } = e, r = (0, o.bG)([x.default], () => x.default.locale), l = (0, u.gA)(t), i = null != t.expiresAt ? (0, h.Tf)(Date.now(), t.expiresAt) : null, s = (0, m.Tk)(t), a = t.purchasedAt.toLocaleDateString(r, {
      month: "long",
      year: "numeric"
    });
    return (0, n.jsxs)("div", {
      className: f.c6,
      children: [(0, n.jsx)(c.Text, {
        variant: "text-sm/semibold",
        color: "text-strong",
        children: s
      }), null != i && (0, n.jsx)(c.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: y.intl.format(y.t.Io7ozn, {
          days: i.days.toString()
        })
      }), (0, n.jsxs)(c.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: [y.intl.format(y.t.gW9R4B, {
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
      }), l && (0, n.jsx)(c.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: y.intl.string(y.t.nKdAlO)
      })]
    })
  },
  O = e => {
    let {
      user: t,
      guildId: r,
      avatarDecoration: i,
      className: x
    } = e, h = (0, o.bG)([g.A], () => g.A.getStatus(t.id)), {
      product: O,
      purchase: b
    } = (0, d.A)(null == i ? true : i.skuId), I = A.Ay.canUseCollectibles(t), P = null != b ? (0, u.gA)(b) : (0, u.G0)(O), S = !I && (0, u.gA)(b), E = (0, p.b)(!P || I), C = (0, m.Tk)(b), w = (0, m.o7)(O), T = l.useMemo(() => S ? y.intl.string(y.t["7vkeu5"]) : P && I && !E ? y.intl.string(y.t.hmyYK8) : P && !I && E ? y.intl.string(y.t.q0PlFn) : !P || I || E ? y.intl.string(y.t.fEGjVQ) : y.intl.string(y.t["0xs2sA"]), [S, P, I, E]);
    return null != i && (null == b || S) ? (0, n.jsxs)("div", {
      className: s()(f.kk, f.O7, x),
      children: [(0, n.jsx)("div", {
        className: f.Bo,
        children: (0, n.jsx)(v.A, {
          user: t,
          guildId: r,
          avatarDecorationOverride: i
        })
      }), (0, n.jsxs)("div", {
        className: f.hx,
        children: [(0, n.jsx)(c.Text, {
          variant: "text-sm/semibold",
          children: (0, a.isEmpty)(C) ? w : C
        }), (0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: T
        })]
      })]
    }) : (0, n.jsxs)("div", {
      className: s()(f.kk, x),
      children: [(0, n.jsxs)("div", {
        className: f.$M,
        children: [(0, n.jsx)("div", {
          className: f.TB,
          children: (0, n.jsx)(v.A, {
            user: t,
            guildId: r,
            avatarDecorationOverride: i
          })
        }), (0, n.jsx)("div", {
          className: f.Kh,
          children: _.map(e => {
            let {
              avatarSize: l,
              showStatus: s
            } = e;
            return (0, n.jsx)("div", {
              className: f.CX,
              children: (0, n.jsx)(v.A, {
                user: t,
                guildId: r,
                avatarSize: l,
                avatarDecorationOverride: i,
                status: s ? h : true,
                "aria-hidden": true
              })
            }, "".concat(l).concat(s))
          })
        })]
      }), null != b && (0, n.jsx)(j, {
        purchase: b
      })]
    })
  }