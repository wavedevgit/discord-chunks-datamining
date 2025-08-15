/** Chunk was on 73628 **/
/** chunk id: 215388, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  Z: () => q
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
let m = (0, Chunk772848.Z)(),
  v = (0, Chunk131704.kt)({
    id: "1",
    type: Chunk981631.d4z.DM
  });

function b() {
  return new Promise(e => {
    e({
      shouldClear: false,
      shouldRefocus: true
    })
  })
}

function C(e) {
  var t;
  let {
    hasError: A,
    maxLength: r,
    text: a
  } = e;
  return (0, n.jsxs)("div", {
    className: l()(h.maxLength, {
      [h.errorOverflow]: A
    }),
    "aria-hidden": "true",
    children: [null != (t = null == a ? true : a.length) ? t : 0, " ", null != r && "/ ".concat(r)]
  })
}

function q(e) {
  var t;
  let {
    "aria-labelledby": A,
    className: a,
    id: i,
    autoFocus: d,
    maxLength: g,
    onChange: h,
    onSubmit: q,
    showCharacterCount: x = false,
    placeholder: j,
    required: U,
    value: O,
    enableThemedBackground: V = false,
    parentModalKey: P
  } = e, y = (0, o.Gc0)(), [N, I] = r.useState(() => (0, s.JM)(O)), F = r.useRef(true === d), T = null != A ? A : null == y ? true : y.titleId, K = null != (t = null == y ? true : y.errorId) ? t : m, Z = r.useMemo(() => ({
    analyticsName: "simple",
    autocomplete: {
      alwaysUseLayer: true,
      small: true
    },
    disableAutoFocus: true !== d,
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
  }), [d]);
  return (0, n.jsxs)(c.ZP, {
    "aria-describedby": K,
    "aria-labelledby": T,
    innerClassName: l()(a, p.textArea),
    id: i,
    maxCharacterCount: g,
    onChange: function(e, t, A) {
      h(t), I(A)
    },
    placeholder: j,
    required: U,
    channel: v,
    textValue: O,
    richValue: N,
    type: Z,
    onBlur: () => {
      F.current = false
    },
    onFocus: () => {
      F.current = true
    },
    focused: F.current,
    onSubmit: null != q ? q : b,
    disableThemedBackground: !V,
    parentModalKey: P,
    emojiPickerCloseOnModalOuterClick: true,
    children: [true === x && (0, n.jsx)(C, {
      hasError: null != y.error || null != g && O.length > g,
      text: O,
      maxLength: g
    }), null != g && (0, n.jsx)(o.nn4, {
      id: m,
      children: f.intl.format(f.t["+DFxLS"], {
        maxLength: g
      })
    })]
  })
}