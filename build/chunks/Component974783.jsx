/** Chunk was on 86142 **/
/** chunk id: 974783, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk17372 = require("./17372.js"),
  Chunk975571 = require("./975571.js"),
  Chunk843376 = require("./843376.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk188335 = require("./188335.js");
let h = {
    [Chunk17372.tY.MESSAGE]: Chunk985018.t.fuqnBC,
    [Chunk17372.tY.USER]: Chunk985018.t.F4jrRW,
    [Chunk17372.tY.GUILD]: Chunk985018.t.gH3aMs
  },
  p = e => {
    let {
      title: t,
      menuType: n,
      onReopen: l
    } = e, a = i.useCallback(() => {
      (0, o.i)(n, l)()
    }, [n, l]);
    return (0, r.jsxs)(s.DUT, {
      className: u.b0,
      onClick: a,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        children: t
      }), (0, r.jsx)(s.n2b, {
        size: "sm",
        style: {
          transform: "rotate(180deg)"
        }
      })]
    })
  },
  g = e => {
    let {
      showBackButton: t,
      onBack: n,
      dsaCapabilities: i,
      renderFooter: o,
      onClose: g,
      onReopen: _
    } = e, f = t && null != n ? (0, r.jsx)("div", {
      className: u.Hq,
      children: (0, r.jsx)(s.Button, {
        variant: "secondary",
        text: d.intl.string(d.t["13/7kX"]),
        onClick: n
      })
    }) : null;
    return (0, r.jsxs)(s.BJc, {
      gap: 16,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-xl/semibold",
        children: d.intl.string(d.t.Z11w18)
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        children: d.intl.format(d.t["532l+q"], {
          supportURL: a.A.getArticleURL(c.MVz.COPYRIGHT_AND_IP_POLICY)
        })
      }), (0, r.jsx)("div", {
        className: u.kL,
        children: i.map(e => e === l.tY.MEDIA_TAKEDOWN || null == h[e] ? null : (0, r.jsx)(p, {
          title: d.intl.string(h[e]),
          menuType: e,
          onClose: g,
          onReopen: _
        }, e))
      }), null == o ? true : o(f)]
    })
  }