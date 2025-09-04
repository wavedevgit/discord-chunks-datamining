/** Chunk was on 73628 **/
/** chunk id: 215388, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
let q = (0, Chunk772848.Z)(),
  h = (0, Chunk131704.kt)({
    id: "1",
    type: Chunk981631.d4z.DM
  });

function b() {
  return new Promise(A => {
    A({
      shouldClear: false,
      shouldRefocus: true
    })
  })
}

function C(A) {
  var e;
  let {
    hasError: t,
    maxLength: r,
    text: l
  } = A;
  return (0, n.jsxs)("div", {
    className: a()(m.maxLength, {
      [m.errorOverflow]: t
    }),
    "aria-hidden": "true",
    children: [null != (e = null == l ? true : l.length) ? e : 0, " ", null != r && "/ ".concat(r)]
  })
}

function v(A) {
  var e;
  let {
    "aria-labelledby": t,
    className: l,
    id: i,
    autoFocus: c,
    maxLength: g,
    onChange: m,
    onSubmit: v,
    showCharacterCount: U = false,
    placeholder: j,
    required: x,
    value: V,
    enableThemedBackground: P = false,
    parentModalKey: O
  } = A, F = (0, o.Gc0)(), [I, K] = r.useState(() => (0, s.JM)(V)), y = r.useRef(true === c), N = null != t ? t : null == F ? true : F.titleId, T = null != (e = null == F ? true : F.errorId) ? e : q, X = r.useMemo(() => ({
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
  return (0, n.jsxs)(d.ZP, {
    "aria-describedby": T,
    "aria-labelledby": N,
    innerClassName: a()(l, p.textArea),
    id: i,
    maxCharacterCount: g,
    onChange: function(A, e, t) {
      m(e), K(t)
    },
    placeholder: j,
    required: x,
    channel: h,
    textValue: V,
    richValue: I,
    type: X,
    onBlur: () => {
      y.current = false
    },
    onFocus: () => {
      y.current = true
    },
    focused: y.current,
    onSubmit: null != v ? v : b,
    disableThemedBackground: !P,
    parentModalKey: O,
    emojiPickerCloseOnModalOuterClick: true,
    children: [true === U && (0, n.jsx)(C, {
      hasError: null != F.error || null != g && V.length > g,
      text: V,
      maxLength: g
    }), null != g && (0, n.jsx)(o.nn4, {
      id: q,
      children: f.intl.format(f.t["+DFxLS"], {
        maxLength: g
      })
    })]
  })
}