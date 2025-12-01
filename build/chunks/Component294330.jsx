/** Chunk was on 1272 **/
/** chunk id: 294330, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Eo: () => P,
  VD: () => N,
  ZP: () => x
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk410030 = require("./410030.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk66637 = require("./66637.jsx"),
  Chunk782738 = require("./782738.jsx"),
  Chunk371260 = require("./371260.jsx"),
  Chunk372769 = require("./372769.jsx"),
  Chunk134432 = require("./134432.js"),
  Chunk768581 = require("./768581.js"),
  Chunk356164 = require("./356164.js"),
  Chunk826946 = require("./826946.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk972725 = require("./972725.js"),
  Chunk129512 = require("./129512.js"),
  Chunk330065 = require("./330065.js"),
  Chunk755386 = require("./755386.js");

function N(e) {
  let {
    guild: t,
    onClick: l,
    onView: s
  } = e, [h, g] = i.useState(false), [E, N] = i.useState(false), [j, P] = i.useState(false), x = i.useRef(null), A = i.useCallback(async () => {
    N(true);
    try {
      await l(t.id)
    } finally {
      N(false)
    }
  }, [t.id, l]), Z = i.useCallback(e => {
    e && !h && (g(true), null == s || s(t.id))
  }, [t.id, h, s]), w = i.useCallback(e => {
    (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("88560").then(n.bind(n, 858523));
      return n => {
        var i, l;
        return (0, r.jsx)(e, (i = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, n), l = l = {
          guild: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
        }), i))
      }
    })
  }, [t]), L = (0, d.ZP)(), R = t.features.has(y.GuildFeatures.HUB), D = i.useMemo(() => {
    let e = b.ZP.getGuildDiscoverySplashURL({
      id: t.id,
      splash: t.discoverySplash,
      size: 300 * (0, _.x_)()
    });
    if (null != e) return e;
    if (R) return T;
    switch (L) {
      case y.BRd.DARK:
        return C;
      case y.BRd.LIGHT:
        return S
    }
  }, [t.discoverySplash, t.id, R, L]), M = i.useMemo(() => b.ZP.getGuildIconURL({
    id: t.id,
    icon: t.icon,
    size: 48
  }), [t.icon, t.id]);
  return (0, r.jsxs)("div", {
    className: I.container,
    children: [E && (0, r.jsx)("div", {
      className: I.spinnerContainer,
      children: (0, r.jsx)(c.$jN, {
        type: c.$jN.Type.PULSING_ELLIPSIS,
        className: I.spinner
      })
    }), (0, r.jsx)(o.$, {
      innerRef: x,
      onChange: Z,
      active: !h,
      threshold: .55,
      children: (0, r.jsxs)(f.Z, {
        ref: x,
        className: I.card,
        onClick: A,
        disabled: E,
        onContextMenu: w,
        "aria-label": v.intl.string(v.t["M9wQ+f"]),
        children: [(0, r.jsxs)("div", {
          className: I.header,
          children: [(0, r.jsx)("div", {
            className: a()(I.banner, {
              [I.loaded]: j
            }),
            children: (0, r.jsx)("img", {
              src: D,
              alt: "",
              className: I.bannerImage,
              onLoad: () => P(true)
            })
          }), (0, r.jsx)(O.Z, {
            className: I.maximizeIcon,
            guildId: t.id
          }), (0, r.jsx)("div", {
            className: I.icon,
            children: (0, r.jsx)(p.ZP, {
              mask: p.ZP.Masks.SQUIRCLE,
              width: 56,
              height: 56,
              children: (0, r.jsx)("div", {
                className: I.iconMask,
                children: (0, r.jsx)(p.ZP, {
                  mask: p.ZP.Masks.SQUIRCLE,
                  width: 48,
                  height: 48,
                  children: (0, r.jsx)("img", {
                    src: M,
                    alt: "",
                    className: I.avatar
                  })
                })
              })
            })
          })]
        }), (0, r.jsxs)("div", {
          className: I.guildDetails,
          children: [(0, r.jsxs)("div", {
            className: I.title,
            children: [(0, r.jsx)(m.Z, {
              className: I.guildBadge,
              guild: t,
              tooltipColor: c.aML.Colors.PRIMARY
            }), (0, r.jsx)(c.Heading, {
              variant: "heading-md/semibold",
              className: I.guildName,
              children: t.name
            })]
          }), (0, r.jsx)(c.Text, {
            className: I.description,
            variant: "text-sm/normal",
            color: "header-secondary",
            children: t.description
          }), (0, r.jsxs)("div", {
            className: I.memberDetails,
            children: [null != t.presenceCount && (0, r.jsxs)("div", {
              className: I.memberDetailsCount,
              children: [(0, r.jsx)("div", {
                className: I.presenceCountDot
              }), (0, r.jsx)(c.Text, {
                className: I.memberDetailsText,
                variant: "text-xs/normal",
                color: "header-secondary",
                children: v.intl.format(v.t["LC+S+m"], {
                  membersOnline: t.presenceCount
                })
              })]
            }), null != t.memberCount && (0, r.jsxs)("div", {
              className: I.memberDetailsCount,
              children: [(0, r.jsx)("div", {
                className: I.memberCountDot
              }), (0, r.jsx)(c.Text, {
                className: I.memberDetailsText,
                variant: "text-xs/normal",
                color: "header-secondary",
                children: v.intl.format(v.t.zRl6XR, {
                  count: t.memberCount
                })
              })]
            })]
          })]
        })]
      })
    })]
  })
}

function j(e) {
  let {
    guildId: t,
    onClick: n,
    onView: i
  } = e, l = (0, s.e7)([E.Z], () => E.Z.getGuild(t));
  return null == l ? null : (0, r.jsx)(N, {
    guild: l,
    onClick: n,
    onView: i
  })
}

function P(e) {
  let {
    guildId: t,
    index: n,
    onClick: l,
    onView: a
  } = e, s = i.useRef(null == t), o = i.useCallback((e, t, n, i) => null == t.guildId ? (0, r.jsx)(g.Z, {
    state: n,
    cleanUp: i,
    children: (0, r.jsx)(h.Z, {
      className: I.placeholder
    })
  }, e) : (0, r.jsx)(g.Z, {
    state: n,
    cleanUp: i,
    animate: s.current,
    children: (0, r.jsx)(j, {
      guildId: t.guildId,
      onClick: l,
      onView: a
    })
  }, e), [l, a]), u = i.useCallback(e => {
    var t;
    return null != (t = e.guildId) ? t : "".concat(e.index)
  }, []), d = i.useMemo(() => [{
    guildId: t,
    index: n
  }], [t, n]);
  return (0, r.jsx)("div", {
    className: I.transitionGroup,
    children: (0, r.jsx)(c.W3x, {
      items: d,
      renderItem: o,
      getItemKey: u
    })
  })
}
let x = Chunk473749.memo(j)