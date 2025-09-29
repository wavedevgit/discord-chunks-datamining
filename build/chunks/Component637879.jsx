/** Chunk was on web.js **/
/** chunk id: 637879, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GM: () => Z,
  HU: () => k,
  Nk: () => F,
  Q0: () => N,
  V4: () => H,
  _B: () => C,
  dI: () => x,
  do: () => w,
  f: () => P,
  mW: () => R,
  uB: () => V
}), require("./781311.js"), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk607802 = require("./607802.js"),
  Chunk532428 = require("./532428.js"),
  Chunk628221 = require("./628221.js"),
  Chunk991896 = require("./991896.js"),
  Chunk579612 = require("./579612.jsx"),
  Chunk723642 = require("./723642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk268685 = require("./268685.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk465262 = require("./465262.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e) {
  let {
    icon: t,
    label: n,
    sublabel: i,
    onSelect: a,
    navId: o,
    index: l,
    selected: c
  } = e, u = () => {
    a({
      searchAutocompleteSelectAction: E.ZW.CLICK,
      selectedIndex: l
    })
  };
  return (0, r.jsx)(s.P3F, A(T({
    className: v.itemContainer,
    onClick: u
  }, (0, h.lR)({
    navId: o,
    index: l,
    selected: c
  })), {
    children: (0, r.jsxs)("div", {
      className: v.item,
      children: [t, null == i ? n : (0, r.jsxs)("div", {
        children: [n, i]
      })]
    })
  }))
}

function N(e) {
  let {
    label: t,
    className: n
  } = e;
  return (0, r.jsx)(s.Text, {
    variant: "text-sm/medium",
    color: "text-primary",
    className: n,
    children: t
  })
}

function R(e) {
  var t, n;
  let {
    searchTokenType: i,
    answer: a
  } = e, o = null != (n = null == (t = p.ZP[i]) ? true : t.key) ? n : "", l = null != a ? a : (0, _.Ko)(i);
  return (0, r.jsxs)("div", {
    className: v.filterSublabelTextContainer,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-sm/semibold",
      color: "text-secondary",
      children: o
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-tertiary",
      children: l
    })]
  })
}

function P(e) {
  let t = (0, _.nl)(e);
  return (0, r.jsxs)("div", {
    className: v.channelNameContainer,
    children: [(0, r.jsx)(g.MC, {
      channel: e,
      className: v.channelNameIcon
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/semibold",
      color: "text-primary",
      className: v.channelName,
      children: t
    })]
  })
}

function w(e) {
  let {
    searchContext: t
  } = e;
  return (0, r.jsx)(s.ua7, {
    text: O.intl.string(O.t.dwAvX1),
    position: "left",
    children: e => {
      let {
        onMouseEnter: n,
        onMouseLeave: i
      } = e;
      return (0, r.jsx)(s.P3F, {
        onClick: () => m.Z.clearSearchHistory(t),
        onMouseEnter: n,
        onMouseLeave: i,
        className: v.clearSearchHistory,
        title: O.intl.string(O.t.dwAvX1),
        "aria-label": O.intl.string(O.t.dwAvX1),
        children: (0, r.jsx)(s.XHJ, {
          size: "sm",
          color: "currentColor",
          className: v.clearSearchHistoryIcon
        })
      })
    }
  })
}

function D(e) {
  let {
    title: t,
    showDivider: n,
    children: i
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [n && (0, r.jsx)("div", {
      className: v.divider
    }), (0, r.jsx)("ul", {
      role: "group",
      "aria-labelledby": "".concat(t, "-header"),
      children: i
    }, t)]
  })
}

function L(e) {
  let {
    headerId: t,
    titleText: n,
    trailingIcon: i
  } = e;
  return (0, r.jsxs)("div", {
    id: t,
    className: v.autocompleteGroupHeader,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-xs/semibold",
      color: "text-secondary",
      children: n
    }), i]
  })
}

function x(e) {
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
  return (0, r.jsxs)(D, {
    title: l,
    showDivider: i > 0,
    children: [(0, r.jsx)(L, {
      headerId: l,
      titleText: l,
      trailingIcon: c
    }), s.map(e => {
      let {
        icon: i,
        label: s,
        sublabel: c,
        onSelect: u
      } = e.data, d = a === o, f = o;
      return o += 1, (0, r.jsx)(C, {
        icon: i,
        label: s,
        sublabel: c,
        onSelect: u,
        navId: t,
        index: f,
        selected: d
      }, "".concat(n.type, "-").concat(l, "-").concat(f))
    })]
  })
}

function j(e) {
  let {
    size: t,
    user: n,
    className: i
  } = e, a = (0, o.e7)([u.Z], () => u.Z.getGuildId()), l = (0, y.px)(t);
  return (0, r.jsx)(s.qEK, {
    size: t,
    src: n.getAvatarURL(a, l),
    "aria-label": n.username,
    className: i
  })
}

function M(e) {
  let {
    user: t
  } = e, {
    selectedGuildId: n,
    selectedChannelId: i
  } = (0, o.cj)([u.Z, c.Z], () => {
    let e = u.Z.getGuildId(),
      t = c.Z.getChannelId(e);
    return {
      selectedGuildId: e,
      selectedChannelId: t
    }
  }), a = f.ZP.useName(n, i, t);
  return (0, r.jsx)(s.Text, {
    variant: "text-sm/semibold",
    color: "text-default",
    children: a
  })
}

function k(e) {
  let {
    value: t
  } = e, n = "", i = (0, h.ew)(t).map((e, t) => {
    let i = e.getFullMatch();
    if (0 === i.trim().length) return null;
    n += i;
    let a = b.TNx.test(e.type),
      o = b.KA4.test(e.type),
      s = "".concat(e.type, "-").concat(i, "-").concat(t);
    if (o) switch (e.type) {
      case b.dCx.ANSWER_USERNAME_FROM:
      case b.dCx.ANSWER_USERNAME_MENTIONS:
        return (0, r.jsx)(G, {
          token: e
        }, s);
      case b.dCx.ANSWER_IN:
        return (0, r.jsx)(B, {
          token: e
        }, s);
      default:
        return (0, r.jsx)(U, {
          text: i,
          className: v.answerPill
        }, s)
    }
    return (0, r.jsx)(U, {
      text: i,
      className: a ? v.filterPill : v.nonText
    }, s)
  });
  return {
    label: (0, r.jsx)("div", {
      className: v.autocompletePillContainer,
      children: i
    }),
    ariaLabel: n
  }
}

function U(e) {
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

function G(e) {
  let {
    token: t
  } = e, n = t.getFullMatch(), i = t.getData("userId"), a = (0, o.e7)([d.default], () => d.default.getUser(i));
  return null == a ? (0, r.jsx)(U, {
    text: n,
    className: v.answerPill
  }) : (0, r.jsxs)("div", {
    className: v.answerPill,
    children: [(0, r.jsx)(j, {
      size: s.EFr.SIZE_16,
      user: a
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/semibold",
      color: "text-primary",
      children: a.username
    })]
  })
}

function B(e) {
  var t;
  let {
    token: n
  } = e, i = n.getFullMatch(), c = null != (t = n.getData("channelIds")) ? t : [], u = (0, o.e7)([l.Z], () => l.Z.getChannel(c[0]));
  if (null == u) return (0, r.jsx)(U, {
    text: i,
    className: v.answerPill
  });
  let d = (0, _.nl)(u);
  return (0, r.jsxs)("div", {
    className: a()(v.answerPill, v.channelAnswerPill),
    children: [(0, r.jsx)(g.MC, {
      channel: u,
      className: v.channelPillIcon
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/semibold",
      color: "text-primary",
      children: d
    })]
  })
}

function Z(e) {
  let {
    result: t,
    group: n
  } = e;
  if (n === b.rtL.HISTORY) return (0, r.jsx)(s._Ve, {
    size: "sm",
    color: "currentColor",
    className: v.itemIcon
  });
  let {
    channel: i,
    user: a
  } = t;
  return null != i ? (0, r.jsx)(s.VL1, {
    size: "sm",
    color: "currentColor",
    className: v.itemIcon
  }) : null != a ? n === b.dCx.FILTER_MENTIONS ? (0, r.jsx)(s.lOy, {
    size: "sm",
    color: "currentColor",
    className: v.itemIcon
  }) : (0, r.jsx)(s.tBG, {
    size: "sm",
    color: "currentColor",
    className: v.itemIcon
  }) : null
}

function F(e) {
  let {
    channel: t,
    user: n,
    text: i
  } = e;
  if (null != t) {
    var a;
    return {
      label: (0, r.jsxs)("div", {
        className: v.labelWithElements,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-primary",
          children: null != (a = p.ZP[b.dCx.FILTER_IN].key) ? a : ""
        }), P(t)]
      }),
      ariaLabel: t.name
    }
  }
  return null != n ? {
    label: (0, r.jsxs)("div", {
      className: v.labelWithElements,
      children: [(0, r.jsx)(j, {
        size: s.EFr.SIZE_16,
        user: n
      }), (0, r.jsx)(M, {
        user: n
      })]
    }),
    ariaLabel: n.username
  } : {
    label: (0, r.jsx)(N, {
      label: i
    }),
    ariaLabel: i
  }
}

function V(e) {
  let {
    channel: t,
    user: n
  } = e;
  return null != t ? (0, r.jsx)(g.MC, {
    channel: t,
    className: v.itemIcon
  }) : null != n ? (0, r.jsx)(j, {
    size: s.EFr.SIZE_20,
    user: n,
    className: v.itemIcon
  }) : null
}

function H(e) {
  let {
    channel: t,
    user: n,
    text: i
  } = e;
  if (null != t) {
    let e = (0, _.nl)(t);
    return {
      label: (0, r.jsx)(s.Text, {
        variant: "text-sm/semibold",
        color: "text-primary",
        children: e
      }),
      ariaLabel: t.name
    }
  }
  return null != n ? {
    label: (0, r.jsxs)("div", {
      className: v.labelWithElements,
      children: [(0, r.jsx)(M, {
        user: n
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: n.username
      })]
    }),
    ariaLabel: n.username
  } : {
    label: (0, r.jsx)(N, {
      label: i
    }),
    ariaLabel: i
  }
}