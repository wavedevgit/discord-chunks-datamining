/** Chunk was on web.js **/
/** chunk id: 11054, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => y
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

function y(e) {
  var t;
  let {
    handleClose: n
  } = e, {
    analyticsLocations: a
  } = (0, c.Ay)(), {
    skusById: y,
    selectedSkuId: O,
    application: A
  } = (0, d.P5)(), {
    isGift: v,
    giftRecipient: S
  } = (0, u.Pv)();
  s()(null != O, "Expected selectedSkuId"), s()(null != A, "Expected application");
  let I = y[O];
  return (s()(null != I, "Expected sku"), i.useEffect(() => {
    v || ((0, m.j)(), n(), (0, h.n)({
      sku: I,
      application: A,
      analyticsLocations: a
    }))
  }, [v, I, A, n, a]), v) ? (0, r.jsxs)(f.dZ, {
    children: [(0, r.jsx)(_.A, {}), (0, r.jsx)(p.A, {}), (0, r.jsxs)("div", {
      className: b.EL,
      children: [(0, r.jsx)(g.e, {
        sku: I,
        shape: "square",
        containerClassName: b.LC
      }), (0, r.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        className: b.RS,
        children: E.intl.string(E.t["5glWta"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        className: b.Kz,
        children: E.intl.formatToPlainString(E.t["2VjPTw"], {
          itemName: I.name,
          giftRecipient: null != (t = null == S ? true : S.username) ? t : "your recipient"
        })
      }), (0, r.jsx)(o.$nd, {
        onClick: n,
        text: E.intl.string(E.t.cpT0Cq),
        fullWidth: true
      })]
    })]
  }) : null
}