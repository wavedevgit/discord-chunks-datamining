/** Chunk was on 79764 **/
/** chunk id: 492749, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk273387 = require("./273387.js"),
  Chunk16853 = require("./16853.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk149372 = require("./149372.js"),
  Chunk36705 = require("./36705.js"),
  Chunk216019 = require("./216019.js");

function j(e) {
  let {
    guild: t,
    onClick: n
  } = e;
  return (0, i.jsxs)(c.P3F, {
    className: g.clickableGuildRow,
    onClick: n,
    children: [(0, i.jsx)(d.Z, {
      guild: t,
      size: d.Z.Sizes.MEDIUM,
      active: true
    }), (0, i.jsx)(c.Text, {
      className: g.guildName,
      variant: "text-md/semibold",
      children: t.name
    }), (0, i.jsx)("img", {
      alt: "",
      src: f
    })]
  })
}

function p(e) {
  let {
    directoryChannelId: t,
    guild: n
  } = e, a = (0, o.e7)([u.Z], () => u.Z.getDirectoryEntry(t, n.id)), r = l.useRef(null);
  return (0, i.jsxs)("div", {
    className: g.guildRow,
    children: [(0, i.jsx)(d.Z, {
      guild: n,
      size: d.Z.Sizes.MEDIUM,
      active: true
    }), (0, i.jsx)(c.Text, {
      className: g.guildName,
      variant: "text-md/normal",
      children: n.name
    }), (0, i.jsx)(m.Z, {
      entry: a,
      targetElementRef: r,
      children: e => {
        var t, n;
        return (0, i.jsx)(c.xhG, (t = function(e) {
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
          ref: r,
          size: "md",
          color: "currentColor"
        }, e), n = n = {
          className: g.overflowIcon
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }
    })]
  })
}

function b(e) {
  let t, {
      directoryChannelId: n,
      onGuildChosen: a,
      handleChooseCreate: o,
      directoryGuildName: d,
      availableGuilds: u,
      addedGuilds: m,
      loading: f
    } = e,
    [b, h] = l.useState(0);
  return t = f ? (0, i.jsx)("div", {
    className: g.emptyContainer,
    children: (0, i.jsx)(c.$jN, {})
  }) : 0 === b ? 0 === u.length ? (0, i.jsxs)("div", {
    className: g.emptyContainer,
    children: [(0, i.jsx)("img", {
      src: C,
      alt: "",
      className: g.emptyImage
    }), (0, i.jsx)(c.Text, {
      className: g.emptyText,
      color: "text-default",
      variant: "text-md/normal",
      children: x.intl.string(x.t.liuEhd)
    })]
  }) : u.map(e => (0, i.jsx)(j, {
    guild: e,
    onClick: () => a(e)
  }, e.id)) : 0 === m.length ? (0, i.jsxs)("div", {
    className: g.emptyContainer,
    children: [(0, i.jsx)("img", {
      src: C,
      alt: "",
      className: g.emptyImage
    }), (0, i.jsx)(c.Text, {
      className: g.emptyText,
      color: "text-default",
      variant: "text-md/normal",
      children: x.intl.string(x.t.WJLuKK)
    })]
  }) : m.map(e => (0, i.jsx)(p, {
    directoryChannelId: n,
    guild: e
  }, e.id)), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(s.xBx, {
      title: x.intl.formatToPlainString(x.t["9SKJdF"], {
        guildName: d
      }),
      subtitle: x.intl.string(x.t.pYFZ9p)
    }), (0, i.jsx)(s.fef, {
      controls: (0, i.jsxs)(c.njP, {
        className: g.tabBar,
        selectedItem: b,
        onItemSelect: h,
        type: "top",
        look: "brand",
        children: [(0, i.jsx)(c.njP.Item, {
          className: r()(g.tabBarItem, {
            [g.selectedTab]: 0 === b
          }),
          id: 0,
          children: x.intl.string(x.t.FTe8HS)
        }), (0, i.jsx)(c.njP.Item, {
          className: r()(g.tabBarItem, {
            [g.selectedTab]: 1 === b
          }),
          id: 1,
          children: x.intl.string(x.t.epOumr)
        })]
      }),
      children: (0, i.jsx)(c.Ttm, {
        className: g.scroller,
        children: (0, i.jsx)("div", {
          className: g.guildList,
          children: t
        })
      })
    }), (0, i.jsxs)(s.mzw, {
      children: [(0, i.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        className: g.footerTitle,
        children: x.intl.string(x.t.pgCZRP)
      }), (0, i.jsx)(s.Go$, {
        actionsFullWidth: true,
        actions: [{
          variant: "secondary",
          text: x.intl.string(x.t.WqJbLi),
          onClick: o
        }]
      })]
    })]
  })
}