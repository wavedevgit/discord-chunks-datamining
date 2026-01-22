/** Chunk was on 97492 **/
/** chunk id: 330465, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => G
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk131346 = require("./131346.js"),
  Chunk432022 = require("./432022.js"),
  Chunk837381 = require("./837381.jsx"),
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

function R(e) {
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

function D(e, t) {
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
let M = {
  analyticsSource: {
    page: Chunk652215.liQ.GUILD_CHANNEL,
    section: Chunk652215.JJy.CHANNEL_LIST,
    object: Chunk652215.ZSU.CHANNEL
  }
};

function L(e, t) {
  (0, h.L3)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("68587"), n.e("43600"), n.e("63379"), n.e("56026"), n.e("16301"), n.e("22191"), n.e("25961"), n.e("21968"), n.e("35894"), n.e("50796"), n.e("8458"), n.e("47841"), n.e("14360"), n.e("59735"), n.e("54469"), n.e("91838")]).then(n.bind(n, 544676));
    return n => (0, r.jsx)(e, D(R({}, n), {
      guild: t
    }))
  })
}
let G = Chunk64700.memo(function(e) {
  var t, n, i, h, G;
  let {
    guildNode: k,
    setRef: U,
    onDragStart: V,
    onDragEnd: F,
    route: H,
    guild: B,
    animatable: K,
    selected: W = false,
    unread: z = false,
    mediaState: Y,
    unavailable: q = false,
    badge: X = 0,
    isMentionLowImportance: J,
    contextMenu: Q = L,
    draggable: Z = false,
    sorting: $ = false,
    preloadOnClick: ee = true,
    guildJoinRequestStatus: et,
    height: en,
    "aria-setsize": er,
    "aria-posinset": el
  } = e, {
    id: ei,
    parentId: ea
  } = k, es = null != (t = e.upperBadge) ? t : q ? (0, N.em)() : null != Y ? (0, N.oi)(Y) : true, eo = null != (n = e.lowerBadge) ? n : true;
  null == eo && X > 0 ? eo = null != (h = (0, N.wN)(X, J ? f.LU0.colors.BACKGROUND_MOD_STRONG.css : f.LU0.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css)) ? h : true : null == eo && null != et && (eo = null != (G = (0, N.eW)({
    guildJoinRequestStatus: et
  })) ? G : true);
  let ec = null != (i = e.lowerBadgeSize) ? i : {
      width: (0, f.o6S)(X)
    },
    [{
      dragging: eu
    }, ed] = (0, s.i)({
      type: v.PJ.GUILD,
      item: () => (requestAnimationFrame(() => {
        null == V || V()
      }), {
        type: k.type,
        nodeId: k.id
      }),
      end() {
        null == F || F(), (0, b.um)(j.Ay.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }),
    ef = (0, c.Vd)(null != ei ? ei : T.dJq, null != ea ? 2 : 1),
    [ep, eh] = l.useState(false),
    eb = !$ && ep,
    [eg, em] = l.useState(false),
    [eA, ey] = l.useState(false),
    [eO] = l.useState(() => new d.J_(70, () => ey(true)));
  l.useEffect(() => () => eO.cancel(), [eO]);
  let ej = l.useCallback(() => {
      null != H ? (0, m.pX)(H, {
        state: M
      }) : (0, A.u)(ei, {
        state: M
      })
    }, [ei, H]),
    ev = l.useCallback(() => {
      if (null != H || null == B || q || !ee) return;
      let e = (0, g.W)(B.id);
      null != e && p.A.preload(B.id, e)
    }, [H, B, q, ee]),
    ex = (0, u.bG)([O.Ay], () => O.Ay.isCurrentUserGuest(ei)),
    eE = l.useCallback(e => {
      null == B || ex || Q(e, B)
    }, [B, Q, ex]),
    e_ = l.useCallback(e => {
      if ("ArrowLeft" === e.key && null != ea) {
        var t;
        null == (t = document.querySelector("[aria-owns=folder-items-".concat(ea, "]"))) || t.focus()
      }
    }, [ea]),
    eC = l.useCallback(e => {
      e ? eO.delay() : (eO.cancel(), ey(false))
    }, [eO]),
    eS = l.useCallback(e => {
      null == U || U(ei, e)
    }, [ei, U]),
    eI = (0, f.rdh)(f.LU0.modules.guildbar.AVATAR_SIZE);
  if (null == B) return null;
  let eN = eA || eg ? (0, r.jsx)(E.A, {
      guild: B,
      show: eA,
      active: W,
      onAnimationStart: function() {
        em(eA)
      },
      onAnimationRest: function() {
        eA || em(false)
      }
    }) : (0, r.jsx)(f.Qk9, {
      selected: W,
      children: (0, r.jsx)("div", {
        ref: Z ? e => {
          ed(e)
        } : true,
        "data-dnd-name": B.name,
        "data-drop-hovering": eA,
        children: (0, r.jsx)(f.jlP, D(R({
          ariaLabel: P.intl.formatToPlainString(P.t["/uzRss"], {
            guildName: B.name,
            mentions: X
          }),
          name: B.name,
          onClick: ej,
          onMouseEnter: function() {
            $ || eh(true)
          },
          onMouseLeave: function() {
            $ || eh(false)
          },
          onMouseDown: ev,
          onContextMenu: eE,
          onKeyDown: e_,
          icon: (0, y.Iv)(B, 2 * eI, eb && K, true),
          selected: W || eb
        }, ef), {
          "aria-setsize": er,
          "aria-posinset": el,
          "aria-selected": W
        }))
      })
    }),
    eT = eu ? (0, r.jsx)(_.g4, {
      children: (0, r.jsx)(S.A, {})
    }) : (0, r.jsx)(o.animated.div, {
      style: {
        scale: null == en ? 1 : en
      },
      className: a()(w.rN, {
        [w.p9]: $,
        [w.oR]: eA,
        [w.wH]: eA || W
      }),
      "data-drop-hovering": eA,
      children: (0, r.jsx)(f.Qk9, {
        selected: W,
        upperBadge: es,
        lowerBadge: eo,
        lowerBadgeSize: ec,
        children: eN
      })
    });
  return (0, r.jsxs)(I.c, {
    ref: eS,
    children: [(0, r.jsx)(x.A, {
      hovered: !eu && eb,
      selected: !eu && W,
      unread: !eu && z,
      className: w.Io
    }), (0, r.jsx)(C.A, {
      guild: B,
      disabled: $,
      isDragging: eu,
      children: eT
    }), Z ? (0, r.jsx)(_.Ay, {
      name: B.name,
      targetNode: k,
      onDragOverChanged: eC
    }) : null]
  })
})