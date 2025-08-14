/** Chunk was on web.js **/
/** chunk id: 28752, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk373793 = require("./373793.js"),
  Chunk481060 = require("./481060.js"),
  Chunk783097 = require("./783097.js"),
  Chunk753972 = require("./753972.jsx"),
  Chunk520315 = require("./520315.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk314583 = require("./314583.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk443663 = require("./443663.js"),
  Chunk430864 = require("./430864.js"),
  Chunk413097 = require("./413097.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}
let E = 84;

function b(e) {
  let {
    application: t,
    onSelect: n
  } = e, c = (0, d.X)(), {
    iconURL: p
  } = i.useMemo(() => (0, s.sl)(t, {
    fakeAppIconURL: h,
    size: E
  }), [t]), m = i.useMemo(() => [{
    type: o.Y.USER_INSTALL,
    icon: a.oLu,
    title: f.intl.string(f.t.aCg60N),
    subtitle: f.intl.string(f.t.YeiIUV),
    beta: false
  }, {
    type: o.Y.GUILD_INSTALL,
    icon: a.QTo,
    title: f.intl.string(f.t.E64YCw),
    subtitle: f.intl.string(f.t.bbtoKi),
    beta: false
  }].filter(e => {
    var n, r;
    return (null == (r = t.integrationTypesConfig) || null == (n = r[e.type]) ? true : n.oauth2InstallParams) != null
  }), [t.integrationTypesConfig]);
  return (0, r.jsxs)("div", {
    className: _.container,
    children: [(0, r.jsxs)("header", {
      id: c,
      className: _.header,
      children: [(0, r.jsx)(l.Z, {
        src: p,
        className: _.appIcon,
        rendersPlaceholder: true
      }), (0, r.jsx)(O, {
        application: t
      }), (0, r.jsx)(y, {
        application: t
      })]
    }), (0, r.jsx)("ul", {
      className: _.rows,
      children: m.map(e => (0, r.jsxs)(a.P3F, {
        tag: "li",
        className: _.row,
        onClick: () => n(e.type),
        children: [(0, r.jsx)(e.icon, {
          size: "md",
          color: "currentColor",
          className: _.leftIcon
        }), (0, r.jsxs)("div", {
          className: _.rowInner,
          children: [(0, r.jsxs)("div", {
            className: _.rowDetails,
            children: [(0, r.jsx)(a.Text, {
              variant: "text-md/medium",
              color: "interactive-active",
              children: e.title
            }), (0, r.jsx)(a.Text, {
              variant: "text-xs/medium",
              color: "text-muted",
              children: e.subtitle
            })]
          }), e.beta && (0, r.jsx)(u.Z, {}), (0, r.jsx)(a.Fbu, {
            size: "md",
            color: "currentColor",
            className: _.rightIcon
          })]
        })]
      }, e.type))
    })]
  })
}

function y(e) {
  let {
    application: t
  } = e, n = t.description;
  return null == n || 0 === n.length ? null : (0, r.jsx)("div", {
    className: _.detailsContainer,
    children: (0, r.jsx)("div", {
      className: _.overviewContainerNoVideo,
      children: null != n && n.length > 0 ? (0, r.jsx)(I, {
        description: n
      }) : null
    })
  })
}

function O(e) {
  let {
    application: t
  } = e, n = t.name, i = (0, s.vJ)(t);
  return (0, r.jsxs)("div", {
    className: _.titleContainer,
    children: [(0, r.jsx)(a.X6q, {
      variant: "heading-xl/extrabold",
      lineClamp: 1,
      children: n
    }), i ? (0, r.jsx)("div", {
      className: _.partnerLabelContainer,
      children: (0, r.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: f.intl.string(f.t.LO4f0N)
      })
    }) : null]
  })
}
let v = 3;

function I(e) {
  let {
    description: t
  } = e, [o, s] = i.useState(true);
  i.useLayoutEffect(() => s(false), []);
  let l = i.useMemo(() => {
      let {
        parseBioReact: e
      } = n(240991);
      return e(t)
    }, [t]),
    {
      ref: u,
      lineHeight: d,
      lineCount: h
    } = T(),
    m = i.useMemo(() => {
      if (null == d || null == h) return {
        key: 0
      };
      let e = d * h;
      return {
        key: 1,
        minHeightOverride: Math.min(e, v * d),
        maxHeightOverride: e
      }
    }, [h, d]),
    {
      ref: E,
      isTransitioning: b,
      onTransitionEnd: y
    } = (0, c.Z)(g({
      isExpanded: o
    }, m)),
    O = o || b;
  return (0, r.jsxs)("div", {
    className: _.descriptionContainer,
    children: [(0, r.jsx)("div", {
      ref: E,
      className: _.overflowHidden,
      onTransitionEnd: y,
      children: (0, r.jsx)(a.Text, {
        ref: u,
        className: p.markup,
        variant: "text-sm/medium",
        lineClamp: O ? true : v,
        style: {
          maxHeight: O ? true : m.minHeightOverride
        },
        children: l
      })
    }), null != h && h > v ? (0, r.jsxs)(a.P3F, {
      className: _.expandableDescriptionClickable,
      onClick: () => s(e => !e),
      children: [(0, r.jsx)(a.Text, {
        variant: "text-sm/semibold",
        color: "text-brand",
        children: O ? f.intl.string(f.t.u4YJ8v) : f.intl.string(f.t["N/tajI"])
      }), O ? (0, r.jsx)(a.u04, {
        size: "sm",
        color: a.TVs.colors.TEXT_BRAND
      }) : (0, r.jsx)(a.CJ0, {
        size: "sm",
        color: a.TVs.colors.TEXT_BRAND
      })]
    }) : null]
  })
}

function T() {
  let e = Chunk73800.useRef(null),
    [t, n] = Chunk73800.useState(null),
    [r, o] = Chunk73800.useState(null);
  return Chunk73800.useLayoutEffect(() => {
    let t = module.current;
    if (null === exports || 0 === exports.clientHeight) return;
    let r = parseInt(getComputedStyle(exports).lineHeight);
    isNaN(Chunk255367) || (require(Chunk255367), Chunk373793(Math.floor(exports.clientHeight / Chunk255367)))
  }, []), {
    ref: module,
    lineHeight: exports,
    lineCount: Chunk255367
  }
}