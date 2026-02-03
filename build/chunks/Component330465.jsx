/** Chunk was on 44669 **/
/** chunk id: 330465, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => U
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk131346 = require("./131346.js"),
  Chunk92674 = require("./92674.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk607399 = require("./607399.js"),
  Chunk417597 = require("./417597.js"),
  Chunk451988 = require("./451988.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk442433 = require("./442433.js"),
  Chunk817281 = require("./817281.js"),
  Chunk658128 = require("./658128.js"),
  Chunk976860 = require("./976860.js"),
  Chunk345942 = require("./345942.js"),
  Chunk260509 = require("./260509.js"),
  Chunk696451 = require("./696451.js"),
  Chunk711014 = require("./711014.js"),
  Chunk676279 = require("./676279.js"),
  Chunk263715 = require("./263715.js"),
  Chunk941971 = require("./941971.jsx"),
  Chunk264409 = require("./264409.jsx"),
  Chunk531053 = require("./531053.jsx"),
  Chunk647668 = require("./647668.jsx"),
  Chunk107385 = require("./107385.jsx"),
  Chunk900848 = require("./900848.jsx"),
  Chunk65611 = require("./65611.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk837021 = require("./837021.js");

function L(e) {
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

function M(e, t) {
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
let G = {
  analyticsSource: {
    page: Chunk652215.liQ.GUILD_CHANNEL,
    section: Chunk652215.JJy.CHANNEL_LIST,
    object: Chunk652215.ZSU.CHANNEL
  }
};

function k(e, t) {
  (0, f.L3)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("68587"), n.e("43600"), n.e("63379"), n.e("56026"), n.e("16301"), n.e("22191"), n.e("25961"), n.e("21968"), n.e("35894"), n.e("50796"), n.e("11810"), n.e("8458"), n.e("39048"), n.e("36290"), n.e("59735"), n.e("54469"), n.e("70084")]).then(n.bind(n, 544676));
    return n => (0, r.jsx)(e, M(L({}, n), {
      guild: t
    }))
  })
}
let U = Chunk64700.memo(function(e) {
  var t, n, i, f, U;
  let {
    guildNode: V,
    setRef: B,
    onDragStart: H,
    onDragEnd: F,
    route: Y,
    guild: K,
    animatable: W,
    selected: z = false,
    unread: X = false,
    mediaState: q,
    unavailable: J = false,
    badge: Q = 0,
    isMentionLowImportance: Z,
    contextMenu: $ = k,
    draggable: ee = false,
    sorting: et = false,
    preloadOnClick: en = true,
    guildJoinRequestStatus: er,
    height: el,
    "aria-setsize": ei,
    "aria-posinset": es
  } = e, {
    id: ea,
    parentId: eo
  } = V, ec = null != (t = e.upperBadge) ? t : J ? (0, P.em)() : null != q ? (0, P.oi)(q) : true, eu = null != (n = e.lowerBadge) ? n : true;
  null == eu && Q > 0 ? eu = null != (f = (0, P.wN)(Q, Z ? h.LU0.colors.BACKGROUND_MOD_STRONG.css : h.LU0.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css)) ? f : true : null == eu && null != er && (eu = null != (U = (0, P.eW)({
    guildJoinRequestStatus: er
  })) ? U : true);
  let ed = null != (i = e.lowerBadgeSize) ? i : {
      width: (0, h.o6S)(Q)
    },
    [{
      dragging: ep
    }, eh] = (0, a.i)({
      type: v.PJ.GUILD,
      item: () => (requestAnimationFrame(() => {
        null == H || H()
      }), {
        type: V.type,
        nodeId: V.id
      }),
      end() {
        null == F || F(), (0, m.um)(x.Ay.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }),
    eg = (0, c.Vd)(null != ea ? ea : w.dJq, null != eo ? 2 : 1),
    [ef, em] = l.useState(false),
    eb = !et && ef,
    [eA, ey] = l.useState(false),
    [eO, ej] = l.useState(false),
    [ex] = l.useState(() => new p.J_(70, () => ej(true))),
    e_ = (0, _.nr)() && !u.Fr;
  l.useEffect(() => () => ex.cancel(), [ex]);
  let ev = l.useCallback(() => {
      null != Y ? (0, A.pX)(Y, {
        state: G
      }) : (0, y.u)(ea, {
        state: G
      })
    }, [ea, Y]),
    eE = l.useCallback(() => {
      if (null != Y || null == K || J || !en) return;
      let e = (0, b.W)(K.id);
      null != e && g.A.preload(K.id, e)
    }, [Y, K, J, en]),
    eC = (0, d.bG)([j.Ay], () => j.Ay.isCurrentUserGuest(ea)),
    eS = l.useCallback(e => {
      null == K || eC || $(e, K)
    }, [K, $, eC]),
    eI = l.useCallback(e => {
      if ("ArrowLeft" === e.key && null != eo) {
        var t;
        null == (t = document.querySelector("[aria-owns=folder-items-".concat(eo, "]"))) || t.focus()
      }
    }, [eo]),
    eN = l.useCallback(e => {
      e ? ex.delay() : (ex.cancel(), ej(false))
    }, [ex]);

  function eT() {
    et || em(true)
  }

  function eP() {
    et || em(false)
  }
  let ew = l.useCallback(e => {
      null == B || B(ea, e)
    }, [ea, B]),
    eR = (0, h.rdh)(h.LU0.modules.guildbar.AVATAR_SIZE);
  if (null == K) return null;
  let eD = (0, r.jsx)(C.A, {
      guild: K,
      show: eO,
      active: z,
      onAnimationStart: function() {
        ey(eO)
      },
      onAnimationRest: function() {
        eO || ey(false)
      }
    }),
    eL = e_ ? (0, r.jsx)(h.jlP, M(L({
      ariaLabel: R.intl.formatToPlainString(R.t["/uzRss"], {
        guildName: K.name,
        mentions: Q
      }),
      name: K.name,
      onClick: ev,
      onMouseEnter: eT,
      onMouseLeave: eP,
      onMouseDown: eE,
      onContextMenu: eS,
      onKeyDown: eI,
      icon: (0, O.Iv)(K, 2 * eR, eb && W, true),
      selected: z || eb
    }, eg), {
      "aria-setsize": ei,
      "aria-posinset": es,
      "aria-selected": z
    })) : (0, r.jsx)(h.Qk9, {
      selected: z,
      children: (0, r.jsx)("div", {
        ref: ee ? e => {
          eh(e)
        } : true,
        "data-dnd-name": K.name,
        "data-drop-hovering": eO,
        children: (0, r.jsx)(h.jlP, M(L({
          ariaLabel: R.intl.formatToPlainString(R.t["/uzRss"], {
            guildName: K.name,
            mentions: Q
          }),
          name: K.name,
          onClick: ev,
          onMouseEnter: eT,
          onMouseLeave: eP,
          onMouseDown: eE,
          onContextMenu: eS,
          onKeyDown: eI,
          icon: (0, O.Iv)(K, 2 * eR, eb && W, true),
          selected: z || eb
        }, eg), {
          "aria-setsize": ei,
          "aria-posinset": es,
          "aria-selected": z
        }))
      })
    }),
    eM = eO || eA ? eD : eL,
    eG = (0, r.jsx)(S.g4, {
      children: (0, r.jsx)(N.A, {})
    }),
    ek = e_ ? (0, r.jsx)(o.animated.div, {
      ref: ee ? e => {
        eh(e)
      } : true,
      "data-dnd-name": K.name,
      style: {
        scale: null == el ? 1 : el
      },
      "data-drop-hovering": eO,
      className: s()(D.rN, {
        [D.p9]: et,
        [D.oR]: eO,
        [D.wH]: eO || z
      }),
      children: (0, r.jsx)(h.Qk9, {
        selected: true,
        upperBadge: ec,
        lowerBadge: eu,
        lowerBadgeSize: ed,
        children: eM
      })
    }) : (0, r.jsx)(o.animated.div, {
      style: {
        scale: null == el ? 1 : el
      },
      className: s()(D.rN, {
        [D.p9]: et,
        [D.oR]: eO,
        [D.wH]: eO || z
      }),
      "data-drop-hovering": eO,
      children: (0, r.jsx)(h.Qk9, {
        selected: z,
        upperBadge: ec,
        lowerBadge: eu,
        lowerBadgeSize: ed,
        children: eM
      })
    });
  return (0, r.jsxs)(T.c, {
    ref: ew,
    children: [(0, r.jsx)(E.A, {
      hovered: !ep && eb,
      selected: !ep && z,
      unread: !ep && X,
      className: D.Io
    }), (0, r.jsx)(I.A, {
      guild: K,
      disabled: et,
      isDragging: ep,
      children: ep ? eG : ek
    }), ee ? (0, r.jsx)(S.Ay, {
      name: K.name,
      targetNode: V,
      onDragOverChanged: eN
    }) : null]
  })
})