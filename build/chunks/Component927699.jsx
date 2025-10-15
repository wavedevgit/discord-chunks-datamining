/** Chunk was on web.js **/
/** chunk id: 927699, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
    onTextChange: a,
    pendingText: f,
    placeholder: p,
    currentText: E,
    className: b,
    innerClassName: y,
    disabled: O = false,
    disableThemedBackground: v = false
  } = e, [I, T] = i.useState(null != f ? f : E), [S, A] = i.useState((0, c.JM)(I)), C = i.useRef(false);

  function N(e, t, n) {
    t !== I && (T(t), A(n), a(t))
  }

  function R() {
    return new Promise(e => {
      e({
        shouldClear: false,
        shouldRefocus: true
      })
    })
  }
  return i.useEffect(() => {
    C.current = true
  }, []), i.useEffect(() => {
    if (true === f) {
      let e = (0, c.JM)(E);
      T(E), A(e)
    }
  }, [f, E]), (0, r.jsx)("div", {
    className: o()(m.body, b),
    children: (0, r.jsxs)(d.Z, {
      title: t,
      errors: n,
      disabled: O,
      children: [(0, r.jsx)(u.ZP, {
        innerClassName: o()(m.textArea, y),
        editorClassName: m.editorTextArea,
        maxCharacterCount: _.$n,
        onChange: N,
        placeholder: p,
        channel: g,
        textValue: I,
        richValue: S,
        type: l.Ie.CUSTOM_GIFT,
        onBlur: () => {
          C.current = false
        },
        onFocus: () => {
          C.current = true
        },
        focused: C.current,
        onSubmit: R,
        disableThemedBackground: v
      }), (0, r.jsx)(s.nn4, {
        children: h.intl.format(h.t["+DFxLc"], {
          maxLength: _.$n
        })
      })]
    })
  })
}