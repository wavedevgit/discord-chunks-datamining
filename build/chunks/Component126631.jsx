/** Chunk was on web.js **/
/** chunk id: 126631, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk526665 = require("./526665.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk754024 = require("./754024.js");
let g = (0, Chunk313201.hQ)(),
  E = (0, Chunk131704.createChannelRecord)({
    id: "1",
    type: Chunk981631.d4z.DM
  }),
  b = (0, Chunk313201.hQ)();

function y(e) {
  let {
    sectionTitle: t,
    errors: n,
    onBioChange: c,
    pendingBio: f,
    placeholder: y,
    currentBio: O,
    disabled: v = false
  } = e, [S, I] = i.useState(null != f ? f : O), [T, C] = i.useState((0, s.JM)(S)), A = i.useRef(O), N = i.useRef(false);

  function P(e, t, n) {
    t !== S && (I(t), C(n), c(t))
  }

  function R() {
    return new Promise(e => {
      e({
        shouldClear: false,
        shouldRefocus: true
      })
    })
  }
  i.useEffect(() => {
    if (A.current !== O) {
      let e = (0, s.JM)(O);
      I(O), C(e)
    }
    A.current = O
  }, [O]);
  let w = (0, u.wy)("AboutMeSection");
  return (0, r.jsxs)(p.Z, {
    title: t,
    titleId: g,
    description: m.intl.string(m.t.Bbw6Ac),
    errors: n,
    disabled: v,
    children: [(0, r.jsx)(l.ZP, {
      "aria-describedby": b,
      "aria-labelledby": g,
      className: h.bioTextAreaContainer,
      innerClassName: h.bioTextArea,
      maxCharacterCount: _.tPV,
      onChange: P,
      placeholder: y,
      channel: E,
      textValue: S,
      richValue: T,
      emojiPickerCloseOnModalOuterClick: w,
      parentModalKey: w ? d.USER_SETTINGS_MODAL_KEY : true,
      type: o.Ie.PROFILE_BIO_INPUT,
      onBlur: () => {
        N.current = false
      },
      onFocus: () => {
        N.current = true
      },
      focused: N.current,
      onSubmit: R
    }), (0, r.jsx)(a.nn4, {
      id: b,
      children: m.intl.format(m.t["+DFxLc"], {
        maxLength: _.tPV
      })
    })]
  })
}