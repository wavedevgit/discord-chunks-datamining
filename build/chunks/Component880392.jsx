/** Chunk was on 6759 **/
/** chunk id: 880392, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk519480 = require("./519480.js"),
  Chunk682557 = require("./682557.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk891674 = require("./891674.js"),
  Chunk853552 = require("./853552.js"),
  Chunk906471 = require("./906471.js");

function h(e) {
  let {
    guild: t,
    onClick: n
  } = e;
  return (0, l.jsxs)(o.DUT, {
    className: g.y5,
    onClick: n,
    children: [(0, l.jsx)(d.A, {
      guild: t,
      size: d.A.Sizes.MEDIUM,
      active: true
    }), (0, l.jsx)(o.Text, {
      className: g.J5,
      variant: "text-md/semibold",
      children: t.name
    }), (0, l.jsx)("img", {
      alt: "",
      src: j
    })]
  })
}

function p(e) {
  let {
    directoryChannelId: t,
    guild: n
  } = e, s = (0, c.bG)([u.A], () => u.A.getDirectoryEntry(t, n.id)), r = i.useRef(null);
  return (0, l.jsxs)("div", {
    className: g._S,
    children: [(0, l.jsx)(d.A, {
      guild: n,
      size: d.A.Sizes.MEDIUM,
      active: true
    }), (0, l.jsx)(o.Text, {
      className: g.J5,
      variant: "text-md/normal",
      children: n.name
    }), (0, l.jsx)(m.A, {
      entry: s,
      targetElementRef: r,
      children: e => {
        var t, n;
        return (0, l.jsx)(o.jNK, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
              var l;
              l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = l
            })
          }
          return e
        }({
          ref: r,
          size: "md",
          color: "currentColor"
        }, e), n = n = {
          className: g.IQ
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }
    })]
  })
}

function f(e) {
  let t, {
      directoryChannelId: n,
      onGuildChosen: s,
      handleChooseCreate: c,
      directoryGuildName: d,
      availableGuilds: u,
      addedGuilds: m,
      loading: j
    } = e,
    [f, b] = i.useState(0);
  return t = j ? (0, l.jsx)("div", {
    className: g.do,
    children: (0, l.jsx)(o.y$y, {})
  }) : 0 === f ? 0 === u.length ? (0, l.jsxs)("div", {
    className: g.do,
    children: [(0, l.jsx)("img", {
      src: C,
      alt: "",
      className: g.hd
    }), (0, l.jsx)(o.Text, {
      className: g.BI,
      color: "text-default",
      variant: "text-md/normal",
      children: x.intl.string(x.t.liuEhd)
    })]
  }) : u.map(e => (0, l.jsx)(h, {
    guild: e,
    onClick: () => s(e)
  }, e.id)) : 0 === m.length ? (0, l.jsxs)("div", {
    className: g.do,
    children: [(0, l.jsx)("img", {
      src: C,
      alt: "",
      className: g.hd
    }), (0, l.jsx)(o.Text, {
      className: g.BI,
      color: "text-default",
      variant: "text-md/normal",
      children: x.intl.string(x.t.WJLuKK)
    })]
  }) : m.map(e => (0, l.jsx)(p, {
    directoryChannelId: n,
    guild: e
  }, e.id)), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.rQ0, {
      title: x.intl.formatToPlainString(x.t["9SKJdF"], {
        guildName: d
      }),
      subtitle: x.intl.string(x.t.pYFZ9p)
    }), (0, l.jsx)(a.cwr, {
      controls: (0, l.jsxs)(o.VQ0, {
        className: g.$H,
        selectedItem: f,
        onItemSelect: b,
        type: "top",
        look: "brand",
        children: [(0, l.jsx)(o.VQ0.Item, {
          className: r()(g.YU, {
            [g.xR]: 0 === f
          }),
          id: 0,
          children: x.intl.string(x.t.FTe8HS)
        }), (0, l.jsx)(o.VQ0.Item, {
          className: r()(g.YU, {
            [g.xR]: 1 === f
          }),
          id: 1,
          children: x.intl.string(x.t.epOumr)
        })]
      }),
      children: (0, l.jsx)(o.HOs, {
        className: g.XG,
        children: (0, l.jsx)("div", {
          className: g.OW,
          children: t
        })
      })
    }), (0, l.jsxs)(a.jlY, {
      children: [(0, l.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        className: g.K8,
        children: x.intl.string(x.t.pgCZRP)
      }), (0, l.jsx)(a.H7u, {
        actionsFullWidth: true,
        actions: [{
          variant: "secondary",
          text: x.intl.string(x.t.WqJbLi),
          onClick: c
        }]
      })]
    })]
  })
}