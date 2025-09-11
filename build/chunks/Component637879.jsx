/** Chunk was on web.js **/
/** chunk id: 637879, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q0: () => I,
  _B: () => v,
  dI: () => N,
  do: () => S,
  dx: () => R,
  f: () => T
}), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk748610 = require("./748610.js"),
  Chunk607802 = require("./607802.js"),
  Chunk628221 = require("./628221.js"),
  Chunk579612 = require("./579612.jsx"),
  Chunk723642 = require("./723642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk465262 = require("./465262.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  let {
    icon: t,
    label: n,
    onSelect: i,
    navId: a,
    index: o,
    selected: l
  } = e, c = () => {
    i({
      searchAutocompleteSelectAction: p.ZW.CLICK,
      selectedIndex: o
    })
  };
  return (0, r.jsxs)(s.P3F, O(b({
    className: g.item,
    onClick: c
  }, (0, f.lR)({
    navId: a,
    index: o,
    selected: l
  })), {
    children: [t, n]
  }))
}

function I(e) {
  let {
    label: t
  } = e;
  return (0, r.jsx)(s.Text, {
    variant: "text-sm/medium",
    color: "text-primary",
    className: g.itemText,
    children: t
  })
}

function T(e) {
  let t = (0, d.nl)(e);
  return (0, r.jsxs)("div", {
    className: g.channelNameContainer,
    children: [(0, r.jsx)(_.MC, {
      channel: e,
      className: g.channelNameIcon
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/semibold",
      color: "text-primary",
      className: g.channelName,
      children: t
    })]
  })
}

function S(e) {
  let {
    searchContext: t
  } = e;
  return (0, r.jsx)(s.ua7, {
    text: m.intl.string(m.t.dwAvX1),
    position: "left",
    children: e => {
      let {
        onMouseEnter: n,
        onMouseLeave: i
      } = e;
      return (0, r.jsx)(s.P3F, {
        onClick: () => u.Z.clearWebSearchHistory(t),
        onMouseEnter: n,
        onMouseLeave: i,
        className: g.clearSearchHistory,
        title: m.intl.string(m.t.dwAvX1),
        "aria-label": m.intl.string(m.t.dwAvX1),
        children: (0, r.jsx)(s.XHJ, {
          size: "sm",
          color: "currentColor",
          className: g.clearSearchHistoryIcon
        })
      })
    }
  })
}

function A(e) {
  let {
    title: t,
    children: n
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: g.divider
    }), (0, r.jsx)("ul", {
      role: "group",
      "aria-labelledby": "".concat(t, "-header"),
      children: n
    }, t)]
  })
}

function C(e) {
  let {
    headerId: t,
    titleText: n,
    trailingIcon: i
  } = e;
  return (0, r.jsxs)("div", {
    id: t,
    className: g.autocompleteGroupHeader,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-xs/semibold",
      color: "text-secondary",
      children: n
    }), i]
  })
}

function N(e) {
  let {
    navId: t,
    item: n,
    startingIndex: i,
    selectedIndex: a
  } = e, o = i, {
    rows: s,
    title: l,
    trailingIcon: c
  } = n.data;
  return (0, r.jsxs)(A, {
    title: l,
    children: [(0, r.jsx)(C, {
      headerId: l,
      titleText: l,
      trailingIcon: c
    }), s.map(e => {
      let {
        icon: i,
        label: s,
        onSelect: c
      } = e.data, u = a === o, d = o;
      return o += 1, (0, r.jsx)(v, {
        icon: i,
        label: s,
        onSelect: c,
        navId: t,
        index: d,
        selected: u
      }, "".concat(n.type, "-").concat(l, "-").concat(d))
    })]
  })
}

function R(e) {
  let t = "";
  return {
    label: (0, f.cm)(e.text).map((e, n) => {
      let i = e.getFullMatch();
      t += i;
      let a = h.TNx.test(e.type),
        o = h.KA4.test(e.type),
        s = "".concat(e.type, "-").concat(i, "-").concat(n);
      if (o) switch (e.type) {
        case h.dCx.ANSWER_USERNAME_FROM:
        case h.dCx.ANSWER_USERNAME_MENTIONS:
          return (0, r.jsx)(w, {
            token: e
          }, s);
        case h.dCx.ANSWER_IN:
          return (0, r.jsx)(D, {
            token: e
          }, s);
        default:
          return (0, r.jsx)(P, {
            text: i,
            className: g.answerPill
          }, s)
      }
      return (0, r.jsx)(P, {
        text: i,
        className: a ? g.filterPill : true
      }, s)
    }),
    ariaLabel: m.intl.formatToPlainString(m.t.WoiGra, {
      suggestion: t
    })
  }
}

function P(e) {
  let {
    text: t,
    className: n
  } = e;
  return (0, r.jsx)(s.Text, {
    variant: "text-sm/semibold",
    color: "text-primary",
    className: n,
    children: t
  })
}

function w(e) {
  let {
    token: t
  } = e, n = t.getFullMatch(), i = t.getData("userId"), a = (0, o.e7)([c.default], () => c.default.getUser(i));
  return null == a ? (0, r.jsx)(P, {
    text: n,
    className: g.answerPill
  }) : (0, r.jsxs)("div", {
    className: g.answerPill,
    children: [(0, r.jsx)(s.qEK, {
      size: s.EFr.SIZE_16,
      src: a.getAvatarURL(true, 16),
      "aria-label": a.username
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/semibold",
      color: "text-primary",
      children: a.username
    })]
  })
}

function D(e) {
  var t;
  let {
    token: n
  } = e, i = n.getFullMatch(), c = null != (t = n.getData("channelIds")) ? t : [], u = (0, o.e7)([l.Z], () => l.Z.getChannel(c[0]));
  if (null == u) return (0, r.jsx)(P, {
    text: i,
    className: g.answerPill
  });
  let f = (0, d.nl)(u);
  return (0, r.jsxs)("div", {
    className: a()(g.answerPill, g.channelAnswerPill),
    children: [(0, r.jsx)(_.MC, {
      channel: u,
      className: g.channelPillIcon
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/semibold",
      color: "text-primary",
      children: f
    })]
  })
}