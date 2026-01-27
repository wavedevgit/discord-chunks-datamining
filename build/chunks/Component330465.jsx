/** Chunk was on 41727 **/
/** chunk id: 330465, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => k
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk131346 = require("./131346.js"),
  Chunk108531 = require("./108531.js"),
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
  (0, f.L3)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("43600"), n.e("68587"), n.e("63379"), n.e("56026"), n.e("16301"), n.e("22191"), n.e("25961"), n.e("21968"), n.e("35894"), n.e("50796"), n.e("11810"), n.e("8458"), n.e("39048"), n.e("36290"), n.e("59735"), n.e("54469"), n.e("70084")]).then(n.bind(n, 544676));
    return n => (0, r.jsx)(e, D(R({}, n), {
      guild: t
    }))
  })
}
let k = Chunk64700.memo(function(e) {
  var t, n, i, f, k;
  let {
    guildNode: G,
    setRef: U,
    onDragStart: B,
    onDragEnd: V,
    route: F,
    guild: H,
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
    parentId: es
  } = G, ea = null != (t = e.upperBadge) ? t : q ? (0, N.em)() : null != Y ? (0, N.oi)(Y) : true, eo = null != (n = e.lowerBadge) ? n : true;
  null == eo && X > 0 ? eo = null != (f = (0, N.wN)(X, J ? p.LU0.colors.BACKGROUND_MOD_STRONG.css : p.LU0.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css)) ? f : true : null == eo && null != et && (eo = null != (k = (0, N.eW)({
    guildJoinRequestStatus: et
  })) ? k : true);
  let ec = null != (i = e.lowerBadgeSize) ? i : {
      width: (0, p.o6S)(X)
    },
    [{
      dragging: eu
    }, ed] = (0, a.i)({
      type: j.PJ.GUILD,
      item: () => (requestAnimationFrame(() => {
        null == B || B()
      }), {
        type: G.type,
        nodeId: G.id
      }),
      end() {
        null == V || V(), (0, g.um)(O.Ay.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }),
    ep = (0, c.Vd)(null != ei ? ei : T.dJq, null != es ? 2 : 1),
    [eh, ef] = l.useState(false),
    eg = !$ && eh,
    [em, eb] = l.useState(false),
    [eA, ey] = l.useState(false),
    [e_] = l.useState(() => new d.J_(70, () => ey(true)));
  l.useEffect(() => () => e_.cancel(), [e_]);
  let eO = l.useCallback(() => {
      null != F ? (0, b.pX)(F, {
        state: M
      }) : (0, A.u)(ei, {
        state: M
      })
    }, [ei, F]),
    ej = l.useCallback(() => {
      if (null != F || null == H || q || !ee) return;
      let e = (0, m.W)(H.id);
      null != e && h.A.preload(H.id, e)
    }, [F, H, q, ee]),
    ev = (0, u.bG)([_.Ay], () => _.Ay.isCurrentUserGuest(ei)),
    ex = l.useCallback(e => {
      null == H || ev || Q(e, H)
    }, [H, Q, ev]),
    eE = l.useCallback(e => {
      if ("ArrowLeft" === e.key && null != es) {
        var t;
        null == (t = document.querySelector("[aria-owns=folder-items-".concat(es, "]"))) || t.focus()
      }
    }, [es]),
    eC = l.useCallback(e => {
      e ? e_.delay() : (e_.cancel(), ey(false))
    }, [e_]),
    eS = l.useCallback(e => {
      null == U || U(ei, e)
    }, [ei, U]),
    eI = (0, p.rdh)(p.LU0.modules.guildbar.AVATAR_SIZE);
  if (null == H) return null;
  let eN = eA || em ? (0, r.jsx)(x.A, {
      guild: H,
      show: eA,
      active: W,
      onAnimationStart: function() {
        eb(eA)
      },
      onAnimationRest: function() {
        eA || eb(false)
      }
    }) : (0, r.jsx)(p.Qk9, {
      selected: W,
      children: (0, r.jsx)("div", {
        ref: Z ? e => {
          ed(e)
        } : true,
        "data-dnd-name": H.name,
        "data-drop-hovering": eA,
        children: (0, r.jsx)(p.jlP, D(R({
          ariaLabel: P.intl.formatToPlainString(P.t["/uzRss"], {
            guildName: H.name,
            mentions: X
          }),
          name: H.name,
          onClick: eO,
          onMouseEnter: function() {
            $ || ef(true)
          },
          onMouseLeave: function() {
            $ || ef(false)
          },
          onMouseDown: ej,
          onContextMenu: ex,
          onKeyDown: eE,
          icon: (0, y.Iv)(H, 2 * eI, eg && K, true),
          selected: W || eg
        }, ep), {
          "aria-setsize": er,
          "aria-posinset": el,
          "aria-selected": W
        }))
      })
    }),
    eT = eu ? (0, r.jsx)(E.g4, {
      children: (0, r.jsx)(S.A, {})
    }) : (0, r.jsx)(o.animated.div, {
      style: {
        scale: null == en ? 1 : en
      },
      className: s()(w.rN, {
        [w.p9]: $,
        [w.oR]: eA,
        [w.wH]: eA || W
      }),
      "data-drop-hovering": eA,
      children: (0, r.jsx)(p.Qk9, {
        selected: W,
        upperBadge: ea,
        lowerBadge: eo,
        lowerBadgeSize: ec,
        children: eN
      })
    });
  return (0, r.jsxs)(I.c, {
    ref: eS,
    children: [(0, r.jsx)(v.A, {
      hovered: !eu && eg,
      selected: !eu && W,
      unread: !eu && z,
      className: w.Io
    }), (0, r.jsx)(C.A, {
      guild: H,
      disabled: $,
      isDragging: eu,
      children: eT
    }), Z ? (0, r.jsx)(E.Ay, {
      name: H.name,
      targetNode: G,
      onDragOverChanged: eC
    }) : null]
  })
})