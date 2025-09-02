/** Chunk was on 8188 **/
/** chunk id: 623132, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./781311.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  var {
    applicationId: t,
    userId: n,
    gameName: i
  } = e, l = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["applicationId", "userId", "gameName"]);
  let a = (0, f.Z)({
    location: "UserProfileWidgetGameDetailsCard",
    applicationId: t,
    source: d.m1.UserProfile,
    sourceUserId: n,
    trackEntryPointImpression: true
  });
  return null == a ? (0, r.jsx)(s.X6q, S(I({}, l), {
    children: i
  })) : (0, r.jsx)(s.X6q, S(I({}, l), {
    children: (0, r.jsx)(s.P3F, {
      onClick: a,
      className: w.clickableText,
      children: i
    })
  }))
}

function T(e) {
  let {
    user: t,
    guildId: n,
    channelId: i,
    id: l
  } = e;
  return (0, r.jsx)(s.nn4, {
    id: l,
    children: _.intl.format(_.t.TM0XDQ, {
      name: b.ZP.getName(n, i, t)
    })
  })
}

function N(e) {
  let {
    text: t,
    className: n
  } = e;
  return (0, r.jsx)(s.Text, {
    variant: "text-sm/normal",
    color: "text-tertiary",
    className: n,
    children: t
  })
}

function C(e) {
  let {
    text: t,
    user: n,
    guildId: i,
    channelId: l
  } = e, a = (0, u.Dt)();
  return null == t || "" === t.trim() ? null : (0, r.jsxs)("div", {
    role: "group",
    "aria-labelledby": a,
    children: [(0, r.jsx)(s.PEf, {
      size: "xxs",
      color: s.TVs.colors.ICON_TERTIARY,
      className: w.commentIcon
    }), (0, r.jsx)(T, {
      user: n,
      guildId: i,
      channelId: l,
      id: a
    }), (0, r.jsx)(N, {
      text: t
    })]
  })
}

function A(e) {
  let {
    text: t,
    user: n,
    guildId: l,
    channelId: c,
    widgetType: d,
    applicationId: f
  } = e, g = (0, u.Dt)(), b = (0, u.Dt)(), {
    trackUserProfileAction: O
  } = (0, p.KZ)(), [j, y] = i.useState("idle"), [x, v] = i.useState(null != t ? t : ""), h = i.useRef(null), P = i.useRef(null), I = _.intl.string(_.t.xKSfBQ), S = null != t && "" !== t.trim(), E = i.useCallback(() => {
    y("editing")
  }, []), C = i.useCallback(() => {
    let e = x.trim();
    (0, m.Bu)(d, f, "" !== e ? e : true), y("completed"), O({
      action: "EDIT_ACTION"
    })
  }, [d, f, x, O]), A = i.useCallback(e => {
    v(e)
  }, []);
  return i.useEffect(() => {
    "editing" === j && v(null != t ? t : "")
  }, [t, j]), i.useEffect(() => {
    if ("completed" === j) {
      var e;
      null == (e = h.current) || e.focus()
    }
  }, [j]), "editing" === j ? (0, r.jsxs)("div", {
    className: w.textAreaContainer,
    children: [(0, r.jsx)(s.nn4, {
      tag: "label",
      htmlFor: g,
      children: _.intl.string(_.t.JxKXeX)
    }), (0, r.jsx)(s.Kx8, {
      id: g,
      value: x,
      placeholder: I,
      onChange: A,
      onBlur: C,
      rows: 3,
      autoFocus: "editing" === j,
      onKeyDown: e => {
        "Enter" !== e.key || e.shiftKey || (e.preventDefault(), C())
      },
      maxLength: o.r
    })]
  }) : (0, r.jsxs)("div", {
    ref: P,
    role: "group",
    "aria-labelledby": b,
    onClick: E,
    className: w.editableCommentContainer,
    children: [(0, r.jsx)(s.vdY, {
      size: "xxs",
      color: s.TVs.colors.ICON_TERTIARY,
      className: w.commentIcon
    }), (0, r.jsx)(T, {
      user: n,
      guildId: l,
      channelId: c,
      id: b
    }), (0, r.jsx)(N, {
      text: null != t ? t : I,
      className: a()(w.editableCommentText, !S && w.placeholder)
    }), (0, r.jsx)(s.P3F, {
      innerRef: h,
      "aria-label": _.intl.string(_.t.ppb9MD),
      onClick: e => {
        e.stopPropagation(), E()
      },
      focusProps: {
        ringTarget: P
      }
    })]
  })
}

function k(e) {
  let {
    applicationId: t,
    guildId: n,
    channelId: i,
    className: l
  } = e, a = (0, h.Z)(t);
  return a.length > 0 ? (0, r.jsx)(O.Z, {
    label: _.intl.formatToPlainString(_.t.ujhJdH, {
      numFriends: a.length
    }),
    className: l,
    users: a,
    guildId: n,
    channelId: i
  }) : null
}

function Z(e) {
  let {
    user: t,
    guildId: n,
    channelId: i,
    game: l,
    widgetType: a,
    loading: o = false,
    disableInteraction: u = false
  } = e, {
    gameName: d = _.intl.string(_.t.GIWFlJ),
    imageSrc: f,
    applicationId: b,
    comment: p,
    tags: m
  } = l, O = {
    variant: "heading-sm/medium",
    color: "text-default"
  }, h = g.default.getCurrentUser(), T = (null == h ? true : h.id) === t.id, N = !u && T && a === c.l.FAVORITE_GAMES;
  return o ? (0, r.jsx)(y.i, {}) : (0, r.jsxs)("div", {
    className: w.card,
    children: [(0, r.jsx)(j.Z, {
      className: null == f || u ? true : P.hoverActiveEffect,
      imageSrc: f,
      gameName: d,
      applicationId: b,
      userId: t.id,
      disableInteraction: u,
      hideTooltip: true
    }), (0, r.jsxs)("div", {
      className: w.details,
      children: [u ? (0, r.jsx)(s.X6q, S(I({}, O), {
        children: d
      })) : (0, r.jsx)(E, I({
        applicationId: b,
        userId: t.id,
        gameName: d
      }, O)), N ? (0, r.jsx)(A, {
        text: p,
        user: t,
        guildId: n,
        channelId: i,
        widgetType: a,
        applicationId: b
      }) : (0, r.jsx)(C, {
        text: p,
        user: t,
        guildId: n,
        channelId: i
      }), (0, r.jsx)(x.Z, {
        tags: m,
        isCurrentUser: T,
        widgetType: a,
        applicationId: b,
        disableInteraction: u,
        className: w.tags
      }), !u && (0, r.jsx)(k, {
        className: w.socialProof,
        applicationId: b,
        guildId: n,
        channelId: i
      })]
    }), !u && T && (0, r.jsx)(v.Z, {
      game: l,
      widgetType: a,
      className: w.removeGameButton
    })]
  })
}