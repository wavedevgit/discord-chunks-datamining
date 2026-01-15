/** Chunk was on web.js **/
/** chunk id: 126631, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk754024 = require("./754024.js");
let m = (0, Chunk313201.hQ)(),
  g = (0, Chunk131704.createChannelRecord)({
    id: "1",
    type: Chunk981631.d4z.DM
  }),
  E = (0, Chunk313201.hQ)();

function b(e) {
  let {
    sectionTitle: t,
    errors: n,
    onBioChange: c,
    pendingBio: d,
    placeholder: b,
    currentBio: y,
    disabled: O = false
  } = e, [v, S] = i.useState(null != d ? d : y), [I, T] = i.useState((0, s.JM)(v)), C = i.useRef(y), A = i.useRef(false);

  function N(e, t, n) {
    t !== v && (S(t), T(n), c(t))
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
    if (C.current !== y) {
      let e = (0, s.JM)(y);
      S(y), T(e)
    }
    C.current = y
  }, [y]), (0, r.jsxs)(f.Z, {
    title: t,
    titleId: m,
    description: _.intl.string(_.t.Bbw6Ac),
    errors: n,
    disabled: O,
    children: [(0, r.jsx)(l.ZP, {
      "aria-describedby": E,
      "aria-labelledby": m,
      className: h.bioTextAreaContainer,
      innerClassName: h.bioTextArea,
      maxCharacterCount: p.tPV,
      onChange: N,
      placeholder: b,
      channel: g,
      textValue: v,
      richValue: I,
      emojiPickerCloseOnModalOuterClick: true,
      parentModalKey: u.USER_SETTINGS_MODAL_KEY,
      type: o.Ie.PROFILE_BIO_INPUT,
      onBlur: () => {
        A.current = false
      },
      onFocus: () => {
        A.current = true
      },
      focused: A.current,
      onSubmit: P
    }), (0, r.jsx)(a.nn4, {
      id: E,
      children: _.intl.format(_.t["+DFxLc"], {
        maxLength: p.tPV
      })
    })]
  })
}