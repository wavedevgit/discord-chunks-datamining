/** Chunk was on 79764 **/
/** chunk id: 492749, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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

function f(e) {
  let {
    guild: t,
    onClick: n
  } = e;
  return (0, i.jsxs)(c.P3F, {
    className: C.clickableGuildRow,
    onClick: n,
    children: [(0, i.jsx)(d.Z, {
      guild: t,
      size: d.Z.Sizes.MEDIUM,
      active: true
    }), (0, i.jsx)(c.Text, {
      className: C.guildName,
      variant: "text-md/semibold",
      children: t.name
    }), (0, i.jsx)("img", {
      alt: "",
      src: p
    })]
  })
}

function j(e) {
  let {
    directoryChannelId: t,
    guild: n
  } = e, r = (0, o.e7)([u.Z], () => u.Z.getDirectoryEntry(t, n.id)), s = l.useRef(null);
  return (0, i.jsxs)("div", {
    className: C.guildRow,
    children: [(0, i.jsx)(d.Z, {
      guild: n,
      size: d.Z.Sizes.MEDIUM,
      active: true
    }), (0, i.jsx)(c.Text, {
      className: C.guildName,
      variant: "text-md/normal",
      children: n.name
    }), (0, i.jsx)(m.Z, {
      entry: r,
      targetElementRef: s,
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
          ref: s,
          size: "md",
          color: "currentColor"
        }, e), n = n = {
          className: C.overflowIcon
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

function h(e) {
  let t, {
      directoryChannelId: n,
      onGuildChosen: r,
      handleChooseCreate: o,
      directoryGuildName: d,
      availableGuilds: u,
      addedGuilds: m,
      loading: p
    } = e,
    [h, b] = l.useState(0);
  return t = p ? (0, i.jsx)("div", {
    className: C.emptyContainer,
    children: (0, i.jsx)(c.$jN, {})
  }) : 0 === h ? 0 === u.length ? (0, i.jsxs)("div", {
    className: C.emptyContainer,
    children: [(0, i.jsx)("img", {
      src: g,
      alt: "",
      className: C.emptyImage
    }), (0, i.jsx)(c.Text, {
      className: C.emptyText,
      color: "header-secondary",
      variant: "text-md/normal",
      children: x.intl.string(x.t.liuEhd)
    })]
  }) : u.map(e => (0, i.jsx)(f, {
    guild: e,
    onClick: () => r(e)
  }, e.id)) : 0 === m.length ? (0, i.jsxs)("div", {
    className: C.emptyContainer,
    children: [(0, i.jsx)("img", {
      src: g,
      alt: "",
      className: C.emptyImage
    }), (0, i.jsx)(c.Text, {
      className: C.emptyText,
      color: "header-secondary",
      variant: "text-md/normal",
      children: x.intl.string(x.t.WJLuKK)
    })]
  }) : m.map(e => (0, i.jsx)(j, {
    directoryChannelId: n,
    guild: e
  }, e.id)), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.xBx, {
      title: x.intl.formatToPlainString(x.t["9SKJdF"], {
        guildName: d
      }),
      subtitle: x.intl.string(x.t.pYFZ9p)
    }), (0, i.jsx)(a.fef, {
      controls: (0, i.jsxs)(c.njP, {
        className: C.tabBar,
        selectedItem: h,
        onItemSelect: b,
        type: "top",
        look: "brand",
        children: [(0, i.jsx)(c.njP.Item, {
          className: s()(C.tabBarItem, {
            [C.selectedTab]: 0 === h
          }),
          id: 0,
          children: x.intl.string(x.t.FTe8HS)
        }), (0, i.jsx)(c.njP.Item, {
          className: s()(C.tabBarItem, {
            [C.selectedTab]: 1 === h
          }),
          id: 1,
          children: x.intl.string(x.t.epOumr)
        })]
      }),
      children: (0, i.jsx)(c.Ttm, {
        className: C.scroller,
        children: (0, i.jsx)("div", {
          className: C.guildList,
          children: t
        })
      })
    }), (0, i.jsxs)(a.mzw, {
      children: [(0, i.jsx)(c.Heading, {
        variant: "heading-lg/semibold",
        className: C.footerTitle,
        children: x.intl.string(x.t.pgCZRP)
      }), (0, i.jsx)(a.Go$, {
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