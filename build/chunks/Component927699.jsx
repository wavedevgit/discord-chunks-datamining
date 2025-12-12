/** Chunk was on web.js **/
/** chunk id: 927699, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk993413 = require("./993413.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk12033 = require("./12033.js");
let g = (0, Chunk131704.createChannelRecord)({
  id: "1",
  type: Chunk981631.d4z.DM
});

function E(e) {
  let {
    sectionTitle: t,
    errors: n,
    onTextChange: o,
    pendingText: f,
    placeholder: _,
    currentText: E,
    className: b,
    innerClassName: y,
    disabled: O = false,
    disableThemedBackground: v = false
  } = e, [S, I] = i.useState(null != f ? f : E), [T, C] = i.useState((0, c.JM)(S)), A = i.useRef(false);

  function N(e, t, n) {
    t !== S && (I(t), C(n), o(t))
  }

  function P() {
    return new Promise(e => {
      e({
        shouldClear: false,
        shouldRefocus: true
      })
    })
  }
  return i.useEffect(() => {
    A.current = true
  }, []), i.useEffect(() => {
    if (true === f) {
      let e = (0, c.JM)(E);
      I(E), C(e)
    }
  }, [f, E]), (0, r.jsx)("div", {
    className: a()(h.body, b),
    children: (0, r.jsxs)(d.Z, {
      title: t,
      errors: n,
      disabled: O,
      children: [(0, r.jsx)(u.ZP, {
        innerClassName: a()(h.textArea, y),
        editorClassName: h.editorTextArea,
        maxCharacterCount: p.$n,
        onChange: N,
        placeholder: _,
        channel: g,
        textValue: S,
        richValue: T,
        type: l.Ie.CUSTOM_GIFT,
        onBlur: () => {
          A.current = false
        },
        onFocus: () => {
          A.current = true
        },
        focused: A.current,
        onSubmit: P,
        disableThemedBackground: v
      }), (0, r.jsx)(s.nn4, {
        children: m.intl.format(m.t["+DFxLc"], {
          maxLength: p.$n
        })
      })]
    })
  })
}