/** Chunk was on 11788 **/
/** chunk id: 325257, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk100568 = require("./100568.js"),
  Chunk509442 = require("./509442.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk399606 = require("./399606.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk239091 = require("./239091.js"),
  Chunk153867 = require("./153867.js"),
  Chunk377171 = require("./377171.js"),
  Chunk35225 = require("./35225.js"),
  Chunk703656 = require("./703656.js"),
  Chunk769654 = require("./769654.js"),
  Chunk601964 = require("./601964.js"),
  Chunk271383 = require("./271383.js"),
  Chunk771845 = require("./771845.js"),
  Chunk727258 = require("./727258.js"),
  Chunk276952 = require("./276952.jsx"),
  Chunk249792 = require("./249792.jsx"),
  Chunk40153 = require("./40153.jsx"),
  Chunk593618 = require("./593618.jsx"),
  Chunk252686 = require("./252686.jsx"),
  Chunk682662 = require("./682662.jsx"),
  Chunk674552 = require("./674552.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk534175 = require("./534175.js");

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
let L = {
  analyticsSource: {
    page: Chunk981631.ZY5.GUILD_CHANNEL,
    section: Chunk981631.jXE.CHANNEL_LIST,
    object: Chunk981631.qAy.CHANNEL
  }
};

function M(e, t) {
  (0, f.jW)(e, async () => {
    let {
      default: e
    } = await Promise.all([n.e("70018"), n.e("36599"), n.e("7654"), n.e("76692"), n.e("8271"), n.e("15851"), n.e("51453"), n.e("845"), n.e("86736"), n.e("6850"), n.e("58227"), n.e("44686"), n.e("384"), n.e("22516"), n.e("87154"), n.e("33213"), n.e("73709")]).then(n.bind(n, 545135));
    return n => (0, r.jsx)(e, D(R({}, n), {
      guild: t
    }))
  })
}
let k = Chunk647438.memo(function(e) {
  var t, n, l, f, k;
  let {
    guildNode: G,
    setRef: U,
    onDragStart: B,
    onDragEnd: F,
    route: V,
    guild: H,
    animatable: z,
    selected: W = false,
    unread: K = false,
    mediaState: Y,
    unavailable: q = false,
    badge: X = 0,
    isMentionLowImportance: Q,
    contextMenu: J = M,
    draggable: $ = false,
    sorting: ee = false,
    preloadOnClick: et = true,
    guildJoinRequestStatus: en,
    height: er,
    "aria-setsize": ei,
    "aria-posinset": el
  } = e, {
    id: eo,
    parentId: ea
  } = G, es = null != (t = e.upperBadge) ? t : q ? (0, Z.Ny)() : null != Y ? (0, Z.Or)(Y) : true, ec = null != (n = e.lowerBadge) ? n : true;
  null == ec && X > 0 ? ec = null != (l = (0, Z.Ne)(X, Q ? m.Z.BACKGROUND_ACCENT : m.Z.STATUS_DANGER)) ? l : true : null == ec && null != en && (ec = null != (f = (0, Z.jt)({
    guildJoinRequestStatus: en
  })) ? f : true);
  let eu = null != (k = e.lowerBadgeSize) ? k : {
      width: (0, p.OVM)(X)
    },
    [{
      dragging: ed
    }, ep] = (0, a.c)({
      type: x.eD.GUILD,
      item: () => (requestAnimationFrame(() => {
        null == B || B()
      }), {
        type: G.type,
        nodeId: G.id
      }),
      end() {
        null == F || F(), (0, g.V1)(j.ZP.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }),
    eh = (0, c.Ie)(null != eo ? eo : w.lds, null != ea ? 2 : 1),
    [ef, eg] = i.useState(false),
    em = !ee && ef,
    [eb, e_] = i.useState(false),
    [ey, eO] = i.useState(false),
    [ev] = i.useState(() => new d.sW(70, () => eO(true)));
  i.useEffect(() => () => ev.cancel(), [ev]);
  let ej = i.useCallback(() => {
      if (null != V) return void(0, _.uL)(V, {
        state: L
      });
      (0, y.X)(eo, {
        state: L
      })
    }, [eo, V]),
    ex = i.useCallback(() => {
      if (null != V || null == H || q || !et) return;
      let e = (0, b.V)(H.id);
      null != e && h.Z.preload(H.id, e)
    }, [V, H, q, et]),
    eC = (0, u.e7)([v.ZP], () => v.ZP.isCurrentUserGuest(eo)),
    eE = i.useCallback(e => {
      null == H || eC || J(e, H)
    }, [H, J, eC]),
    eS = i.useCallback(e => {
      if ("ArrowLeft" === e.key && null != ea) {
        var t;
        null == (t = document.querySelector("[aria-owns=folder-items-".concat(ea, "]"))) || t.focus()
      }
    }, [ea]),
    eI = i.useCallback(e => {
      if (e) return void ev.delay();
      ev.cancel(), eO(false)
    }, [ev]),
    eP = i.useCallback(e => {
      null == U || U(eo, e)
    }, [eo, U]),
    eN = (0, p.dQu)(p.TVs.modules.guildbar.AVATAR_SIZE);
  if (null == H) return null;
  let eZ = ey || eb ? (0, r.jsx)(E.Z, {
      guild: H,
      show: ey,
      active: W,
      onAnimationStart: function() {
        e_(ey)
      },
      onAnimationRest: function() {
        ey || e_(false)
      }
    }) : (0, r.jsx)(p.LYs, D(R({
      ariaLabel: T.intl.formatToPlainString(T.t["/uzRss"], {
        guildName: H.name,
        mentions: X
      }),
      name: H.name,
      onClick: ej,
      onMouseEnter: function() {
        ee || eg(true)
      },
      onMouseLeave: function() {
        ee || eg(false)
      },
      onMouseDown: ex,
      onContextMenu: eE,
      onKeyDown: eS,
      icon: (0, O.EB)(H, 2 * eN, em && z, true),
      selected: W || em
    }, eh), {
      "aria-setsize": ei,
      "aria-posinset": el,
      "aria-selected": W
    })),
    ew = ed ? (0, r.jsx)(S.OG, {
      children: (0, r.jsx)(P.Z, {})
    }) : (0, r.jsx)(s.animated.div, {
      ref: $ ? e => {
        ep(e)
      } : true,
      "data-dnd-name": H.name,
      style: {
        scale: null == er ? 1 : er
      },
      "data-drop-hovering": ey,
      className: o()(A.blobContainer, {
        [A.sorting]: ee,
        [A.wobble]: ey,
        [A.selected]: ey || W
      }),
      children: (0, r.jsx)(p.aRk, {
        selected: true,
        upperBadge: es,
        lowerBadge: ec,
        lowerBadgeSize: eu,
        children: eZ
      })
    });
  return (0, r.jsxs)(N.H, {
    ref: eP,
    children: [(0, r.jsx)(C.Z, {
      hovered: !ed && em,
      selected: !ed && W,
      unread: !ed && K,
      className: A.pill
    }), (0, r.jsx)(I.Z, {
      guild: H,
      disabled: ee,
      isDragging: ed,
      children: ew
    }), $ ? (0, r.jsx)(S.ZP, {
      name: H.name,
      targetNode: G,
      onDragOverChanged: eI
    }) : null]
  })
})