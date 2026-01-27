/** Chunk was on web.js **/
/** chunk id: 871181, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk355622 = require("./355622.js"),
  Chunk408018 = require("./408018.js"),
  Chunk133343 = require("./133343.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk95701 = require("./95701.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk3477 = require("./3477.js");
let g = (0, Chunk95701.createChannelRecord)({
    id: "1",
    type: Chunk652215.rbe.DM
  }),
  E = (0, Chunk915089.Ld)();

function y(e) {
  let {
    label: t = h.intl.string(h.t.B3miE8),
    onTextChange: n,
    pendingText: a,
    currentText: d,
    className: f,
    innerClassName: _,
    disableThemedBackground: y = false
  } = e, [b, O] = i.useState(null != a ? a : d), [v, A] = i.useState((0, c.x7)(b)), I = i.useRef(false);

  function S(e, t, r) {
    t !== b && (O(t), A(r), n(t))
  }

  function T() {
    return new Promise(e => {
      e({
        shouldClear: false,
        shouldRefocus: true
      })
    })
  }
  return i.useEffect(() => {
    I.current = true
  }, []), i.useEffect(() => {
    if (true === a) {
      let e = (0, c.x7)(d);
      O(d), A(e)
    }
  }, [a, d]), (0, r.jsx)("div", {
    className: o()(m.rf, f),
    children: (0, r.jsx)(s.D0$, {
      label: t,
      children: e => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.Ay, {
          "aria-describedby": "".concat(e.describedById, " ").concat(E),
          "aria-labelledby": e.labelId,
          innerClassName: o()(m.Tg, _),
          editorClassName: m.OT,
          maxCharacterCount: p.Jo,
          onChange: S,
          channel: g,
          textValue: b,
          richValue: v,
          type: l.oU.CUSTOM_GIFT,
          onBlur: () => {
            I.current = false
          },
          onFocus: () => {
            I.current = true
          },
          focused: I.current,
          onSubmit: T,
          disableThemedBackground: y
        }), (0, r.jsx)(s.AC4, {
          id: E,
          children: h.intl.format(h.t["+DFxLc"], {
            maxLength: p.Jo
          })
        })]
      })
    })
  })
}