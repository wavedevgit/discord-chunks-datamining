/** Chunk was on 75708 **/
/** chunk id: 454982, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk484614 = require("./484614.js"),
  Chunk313201 = require("./313201.js"),
  Chunk518638 = require("./518638.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk302291 = require("./302291.js");

function m(e) {
  let {
    onClose: t
  } = e;
  return <i.Fragment>{<a.xBx separator={false} className={u.errorHeader}>{<div className={u.errorArt} />}{<a.X6q variant={"heading-xl/semibold"}>{d.intl.string(d.t.iufib2)}</a.X6q>}</a.xBx>}{<a.hzk className={u.errorBody}><a.Text variant={"text-md/normal"} className={u.bodyText}>{d.intl.string(d.t.eAn6z8)}</a.Text></a.hzk>}{<a.mzw><a.zxk variant={"primary"} text={d.intl.string(d.t.cpT0Cg)} onClick={t} /></a.mzw>}</i.Fragment>
}
let p = function(e) {
  let {
    onClose: t,
    onClaim: n,
    code: p,
    outboundPromotion: g,
    transitionState: h
  } = e, [f, b] = r.useState(null), x = (0, o.Dt)();
  return r.useEffect(() => {
    null == p && (0, c.A2)(g.id).then(e => n(e)).catch(e => {
      var t;
      return b(null == e || null == (t = e.body) ? true : t.code)
    })
  }, [p, g.id, n]), <a.Y0X transitionState={h} aria-labelledby={x} parentComponent={"OutboundPromotionRedemptionModal"}>{null != f ? (0, i.jsx)(m, {
      onClose: t
    }) : null == p ? (0, i.jsx)(a.hzk, {
      children: (0, i.jsx)(a.$jN, {
        className: u.loading
      })
    }) : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(a.xBx, {
        separator: false,
        className: u.headerContainer,
        children: [(0, i.jsx)("div", {
          className: u.art
        }), (0, i.jsx)(a.X6q, {
          variant: "heading-xl/semibold",
          children: d.intl.string(d.t["23BfZm"])
        })]
      }), (0, i.jsxs)(a.hzk, {
        children: [(0, i.jsx)(a.Text, {
          variant: "text-md/normal",
          className: u.bodyText,
          children: g.outboundRedemptionModalBody
        }), (0, i.jsx)(a.$i$, {
          className: u.formDivider
        }), (0, i.jsxs)(a.hjN, {
          title: d.intl.string(d.t.s9LFQk),
          className: u.formSection,
          children: [(0, i.jsx)(l.Z, {
            value: p,
            buttonColor: s.zx.Colors.BRAND,
            buttonLook: s.zx.Looks.FILLED,
            delay: 1e3
          }), (0, i.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: u.confirmationText,
            children: d.intl.string(d.t["F+nFTU"])
          })]
        })]
      }), (0, i.jsxs)(a.mzw, {
        children: [(0, i.jsx)(a.zxk, {
          variant: "primary",
          text: d.intl.string(d.t["+zx47e"]),
          onClick: () => {
            let e = (0, c.BU)(p, g);
            window.open(e, "_blank")
          }
        }), (0, i.jsx)(s.zx, {
          onClick: t,
          look: s.zx.Looks.LINK,
          color: u.maybeLaterButton,
          children: d.intl.string(d.t.TulDPj)
        })]
      })]
    })}</a.Y0X>
}