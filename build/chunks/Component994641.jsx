/** Chunk was on 21738 **/
/** chunk id: 994641, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk342494 = require("./342494.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk58736 = require("./58736.jsx"),
  Chunk796104 = require("./796104.js"),
  Chunk719718 = require("./719718.js"),
  Chunk146104 = require("./146104.jsx"),
  Chunk861044 = require("./861044.jsx"),
  Chunk49999 = require("./49999.js"),
  Chunk622865 = require("./622865.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk415449 = require("./415449.js");

function O(e) {
  let {
    className: t
  } = e, [n, l] = (0, d.kn)([c.M.CHECKPOINT_2025_DESKTOP_UPSELL]), O = (0, o.bG)([g.A], () => g.A.hasOpenedCheckpointThisSession && !g.A.hasSeenRewatchPopover), y = i.useRef(null), I = n === c.M.CHECKPOINT_2025_DESKTOP_UPSELL, v = () => {
    (0, h._5)()
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(p.In, {
      ref: y,
      className: t,
      onClick: () => {
        (0, f.A)("header_bar"), I && l(A.i.INDIRECT_ACTION)
      },
      icon: s.MZT,
      tooltip: b.intl.string(_.default["CdU/PF"]),
      foreground: a()(E.t, I ? E.m : null)
    }), !I && O && (0, r.jsx)(u.AM, {
      targetElementRef: y,
      title: b.intl.string(_.default.goiR2u),
      body: b.intl.string(_.default.UYjWa5),
      onRequestClose: v,
      actions: [{
        text: b.intl.string(b.t["NX+WJN"]),
        onClick: v
      }]
    }), I && (0, r.jsx)(m.A, {
      markAsDismissed: l
    })]
  })
}