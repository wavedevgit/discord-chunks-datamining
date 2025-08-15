/** Chunk was on 30202 **/
/** chunk id: 731934, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./953529.js"), require("./314940.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk209613 = require("./209613.js"),
  Chunk82295 = require("./82295.jsx"),
  Chunk785681 = require("./785681.js"),
  Chunk485664 = require("./485664.js"),
  Chunk880257 = require("./880257.js"),
  Chunk631885 = require("./631885.js"),
  Chunk895328 = require("./895328.jsx"),
  Chunk568671 = require("./568671.jsx"),
  Chunk419821 = require("./419821.jsx"),
  Chunk367515 = require("./367515.jsx"),
  Chunk250285 = require("./250285.jsx"),
  Chunk292352 = require("./292352.js"),
  Chunk134612 = require("./134612.js"),
  Chunk345909 = require("./345909.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk519279 = require("./519279.js"),
  Chunk790680 = require("./790680.js"),
  Chunk197571 = require("./197571.js"),
  Chunk926895 = require("./926895.js");

function y(e) {
  let {
    header: t,
    description: n,
    stepNumber: r
  } = e;
  return (0, i.jsxs)("div", {
    className: T.step,
    children: [(0, i.jsx)("div", {
      className: T.stepNumber,
      children: (0, i.jsx)(c.X6q, {
        variant: "heading-md/semibold",
        color: "text-brand",
        children: (0, i.jsx)(c.y5t, {
          children: r
        })
      })
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(c.X6q, {
        variant: "heading-sm/bold",
        children: (0, i.jsx)(c.y5t, {
          children: t
        })
      }), (0, i.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: n
      })]
    })]
  })
}

function A() {
  return (0, Chunk255367.jsxs)("div", {
    className: a()(Chunk790680.box, Chunk519279.box, Chunk790680.linkingBanner, Chunk790680.linkingBannerParent),
    children: [(0, Chunk255367.jsxs)("div", {
      className: Chunk790680.linkingBannerUpper,
      children: [(0, Chunk255367.jsxs)("div", {
        children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
          className: Chunk197571.marginBottom8,
          variant: "heading-xl/medium",
          children: (0, Chunk255367.jsx)(Chunk481060.y5t, {
            children: Chunk388032.intl.string(Chunk345909.default.pHEnV1)
          })
        }), (0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          className: Chunk197571.marginBottom20,
          children: Chunk388032.intl.string(Chunk345909.default["1J/gZ2"])
        })]
      }), (0, Chunk255367.jsx)("img", {
        className: Chunk790680.bannerArt,
        src: Chunk926895,
        alt: Chunk388032.intl.string(Chunk345909.default["r+PDmp"])
      })]
    }), (0, Chunk255367.jsxs)("div", {
      className: Chunk790680.steps,
      children: [(0, Chunk255367.jsx)(y, {
        header: Chunk388032.intl.string(Chunk345909.default["7xxAnp"]),
        description: Chunk388032.intl.string(Chunk345909.default["1M9So6"]),
        stepNumber: 1
      }), (0, Chunk255367.jsx)(y, {
        header: Chunk388032.intl.string(Chunk345909.default["AXgx+f"]),
        description: Chunk388032.intl.string(Chunk345909.default.GzMFnZ),
        stepNumber: 2
      }), (0, Chunk255367.jsx)(y, {
        header: Chunk388032.intl.string(Chunk345909.default.MZn1tL),
        description: Chunk388032.intl.string(Chunk345909.default["8rLBxM"]),
        stepNumber: 3
      })]
    })]
  })
}

function P() {
  let e = (0, Chunk631885.VM)();
  return (0, Chunk255367.jsxs)("div", {
    className: a()(Chunk790680.box, Chunk519279.box, Chunk790680.linkingBanner),
    children: [(0, Chunk255367.jsxs)("div", {
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        className: Chunk197571.marginBottom8,
        variant: "heading-xl/medium",
        children: (0, Chunk255367.jsx)(Chunk481060.y5t, {
          children: Chunk388032.intl.string(Chunk345909.default.zUCWEB)
        })
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: Chunk197571.marginBottom20,
        children: Chunk388032.intl.format(Chunk345909.default.yMnoDg, {
          link: "https://support.discord.com/hc/articles/14155060633623"
        })
      }), module ? null : (0, Chunk255367.jsx)(Chunk568671.Z, {})]
    }), (0, Chunk255367.jsx)("img", {
      className: Chunk790680.bannerArt,
      src: Chunk926895,
      alt: Chunk388032.intl.string(Chunk345909.default["r+PDmp"])
    })]
  })
}

function R(e) {
  let {
    sectionType: t,
    sectionTitle: n,
    requests: s
  } = e, a = r.useRef(null), l = "".concat(t, "-list"), m = (0, d.Z)(l), p = r.useCallback(e => {
    let {
      row: n,
      listIndex: r
    } = e, a = s[n], l = r === s.length;
    return null == a ? null : (0, i.jsx)(j.Z, {
      userId: a.id,
      isLast: l,
      children: () => t === E.ne.ACTIVE ? (0, i.jsx)(x.u, {
        user: a
      }) : (0, i.jsx)(_.B, {
        user: a
      })
    }, a.id)
  }, [s, t]), g = r.useCallback(() => (0, i.jsx)(u.Z, {
    children: (0, i.jsx)(c.Text, {
      className: N.marginBottom8,
      variant: "eyebrow",
      color: "header-secondary",
      children: n
    })
  }, "title"), [n]);
  return (0, i.jsx)("div", {
    className: T.section,
    children: (0, i.jsx)(o.bG, {
      navigator: m,
      children: (0, i.jsx)(o.SJ, {
        children: e => {
          var {
            ref: t,
            role: r
          } = e, o = function(e, t) {
            if (null == e) return {};
            var n, i, r = function(e, t) {
              if (null == e) return {};
              var n, i, r = {},
                s = Object.keys(e);
              for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
              return r
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var s = Object.getOwnPropertySymbols(e);
              for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
            }
            return r
          }(e, ["ref", "role"]);
          return (0, i.jsx)(c.aVo, function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), i.forEach(function(t) {
                var i;
                i = n[t], t in e ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = i
              })
            }
            return e
          }({
            innerRole: r,
            innerAriaLabel: n,
            ref: e => {
              var n;
              a.current = e, t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null
            },
            sectionHeight: E.zE,
            rowHeight: E.ip,
            renderSection: g,
            renderRow: p,
            sections: [s.length],
            chunkSize: 30,
            fade: true
          }, o), l)
        }
      })
    })
  })
}
let D = () => {
    let e = (0, Chunk880257.Z)(),
      t = (0, Chunk631885.mq)(Chunk292352.ne.ACTIVE),
      n = module ? Chunk292352.AG : Chunk292352.i0,
      r = {
        count: exports.length,
        max: require
      },
      s = (0, Chunk785681.o)(Chunk388032.intl.formatToPlainString(Chunk345909.default["+tnO39"], Chunk73800), Chunk388032.intl.formatToPlainString(Chunk345909.default["pu6/U1"], Chunk73800));
    return exports.length > 0 ? (0, Chunk255367.jsx)(R, {
      sectionType: Chunk292352.ne.ACTIVE,
      sectionTitle: Chunk120356,
      requests: exports
    }) : (0, Chunk255367.jsxs)("div", {
      className: Chunk790680.section,
      children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
        className: Chunk197571.marginBottom8,
        variant: "eyebrow",
        color: "header-secondary",
        children: Chunk120356
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk790680.box,
        children: (0, Chunk255367.jsx)(Chunk895328.Z, {
          text: Chunk388032.intl.string(Chunk345909.default.C4ScLC)
        })
      })]
    })
  },
  Z = () => {
    let e = (0, Chunk631885.VM)(),
      t = (0, Chunk880257.Z)() ? Chunk292352.AG : Chunk292352.i0,
      n = (0, Chunk785681.o)(Chunk388032.intl.formatToPlainString(Chunk345909.default["1/PzIi"], {
        maxConnections: exports
      }), Chunk388032.intl.formatToPlainString(Chunk345909.default.RcTgiI, {
        maxConnections: exports
      }));
    return module ? (0, Chunk255367.jsx)("div", {
      className: Chunk790680.maxConnectionInfo,
      children: (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-xxs/medium",
        color: "text-muted",
        children: require
      })
    }) : null
  },
  w = () => {
    let e = (0, Chunk485664.o)(),
      t = (0, Chunk485664.Q)(),
      n = (0, Chunk278074.EQ)({
        helpline: module,
        throughline: exports
      }).with({
        helpline: true
      }, () => Chunk388032.intl.format(Chunk345909.default.KOwsf3, {
        helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line"
      })).with({
        throughline: true
      }, () => Chunk388032.intl.format(Chunk345909.default["6tsC8v"], {
        helpLink: Chunk134612.$l
      })).otherwise(() => null);
    return null == require ? null : (0, Chunk255367.jsxs)("div", {
      className: a()(Chunk790680.__invalid_helpLineInfo, Chunk197571.marginTop20),
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        className: Chunk790680.supportHeader,
        variant: "heading-sm/semibold",
        children: (0, Chunk255367.jsx)(Chunk481060.y5t, {
          children: Chunk388032.intl.string(Chunk345909.default["7/tVho"])
        })
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: require
      })]
    })
  },
  k = () => {
    let e = (0, Chunk631885.mq)(Chunk292352.ne.PENDING),
      t = (0, Chunk785681.o)(Chunk388032.intl.formatToPlainString(Chunk345909.default.IkAgkJ, {
        count: module.length
      }), Chunk388032.intl.formatToPlainString(Chunk345909.default.Q8XnAQ, {
        count: module.length
      }));
    return 0 === module.length ? null : (0, Chunk255367.jsx)(R, {
      sectionType: Chunk292352.ne.PENDING,
      sectionTitle: exports,
      requests: module
    })
  },
  L = () => {
    let e = (0, Chunk880257.Z)();
    return (0, Chunk255367.jsxs)("div", {
      className: Chunk790680.container,
      children: [module ? (0, Chunk255367.jsx)(A, {}) : (0, Chunk255367.jsx)(P, {}), (0, Chunk255367.jsx)(D, {}), (0, Chunk255367.jsx)(k, {}), (0, Chunk255367.jsx)(Z, {}), (0, Chunk255367.jsx)(w, {})]
    })
  }