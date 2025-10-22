/** Chunk was on 42483 **/
/** chunk id: 446706, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk539379 = require("./539379.js"),
  Chunk109983 = require("./109983.jsx"),
  Chunk834891 = require("./834891.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk384955 = require("./384955.js");

function u(t) {
  let {
    guildTemplate: n,
    onClick: e,
    autoFocus: a
  } = t, s = l.useCallback(() => {
    e(n)
  }, [n, e]);
  return (0, i.jsx)(o.Z, {
    icon: c.U[n.id],
    message: n.label,
    onClick: s,
    autoFocus: a
  })
}

function g(t) {
  let {
    className: n,
    isNewUser: e,
    onClose: l,
    onChooseTemplate: a,
    onJoin: c
  } = t, o = (0, C.E)();
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(r.xBx, {
      direction: d.Z.Direction.VERTICAL,
      className: p.header,
      separator: false,
      children: [(0, i.jsx)(r.Heading, {
        className: p.title,
        variant: "heading-xl/semibold",
        children: e ? m.intl.string(m.t["9U0b1k"]) : m.intl.string(m.t["5HZu07"])
      }), (0, i.jsx)(r.Text, {
        className: p.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: m.intl.string(m.t["wti/H4"])
      }), null != l && (0, i.jsx)(r.olH, {
        className: p.closeButton,
        onClick: l
      })]
    }), (0, i.jsxs)(r.hzk, {
      className: s()(p.templatesList, n),
      paddingFix: false,
      children: [(0, i.jsx)(u, {
        guildTemplate: o[C.l.CREATE],
        onClick: a,
        autoFocus: true
      }), (0, i.jsx)(r.Text, {
        className: p.optionHeader,
        color: "header-secondary",
        variant: "text-xs/bold",
        children: m.intl.string(m.t.JGDkfg)
      }), (0, i.jsx)(u, {
        guildTemplate: o[C.l.GAMING],
        onClick: a
      }), (0, i.jsx)(u, {
        guildTemplate: o[C.l.FRIENDS],
        onClick: a
      }), (0, i.jsx)(u, {
        guildTemplate: o[C.l.STUDY],
        onClick: a
      }), (0, i.jsx)(u, {
        guildTemplate: o[C.l.SCHOOL_CLUB],
        onClick: a
      }), (0, i.jsx)(u, {
        guildTemplate: o[C.l.LOCAL_COMMUNITY],
        onClick: a
      }), (0, i.jsx)(u, {
        guildTemplate: o[C.l.CREATORS],
        onClick: a
      })]
    }), null != c && (0, i.jsxs)(r.mzw, {
      className: p.footer,
      children: [(0, i.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        className: p.footerTitle,
        children: m.intl.string(m.t["N+Mi/U"])
      }), (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: p.footerButton,
        children: (0, i.jsx)(r.Button, {
          variant: "secondary",
          fullWidth: true,
          text: m.intl.string(m.t.riOUtB),
          onClick: c
        })
      })]
    })]
  })
}