/** Chunk was on web.js **/
/** chunk id: 11054, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk482132 = require("./482132.jsx"),
  Chunk921925 = require("./921925.jsx"),
  Chunk592362 = require("./592362.jsx"),
  Chunk510022 = require("./510022.jsx"),
  Chunk317560 = require("./317560.jsx"),
  Chunk366523 = require("./366523.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk552696 = require("./552696.js");

function b(e) {
  var t;
  let {
    handleClose: n
  } = e, {
    analyticsLocations: a
  } = (0, c.Ay)(), {
    skusById: b,
    selectedSkuId: O,
    application: v
  } = (0, d.P5)(), {
    isGift: A,
    giftRecipient: I
  } = (0, u.Pv)();
  s()(null != O, "Expected selectedSkuId"), s()(null != v, "Expected application");
  let S = b[O];
  return (s()(null != S, "Expected sku"), i.useEffect(() => {
    A || ((0, m.j)(), n(), (0, h.n)({
      sku: S,
      application: v,
      analyticsLocations: a
    }))
  }, [A, S, v, n, a]), A) ? (0, r.jsxs)(f.dZ, {
    children: [(0, r.jsx)(_.A, {}), (0, r.jsx)(p.A, {}), (0, r.jsxs)("div", {
      className: y.EL,
      children: [(0, r.jsx)(g.e, {
        sku: S,
        shape: "square",
        containerClassName: y.LC
      }), (0, r.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        className: y.RS,
        children: E.intl.string(E.t["5glWta"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        className: y.Kz,
        children: E.intl.formatToPlainString(E.t["2VjPTw"], {
          itemName: S.name,
          giftRecipient: null != (t = null == I ? true : I.username) ? t : "your recipient"
        })
      }), (0, r.jsx)(o.$nd, {
        onClick: n,
        text: E.intl.string(E.t.cpT0Cq),
        fullWidth: true
      })]
    })]
  }) : null
}