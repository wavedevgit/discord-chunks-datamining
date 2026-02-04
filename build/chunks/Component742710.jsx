/** Chunk was on 59569 **/
/** chunk id: 742710, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => D
}), require("./733351.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk926675 = require("./926675.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk409626 = require("./409626.js"),
  Chunk692969 = require("./692969.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk735321 = require("./735321.js"),
  Chunk451395 = require("./451395.jsx"),
  Chunk823016 = require("./823016.jsx"),
  Chunk788593 = require("./788593.jsx"),
  Chunk492280 = require("./492280.jsx"),
  Chunk946599 = require("./946599.jsx"),
  Chunk858808 = require("./858808.jsx"),
  Chunk685049 = require("./685049.jsx"),
  Chunk973397 = require("./973397.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk461349 = require("./461349.js"),
  Chunk8208 = require("./8208.js");

function P(e) {
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

function S(e) {
  let {
    index: t,
    widgetType: n,
    game: l,
    children: i
  } = e, {
    manageFocusOnReorder: a
  } = (0, y.r)();
  return (0, r.jsx)(b.mG, {
    index: t,
    itemId: l.applicationId,
    listType: n,
    itemType: "GAME_DETAILS_CARD",
    itemPreviewProps: {
      game: l,
      widgetType: n
    },
    "aria-label": I.intl.formatToPlainString(I.t["0dR3gw"], {
      positionNumber: t + 1
    }),
    onReorder: (e, t) => (0, m.Un)(n, e, t),
    onEnd: () => a(l.applicationId),
    className: A.vF,
    dropBeforeClassName: A.A,
    dropAfterClassName: A.Ze,
    draggingClassName: A.Id,
    children: i
  })
}

function T(e) {
  let {
    applicationId: t,
    userId: n,
    gameName: l
  } = e, i = function(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(e, ["applicationId", "userId", "gameName"]), a = (0, d.A)({
    location: "UserProfileWidgetGameDetailsCard",
    applicationId: t,
    source: u.Ob.UserProfile,
    sourceUserId: n,
    trackEntryPointImpression: true
  });
  return null == a ? (0, r.jsx)(s.Heading, E(P({}, i), {
    children: l
  })) : (0, r.jsx)(s.Heading, E(P({}, i), {
    children: (0, r.jsx)(s.DUT, {
      onClick: a,
      className: A.sd,
      children: l
    })
  }))
}

function N(e) {
  let {
    user: t,
    guildId: n,
    channelId: l,
    id: i
  } = e;
  return (0, r.jsx)(s.AC4, {
    id: i,
    children: I.intl.format(I.t.TM0XDY, {
      name: p.Ay.getName(n, l, t)
    })
  })
}

function C(e) {
  let {
    text: t,
    className: n
  } = e;
  return (0, r.jsx)(s.Text, {
    variant: "text-sm/normal",
    color: "text-muted",
    className: n,
    children: t
  })
}

function R(e) {
  let {
    text: t,
    user: n,
    guildId: l,
    channelId: i
  } = e, a = (0, c.GV)();
  return null == t || "" === t.trim() ? null : (0, r.jsxs)("div", {
    role: "group",
    "aria-labelledby": a,
    children: [(0, r.jsx)(s.cyi, {
      size: "xxs",
      color: s.LU0.colors.ICON_MUTED,
      className: A.Ls
    }), (0, r.jsx)(N, {
      user: n,
      guildId: l,
      channelId: i,
      id: a
    }), (0, r.jsx)(C, {
      text: t
    })]
  })
}

function k(e) {
  let {
    text: t,
    user: n,
    guildId: i,
    channelId: u,
    widgetType: d,
    applicationId: f
  } = e, p = (0, c.GV)(), b = (0, c.GV)(), {
    trackUserProfileEditAction: y
  } = (0, g.NJ)(), [O, j] = l.useState("idle"), [h, x] = l.useState(null != t ? t : ""), v = l.useRef(null), _ = l.useRef(null), w = I.intl.string(I.t.xKSfBT), P = null != t && "" !== t.trim(), E = l.useCallback(() => {
    y({
      action: "PRESS_ADD_COMMENTARY",
      widgetEdited: d
    }), j("editing")
  }, [d, y]), S = l.useCallback(() => {
    let e = h.trim(),
      n = e !== (null != t ? t : "").trim();
    (0, m.oc)(d, f, "" !== e ? e : true), j("completed"), n && y({
      action: "COMMENTARY_EDITED",
      widgetEdited: d,
      gameId: f
    })
  }, [d, f, h, t, y]), T = l.useCallback(e => {
    x(e)
  }, []);
  return l.useEffect(() => {
    "editing" === O && x(null != t ? t : "")
  }, [t, O]), l.useEffect(() => {
    if ("completed" === O) {
      var e;
      null == (e = v.current) || e.focus()
    }
  }, [O]), "editing" === O ? (0, r.jsxs)("div", {
    className: A.kS,
    children: [(0, r.jsx)(s.AC4, {
      tag: "label",
      htmlFor: p,
      children: I.intl.string(I.t.JxKXeT)
    }), (0, r.jsx)(s.fs1, {
      id: p,
      value: h,
      placeholder: w,
      onChange: T,
      onBlur: S,
      rows: 3,
      autoFocus: "editing" === O,
      onKeyDown: e => {
        "Enter" !== e.key || e.shiftKey || (e.preventDefault(), S())
      },
      maxLength: o.Qi
    })]
  }) : (0, r.jsxs)("div", {
    ref: _,
    role: "group",
    "aria-labelledby": b,
    onClick: E,
    className: A.Vg,
    children: [(0, r.jsx)(s.R2l, {
      size: "xxs",
      color: s.LU0.colors.ICON_MUTED,
      className: A.Ls
    }), (0, r.jsx)(N, {
      user: n,
      guildId: i,
      channelId: u,
      id: b
    }), (0, r.jsx)(C, {
      text: null != t ? t : w,
      className: a()(A.qC, !P && A.qf)
    }), (0, r.jsx)(s.DUT, {
      innerRef: v,
      "aria-label": I.intl.string(I.t.ppb9MJ),
      onClick: e => {
        e.stopPropagation(), E()
      },
      focusProps: {
        ringTarget: _
      }
    })]
  })
}

function D(e) {
  let {
    user: t,
    guildId: n,
    channelId: l,
    game: i,
    widgetType: o,
    disableInteraction: c = false,
    index: u,
    onRemoveGame: d,
    coverRef: p,
    className: g
  } = e, {
    applicationId: I,
    comment: N,
    tags: C
  } = i, {
    coverImageUrl: D,
    gameName: L,
    isLoading: G
  } = (0, _.A)(I), M = {
    variant: "heading-sm/medium",
    color: "text-default"
  }, U = f.default.getCurrentUser(), F = (null == U ? true : U.id) === t.id, W = 1 === (0, m.cv)(o), H = !c && F, B = H && (0, m.y9)(o), X = H && !W, {
    registerDragHandleRef: K
  } = (0, y.r)();
  if (G) return (0, r.jsx)(j.E, {});
  let z = () => (0, r.jsx)(O.A, {
      coverRef: p,
      className: null == D || c ? true : w.iL,
      imageSrc: D,
      gameName: L,
      applicationId: I,
      userId: t.id,
      disableInteraction: c,
      hideTooltip: true
    }),
    V = () => (0, r.jsxs)("div", {
      className: a()(A.Nr, g),
      children: [X ? (0, r.jsxs)("div", {
        className: A.An,
        children: [z(), (0, r.jsx)(b.jV, {
          buttonRef: K(i.applicationId),
          className: A.BU
        })]
      }) : z(), (0, r.jsxs)("div", {
        className: A.zH,
        children: [c ? (0, r.jsx)(s.Heading, E(P({}, M), {
          children: L
        })) : (0, r.jsx)(T, P({
          applicationId: I,
          userId: t.id,
          gameName: L
        }, M)), B ? (0, r.jsx)(k, {
          text: N,
          user: t,
          guildId: n,
          channelId: l,
          widgetType: o,
          applicationId: I
        }) : (0, r.jsx)(R, {
          text: N,
          user: t,
          guildId: n,
          channelId: l
        }), (0, r.jsx)(h.A, {
          tags: C,
          isCurrentUser: F,
          widgetType: o,
          applicationId: I,
          disableInteraction: c,
          className: A._A
        }), !c && (0, r.jsx)(v.o, {
          className: A.Ez,
          applicationId: I,
          guildId: n,
          channelId: l
        })]
      }), !c && F && (0, r.jsx)(x.A, {
        game: i,
        widgetType: o,
        className: A.vS,
        onRemove: () => null == d ? true : d(i.applicationId)
      })]
    });
  return X ? (0, r.jsx)(S, {
    index: null != u ? u : 0,
    widgetType: o,
    game: i,
    children: V()
  }) : V()
}