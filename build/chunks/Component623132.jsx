/** Chunk was on 30397 **/
/** chunk id: 623132, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./781311.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk624238 = require("./624238.js"),
  Chunk296009 = require("./296009.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk747101 = require("./747101.js"),
  Chunk971082 = require("./971082.jsx"),
  Chunk817053 = require("./817053.jsx"),
  Chunk248554 = require("./248554.jsx"),
  Chunk879877 = require("./879877.jsx"),
  Chunk533815 = require("./533815.jsx"),
  Chunk853072 = require("./853072.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js"),
  Chunk776385 = require("./776385.js");

function I(e) {
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

function k(e, t) {
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

function C(e) {
  var {
    applicationId: t,
    userId: r,
    gameName: a
  } = e, o = function(e, t) {
    if (null == e) return {};
    var r, n, a = function(e, t) {
      if (null == e) return {};
      var r, n, a = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
    }
    return a
  }(e, ["applicationId", "userId", "gameName"]);
  let i = (0, f.Z)({
    location: "UserProfileWidgetGameDetailsCard",
    applicationId: t,
    source: d.m1.UserProfile,
    sourceUserId: r,
    trackEntryPointImpression: true
  });
  return null == i ? (0, n.jsx)(s.X6q, k(I({}, o), {
    children: a
  })) : (0, n.jsx)(s.X6q, k(I({}, o), {
    children: (0, n.jsx)(s.P3F, {
      onClick: i,
      className: S.clickableText,
      children: a
    })
  }))
}

function E(e) {
  let {
    user: t,
    guildId: r,
    channelId: a,
    id: o
  } = e;
  return (0, n.jsx)(s.nn4, {
    id: o,
    children: P.intl.format(P.t.TM0XDQ, {
      name: g.ZP.getName(r, a, t)
    })
  })
}

function N(e) {
  let {
    text: t,
    className: r
  } = e;
  return (0, n.jsx)(s.Text, {
    variant: "text-sm/normal",
    color: "text-tertiary",
    className: r,
    children: t
  })
}

function D(e) {
  let {
    text: t,
    user: r,
    guildId: a,
    channelId: o
  } = e, i = (0, u.Dt)();
  return null == t || "" === t.trim() ? null : (0, n.jsxs)("div", {
    role: "group",
    "aria-labelledby": i,
    children: [(0, n.jsx)(s.PEf, {
      size: "xxs",
      color: s.TVs.colors.ICON_TERTIARY,
      className: S.commentIcon
    }), (0, n.jsx)(E, {
      user: r,
      guildId: a,
      channelId: o,
      id: i
    }), (0, n.jsx)(N, {
      text: t
    })]
  })
}

function T(e) {
  let {
    text: t,
    user: r,
    guildId: o,
    channelId: c,
    widgetType: d,
    applicationId: f
  } = e, b = (0, u.Dt)(), g = (0, u.Dt)(), {
    trackUserProfileAction: O
  } = (0, p.KZ)(), [y, j] = a.useState("idle"), [v, x] = a.useState(null != t ? t : ""), h = a.useRef(null), w = a.useRef(null), _ = P.intl.string(P.t.xKSfBQ), I = null != t && "" !== t.trim(), k = a.useCallback(() => {
    j("editing")
  }, []), C = a.useCallback(() => {
    let e = v.trim();
    (0, m.Bu)(d, f, "" !== e ? e : true), j("completed"), O({
      action: "EDIT_ACTION"
    })
  }, [d, f, v, O]), D = a.useCallback(e => {
    x(e)
  }, []);
  return a.useEffect(() => {
    "editing" === y && x(null != t ? t : "")
  }, [t, y]), a.useEffect(() => {
    if ("completed" === y) {
      var e;
      null == (e = h.current) || e.focus()
    }
  }, [y]), "editing" === y ? (0, n.jsxs)("div", {
    className: S.textAreaContainer,
    children: [(0, n.jsx)(s.nn4, {
      tag: "label",
      htmlFor: b,
      children: P.intl.string(P.t.JxKXeX)
    }), (0, n.jsx)(s.Kx8, {
      id: b,
      value: v,
      placeholder: _,
      onChange: D,
      onBlur: C,
      rows: 3,
      autoFocus: "editing" === y,
      onKeyDown: e => {
        "Enter" !== e.key || e.shiftKey || (e.preventDefault(), C())
      },
      maxLength: l.r
    })]
  }) : (0, n.jsxs)("div", {
    ref: w,
    role: "group",
    "aria-labelledby": g,
    onClick: k,
    className: S.editableCommentContainer,
    children: [(0, n.jsx)(s.vdY, {
      size: "xxs",
      color: s.TVs.colors.ICON_TERTIARY,
      className: S.commentIcon
    }), (0, n.jsx)(E, {
      user: r,
      guildId: o,
      channelId: c,
      id: g
    }), (0, n.jsx)(N, {
      text: null != t ? t : _,
      className: i()(S.editableCommentText, !I && S.placeholder)
    }), (0, n.jsx)(s.P3F, {
      innerRef: h,
      "aria-label": P.intl.string(P.t.ppb9MD),
      onClick: e => {
        e.stopPropagation(), k()
      },
      focusProps: {
        ringTarget: w
      }
    })]
  })
}

function Z(e) {
  let {
    applicationId: t,
    guildId: r,
    channelId: a,
    className: o
  } = e, i = (0, w.Z)(t);
  return i.length > 0 ? (0, n.jsx)(y.Z, {
    label: P.intl.formatToPlainString(P.t.ujhJdH, {
      numFriends: i.length
    }),
    className: o,
    users: i,
    guildId: r,
    channelId: a
  }) : null
}

function R(e) {
  let {
    user: t,
    guildId: r,
    channelId: a,
    game: o,
    widgetType: i,
    disableInteraction: l = false
  } = e, {
    gameName: u = P.intl.string(P.t.GIWFlJ),
    imageSrc: d,
    applicationId: f,
    comment: g,
    tags: p
  } = o, m = {
    variant: "heading-sm/medium",
    color: "text-default"
  }, y = b.default.getCurrentUser(), w = (null == y ? true : y.id) === t.id, E = !l && w && i === c.l.FAVORITE_GAMES;
  return (0, O.kO)(f) ? (0, n.jsx)(v.i, {}) : (0, n.jsxs)("div", {
    className: S.card,
    children: [(0, n.jsx)(j.Z, {
      className: null == d || l ? true : _.hoverActiveEffect,
      imageSrc: d,
      gameName: u,
      applicationId: f,
      userId: t.id,
      disableInteraction: l,
      hideTooltip: true
    }), (0, n.jsxs)("div", {
      className: S.details,
      children: [l ? (0, n.jsx)(s.X6q, k(I({}, m), {
        children: u
      })) : (0, n.jsx)(C, I({
        applicationId: f,
        userId: t.id,
        gameName: u
      }, m)), E ? (0, n.jsx)(T, {
        text: g,
        user: t,
        guildId: r,
        channelId: a,
        widgetType: i,
        applicationId: f
      }) : (0, n.jsx)(D, {
        text: g,
        user: t,
        guildId: r,
        channelId: a
      }), (0, n.jsx)(x.Z, {
        tags: p,
        isCurrentUser: w,
        widgetType: i,
        applicationId: f,
        disableInteraction: l,
        className: S.tags
      }), !l && (0, n.jsx)(Z, {
        className: S.socialProof,
        applicationId: f,
        guildId: r,
        channelId: a
      })]
    }), !l && w && (0, n.jsx)(h.Z, {
      game: o,
      widgetType: i,
      className: S.removeGameButton
    })]
  })
}