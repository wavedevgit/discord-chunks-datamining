/** Chunk was on 30243 **/
/** chunk id: 151200, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk328731 = require("./328731.jsx"),
  Chunk442550 = require("./442550.jsx"),
  Chunk435439 = require("./435439.jsx"),
  Chunk206295 = require("./206295.js"),
  Chunk297781 = require("./297781.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk382150 = require("./382150.js"),
  Chunk46999 = require("./46999.js");

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function g(e) {
  let {
    className: t,
    clickableClassName: r,
    clickable: l,
    children: a
  } = e, c = (0, p.Dt)();
  if (null != l && "href" in l) {
    let {
      ariaDescription: e,
      href: s
    } = l;
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(o.nn4, {
        id: c,
        children: e
      }), (0, n.jsx)(o.eee, {
        className: i()(t, r),
        href: s,
        "aria-describedby": c,
        children: a
      })]
    })
  }
  let {
    onClick: s,
    ariaDescription: u
  } = null != l ? l : {};
  return (0, n.jsxs)(o.g$b.Provider, {
    value: null == s,
    children: [null != s && null != u && (0, n.jsx)(o.nn4, {
      id: c,
      children: u
    }), (0, n.jsx)(o.P3F, {
      onClick: s,
      "aria-describedby": null == s ? true : c,
      className: i()(t, null != s && r),
      children: a
    })]
  })
}

function h(e) {
  var {
    clickable: t
  } = e, r = function(e, t) {
    if (null == e) return {};
    var r, n, l = function(e, t) {
      if (null == e) return {};
      var r, n, l = {},
        i = Object.keys(e);
      for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
    }
    return l
  }(e, ["clickable"]);
  return (0, n.jsx)(g, j(y({}, r), {
    clickable: j(y({}, t), {
      ariaDescription: ""
    }),
    clickableClassName: O.clickable
  }))
}

function v(e) {
  let {
    entry: t,
    channel: r,
    title: l,
    subtitle: O,
    thumbnailUrl: j,
    titleClickable: v,
    subtitleClickable: P,
    thumbnailClickable: x,
    providerIconProps: S,
    style: w = {}
  } = e, C = (0, p.Dt)(), {
    primaryColor: E,
    secondaryColor: N
  } = (0, u.Z)(j);
  return null != j && (w.background = "linear-gradient(45deg, ".concat(E, ", ").concat(N, ")")), (0, n.jsx)(o.f6W, {
    theme: f.BR.DARK,
    disableAdaptiveTheme: true,
    children: e => (0, n.jsxs)("figure", {
      "aria-roledescription": b.intl.string(b.t.zFfUhI),
      "aria-labelledby": C,
      className: i()(m.container, e),
      style: w,
      children: [(0, n.jsx)(g, {
        className: m.thumbnailContainer,
        clickableClassName: m.clickable,
        clickable: x,
        children: (0, n.jsx)(c.f, {
          src: j,
          constrain: "width",
          size: 64,
          "aria-hidden": true
        })
      }), (0, n.jsxs)("div", {
        className: m.infoContainer,
        children: [(0, n.jsx)(a.Z, {
          channel: r,
          entry: t,
          className: m.users
        }), (0, n.jsx)(o.LZC, {
          size: 2
        }), (0, n.jsx)(h, {
          clickable: v,
          className: m.clickableText,
          children: (0, n.jsx)(o.X6q, {
            id: C,
            variant: "heading-md/medium",
            lineClamp: 1,
            className: i()(m.textPrimary, m.truncatedText),
            scaleFontToUserSetting: true,
            children: l
          })
        }), null != O ? (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(o.LZC, {
            size: 2
          }), (0, n.jsx)(h, {
            clickable: P,
            className: m.clickableText,
            children: (0, n.jsx)(o.Text, {
              variant: "text-sm/normal",
              className: i()(m.textSecondary, m.truncatedText),
              lineClamp: 1,
              scaleFontToUserSetting: true,
              children: O
            })
          })]
        }) : null, (0, n.jsx)(d.PZ, {
          className: m.badges,
          entry: t,
          location: d.Gt.EMBED
        })]
      }), (0, n.jsx)("div", {
        className: m.headerIcons,
        children: null != S ? (0, n.jsx)(s.Z, y({}, S)) : null
      })]
    })
  })
}