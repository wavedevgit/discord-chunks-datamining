/** Chunk was on web.js **/
/** chunk id: 731934, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => F
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
  Chunk517319 = require("./517319.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk108319 = require("./108319.js"),
  Chunk535137 = require("./535137.js"),
  Chunk478411 = require("./478411.js"),
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

function w(e, t) {
  if (null == e) return {};
  var n, r, i = D(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function D(e, t) {
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
    className: C.step,
    children: [(0, r.jsx)("div", {
      className: C.stepNumber,
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
  return (0, r.jsxs)("div", {
    className: o()(C.box, T.box, C.linkingBanner, C.linkingBannerParent),
    children: [(0, r.jsxs)("div", {
      className: C.linkingBannerUpper,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(c.Heading, {
          className: A.marginBottom8,
          variant: "heading-xl/medium",
          children: (0, r.jsx)(c.y5t, {
            children: I.intl.string(S.default.pHEnV5)
          })
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          className: A.marginBottom20,
          children: I.intl.string(S.default["1J/gZ4"])
        })]
      }), (0, r.jsx)("img", {
        className: C.bannerArt,
        src: N,
        alt: I.intl.string(S.default["r+PDmu"])
      })]
    }), (0, r.jsxs)("div", {
      className: C.steps,
      children: [(0, r.jsx)(x, {
        header: I.intl.string(S.default["7xxAni"]),
        description: I.intl.string(S.default["1M9So2"]),
        stepNumber: 1
      }), (0, r.jsx)(x, {
        header: I.intl.string(S.default["AXgx+a"]),
        description: I.intl.string(S.default.GzMFnb),
        stepNumber: 2
      }), (0, r.jsx)(x, {
        header: I.intl.string(S.default.MZn1tG),
        description: I.intl.string(S.default["8rLBxD"]),
        stepNumber: 3
      })]
    })]
  })
}

function j() {
  let e = (0, m.VM)();
  return (0, r.jsxs)("div", {
    className: o()(C.box, T.box, C.linkingBanner),
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.Heading, {
        className: A.marginBottom8,
        variant: "heading-xl/medium",
        children: (0, r.jsx)(c.y5t, {
          children: I.intl.string(S.default.zUCWEL)
        })
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        className: A.marginBottom20,
        children: I.intl.format(S.default.yMnoDl, {
          link: "https://support.discord.com/hc/articles/14155060633623"
        })
      }), e ? null : (0, r.jsx)(g.Z, {})]
    }), (0, r.jsx)("img", {
      className: C.bannerArt,
      src: N,
      alt: I.intl.string(S.default["r+PDmu"])
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
      className: A.marginBottom8,
      variant: "eyebrow",
      color: "text-default",
      children: n
    })
  }, "title"), [n]);
  return (0, r.jsx)("div", {
    className: C.section,
    children: (0, r.jsx)(l.bG, {
      navigator: f,
      children: (0, r.jsx)(l.SJ, {
        children: e => {
          var {
            ref: t,
            role: i
          } = e, l = w(e, ["ref", "role"]);
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
    let e = (0, _.Z)(),
      t = (0, m.zu)(),
      n = e ? O.AG : O.i0,
      i = {
        count: t.length,
        max: n
      },
      a = (0, f.o)(I.intl.formatToPlainString(S.default["+tnO34"], i), I.intl.formatToPlainString(S.default["pu6/U0"], i));
    return t.length > 0 ? (0, r.jsx)(M, {
      sectionType: O.ne.ACTIVE,
      sectionTitle: a,
      requests: t
    }) : (0, r.jsxs)("div", {
      className: C.section,
      children: [(0, r.jsx)(c.Text, {
        className: A.marginBottom8,
        variant: "eyebrow",
        color: "text-default",
        children: a
      }), (0, r.jsx)("div", {
        className: C.box,
        children: (0, r.jsx)(h.Z, {
          text: I.intl.string(S.default.C4ScLD)
        })
      })]
    })
  },
  U = () => {
    let e = (0, m.VM)(),
      t = (0, _.Z)() ? O.AG : O.i0,
      n = (0, f.o)(I.intl.formatToPlainString(S.default["1/PzIj"], {
        maxConnections: t
      }), I.intl.formatToPlainString(S.default.RcTgiE, {
        maxConnections: t
      }));
    return e ? (0, r.jsx)("div", {
      className: C.maxConnectionInfo,
      children: (0, r.jsx)(c.Text, {
        variant: "text-xxs/medium",
        color: "text-muted",
        children: n
      })
    }) : null
  },
  G = () => {
    let e = (0, p.o)(),
      t = (0, p.Q)(),
      n = (0, s.EQ)({
        helpline: e,
        throughline: t
      }).with({
        helpline: true
      }, () => I.intl.format(S.default["KOwsf/"], {
        helpLink: "https://support.discord.com/hc/articles/7925648993943-Crisis-Text-Line"
      })).with({
        throughline: true
      }, () => I.intl.format(S.default["6tsC8u"], {
        helpLink: v.$l
      })).otherwise(() => null);
    return null == n ? null : (0, r.jsxs)("div", {
      className: A.marginTop20,
      children: [(0, r.jsx)(c.Heading, {
        className: C.supportHeader,
        variant: "heading-sm/semibold",
        children: (0, r.jsx)(c.y5t, {
          children: I.intl.string(S.default["7/tVhv"])
        })
      }), (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: n
      })]
    })
  },
  Z = () => {
    let e = (0, m.ov)(O.ne.PENDING),
      t = (0, f.o)(I.intl.formatToPlainString(S.default.IkAgkG, {
        count: e.length
      }), I.intl.formatToPlainString(S.default.Q8XnAa, {
        count: e.length
      }));
    return 0 === e.length ? null : (0, r.jsx)(M, {
      sectionType: O.ne.PENDING,
      sectionTitle: t,
      requests: e
    })
  },
  F = () => {
    let e = (0, _.Z)();
    return (0, r.jsxs)("div", {
      className: C.container,
      children: [e ? (0, r.jsx)(L, {}) : (0, r.jsx)(j, {}), (0, r.jsx)(k, {}), (0, r.jsx)(Z, {}), (0, r.jsx)(U, {}), (0, r.jsx)(G, {})]
    })
  }