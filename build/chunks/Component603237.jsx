/** Chunk was on 27978 **/
/** chunk id: 603237, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  n: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk82554 = require("./82554.js"),
  Chunk63063 = require("./63063.js"),
  Chunk432510 = require("./432510.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk885146 = require("./885146.js");
let h = {
    [Chunk82554.BM.MESSAGE]: Chunk388032.t.fuqnBC,
    [Chunk82554.BM.USER]: Chunk388032.t.F4jrRW,
    [Chunk82554.BM.GUILD]: Chunk388032.t.gH3aMs
  },
  f = e => {
    let {
      title: t,
      menuType: n,
      onReopen: a
    } = e, l = i.useCallback(() => {
      (0, o.l)(n, a)()
    }, [n, a]);
    return (0, r.jsxs)(s.P3F, {
      className: d.reportButton,
      onClick: l,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        children: t
      }), (0, r.jsx)(s.V7D, {
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
      onReopen: m
    } = e, p = t && null != n ? (0, r.jsx)("div", {
      className: d.footerButtons,
      children: (0, r.jsx)(s.Button, {
        variant: "secondary",
        text: u.intl.string(u.t["13/7kX"]),
        onClick: n
      })
    }) : null;
    return (0, r.jsxs)(s.Kqy, {
      gap: 16,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-xl/semibold",
        children: u.intl.string(u.t.Z11w18)
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        children: u.intl.format(u.t["532l+q"], {
          supportURL: l.Z.getArticleURL(c.BhN.COPYRIGHT_AND_IP_POLICY)
        })
      }), (0, r.jsx)("div", {
        className: d.container,
        children: i.map(e => e === a.BM.MEDIA_TAKEDOWN || null == h[e] ? null : (0, r.jsx)(f, {
          title: u.intl.string(h[e]),
          menuType: e,
          onClose: g,
          onReopen: m
        }, e))
      }), null == o ? true : o(p)]
    })
  }