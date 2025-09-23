/** Chunk was on 28023 **/
/** chunk id: 13137, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk110924 = require("./110924.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk572539 = require("./572539.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk764920 = require("./764920.jsx"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk862083 = require("./862083.js");
let y = e => s().shuffle(e.map(e => {
  var t, n, o;
  return n = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        o = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), o.forEach(function(t) {
        var o;
        o = n[t], t in e ? Object.defineProperty(e, t, {
          value: o,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = o
      })
    }
    return e
  }({}, e), o = o = {
    problemOptions: s().shuffle(e.problemOptions).concat(null != (t = e.freeformConfig) ? t : [])
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      n.push.apply(n, o)
    }
    return n
  })(Object(o)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
  }), n
}));

function j(e) {
  var t;
  let n, i, {
      onMount: a,
      onSubmit: j,
      onClose: w,
      ratingHeader: x,
      ratingBody: C,
      ratingOptions: E,
      ratingEmojiKind: P,
      initialRating: S = null,
      categoriesHeader: D,
      optionsTree: k,
      hideDontShowAgainCheckbox: R,
      impression: L,
      transitionState: F
    } = e,
    I = (0, b.Z)(k),
    [N, Z] = r.useState(y(k));
  r.useEffect(() => {
    s().isEqual(I, k) || Z(y(k))
  }, [k, I]);
  let T = (0, m.Dt)(),
    [B, M] = r.useState(false),
    [A, V] = r.useState(S),
    [H, U] = r.useState(null),
    [K, z] = r.useState(null),
    [X, J] = r.useState("");
  (0, d.ZP)(() => null == a ? true : a()), (0, d.zq)(() => {
    var e;
    j({
      rating: A,
      category: null != (e = null == H ? true : H.value) ? e : null,
      problem: K,
      dontShowAgain: B,
      feedback: X
    })
  });
  let q = true,
    G = false;
  return null == A ? (n = (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)("div", {
      className: l()(v.problemInfo, v.ratingSelectorContainer),
      children: (0, o.jsx)(O.Z, {
        ratingOptions: E,
        emojiKind: P,
        selectedRating: A,
        onChangeRating: function(e) {
          V(e), e === g.aZ.GOOD && w()
        }
      })
    }), !R && (0, o.jsx)(u.mzw, {
      className: v.footer,
      direction: p.Z.Direction.HORIZONTAL,
      children: (0, o.jsx)(c.$q, {
        type: c.M0.INVERTED,
        size: 18,
        value: B,
        onChange: () => M(!B),
        children: (0, o.jsx)(u.Text, {
          variant: "text-sm/normal",
          children: h.intl.string(h.t["5E9SBw"])
        })
      })
    })]
  }), q = false) : A !== g.aZ.GOOD && null == H ? (n = (0, o.jsx)(u.hzk, {
    className: v.__invalid_content,
    children: (0, o.jsx)(u.xJW, {
      title: D,
      titleClassName: v.noTitleCase,
      className: l()(v.problemInfo, v.presetList, {
        [v.marginBottom16]: R
      }),
      children: (0, o.jsx)(f.Z, {
        options: N,
        onClick: U,
        hideCaret: () => true
      })
    })
  }), i = () => V(null)) : null != H && null == K ? (n = (0, o.jsx)(u.hzk, {
    className: v.__invalid_content,
    children: (0, o.jsx)(u.xJW, {
      title: H.problemsHeader,
      titleClassName: v.noTitleCase,
      className: l()(v.problemInfo, v.presetList, {
        [v.marginBottom16]: R
      }),
      children: (0, o.jsx)(f.Z, {
        options: H.problemOptions,
        onClick: function(e) {
          var t;
          z(e), null != H && null != e && (null == (t = H.freeformConfig) ? true : t.value) !== e.value && w()
        },
        hideCaret: e => {
          var t;
          let {
            value: n
          } = e;
          return (null == (t = H.freeformConfig) ? true : t.value) !== n
        }
      })
    })
  }), i = () => U(null)) : null != H && null != K && (null == (t = H.freeformConfig) ? true : t.value) === K.value && (n = (0, o.jsx)(u.hzk, {
    className: v.__invalid_content,
    children: (0, o.jsx)(u.Kx8, {
      label: h.intl.string(h.t.h95hcn),
      helperText: H.freeformConfig.hideHelpdeskLink ? true : h.intl.format(h.t.ybi2tL, {
        helpdeskURL: _.Z.getSubmitRequestURL()
      }),
      value: X,
      maxLength: g.iF,
      onChange: J
    })
  }), i = () => {
    J(""), z(null)
  }, G = true), (0, o.jsxs)(u.Y0X, {
    impression: L,
    transitionState: F,
    className: v.modalRoot,
    "aria-labelledby": T,
    parentComponent: "FeedbackModalV2",
    children: [(0, o.jsxs)(u.xBx, {
      separator: false,
      className: v.headerContainer,
      children: [(0, o.jsx)(u.X6q, {
        id: T,
        variant: "heading-xl/extrabold",
        color: "none",
        children: x
      }), (0, o.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "none",
        className: v.ratingBody,
        children: C
      })]
    }), n, q && (0, o.jsxs)(u.mzw, {
      className: v.footer,
      direction: p.Z.Direction.HORIZONTAL,
      children: [(0, o.jsx)(u.zxk, {
        variant: "secondary",
        size: "sm",
        text: h.intl.string(h.t["13/7kZ"]),
        onClick: i
      }), G && (0, o.jsx)(u.zxk, {
        variant: "primary",
        size: "sm",
        text: h.intl.string(h.t.geKm7u),
        onClick: w
      })]
    })]
  })
}