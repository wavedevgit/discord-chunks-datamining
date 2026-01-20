/** Chunk was on 97116 **/
/** chunk id: 13137, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  u = require.n(Chunk392711),
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
  Chunk877075 = require("./877075.js");
let N = e => u().shuffle(e.map(e => {
  var t, n, l;
  return n = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        l = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), l.forEach(function(t) {
        var l;
        l = n[t], t in e ? Object.defineProperty(e, t, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = l
      })
    }
    return e
  }({}, e), l = l = {
    problemOptions: u().shuffle(e.problemOptions).concat(null != (t = e.freeformConfig) ? t : [])
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(l)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
  }), n
}));

function S(e) {
  var t;
  let n, i, {
      onMount: s,
      onSubmit: S,
      onClose: m,
      ratingHeader: j,
      ratingBody: _,
      ratingOptions: D,
      ratingEmojiKind: C,
      initialRating: y = null,
      categoriesHeader: L,
      optionsTree: I,
      hideDontShowAgainCheckbox: T,
      impression: x,
      transitionState: P
    } = e,
    R = (0, b.Z)(I),
    [M, $] = a.useState(N(I));
  a.useEffect(() => {
    u().isEqual(R, I) || $(N(I))
  }, [I, R]);
  let A = (0, O.Dt)(),
    [U, k] = a.useState(false),
    [F, w] = a.useState(y),
    [H, Z] = a.useState(1 === M.length ? M[0] : null),
    [G, B] = a.useState(null),
    [J, z] = a.useState("");
  (0, o.ZP)(() => null == s ? true : s()), (0, o.zq)(() => {
    var e;
    S({
      rating: F,
      category: null != (e = null == H ? true : H.value) ? e : null,
      problem: G,
      dontShowAgain: U,
      feedback: J
    })
  });
  let Y = true,
    K = false;
  return null == F ? (n = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: r()(p.problemInfo, p.ratingSelectorContainer),
      children: (0, l.jsx)(E.Z, {
        ratingOptions: D,
        emojiKind: C,
        selectedRating: F,
        onChangeRating: function(e) {
          w(e), e === h.aZ.GOOD && m()
        }
      })
    }), !T && (0, l.jsx)(d.mzw, {
      className: p.footer,
      direction: c.Z.Direction.HORIZONTAL,
      children: (0, l.jsx)(d.Checkbox, {
        checked: U,
        onChange: () => k(!U),
        label: g.intl.string(g.t["5E9SB9"]),
        labelType: "secondary"
      })
    })]
  }), Y = false) : F !== h.aZ.GOOD && null == H ? (n = (0, l.jsx)(d.hzk, {
    children: (0, l.jsx)(d.gNt, {
      label: L,
      children: (0, l.jsx)(f.Z, {
        options: M,
        onClick: Z,
        hideCaret: () => true
      })
    })
  }), i = () => w(null)) : null != H && null == G ? (n = (0, l.jsx)(d.hzk, {
    children: (0, l.jsx)(d.gNt, {
      label: H.problemsHeader,
      children: (0, l.jsx)(f.Z, {
        options: H.problemOptions,
        onClick: function(e) {
          var t;
          B(e), null != H && null != e && (null == (t = H.freeformConfig) ? true : t.value) !== e.value && m()
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
  }), i = () => 1 === M.length ? w(null) : Z(null)) : null != H && null != G && (null == (t = H.freeformConfig) ? true : t.value) === G.value && (n = (0, l.jsx)(d.hzk, {
    children: (0, l.jsx)(d.Kx8, {
      label: g.intl.string(g.t.h95hcn),
      helperText: H.freeformConfig.hideHelpdeskLink ? true : g.intl.format(g.t.ybi2tD, {
        helpdeskURL: v.Z.getSubmitRequestURL()
      }),
      value: J,
      maxLength: h.iF,
      onChange: z
    })
  }), i = () => {
    z(""), B(null)
  }, K = true), (0, l.jsxs)(d.Y0X, {
    impression: x,
    transitionState: P,
    className: p.modalRoot,
    "aria-labelledby": A,
    parentComponent: "FeedbackModalV2",
    children: [(0, l.jsxs)(d.xBx, {
      separator: false,
      className: p.headerContainer,
      children: [(0, l.jsx)(d.Heading, {
        id: A,
        variant: "heading-xl/extrabold",
        color: "none",
        children: j
      }), (0, l.jsx)(d.Text, {
        variant: "text-md/normal",
        color: "none",
        className: p.ratingBody,
        children: _
      })]
    }), n, Y && (0, l.jsxs)(d.mzw, {
      className: p.footer,
      direction: c.Z.Direction.HORIZONTAL,
      children: [(0, l.jsx)(d.Button, {
        variant: "secondary",
        size: "sm",
        text: g.intl.string(g.t["13/7kX"]),
        onClick: i
      }), K && (0, l.jsx)(d.Button, {
        variant: "primary",
        size: "sm",
        text: g.intl.string(g.t.geKm7t),
        onClick: m
      })]
    })]
  })
}