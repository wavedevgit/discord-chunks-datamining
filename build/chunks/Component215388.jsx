/** Chunk was on 73628 **/
/** chunk id: 215388, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk231319 = require("./231319.js"),
  Chunk8542 = require("./8542.js");
let v = (0, Chunk772848.Z)(),
  h = (0, Chunk131704.createChannelRecord)({
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
    maxLength: r,
    text: a
  } = e;
  return (0, n.jsxs)("div", {
    className: l()(m.maxLength, {
      [m.errorOverflow]: A
    }),
    "aria-hidden": "true",
    children: [null != (t = null == a ? true : a.length) ? t : 0, " ", null != r && "/ ".concat(r)]
  })
}

function C(e) {
  var t;
  let {
    "aria-labelledby": A,
    className: a,
    id: i,
    autoFocus: u,
    maxLength: g,
    onChange: m,
    onSubmit: C,
    showCharacterCount: U = false,
    placeholder: j,
    required: V,
    value: x,
    enableThemedBackground: O = false,
    parentModalKey: P,
    label: F,
    errorMessage: y
  } = e, N = (0, o.Gc0)(), [I, K] = r.useState(() => (0, s.JM)(x)), T = r.useRef(true === u), Z = null != A ? A : null == N ? true : N.titleId, W = null != (t = null == N ? true : N.errorId) ? t : v;

  function X(e, t, A) {
    m(t), K(A)
  }
  let Q = r.useMemo(() => ({
    analyticsName: "simple",
    autocomplete: {
      alwaysUseLayer: true,
      small: true
    },
    disableAutoFocus: true !== u,
    drafts: {
      type: c.d.ChannelMessage
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
  }), [u]);
  return (0, n.jsx)(o.gNt, {
    label: F,
    errorMessage: y,
    id: i,
    required: V,
    children: e => {
      var t, A;
      return (0, n.jsxs)(d.ZP, {
        id: null != (t = null == e ? true : e.controlId) ? t : i,
        "aria-describedby": null != (A = null == e ? true : e.describedById) ? A : W,
        "aria-labelledby": Z,
        "aria-errormessage": null == e ? true : e.errorMessageId,
        "aria-invalid": (null == e ? true : e.errorMessageId) != null,
        className: p.textArea,
        innerClassName: l()(a, p.textAreaInner),
        maxCharacterCount: g,
        onChange: X,
        placeholder: j,
        required: V,
        channel: h,
        textValue: x,
        richValue: I,
        type: Q,
        onBlur: () => {
          T.current = false
        },
        onFocus: () => {
          T.current = true
        },
        focused: T.current,
        onSubmit: null != C ? C : q,
        disableThemedBackground: !O,
        parentModalKey: P,
        emojiPickerCloseOnModalOuterClick: true,
        children: [true === U && (0, n.jsx)(b, {
          hasError: null != N.error || null != g && x.length > g,
          text: x,
          maxLength: g
        }), null != g && (0, n.jsx)(o.nn4, {
          id: v,
          children: f.intl.format(f.t["+DFxLc"], {
            maxLength: g
          })
        })]
      })
    }
  })
}