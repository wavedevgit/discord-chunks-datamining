/** Chunk was on 44097 **/
/** chunk id: 623132, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./781311.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk624238 = require("./624238.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk780899 = require("./780899.jsx"),
  Chunk733231 = require("./733231.jsx"),
  Chunk817053 = require("./817053.jsx"),
  Chunk248554 = require("./248554.jsx"),
  Chunk879877 = require("./879877.jsx"),
  Chunk533815 = require("./533815.jsx"),
  Chunk919498 = require("./919498.jsx"),
  Chunk394606 = require("./394606.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js"),
  Chunk776385 = require("./776385.js");

function S(e) {
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

function E(e, t) {
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

function T(e) {
  let {
    index: t,
    widgetType: n,
    game: i,
    children: a
  } = e, {
    manageFocusOnReorder: l
  } = (0, h.C)();
  return (0, r.jsx)(b.yW, {
    index: t,
    itemId: i.applicationId,
    listType: n,
    itemType: "GAME_DETAILS_CARD",
    itemPreviewProps: {
      game: i,
      widgetType: n
    },
    "aria-label": P.intl.formatToPlainString(P.t["0dR3gw"], {
      positionNumber: t + 1
    }),
    onReorder: (e, t) => (0, m.Eq)(n, e, t),
    onEnd: () => l(i.applicationId),
    className: w.dropTarget,
    dropBeforeClassName: w.dropIndicatorBefore,
    dropAfterClassName: w.dropIndicatorAfter,
    draggingClassName: w.isDragging,
    children: a
  })
}

function C(e) {
  var {
    applicationId: t,
    userId: n,
    gameName: i
  } = e, a = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["applicationId", "userId", "gameName"]);
  let l = (0, d.Z)({
    location: "UserProfileWidgetGameDetailsCard",
    applicationId: t,
    source: u.m1.UserProfile,
    sourceUserId: n,
    trackEntryPointImpression: true
  });
  return null == l ? (0, r.jsx)(c.Heading, E(S({}, a), {
    children: i
  })) : (0, r.jsx)(c.Heading, E(S({}, a), {
    children: (0, r.jsx)(c.P3F, {
      onClick: l,
      className: w.clickableText,
      children: i
    })
  }))
}

function D(e) {
  let {
    user: t,
    guildId: n,
    channelId: i,
    id: a
  } = e;
  return (0, r.jsx)(c.nn4, {
    id: a,
    children: P.intl.format(P.t.TM0XDY, {
      name: g.ZP.getName(n, i, t)
    })
  })
}

function k(e) {
  let {
    text: t,
    className: n
  } = e;
  return (0, r.jsx)(c.Text, {
    variant: "text-sm/normal",
    color: "text-tertiary",
    className: n,
    children: t
  })
}

function N(e) {
  let {
    text: t,
    user: n,
    guildId: i,
    channelId: a
  } = e, l = (0, s.Dt)();
  return null == t || "" === t.trim() ? null : (0, r.jsxs)("div", {
    role: "group",
    "aria-labelledby": l,
    children: [(0, r.jsx)(c.PEf, {
      size: "xxs",
      color: c.TVs.colors.ICON_TERTIARY,
      className: w.commentIcon
    }), (0, r.jsx)(D, {
      user: n,
      guildId: i,
      channelId: a,
      id: l
    }), (0, r.jsx)(k, {
      text: t
    })]
  })
}

function A(e) {
  let {
    text: t,
    user: n,
    guildId: a,
    channelId: u,
    widgetType: d,
    applicationId: f
  } = e, g = (0, s.Dt)(), b = (0, s.Dt)(), {
    trackUserProfileEditAction: h
  } = (0, p.KZ)(), [y, v] = i.useState("idle"), [O, j] = i.useState(null != t ? t : ""), x = i.useRef(null), _ = i.useRef(null), I = P.intl.string(P.t.xKSfBT), S = null != t && "" !== t.trim(), E = i.useCallback(() => {
    h({
      action: "PRESS_ADD_COMMENTARY",
      widgetEdited: d
    }), v("editing")
  }, [d, h]), T = i.useCallback(() => {
    let e = O.trim(),
      n = e !== (null != t ? t : "").trim();
    (0, m.Bu)(d, f, "" !== e ? e : true), v("completed"), n && h({
      action: "COMMENTARY_EDITED",
      widgetEdited: d,
      gameId: f
    })
  }, [d, f, O, t, h]), C = i.useCallback(e => {
    j(e)
  }, []);
  return i.useEffect(() => {
    "editing" === y && j(null != t ? t : "")
  }, [t, y]), i.useEffect(() => {
    if ("completed" === y) {
      var e;
      null == (e = x.current) || e.focus()
    }
  }, [y]), "editing" === y ? (0, r.jsxs)("div", {
    className: w.textAreaContainer,
    children: [(0, r.jsx)(c.nn4, {
      tag: "label",
      htmlFor: g,
      children: P.intl.string(P.t.JxKXeT)
    }), (0, r.jsx)(c.Kx8, {
      id: g,
      value: O,
      placeholder: I,
      onChange: C,
      onBlur: T,
      rows: 3,
      autoFocus: "editing" === y,
      onKeyDown: e => {
        "Enter" !== e.key || e.shiftKey || (e.preventDefault(), T())
      },
      maxLength: o.rN
    })]
  }) : (0, r.jsxs)("div", {
    ref: _,
    role: "group",
    "aria-labelledby": b,
    onClick: E,
    className: w.editableCommentContainer,
    children: [(0, r.jsx)(c.vdY, {
      size: "xxs",
      color: c.TVs.colors.ICON_TERTIARY,
      className: w.commentIcon
    }), (0, r.jsx)(D, {
      user: n,
      guildId: a,
      channelId: u,
      id: b
    }), (0, r.jsx)(k, {
      text: null != t ? t : I,
      className: l()(w.editableCommentText, !S && w.placeholder)
    }), (0, r.jsx)(c.P3F, {
      innerRef: x,
      "aria-label": P.intl.string(P.t.ppb9MJ),
      onClick: e => {
        e.stopPropagation(), E()
      },
      focusProps: {
        ringTarget: _
      }
    })]
  })
}

function Z(e) {
  let {
    user: t,
    guildId: n,
    channelId: a,
    game: o,
    widgetType: s,
    disableInteraction: u = false,
    index: d,
    onRemoveGame: g,
    coverRef: p,
    className: P
  } = e, {
    applicationId: D,
    comment: k,
    tags: Z
  } = o, {
    coverImageUrl: R,
    gameName: L,
    isLoading: G
  } = (0, _.Z)(D), M = {
    variant: "heading-sm/medium",
    color: "text-default"
  }, B = f.default.getCurrentUser(), F = (null == B ? true : B.id) === t.id, U = 1 === (0, m.Gv)(s), W = !u && F, H = W && (0, m.vI)(s), z = W && !U, {
    registerDragHandleRef: K
  } = (0, h.C)(), q = i.useRef(null);
  if (G) return (0, r.jsx)(v.i, {});
  let V = () => (0, r.jsx)(y.Z, {
      coverRef: p,
      className: null == R || u ? true : I.hoverActiveEffect,
      imageSrc: R,
      gameName: L,
      applicationId: D,
      userId: t.id,
      disableInteraction: u,
      hideTooltip: true
    }),
    Y = () => (0, r.jsxs)("div", {
      className: l()(w.card, P),
      children: [z ? (0, r.jsxs)("div", {
        ref: q,
        className: w.dragHandleContainer,
        children: [V(), (0, r.jsx)(b.e_, {
          buttonRef: K(o.applicationId),
          className: w.dragHandle,
          focusProps: {
            ringTarget: q
          }
        })]
      }) : V(), (0, r.jsxs)("div", {
        className: w.details,
        children: [u ? (0, r.jsx)(c.Heading, E(S({}, M), {
          children: L
        })) : (0, r.jsx)(C, S({
          applicationId: D,
          userId: t.id,
          gameName: L
        }, M)), H ? (0, r.jsx)(A, {
          text: k,
          user: t,
          guildId: n,
          channelId: a,
          widgetType: s,
          applicationId: D
        }) : (0, r.jsx)(N, {
          text: k,
          user: t,
          guildId: n,
          channelId: a
        }), (0, r.jsx)(O.Z, {
          tags: Z,
          isCurrentUser: F,
          widgetType: s,
          applicationId: D,
          disableInteraction: u,
          className: w.tags
        }), !u && (0, r.jsx)(x.Z, {
          className: w.socialProof,
          applicationId: D,
          guildId: n,
          channelId: a
        })]
      }), !u && F && (0, r.jsx)(j.Z, {
        game: o,
        widgetType: s,
        className: w.removeGameButton,
        onRemove: () => null == g ? true : g(o.applicationId)
      })]
    });
  return z ? (0, r.jsx)(T, {
    index: null != d ? d : 0,
    widgetType: s,
    game: o,
    children: Y()
  }) : Y()
}