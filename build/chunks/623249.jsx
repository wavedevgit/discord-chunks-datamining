/** Chunk was on 37082 **/
/** chunk id: 623249, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S,
  y: () => w
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk475595 = require("./475595.js"),
  Chunk667105 = require("./667105.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk912621 = require("./912621.js"),
  Chunk708901 = require("./708901.js");

function E(e) {
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

function S(e) {
  var t;
  let {
    questId: n,
    errorHints: o,
    transitionState: S,
    onClose: w,
    sourceQuestContent: P
  } = e, N = (0, h.sf)(n);
  null == N && w();
  let [A, R] = (0, s.useState)(o), B = (0, h.KX)(), k = (0, g.O5)(), I = null == (t = (0, f.WD)()) ? true : t.getId(), q = (0, i.e7)([d.Z], () => d.Z.useReducedMotion), D = (0, b.g2)({
    useReducedMotion: q,
    className: y.colorTransition
  }), Q = A.filter(e => ["xbox", "playstation"].includes(e.connected_account_type)), V = (0, x.Bz)(N), L = (0, i.e7)([m.Z], () => m.Z.getState().theme), M = (0, l.wj)(L) ? v.BRd.DARK : v.BRd.LIGHT, {
    startConsoleQuest: Z,
    startingConsoleQuest: W
  } = (0, h.GI)({
    questId: N.id,
    beforeRequest: () => {
      D.startAnimation(), k({
        questId: N.id,
        questContent: j.jn.CONNECTIONS_MODAL,
        questContentCTA: g.jZ.DEFIBRILLATOR,
        sourceQuestContent: P
      })
    },
    afterRequest: e => {
      D.stopAnimation(), R(e)
    }
  });
  return <u.Y0X transitionState={S} size={u.CgR.DYNAMIC} className={y.modalRoot} parentComponent={"QuestConsoleConnectionErrorsModal"}>{<u.xBx direction={p.Z.Direction.VERTICAL} separator={false} className={y.modalHeader}>{<div className={y.modalTop}>{<div className={y.iconFrame}><img className={y.icon} alt={""} src={O} /></div>}{<u.olH className={y.closeBtn} onClick={w} />}</div>}{<u.X6q variant={"heading-xl/bold"}>{C.intl.string(C.t.W5lmKi)}</u.X6q>}{<u.Text variant={"text-sm/medium"} color={"header-secondary"} className={y.upperBodyText}>{B.message}</u.Text>}</u.xBx>}{<u.hzk className={y.modalContent}>{<div className={y.contentHeader}>{<u.Text variant={"eyebrow"} color={"header-secondary"}>{C.intl.string(C.t["+/hZMz"])}</u.Text>}{<u.P3F className={a()(y.refreshWrapper, {
            [y.disabled]: W
          })} onClick={Z}>{D.render()}{<u.Text variant={"text-sm/medium"} color={"currentColor"} className={y.colorTransition}>{C.intl.string(C.t.wzzjk5)}</u.Text>}</u.P3F>}</div>}{<div className={y.accountsWrapper}>{<T icon={(0, r.jsx)(u.pzj, {
            size: "sm"
          })} text={C.intl.string(C.t.br3uIi)} />}{<T icon={(0, r.jsx)(u.iWm, {
            size: "sm"
          })} text={C.intl.string(C.t.XF4wuL)} errors={V ? true : Q.map(e => e.message)} gameTile={V ? (0, r.jsx)(u.ua7, {
            "aria-label": N.config.messages.gameTitle,
            text: () => (0, r.jsxs)("div", {
              className: y.tooltip,
              children: [(0, r.jsx)(u.Text, {
                variant: "text-sm/medium",
                children: N.config.messages.gameTitle
              }), (0, r.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: C.intl.string(C.t.STpNEB)
              })]
            }),
            children: e => {
              var t, n;
              return (0, r.jsx)("img", (t = E({}, e), n = n = {
                className: y.gameTile,
                alt: N.config.messages.gameTitle,
                src: (0, _.fh)(N, _.eC.GAME_TILE, M).url
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              }), t))
            }
          }) : null} />}</div>}</u.hzk>}{<u.mzw className={y.footer}>{<c.zx size={c.Ph.MIN} onClick={w} className={y.footerCloseButton}>{C.intl.string(C.t.cpT0Cg)}</c.zx>}{<u.zxk variant={"secondary"} text={C.intl.string(C.t["qiS+xs"])} onClick={() => {
          w(), (0, x.V$)({
            quest: N
          }, {
            content: j.jn.CONNECTIONS_MODAL,
            ctaContent: g.jZ.VIEW_CONSOLE_CONNECTIONS_LINK,
            impressionId: I,
            sourceQuestContent: P
          })
        }} />}</u.mzw>}</u.Y0X>
}

function T(e) {
  let {
    icon: t,
    text: n,
    errors: s = [],
    gameTile: o
  } = e, i = s.length > 0, l = i ? u._3e : u.B_b;
  return <div className={y.connectionRow}>{<div className={a()(y.connectionRowHeader, {
        [y.connectionRowHeaderError]: i
      })}>{<div className={y.connectionRowHeaderContent}>{t}{<u.Text variant={"text-sm/medium"} color={"text-default"}>{n}</u.Text>}</div>}{<div className={y.connectionRowHeaderContent}>{o}{<l color={"currentColor"} size={"sm"} className={a()({
            [y.success]: !i,
            [y.error]: i
          })} />}</div>}</div>}{<div className={y.errorsContainer}>{s.map(e => (0, r.jsxs)("div", {
        className: y.errorRow,
        children: [(0, r.jsx)(u.aNP, {
          size: "sm",
          color: "currentColor",
          className: y.error
        }), (0, r.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: e
        })]
      }, e))}</div>}</div>
}

function w(e) {
  (0, u.ZDy)(async () => {
    let {
      default: t
    } = await Promise.resolve().then(n.bind(n, 623249));
    return n => <t{...E({}, n, e)} />
  })
}