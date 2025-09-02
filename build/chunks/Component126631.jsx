/** Chunk was on web.js **/
/** chunk id: 126631, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk131704 = require("./131704.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk100077 = require("./100077.js");
let h = (0, Chunk313201.hQ)(),
  m = (0, Chunk131704.kt)({
    id: "1",
    type: Chunk981631.d4z.DM
  }),
  g = (0, Chunk313201.hQ)();

function E(e) {
  let {
    sectionTitle: t,
    errors: n,
    onBioChange: c,
    pendingBio: u,
    placeholder: E,
    currentBio: b,
    disabled: y = false
  } = e, [O, v] = i.useState(null != u ? u : b), [I, S] = i.useState((0, s.JM)(O)), T = i.useRef(false);

  function A(e, t, n) {
    t !== O && (v(t), S(n), c(t))
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
    if (true === u) {
      let e = (0, s.JM)(b);
      v(b), S(e)
    }
  }, [u, b]), (0, r.jsxs)(d.Z, {
    title: t,
    titleId: h,
    description: _.intl.string(_.t.Bbw6AQ),
    errors: n,
    disabled: y,
    children: [(0, r.jsx)(l.ZP, {
      "aria-describedby": g,
      "aria-labelledby": h,
      className: p.bioTextAreaContainer,
      innerClassName: p.bioTextArea,
      maxCharacterCount: f.tPV,
      onChange: A,
      placeholder: E,
      channel: m,
      textValue: O,
      richValue: I,
      type: o.Ie.PROFILE_BIO_INPUT,
      onBlur: () => {
        T.current = false
      },
      onFocus: () => {
        T.current = true
      },
      focused: T.current,
      onSubmit: C
    }), (0, r.jsx)(a.nn4, {
      id: g,
      children: _.intl.format(_.t["+DFxLS"], {
        maxLength: f.tPV
      })
    })]
  })
}