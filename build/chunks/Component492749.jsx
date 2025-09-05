/** Chunk was on 79764 **/
/** chunk id: 492749, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk273387 = require("./273387.js"),
  Chunk16853 = require("./16853.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk722326 = require("./722326.js"),
  Chunk36705 = require("./36705.js"),
  Chunk216019 = require("./216019.js");

function g(e) {
  let {
    guild: t,
    onClick: n
  } = e;
  return (0, i.jsxs)(o.P3F, {
    className: C.clickableGuildRow,
    onClick: n,
    children: [(0, i.jsx)(d.Z, {
      guild: t,
      size: d.Z.Sizes.MEDIUM,
      active: true
    }), (0, i.jsx)(o.Text, {
      className: C.guildName,
      variant: "text-md/semibold",
      children: t.name
    }), (0, i.jsx)("img", {
      alt: "",
      src: p
    })]
  })
}

function f(e) {
  let {
    directoryChannelId: t,
    guild: n
  } = e, l = (0, r.e7)([u.Z], () => u.Z.getDirectoryEntry(t, n.id)), a = s.useRef(null);
  return (0, i.jsxs)("div", {
    className: C.guildRow,
    children: [(0, i.jsx)(d.Z, {
      guild: n,
      size: d.Z.Sizes.MEDIUM,
      active: true
    }), (0, i.jsx)(o.Text, {
      className: C.guildName,
      variant: "text-md/normal",
      children: n.name
    }), (0, i.jsx)(m.Z, {
      entry: l,
      targetElementRef: a,
      children: e => {
        var t, n;
        return (0, i.jsx)(o.xhG, (t = function(e) {
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
          ref: a,
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

function j(e) {
  let t, {
      directoryChannelId: n,
      onClose: l,
      onGuildChosen: r,
      handleChooseCreate: d,
      directoryGuildName: u,
      availableGuilds: m,
      addedGuilds: p,
      loading: j
    } = e,
    [_, b] = s.useState(0);
  return t = j ? (0, i.jsx)("div", {
    className: C.emptyContainer,
    children: (0, i.jsx)(o.$jN, {})
  }) : 0 === _ ? 0 === m.length ? (0, i.jsxs)("div", {
    className: C.emptyContainer,
    children: [(0, i.jsx)("img", {
      src: h,
      alt: "",
      className: C.emptyImage
    }), (0, i.jsx)(o.Text, {
      className: C.emptyText,
      color: "header-secondary",
      variant: "text-md/normal",
      children: x.intl.string(x.t.liuEhY)
    })]
  }) : m.map(e => (0, i.jsx)(g, {
    guild: e,
    onClick: () => r(e)
  }, e.id)) : 0 === p.length ? (0, i.jsxs)("div", {
    className: C.emptyContainer,
    children: [(0, i.jsx)("img", {
      src: h,
      alt: "",
      className: C.emptyImage
    }), (0, i.jsx)(o.Text, {
      className: C.emptyText,
      color: "header-secondary",
      variant: "text-md/normal",
      children: x.intl.string(x.t.WJLuKC)
    })]
  }) : p.map(e => (0, i.jsx)(f, {
    directoryChannelId: n,
    guild: e
  }, e.id)), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(o.xBx, {
      direction: c.Z.Direction.VERTICAL,
      className: C.header,
      separator: false,
      children: [null != l && (0, i.jsx)(o.olH, {
        className: C.closeButton,
        onClick: l
      }), (0, i.jsx)(o.X6q, {
        className: C.title,
        variant: "heading-xl/semibold",
        children: x.intl.format(x.t["9SKJdH"], {
          guildName: u
        })
      }), (0, i.jsx)(o.Text, {
        className: C.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: x.intl.string(x.t.pYFZ9v)
      }), (0, i.jsxs)(o.njP, {
        className: C.tabBar,
        selectedItem: _,
        onItemSelect: b,
        type: "top",
        look: "brand",
        children: [(0, i.jsx)(o.njP.Item, {
          className: a()(C.tabBarItem, {
            [C.selectedTab]: 0 === _
          }),
          id: 0,
          children: x.intl.string(x.t.FTe8HR)
        }), (0, i.jsx)(o.njP.Item, {
          className: a()(C.tabBarItem, {
            [C.selectedTab]: 1 === _
          }),
          id: 1,
          children: x.intl.string(x.t.epOump)
        })]
      })]
    }), (0, i.jsx)(o.hzk, {
      className: C.guildList,
      paddingFix: false,
      children: t
    }), (0, i.jsxs)(o.mzw, {
      className: C.footer,
      children: [(0, i.jsx)(o.X6q, {
        variant: "heading-lg/semibold",
        className: C.footerTitle,
        children: x.intl.string(x.t.pgCZRE)
      }), (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: C.footerButton,
        children: (0, i.jsx)(o.zxk, {
          variant: "secondary",
          text: x.intl.string(x.t.WqJbLi),
          onClick: d
        })
      })]
    })]
  })
}