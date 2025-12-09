/** Chunk was on web.js **/
/** chunk id: 731934, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
}), require("./953529.js"), require("./314940.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk225753 = require("./225753.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk519279 = require("./519279.js"),
  Chunk790680 = require("./790680.js"),
  Chunk197571 = require("./197571.js"),
  Chunk926895 = require("./926895.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i = w(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function x(e) {
  let {
    header: t,
    description: n,
    stepNumber: i
  } = e;
  return (0, r.jsxs)("div", {
    className: A.step,
    children: [(0, r.jsx)("div", {
      className: A.stepNumber,
      children: (0, r.jsx)(c.Heading, {
        variant: "heading-md/semibold",
        color: "text-brand",
        children: (0, r.jsx)(c.y5t, {
          children: i
        })
      })
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.Heading, {
        variant: "heading-sm/bold",
        children: (0, r.jsx)(c.y5t, {
          children: t
        })
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: n
      })]
    })]
  })
}

function L() {
  return (0, Chunk54381.jsxs)("div", {
    className: o()(Chunk790680.box, Chunk519279.box, Chunk790680.linkingBanner, Chunk790680.linkingBannerParent),
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk790680.linkingBannerUpper,
      children: [(0, Chunk54381.jsxs)("div", {
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          className: Chunk197571.marginBottom8,
          variant: "heading-xl/medium",
          children: (0, Chunk54381.jsx)(Chunk481060.y5t, {
            children: Chunk388032.intl.string(Chunk225753.default.pHEnV5)
          })
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          className: Chunk197571.marginBottom20,
          children: Chunk388032.intl.string(Chunk225753.default["1J/gZ4"])
        })]
      }), (0, Chunk54381.jsx)("img", {
        className: Chunk790680.bannerArt,
        src: Chunk926895,
        alt: Chunk388032.intl.string(Chunk225753.default["r+PDmu"])
      })]
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk790680.steps,
      children: [(0, Chunk54381.jsx)(x, {
        header: Chunk388032.intl.string(Chunk225753.default["7xxAni"]),
        description: Chunk388032.intl.string(Chunk225753.default["1M9So2"]),
        stepNumber: 1
      }), (0, Chunk54381.jsx)(x, {
        header: Chunk388032.intl.string(Chunk225753.default["AXgx+a"]),
        description: Chunk388032.intl.string(Chunk225753.default.GzMFnb),
        stepNumber: 2
      }), (0, Chunk54381.jsx)(x, {
        header: Chunk388032.intl.string(Chunk225753.default.MZn1tG),
        description: Chunk388032.intl.string(Chunk225753.default["8rLBxD"]),
        stepNumber: 3
      })]
    })]
  })
}

function j() {
  let e = (0, Chunk631885.VM)();
  return (0, Chunk54381.jsxs)("div", {
    className: o()(Chunk790680.box, Chunk519279.box, Chunk790680.linkingBanner),
    children: [(0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        className: Chunk197571.marginBottom8,
        variant: "heading-xl/medium",
        children: (0, Chunk54381.jsx)(Chunk481060.y5t, {
          children: Chunk388032.intl.string(Chunk225753.default.zUCWEL)
        })
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: Chunk197571.marginBottom20,
        children: Chunk388032.intl.format(Chunk225753.default.yMnoDl, {
          link: "https://support.discord.com/hc/articles/14155060633623"
        })
      }), module ? null : (0, Chunk54381.jsx)(Chunk568671.Z, {})]
    }), (0, Chunk54381.jsx)("img", {
      className: Chunk790680.bannerArt,
      src: Chunk926895,
      alt: Chunk388032.intl.string(Chunk225753.default["r+PDmu"])
    })]
  })
}

function M(e) {
  let {
    sectionType: t,
    sectionTitle: n,
    requests: a
  } = e, o = i.useRef(null), s = "".concat(t, "-list"), f = (0, u.Z)(s), p = i.useCallback(e => {
    let {
      row: n,
      listIndex: i
    } = e, o = a[n], s = i === a.length;
    return null == o ? null : (0, r.jsx)(y.Z, {
      userId: o.id,
      isLast: s,
      children: () => t === O.ne.ACTIVE ? (0, r.jsx)(E.u, {
        user: o
      }) : (0, r.jsx)(b.B, {
        user: o
      })
    }, o.id)
  }, [a, t]), _ = i.useCallback(() => (0, r.jsx)(d.Z, {
    children: (0, r.jsx)(c.Text, {
      className: C.marginBottom8,
      variant: "eyebrow",
      color: "text-default",
      children: n
    })
  }, "title"), [n]);
  return (0, r.jsx)("div", {
    className: A.section,
    children: (0, r.jsx)(l.bG, {
      navigator: f,
      children: (0, r.jsx)(l.SJ, {
        children: e => {
          var {
            ref: t,
            role: i
          } = e, l = D(e, ["ref", "role"]);
          return (0, r.jsx)(c.aVo, R({
            innerRole: i,
            innerAriaLabel: n,
            ref: e => {
              var n;
              o.current = e, t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null
            },
            sectionHeight: O.zE,
            rowHeight: O.ip,
            renderSection: _,
            renderRow: p,
            sections: [a.length],
            chunkSize: 30,
            fade: true
          }, l), s)
        }
      })
    })
  })
}
let k = () => {
    let e = (0, Chunk880257.Z)(),
      t = (0, Chunk631885.zu)(),
      n = module ? Chunk292352.AG : Chunk292352.i0,
      i = {
        count: exports.length,
        max: require
      },
      a = (0, Chunk785681.o)(Chunk388032.intl.formatToPlainString(Chunk225753.default["+tnO34"], Chunk473749), Chunk388032.intl.formatToPlainString(Chunk225753.default["pu6/U0"], Chunk473749));
    return exports.length > 0 ? (0, Chunk54381.jsx)(M, {
      sectionType: Chunk292352.ne.ACTIVE,
      sectionTitle: Chunk120356,
      requests: exports
    }) : (0, Chunk54381.jsxs)("div", {
      className: Chunk790680.section,
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        className: Chunk197571.marginBottom8,
        variant: "eyebrow",
        color: "text-default",
        children: Chunk120356
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk790680.box,
        children: (0, Chunk54381.jsx)(Chunk895328.Z, {
          text: Chunk388032.intl.string(Chunk225753.default.C4ScLD)
        })
      })]
    })
  },
  U = () => {
    let e = (0, Chunk631885.VM)(),
      t = (0, Chunk880257.Z)() ? Chunk292352.AG : Chunk292352.i0,
      n = (0, Chunk785681.o)(Chunk388032.intl.formatToPlainString(Chunk225753.default["1/PzIj"], {
        maxConnections: exports
      }), Chunk388032.intl.formatToPlainString(Chunk225753.default.RcTgiE, {
        maxConnections: exports
      }));
    return module ? (0, Chunk54381.jsx)("div", {
      className: Chunk790680.maxConnectionInfo,
      children: (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-xxs/medium",
        color: "text-muted",
        children: require
      })
    }) : null
  },
  G = () => {
    let e = (0, Chunk485664.o)(),
      t = (0, Chunk485664.Q)(),
      n = (0, Chunk278074.EQ)({
        helpline: module,
        throughline: exports
      }).with({
        helpline: true
      }, () => Chunk388032.intl.format(Chunk225753.default["KOwsf/"], {
        helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line"
      })).with({
        throughline: true
      }, () => Chunk388032.intl.format(Chunk225753.default["6tsC8u"], {
        helpLink: Chunk134612.$l
      })).otherwise(() => null);
    return null == require ? null : (0, Chunk54381.jsxs)("div", {
      className: Chunk197571.marginTop20,
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        className: Chunk790680.supportHeader,
        variant: "heading-sm/semibold",
        children: (0, Chunk54381.jsx)(Chunk481060.y5t, {
          children: Chunk388032.intl.string(Chunk225753.default["7/tVhv"])
        })
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: require
      })]
    })
  },
  Z = () => {
    let e = (0, Chunk631885.ov)(Chunk292352.ne.PENDING),
      t = (0, Chunk785681.o)(Chunk388032.intl.formatToPlainString(Chunk225753.default.IkAgkG, {
        count: module.length
      }), Chunk388032.intl.formatToPlainString(Chunk225753.default.Q8XnAa, {
        count: module.length
      }));
    return 0 === module.length ? null : (0, Chunk54381.jsx)(M, {
      sectionType: Chunk292352.ne.PENDING,
      sectionTitle: exports,
      requests: module
    })
  },
  B = () => {
    let e = (0, Chunk880257.Z)();
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk790680.container,
      children: [module ? (0, Chunk54381.jsx)(L, {}) : (0, Chunk54381.jsx)(j, {}), (0, Chunk54381.jsx)(k, {}), (0, Chunk54381.jsx)(Z, {}), (0, Chunk54381.jsx)(U, {}), (0, Chunk54381.jsx)(G, {})]
    })
  }