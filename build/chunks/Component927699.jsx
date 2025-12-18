/** Chunk was on web.js **/
/** chunk id: 927699, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk131704 = require("./131704.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk765989 = require("./765989.js");
let g = (0, Chunk131704.createChannelRecord)({
    id: "1",
    type: Chunk981631.d4z.DM
  }),
  E = (0, Chunk313201.hQ)();

function b(e) {
  let {
    label: t = m.intl.string(m.t.B3miE8),
    onTextChange: n,
    pendingText: a,
    currentText: d,
    className: f,
    innerClassName: _,
    disableThemedBackground: b = false
  } = e, [y, O] = i.useState(null != a ? a : d), [v, S] = i.useState((0, c.JM)(y)), I = i.useRef(false);

  function T(e, t, r) {
    t !== y && (O(t), S(r), n(t))
  }

  function C() {
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
      let e = (0, c.JM)(d);
      O(d), S(e)
    }
  }, [a, d]), (0, r.jsx)("div", {
    className: o()(h.body, f),
    children: (0, r.jsx)(s.gNt, {
      label: t,
      children: e => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.ZP, {
          "aria-describedby": "".concat(e.describedById, " ").concat(E),
          "aria-labelledby": e.labelId,
          innerClassName: o()(h.textArea, _),
          editorClassName: h.editorTextArea,
          maxCharacterCount: p.$n,
          onChange: T,
          channel: g,
          textValue: y,
          richValue: v,
          type: l.Ie.CUSTOM_GIFT,
          onBlur: () => {
            I.current = false
          },
          onFocus: () => {
            I.current = true
          },
          focused: I.current,
          onSubmit: C,
          disableThemedBackground: b
        }), (0, r.jsx)(s.nn4, {
          id: E,
          children: m.intl.format(m.t["+DFxLc"], {
            maxLength: p.$n
          })
        })]
      })
    })
  })
}