/** Chunk was on 42483 **/
/** chunk id: 446706, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk539379 = require("./539379.js"),
  Chunk109983 = require("./109983.jsx"),
  Chunk834891 = require("./834891.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk17109 = require("./17109.js");

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

function _(t) {
  let {
    className: n,
    isNewUser: e,
    onClose: l,
    onChooseTemplate: a,
    onJoin: c
  } = t, o = (0, m.E)();
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(r.xBx, {
      direction: d.Z.Direction.VERTICAL,
      className: p.header,
      separator: false,
      children: [(0, i.jsx)(r.X6q, {
        className: p.title,
        variant: "heading-xl/semibold",
        children: e ? C.intl.string(C.t["9U0b1t"]) : C.intl.string(C.t["5HZu09"])
      }), (0, i.jsx)(r.Text, {
        className: p.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: C.intl.string(C.t["wti/Hx"])
      }), null != l && (0, i.jsx)(r.olH, {
        className: p.closeButton,
        onClick: l
      })]
    }), (0, i.jsxs)(r.hzk, {
      className: s()(p.templatesList, n),
      paddingFix: false,
      children: [(0, i.jsx)(u, {
        guildTemplate: o[m.l.CREATE],
        onClick: a,
        autoFocus: true
      }), (0, i.jsx)(r.Text, {
        className: p.optionHeader,
        color: "header-secondary",
        variant: "text-xs/bold",
        children: C.intl.string(C.t.JGDkfn)
      }), (0, i.jsx)(u, {
        guildTemplate: o[m.l.GAMING],
        onClick: a
      }), (0, i.jsx)(u, {
        guildTemplate: o[m.l.FRIENDS],
        onClick: a
      }), (0, i.jsx)(u, {
        guildTemplate: o[m.l.STUDY],
        onClick: a
      }), (0, i.jsx)(u, {
        guildTemplate: o[m.l.SCHOOL_CLUB],
        onClick: a
      }), (0, i.jsx)(u, {
        guildTemplate: o[m.l.LOCAL_COMMUNITY],
        onClick: a
      }), (0, i.jsx)(u, {
        guildTemplate: o[m.l.CREATORS],
        onClick: a
      })]
    }), null != c && (0, i.jsxs)(r.mzw, {
      className: p.footer,
      children: [(0, i.jsx)(r.X6q, {
        variant: "heading-lg/semibold",
        className: p.footerTitle,
        children: C.intl.string(C.t["N+Mi/f"])
      }), (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: p.footerButton,
        children: (0, i.jsx)(r.zxk, {
          variant: "secondary",
          fullWidth: true,
          text: C.intl.string(C.t.riOUtL),
          onClick: c
        })
      })]
    })]
  })
}