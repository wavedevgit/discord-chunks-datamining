/** Chunk was on web.js **/
/** chunk id: 124064, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk355622 = require("./355622.js"),
  Chunk408018 = require("./408018.js"),
  Chunk133343 = require("./133343.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk95701 = require("./95701.js"),
  Chunk128450 = require("./128450.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk973746 = require("./973746.js");
let m = (0, Chunk915089.Ld)(),
  g = (0, Chunk95701.createChannelRecord)({
    id: "1",
    type: Chunk652215.rbe.DM
  }),
  E = (0, Chunk915089.Ld)();

function b(e) {
  let {
    sectionTitle: t,
    errors: n,
    onBioChange: c,
    pendingBio: d,
    placeholder: b,
    currentBio: y,
    disabled: O = false
  } = e, [A, v] = i.useState(null != d ? d : y), [S, I] = i.useState((0, o.x7)(A)), T = i.useRef(y), C = i.useRef(false);

  function N(e, t, n) {
    t !== A && (v(t), I(n), c(t))
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
    if (T.current !== y) {
      let e = (0, o.x7)(y);
      v(y), I(e)
    }
    T.current = y
  }, [y]), (0, r.jsxs)(f.A, {
    title: t,
    titleId: m,
    description: _.intl.string(_.t.Bbw6Ac),
    errors: n,
    disabled: O,
    children: [(0, r.jsx)(l.Ay, {
      "aria-describedby": E,
      "aria-labelledby": m,
      className: h.i,
      innerClassName: h.Z,
      maxCharacterCount: p.NA2,
      onChange: N,
      placeholder: b,
      channel: g,
      textValue: A,
      richValue: S,
      emojiPickerCloseOnModalOuterClick: true,
      parentModalKey: u.USER_SETTINGS_MODAL_KEY,
      type: s.oU.PROFILE_BIO_INPUT,
      onBlur: () => {
        C.current = false
      },
      onFocus: () => {
        C.current = true
      },
      focused: C.current,
      onSubmit: R
    }), (0, r.jsx)(a.AC4, {
      id: E,
      children: _.intl.format(_.t["+DFxLc"], {
        maxLength: p.NA2
      })
    })]
  })
}