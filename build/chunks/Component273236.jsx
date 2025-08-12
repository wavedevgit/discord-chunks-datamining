/** Chunk was on 53512 **/
/** chunk id: 273236, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk867309 = require("./867309.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk542649 = require("./542649.js"),
  Chunk366817 = require("./366817.js");
let x = Chunk73800.forwardRef(function(e, t) {
  let {} = e, [r, a] = s.useState("before"), [x, j] = s.useState(false), [g, _] = s.useState(false);
  s.useImperativeHandle(t, () => ({
    maybeChangeToAfterTab: () => (g || b("after"), g)
  }));
  let b = s.useCallback(e => {
    j(true), setTimeout(() => {
      l.unstable_batchedUpdates(() => {
        "after" === e && _(true), j(false), a(e)
      })
    }, 400)
  }, []);
  return (0, i.jsxs)(c.Ttm, {
    className: m.content,
    children: [(0, i.jsxs)("div", {
      className: m.header,
      children: [(0, i.jsx)(c.Dkj, {
        size: "custom",
        color: "currentColor",
        width: 40,
        height: 40
      }), (0, i.jsx)(c.X6q, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: o.intl.string(o.t.c0Fhpa)
      }), (0, i.jsx)(c.Text, {
        className: m.__invalid_subtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: o.intl.string(o.t.dKPfBQ)
      })]
    }), (0, i.jsxs)("div", {
      className: d.container,
      children: [(0, i.jsxs)("div", {
        className: d.tabs,
        children: [(0, i.jsx)("div", {
          className: d.tabBackground,
          style: {
            left: "before" === r ? 0 : "50%"
          }
        }), (0, i.jsx)(c.P3F, {
          className: d.tab,
          onClick: () => b("before"),
          children: (0, i.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "before" === r ? "header-primary" : "text-muted",
            children: o.intl.string(o.t.sLv7LC)
          })
        }), (0, i.jsx)(c.P3F, {
          className: d.tab,
          onClick: () => b("after"),
          children: (0, i.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "after" === r ? "header-primary" : "text-muted",
            children: o.intl.string(o.t.R8eSY2)
          })
        })]
      }), (0, i.jsxs)("div", {
        className: d.previewContainer,
        children: [(0, i.jsxs)("div", {
          className: d.guilds,
          children: [(0, i.jsx)("div", {
            className: d.unreadGuild,
            children: (0, i.jsx)("img", {
              src: n(180681),
              width: 36,
              height: 36,
              alt: "Example Guild Icon"
            })
          }), (0, i.jsx)("div", {
            className: "after" === r ? d.guild : d.unreadGuild,
            children: (0, i.jsx)("img", {
              src: n(390115),
              width: 36,
              height: 36,
              alt: "Example Guild Icon"
            })
          }), (0, i.jsx)("div", {
            className: "after" === r ? d.guild : d.unreadGuild,
            children: (0, i.jsx)("img", {
              src: n(536411),
              width: 36,
              height: 36,
              alt: "Example Guild Icon"
            })
          })]
        }), (0, i.jsxs)("div", {
          className: d.channels,
          children: [(0, i.jsx)(u, {
            mention: true,
            name: o.intl.string(o.t.WFejRk)
          }), (0, i.jsx)(u, {
            name: o.intl.string(o.t.jqWm9f)
          }), (0, i.jsx)(u, {
            grey: "after" === r,
            name: o.intl.string(o.t.p9z9Iy)
          }), (0, i.jsx)(u, {
            grey: "after" === r,
            name: o.intl.string(o.t["2bdWDw"])
          }), (0, i.jsx)(u, {
            name: o.intl.string(o.t["Ci+Our"])
          }), (0, i.jsx)(u, {
            grey: "after" === r,
            name: o.intl.string(o.t["/7TEdn"])
          }), (0, i.jsx)(u, {
            grey: "after" === r,
            name: o.intl.string(o.t["Ime/t7"])
          })]
        })]
      }), (0, i.jsx)(h, {
        hidden: x || "after" === r,
        className: d.tipBefore1,
        text: o.intl.string(o.t.WrPMOD)
      }), (0, i.jsx)(h, {
        hidden: x || "after" === r,
        className: d.tipBefore2,
        text: o.intl.string(o.t["pApL7+"])
      }), (0, i.jsx)(h, {
        hidden: x || "before" === r,
        className: d.tipAfter1,
        text: o.intl.string(o.t.eZb3iY)
      }), (0, i.jsx)(h, {
        hidden: x || "before" === r,
        className: d.tipAfter2,
        text: o.intl.string(o.t.M3KrJS)
      })]
    })]
  })
});

function h(e) {
  let {
    text: t,
    className: n,
    hidden: s
  } = e;
  return (0, i.jsxs)("div", {
    className: a()(n, d.tip, {
      [d.hidden]: s
    }),
    children: [(0, i.jsx)(c.Text, {
      className: d.__invalid_tipText,
      variant: "text-sm/normal",
      color: "text-secondary",
      children: t
    }), (0, i.jsx)("div", {
      className: d.tipLine
    })]
  })
}

function u(e) {
  let {
    grey: t,
    mention: n,
    name: s
  } = e;
  return (0, i.jsxs)("div", {
    className: a()(d.channel, {
      [d.grey]: t,
      [d.mention]: n
    }),
    children: [(0, i.jsx)(c.VL1, {
      size: "xs",
      color: "currentColor",
      className: d.channelIcon
    }), (0, i.jsx)(c.Text, {
      variant: "text-md/medium",
      className: d.channelName,
      children: s
    })]
  })
}