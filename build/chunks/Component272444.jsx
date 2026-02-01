/** Chunk was on 52199 **/
/** chunk id: 272444, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  AX: () => k,
  JK: () => z,
  Jx: () => O,
  YD: () => C,
  _h: () => Q,
  bg: () => T,
  bj: () => x,
  c$: () => H,
  ge: () => D,
  k8: () => L,
  lF: () => I
}), require("./733351.js"), require("./747238.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk822382 = require("./822382.js"),
  Chunk771650 = require("./771650.js"),
  Chunk616252 = require("./616252.js"),
  Chunk315059 = require("./315059.jsx"),
  Chunk121806 = require("./121806.jsx"),
  Chunk949759 = require("./949759.js"),
  Chunk768570 = require("./768570.js"),
  Chunk652215 = require("./652215.js"),
  Chunk778712 = require("./778712.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk935606 = require("./935606.js");

function O(e) {
  var t, r;
  let {
    icon: l,
    label: s,
    sublabel: a,
    onSelect: i,
    navId: c,
    index: u,
    selected: d
  } = e;
  return (0, n.jsx)(o.DUT, (t = function(e) {
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
  }({
    className: v.DB,
    onClick: () => {
      i({
        searchAutocompleteSelectAction: y.oi.CLICK,
        selectedIndex: u
      })
    }
  }, (0, A.wR)({
    navId: c,
    index: u,
    selected: d
  })), r = r = {
    children: (0, n.jsxs)("div", {
      className: v.AS,
      children: [l, null == a ? s : (0, n.jsxs)("div", {
        children: [s, a]
      })]
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}

function T(e) {
  let {
    label: t,
    className: r
  } = e;
  return (0, n.jsx)(o.Text, {
    variant: "text-sm/medium",
    color: "text-strong",
    className: r,
    children: t
  })
}

function x(e) {
  var t, r;
  let {
    searchTokenType: l,
    answer: s
  } = e, a = null != (t = null == (r = g.Ay[l]) ? true : r.key) ? t : "", i = null != s ? s : (0, p.sh)(l);
  return (0, n.jsxs)("div", {
    className: v.Xq,
    children: [(0, n.jsx)(o.Text, {
      variant: "text-sm/semibold",
      color: "text-subtle",
      children: a
    }), (0, n.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: i
    })]
  })
}

function I(e) {
  let t = (0, p.E3)(e);
  return (0, n.jsxs)("div", {
    className: v.aT,
    children: [(0, n.jsx)(E.A, {
      channel: e,
      avatarSize: o._3J.SIZE_16,
      iconClassName: v.er,
      iconSize: "xs"
    }), (0, n.jsx)(o.Text, {
      variant: "text-sm/semibold",
      color: "text-strong",
      className: v.HA,
      children: t
    })]
  })
}

function L(e) {
  let {
    searchContext: t
  } = e;
  return (0, n.jsx)(i.m_, {
    asContainer: true,
    text: R.intl.string(R.t.dwAvX1),
    position: "left",
    children: (0, n.jsx)(o.DUT, {
      onClick: () => S.A.clearSearchHistory(t),
      className: v.Wf,
      title: R.intl.string(R.t.dwAvX1),
      "aria-label": R.intl.string(R.t.dwAvX1),
      children: (0, n.jsx)(o.ucK, {
        size: "sm",
        color: "currentColor",
        className: v.f
      })
    })
  })
}

function j(e) {
  let {
    title: t,
    showDivider: r,
    children: l
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [r && (0, n.jsx)("div", {
      className: v.yF
    }), (0, n.jsx)("ul", {
      role: "group",
      "aria-labelledby": "".concat(t, "-header"),
      className: v.jw,
      children: l
    }, t)]
  })
}

function N(e) {
  let {
    headerId: t,
    titleText: r,
    trailingIcon: l
  } = e;
  return (0, n.jsxs)("div", {
    id: t,
    className: v.x_,
    children: [(0, n.jsx)(o.Text, {
      variant: "text-xs/semibold",
      color: "text-subtle",
      children: r
    }), l]
  })
}

function C(e) {
  let {
    navId: t,
    item: r,
    startingIndex: l,
    selectedIndex: s
  } = e, a = l, {
    rows: i,
    title: o,
    trailingIcon: c
  } = r.data;
  return (0, n.jsxs)(j, {
    title: o,
    showDivider: l > 0,
    children: [(0, n.jsx)(N, {
      headerId: o,
      titleText: o,
      trailingIcon: c
    }), i.map(e => {
      let {
        icon: l,
        label: i,
        sublabel: c,
        onSelect: u
      } = e.data, d = s === a, h = a;
      return a += 1, (0, n.jsx)(O, {
        icon: l,
        label: i,
        sublabel: c,
        onSelect: u,
        navId: t,
        index: h,
        selected: d
      }, "".concat(r.type, "-").concat(o, "-").concat(h))
    })]
  })
}

function F(e) {
  let {
    size: t,
    user: r,
    className: l
  } = e, s = (0, a.bG)([d.A], () => d.A.getGuildId()), i = (0, b.FT)(t);
  return (0, n.jsx)(o.euF, {
    size: t,
    src: r.getAvatarURL(s, i),
    "aria-label": r.username,
    className: l
  })
}

function w(e) {
  let {
    user: t
  } = e, {
    selectedGuildId: r,
    selectedChannelId: l
  } = (0, a.cf)([d.A, u.A], () => {
    let e = d.A.getGuildId(),
      t = u.A.getChannelId(e);
    return {
      selectedGuildId: e,
      selectedChannelId: t
    }
  }), s = f.Ay.useName(r, l, t);
  return (0, n.jsx)(o.Text, {
    variant: "text-sm/semibold",
    color: "text-default",
    children: s
  })
}

function k(e) {
  let {
    value: t,
    avatarSize: r,
    iconSize: l
  } = e, s = "", a = (0, A.fh)(t).map((e, t) => {
    let a = e.getFullMatch();
    if (0 === a.trim().length) return null;
    s += a;
    let i = m.l90.test(e.type),
      o = m.T2E.test(e.type),
      c = "".concat(e.type, "-").concat(a, "-").concat(t);
    if (o) switch (e.type) {
      case m.LWr.ANSWER_USERNAME_FROM:
      case m.LWr.ANSWER_USERNAME_MENTIONS:
        return (0, n.jsx)(W, {
          token: e,
          avatarSize: r
        }, c);
      case m.LWr.ANSWER_IN:
        return (0, n.jsx)(M, {
          token: e,
          avatarSize: r,
          iconSize: l
        }, c);
      default:
        return (0, n.jsx)(P, {
          text: a,
          className: v.Mj
        }, c)
    }
    return (0, n.jsx)(P, {
      text: a,
      className: i ? v._y : v.Lc
    }, c)
  });
  return {
    label: (0, n.jsx)("div", {
      className: v.fH,
      children: a
    }),
    ariaLabel: s
  }
}

function P(e) {
  let {
    text: t,
    className: r
  } = e;
  return (0, n.jsx)(o.Text, {
    variant: "text-sm/semibold",
    color: "text-strong",
    className: r,
    children: t
  })
}

function W(e) {
  let {
    token: t,
    avatarSize: r
  } = e, l = t.getFullMatch(), s = t.getData("userId"), i = (0, a.bG)([h.default], () => h.default.getUser(s));
  return null == i ? (0, n.jsx)(P, {
    text: l,
    className: v.Mj
  }) : (0, n.jsxs)("div", {
    className: v.Mj,
    children: [(0, n.jsx)(F, {
      size: r,
      user: i
    }), (0, n.jsx)(o.Text, {
      variant: "text-sm/semibold",
      color: "text-strong",
      children: i.username
    })]
  })
}

function M(e) {
  var t;
  let {
    token: r,
    avatarSize: l,
    iconSize: i
  } = e, u = r.getFullMatch(), d = null != (t = r.getData("channelIds")) ? t : [], h = (0, a.bG)([c.A], () => c.A.getChannel(d[0]));
  if (null == h) return (0, n.jsx)(P, {
    text: u,
    className: v.Mj
  });
  let f = (0, p.E3)(h);
  return (0, n.jsxs)("div", {
    className: s()(v.Mj, v.JG),
    children: [(0, n.jsx)(E.A, {
      channel: h,
      avatarSize: l,
      iconClassName: v.Wh,
      iconSize: i
    }), (0, n.jsx)(o.Text, {
      variant: "text-sm/semibold",
      color: "text-strong",
      children: f
    })]
  })
}

function D(e) {
  let {
    result: t,
    group: r
  } = e;
  if (r === m.x2k.HISTORY) return (0, n.jsx)(o.$p$, {
    size: "sm",
    color: "currentColor",
    className: v.Fx
  });
  let {
    channel: l,
    user: s
  } = t;
  return null != l ? (0, n.jsx)(o.N$i, {
    size: "sm",
    color: "currentColor",
    className: v.Fx
  }) : null != s ? r === m.LWr.FILTER_MENTIONS ? (0, n.jsx)(o.XxR, {
    size: "sm",
    color: "currentColor",
    className: v.Fx
  }) : (0, n.jsx)(o.nys, {
    size: "sm",
    color: "currentColor",
    className: v.Fx
  }) : null
}

function H(e) {
  let {
    channel: t,
    user: r,
    text: l
  } = e;
  if (null != t) {
    var s;
    return {
      label: (0, n.jsxs)("div", {
        className: v.YL,
        children: [(0, n.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-strong",
          children: null != (s = g.Ay[m.LWr.FILTER_IN].key) ? s : ""
        }), I(t)]
      }),
      ariaLabel: t.name
    }
  }
  return null != r ? {
    label: (0, n.jsxs)("div", {
      className: v.YL,
      children: [(0, n.jsx)(F, {
        size: o._3J.SIZE_16,
        user: r
      }), (0, n.jsx)(w, {
        user: r
      })]
    }),
    ariaLabel: r.username
  } : {
    label: (0, n.jsx)(T, {
      label: l
    }),
    ariaLabel: l
  }
}

function U(e) {
  let {
    text: t,
    className: r,
    size: l
  } = e, s = (0, _.KD)(t);
  return null != s ? (0, n.jsx)(s, {
    size: l,
    color: "currentColor",
    className: r
  }) : null
}

function q(e) {
  let {
    text: t,
    className: r,
    size: l
  } = e, s = (0, _.Ht)(t);
  return null != s ? (0, n.jsx)(s, {
    size: l,
    color: "currentColor",
    className: r
  }) : null
}

function Q(e) {
  let {
    result: t,
    group: r
  } = e, {
    channel: l,
    user: s
  } = t;
  return null != l ? (0, n.jsx)(E.A, {
    channel: l,
    avatarSize: o._3J.SIZE_20,
    iconClassName: v.Fx,
    iconSize: "refresh_sm"
  }) : null != s ? (0, n.jsx)(F, {
    size: o._3J.SIZE_20,
    user: s,
    className: v.Fx
  }) : r === m.LWr.FILTER_HAS ? (0, n.jsx)(U, {
    size: "sm",
    text: t.text,
    className: v.Fx
  }) : r === m.LWr.FILTER_AUTHOR_TYPE ? (0, n.jsx)(q, {
    size: "sm",
    text: t.text,
    className: v.Fx
  }) : null
}

function z(e) {
  let {
    channel: t,
    user: r,
    text: l
  } = e;
  if (null != t) {
    let e = (0, p.E3)(t);
    return {
      label: (0, n.jsx)(o.Text, {
        variant: "text-sm/semibold",
        color: "text-strong",
        children: e
      }),
      ariaLabel: t.name
    }
  }
  return null != r ? {
    label: (0, n.jsxs)("div", {
      className: v.YL,
      children: [(0, n.jsx)(w, {
        user: r
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: r.username
      })]
    }),
    ariaLabel: r.username
  } : {
    label: (0, n.jsx)(T, {
      label: l
    }),
    ariaLabel: l
  }
}