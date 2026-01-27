/** Chunk was on 60667 **/
/** chunk id: 124064, original params: e,t,n (module,exports,require) **/
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
let A = (0, Chunk915089.Ld)(),
  f = (0, Chunk95701.createChannelRecord)({
    id: "1",
    type: Chunk652215.rbe.DM
  }),
  h = (0, Chunk915089.Ld)();

function b(e) {
  let {
    sectionTitle: t,
    errors: n,
    onBioChange: c,
    pendingBio: u,
    placeholder: b,
    currentBio: E,
    disabled: x = false
  } = e, [O, C] = i.useState(null != u ? u : E), [I, T] = i.useState((0, a.x7)(O)), S = i.useRef(E), j = i.useRef(false);
  return i.useEffect(() => {
    if (S.current !== E) {
      let e = (0, a.x7)(E);
      C(E), T(e)
    }
    S.current = E
  }, [E]), (0, r.jsxs)(_.A, {
    title: t,
    titleId: A,
    description: m.intl.string(m.t.Bbw6Ac),
    errors: n,
    disabled: x,
    children: [(0, r.jsx)(o.Ay, {
      "aria-describedby": h,
      "aria-labelledby": A,
      className: g.i,
      innerClassName: g.Z,
      maxCharacterCount: p.NA2,
      onChange: function(e, t, n) {
        t !== O && (C(t), T(n), c(t))
      },
      placeholder: b,
      channel: f,
      textValue: O,
      richValue: I,
      emojiPickerCloseOnModalOuterClick: true,
      parentModalKey: d.USER_SETTINGS_MODAL_KEY,
      type: s.oU.PROFILE_BIO_INPUT,
      onBlur: () => {
        j.current = false
      },
      onFocus: () => {
        j.current = true
      },
      focused: j.current,
      onSubmit: function() {
        return new Promise(e => {
          e({
            shouldClear: false,
            shouldRefocus: true
          })
        })
      }
    }), (0, r.jsx)(l.AC4, {
      id: h,
      children: m.intl.format(m.t["+DFxLc"], {
        maxLength: p.NA2
      })
    })]
  })
}