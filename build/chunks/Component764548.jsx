/** Chunk was on 8458 **/
/** chunk id: 764548, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  A: () => T
}), require("./228524.js"), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk714991 = require("./714991.jsx"),
  Chunk776231 = require("./776231.js"),
  Chunk486020 = require("./486020.js"),
  Chunk240248 = require("./240248.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk531338 = require("./531338.js"),
  Chunk937495 = require("./937495.js"),
  Chunk517061 = require("./517061.js");
let h = [16, 16, 14, 14, 12, 10, 8],
  T = function(e) {
    var i, t;
    let {
      guild: r,
      disabled: T,
      small: m,
      loading: v = false,
      description: y,
      memberCount: p,
      presenceCount: C,
      className: D
    } = e, N = (0, o.Ay)(), [O, R] = l.useState(false);
    if (null == r || v) return (0, n.jsx)("div", {
      className: s()(D, S.Nr, S.En, {
        [S.ax]: m,
        [S.HI]: T
      })
    });
    let {
      name: L
    } = r, b = null != r.discoverySplash && /^data:/.test(r.discoverySplash) ? r.discoverySplash : f.Ay.getGuildDiscoverySplashURL({
      id: r.id,
      splash: r.discoverySplash,
      size: 240 * (0, E.mZ)()
    }), P = (0, u.Mw)(N) ? A : g, j = null != (i = f.Ay.getGuildIconURL({
      id: r.id,
      icon: r.icon,
      size: 40
    })) ? i : true, G = null != r.description ? r.description : y, F = null != p ? p : null == r ? true : r.memberCount, V = null != C ? C : null == r ? true : r.presenceCount, x = null;
    if (null != j) x = (0, n.jsx)("img", {
      src: j,
      alt: "",
      className: S.my
    });
    else {
      let e = (0, I.oN)(r.name);
      x = (0, n.jsx)("div", {
        className: S.DE,
        children: (0, n.jsx)(a.Text, {
          className: S.q9,
          style: {
            fontSize: null != (t = h[e.length]) ? t : h[h.length - 1]
          },
          variant: "text-sm/normal",
          children: e
        })
      })
    }
    return (0, n.jsxs)("div", {
      className: s()(D, S.Nr, {
        [S.ax]: m,
        [S.HI]: T,
        [S.TS]: O
      }),
      children: [(0, n.jsxs)("div", {
        className: S.MY,
        children: [(0, n.jsx)("div", {
          className: S.Yi,
          children: (0, n.jsx)("img", {
            src: null != b ? b : P,
            alt: "",
            className: S.j0,
            onLoad: () => R(true)
          })
        }), (0, n.jsx)("div", {
          className: S.$f,
          children: (0, n.jsx)(d.Ay, {
            mask: d.Ay.Masks.SQUIRCLE,
            width: 48,
            height: 48,
            children: (0, n.jsx)("div", {
              className: S.SA,
              children: (0, n.jsx)(d.Ay, {
                mask: d.Ay.Masks.SQUIRCLE,
                width: 40,
                height: 40,
                children: null != x ? x : null
              })
            })
          })
        })]
      }), (0, n.jsxs)("div", {
        className: S.OA,
        children: [(0, n.jsxs)("div", {
          className: S.DD,
          children: [(0, n.jsx)(c.A, {
            className: S.w$,
            guild: r,
            tooltipColor: a.STz.Colors.PRIMARY
          }), (0, n.jsx)(a.Text, {
            className: S.J5,
            variant: "text-md/normal",
            children: (0, n.jsx)("span", {
              children: L
            })
          })]
        }), (0, n.jsx)("div", {
          className: S.iQ,
          children: (0, n.jsx)(a.Text, {
            lineClamp: 3,
            className: S.h_,
            variant: "text-sm/normal",
            tag: "span",
            children: G
          })
        }), (0, n.jsxs)("div", {
          className: S.Fj,
          children: [null != V && (0, n.jsxs)("div", {
            className: S.Kl,
            children: [(0, n.jsx)("div", {
              className: S.JX
            }), (0, n.jsx)(a.Text, {
              variant: "text-xs/normal",
              children: m ? _.intl.formatToPlainString(_.t.YMor7k, {
                count: V
              }) : _.intl.formatToPlainString(_.t["LC+S+m"], {
                membersOnline: V
              })
            })]
          }), null != F && (0, n.jsxs)("div", {
            className: S.Kl,
            children: [(0, n.jsx)("div", {
              className: S.Li
            }), (0, n.jsx)(a.Text, {
              variant: "text-xs/normal",
              children: m ? _.intl.formatToPlainString(_.t.YMor7k, {
                count: F
              }) : _.intl.formatToPlainString(_.t.zRl6XR, {
                count: F
              })
            })]
          })]
        })]
      })]
    })
  }