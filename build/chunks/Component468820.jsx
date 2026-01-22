/** Chunk was on 86746 **/
/** chunk id: 468820, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk450565 = require("./450565.js"),
  Chunk878314 = require("./878314.jsx"),
  Chunk570465 = require("./570465.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk651614 = require("./651614.js");

function g(t) {
  let {
    guildTemplate: e,
    onClick: n,
    autoFocus: l
  } = t, r = a.useCallback(() => {
    n(e)
  }, [e, n]);
  return (0, i.jsx)(o.A, {
    icon: c.a[e.id],
    message: e.label,
    onClick: r,
    autoFocus: l
  })
}

function _(t) {
  let {
    className: e,
    isNewUser: n,
    onClose: a,
    onChooseTemplate: l,
    onJoin: c
  } = t, o = (0, m.p)();
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(s.rQ0, {
      "data-migration-pending": true,
      direction: d.A.Direction.VERTICAL,
      className: C.wx,
      separator: false,
      children: [(0, i.jsx)(s.Heading, {
        className: C.DD,
        variant: "heading-xl/semibold",
        children: n ? p.intl.string(p.t["9U0b1k"]) : p.intl.string(p.t["5HZu07"])
      }), (0, i.jsx)(s.Text, {
        className: C.VA,
        color: "text-default",
        variant: "text-md/normal",
        children: p.intl.string(p.t["wti/H4"])
      }), null != a && (0, i.jsx)(s.s_y, {
        "data-migration-pending": true,
        className: C.b,
        onClick: a
      })]
    }), (0, i.jsxs)(s.$mQ, {
      "data-migration-pending": true,
      className: r()(C.KA, e),
      paddingFix: false,
      children: [(0, i.jsx)(g, {
        guildTemplate: o[m.v.CREATE],
        onClick: l,
        autoFocus: true
      }), (0, i.jsx)(s.Text, {
        className: C.l8,
        color: "text-default",
        variant: "text-xs/bold",
        children: p.intl.string(p.t.JGDkfg)
      }), (0, i.jsx)(g, {
        guildTemplate: o[m.v.GAMING],
        onClick: l
      }), (0, i.jsx)(g, {
        guildTemplate: o[m.v.FRIENDS],
        onClick: l
      }), (0, i.jsx)(g, {
        guildTemplate: o[m.v.STUDY],
        onClick: l
      }), (0, i.jsx)(g, {
        guildTemplate: o[m.v.SCHOOL_CLUB],
        onClick: l
      }), (0, i.jsx)(g, {
        guildTemplate: o[m.v.LOCAL_COMMUNITY],
        onClick: l
      }), (0, i.jsx)(g, {
        guildTemplate: o[m.v.CREATORS],
        onClick: l
      })]
    }), null != c && (0, i.jsxs)(s.jlY, {
      "data-migration-pending": true,
      className: C.qr,
      children: [(0, i.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        className: C.K8,
        children: p.intl.string(p.t["N+Mi/U"])
      }), (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: C.wC,
        children: (0, i.jsx)(s.Button, {
          variant: "secondary",
          fullWidth: true,
          text: p.intl.string(p.t.riOUtB),
          onClick: c
        })
      })]
    })]
  })
}