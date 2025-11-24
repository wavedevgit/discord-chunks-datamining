/** Chunk was on 42483 **/
/** chunk id: 446706, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk539379 = require("./539379.js"),
  Chunk109983 = require("./109983.jsx"),
  Chunk834891 = require("./834891.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk797629 = require("./797629.js");

function C(t) {
  let {
    guildTemplate: n,
    onClick: e,
    autoFocus: l
  } = t, s = a.useCallback(() => {
    e(n)
  }, [n, e]);
  return (0, i.jsx)(c.Z, {
    icon: o.U[n.id],
    message: n.label,
    onClick: s,
    autoFocus: l
  })
}

function u(t) {
  let {
    className: n,
    isNewUser: e,
    onClose: a,
    onChooseTemplate: l,
    onJoin: o
  } = t, c = (0, m.E)();
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(r.xBx, {
      "data-migration-pending": true,
      direction: d.Z.Direction.VERTICAL,
      className: g.header,
      separator: false,
      children: [(0, i.jsx)(r.Heading, {
        className: g.title,
        variant: "heading-xl/semibold",
        children: e ? p.intl.string(p.t["9U0b1k"]) : p.intl.string(p.t["5HZu07"])
      }), (0, i.jsx)(r.Text, {
        className: g.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: p.intl.string(p.t["wti/H4"])
      }), null != a && (0, i.jsx)(r.olH, {
        "data-migration-pending": true,
        className: g.closeButton,
        onClick: a
      })]
    }), (0, i.jsxs)(r.hzk, {
      "data-migration-pending": true,
      className: s()(g.templatesList, n),
      paddingFix: false,
      children: [(0, i.jsx)(C, {
        guildTemplate: c[m.l.CREATE],
        onClick: l,
        autoFocus: true
      }), (0, i.jsx)(r.Text, {
        className: g.optionHeader,
        color: "header-secondary",
        variant: "text-xs/bold",
        children: p.intl.string(p.t.JGDkfg)
      }), (0, i.jsx)(C, {
        guildTemplate: c[m.l.GAMING],
        onClick: l
      }), (0, i.jsx)(C, {
        guildTemplate: c[m.l.FRIENDS],
        onClick: l
      }), (0, i.jsx)(C, {
        guildTemplate: c[m.l.STUDY],
        onClick: l
      }), (0, i.jsx)(C, {
        guildTemplate: c[m.l.SCHOOL_CLUB],
        onClick: l
      }), (0, i.jsx)(C, {
        guildTemplate: c[m.l.LOCAL_COMMUNITY],
        onClick: l
      }), (0, i.jsx)(C, {
        guildTemplate: c[m.l.CREATORS],
        onClick: l
      })]
    }), null != o && (0, i.jsxs)(r.mzw, {
      "data-migration-pending": true,
      className: g.footer,
      children: [(0, i.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        className: g.footerTitle,
        children: p.intl.string(p.t["N+Mi/U"])
      }), (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: g.footerButton,
        children: (0, i.jsx)(r.Button, {
          variant: "secondary",
          fullWidth: true,
          text: p.intl.string(p.t.riOUtB),
          onClick: o
        })
      })]
    })]
  })
}