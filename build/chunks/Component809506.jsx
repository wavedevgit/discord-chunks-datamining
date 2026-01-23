/** Chunk was on 67096 **/
/** chunk id: 809506, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  A: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk835245 = require("./835245.js"),
  Chunk397927 = require("./397927.js"),
  Chunk408018 = require("./408018.js"),
  Chunk133343 = require("./133343.jsx"),
  Chunk95701 = require("./95701.js"),
  Chunk31717 = require("./31717.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk502512 = require("./502512.js"),
  Chunk648359 = require("./648359.js");
let v = (0, Chunk835245.A)(),
  h = (0, Chunk95701.createChannelRecord)({
    id: "1",
    type: Chunk652215.rbe.DM
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
  var A;
  let {
    hasError: t,
    maxLength: n,
    text: l
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(m.Ru, {
      [m.hz]: t
    }),
    "aria-hidden": "true",
    children: [null != (A = null == l ? true : l.length) ? A : 0, " ", null != n && "/ ".concat(n)]
  })
}

function C(e) {
  var A;
  let {
    "aria-labelledby": t,
    className: l,
    id: i,
    autoFocus: u,
    maxLength: g,
    onChange: m,
    onSubmit: C,
    showCharacterCount: j = false,
    placeholder: U,
    required: V,
    value: O,
    enableThemedBackground: x = false,
    parentModalKey: y,
    label: P,
    errorMessage: K
  } = e, N = (0, o.xW1)(), [I, F] = n.useState(() => (0, s.x7)(O)), T = n.useRef(true === u), X = null != t ? t : null == N ? true : N.titleId, W = null != (A = null == N ? true : N.errorId) ? A : v;

  function Q(e, A, t) {
    m(A), F(t)
  }
  let S = n.useMemo(() => ({
    analyticsName: "simple",
    autocomplete: {
      alwaysUseLayer: true,
      small: true
    },
    disableAutoFocus: true !== u,
    drafts: {
      type: c.C.ChannelMessage
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
  return (0, r.jsx)(o.D0$, {
    label: P,
    errorMessage: K,
    id: i,
    required: V,
    children: e => {
      var A, t;
      return (0, r.jsxs)(d.Ay, {
        id: null != (A = null == e ? true : e.controlId) ? A : i,
        "aria-describedby": null != (t = null == e ? true : e.describedById) ? t : W,
        "aria-labelledby": X,
        "aria-errormessage": null == e ? true : e.errorMessageId,
        "aria-invalid": (null == e ? true : e.errorMessageId) != null,
        className: f.T,
        innerClassName: a()(l, f.n),
        maxCharacterCount: g,
        onChange: Q,
        placeholder: U,
        required: V,
        channel: h,
        textValue: O,
        richValue: I,
        type: S,
        onBlur: () => {
          T.current = false
        },
        onFocus: () => {
          T.current = true
        },
        focused: T.current,
        onSubmit: null != C ? C : q,
        disableThemedBackground: !x,
        parentModalKey: y,
        emojiPickerCloseOnModalOuterClick: true,
        children: [true === j && (0, r.jsx)(b, {
          hasError: null != N.error || null != g && O.length > g,
          text: O,
          maxLength: g
        }), null != g && (0, r.jsx)(o.AC4, {
          id: v,
          children: p.intl.format(p.t["+DFxLc"], {
            maxLength: g
          })
        })]
      })
    }
  })
}