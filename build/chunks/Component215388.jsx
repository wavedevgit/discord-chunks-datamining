/** Chunk was on 73628 **/
/** chunk id: 215388, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk131704 = require("./131704.js"),
  Chunk703558 = require("./703558.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk980272 = require("./980272.js"),
  Chunk258422 = require("./258422.js");
let h = (0, Chunk772848.Z)(),
  v = (0, Chunk131704.createChannelRecord)({
    id: "1",
    type: Chunk981631.d4z.DM
  });

function q() {
  return new Promise(e => {
    e({
      shouldClear: false,
      shouldRefocus: true
    })
  })
}

function b(e) {
  var t;
  let {
    hasError: A,
    maxLength: n,
    text: a
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(m.maxLength, {
      [m.errorOverflow]: A
    }),
    "aria-hidden": "true",
    children: [null != (t = null == a ? true : a.length) ? t : 0, " ", null != n && "/ ".concat(n)]
  })
}

function C(e) {
  var t;
  let {
    "aria-labelledby": A,
    className: a,
    id: i,
    autoFocus: c,
    maxLength: g,
    onChange: m,
    onSubmit: C,
    showCharacterCount: j = false,
    placeholder: x,
    required: U,
    value: V,
    enableThemedBackground: O = false,
    parentModalKey: P,
    label: F,
    errorMessage: y
  } = e, I = (0, o.Gc0)(), [N, T] = n.useState(() => (0, s.JM)(V)), K = n.useRef(true === c), Z = null != A ? A : null == I ? true : I.titleId, W = null != (t = null == I ? true : I.errorId) ? t : h;

  function X(e, t, A) {
    m(t), T(A)
  }
  let Q = n.useMemo(() => ({
    analyticsName: "simple",
    autocomplete: {
      alwaysUseLayer: true,
      small: true
    },
    disableAutoFocus: true !== c,
    drafts: {
      type: u.d.ChannelMessage
    },
    emojis: {
      button: true
    },
    permissions: {
      requireSendMessages: false
    },
    submit: {
      useDisabledStylesOnSubmit: true,
      disableEnterToSubmit: true
    }
  }), [c]);
  return (0, r.jsx)(o.gNt, {
    label: F,
    errorMessage: y,
    id: i,
    required: U,
    children: e => {
      var t, A;
      return (0, r.jsxs)(d.ZP, {
        id: null != (t = null == e ? true : e.controlId) ? t : i,
        "aria-describedby": null != (A = null == e ? true : e.describedById) ? A : W,
        "aria-labelledby": Z,
        "aria-errormessage": null == e ? true : e.errorMessageId,
        "aria-invalid": (null == e ? true : e.errorMessageId) != null,
        className: p.textArea,
        innerClassName: l()(a, p.textAreaInner),
        maxCharacterCount: g,
        onChange: X,
        placeholder: x,
        required: U,
        channel: v,
        textValue: V,
        richValue: N,
        type: Q,
        onBlur: () => {
          K.current = false
        },
        onFocus: () => {
          K.current = true
        },
        focused: K.current,
        onSubmit: null != C ? C : q,
        disableThemedBackground: !O,
        parentModalKey: P,
        emojiPickerCloseOnModalOuterClick: true,
        children: [true === j && (0, r.jsx)(b, {
          hasError: null != I.error || null != g && V.length > g,
          text: V,
          maxLength: g
        }), null != g && (0, r.jsx)(o.nn4, {
          id: h,
          children: f.intl.format(f.t["+DFxLS"], {
            maxLength: g
          })
        })]
      })
    }
  })
}