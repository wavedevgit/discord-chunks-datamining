/** Chunk was on 79764 **/
/** chunk id: 492749, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk369585 = require("./369585.jsx"),
  Chunk103866 = require("./103866.jsx"),
  Chunk213734 = require("./213734.jsx"),
  Chunk37148 = require("./37148.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk273387 = require("./273387.js"),
  Chunk16853 = require("./16853.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk722326 = require("./722326.js"),
  Chunk36705 = require("./36705.js"),
  Chunk216019 = require("./216019.js");

function _(e) {
  let {
    guild: t,
    onClick: n
  } = e;
  return (0, i.jsxs)(m.P3F, {
    className: f.clickableGuildRow,
    onClick: n,
    children: [(0, i.jsx)(x.Z, {
      guild: t,
      size: x.Z.Sizes.MEDIUM,
      active: true
    }), (0, i.jsx)(m.Text, {
      className: f.guildName,
      variant: "text-md/semibold",
      children: t.name
    }), (0, i.jsx)("img", {
      alt: "",
      src: h
    })]
  })
}

function b(e) {
  let {
    directoryChannelId: t,
    guild: n
  } = e, s = (0, a.e7)([C.Z], () => C.Z.getDirectoryEntry(t, n.id)), r = l.useRef(null);
  return (0, i.jsxs)("div", {
    className: f.guildRow,
    children: [(0, i.jsx)(x.Z, {
      guild: n,
      size: x.Z.Sizes.MEDIUM,
      active: true
    }), (0, i.jsx)(m.Text, {
      className: f.guildName,
      variant: "text-md/normal",
      children: n.name
    }), (0, i.jsx)(g.Z, {
      entry: s,
      targetElementRef: r,
      children: e => {
        var t, n;
        return (0, i.jsx)(m.xhG, (t = function(e) {
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
          className: f.overflowIcon
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

function L(e) {
  let t, {
      directoryChannelId: n,
      onGuildChosen: s,
      handleChooseCreate: a,
      directoryGuildName: x,
      availableGuilds: C,
      addedGuilds: g,
      loading: h
    } = e,
    [L, I] = l.useState(0);
  return t = h ? (0, i.jsx)("div", {
    className: f.emptyContainer,
    children: (0, i.jsx)(m.$jN, {})
  }) : 0 === L ? 0 === C.length ? (0, i.jsxs)("div", {
    className: f.emptyContainer,
    children: [(0, i.jsx)("img", {
      src: j,
      alt: "",
      className: f.emptyImage
    }), (0, i.jsx)(m.Text, {
      className: f.emptyText,
      color: "header-secondary",
      variant: "text-md/normal",
      children: p.intl.string(p.t.liuEhY)
    })]
  }) : C.map(e => (0, i.jsx)(_, {
    guild: e,
    onClick: () => s(e)
  }, e.id)) : 0 === g.length ? (0, i.jsxs)("div", {
    className: f.emptyContainer,
    children: [(0, i.jsx)("img", {
      src: j,
      alt: "",
      className: f.emptyImage
    }), (0, i.jsx)(m.Text, {
      className: f.emptyText,
      color: "header-secondary",
      variant: "text-md/normal",
      children: p.intl.string(p.t.WJLuKC)
    })]
  }) : g.map(e => (0, i.jsx)(b, {
    directoryChannelId: n,
    guild: e
  }, e.id)), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(u.x, {
      title: p.intl.formatToPlainString(p.t["9SKJdH"], {
        guildName: x
      }),
      subtitle: p.intl.string(p.t.pYFZ9v)
    }), (0, i.jsx)(c.f, {
      controls: (0, i.jsxs)(m.njP, {
        className: f.tabBar,
        selectedItem: L,
        onItemSelect: I,
        type: "top",
        look: "brand",
        children: [(0, i.jsx)(m.njP.Item, {
          className: r()(f.tabBarItem, {
            [f.selectedTab]: 0 === L
          }),
          id: 0,
          children: p.intl.string(p.t.FTe8HR)
        }), (0, i.jsx)(m.njP.Item, {
          className: r()(f.tabBarItem, {
            [f.selectedTab]: 1 === L
          }),
          id: 1,
          children: p.intl.string(p.t.epOump)
        })]
      }),
      children: (0, i.jsx)(m.Ttm, {
        className: f.scroller,
        children: (0, i.jsx)("div", {
          className: f.guildList,
          children: t
        })
      })
    }), (0, i.jsxs)(d.m, {
      children: [(0, i.jsx)(m.X6q, {
        variant: "heading-lg/semibold",
        className: f.footerTitle,
        children: p.intl.string(p.t.pgCZRE)
      }), (0, i.jsx)(o.G, {
        actionsFullWidth: true,
        actions: [{
          variant: "secondary",
          text: p.intl.string(p.t.WqJbLi),
          onClick: a
        }]
      })]
    })]
  })
}